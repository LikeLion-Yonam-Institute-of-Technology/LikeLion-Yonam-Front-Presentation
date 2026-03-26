import React from 'react';

export const WrapUp1 = () => (
  <div className="animate-up">
    <h2>오늘의 학습 요약</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginTop: '2rem' }}>
      {[
        { title: 'HTML', desc: '의미와 구조', list: ['시맨틱 태그 (Semantic)', '기본 문서 구조'] },
        { title: 'CSS', desc: '시각적 스타일', list: ['선택자 (Selector)', '폰트, 색상, 배경 등'] },
        { title: 'Box Model', desc: '공간의 이해', list: ['여백 (Padding/Margin)', '플렉스박스 (Flexbox)'] }
      ].map(item => (
        <div key={item.title} className="pbl-card">
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--ll-orange)' }}>{item.title}</h3>
          <p style={{ fontWeight: 700, marginBottom: '1rem' }}>{item.desc}</p>
          <ul style={{ fontSize: '0.85rem', color: '#666', paddingLeft: '18px' }}>
            {item.list.map(l => <li key={l}>{l}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export const WrapUp2 = () => (
  <div className="animate-up" style={{ textAlign: 'center' }}>
    <h2 style={{ justifyContent: 'center' }}>다음 세션 (Next Session)</h2>
    <p className="lead" style={{ marginTop: '2rem', fontSize: '1.5rem', fontWeight: 800 }}>2주차: CSS 레이아웃 & 반응형 설계</p>
    <div className="pbl-card" style={{ maxWidth: '650px', margin: '3rem auto', textAlign: 'left' }}>
      
      <div style={{ marginBottom: '2.5rem' }}>
        <h4 style={{ marginBottom: '0.8rem', color: 'var(--ll-orange)', fontSize: '1.2rem', fontWeight: 900 }}>🎯 다음 주 미션 (PBL)</h4>
        <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--ll-black)' }}>
          전체 아기 사자 명단을 보여주는 "메인 대시보드" 레이아웃 설계<br/>
          <span style={{ fontSize: '0.95rem', color: 'var(--ll-dark-grey)' }}>(모바일/데스크톱 반응형 대응)</span>
        </p>
      </div>

      <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 800, color: 'var(--ll-black)' }}>🚀 다음 주를 위한 선행 학습 키워드</h4>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '1.05rem', paddingLeft: '20px' }}>
        <li>🔹 Flex/Grid 심화</li>
        <li>🔹 Position (relative/absolute)</li>
        <li>🔹 Media Query (@media)</li>
        <li>🔹 CSS 우선순위 (Specificity)</li>
      </ul>

      <div style={{ marginTop: '2.5rem', padding: '15px', background: 'var(--ll-bg-soft)', borderRadius: '12px', border: '1px solid var(--ll-border)', fontSize: '0.95rem', color: 'var(--ll-dark-grey)' }}>
         🦁 "코드를 다 외우기보다, '이런 목적으로 쓰는구나' 하는 감각만 익혀오세요!"
      </div>
    </div>
    <p style={{ opacity: 0.6, fontSize: '1rem', fontWeight: 600 }}>수고하셨습니다. 다음 주에 만나요!</p>
  </div>
);
