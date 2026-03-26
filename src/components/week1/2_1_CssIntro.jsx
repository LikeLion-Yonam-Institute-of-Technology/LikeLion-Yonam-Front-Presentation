import React from 'react';
import CodePreview from '../common/CodePreview';

export const CssIntro1 = () => (
  <div className="animate-up">
    <h2>CSS: 웹에 생명 불어넣기</h2>
    <p className="lead">Cascading Style Sheets는 HTML에 디자인을 입히는 언어입니다.</p>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
      <div className="pbl-card">
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--ll-orange)' }}>CSS의 역할</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
          <li>🎨 색상, 폰트, 배경 등 시각적 요소</li>
          <li>📏 박스의 크기와 간격 조절</li>
          <li>📱 기기별 반응형 레이아웃 구성</li>
        </ul>
      </div>
      <div className="pbl-card">
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--ll-orange)' }}>CSS의 문법</h3>
        <div style={{ background: '#0D0D0D', padding: '20px', borderRadius: '12px', color: '#E0E0E0', fontFamily: 'var(--font-mono)' }}>
          <span style={{ color: '#9CDCFE' }}>h1</span> {'{'} <br/>
          &nbsp;&nbsp;<span style={{ color: '#9CDCFE' }}>color</span>: <span style={{ color: '#CE9178' }}>orange</span>;<br/>
          &nbsp;&nbsp;<span style={{ color: '#9CDCFE' }}>font-size</span>: <span style={{ color: '#B5CEA8' }}>20px</span>;<br/>
          {'}'}
        </div>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>[선택자] {'{'} [속성]: [값]; {'}'}</p>
      </div>
    </div>
  </div>
);

export const CssIntro2 = () => (
  <div className="animate-up">
    <h2>CSS 연결하는 3가지 방법</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '2rem' }}>
      {[
        { title: '인라인 (Inline)', desc: '태그 안에 직접 작성', code: '<h1 style="...">', color: '#666' },
        { title: '내부 스타일 (Internal)', desc: '<style> 태그 사용', code: '<style>...</style>', color: '#666' },
        { title: '외부 파일 (External)', desc: '외부 파일 연결 (추천!)', code: '<link rel="...">', color: 'var(--ll-orange)' }
      ].map((item) => (
        <div key={item.title} className="pbl-card" style={{ textAlign: 'center', borderTop: `6px solid ${item.color}` }}>
          <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
          <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>{item.desc}</p>
          <code style={{ background: '#f1f1f1', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>{item.code}</code>
        </div>
      ))}
    </div>
  </div>
);
