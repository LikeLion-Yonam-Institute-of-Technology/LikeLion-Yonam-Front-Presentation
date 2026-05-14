import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeStyle = {
  margin: 0,
  padding: "14px 18px",
  fontSize: "12.5px",
  fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
  background: "transparent",
  lineHeight: "1.55",
};

/* ───── 슬라이드 1: Vanilla Pain Point ───── */
export const VanillaPainPoint = () => (
  <div className="animate-up">
    <h2>
      Vanilla JS의 <span style={{ color: "#EF4444" }}>한계</span>
    </h2>
    <p className="lead">3주차에서 만든 '상태 → 화면' 코드를 다시 봅시다</p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "1.5rem" }}>
      {/* Vanilla 코드 */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="pbl-card"
        style={{ padding: 0, overflow: "hidden" }}
      >
        <div style={{ padding: "14px 20px", background: "#1e1e2e", borderBottom: "1px solid #333", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ display: "flex", gap: "6px" }}>
            <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ff5f56" }} />
            <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ffbd2e" }} />
            <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#27c93f" }} />
          </div>
          <span style={{ color: "#888", fontSize: "0.75rem", fontWeight: 600 }}>🍦 vanilla.js — 카드 1개 추가할 때마다...</span>
        </div>
        <div style={{ background: "#f8f8f8" }}>
          <SyntaxHighlighter language="javascript" style={oneLight} customStyle={codeStyle}>
{`// 새 카드가 추가될 때마다
function addCard(name, role) {
  // 1. DOM을 직접 만들고
  const card = document.createElement('div');
  card.className = 'card';

  // 2. 내용을 일일이 채우고
  card.innerHTML = \`
    <h3>\${name}</h3>
    <p>\${role}</p>
    <button onclick="deleteCard(this)">
      삭제
    </button>
  \`;

  // 3. 어디에 붙일지 찾아서
  document.getElementById('list').appendChild(card);

  // 4. 개수도 따로 업데이트하고
  document.getElementById('count').textContent =
    document.querySelectorAll('.card').length;
}
// 카드가 100개면? 😰`}
          </SyntaxHighlighter>
        </div>
      </motion.div>

      {/* 문제점 목록 */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        style={{ display: "flex", flexDirection: "column", gap: "14px" }}
      >
        {[
          {
            icon: "🔁",
            color: "#EF4444",
            title: "반복적인 DOM 조작",
            desc: "카드, 리스트, 모달... 매번 createElement + innerHTML + appendChild",
          },
          {
            icon: "🔗",
            color: "#F97316",
            title: "데이터와 화면이 분리",
            desc: "데이터가 어디 있는지, 화면이 어떤 상태인지 따로 추적해야 함",
          },
          {
            icon: "🐛",
            color: "#EAB308",
            title: "업데이트 누락 사고",
            desc: '한 곳을 바꿨는데 "개수 표시"는 안 바뀌는 버그 — 흔한 실수',
          },
          {
            icon: "📈",
            color: "#8B5CF6",
            title: "규모가 커지면 복잡도 폭발",
            desc: "컴포넌트가 서로 참조하고 업데이트 순서를 수동으로 관리해야 함",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="pbl-card"
            style={{ padding: "16px 20px", display: "flex", gap: "14px", alignItems: "flex-start" }}
          >
            <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: "0.9rem", color: item.color, marginBottom: "4px" }}>{item.title}</div>
              <p style={{ fontSize: "0.8rem", color: "var(--ll-dark-grey)", margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);

/* ───── 슬라이드 2: What is React ───── */
export const WhatIsReact = () => (
  <div className="animate-up">
    <h2>
      React란 <span style={{ color: "#61DAFB" }}>무엇인가?</span>
    </h2>
    <p className="lead">Facebook(Meta)이 만든 UI 라이브러리 — "컴포넌트로 UI를 선언적으로 만든다"</p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", marginTop: "2rem" }}>
      {[
        {
          icon: "🧩",
          color: "#61DAFB",
          bg: "rgba(97,218,251,0.06)",
          border: "rgba(97,218,251,0.2)",
          title: "컴포넌트 기반",
          desc: "UI를 독립적인 컴포넌트 단위로 쪼갠다. 버튼 하나, 카드 하나가 각자의 파일로",
          code: "<Button />\n<ProfileCard />\n<NavBar />",
        },
        {
          icon: "✍️",
          color: "#8B5CF6",
          bg: "rgba(139,92,246,0.06)",
          border: "rgba(139,92,246,0.2)",
          title: "선언적 UI",
          desc: '\'어떻게\'가 아닌 \'무엇을\' 표현한다. "데이터가 이러면 화면은 이렇게 보여라"',
          code: "// 이 데이터면\nconst count = 5;\n// 화면은 이렇게\n<span>{count}</span>",
        },
        {
          icon: "🔄",
          color: "#10B981",
          bg: "rgba(16,185,129,0.06)",
          border: "rgba(16,185,129,0.2)",
          title: "데이터 흐름",
          desc: "데이터(상태)가 바뀌면 React가 알아서 화면을 다시 그린다. 수동 업데이트 불필요",
          code: "// 상태 변경만 하면\nsetCount(count + 1);\n// 화면은 React가 처리",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.15 }}
          className="pbl-card"
          style={{ background: item.bg, borderColor: item.border }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{item.icon}</div>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: item.color, marginBottom: "10px" }}>{item.title}</h3>
          <p style={{ fontSize: "0.8rem", color: "var(--ll-dark-grey)", lineHeight: 1.6, marginBottom: "14px" }}>{item.desc}</p>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 14px" }}>
            <pre style={{ margin: 0, color: "#A5B4FC", fontFamily: "var(--font-mono)", fontSize: "0.72rem", lineHeight: 1.6, whiteSpace: "pre" }}>
              {item.code}
            </pre>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      style={{
        marginTop: "1.8rem",
        padding: "16px 24px",
        background: "linear-gradient(135deg, rgba(97,218,251,0.06), rgba(139,92,246,0.06))",
        borderRadius: "12px",
        border: "1px solid rgba(97,218,251,0.15)",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <span style={{ fontSize: "1.4rem" }}>💡</span>
      <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: 700, color: "#111" }}>
        React는 <strong style={{ color: "#61DAFB" }}>라이브러리</strong>입니다.
        (Angular, Vue 같은 전체 프레임워크와 달리) UI 렌더링에만 집중하고, 나머지는 자유롭게 선택할 수 있어요.
      </p>
    </motion.div>
  </div>
);

/* ───── 슬라이드 3: 선언형 vs 명령형 ───── */
export const DeclarativeVsImperative = () => (
  <div className="animate-up">
    <h2>
      명령형 <span style={{ color: "#EF4444" }}>vs</span>{" "}
      선언형
    </h2>
    <p className="lead">카운터 하나로 두 패러다임의 차이를 비교해봅시다</p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", marginTop: "1.5rem" }}>
      {/* 명령형 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="pbl-card"
        style={{ padding: 0, overflow: "hidden" }}
      >
        <div style={{
          padding: "14px 20px",
          background: "#FEF2F2",
          borderBottom: "1px solid #FECACA",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
          <span style={{ fontSize: "1.2rem" }}>🛠️</span>
          <div>
            <div style={{ fontWeight: 800, color: "#DC2626", fontSize: "0.95rem" }}>명령형 (Vanilla JS)</div>
            <div style={{ fontSize: "0.72rem", color: "#991B1B" }}>"어떻게 바꿔라" — DOM을 직접 조작</div>
          </div>
        </div>
        <div style={{ background: "#fafafa" }}>
          <SyntaxHighlighter language="html" style={oneLight} customStyle={codeStyle}>
{`<span id="count">0</span>
<button id="btn">+1</button>

<script>
  let count = 0;
  const span = document.getElementById('count');
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    count++;
    // 직접 찾아서 직접 바꿔야 함
    span.textContent = count;
  });
</script>`}
          </SyntaxHighlighter>
        </div>
        <div style={{ padding: "12px 20px", background: "#FEF2F2", borderTop: "1px solid #FECACA" }}>
          <p style={{ margin: 0, fontSize: "0.78rem", color: "#991B1B", fontWeight: 600 }}>
            ❌ DOM을 수동으로 찾고, 수동으로 변경. 연결되는 요소가 많아지면 복잡해짐
          </p>
        </div>
      </motion.div>

      {/* 선언형 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="pbl-card"
        style={{ padding: 0, overflow: "hidden" }}
      >
        <div style={{
          padding: "14px 20px",
          background: "#F0FDF4",
          borderBottom: "1px solid #BBF7D0",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
          <span style={{ fontSize: "1.2rem" }}>⚛️</span>
          <div>
            <div style={{ fontWeight: 800, color: "#16A34A", fontSize: "0.95rem" }}>선언형 (React)</div>
            <div style={{ fontSize: "0.72rem", color: "#166534" }}>"무엇을 보여줄지" — 상태가 화면을 결정</div>
          </div>
        </div>
        <div style={{ background: "#fafafa" }}>
          <SyntaxHighlighter language="jsx" style={oneLight} customStyle={codeStyle}>
{`function Counter() {
  const [count, setCount] =
    React.useState(0);

  return (
    <div>
      {/* 상태가 바뀌면 React가 알아서 갱신 */}
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}`}
          </SyntaxHighlighter>
        </div>
        <div style={{ padding: "12px 20px", background: "#F0FDF4", borderTop: "1px solid #BBF7D0" }}>
          <p style={{ margin: 0, fontSize: "0.78rem", color: "#166534", fontWeight: 600 }}>
            ✅ 상태(count)만 바꾸면 React가 화면을 다시 그려줌. DOM 조작 코드 없음
          </p>
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      style={{
        marginTop: "1.5rem",
        padding: "18px 24px",
        background: "linear-gradient(135deg, rgba(97,218,251,0.06), rgba(16,185,129,0.06))",
        borderRadius: "14px",
        border: "1px solid rgba(97,218,251,0.15)",
        textAlign: "center",
      }}
    >
      <p style={{ margin: 0, fontSize: "1rem", fontWeight: 800, color: "#111" }}>
        🔑 핵심: <span style={{ color: "#61DAFB" }}>상태(State)</span>가 바뀌면 →{" "}
        <span style={{ color: "#10B981" }}>React가 화면을 다시 그린다</span>
        <span style={{ display: "block", fontSize: "0.82rem", color: "#666", fontWeight: 600, marginTop: "6px" }}>
          개발자는 '어떻게 바꿀지' 가 아니라 '어떤 상태일 때 어떻게 보일지'만 정의
        </span>
      </p>
    </motion.div>
  </div>
);
