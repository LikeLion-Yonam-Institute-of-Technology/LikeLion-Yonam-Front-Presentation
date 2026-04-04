import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * CodePreview Component
 * Displays syntax-highlighted editable code alongside a live-updating preview.
 * - HTML code: rendered directly in iframe
 * - CSS code: rendered with previewHtml (or default sample HTML) in iframe
 * - children: shown as initial demo, replaced by live iframe once code is edited
 */
const CodePreview = ({
  code: initialCode,
  title = '실행 결과',
  isolate = true,
  tags = [],
  language = 'html',
  height = '320px',
  previewHtml = '',
  children,
}) => {
  const [code, setCode] = useState(initialCode || '');
  const [hasEdited, setHasEdited] = useState(false);
  const highlightRef = useRef(null);

  // 외부 프롭이 변경되면 에디터 내용도 동기화
  useEffect(() => {
    setCode(initialCode || '');
    setHasEdited(false);
  }, [initialCode]);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    setHasEdited(true);
  };

  // 언어에 따라 적절한 srcDoc 생성
  const srcDoc = useMemo(() => {
    if (language === 'css') {
      // CSS 코드일 때: style 태그로 감싸고 previewHtml 또는 기본 HTML을 body에 삽입
      const html =
        previewHtml ||
        `
        <div class="demo-container">
          <div class="box" id="header">Sample Box</div>
          <div class="box box2">Box 2</div>
          <p class="text">Sample text content</p>
        </div>`;

      return `<!DOCTYPE html>
        <html lang="ko">
        <head>
          <meta charset="UTF-8">
          <style>
            body { margin: 16px; font-family: sans-serif; line-height: 1.5; background: white; }
            * { box-sizing: border-box; }
            ${code}
          </style>
        </head>
        <body>${html}</body>
        </html>`;
    }

    // HTML 코드일 때: 그대로 body에 삽입
    return isolate
      ? `<!DOCTYPE html>
           <html lang="ko">
           <head>
             <meta charset="UTF-8">
             <style>
               body { margin: 16px; font-family: sans-serif; line-height: 1.5; background: white; }
               * { box-sizing: border-box; }
             </style>
           </head>
           <body>${code}</body>
           </html>`
      : code;
  }, [code, language, isolate, previewHtml]);

  const showChildren = children && !hasEdited;

  return (
    <div
      className="code-preview-container animate-fade-in"
      style={{
        marginTop: '1.5rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #eee',
      }}
    >
      <div
        className="code-preview-header"
        style={{ background: '#f8f9fa', padding: '12px 20px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee' }}
      >
        <div style={{ display: 'flex', gap: '8px', marginRight: '20px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <span style={{ color: '#666', fontSize: '0.8rem', fontWeight: '500', letterSpacing: '0.02em' }}>{title}</span>
        {hasEdited && (
          <span
            style={{
              marginLeft: 'auto',
              fontSize: '0.7rem',
              color: '#10B981',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            ● LIVE
          </span>
        )}
      </div>

      <div className="code-preview-body" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', background: '#fff', minHeight: height }}>
        <div className="code-section" style={{ borderRight: '1px solid #f0f0f0', background: '#fafafa', display: 'flex', flexDirection: 'column' }}>
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
            <span>{language === 'css' ? 'CSS SOURCE' : 'HTML SOURCE'}</span>
            <span style={{ color: 'var(--ll-orange)' }}>✏️ 편집 가능</span>
          </div>

          <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
            {/* 실제 입력받는 투명한 텍스트 에디터 */}
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
                  setHasEdited(true);
                  setTimeout(() => {
                    e.target.selectionStart = e.target.selectionEnd = start + 2;
                  }, 0);
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
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                margin: 0,
                padding: '20px',
                fontSize: '13px',
                fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
                lineHeight: '1.5',
                background: 'transparent',
                color: 'transparent',
                caretColor: 'var(--ll-orange)',
                border: 'none',
                outline: 'none',
                resize: 'none',
                zIndex: 2,
                whiteSpace: 'pre',
                wordWrap: 'normal',
                overflow: 'auto',
              }}
            />

            {/* 아래에 깔리는 Syntax Highlighter */}
            <div
              ref={highlightRef}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                overflow: 'hidden',
              }}
            >
              <SyntaxHighlighter
                language={language}
                style={oneLight}
                customStyle={{
                  margin: 0,
                  padding: '20px',
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

        <div className="result-section" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '8px 20px', fontSize: '0.7rem', color: '#999', fontWeight: 'bold', borderBottom: '1px solid #f0f0f0' }}>
            BROWSER VIEW
          </div>
          {showChildren ? (
            <div
              style={{
                flex: 1,
                padding: '20px',
                overflow: 'auto',
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {children}
            </div>
          ) : (
            <iframe
              srcDoc={srcDoc}
              title="preview"
              sandbox="allow-scripts"
              style={{
                width: '100%',
                flex: 1,
                minHeight: height,
                border: 'none',
                background: '#fff',
              }}
            />
          )}
        </div>
      </div>

      {/* Tag Reference Footer */}
      {tags.length > 0 && (
        <div className="tag-reference-footer" style={{ background: '#fcfcfc', borderTop: '1px solid #eee', padding: '18px 24px' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--ll-orange)', fontWeight: 900, letterSpacing: '0.1em', marginBottom: '12px' }}>
            TAG REFERENCE
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
            {tags.map((tag, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                <code
                  style={{
                    fontSize: '0.9rem',
                    color: '#111',
                    fontWeight: '800',
                    background: '#f0f0f0',
                    padding: '2px 6px',
                    borderRadius: '4px',
                  }}
                >
                  &lt;{tag.name}&gt;
                </code>
                <span style={{ fontSize: '0.85rem', color: '#333', fontWeight: '500' }}>{tag.desc}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodePreview;
