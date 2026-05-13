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

/* ───── 슬라이드 1: Props 소개 (step by step) ───── */
const propsSteps = [
  {
    label: "Step 1: Props란?",
    hint: "부모 컴포넌트가 자식에게 데이터를 전달하는 방법이에요. HTML 속성처럼 작성해요",
    code:
`// props 객체로 데이터를 받아요
function Greeting(props) {
  return (
    <div style={{
      padding: '16px 20px', margin: '8px',
      background: '#FFF7ED', borderRadius: '10px',
      borderLeft: '4px solid #FF6000',
      fontFamily: 'sans-serif',
    }}>
      <h3 style={{ margin: 0, color: '#EA580C' }}>
        안녕하세요, {props.name}님!
      </h3>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '16px' }}>
      {/* name 속성으로 데이터 전달 */}
      <Greeting name="김사자" />
      <Greeting name="이멋사" />
    </div>
  );
}`,
  },
  {
    label: "Step 2: 여러 Props",
    hint: "여러 데이터를 동시에 전달할 수 있어요. 각각 다른 이름의 속성으로 넘겨요",
    code:
`function Greeting(props) {
  return (
    <div style={{
      padding: '16px 20px', margin: '8px 0',
      background: '#FFF7ED', borderRadius: '10px',
      borderLeft: '4px solid #FF6000',
      fontFamily: 'sans-serif',
    }}>
      <h3 style={{ margin: 0, color: '#EA580C' }}>
        {props.emoji} 안녕하세요, {props.name}님!
      </h3>
      <p style={{ margin: '4px 0 0', color: '#666', fontSize: '0.9rem' }}>
        역할: {props.role}
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '16px' }}>
      <Greeting name="김사자" role="프론트엔드" emoji="🦁" />
      <Greeting name="이멋사" role="백엔드" emoji="🐯" />
      <Greeting name="박개발" role="디자이너" emoji="🎨" />
    </div>
  );
}`,
  },
  {
    label: "Step 3: 구조분해(추천)",
    hint: "props 객체를 바로 구조분해하면 props.name 대신 name으로 더 간결하게 쓸 수 있어요",
    code:
`// { name, role, emoji } 로 구조분해!
function Greeting({ name, role, emoji }) {
  return (
    <div style={{
      padding: '16px 20px', margin: '8px 0',
      background: '#FFF7ED', borderRadius: '10px',
      borderLeft: '4px solid #FF6000',
      fontFamily: 'sans-serif',
    }}>
      <h3 style={{ margin: 0, color: '#EA580C' }}>
        {emoji} 안녕하세요, {name}님!
      </h3>
      <p style={{ margin: '4px 0 0', color: '#666', fontSize: '0.9rem' }}>
        역할: {role}
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '16px' }}>
      <Greeting name="김사자" role="프론트엔드" emoji="🦁" />
      <Greeting name="이멋사" role="백엔드" emoji="🐯" />
      <Greeting name="박개발" role="디자이너" emoji="🎨" />
    </div>
  );
}`,
  },
];

export const PropsIntro = () => (
  <div className="animate-up">
    <h2>
      Props: <span style={{ color: "var(--ll-orange)" }}>부모 → 자식 데이터 전달</span>
    </h2>
    <p className="lead" style={{ marginBottom: "1rem" }}>
      같은 컴포넌트에 다른 데이터를 넘겨 다양한 UI를 만들 수 있어요
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "20px", alignItems: "start" }}>
      <LiveReactSandbox
        steps={propsSteps}
        title="Props 실습"
        height="450px"
        autoRun={true}
      />

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        style={{ width: "200px", display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <h3 style={{ fontSize: "0.82rem", fontWeight: 800, color: "#111", margin: 0 }}>📦 Props 흐름</h3>

        <div style={{ background: "#FFF7ED", borderRadius: "10px", padding: "12px", border: "1px solid #FDBA74" }}>
          <div style={{ fontWeight: 700, fontSize: "0.74rem", color: "#C2410C", marginBottom: "8px" }}>📤 부모에서 전달</div>
          <div style={{ background: "#fafafa", borderRadius: "6px", overflow: "hidden", border: "1px solid #eee" }}>
            <SyntaxHighlighter language="jsx" style={oneLight} customStyle={{ ...codeStyle, fontSize: "11px", padding: "10px 12px" }}>
{`<Card
  name="김사자"
  role="FE"
/>`}
            </SyntaxHighlighter>
          </div>
        </div>

        <div style={{ textAlign: "center", color: "var(--ll-orange)", fontWeight: 700, fontSize: "1.2rem" }}>↓</div>

        <div style={{ background: "#F0FDF4", borderRadius: "10px", padding: "12px", border: "1px solid #BBF7D0" }}>
          <div style={{ fontWeight: 700, fontSize: "0.74rem", color: "#166534", marginBottom: "8px" }}>📥 자식에서 사용</div>
          <div style={{ background: "#fafafa", borderRadius: "6px", overflow: "hidden", border: "1px solid #eee" }}>
            <SyntaxHighlighter language="jsx" style={oneLight} customStyle={{ ...codeStyle, fontSize: "11px", padding: "10px 12px" }}>
{`function Card({name}) {
  return <h3>{name}</h3>;
}`}
            </SyntaxHighlighter>
          </div>
        </div>

        <div style={{ background: "rgba(255,96,0,0.05)", borderRadius: "8px", padding: "10px 12px", border: "1px solid rgba(255,96,0,0.15)" }}>
          <p style={{ margin: 0, fontSize: "0.74rem", fontWeight: 700, color: "var(--ll-orange)" }}>
            💡 Props는 읽기 전용! 자식은 받기만 해요
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

/* ───── 슬라이드 2: ProfileCard 종합 데모 ───── */
const profileCardCode =
`function ProfileCard({ name, role, emoji, color }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '24px',
      margin: '8px',
      border: \`2px solid \${color}30\`,
      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
      textAlign: 'center',
      fontFamily: 'sans-serif',
      flex: '1',
      minWidth: '150px',
    }}>
      <div style={{ fontSize: '2.8rem', marginBottom: '10px' }}>{emoji}</div>
      <h3 style={{ margin: '0 0 6px', color: color, fontSize: '1rem' }}>
        {name}
      </h3>
      <span style={{
        background: \`\${color}15\`, color: color,
        padding: '3px 12px', borderRadius: '20px',
        fontSize: '0.8rem', fontWeight: 700,
      }}>
        {role}
      </span>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '16px' }}>
      <h2 style={{ fontFamily: 'sans-serif', textAlign: 'center',
                   color: '#111', marginBottom: '12px' }}>
        🦁 멋사 14기 팀원
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ProfileCard name="김사자" role="프론트엔드" emoji="🦁" color="#FF6000" />
        <ProfileCard name="이멋사" role="백엔드" emoji="🐯" color="#61DAFB" />
        <ProfileCard name="박개발" role="디자이너" emoji="🎨" color="#8B5CF6" />
      </div>
    </div>
  );
}`;

/* ───── 실습: Props 전달 ───── */
export const PropsPractice = () => (
  <div className="animate-up">
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
      <h2 style={{ margin: 0 }}>
        🎯 실습 —{" "}
        <span style={{ color: "var(--ll-orange)" }}>Props로 다른 데이터 넘기기</span>
      </h2>
      <div style={{ display: "flex", gap: "8px" }}>
        <span style={{ background: "rgba(255,96,0,0.1)", color: "var(--ll-orange)", borderRadius: "100px", padding: "4px 14px", fontSize: "0.78rem", fontWeight: 800, border: "1px solid rgba(255,96,0,0.2)" }}>⏱ 7분</span>
        <span style={{ background: "#F0FDF4", color: "#16A34A", borderRadius: "100px", padding: "4px 14px", fontSize: "0.78rem", fontWeight: 800, border: "1px solid #BBF7D0" }}>CDN 환경</span>
      </div>
    </div>
    <p className="lead" style={{ marginTop: "0.5rem" }}>
      하드코딩된 컴포넌트를 props를 받는 재사용 가능한 컴포넌트로 바꿔보세요
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "20px", marginTop: "1rem" }}>
      {/* 할 일 목록 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ fontWeight: 800, fontSize: "0.82rem", color: "#111", marginBottom: "2px" }}>📋 할 일</div>
        {[
          { no: 1, tier: "🟢", text: "ProfileCard가 name, role, emoji 를 props로 받도록 수정하세요", color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0" },
          { no: 2, tier: "🟢", text: "나 포함 팀원 3명 이상에게 각각 다른 데이터를 넘겨보세요", color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0" },
          { no: 3, tier: "🟢", text: "props 대신 구조분해 { name, role, emoji }를 사용해보세요", color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0" },
          { no: 4, tier: "🟡", text: "color prop을 추가해서 카드 왼쪽 선 색상을 바꿔보세요", color: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
          { no: 5, tier: "🔴", text: "팀원 데이터를 배열로 만들고 .map()으로 한 번에 렌더링해보세요", color: "#DC2626", bg: "#FEF2F2", border: "#FECACA" },
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
          style={{ marginTop: "4px", background: "rgba(255,96,0,0.05)", borderRadius: "10px", padding: "10px 14px", border: "1px solid rgba(255,96,0,0.15)" }}
        >
          <p style={{ margin: 0, fontSize: "0.78rem", color: "var(--ll-orange)", fontWeight: 700 }}>
            💡 힌트: <code style={{ fontFamily: "var(--font-mono)" }}>{"<ProfileCard name=\"김사자\" role=\"FE\" emoji=\"🦁\" />"}</code>처럼 HTML 속성처럼 넘겨요
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
{`// 🟢 1. 지금은 하드코딩 — props를 받도록 바꿔보세요!
function ProfileCard() {
  return (
    <div style={{
      padding: '16px', margin: '8px 0',
      background: '#FFF7ED', borderRadius: '10px',
      borderLeft: '4px solid #FF6000',
      fontFamily: 'sans-serif',
    }}>
      <h3 style={{ margin: 0, color: '#EA580C' }}>
        🦁 김사자  {/* props.name 으로 바꾸세요 */}
      </h3>
      <p style={{ margin: '4px 0 0', color: '#666' }}>
        프론트엔드  {/* props.role 으로 바꾸세요 */}
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '16px' }}>
      {/* 🟢 2. 3명 이상에게 다른 데이터를 넘기세요 */}
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
}`}
          </SyntaxHighlighter>
        </div>
      </motion.div>
    </div>
  </div>
);

export const PropsDestructuringAndDemo = () => (
  <div className="animate-up">
    <h2>
      Props <span style={{ color: "var(--ll-orange)" }}>종합 데모 — ProfileCard</span>
    </h2>
    <p className="lead" style={{ marginBottom: "1rem" }}>
      하나의 컴포넌트로 여러 카드를 만들어봐요. 미션에서 이 패턴을 직접 구현합니다!
    </p>

    <LiveReactSandbox
      code={profileCardCode}
      title="ProfileCard Props 데모"
      height="460px"
      autoRun={true}
      description="팀원 정보를 추가하거나 color, emoji, role을 바꿔보세요"
    />
  </div>
);
