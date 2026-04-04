import CodePreview from '../common/CodePreview';

const gridPreview = `
<main class="container">
  <section class="profile-card-grid">
    <article class="profile-card">Frontend</article>
    <article class="profile-card">Backend</article>
    <article class="profile-card">Design</article>
    <article class="profile-card">AI</article>
    <article class="profile-card">Data</article>
    <article class="profile-card">PM</article>
  </section>
</main>`;

export const GridAndPosition = () => (
  <div className="animate-up">
    <h2>Grid는 전체 배치, Position은 겹치기</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
      <div className="pbl-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <span style={{ color: '#0F766E', fontWeight: 900, letterSpacing: '0.08em' }}>GRID</span>
        <h3 style={{ fontSize: '1.7rem' }}>반복 카드 목록은 Grid가 읽기 쉽다</h3>
        <p style={{ color: 'var(--ll-dark-grey)', lineHeight: 1.7 }}>
          카드가 여러 개 반복될 때는 한 행에 몇 개를 놓을지 정하는 문제가 먼저입니다. 이건 Flex보다 Grid가 명확합니다.
        </p>
        <ul style={{ paddingLeft: '20px', lineHeight: 1.9, color: 'var(--ll-dark-grey)' }}>
          <li>모바일: 1열</li>
          <li>태블릿: 2열</li>
          <li>데스크톱: 3열</li>
        </ul>
      </div>

      <div className="pbl-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <span style={{ color: '#7C3AED', fontWeight: 900, letterSpacing: '0.08em' }}>POSITION</span>
        <h3 style={{ fontSize: '1.7rem' }}>badge는 absolute로 이미지 위에 올린다</h3>
        <p style={{ color: 'var(--ll-dark-grey)', lineHeight: 1.7 }}>
          부모를 <code>position: relative;</code>로 만들고, 자식 배지를 <code>position: absolute;</code>로 두면 이미지 우측 상단에 안정적으로 고정할 수 있습니다.
        </p>
        <div style={{ padding: '16px', borderRadius: '16px', background: '#F6F3FF', color: '#5B21B6', fontWeight: 700 }}>
          absolute는 문서 흐름을 빠져나가므로, 기준 부모를 찾는 습관이 중요합니다.
        </div>
      </div>
    </div>
  </div>
);

export const ResponsiveDashboardCode = () => (
  <div className="animate-up">
    <h2>반응형 카드 목록 예제</h2>
    <p className="lead">학생들이 최소한 이 정도 코드는 읽고 직접 수정할 수 있도록 연습시키면 됩니다.</p>
    <CodePreview
      language="css"
      title="Grid + Position + Media Query"
      height="430px"
      previewHtml={gridPreview}
      code={`* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
}

.profile-card-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
}

.profile-card {
  min-height: 120px;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  padding: 24px;
  display: flex;
  align-items: end;
  font-weight: 800;
}

@media (min-width: 768px) {
  .profile-card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .profile-card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`}
      tags={[
        { name: 'repeat(1, 1fr)', desc: '모바일에서는 카드 한 장씩 세로로 배치' },
        { name: 'gap', desc: '카드 사이 간격을 일정하게 유지' },
        { name: '@media (min-width: 768px)', desc: '태블릿 이상에서 2열로 확장' },
        { name: '@media (min-width: 1024px)', desc: '데스크톱 이상에서 3열로 확장' },
      ]}
    />
  </div>
);

export const SpecificityAndChecklist = () => (
  <div className="animate-up">
    <h2>CSS 우선순위와 구현 체크리스트</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
      <div className="pbl-card" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <span style={{ color: 'var(--ll-orange)', fontWeight: 900, letterSpacing: '0.08em' }}>SPECIFICITY</span>
        <h3 style={{ fontSize: '1.7rem' }}>강조 카드 한 장만 다르게 보이게 하기</h3>
        <pre
          style={{
            margin: 0,
            padding: '18px',
            borderRadius: '16px',
            background: '#111',
            color: '#E5E7EB',
            fontFamily: 'var(--font-mono)',
            whiteSpace: 'pre-wrap',
            lineHeight: 1.7,
          }}
        >{`.part {
  color: #4a6cf7;
}

.profile-card.is-me {
  border-color: #4a6cf7;
}

.profile-card.is-me .part {
  color: #9ec62f;
}`}</pre>
        <p style={{ color: 'var(--ll-dark-grey)', lineHeight: 1.7 }}>
          클래스 조합이 더 구체적이기 때문에 <code>.profile-card.is-me .part</code>가 기본 <code>.part</code>를 덮어씁니다.
        </p>
      </div>

      <div className="pbl-card" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <span style={{ color: 'var(--ll-orange)', fontWeight: 900, letterSpacing: '0.08em' }}>CHECKLIST</span>
        <h3 style={{ fontSize: '1.7rem' }}>학생 확인 질문</h3>
        <ul style={{ paddingLeft: '20px', lineHeight: 2, color: 'var(--ll-dark-grey)' }}>
          <li>왜 카드 목록은 Flex보다 Grid가 더 읽기 쉬운가?</li>
          <li>badge가 이미지 위에 올라가려면 어느 부모에 relative가 필요한가?</li>
          <li>1열, 2열, 3열이 되는 기준 너비를 스스로 설명할 수 있는가?</li>
          <li>강조 카드 하나만 색을 바꾸려면 어떤 클래스를 추가해야 하는가?</li>
          <li>카드 내부 텍스트 정렬은 왜 Flex column이 적합한가?</li>
        </ul>
      </div>
    </div>
  </div>
);
