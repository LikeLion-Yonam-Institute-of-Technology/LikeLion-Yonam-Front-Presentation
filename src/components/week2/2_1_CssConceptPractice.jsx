import React from "react";
import CodePreview from "../common/CodePreview";

const conceptPill = (text, color = "var(--ll-orange)") => (
  <span
    style={{
      display: "inline-block",
      padding: "2px 10px",
      borderRadius: "999px",
      background: "#fff1e8",
      color,
      fontWeight: 800,
      fontSize: "0.95rem",
      margin: "0 2px",
    }}
  >
    {text}
  </span>
);

export const GridConceptPractice = () => (
  <div className="animate-up">
    <div
      className="status-badge"
      style={{
        marginBottom: "1rem",
        width: "fit-content",
        background: "var(--ll-black)",
      }}
    >
      GRID PRACTICE
    </div>
    <h2>Grid는 여러 카드를 한 번에 배치할 때 쓴다</h2>
    <p className="lead">
      반복되는 카드 목록은 {conceptPill("Flex")}보다 {conceptPill("Grid")}로
      보는 것이 더 직관적입니다.
    </p>

    <CodePreview
      language="css"
      title="카드 목록 1열 만들기"
      code={`.profile-card-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
}

.card {
  min-height: 88px;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}`}
      previewHtml={`<section class="profile-card-grid">
  <article class="card"></article>
  <article class="card"></article>
  <article class="card"></article>
</section>`}
      tags={[
        { name: "display: grid", desc: "여러 카드를 격자 형태로 배치합니다." },
        {
          name: "grid-template-columns",
          desc: "현재는 1열 구조로 시작합니다.",
        },
        { name: "gap", desc: "카드 사이 간격을 일정하게 맞춥니다." },
      ]}
    />
  </div>
);

export const PositionConceptPractice = () => (
  <div className="animate-up">
    <div
      className="status-badge"
      style={{
        marginBottom: "1rem",
        width: "fit-content",
        background: "var(--ll-black)",
      }}
    >
      POSITION PRACTICE
    </div>
    <h2>Position은 요소를 겹쳐 올릴 때 쓴다</h2>
    <p className="lead">
      배지처럼 카드 위에 얹는 요소는 {conceptPill("position")}으로 배치합니다.
    </p>

    <CodePreview
      language="css"
      title="이미지 위에 배지 올리기"
      code={`.profile-image {
  position: relative;
  margin: 0;
  width: 220px;
  height: 140px;
  border-radius: 18px;
  background: #dbeafe;
}

.profile-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(0, 0, 0, 0.08);
}`}
      previewHtml={`<figure class="profile-image">
  <span class="profile-badge">React</span>
</figure>`}
      tags={[
        {
          name: "position: relative",
          desc: "absolute가 기준으로 삼는 부모를 만듭니다.",
        },
        {
          name: "position: absolute",
          desc: "배지를 이미지 위에 겹쳐 올립니다.",
        },
        { name: "top / right", desc: "배지의 위치를 세밀하게 조절합니다." },
      ]}
    />
  </div>
);

export const MediaQueryConceptPractice = () => (
  <div className="animate-up">
    <div
      className="status-badge"
      style={{
        marginBottom: "1rem",
        width: "fit-content",
        background: "var(--ll-black)",
      }}
    >
      MEDIA QUERY
    </div>
    <h2>@media는 화면 너비에 따라 배치를 바꾼다</h2>
    <p className="lead">
      카드 목록은 작은 화면에서 1열로 시작하고, {conceptPill("768px")}에서 2열,{" "}
      {conceptPill("1024px")}에서 3열이 됩니다.
    </p>

    <CodePreview
      language="css"
      title="반응형 카드 목록"
      code={`.profile-card-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
}

.card {
  min-height: 76px;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
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
      previewHtml={`<section class="profile-card-grid">
  <article class="card"></article>
  <article class="card"></article>
  <article class="card"></article>
  <article class="card"></article>
  <article class="card"></article>
  <article class="card"></article>
</section>`}
      previewViewportOptions={[
        { label: "기본 화면", width: 1200 },
        { label: "화면 줄여보기!", width: 1024 },
        { label: "더 줄이기!", width: 768 },
      ]}
      tags={[
        { name: "@media", desc: "조건에 따라 다른 CSS를 적용합니다." },
        {
          name: "min-width: 768px",
          desc: "화면이 768px 이상이면 2열이 됩니다.",
        },
        {
          name: "min-width: 1024px",
          desc: "화면이 1024px 이상이면 3열이 됩니다.",
        },
      ]}
    />

    <div
      className="pbl-card"
      style={{
        marginTop: "2rem",
        border: "1px solid #ddd",
        background: "#fdfdfd",
      }}
    >
      <h4 style={{ color: "var(--ll-black)" }}>💻 Local Task</h4>
      <ul
        style={{
          fontSize: "1rem",
          marginTop: "0.5rem",
          paddingLeft: "20px",
          lineHeight: "1.8",
        }}
      >
        <li>
          위 버튼을 눌러 브라우저 너비가 바뀌면 카드가 1열, 2열, 3열로 어떻게
          변하는지 확인해보세요.
        </li>
        <li>
          `768px`, `1024px` 값을 직접 바꿔 보며 어느 시점에 레이아웃이
          바뀌는지도 실험해보세요.
        </li>
      </ul>
    </div>
  </div>
);

export const TransformConceptPractice = () => (
  <div className="animate-up">
    <div
      className="status-badge"
      style={{
        marginBottom: "1rem",
        width: "fit-content",
        background: "var(--ll-black)",
      }}
    >
      TRANSFORM PRACTICE
    </div>
    <h2>transform은 요소를 살짝 움직여 강조할 때 쓴다</h2>
    <p className="lead">
      특정 카드만 눈에 띄게 만들고 싶을 때 {conceptPill("transform")}과 강조
      스타일을 함께 씁니다.
    </p>

    <CodePreview
      language="css"
      title="내 카드 강조하기"
      code={`.profile-card {
  width: 220px;
  border: 2px solid transparent;
  border-radius: 18px;
  background: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.profile-card.is-me {
  border-color: #4a6cf7;
  border-width: 3px;
  box-shadow: 0 14px 28px rgba(74, 108, 247, 0.18);
  transform: translateY(-2px);
}`}
      previewHtml={`<article class="profile-card is-me">
  <div style="height: 120px; background:#f3f4f6; border-radius: 14px;"></div>
</article>`}
      tags={[
        { name: ".is-me", desc: "특정 카드만 따로 강조합니다." },
        { name: "box-shadow", desc: "떠 있는 느낌을 더 강하게 줍니다." },
        { name: "transform", desc: "카드를 살짝 위로 올려 시선을 모읍니다." },
      ]}
    />

    <div
      className="pbl-card"
      style={{
        marginTop: "2rem",
        border: "1px solid #ddd",
        background: "#fdfdfd",
      }}
    >
      <h4 style={{ color: "var(--ll-black)" }}>💻 Local Task</h4>
      <ul
        style={{
          fontSize: "1rem",
          marginTop: "0.5rem",
          paddingLeft: "20px",
          lineHeight: "1.8",
        }}
      >
        <li>카드 하나에 `is-me` 클래스를 붙여 강조 스타일을 적용해보세요.</li>
        <li>
          `translateY(-2px)` 값을 바꾸면서 카드가 얼마나 떠 보이는지
          비교해보세요.
        </li>
      </ul>
    </div>
  </div>
);
