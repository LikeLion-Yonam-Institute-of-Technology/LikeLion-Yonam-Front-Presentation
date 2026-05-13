import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import LiveReactSandbox from "../common/LiveReactSandbox";

const codeStyle = {
  margin: 0,
  padding: "14px 18px",
  fontSize: "12.5px",
  fontFamily: '"Fira Code", Consolas, Monaco, monospace',
  background: "transparent",
  lineHeight: "1.6",
};

/* ───── 슬라이드 1: JSX 소개 ───── */
export const JSXIntro = () => (
  <div className="animate-up">
    <h2>
      JSX: <span style={{ color: "#8B5CF6" }}>HTML처럼 생긴 JavaScript</span>
    </h2>
    <p className="lead">JSX는 HTML이 아닙니다. JavaScript 안에서 UI를 표현하는 문법 확장이에요</p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "1.5rem" }}>
      {/* JSX 코드 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="pbl-card"
        style={{ padding: 0, overflow: "hidden" }}
      >
        <div style={{ padding: "12px 18px", background: "#F5F3FF", borderBottom: "1px solid #DDD6FE", fontWeight: 700, color: "#7C3AED", fontSize: "0.82rem" }}>
          ✍️ 개발자가 쓰는 JSX
        </div>
        <div style={{ background: "#fafafa" }}>
          <SyntaxHighlighter language="jsx" style={oneLight} customStyle={codeStyle}>
{`function App() {
  const name = "아기사자";

  return (
    <div className="card">
      <h1>안녕, {name}!</h1>
      <p>Welcome to React</p>
    </div>
  );
}`}
          </SyntaxHighlighter>
        </div>
      </motion.div>

      {/* 변환된 JS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="pbl-card"
        style={{ padding: 0, overflow: "hidden" }}
      >
        <div style={{ padding: "12px 18px", background: "#FFF7ED", borderBottom: "1px solid #FED7AA", fontWeight: 700, color: "#C2410C", fontSize: "0.82rem" }}>
          🔄 Babel이 변환하는 실제 JS
        </div>
        <div style={{ background: "#fafafa" }}>
          <SyntaxHighlighter language="javascript" style={oneLight} customStyle={codeStyle}>
{`function App() {
  const name = "아기사자";

  return React.createElement(
    "div",
    { className: "card" },
    React.createElement(
      "h1", null, "안녕, ", name, "!"
    ),
    React.createElement(
      "p", null, "Welcome to React"
    )
  );
}`}
          </SyntaxHighlighter>
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      style={{
        marginTop: "1.5rem",
        padding: "14px 20px",
        background: "rgba(139,92,246,0.06)",
        borderRadius: "12px",
        border: "1px solid rgba(139,92,246,0.15)",
      }}
    >
      <p style={{ margin: 0, fontSize: "0.88rem", fontWeight: 700, color: "#111" }}>
        💡 JSX는 <strong style={{ color: "#8B5CF6" }}>syntactic sugar</strong>입니다.
        Babel이 JSX를{" "}
        <code style={{ fontFamily: "var(--font-mono)", background: "rgba(139,92,246,0.1)", padding: "1px 6px", borderRadius: "4px" }}>React.createElement()</code>{" "}
        호출로 변환해줘서, 우리는 훨씬 읽기 쉬운 JSX로 코드를 작성할 수 있어요.
      </p>
    </motion.div>
  </div>
);

/* ───── 슬라이드 2: JSX 표현식 & 속성 (step by step) ───── */
const jsxSteps = [
  {
    label: "Step 1: {} 표현식",
    hint: "중괄호 {} 안에는 JS 값/표현식이면 뭐든 삽입할 수 있어요",
    code:
`function App() {
  const name = "아기사자";
  const year = 2025;

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h2>안녕하세요, {name}님!</h2>
      <p>활동 연도: {year}</p>
      <p>1 + 1 = {1 + 1}</p>
      <p>대문자: {name.toUpperCase()}</p>
    </div>
  );
}`,
  },
  {
    label: "Step 2: 조건부 렌더링",
    hint: "삼항 연산자나 &&를 사용해서 조건에 따라 다른 JSX를 보여줘요",
    code:
`function App() {
  const isLoggedIn = true;
  const count = 3;

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      {/* 삼항 연산자 */}
      <p>{isLoggedIn ? "👋 환영합니다!" : "🔒 로그인이 필요해요"}</p>

      {/* && 단축 평가 */}
      {count > 0 && <p>알림이 {count}개 있어요 🔔</p>}

      {/* isLoggedIn을 false로 바꿔보세요 */}
    </div>
  );
}`,
  },
  {
    label: "Step 3: className & style",
    hint: "HTML의 class → className, style은 문자열이 아닌 {} 객체로 전달해요",
    code:
`function App() {
  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      {/* class → className */}
      <h2 className="title"
          style={{ color: '#FF6000', fontSize: '1.8rem' }}>
        멋사 14기 🦁
      </h2>

      {/* camelCase CSS 속성 */}
      <button style={{
        backgroundColor: '#FF6000',
        color: 'white',
        padding: '10px 24px',
        borderRadius: '8px',
        border: 'none',
        fontSize: '1rem',
        cursor: 'pointer',
      }}>
        클릭!
      </button>
    </div>
  );
}`,
  },
  {
    label: "Step 4: Fragment & 단일 부모",
    hint: "JSX는 반드시 하나의 부모 요소를 가져야 해요. <></> Fragment로 불필요한 div를 피할 수 있어요",
    code:
`function App() {
  return (
    <>
      {/* Fragment — 빈 태그 <></> */}
      {/* DOM에 실제 요소가 추가되지 않아요 */}
      <h2 style={{ fontFamily: 'sans-serif', color: '#111' }}>
        제목
      </h2>
      <p style={{ fontFamily: 'sans-serif', color: '#666' }}>
        내용 1
      </p>
      <p style={{ fontFamily: 'sans-serif', color: '#666' }}>
        내용 2
      </p>
      {/* <h2>제목</h2><p>내용1</p> 만 쓰면 에러! */}
    </>
  );
}`,
  },
];

export const JSXExpressionsAndAttributes = () => (
  <div className="animate-up">
    <h2>
      JSX <span style={{ color: "#8B5CF6" }}>표현식 & 속성</span>
    </h2>
    <p className="lead" style={{ marginBottom: "1rem" }}>
      단계별로 JSX 핵심 문법을 직접 실행하며 익혀봐요
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "20px", alignItems: "start" }}>
      <LiveReactSandbox
        steps={jsxSteps}
        title="JSX 문법 실습"
        height="430px"
        autoRun={true}
      />

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        style={{ width: "240px", display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <h3 style={{ fontSize: "0.82rem", fontWeight: 800, color: "#111", margin: 0 }}>📋 JSX 규칙 요약</h3>
        {[
          { rule: "{표현식}", good: "{name}, {1+1}", color: "#8B5CF6" },
          { rule: "class → className", good: 'className="card"', color: "#61DAFB" },
          { rule: "style = 객체", good: "style={{ color: 'red' }}", color: "#10B981" },
          { rule: "단일 부모 필수", good: "<><h1/><p/></>", color: "var(--ll-orange)" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            style={{
              background: "white",
              borderRadius: "8px",
              padding: "10px 12px",
              border: `1px solid ${item.color}25`,
              borderLeft: `3px solid ${item.color}`,
            }}
          >
            <div style={{ fontWeight: 700, fontSize: "0.76rem", color: item.color, marginBottom: "4px" }}>{item.rule}</div>
            <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "#555" }}>{item.good}</code>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);

/* ───── 실습: JSX 이름카드 ───── */
export const JSXPractice = () => (
  <div className="animate-up">
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
      <h2 style={{ margin: 0 }}>
        🎯 실습 —{" "}
        <span style={{ color: "var(--ll-orange)" }}>JSX로 나만의 이름카드 만들기</span>
      </h2>
      <div style={{ display: "flex", gap: "8px" }}>
        <span style={{ background: "rgba(255,96,0,0.1)", color: "var(--ll-orange)", borderRadius: "100px", padding: "4px 14px", fontSize: "0.78rem", fontWeight: 800, border: "1px solid rgba(255,96,0,0.2)" }}>⏱ 5분</span>
        <span style={{ background: "#F0FDF4", color: "#16A34A", borderRadius: "100px", padding: "4px 14px", fontSize: "0.78rem", fontWeight: 800, border: "1px solid #BBF7D0" }}>CDN 환경</span>
      </div>
    </div>
    <p className="lead" style={{ marginTop: "0.5rem" }}>
      지금까지 배운 JSX 문법을 직접 써보세요. <code style={{ fontFamily: "var(--font-mono)", background: "rgba(255,96,0,0.08)", padding: "2px 7px", borderRadius: "5px", color: "var(--ll-orange)" }}>index.html</code>을 열고 아래 시작 코드를 붙여넣으세요
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "20px", marginTop: "1rem" }}>
      {/* 할 일 목록 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ fontWeight: 800, fontSize: "0.82rem", color: "#111", marginBottom: "2px" }}>📋 할 일</div>
        {[
          { no: 1, tier: "🟢", text: "변수 name에 자신의 이름을 넣고 {} 로 출력하세요", color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0" },
          { no: 2, tier: "🟢", text: "오늘 날짜나 간단한 계산을 {} 안에 넣어보세요", color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0" },
          { no: 3, tier: "🟢", text: "isStudent가 true면 학생 뱃지를 보여주세요 (조건부 렌더링)", color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0" },
          { no: 4, tier: "🟡", text: "cardStyle 객체의 color를 자신이 좋아하는 색으로 바꿔보세요", color: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
          { no: 5, tier: "🟡", text: "class 대신 className 을 써야 한다는 걸 확인하세요", color: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.07 }}
            style={{
              background: item.bg,
              borderRadius: "10px",
              padding: "10px 14px",
              border: `1px solid ${item.border}`,
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontWeight: 900, fontSize: "0.78rem", color: item.color, flexShrink: 0, marginTop: "1px" }}>
              {item.tier} {item.no}.
            </span>
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#111", lineHeight: 1.5 }}>{item.text}</span>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{ marginTop: "4px", background: "rgba(100,108,255,0.06)", borderRadius: "10px", padding: "10px 14px", border: "1px solid rgba(100,108,255,0.15)" }}
        >
          <p style={{ margin: 0, fontSize: "0.78rem", color: "#646CFF", fontWeight: 700 }}>
            💡 힌트: {"{}"}  안에는 어떤 JavaScript 표현식도 OK! 변수, 계산, 삼항연산자 모두 가능해요
          </p>
        </motion.div>
      </div>

      {/* 시작 코드 */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25 }}
        style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #e5e7eb" }}
      >
        <div style={{ padding: "10px 16px", background: "#1e1e2e", display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ display: "flex", gap: "5px" }}>
            {["#ff5f56","#ffbd2e","#27c93f"].map(c => (
              <span key={c} style={{ width: "8px", height: "8px", borderRadius: "50%", background: c }} />
            ))}
          </div>
          <span style={{ color: "#888", fontSize: "0.72rem", fontWeight: 600 }}>🚀 시작 코드 — 여기서부터!</span>
        </div>
        <div style={{ background: "#fafafa" }}>
          <SyntaxHighlighter language="jsx" style={oneLight} customStyle={{ ...codeStyle, fontSize: "11.5px", padding: "14px 16px" }}>
{`function App() {
  const name = "이름을 여기 넣으세요";
  const isStudent = true;
  const cardStyle = {
    padding: '20px',
    background: '#FFF7ED',
    borderRadius: '12px',
    borderLeft: '4px solid #FF6000',
    fontFamily: 'sans-serif',
    maxWidth: '300px',
  };

  return (
    <div style={cardStyle}>
      {/* 🟢 1. 이름 출력 */}
      <h2 style={{ color: '#FF6000', margin: '0 0 8px' }}>
        {name}
      </h2>

      {/* 🟢 2. 표현식 */}
      <p style={{ margin: '4px 0', color: '#666' }}>
        2025 - 20 = {2025 - 20}살
      </p>

      {/* 🟢 3. 조건부 렌더링 */}
      {isStudent && (
        <span style={{
          background: '#dcfce7', color: '#16A34A',
          borderRadius: '20px', padding: '2px 10px',
          fontSize: '0.8rem', fontWeight: 700,
        }}>
          학생
        </span>
      )}
    </div>
  );
}`}
          </SyntaxHighlighter>
        </div>
      </motion.div>
    </div>
  </div>
);
