import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * CodePreview Component
 * Displays syntax-highlighted code alongside its rendered result.
 * Optimized for presentation slides (high readability, non-interactive).
 */
const CodePreview = ({ code, title = "실행 결과", isolate = true, tags = [] }) => {
  // srcDoc allows us to render HTML independently of the main app's CSS
  const srcDoc = isolate 
    ? `<!DOCTYPE html>
       <html lang="ko">
       <head>
         <meta charset="UTF-8">
         <style>
           body { 
             margin: 16px; 
             font-family: sans-serif; 
             line-height: 1.5;
             background: white;
           }
           * { box-sizing: border-box; }
         </style>
       </head>
       <body>${code}</body>
       </html>`
    : code;

  return (
    <div className="code-preview-container animate-fade-in" style={{ marginTop: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eee' }}>
      {/* Decorative Browser-like Header */}
      <div className="code-preview-header" style={{ background: '#f8f9fa', padding: '12px 20px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', gap: '8px', marginRight: '20px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></span>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></span>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></span>
        </div>
        <span style={{ color: '#666', fontSize: '0.8rem', fontWeight: '500', letterSpacing: '0.02em' }}>{title}</span>
      </div>
      
      <div className="code-preview-body" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', background: '#fff' }}>
        {/* ... (existing code remains) */}
        <div className="code-section" style={{ borderRight: '1px solid #f0f0f0', background: '#fafafa' }}>
          <div style={{ padding: '8px 20px', fontSize: '0.7rem', color: '#999', fontWeight: 'bold', borderBottom: '1px solid #f0f0f0' }}>HTML SOURCE</div>
          <SyntaxHighlighter 
            language="html" 
            style={oneLight}
            customStyle={{ 
              margin: 0, 
              padding: '20px', 
              fontSize: '0.95rem', 
              background: 'transparent',
              lineHeight: '1.6',
              height: '320px'
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>

        {/* Live Result Area */}
        <div className="result-section" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '8px 20px', fontSize: '0.7rem', color: '#999', fontWeight: 'bold', borderBottom: '1px solid #f0f0f0' }}>BROWSER VIEW</div>
          <iframe
            srcDoc={srcDoc}
            title="preview"
            style={{ 
              width: '100%', 
              height: '320px', 
              border: 'none',
              background: '#fff',
              color: '#111' // Ensure base text color inside iframe
            }}
          />
        </div>
      </div>

      {/* Tag Reference Footer */}
      {tags.length > 0 && (
        <div className="tag-reference-footer" style={{ background: '#fcfcfc', borderTop: '1px solid #eee', padding: '18px 24px' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--ll-orange)', fontWeight: 900, letterSpacing: '0.1em', marginBottom: '12px' }}>TAG REFERENCE</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
            {tags.map((tag, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                <code style={{ fontSize: '0.9rem', color: '#111', fontWeight: '800', background: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>&lt;{tag.name}&gt;</code>
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
