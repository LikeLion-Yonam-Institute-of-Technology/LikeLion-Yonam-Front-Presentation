import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import LiveReactSandbox from "../common/LiveReactSandbox";

const codeStyle = {
  margin: 0,
  padding: "16px 20px",
  fontSize: "12.5px",
  fontFamily: '"Fira Code", Consolas, Monaco, monospace',
  background: "transparent",
  lineHeight: "1.6",
};

/* ───── 슬라이드 1: CDN HTML 구조 ───── */
export const CDNHTMLStructure = () => (
  <div className="animate-up">
    <h2>
      CDN으로 <span style={{ color: "#61DAFB" }}>React 시작하기</span>
    </h2>
    <p className="lead">단일 HTML 파일에 스크립트 3줄만 추가하면 React를 바로 쓸 수 있어요</p>

    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "24px", marginTop: "1.5rem" }}>
      {/* 코드 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #eee", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
      >
        <div style={{ background: "#1e1e2e", padding: "12px 20px", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ display: "flex", gap: "6px" }}>
            {["#ff5f56", "#ffbd2e", "#27c93f"].map(c => (
              <span key={c} style={{ width: "9px", height: "9px", borderRadius: "50%", background: c }} />
            ))}
          </div>
          <span style={{ color: "#888", fontSize: "0.75rem", fontWeight: 600 }}>index.html</span>
        </div>
        <div style={{ background: "#fafafa" }}>
          <SyntaxHighlighter language="html" style={oneLight} customStyle={codeStyle}>
{`<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8" />

  <!-- ① React 코어 -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

  <!-- ② ReactDOM -->
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <!-- ③ Babel (JSX → JS 변환) -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script>
    const { useState } = React;
  </script>

</head>

<body>
  <div id="root"></div>

  <!-- type="text/babel" 필수! -->
  <script type="text/babel">
    function App() {
      return <>
        <h1>Hello, React! 🦁</h1>
      </>;
    }
    ReactDOM.createRoot(
      document.getElementById('root')
    ).render(<App />);
  </script>
</body>

</html>`}
          </SyntaxHighlighter>
        </div>
      </motion.div>

      {/* 설명 카드 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        style={{ display: "flex", flexDirection: "column", gap: "14px" }}
      >
        {[
          {
            num: "①",
            color: "#61DAFB",
            bg: "rgba(97,218,251,0.08)",
            title: "react.js",
            desc: "React 코어. 컴포넌트 시스템, 훅 등 핵심 로직",
          },
          {
            num: "②",
            color: "#10B981",
            bg: "rgba(16,185,129,0.08)",
            title: "react-dom.js",
            desc: "React를 브라우저 DOM에 연결. createRoot가 여기에",
          },
          {
            num: "③",
            color: "#F59E0B",
            bg: "rgba(245,158,11,0.08)",
            title: "@babel/standalone",
            desc: 'JSX를 JS로 실시간 변환. 이게 없으면 <div> 문법이 동작 안 함',
          },
          {
            num: "🎯",
            color: "var(--ll-orange)",
            bg: "rgba(255,96,0,0.06)",
            title: 'type="text/babel"',
            desc: "이 속성이 있는 script 태그만 Babel이 변환해요. 꼭 붙여야!",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            style={{
              background: item.bg,
              borderRadius: "10px",
              padding: "12px 14px",
              border: `1px solid ${item.color}30`,
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontWeight: 900, color: item.color, fontSize: "0.95rem", flexShrink: 0 }}>{item.num}</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.8rem", color: "#111", fontFamily: "var(--font-mono)", marginBottom: "3px" }}>
                {item.title}
              </div>
              <p style={{ margin: 0, fontSize: "0.74rem", color: "var(--ll-dark-grey)", lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);

/* ───── 슬라이드 2: Hello React (step by step) ───── */
const helloReactSteps = [
  {
    label: "Step 1: 빈 뼈대",
    hint: "React의 가장 기본 구조 — function App()이 JSX를 반환해요",
    code:
`function App() {
  return (
    <h1>Hello, React!</h1>
  );
}`,
  },
  {
    label: "Step 2: 스타일 추가",
    hint: "JSX에서 style은 {} 객체로 전달해요. CSS 속성명은 camelCase",
    code:
`function App() {
  return (
    <div style={{ textAlign: 'center', padding: '40px',
                  fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#FF6000', fontSize: '2.5rem' }}>
        🦁 Hello, React!
      </h1>
      <p style={{ color: '#666' }}>
        CDN만으로 React가 실행돼요!
      </p>
    </div>
  );
}`,
  },
  {
    label: "Step 3: JS 표현식",
    hint: "JSX 안에서 {} 를 사용하면 JavaScript 표현식을 삽입할 수 있어요",
    code:
`function App() {
  const name = "아기사자";
  const year = new Date().getFullYear();

  return (
    <div style={{ padding: '32px', fontFamily: 'sans-serif',
                  textAlign: 'center' }}>
      <h1 style={{ color: '#FF6000' }}>
        안녕, {name}! 🦁
      </h1>
      <p style={{ color: '#888' }}>
        {year}년에 React를 시작했어요
      </p>
      <p>1 + 1 = {1 + 1}</p>
    </div>
  );
}`,
  },
];

export const FirstHelloReact = () => (
  <div className="animate-up">
    <h2>
      첫 번째 <span style={{ color: "#61DAFB" }}>React 앱</span>
    </h2>
    <p className="lead" style={{ marginBottom: "1rem" }}>
      단계별로 코드를 발전시켜가며 React가 어떻게 동작하는지 확인해봐요
    </p>

    <LiveReactSandbox
      steps={helloReactSteps}
      title="Hello React — CDN 실습"
      height="420px"
      autoRun={true}
    />
  </div>
);
