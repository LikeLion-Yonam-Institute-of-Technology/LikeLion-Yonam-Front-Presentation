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

/* ───── 슬라이드 1: 함수 컴포넌트 (step by step) ───── */
const componentSteps = [
  {
    label: "Step 1: 함수 → 컴포넌트",
    hint: "JSX를 반환하는 함수가 컴포넌트예요. 이름은 반드시 대문자로 시작!",
    code:
`// 이름이 대문자 → 컴포넌트!
function Greeting() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif',
                  textAlign: 'center' }}>
      <span style={{ fontSize: '3rem' }}>🦁</span>
      <h2 style={{ color: '#FF6000', margin: '8px 0' }}>
        안녕하세요!
      </h2>
      <p style={{ color: '#666' }}>
        저는 React 컴포넌트입니다
      </p>
    </div>
  );
}

function App() {
  // <Greeting /> 처럼 태그로 사용
  return <Greeting />;
}`,
  },
  {
    label: "Step 2: 재사용",
    hint: "같은 컴포넌트를 여러 번 써도 각각 독립적으로 동작해요",
    code:
`function Greeting() {
  return (
    <div style={{
      padding: '16px 20px', margin: '8px 0',
      background: '#FFF7ED', borderRadius: '10px',
      borderLeft: '4px solid #FF6000',
      fontFamily: 'sans-serif',
    }}>
      <h3 style={{ margin: 0, color: '#EA580C' }}>🦁 안녕하세요!</h3>
      <p style={{ margin: '4px 0 0', color: '#888', fontSize: '0.9rem' }}>
        저는 React 컴포넌트입니다
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '16px' }}>
      {/* 같은 컴포넌트를 3번 재사용 */}
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  );
}`,
  },
  {
    label: "Step 3: 컴포넌트 합성",
    hint: "작은 컴포넌트를 조합해서 더 큰 UI를 만들어요. 레고 블록처럼!",
    code:
`function Header() {
  return (
    <header style={{
      background: '#111', color: 'white',
      padding: '14px 20px',
      fontFamily: 'sans-serif',
    }}>
      <h2 style={{ margin: 0, fontSize: '1.1rem' }}>🦁 멋사 14기</h2>
    </header>
  );
}

function ProfileCard() {
  return (
    <div style={{
      padding: '20px', background: '#FFF7ED',
      borderLeft: '4px solid #FF6000',
      fontFamily: 'sans-serif',
    }}>
      <p style={{ margin: 0, fontWeight: 700 }}>👤 이름: 아기사자</p>
      <p style={{ margin: '6px 0 0', color: '#666', fontSize: '0.9rem' }}>
        🎓 프론트엔드 개발자 지망
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{
      background: '#f5f5f5', padding: '12px 20px',
      textAlign: 'center', fontSize: '0.8rem', color: '#999',
      fontFamily: 'sans-serif',
    }}>
      2025 LikeLion Yonam
    </footer>
  );
}

// App이 세 컴포넌트를 조합
function App() {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: '10px',
                  overflow: 'hidden', maxWidth: '360px', margin: '16px auto' }}>
      <Header />
      <ProfileCard />
      <Footer />
    </div>
  );
}`,
  },
];

export const FirstFunctionComponent = () => (
  <div className="animate-up">
    <h2>
      함수 <span style={{ color: "#10B981" }}>컴포넌트</span>
    </h2>
    <p className="lead" style={{ marginBottom: "1rem" }}>
      JSX를 반환하는 함수 = 컴포넌트. 단계별로 만들어봐요
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "20px", alignItems: "start" }}>
      <LiveReactSandbox
        steps={componentSteps}
        title="함수 컴포넌트 실습"
        height="460px"
        autoRun={true}
      />

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        style={{ width: "220px", display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <h3 style={{ fontSize: "0.82rem", fontWeight: 800, color: "#111", margin: 0 }}>📋 컴포넌트 규칙</h3>
        {[
          { icon: "🔠", color: "#10B981", title: "이름은 대문자", desc: "<greeting />은 HTML 태그, <Greeting />이어야 컴포넌트" },
          { icon: "📤", color: "#61DAFB", title: "JSX return", desc: "컴포넌트는 반드시 JSX를 반환" },
          { icon: "♻️", color: "#8B5CF6", title: "재사용 가능", desc: "여러 번 써도 각자 독립 동작" },
          { icon: "🏠", color: "var(--ll-orange)", title: "App이 진입점", desc: "ReactDOM이 <App />을 렌더링" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="pbl-card"
            style={{ padding: "12px 14px", display: "flex", gap: "10px", alignItems: "flex-start" }}
          >
            <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: "0.8rem", color: item.color, marginBottom: "3px" }}>{item.title}</div>
              <p style={{ margin: 0, fontSize: "0.72rem", color: "var(--ll-dark-grey)", lineHeight: 1.4 }}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);

/* ───── 슬라이드 2: 컴포넌트 합성 ───── */
const compositionCode =
`function Header() {
  return (
    <header style={{
      background: '#111', color: 'white',
      padding: '16px 24px', borderRadius: '10px 10px 0 0'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.2rem' }}>🦁 멋사 14기</h1>
    </header>
  );
}

function ProfileCard() {
  return (
    <div style={{
      padding: '20px 24px', background: '#FFF7ED',
      borderLeft: '4px solid #FF6000', fontFamily: 'sans-serif'
    }}>
      <p style={{ margin: 0, fontWeight: 700 }}>👤 이름: 아기사자</p>
      <p style={{ margin: '6px 0 0', color: '#666' }}>
        🎓 역할: 프론트엔드 개발자 지망
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{
      background: '#f5f5f5', padding: '12px 24px',
      borderRadius: '0 0 10px 10px', textAlign: 'center',
      fontSize: '0.85rem', color: '#888', fontFamily: 'sans-serif'
    }}>
      2025 LikeLion Yonam 14th
    </footer>
  );
}

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', borderRadius: '10px',
                  overflow: 'hidden', border: '1px solid #eee',
                  maxWidth: '380px', margin: '16px auto' }}>
      <Header />
      <ProfileCard />
      <Footer />
    </div>
  );
}`;

export const ComponentComposition = () => (
  <div className="animate-up">
    <h2>
      컴포넌트 <span style={{ color: "#10B981" }}>합성(Composition)</span>
    </h2>
    <p className="lead" style={{ marginBottom: "1rem" }}>
      작은 컴포넌트들을 조합해서 더 큰 UI를 만들어요. 각 컴포넌트는 자신의 역할만 담당해요
    </p>

    <LiveReactSandbox
      code={compositionCode}
      title="컴포넌트 합성 실습"
      height="460px"
      autoRun={true}
      description="Header, ProfileCard, Footer를 각각 수정하거나 컴포넌트를 더 추가해보세요"
    />
  </div>
);

/* ───── 슬라이드 3.5: 함수 선언식 vs 화살표 함수 ───── */
export const FunctionVsArrow = () => (
  <div className="animate-up">
    <h2>
      컴포넌트 선언:{" "}
      <span style={{ color: "#10B981" }}>function</span>
      {" "}vs{" "}
      <span style={{ color: "#8B5CF6" }}>{"const () =>"}</span>
    </h2>
    <p className="lead">
      두 가지 방식 모두 React 컴포넌트를 만들 수 있어요. 결과는 같지만 쓰는 방법이 달라요
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: "20px", marginTop: "1.2rem", alignItems: "start" }}>
      {/* 함수 선언식 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ borderRadius: "12px", overflow: "hidden", border: "2px solid rgba(16,185,129,0.3)" }}
      >
        <div style={{ padding: "10px 16px", background: "#F0FDF4", borderBottom: "1px solid #BBF7D0", fontWeight: 800, color: "#16A34A", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "8px" }}>
          <span>📘</span> 함수 선언식
        </div>
        <div style={{ background: "#fafafa" }}>
          <SyntaxHighlighter language="jsx" style={oneLight} customStyle={{ ...codeStyle, fontSize: "12px", padding: "14px 16px" }}>
{`function Header({ title }) {
  return <h1>{title}</h1>;
}

// 사용
<Header title="포트폴리오" />`}
          </SyntaxHighlighter>
        </div>
        <div style={{ padding: "12px 16px", background: "rgba(16,185,129,0.04)", display: "flex", flexDirection: "column", gap: "7px" }}>
          {[
            { ok: true,  text: "이름이 function 옆에 명확히 보임" },
            { ok: true,  text: "정의 전에 호출해도 OK (호이스팅)" },
            { ok: true,  text: "초심자가 읽기 쉬움" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "8px", fontSize: "0.75rem", fontWeight: 600, color: item.ok ? "#16A34A" : "#DC2626" }}>
              <span style={{ flexShrink: 0 }}>{item.ok ? "✅" : "⚠️"}</span>
              {item.text}
            </div>
          ))}
        </div>
      </motion.div>

      {/* 화살표 함수식 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ borderRadius: "12px", overflow: "hidden", border: "2px solid rgba(139,92,246,0.3)" }}
      >
        <div style={{ padding: "10px 16px", background: "rgba(139,92,246,0.06)", borderBottom: "1px solid rgba(139,92,246,0.2)", fontWeight: 800, color: "#8B5CF6", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "8px" }}>
          <span>📗</span> 화살표 함수식
        </div>
        <div style={{ background: "#fafafa" }}>
          <SyntaxHighlighter language="jsx" style={oneLight} customStyle={{ ...codeStyle, fontSize: "12px", padding: "14px 16px" }}>
{`const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

// 한 줄이면 return 생략 가능!
const Header = ({ title }) => <h1>{title}</h1>;`}
          </SyntaxHighlighter>
        </div>
        <div style={{ padding: "12px 16px", background: "rgba(139,92,246,0.04)", display: "flex", flexDirection: "column", gap: "7px" }}>
          {[
            { ok: true,  text: "짧게 쓸 수 있음 (return 생략 가능)" },
            { ok: true,  text: "실무·오픈소스에서 자주 사용" },
            { ok: false, text: "선언 전에 사용하면 에러" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "8px", fontSize: "0.75rem", fontWeight: 600, color: item.ok ? "#16A34A" : "#DC2626" }}>
              <span style={{ flexShrink: 0 }}>{item.ok ? "✅" : "⚠️"}</span>
              {item.text}
            </div>
          ))}
        </div>
      </motion.div>

      {/* 비교표 */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        style={{ width: "180px", display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <h3 style={{ fontSize: "0.78rem", fontWeight: 800, color: "#111", margin: 0 }}>📊 비교표</h3>
        {[
          { label: "React 동작", func: "✅ 동일", arrow: "✅ 동일" },
          { label: "호이스팅", func: "✅ 가능", arrow: "❌ 불가" },
          { label: "가독성", func: "⭐ 높음", arrow: "보통" },
          { label: "실무 빈도", func: "많음", arrow: "⭐ 더 많음" },
        ].map((row, i) => (
          <div key={i} style={{ background: "white", borderRadius: "8px", padding: "8px 10px", border: "1px solid #eee", fontSize: "0.72rem" }}>
            <div style={{ fontWeight: 700, color: "#555", marginBottom: "5px" }}>{row.label}</div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#16A34A", fontWeight: 600 }}>{row.func}</span>
              <span style={{ color: "#8B5CF6", fontWeight: 600 }}>{row.arrow}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      style={{
        marginTop: "1.2rem",
        padding: "14px 20px",
        background: "linear-gradient(135deg, rgba(16,185,129,0.07), rgba(139,92,246,0.07))",
        borderRadius: "12px",
        border: "1px solid rgba(16,185,129,0.2)",
        display: "flex",
        alignItems: "center",
        gap: "14px",
      }}
    >
      <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>💡</span>
      <p style={{ margin: 0, fontSize: "0.88rem", fontWeight: 700, color: "#111" }}>
        React에서는{" "}
        <span style={{ color: "#10B981" }}>function 선언식</span>과{" "}
        <span style={{ color: "#8B5CF6" }}>const 화살표 함수</span>, 둘 다 100% 정상 동작해요.
        이 강의에서는 <span style={{ color: "#10B981" }}>function</span>으로 통일합니다.
        실무 코드에선 두 가지가 섞여 있으니 둘 다 읽을 수 있으면 충분해요!
      </p>
    </motion.div>
  </div>
);

/* ───── 실습: 컴포넌트 만들기 ───── */
export const ComponentPractice = () => (
  <div className="animate-up">
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
      <h2 style={{ margin: 0 }}>
        🎯 실습 —{" "}
        <span style={{ color: "#10B981" }}>컴포넌트를 직접 만들어봐요</span>
      </h2>
      <div style={{ display: "flex", gap: "8px" }}>
        <span style={{ background: "rgba(16,185,129,0.1)", color: "#10B981", borderRadius: "100px", padding: "4px 14px", fontSize: "0.78rem", fontWeight: 800, border: "1px solid rgba(16,185,129,0.2)" }}>⏱ 7분</span>
        <span style={{ background: "#F0FDF4", color: "#16A34A", borderRadius: "100px", padding: "4px 14px", fontSize: "0.78rem", fontWeight: 800, border: "1px solid #BBF7D0" }}>CDN 환경</span>
      </div>
    </div>
    <p className="lead" style={{ marginTop: "0.5rem" }}>
      함수로 컴포넌트를 만들고 여러 번 재사용해보세요
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "20px", marginTop: "1rem" }}>
      {/* 할 일 목록 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ fontWeight: 800, fontSize: "0.82rem", color: "#111", marginBottom: "2px" }}>📋 할 일</div>
        {[
          { no: 1, tier: "🟢", text: "function LionCard() 컴포넌트를 작성하세요 (이름, 역할, 이모지 하드코딩)", color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0" },
          { no: 2, tier: "🟢", text: "<LionCard /> 태그를 App 안에서 3번 재사용해보세요", color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0" },
          { no: 3, tier: "🟢", text: "컴포넌트 이름이 대문자로 시작하는지 확인하세요", color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0" },
          { no: 4, tier: "🟡", text: "Header 컴포넌트와 Footer 컴포넌트를 추가로 만들어 App에서 조합해보세요", color: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
          { no: 5, tier: "🔴", text: "const 화살표 함수 방식으로 똑같은 컴포넌트를 다시 써보고 결과가 같은지 확인하세요", color: "#DC2626", bg: "#FEF2F2", border: "#FECACA" },
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
          style={{ marginTop: "4px", background: "rgba(16,185,129,0.06)", borderRadius: "10px", padding: "10px 14px", border: "1px solid rgba(16,185,129,0.2)" }}
        >
          <p style={{ margin: 0, fontSize: "0.78rem", color: "#10B981", fontWeight: 700 }}>
            💡 힌트: 컴포넌트는 <code style={{ fontFamily: "var(--font-mono)" }}>{"<LionCard />"}</code> 처럼 쓰고, 여러 번 써도 각각 독립적으로 동작해요
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
{`// 🟢 1. LionCard 컴포넌트를 여기에 작성하세요!
function LionCard() {
  return (
    // 내용을 채워보세요
  );
}

// 🟡 심화: Header 컴포넌트도 만들어보세요
function Header() {
  return (
    // 내용을 채워보세요
  );
}

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {/* 🟢 2. LionCard를 3번 재사용하세요 */}

    </div>
  );
}`}
          </SyntaxHighlighter>
        </div>
      </motion.div>
    </div>
  </div>
);

/* ───── 슬라이드 3: 컴포넌트 쪼개기 사고 ───── */
export const ComponentSplitThinking = () => (
  <div className="animate-up">
    <h2>
      컴포넌트 <span style={{ color: "#10B981" }}>분리 사고</span>
    </h2>
    <p className="lead">어떤 단위로 쪼개야 할까요? "재사용되는 것", "독립적으로 바뀌는 것"이 기준이에요</p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "1.5rem" }}>
      {/* 분리 전 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="pbl-card"
        style={{ padding: 0, overflow: "hidden" }}
      >
        <div style={{ padding: "12px 18px", background: "#FEF2F2", borderBottom: "1px solid #FECACA", fontWeight: 700, color: "#DC2626", fontSize: "0.82rem" }}>
          ❌ 분리 전 — 한 덩어리
        </div>
        <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ background: "#f3f4f6", borderRadius: "8px", padding: "16px" }}>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "#555", fontFamily: "var(--font-mono)" }}>{"<div>"}</p>
            <div style={{ marginLeft: "12px", display: "flex", flexDirection: "column", gap: "6px", marginTop: "6px" }}>
              {[
                "<h1>헤더</h1>",
                '<div class="card">카드1</div>',
                '<div class="card">카드2</div>',
                '<div class="card">카드3</div>',
                "<footer>푸터</footer>",
              ].map((label, i) => (
                <div key={i} style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#666", background: "white", padding: "6px 10px", borderRadius: "6px", border: "1px solid #eee" }}>
                  {label}
                </div>
              ))}
            </div>
            <p style={{ margin: "6px 0 0", fontSize: "0.75rem", color: "#555", fontFamily: "var(--font-mono)" }}>{"</div>"}</p>
          </div>
          <p style={{ fontSize: "0.78rem", color: "#DC2626", fontWeight: 600, margin: 0 }}>
            카드 하나 바꾸면 전체를 건드려야 함
          </p>
        </div>
      </motion.div>

      {/* 분리 후 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35 }}
        className="pbl-card"
        style={{ padding: 0, overflow: "hidden" }}
      >
        <div style={{ padding: "12px 18px", background: "#F0FDF4", borderBottom: "1px solid #BBF7D0", fontWeight: 700, color: "#16A34A", fontSize: "0.82rem" }}>
          ✅ 분리 후 — 컴포넌트 트리
        </div>
        <div style={{ padding: "20px" }}>
          <div style={{ background: "#f0fdf4", borderRadius: "8px", padding: "14px", border: "2px dashed #86EFAC" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 700, color: "#16A34A", marginBottom: "10px" }}>{"<App>"}</div>
            <div style={{ marginLeft: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "<Header />", color: "#61DAFB", bg: "rgba(97,218,251,0.1)" },
                { label: "<ProfileCard />", color: "var(--ll-orange)", bg: "rgba(255,96,0,0.08)" },
                { label: "<ProfileCard />", color: "var(--ll-orange)", bg: "rgba(255,96,0,0.08)" },
                { label: "<ProfileCard />", color: "var(--ll-orange)", bg: "rgba(255,96,0,0.08)" },
                { label: "<Footer />", color: "#8B5CF6", bg: "rgba(139,92,246,0.1)" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 700, color: item.color, background: item.bg, padding: "7px 12px", borderRadius: "6px" }}
                >
                  {item.label}
                </motion.div>
              ))}
            </div>
          </div>
          <p style={{ fontSize: "0.78rem", color: "#16A34A", fontWeight: 600, margin: "10px 0 0" }}>
            ProfileCard만 수정하면 3개 카드 모두 반영
          </p>
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      style={{
        marginTop: "1.5rem",
        padding: "14px 20px",
        background: "rgba(16,185,129,0.06)",
        borderRadius: "12px",
        border: "1px solid rgba(16,185,129,0.2)",
      }}
    >
      <p style={{ margin: 0, fontSize: "0.88rem", fontWeight: 700, color: "#111" }}>
        🎯 분리 기준:{" "}
        <span style={{ color: "#10B981" }}>① 여러 곳에서 쓰이는 것</span>
        {" · "}
        <span style={{ color: "#61DAFB" }}>② 독립적으로 바뀌는 것</span>
        {" · "}
        <span style={{ color: "var(--ll-orange)" }}>③ 논리적으로 하나의 책임</span>
      </p>
    </motion.div>
  </div>
);
