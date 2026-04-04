import React from 'react';
import CodePreview from '../common/CodePreview';

const missionHtml = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>아기 사자 명단</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main class="container">
      <section class="profile-card-grid">
        <article class="profile-card is-me">
          <figure class="profile-image">
            <span class="profile-badge">React</span>
            <img src="https://picsum.photos/seed/1/200/200" />
          </figure>
          <section class="profile-content">
            <h2 class="name">김아기사자</h2>
            <p class="part">Frontend</p>
            <p class="introduction">
              구조적인 UI를 고민하는 프론트엔드 개발자입니다.
            </p>
          </section>
        </article>

        <article class="profile-card">
          <figure class="profile-image">
            <span class="profile-badge">Spring</span>
            <img src="https://picsum.photos/seed/2/200/200" />
          </figure>
          <section class="profile-content">
            <h2 class="name">박아기사자</h2>
            <p class="part">Backend</p>
            <p class="introduction">안정적인 서버 구조에 관심이 많습니다.</p>
          </section>
        </article>

        <article class="profile-card">
          <figure class="profile-image">
            <span class="profile-badge">Figma</span>
            <img src="https://picsum.photos/seed/3/200/200" />
          </figure>
          <section class="profile-content">
            <h2 class="name">이아기사자</h2>
            <p class="part">Design</p>
            <p class="introduction">사용자 관점에서 디자인을 고민합니다.</p>
          </section>
        </article>
      </section>

      <section class="profile-detail-list">
        <section class="profile-detail">
          <header class="detail-header">
            <h1 class="detail-name">김아기사자</h1>
            <span class="detail-part">Frontend</span>
            <p class="detail-organization">LION TRACK</p>
          </header>

          <section class="detail-section">
            <h3>자기소개</h3>
            <p>HTML과 CSS를 처음 배우며 구조적인 UI 설계에 흥미를 느끼고 있습니다.</p>
          </section>

          <section class="detail-section">
            <h3>연락처</h3>
            <ul class="contact-list">
              <li>Email: lionkim@example.com</li>
              <li>Phone: 010-1234-5678</li>
              <li><a href="https://example.com">https://example.com</a></li>
            </ul>
          </section>

          <section class="detail-section">
            <h3>관심 기술</h3>
            <ul class="skill-list">
              <li>HTML / CSS</li>
              <li>JavaScript</li>
              <li>React (학습 중)</li>
            </ul>
          </section>
        </section>
      </section>
    </main>
  </body>
</html>`;

const missionCss = `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f5f7fa;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.profile-card-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
}

.profile-card {
  width: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  border: 2px solid transparent;
}

.profile-image {
  position: relative;
  margin: 0;
}

.profile-image img {
  width: 100%;
  display: block;
}

.profile-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.profile-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.name {
  margin: 0;
  font-size: 20px;
}

.part {
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  color: #4a6cf7;
}

.introduction {
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
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
}

.profile-detail-list {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.profile-detail {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.detail-header {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-name {
  margin: 0;
  font-size: 28px;
}

.detail-part {
  font-size: 14px;
  font-weight: bold;
  color: #4a6cf7;
}

.detail-organization {
  margin: 0;
  font-size: 13px;
  color: #666;
}

.detail-section h3 {
  margin: 0 0 8px;
  font-size: 16px;
}

.detail-section p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
}

.contact-list,
.skill-list {
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contact-list li,
.skill-list li {
  font-size: 14px;
}

.profile-card.is-me {
  border-color: #4a6cf7;
  border-width: 3px;
  box-shadow: 0 14px 28px rgba(74, 108, 247, 0.18);
  transform: translateY(-2px);
}`;

const previewHtml = `<main class="container">
  <section class="profile-card-grid">
    <article class="profile-card is-me">
      <figure class="profile-image">
        <span class="profile-badge">React</span>
        <img src="https://picsum.photos/seed/1/200/200" alt="김아기사자" />
      </figure>
      <section class="profile-content">
        <h2 class="name">김아기사자</h2>
        <p class="part">Frontend</p>
        <p class="introduction">구조적인 UI를 고민하는 프론트엔드 개발자입니다.</p>
      </section>
    </article>

    <article class="profile-card">
      <figure class="profile-image">
        <span class="profile-badge">Spring</span>
        <img src="https://picsum.photos/seed/2/200/200" alt="박아기사자" />
      </figure>
      <section class="profile-content">
        <h2 class="name">박아기사자</h2>
        <p class="part">Backend</p>
        <p class="introduction">안정적인 서버 구조에 관심이 많습니다.</p>
      </section>
    </article>

    <article class="profile-card">
      <figure class="profile-image">
        <span class="profile-badge">Figma</span>
        <img src="https://picsum.photos/seed/3/200/200" alt="이아기사자" />
      </figure>
      <section class="profile-content">
        <h2 class="name">이아기사자</h2>
        <p class="part">Design</p>
        <p class="introduction">사용자 관점에서 디자인을 고민합니다.</p>
      </section>
    </article>
  </section>
</main>`;

export const Week2Mission = () => (
  <div className="animate-up">
    <h2>2주차 최종 PBL: 아기 사자 명단 대시보드</h2>
    <div
      className="pbl-card"
      style={{
        border: '2px solid var(--ll-orange)',
        background: 'var(--ll-orange-light)',
        position: 'relative',
        minHeight: '450px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          padding: '10px 24px',
          background: 'var(--ll-orange)',
          color: 'white',
          fontWeight: 900,
          borderBottomLeftRadius: '24px',
        }}
      >
        WEEK 02 FINAL PBL
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', marginTop: '1rem' }}>
        <div>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>🦁 "아기 사자 명단을 한 화면에 정리하기"</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.6, color: '#444' }}>
            이번 주에는 <strong>Grid, Position, Media Query, transform</strong>을 활용해 여러 장의
            프로필 카드와 상세 정보를 한 페이지에 정리하는 대시보드를 완성합니다.
          </p>

          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #eee' }}>
            <h4 style={{ marginBottom: '1rem' }}>필수 포함 요소:</h4>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                fontSize: '0.95rem',
                listStyle: 'none',
                padding: 0,
              }}
            >
              <li>🧩 <strong>Profile Card Grid</strong>: 여러 명의 카드를 grid로 배치</li>
              <li>🏷️ <strong>Badge & Highlight</strong>: 카드 위 badge와 대표 카드 강조</li>
              <li>📄 <strong>Profile Detail</strong>: 자기소개, 연락처, 관심 기술 영역 구성</li>
              <li>📱 <strong>Responsive Layout</strong>: 화면 크기에 따라 1열, 2열, 3열 전환</li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '260px',
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              border: '1px solid #eee',
            }}
          >
            <div style={{ position: 'relative' }}>
              <img
                src="https://picsum.photos/seed/1/260/160"
                alt="김아기사자"
                style={{ width: '100%', display: 'block' }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  padding: '6px 10px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.92)',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                }}
              >
                React
              </span>
            </div>
            <div style={{ padding: '18px' }}>
              <h4 style={{ margin: 0, fontSize: '1.15rem' }}>김아기사자</h4>
              <p style={{ fontSize: '0.82rem', color: '#4a6cf7', fontWeight: 700, margin: '6px 0 10px' }}>Frontend</p>
              <p style={{ fontSize: '0.82rem', color: '#666', margin: 0, lineHeight: 1.5 }}>
                구조적인 UI를 고민하는 프론트엔드 개발자입니다.
              </p>
            </div>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#888' }}>Mockup Example</p>
        </div>
      </div>
    </div>
  </div>
);

export const Week2CodeStarter = () => (
  <div className="animate-up">
    <h2>PBL 가이드: 기술적 제약 사항</h2>
    <div className="pbl-card" style={{ border: '2px solid #111', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          padding: '10px 24px',
          background: '#111',
          color: 'white',
          fontWeight: 900,
          borderBottomLeftRadius: '24px',
        }}
      >
        TECHNICAL GUIDE
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '1.5rem' }}>
        <div>
          <h4 style={{ color: 'var(--ll-orange)', marginBottom: '1rem' }}>1. Layout Structure</h4>
          <ul style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#555' }}>
            <li><code>profile-card-grid</code>로 카드 목록을 먼저 구성하세요.</li>
            <li><code>profile-detail-list</code>로 상세 정보 영역을 아래에 배치하세요.</li>
            <li><code>profile-card is-me</code>로 대표 카드를 강조하세요.</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: 'var(--ll-orange)', marginBottom: '1rem' }}>2. CSS Requirements</h4>
          <ul style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#555' }}>
            <li><code>display: grid</code>와 <code>@media</code>를 사용해 반응형 열 수를 바꾸세요.</li>
            <li><code>position: absolute</code>로 badge를 카드 이미지 위에 올리세요.</li>
            <li><code>transform</code>으로 대표 카드가 살짝 떠 보이게 만드세요.</li>
          </ul>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '2rem' }}>
        <CodePreview language="html" title="index.html starter" code={missionHtml} height="420px" />
        <CodePreview
          language="css"
          title="style.css starter"
          code={missionCss}
          height="420px"
          previewHtml={previewHtml}
        />
      </div>

      <div className="pbl-card" style={{ marginTop: '2rem', background: '#fcfcfc', border: '1px dashed #ccc' }}>
        <h4 style={{ marginBottom: '0.5rem' }}>💻 Local Task</h4>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          VS Code에서 <code>index.html</code>과 <code>style.css</code>를 만들고, 카드 9장 이상과 상세 정보
          영역을 직접 완성해보세요. 반응형 전환과 대표 카드 강조까지 적용한 뒤 결과 화면을 확인하세요.
        </p>
      </div>
    </div>
  </div>
);
