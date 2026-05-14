import { useCallback, useEffect, useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * LiveReactSandbox
 *
 * Props:
 *   code        - 단일 코드 문자열 (steps 없을 때 사용)
 *   steps       - [{ label: string, code: string, hint?: string }]
 *                  step by step 모드. 앞/뒤 버튼으로 코드 단계 이동.
 *   title       - 헤더 제목
 *   height      - 에디터+프리뷰 영역 높이 (기본 400px)
 *   autoRun     - true면 마운트 시 자동 실행
 *   description - 상단 힌트 바 텍스트
 *   showConsole - true면 하단 콘솔 패널 표시
 *
 * 코드 규칙:
 *   최상위 컴포넌트 이름은 반드시 App (자동으로 렌더링됨)
 */
const LiveReactSandbox = ({
  code: initialCode = 'function App() {\n  return <h1>Hello, React!</h1>;\n}',
  steps,
  title = 'React 실행기',
  height = '400px',
  autoRun = false,
  description = '',
  showConsole = false,
}) => {
  const hasSteps = Array.isArray(steps) && steps.length > 0;

  const [stepIndex, setStepIndex] = useState(0);
  const [code, setCode] = useState(hasSteps ? steps[0].code : initialCode);
  const [iframeKey, setIframeKey] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [logs, setLogs] = useState([]);
  const highlightInnerRef = useRef(null);
  const iframeRef = useRef(null);

  // 스텝 이동 시 코드 교체
  useEffect(() => {
    if (hasSteps) {
      setCode(steps[stepIndex].code);
      setIframeKey(0);
      setHasError(false);
      setLogs([]);
    }
  }, [stepIndex]);

  // 외부에서 code prop이 바뀌면 반영 (steps 없는 경우)
  useEffect(() => {
    if (!hasSteps) {
      setCode(initialCode);
      setIframeKey(0);
      setHasError(false);
      setLogs([]);
    }
  }, [initialCode]);

  const buildIframeContent = useCallback((src) => {
    const consoleBlock = showConsole ? `
      const __logs = [];
      console.log = function(...args) {
        const formatted = args.map(a => {
          if (a === null) return 'null';
          if (a === undefined) return 'undefined';
          if (typeof a === 'object') { try { return JSON.stringify(a, null, 2); } catch(e) { return String(a); } }
          return String(a);
        }).join(' ');
        __logs.push({ type: 'log', value: formatted });
        parent.postMessage({ type: 'console', logs: [...__logs] }, '*');
      };
      console.error = function(...args) {
        __logs.push({ type: 'error', value: args.join(' ') });
        parent.postMessage({ type: 'console', logs: [...__logs] }, '*');
      };
    ` : '';

    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script>
    const { useState } = React;
  </script>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, 'Apple SD Gothic Neo', BlinkMacSystemFont, 'Segoe UI', sans-serif;
      padding: 16px 20px;
      background: #fff;
      color: #111;
      line-height: 1.6;
    }
    h1, h2, h3 { margin-bottom: 0.4em; }
    p { margin-bottom: 0.6em; }
    button { cursor: pointer; font-family: inherit; }
    input, textarea { font-family: inherit; }
    .err {
      background: #fef2f2; border: 1px solid #fecaca;
      color: #dc2626; padding: 10px 14px;
      border-radius: 8px; font-family: monospace;
      font-size: 13px; white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script>${consoleBlock}
    window.onerror = function(msg, src, line, col, err) {
      document.getElementById('root').innerHTML =
        '<div class="err">❌ ' + (err ? err.message : msg) + '</div>';
      parent.postMessage({ type: 'error', message: err ? err.message : msg }, '*');
      return true;
    };
  </script>
  <script type="text/babel" data-presets="react,env">
    ${src}
    try {
      ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
    } catch(e) {
      document.getElementById('root').innerHTML =
        '<div class="err">❌ ' + e.message + '</div>';
      parent.postMessage({ type: 'error', message: e.message }, '*');
    }
  </script>
</body>
</html>`;
  }, [showConsole]);

  const runCode = useCallback(() => {
    setIsRunning(true);
    setHasError(false);
    setLogs([]);

    const handler = (e) => {
      if (!e.data) return;
      if (e.data.type === 'console') setLogs(e.data.logs || []);
      if (e.data.type === 'error') {
        setHasError(true);
        window.removeEventListener('message', handler);
      }
    };
    window.addEventListener('message', handler);
    setIframeKey(k => k + 1);

    setTimeout(() => {
      setIsRunning(false);
      window.removeEventListener('message', handler);
    }, 5000);
  }, []);

  useEffect(() => {
    if (autoRun) {
      const t = setTimeout(runCode, 400);
      return () => clearTimeout(t);
    }
  }, []);

  const currentHint = hasSteps ? steps[stepIndex].hint : null;
  const iframeContent = buildIframeContent(code);

  return (
    <div style={{
      borderRadius: '14px',
      overflow: 'hidden',
      border: '1px solid #e2e8f0',
      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* ── 타이틀 바 ── */}
      <div style={{
        background: '#1e1e2e',
        padding: '9px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          {['#ff5f56', '#ffbd2e', '#27c93f'].map(c => (
            <span key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c }} />
          ))}
        </div>
        <span style={{ color: '#888', fontSize: '0.78rem', fontWeight: 600, flex: 1 }}>{title}</span>
        <span style={{ fontSize: '0.62rem', color: '#61DAFB', fontWeight: 700, letterSpacing: '0.08em' }}>JSX</span>
        <button
          onClick={runCode}
          disabled={isRunning}
          style={{
            background: isRunning ? '#374151' : '#61DAFB',
            color: isRunning ? '#9CA3AF' : '#0f172a',
            border: 'none', borderRadius: '6px',
            padding: '4px 14px', fontSize: '0.72rem',
            fontWeight: 800, cursor: isRunning ? 'not-allowed' : 'pointer',
            letterSpacing: '0.04em', transition: 'all 0.15s',
          }}
        >
          {isRunning ? '⏳' : '▶ RUN'}
        </button>
      </div>

      {/* ── Step 네비게이션 (steps 있을 때만) ── */}
      {hasSteps && (
        <div style={{
          background: '#0f172a',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0,
          borderBottom: '1px solid #1e293b',
        }}>
          <button
            onClick={() => setStepIndex(i => Math.max(0, i - 1))}
            disabled={stepIndex === 0}
            style={{
              background: stepIndex === 0 ? 'transparent' : 'rgba(97,218,251,0.15)',
              color: stepIndex === 0 ? '#374151' : '#61DAFB',
              border: `1px solid ${stepIndex === 0 ? '#1e293b' : 'rgba(97,218,251,0.3)'}`,
              borderRadius: '6px', padding: '4px 10px', fontSize: '0.72rem',
              fontWeight: 700, cursor: stepIndex === 0 ? 'not-allowed' : 'pointer',
              transition: 'all 0.15s',
            }}
          >
            ← 이전
          </button>

          {/* 스텝 도트 */}
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setStepIndex(i)}
                title={s.label}
                style={{
                  width: i === stepIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === stepIndex ? '#61DAFB' : i < stepIndex ? 'rgba(97,218,251,0.4)' : '#374151',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <div style={{ color: '#61DAFB', fontSize: '0.72rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
            {steps[stepIndex].label}
            <span style={{ color: '#374151', marginLeft: '6px' }}>
              {stepIndex + 1}/{steps.length}
            </span>
          </div>

          <button
            onClick={() => setStepIndex(i => Math.min(steps.length - 1, i + 1))}
            disabled={stepIndex === steps.length - 1}
            style={{
              background: stepIndex === steps.length - 1 ? 'transparent' : 'rgba(97,218,251,0.15)',
              color: stepIndex === steps.length - 1 ? '#374151' : '#61DAFB',
              border: `1px solid ${stepIndex === steps.length - 1 ? '#1e293b' : 'rgba(97,218,251,0.3)'}`,
              borderRadius: '6px', padding: '4px 10px', fontSize: '0.72rem',
              fontWeight: 700, cursor: stepIndex === steps.length - 1 ? 'not-allowed' : 'pointer',
              transition: 'all 0.15s',
            }}
          >
            다음 →
          </button>
        </div>
      )}

      {/* ── 힌트 바 (description 또는 현재 step hint) ── */}
      {(description || currentHint) && (
        <div style={{
          background: '#eff6ff',
          padding: '7px 16px',
          fontSize: '0.78rem',
          color: '#1d4ed8',
          fontWeight: 600,
          borderBottom: '1px solid #dbeafe',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexShrink: 0,
        }}>
          <span>💡</span>
          {currentHint || description}
        </div>
      )}

      {/* ── 에디터 + 프리뷰 ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '58% 42%',
        height,
        overflow: 'hidden',
      }}>
        {/* 에디터 */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          borderRight: '1px solid #e2e8f0',
          overflow: 'hidden',
        }}>
          {/* 에디터 레이블 */}
          <div style={{
            padding: '5px 14px',
            fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8',
            letterSpacing: '0.06em',
            borderBottom: '1px solid #f1f5f9',
            background: '#f8fafc',
            flexShrink: 0,
            display: 'flex', justifyContent: 'space-between',
          }}>
            <span>SOURCE</span>
            <span style={{ color: '#FB923C', fontWeight: 600 }}>✏️ 편집 가능</span>
          </div>

          {/* 텍스트에어리어 + 하이라이터 오버레이 */}
          <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
            <textarea
              value={code}
              onChange={e => setCode(e.target.value)}
              spellCheck={false}
              wrap="off"
              onKeyDown={e => {
                if (e.key === 'Tab') {
                  e.preventDefault();
                  const s = e.target.selectionStart;
                  const end = e.target.selectionEnd;
                  const next = code.substring(0, s) + '  ' + code.substring(end);
                  setCode(next);
                  setTimeout(() => { e.target.selectionStart = e.target.selectionEnd = s + 2; }, 0);
                }
                if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                  e.preventDefault();
                  runCode();
                }
              }}
              onScroll={e => {
                if (highlightInnerRef.current) {
                  highlightInnerRef.current.style.transform =
                    `translate(${-e.target.scrollLeft}px, ${-e.target.scrollTop}px)`;
                }
              }}
              style={{
                position: 'absolute', inset: 0,
                padding: '14px 16px',
                fontSize: '13px',
                fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
                lineHeight: '1.5',
                background: 'transparent',
                color: 'transparent',
                caretColor: '#61DAFB',
                border: 'none', outline: 'none', resize: 'none',
                zIndex: 2,
                whiteSpace: 'pre',
                wordWrap: 'normal',
                overflow: 'auto',
                tabSize: 2,
                MozTabSize: 2,
                fontVariantLigatures: 'none',
                fontFeatureSettings: '"liga" 0, "clig" 0, "calt" 0',
                letterSpacing: 0,
              }}
            />
            <div
              style={{
                position: 'absolute', inset: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
              }}
            >
              <div
                ref={highlightInnerRef}
                style={{
                  willChange: 'transform',
                  transform: 'translate(0px, 0px)',
                }}
              >
                <SyntaxHighlighter
                  language="jsx"
                  style={oneLight}
                  customStyle={{
                    margin: 0,
                    padding: '14px 16px',
                    fontSize: '13px',
                    fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
                    lineHeight: '1.5',
                    background: '#f8fafc',
                    overflow: 'visible',
                    tabSize: 2,
                    MozTabSize: 2,
                    letterSpacing: 0,
                  }}
                  codeTagProps={{
                    style: {
                      fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
                      fontSize: '13px',
                      lineHeight: '1.5',
                      tabSize: 2,
                      MozTabSize: 2,
                      fontVariantLigatures: 'none',
                      fontFeatureSettings: '"liga" 0, "clig" 0, "calt" 0',
                      letterSpacing: 0,
                      whiteSpace: 'pre',
                      display: 'block',
                    },
                  }}
                >
                  {code}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          {/* 하단 힌트 바 */}
          <div style={{
            padding: '4px 14px',
            background: '#f1f5f9',
            borderTop: '1px solid #e2e8f0',
            fontSize: '0.6rem', color: '#94a3b8',
            display: 'flex', justifyContent: 'space-between',
            flexShrink: 0,
          }}>
            <span>⌘+Enter 실행</span>
            <span>최상위 컴포넌트: <code>App</code></span>
          </div>
        </div>

        {/* 프리뷰 */}
        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* 프리뷰 레이블 */}
          <div style={{
            padding: '5px 14px',
            fontSize: '0.65rem', fontWeight: 700,
            color: hasError ? '#EF4444' : '#94a3b8',
            letterSpacing: '0.06em',
            borderBottom: '1px solid #f1f5f9',
            background: '#f8fafc',
            flexShrink: 0,
            display: 'flex', justifyContent: 'space-between',
          }}>
            <span>PREVIEW</span>
            {hasError && <span>❌ 에러</span>}
          </div>

          {/* 프리뷰 영역 */}
          {iframeKey > 0 ? (
            <iframe
              ref={iframeRef}
              key={iframeKey}
              srcDoc={iframeContent}
              sandbox="allow-scripts"
              style={{ flex: 1, border: 'none', width: '100%', display: 'block' }}
              title="preview"
            />
          ) : (
            <div style={{
              flex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: '10px',
              background: '#f8fafc',
            }}>
              <span style={{ fontSize: '2.2rem' }}>⚛️</span>
              <span style={{ color: '#94a3b8', fontSize: '0.78rem', fontWeight: 600 }}>▶ RUN 버튼을 눌러 실행</span>
              <span style={{ color: '#cbd5e1', fontSize: '0.68rem' }}>⌘+Enter</span>
            </div>
          )}

          {/* 콘솔 (선택) */}
          {showConsole && (
            <div style={{
              height: '35%', borderTop: '1px solid #1e293b',
              background: '#0f172a',
              display: 'flex', flexDirection: 'column',
              flexShrink: 0,
            }}>
              <div style={{ padding: '4px 14px', fontSize: '0.6rem', color: '#475569', fontWeight: 700, letterSpacing: '0.06em', borderBottom: '1px solid #1e293b' }}>
                CONSOLE
              </div>
              <div style={{
                flex: 1, overflowY: 'auto',
                padding: '8px 14px',
                fontFamily: 'Consolas, Monaco, monospace',
                fontSize: '11.5px', lineHeight: '1.6',
                display: 'flex', flexDirection: 'column', gap: '2px',
              }}>
                {logs.length === 0
                  ? <span style={{ color: '#334155', fontStyle: 'italic' }}>console.log() 출력이 여기 표시됩니다</span>
                  : logs.map((log, i) => (
                    <div key={i} style={{
                      color: log.type === 'error' ? '#F87171' : '#93C5FD',
                      borderLeft: `2px solid ${log.type === 'error' ? '#F87171' : '#4F46E5'}`,
                      paddingLeft: '8px', whiteSpace: 'pre-wrap', wordBreak: 'break-word',
                    }}>
                      {log.value}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveReactSandbox;
