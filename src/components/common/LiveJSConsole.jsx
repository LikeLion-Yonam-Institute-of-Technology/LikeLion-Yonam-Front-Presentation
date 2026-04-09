import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * LiveJSConsole Component
 * Displays an editable JS code editor with a virtual console that captures console.log output.
 * Code is executed safely inside an invisible iframe sandbox.
 */
const LiveJSConsole = ({
  code: initialCode = '',
  title = 'JavaScript 실행기',
  height = '340px',
  autoRun = false,
  description = '',
}) => {
  const [code, setCode] = useState(initialCode);
  const [logs, setLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [hasError, setHasError] = useState(false);
  const highlightRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    setCode(initialCode);
    setLogs([]);
    setHasError(false);
  }, [initialCode]);

  const runCode = useCallback(() => {
    setIsRunning(true);
    setLogs([]);
    setHasError(false);

    // Build the iframe content with console.log interception
    const iframeContent = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body><script>
  const __logs = [];
  const __origConsole = console.log;
  console.log = function(...args) {
    const formatted = args.map(a => {
      if (a === null) return 'null';
      if (a === undefined) return 'undefined';
      if (typeof a === 'object') {
        try { return JSON.stringify(a, null, 2); } catch { return String(a); }
      }
      return String(a);
    }).join(' ');
    __logs.push({ type: 'log', value: formatted });
    parent.postMessage({ type: 'console', logs: __logs }, '*');
  };
  console.error = function(...args) {
    __logs.push({ type: 'error', value: args.join(' ') });
    parent.postMessage({ type: 'console', logs: __logs }, '*');
  };

  // Timeout protection
  const __timeout = setTimeout(() => {
    parent.postMessage({ type: 'timeout' }, '*');
  }, 3000);

  try {
    ${code}
  } catch(e) {
    __logs.push({ type: 'error', value: e.message });
    parent.postMessage({ type: 'console', logs: __logs }, '*');
  }
  clearTimeout(__timeout);
  parent.postMessage({ type: 'done', logs: __logs }, '*');
</script></body></html>`;

    // Listen for messages from iframe
    const handler = (e) => {
      if (e.data?.type === 'console' || e.data?.type === 'done') {
        setLogs(e.data.logs || []);
        if (e.data.logs?.some(l => l.type === 'error')) setHasError(true);
        if (e.data.type === 'done') {
          setIsRunning(false);
          window.removeEventListener('message', handler);
        }
      }
      if (e.data?.type === 'timeout') {
        setLogs(prev => [...prev, { type: 'error', value: '⏰ 실행 시간 초과 (무한 루프 의심)' }]);
        setHasError(true);
        setIsRunning(false);
        window.removeEventListener('message', handler);
      }
    };
    window.addEventListener('message', handler);

    // Create hidden iframe for execution
    if (iframeRef.current) {
      iframeRef.current.remove();
    }
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.sandbox = 'allow-scripts';
    document.body.appendChild(iframe);
    iframeRef.current = iframe;
    iframe.srcdoc = iframeContent;

    // Safety: auto-cleanup after 5s
    setTimeout(() => {
      window.removeEventListener('message', handler);
      setIsRunning(false);
    }, 5000);
  }, [code]);

  useEffect(() => {
    if (autoRun && initialCode) {
      const timer = setTimeout(runCode, 500);
      return () => clearTimeout(timer);
    }
  }, [initialCode, autoRun]);

  useEffect(() => {
    return () => {
      if (iframeRef.current) iframeRef.current.remove();
    };
  }, []);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div
      className="animate-fade-in"
      style={{
        marginTop: '1.5rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #eee',
      }}
    >
      {/* Header */}
      <div
        style={{
          background: '#1e1e2e',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #333',
        }}
      >
        <div style={{ display: 'flex', gap: '8px', marginRight: '20px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <span style={{ color: '#888', fontSize: '0.8rem', fontWeight: '500', letterSpacing: '0.02em' }}>
          {title}
        </span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.65rem', color: '#F7DF1E', fontWeight: 700, letterSpacing: '0.1em' }}>
            JAVASCRIPT
          </span>
        </div>
      </div>

      {/* Description */}
      {description && (
        <div style={{
          background: '#f0f7ff',
          padding: '10px 20px',
          fontSize: '0.82rem',
          color: '#1e40af',
          fontWeight: 600,
          borderBottom: '1px solid #dbeafe',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span>💡</span> {description}
        </div>
      )}

      {/* Body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', background: '#fff', minHeight: height }}>
        {/* Code Editor */}
        <div style={{ borderRight: '1px solid #f0f0f0', background: '#fafafa', display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              padding: '8px 20px',
              fontSize: '0.7rem',
              color: '#999',
              fontWeight: 'bold',
              borderBottom: '1px solid #f0f0f0',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>JS SOURCE</span>
            <span style={{ color: 'var(--ll-orange)' }}>✏️ 편집 가능</span>
          </div>

          <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
            <textarea
              value={code}
              onChange={handleCodeChange}
              spellCheck={false}
              onKeyDown={(e) => {
                if (e.key === 'Tab') {
                  e.preventDefault();
                  const start = e.target.selectionStart;
                  const end = e.target.selectionEnd;
                  const newCode = code.substring(0, start) + '  ' + code.substring(end);
                  setCode(newCode);
                  setTimeout(() => {
                    e.target.selectionStart = e.target.selectionEnd = start + 2;
                  }, 0);
                }
                // Ctrl/Cmd + Enter to run
                if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                  e.preventDefault();
                  runCode();
                }
              }}
              onScroll={(e) => {
                if (highlightRef.current) {
                  highlightRef.current.scrollTop = e.target.scrollTop;
                  highlightRef.current.scrollLeft = e.target.scrollLeft;
                }
              }}
              style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                margin: 0, padding: '20px',
                fontSize: '13px',
                fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
                lineHeight: '1.5',
                background: 'transparent',
                color: 'transparent',
                caretColor: '#F7DF1E',
                border: 'none', outline: 'none', resize: 'none',
                zIndex: 2,
                whiteSpace: 'pre',
                wordWrap: 'normal',
                overflow: 'auto',
              }}
            />
            <div
              ref={highlightRef}
              style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                pointerEvents: 'none',
                overflow: 'hidden',
              }}
            >
              <SyntaxHighlighter
                language="javascript"
                style={oneLight}
                customStyle={{
                  margin: 0, padding: '20px',
                  fontSize: '13px',
                  fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
                  background: 'transparent',
                  lineHeight: '1.5',
                  minHeight: '100%',
                  overflow: 'visible',
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>

        {/* Console Output */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{
            padding: '8px 20px',
            fontSize: '0.7rem',
            color: '#999',
            fontWeight: 'bold',
            borderBottom: '1px solid #f0f0f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <span>CONSOLE OUTPUT</span>
            <button
              onClick={runCode}
              disabled={isRunning}
              style={{
                background: isRunning ? '#6B7280' : '#10B981',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '4px 14px',
                fontSize: '0.7rem',
                fontWeight: 800,
                cursor: isRunning ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.2s',
                letterSpacing: '0.05em',
              }}
            >
              {isRunning ? '⏳ 실행중...' : '▶ RUN'}
            </button>
          </div>

          <div style={{
            flex: 1,
            padding: '16px 20px',
            background: '#1e1e2e',
            fontFamily: 'Consolas, Monaco, monospace',
            fontSize: '13px',
            lineHeight: '1.6',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}>
            {logs.length === 0 && !isRunning && (
              <div style={{ color: '#555', fontStyle: 'italic', fontSize: '0.8rem' }}>
                ▶ RUN 버튼을 눌러 코드를 실행하세요 (⌘+Enter)
              </div>
            )}
            {logs.map((log, i) => (
              <div
                key={i}
                style={{
                  color: log.type === 'error' ? '#EF4444' : '#A5B4FC',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  background: log.type === 'error' ? 'rgba(239,68,68,0.1)' : 'rgba(165,180,252,0.05)',
                  borderLeft: `3px solid ${log.type === 'error' ? '#EF4444' : '#6366F1'}`,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  animation: 'fadeIn 0.3s ease-out',
                }}
              >
                <span style={{ color: '#555', marginRight: '8px', fontSize: '0.7rem' }}>
                  {log.type === 'error' ? '❌' : '›'}
                </span>
                {log.value}
              </div>
            ))}
            {isRunning && (
              <div style={{ color: '#F7DF1E', animation: 'pulse 1s infinite' }}>
                ⏳ 실행 중...
              </div>
            )}
          </div>

          {/* Keyboard shortcut hint */}
          <div style={{
            padding: '6px 20px',
            background: '#161622',
            borderTop: '1px solid #333',
            fontSize: '0.65rem',
            color: '#555',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <span>⌘+Enter 실행</span>
            <span>Tab 들여쓰기</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveJSConsole;
