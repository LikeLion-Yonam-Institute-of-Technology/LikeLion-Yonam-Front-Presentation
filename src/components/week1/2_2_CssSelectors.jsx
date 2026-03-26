import React from 'react';
import CodePreview from '../common/CodePreview';

export const CssSelectors1 = () => (
  <div className="animate-up">
    <h2>선택자: 누구를 꾸밀까요?</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '2rem' }}>
      {[
        { name: '전체 선택자', code: '*', desc: '모든 요소 선택' },
        { name: '태그 선택자', code: 'h1', desc: '특정 태그 전체 선택' },
        { name: '클래스 선택자', code: '.item', desc: '클래스 이름으로 선택' }
      ].map(item => (
        <div key={item.name} className="pbl-card">
          <code style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--ll-orange)' }}>{item.code}</code>
          <h4 style={{ marginTop: '1rem' }}>{item.name}</h4>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export const CssSelectors2 = () => (
  <div className="animate-up">
    <h2>Class vs ID: 가장 많이 씁니다!</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '2rem' }}>
      <div className="pbl-card" style={{ borderLeft: '8px solid var(--ll-orange)' }}>
        <h3 style={{ color: 'var(--ll-orange)' }}>클래스 선택 (.)</h3>
        <p style={{ margin: '1rem 0', fontWeight: 500 }}>"그룹핑: 여러 번 사용 가능"</p>
        <code style={{ background: '#f1f1f1', padding: '10px', borderRadius: '8px', display: 'block' }}>.card {'{'} ... {'}'}</code>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>여러 개의 공통된 스타일을 한 번에 줄 때 사용합니다.</p>
      </div>
      <div className="pbl-card" style={{ borderLeft: '8px solid #111' }}>
        <h3 style={{ color: '#111' }}>ID 선택 (#)</h3>
        <p style={{ margin: '1rem 0', fontWeight: 500 }}>"유니크: 단 하나의 요소"</p>
        <code style={{ background: '#f1f1f1', padding: '10px', borderRadius: '8px', display: 'block' }}>#header {'{'} ... {'}'}</code>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>페이지 내에서 오직 한 번만 쓰이는 특별한 아이템에 씁니다.</p>
      </div>
    </div>
  </div>
);
