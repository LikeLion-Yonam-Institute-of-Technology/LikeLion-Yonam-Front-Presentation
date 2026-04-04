import React from 'react';
import { motion } from 'framer-motion';
import CodePreview from '../common/CodePreview';

const mockupHtml = `
<main class="stage">
  <main class="container">
    <article class="profile-card">
      <figure class="profile-image">
        <div class="card-top"></div>
        <div class="avatar"></div>
      </figure>
      <section class="profile-content">
        <h2>김멋사 (FE)</h2>
        <p class="introduction">"성장하는 사자가 되겠습니다!"</p>
        <div class="profile-links">
          <span>GitHub</span>
          <span>Blog</span>
        </div>
      </section>
    </article>
  </main>
</main>`;

const mockupCss = `
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f7fa;
}

.stage {
  padding: 24px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
}

.profile-card {
  width: 260px;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  position: relative;
}

.profile-image {
  margin: 0;
}

.card-top {
  height: 128px;
  background: #FF6D00;
}

.avatar {
  position: absolute;
  top: 84px;
  left: 50%;
  margin-left: -44px;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: #d4d4d8;
  border: 4px solid white;
}

.profile-content {
  padding: 56px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}

.profile-content h2,
.profile-content p {
  margin: 0;
}

.introduction {
  font-size: 12px;
  line-height: 1.5;
  color: #999;
}

.profile-links {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.profile-links span {
  padding: 4px 12px;
  border-radius: 20px;
  background: #f5f5f5;
  font-size: 11px;
}`;

const step1Code = `<!-- STEP 1 -->
<main class="container">
  <article class="profile-card"></article>
</main>`;

const step1PreviewHtml = `<main class="container">
  <article class="profile-card"></article>
</main>`;

const step1Css = `.container {
  display: flex;
}

.profile-card {
  width: 320px;
  min-height: 220px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}`;

const step2Code = `<!-- STEP 2 -->
<article class="profile-card">
  <figure class="profile-image">
    <div class="card-top"></div>
  </figure>
  <section class="profile-content"></section>
</article>`;

const step2PreviewHtml = `<article class="profile-card">
  <figure class="profile-image">
    <div class="card-top"></div>
  </figure>
  <section class="profile-content"></section>
</article>`;

const step2Css = `.profile-card {
  width: 260px;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.profile-image {
  margin: 0;
}

.card-top {
  height: 128px;
  background: #FF6D00;
}

.profile-content {
  height: 180px;
  background: white;
}`;

const step3Code = `<!-- STEP 3 -->
<article class="profile-card">
  <figure class="profile-image">
    <div class="card-top"></div>
    <div class="avatar"></div>
  </figure>
  <section class="profile-content"></section>
</article>`;

const step3PreviewHtml = `<article class="profile-card">
  <figure class="profile-image">
    <div class="card-top"></div>
    <div class="avatar"></div>
  </figure>
  <section class="profile-content"></section>
</article>`;

const step3Css = `.profile-card {
  width: 260px;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  position: relative;
}

.profile-image {
  margin: 0;
}

.card-top {
  height: 128px;
  background: #FF6D00;
}

.avatar {
  position: absolute;
  top: 84px;
  left: 50%;
  margin-left: -44px;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: #d4d4d8;
  border: 4px solid white;
}

.profile-content {
  height: 180px;
  background: white;
}`;

const step4Code = `<!-- STEP 4 -->
<section class="profile-content">
  <h2>김멋사 (FE)</h2>
  <p class="introduction">"성장하는 사자가 되겠습니다!"</p>
  <div class="profile-links">
    <span>GitHub</span>
    <span>Blog</span>
  </div>
</section>`;

const step4PreviewHtml = mockupHtml;

const step4Css = `.profile-card {
  width: 260px;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  position: relative;
}

.profile-image {
  margin: 0;
}

.card-top {
  height: 128px;
  background: #FF6D00;
}

.avatar {
  position: absolute;
  top: 84px;
  left: 50%;
  margin-left: -44px;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: #d4d4d8;
  border: 4px solid white;
}

.profile-content {
  padding: 56px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}

.profile-content h2,
.profile-content p {
  margin: 0;
}

.introduction {
  line-height: 1.5;
  color: #999;
}

.profile-links {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.profile-links span {
  padding: 4px 12px;
  border-radius: 20px;
  background: #f5f5f5;
  font-size: 11px;
}`;

const stageCard = (stage) => {
  const showTop = stage >= 2;
  const showAvatar = stage >= 3;
  const showBottomContent = stage >= 4;

  return (
    <div
      style={{
        width: '250px',
        background: '#fff',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid #e5e7eb',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        position: 'relative',
      }}
    >
      <div
        style={{
          height: '128px',
          background: showTop ? '#FF6D00' : '#eceff3',
        }}
      />

      {showAvatar && (
        <div
          style={{
            position: 'absolute',
            top: '84px',
            left: '50%',
            marginLeft: '-44px',
            width: '88px',
            height: '88px',
            borderRadius: '50%',
            background: '#d4d4d8',
            border: '4px solid white',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
          }}
        />
      )}

      <div
        style={{
          minHeight: '180px',
          padding: showBottomContent ? '56px 20px 20px' : '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          justifyContent: showBottomContent ? 'flex-start' : 'center',
        }}
      >
        {showBottomContent ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              textAlign: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>김멋사 (FE)</div>
              <div style={{ color: '#999', fontSize: '0.78rem', lineHeight: 1.6 }}>
                "성장하는 사자가 되겠습니다!"
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <span
                style={{
                  padding: '4px 12px',
                  borderRadius: '20px',
                  background: '#f5f5f5',
                  fontSize: '0.7rem',
                }}
              >
                GitHub
              </span>
              <span
                style={{
                  padding: '4px 12px',
                  borderRadius: '20px',
                  background: '#f5f5f5',
                  fontSize: '0.7rem',
                }}
              >
                Blog
              </span>
            </div>
          </div>
        ) : (
          <div
            style={{
              height: '70px',
              borderRadius: '16px',
              background: '#f3f4f6',
            }}
          />
        )}
      </div>
    </div>
  );
};

const StepSlide = ({ step, title, desc, code, previewHtml, previewCss, tags }) => (
  <div className="animate-up">
    <h2>{step}</h2>
    <p className="lead">{title}</p>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '0.75fr 1.25fr',
        gap: '24px',
        alignItems: 'start',
      }}
    >
      <div className="pbl-card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <span
          style={{
            color: 'var(--ll-orange)',
            fontWeight: 900,
            letterSpacing: '0.08em',
          }}
        >
          {step}
        </span>
        <p style={{ color: 'var(--ll-dark-grey)', lineHeight: 1.8, margin: 0 }}>{desc}</p>
        <pre
          style={{
            margin: 0,
            padding: '16px',
            borderRadius: '16px',
            background: '#111',
            color: '#E5E7EB',
            fontFamily: 'var(--font-mono)',
            whiteSpace: 'pre-wrap',
            lineHeight: 1.7,
            fontSize: '0.86rem',
          }}
        >
          {code}
        </pre>
      </div>

      <CodePreview
        language="css"
        title={`${step} 결과`}
        code={previewCss}
        previewHtml={previewHtml}
        height="420px"
        tags={tags}
      />
    </div>
  </div>
);

export const AssignmentReviewIntro = () => (
  <div className="animate-up">
    <h2>전주차 과제 풀이</h2>
    <div
      className="pbl-card"
      style={{
        border: '2px solid var(--ll-orange)',
        background: 'var(--ll-orange-light)',
        position: 'relative',
        minHeight: '460px',
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
        ASSIGNMENT REVIEW
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '40px',
          marginTop: '1rem',
        }}
      >
        <div>
          <h3 style={{ marginBottom: '1.2rem', fontSize: '1.8rem' }}>
            전체를 먼저 보고, 구조를 어떻게 쪼갤지부터 본다
          </h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.7, color: '#444' }}>
            완성 화면을 먼저 보고, 큰 박스를 만든 뒤 내부 영역을 나누고 텍스트를 채워 넣는 순서로 과제를 다시 풀어봅니다.
          </p>

          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #eee',
              marginBottom: '1rem',
            }}
          >
            <h4 style={{ marginBottom: '1rem' }}>이렇게 보면 좋다</h4>
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
              <li>1. 가장 큰 박스부터 만들고 카드 구조를 먼저 잡는다.</li>
              <li>2. 위쪽 배경과 아래쪽 내용 영역을 나눈다.</li>
              <li>3. 겹치는 원형 프로필 위치를 조절한다.</li>
              <li>4. 텍스트 위계와 여백을 정리한다.</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {stageCard(4)}
          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#888' }}>Mockup Example</p>
        </div>
      </div>
    </div>
  </div>
);

export const AssignmentReviewBuildFlow = () => (
  <div className="animate-up">
    <h2>STEP별로 하나씩 완성해나간다</h2>
    <p className="lead">
      같은 화면을 4번 다시 만들면서, 어떤 HTML 구조와 어떤 CSS가 붙는지 단계별로 확인합니다.
    </p>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        alignItems: 'start',
      }}
    >
      {[
        { title: 'STEP 1', desc: '큰 div 구조를 먼저 잡습니다.', stage: 1 },
        { title: 'STEP 2', desc: '위/아래 구역으로 나눠 배경과 내용 자리를 만듭니다.', stage: 2 },
        { title: 'STEP 3', desc: '원형 프로필을 겹쳐 올려 카드 느낌을 만듭니다.', stage: 3 },
        { title: 'STEP 4', desc: '텍스트를 채워 넣고 최종 카드로 완성합니다.', stage: 4 },
      ].map((item) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="pbl-card"
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <div
            style={{
              color: 'var(--ll-orange)',
              fontWeight: 900,
              letterSpacing: '0.08em',
            }}
          >
            {item.title}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>{stageCard(item.stage)}</div>
          <p style={{ color: 'var(--ll-dark-grey)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export const AssignmentReviewStep1 = () => (
  <StepSlide
    step="STEP 1"
    title="가장 큰 박스를 먼저 만든다"
    desc="container 안에 큰 div를 먼저 두면 카드의 기본 구조가 먼저 잡힙니다."
    code={step1Code}
    previewHtml={step1PreviewHtml}
    previewCss={step1Css}
    tags={[
      { name: 'display: flex', desc: '큰 박스를 원하는 방향으로 정렬합니다.' },
      { name: 'border-radius', desc: '카드 느낌을 먼저 만듭니다.' },
    ]}
  />
);

export const AssignmentReviewStep2 = () => (
  <StepSlide
    step="STEP 2"
    title="위쪽 배경 영역과 아래쪽 내용 영역을 나눈다"
    desc="상단 배경 영역과 하단 내용 영역을 분리하면 레이아웃이 훨씬 읽기 쉬워집니다."
    code={step2Code}
    previewHtml={step2PreviewHtml}
    previewCss={step2Css}
    tags={[
      { name: 'height', desc: '위쪽 배경 영역 높이를 먼저 정합니다.' },
      { name: 'background', desc: '상단 배경색을 넣어 구역을 분리합니다.' },
    ]}
  />
);

export const AssignmentReviewStep3 = () => (
  <StepSlide
    step="STEP 3"
    title="원형 프로필을 카드 위에 겹쳐 올린다"
    desc="STEP 2 구조 위에 원형 프로필 div를 하나 더 얹으면 카드형 UI가 완성에 가까워집니다."
    code={step3Code}
    previewHtml={step3PreviewHtml}
    previewCss={step3Css}
    tags={[
      { name: 'position: absolute', desc: '겹쳐 올릴 요소를 배치합니다.' },
      { name: 'left: 50%', desc: '가운데 기준을 잡습니다.' },
    ]}
  />
);

export const AssignmentReviewStep4 = () => (
  <StepSlide
    step="STEP 4"
    title="텍스트를 채워 넣어 카드를 완성한다"
    desc="이름, 문장, 링크 태그를 넣고 간격을 정리하면 카드가 완성됩니다."
    code={step4Code}
    previewHtml={step4PreviewHtml}
    previewCss={step4Css}
    tags={[
      { name: 'gap', desc: '문장 사이 간격을 일정하게 맞춥니다.' },
      { name: 'text-align: center', desc: '텍스트를 가운데 정렬합니다.' },
      { name: 'border-radius', desc: '링크 태그를 pill 형태로 만듭니다.' },
    ]}
  />
);
