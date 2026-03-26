import React from 'react';
import CodePreview from '../common/CodePreview';

export const Flexbox1 = () => (
  <div className="animate-up">
    <h2>Flexbox: 1차원 레이아웃 마법</h2>
    <p className="lead">부모(Container)와 자식(Item)의 관계만 기억하세요!</p>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '2rem' }}>
      <div className="pbl-card">
        <h3 style={{ marginBottom: '1.5rem' }}>핵심 속성</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
          <li><code style={{ color: 'var(--ll-orange)' }}>display: flex;</code> <span style={{ fontSize: '0.9rem', color: '#666' }}>"마법 시작"</span></li>
          <li><code style={{ color: 'var(--ll-orange)' }}>justify-content;</code> <span style={{ fontSize: '0.9rem', color: '#666' }}>메인축 정렬 (수평)</span></li>
          <li><code style={{ color: 'var(--ll-orange)' }}>align-items;</code> <span style={{ fontSize: '0.9rem', color: '#666' }}>교차축 정렬 (수직)</span></li>
        </ul>
      </div>
      <div className="pbl-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '15px' }}>
         <div style={{ display: 'flex', justifyContent: 'space-around', background: '#f1f1f1', padding: '20px', borderRadius: '12px', border: '2px dashed #ccc' }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ width: '50px', height: '50px', background: 'var(--ll-orange)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 900 }}>{i}</div>
            ))}
         </div>
         <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#999' }}>justify-content: space-around;</p>
      </div>
    </div>
  </div>
);

export const Flexbox2 = () => (
  <div className="animate-up">
    <h2>중앙 정렬의 공식</h2>
    <p className="lead">가장 많이 쓰이는 Flexbox 조합입니다.</p>
    <CodePreview 
      code={`.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}`}
      title="완벽한 중앙 정렬"
      tags={[
        { name: 'display: flex', desc: '아이템들을 1차원으로 정렬 시작' },
        { name: 'justify-content', desc: '가로(메인축) 정렬 (가운데: center)' },
        { name: 'align-items', desc: '세로(교차축) 정렬 (가운데: center)' },
        { name: 'gap', desc: '아이템 사이의 간격' }
      ]}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '20px', 
        height: '100%',
        background: 'var(--ll-bg-soft)',
        borderRadius: '12px'
      }}>
        <div style={{ width: '80px', height: '80px', background: 'var(--ll-orange)', borderRadius: '12px', boxShadow: '0 8px 16px rgba(255, 96, 0, 0.2)' }} />
        <div style={{ width: '80px', height: '80px', background: '#111', borderRadius: '12px' }} />
      </div>
    </CodePreview>
  </div>
);
