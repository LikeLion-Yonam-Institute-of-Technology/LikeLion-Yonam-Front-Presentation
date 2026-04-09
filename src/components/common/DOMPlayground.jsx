import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * DOMPlayground Component
 * An interactive environment where users can write JS code to manipulate a mini browser DOM.
 * HTML is rendered in an iframe, and JS code is injected to manipulate it.
 */
const DOMPlayground = ({
  initialHtml = '<h1 id="title">Hello World!</h1>\n<p id="text">여기를 바꿔보세요</p>\n<ul id="list">\n  <li>항목 1</li>\n  <li>항목 2</li>\n</ul>',
  initialJs = '// DOM을 조작해보세요!\nconst title = document.querySelector("#title");\ntitle.textContent = "바뀌었다!";',
  title = 'DOM 놀이터',
  height = '380px',
  description = '',
}) => {
  const [jsCode, setJsCode] = useState(initialJs);
  const [htmlCode] = useState(initialHtml);
  const [logs, setLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [executed, setExecuted] = useState(false);
  const highlightRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    setJsCode(initialJs);
    setLogs([]);
    setExecuted(false);
    setIframeKey(prev => prev + 1);
  }, [initialJs, initialHtml]);

  const buildSrcDoc = useCallback((withJs = false) => {
    return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      margin: 16px;
      font-family: 'Pretendard', -apple-system, sans-serif;
      line-height: 1.6;
      background: white;
      color: #111;
    }
    * { box-sizing: border-box; }
    h1, h2, h3 { color: #111; }
    button {
      padding: 8px 16px; border-radius: 8px; border: 1px solid #ddd;
      background: #f8f8f8; cursor: pointer; font-size: 14px;
      transition: all 0.2s;
    }
    button:hover { background: #eee; }
    ul { padding-left: 20px; }
    li { margin: 4px 0; }
    input {
      padding: 8px 12px; border: 1px solid #ddd; border-radius: 6px;
      font-size: 14px; outline: none;
    }
    input:focus { border-color: #FF6000; }
    .highlight-animation {
      animation: domHighlight 0.6s ease-out;
    }
    @keyframes domHighlight {
      0% { outline: 3px solid #FF6000; outline-offset: 2px; background: rgba(255,96,0,0.1); }
      100% { outline: 3px solid transparent; outline-offset: 2px; background: transparent; }
    }
  </style>
</head>
<body>
${htmlCode}
${withJs ? `<script>
  // Console capture
  const __logs = [];
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
    parent.postMessage({ type: 'dom-console', logs: __logs }, '*');
  };

  try {
    ${jsCode}
    parent.postMessage({ type: 'dom-done', logs: __logs }, '*');
  } catch(e) {
    __logs.push({ type: 'error', value: e.message });
    parent.postMessage({ type: 'dom-done', logs: __logs }, '*');
  }
</script>` : ''}
</body>
</html>`;
  }, [htmlCode, jsCode]);

  const runCode = useCallback(() => {
    setIsRunning(true);
    setLogs([]);
    setExecuted(true);

    const handler = (e) => {
      if (e.data?.type === 'dom-console') {
        setLogs(e.data.logs || []);
      }
      if (e.data?.type === 'dom-done') {
        setLogs(e.data.logs || []);
        setIsRunning(false);
        window.removeEventListener('message', handler);
      }
    };
    window.addEventListener('message', handler);

    // Refresh iframe with JS
    setIframeKey(prev => prev + 1);

    // Write to iframe after mount
    setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.srcdoc = buildSrcDoc(true);
      }
    }, 50);

    // Safety timeout
    setTimeout(() => {
      window.removeEventListener('message', handler);
      setIsRunning(false);
    }, 5000);
  }, [buildSrcDoc]);

  const resetDOM = useCallback(() => {
    setLogs([]);
    setExecuted(false);
    setIframeKey(prev => prev + 1);
  }, []);

  const handleCodeChange = (e) => setJsCode(e.target.value);

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
          background: '#0f172a',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #1e293b',
        }}
      >
        <div style={{ display: 'flex', gap: '8px', marginRight: '20px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <span style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: '500' }}>{title}</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.6rem', color: '#38bdf8', fontWeight: 700, letterSpacing: '0.1em', background: 'rgba(56,189,248,0.1)', padding: '2px 8px', borderRadius: '4px' }}>
            DOM
          </span>
          <span style={{ fontSize: '0.6rem', color: '#F7DF1E', fontWeight: 700, letterSpacing: '0.1em', background: 'rgba(247,223,30,0.1)', padding: '2px 8px', borderRadius: '4px' }}>
            JS
          </span>
        </div>
      </div>

      {description && (
        <div style={{
          background: '#fef3c7',
          padding: '10px 20px',
          fontSize: '0.82rem',
          color: '#92400e',
          fontWeight: 600,
          borderBottom: '1px solid #fde68a',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span>🎯</span> {description}
        </div>
      )}

      {/* Body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#fff', minHeight: height }}>
        {/* JS Code Editor */}
        <div style={{ borderRight: '1px solid #f0f0f0', background: '#fafafa', display: 'flex', flexDirection: 'column' }}>
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
            <span>JS CODE</span>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                onClick={resetDOM}
                style={{
                  background: '#6B7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '3px 10px',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                }}
              >
                ↺ RESET
              </button>
              <button
                onClick={runCode}
                disabled={isRunning}
                style={{
                  background: isRunning ? '#6B7280' : '#FF6000',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '3px 10px',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  cursor: isRunning ? 'not-allowed' : 'pointer',
                  letterSpacing: '0.05em',
                }}
              >
                {isRunning ? '⏳' : '▶ RUN'}
              </button>
            </div>
          </div>

          <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
            <textarea
              value={jsCode}
              onChange={handleCodeChange}
              spellCheck={false}
              onKeyDown={(e) => {
                if (e.key === 'Tab') {
                  e.preventDefault();
                  const start = e.target.selectionStart;
                  const end = e.target.selectionEnd;
                  const newCode = jsCode.substring(0, start) + '  ' + jsCode.substring(end);
                  setJsCode(newCode);
                  setTimeout(() => {
                    e.target.selectionStart = e.target.selectionEnd = start + 2;
                  }, 0);
                }
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
                fontFamily: 'Consolas, Monaco, monospace',
                lineHeight: '1.5',
                background: 'transparent',
                color: 'transparent',
                caretColor: '#FF6000',
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
                  fontFamily: 'Consolas, Monaco, monospace',
                  background: 'transparent',
                  lineHeight: '1.5',
                  minHeight: '100%',
                  overflow: 'visible',
                }}
              >
                {jsCode}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>

        {/* Mini Browser + Console */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{
            padding: '8px 20px',
            fontSize: '0.7rem',
            color: '#999',
            fontWeight: 'bold',
            borderBottom: '1px solid #f0f0f0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: executed ? '#10B981' : '#ccc' }} />
            <span>BROWSER PREVIEW</span>
          </div>

          <iframe
            ref={iframeRef}
            key={iframeKey}
            srcDoc={executed ? buildSrcDoc(true) : buildSrcDoc(false)}
            title="DOM playground preview"
            sandbox="allow-scripts"
            style={{
              width: '100%',
              flex: 1,
              border: 'none',
              background: '#fff',
              minHeight: '200px',
            }}
          />

          {/* Console logs */}
          {logs.length > 0 && (
            <div style={{
              background: '#1e1e2e',
              borderTop: '1px solid #333',
              padding: '10px 16px',
              maxHeight: '120px',
              overflowY: 'auto',
              fontFamily: 'Consolas, Monaco, monospace',
              fontSize: '12px',
            }}>
              <div style={{ color: '#555', fontSize: '0.6rem', fontWeight: 700, marginBottom: '6px', letterSpacing: '0.1em' }}>
                CONSOLE
              </div>
              {logs.map((log, i) => (
                <div
                  key={i}
                  style={{
                    color: log.type === 'error' ? '#EF4444' : '#A5B4FC',
                    padding: '2px 6px',
                    borderLeft: `2px solid ${log.type === 'error' ? '#EF4444' : '#6366F1'}`,
                    marginBottom: '2px',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {log.value}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DOMPlayground;
