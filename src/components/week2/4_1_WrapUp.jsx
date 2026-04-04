import React from 'react';

export const Week2WrapUpSummary = () => (
  <div className="animate-up">
    <h2>오늘의 학습 요약</h2>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '24px',
        marginTop: '2rem',
      }}
    >
      {[
        {
          title: 'Flexbox',
          desc: '카드 안쪽 정렬',
          list: ['주축과 교차축', 'justify-content / align-items', '순서와 줄바꿈'],
        },
        {
          title: 'Grid / Position',
          desc: '배치와 겹치기',
          list: ['카드 목록 배치', 'absolute 배지 위치', 'relative 기준 잡기'],
        },
        {
          title: 'Responsive',
          desc: '화면에 따라 변화',
          list: ['@media 기본 개념', '카드 열 수 변경', '다음 PBL 준비'],
        },
      ].map((item) => (
        <div key={item.title} className="pbl-card">
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--ll-orange)' }}>{item.title}</h3>
          <p style={{ fontWeight: 700, marginBottom: '1rem' }}>{item.desc}</p>
          <ul style={{ fontSize: '0.9rem', color: '#666', paddingLeft: '18px', lineHeight: 1.8 }}>
            {item.list.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export const Week2NextSession = () => (
  <div className="animate-up" style={{ textAlign: 'center' }}>
    <h2 style={{ justifyContent: 'center' }}>다음 세션 (Next Session)</h2>
    <p className="lead" style={{ marginTop: '2rem', fontSize: '1.5rem', fontWeight: 800 }}>
      3주차: JavaScript 기초 & DOM 조작
    </p>

    <div className="pbl-card" style={{ maxWidth: '720px', margin: '3rem auto', textAlign: 'left' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h4
          style={{
            marginBottom: '0.8rem',
            color: 'var(--ll-orange)',
            fontSize: '1.2rem',
            fontWeight: 900,
          }}
        >
          다음 주 핵심 내용
        </h4>
        <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
          이제 화면을 배치하는 단계에서 넘어가, JavaScript로 직접 데이터를 추가하고 삭제하는
          인터랙션을 만들게 됩니다.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '160px 1fr',
          border: '1px solid var(--ll-border)',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '1.75rem',
        }}
      >
        <div
          style={{
            background: 'var(--ll-bg-soft)',
            padding: '18px 20px',
            fontWeight: 800,
            color: 'var(--ll-black)',
            borderRight: '1px solid var(--ll-border)',
          }}
        >
          학습 키워드
        </div>
        <div style={{ padding: '18px 20px', lineHeight: 1.7 }}>
          변수/함수, 배열·객체, DOM 선택/조작, 이벤트 처리
        </div>

        <div
          style={{
            background: 'var(--ll-bg-soft)',
            padding: '18px 20px',
            fontWeight: 800,
            color: 'var(--ll-black)',
            borderTop: '1px solid var(--ll-border)',
            borderRight: '1px solid var(--ll-border)',
          }}
        >
          PBL 미션
        </div>
        <div style={{ padding: '18px 20px', lineHeight: 1.7, borderTop: '1px solid var(--ll-border)' }}>
          JavaScript로 아기사자 명단을 추가, 삭제하는 인터랙티브 대시보드 만들기
        </div>
      </div>

      <div
        style={{
          padding: '15px',
          background: 'var(--ll-bg-soft)',
          borderRadius: '12px',
          border: '1px solid var(--ll-border)',
          fontSize: '0.95rem',
          color: 'var(--ll-dark-grey)',
        }}
      >
        “정적인 카드에서 끝나지 않고, 버튼을 누르면 실제로 화면이 바뀌는 경험”까지 연결합니다.
      </div>
    </div>

    <p style={{ opacity: 0.6, fontSize: '1rem', fontWeight: 600 }}>수고하셨습니다. 다음 주에 만나요!</p>
  </div>
);
