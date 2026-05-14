import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeStyle = {
  margin: 0,
  padding: "14px 18px",
  fontSize: "12px",
  fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
  background: "transparent",
  lineHeight: "1.6",
};

/* ───── 슬라이드 0: 미션 완성 프리뷰 ───── */

const PreviewHeader = ({ name, subtitle }) => (
  <div style={{
    background: "linear-gradient(135deg, #FF6000, #FF8C42)",
    borderRadius: "12px 12px 0 0",
    padding: "20px 24px",
    color: "white",
    fontFamily: "sans-serif",
  }}>
    <h2 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 900 }}>🦁 {name}</h2>
    <p style={{ margin: "4px 0 0", fontSize: "0.78rem", opacity: 0.88 }}>{subtitle}</p>
  </div>
);

const PreviewProfileCard = ({ name, role, emoji, color }) => (
  <div style={{
    background: "white",
    borderRadius: "10px",
    padding: "12px",
    border: `2px solid ${color}25`,
    textAlign: "center",
    flex: 1,
    minWidth: "80px",
    fontFamily: "sans-serif",
  }}>
    <div style={{ fontSize: "1.6rem" }}>{emoji}</div>
    <div style={{ fontWeight: 800, fontSize: "0.72rem", color, marginTop: "5px" }}>{name}</div>
    <div style={{ fontSize: "0.64rem", color: "#888", marginTop: "2px" }}>{role}</div>
  </div>
);

const PreviewSkillBadge = ({ skill }) => (
  <span style={{
    background: "rgba(255,96,0,0.08)",
    color: "#EA580C",
    borderRadius: "20px",
    padding: "3px 10px",
    fontSize: "0.68rem",
    fontWeight: 700,
    border: "1px solid rgba(255,96,0,0.2)",
    fontFamily: "sans-serif",
  }}>{skill}</span>
);

const PreviewProjectCard = ({ title, desc, emoji }) => (
  <div style={{
    background: "white",
    borderRadius: "10px",
    padding: "12px 14px",
    border: "1px solid #f0f0f0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
    flex: 1,
    fontFamily: "sans-serif",
  }}>
    <span style={{ fontSize: "1.3rem" }}>{emoji}</span>
    <div style={{ fontWeight: 800, fontSize: "0.74rem", color: "#111", margin: "6px 0 4px" }}>{title}</div>
    <p style={{ margin: 0, fontSize: "0.66rem", color: "#888", lineHeight: 1.4 }}>{desc}</p>
  </div>
);

export const MissionPreview = () => (
  <div className="animate-up">
    <h2>
      미션 <span style={{ color: "var(--ll-orange)" }}>완성 예시</span>
    </h2>
    <p className="lead">
      완성하면 이런 포트폴리오가 만들어져요. 내용은 자유롭게 채우면 됩니다!
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "24px", marginTop: "1.2rem", alignItems: "start" }}>
      {/* 좌: 컴포넌트 구조 */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        style={{ width: "220px", display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <h3 style={{ fontSize: "0.82rem", fontWeight: 800, color: "#111", margin: 0 }}>🧩 컴포넌트 구성</h3>
        <div style={{ background: "#f8fafc", borderRadius: "10px", padding: "14px 16px", border: "1px solid #e5e7eb", fontFamily: "var(--font-mono)", fontSize: "0.76rem", lineHeight: 2 }}>
          {[
            { indent: 0, text: "<App>",          color: "var(--ll-orange)" },
            { indent: 1, text: "<Header />",      color: "#61DAFB" },
            { indent: 1, text: "<ProfileCard />", color: "#10B981" },
            { indent: 1, text: "<ProfileCard />", color: "#10B981" },
            { indent: 1, text: "<ProfileCard />", color: "#10B981" },
            { indent: 1, text: "<SkillList />",   color: "#8B5CF6" },
            { indent: 1, text: "<ProjectCard />", color: "#F59E0B" },
            { indent: 1, text: "<ProjectCard />", color: "#F59E0B" },
            { indent: 0, text: "</App>",          color: "var(--ll-orange)" },
          ].map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              style={{ paddingLeft: `${row.indent * 16}px`, color: row.color, fontWeight: 700 }}
            >
              {row.text}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{
            background: "rgba(255,96,0,0.06)",
            borderRadius: "10px",
            padding: "12px 14px",
            border: "1px solid rgba(255,96,0,0.15)",
          }}
        >
          <p style={{ margin: 0, fontSize: "0.78rem", fontWeight: 700, color: "var(--ll-orange)", lineHeight: 1.5 }}>
            ✨ 여러분만의 이름, 소개,<br />
            스킬, 프로젝트로 채워보세요!
          </p>
        </motion.div>
      </motion.div>

      {/* 우: 실제 렌더링 프리뷰 */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25 }}
        style={{
          borderRadius: "14px",
          overflow: "hidden",
          border: "1px solid #e5e7eb",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
        }}
      >
        {/* 브라우저 크롬 */}
        <div style={{ background: "#f1f3f5", padding: "8px 14px", borderBottom: "1px solid #e5e7eb", display: "flex", alignItems: "center", gap: "6px" }}>
          {["#ff5f56","#ffbd2e","#27c93f"].map(c => (
            <span key={c} style={{ width: "9px", height: "9px", borderRadius: "50%", background: c }} />
          ))}
          <span style={{
            marginLeft: "8px",
            flex: 1,
            background: "white",
            borderRadius: "5px",
            padding: "3px 10px",
            fontSize: "0.68rem",
            color: "#888",
            fontFamily: "var(--font-mono)",
          }}>localhost:5173</span>
        </div>

        {/* 포트폴리오 미리보기 */}
        <div style={{ background: "#f8fafc", padding: "0" }}>
          <PreviewHeader name="김사자의 포트폴리오" subtitle="프론트엔드 개발자를 꿈꾸는 아기사자 🦁" />
          <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
            {/* ProfileCards */}
            <div>
              <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "#555", marginBottom: "8px", fontFamily: "sans-serif" }}>👥 팀원 소개</div>
              <div style={{ display: "flex", gap: "8px" }}>
                <PreviewProfileCard name="김사자" role="FE" emoji="🦁" color="#FF6000" />
                <PreviewProfileCard name="이멋사" role="BE" emoji="🐯" color="#61DAFB" />
                <PreviewProfileCard name="박개발" role="Design" emoji="🎨" color="#8B5CF6" />
              </div>
            </div>
            {/* SkillList */}
            <div>
              <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "#555", marginBottom: "8px", fontFamily: "sans-serif" }}>⚡ 보유 스킬</div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {["HTML", "CSS", "JavaScript", "React", "Vite"].map(s => <PreviewSkillBadge key={s} skill={s} />)}
              </div>
            </div>
            {/* ProjectCards */}
            <div>
              <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "#555", marginBottom: "8px", fontFamily: "sans-serif" }}>🚀 프로젝트</div>
              <div style={{ display: "flex", gap: "8px" }}>
                <PreviewProjectCard emoji="🦁" title="멋사 클론" desc="HTML/CSS로 만든 첫 번째 웹사이트" />
                <PreviewProjectCard emoji="🧮" title="계산기 앱" desc="JavaScript로 만든 인터랙티브 계산기" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

/* ───── 슬라이드 1: Week5 미션 — 3단계 티어 ───── */
const tiers = [
  {
    level: "🟢 기본",
    label: "반드시 완성!",
    color: "#16A34A",
    bg: "rgba(22,163,74,0.05)",
    border: "rgba(22,163,74,0.25)",
    badge: "#F0FDF4",
    badgeText: "#16A34A",
    items: [
      "npm create vite@latest 로 Vite 프로젝트 생성",
      "<Header title subtitle /> 컴포넌트 제작",
      "<ProfileCard name role emoji bio /> 제작",
      "ProfileCard를 나 포함 3명 이상 렌더링",
      "<SkillList skills={[...]} /> — .map()으로 뱃지",
    ],
  },
  {
    level: "🟡 심화",
    label: "도전해봐요!",
    color: "#D97706",
    bg: "rgba(217,119,6,0.05)",
    border: "rgba(217,119,6,0.25)",
    badge: "#FFFBEB",
    badgeText: "#D97706",
    items: [
      "컴포넌트를 src/components/ 폴더에 .jsx 파일로 분리",
      "<ProjectCard title desc emoji /> 2개 이상",
      "<ContactSection /> — 이메일/SNS 링크",
      "각 컴포넌트에 color prop으로 색상 테마 적용",
    ],
  },
  {
    level: "🔴 도전",
    label: "최강 아기사자!",
    color: "#DC2626",
    bg: "rgba(220,38,38,0.05)",
    border: "rgba(220,38,38,0.25)",
    badge: "#FEF2F2",
    badgeText: "#DC2626",
    items: [
      "팀원 데이터를 배열로 만들어 .map() 렌더링",
      "컴포넌트 총 7개 이상 제작",
      "npm run build로 빌드 후 dist/ 폴더 확인",
      "Google Fonts CDN으로 폰트 커스텀",
    ],
  },
];

export const Week5Mission = () => (
  <div className="animate-up">
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
      <h2 style={{ margin: 0 }}>
        5주차 <span style={{ color: "var(--ll-orange)" }}>미션</span>
        <span style={{ fontSize: "1.1rem", color: "var(--ll-dark-grey)", fontWeight: 600, marginLeft: "14px" }}>
          — 나만의 React 자기소개 페이지
        </span>
      </h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          background: "rgba(255,96,0,0.08)", border: "1px solid rgba(255,96,0,0.2)",
          borderRadius: "100px", padding: "5px 14px",
          color: "var(--ll-orange)", fontWeight: 800, fontSize: "0.82rem",
        }}
      >
        📅 마감: 2주 후 수업 전까지
      </motion.div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginTop: "1.5rem" }}>
      {tiers.map((tier, ti) => (
        <motion.div
          key={ti}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + ti * 0.12 }}
          style={{
            background: tier.bg,
            borderRadius: "14px",
            border: `1.5px solid ${tier.border}`,
            overflow: "hidden",
          }}
        >
          {/* 티어 헤더 */}
          <div style={{
            padding: "12px 16px",
            borderBottom: `1px solid ${tier.border}`,
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <span style={{ fontWeight: 900, fontSize: "0.95rem", color: tier.color }}>{tier.level}</span>
            <span style={{
              background: tier.badge, color: tier.badgeText,
              borderRadius: "20px", padding: "2px 10px",
              fontSize: "0.7rem", fontWeight: 700,
              border: `1px solid ${tier.border}`,
            }}>
              {tier.label}
            </span>
          </div>

          {/* 항목 */}
          <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {tier.items.map((item, ii) => (
              <motion.div
                key={ii}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + ti * 0.12 + ii * 0.06 }}
                style={{
                  display: "flex", gap: "8px", alignItems: "flex-start",
                  padding: "8px 10px",
                  background: "white", borderRadius: "8px",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <span style={{ color: tier.color, fontWeight: 900, fontSize: "0.78rem", flexShrink: 0, marginTop: "1px" }}>
                  {ii + 1}.
                </span>
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#111", lineHeight: 1.45 }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* 하단: 제출 안내 */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      style={{
        marginTop: "1.2rem",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "12px",
      }}
    >
      <div style={{
        background: "#F0FDF4", borderRadius: "10px",
        padding: "12px 16px", border: "1px solid #BBF7D0",
        display: "flex", gap: "10px", alignItems: "flex-start",
      }}>
        <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>📁</span>
        <div>
          <div style={{ fontWeight: 800, fontSize: "0.82rem", color: "#16A34A", marginBottom: "3px" }}>제출 형태 (기본 · 심화)</div>
          <p style={{ margin: 0, fontSize: "0.76rem", color: "#444", lineHeight: 1.5 }}>
            Vite 프로젝트 폴더 전체 압축 또는 GitHub 링크.
            <code style={{ fontFamily: "var(--font-mono)", background: "#dcfce7", padding: "1px 5px", borderRadius: "4px" }}>npm run dev</code> 실행 시 에러 없으면 OK
          </p>
        </div>
      </div>
    </motion.div>
  </div>
);

/* ───── 슬라이드 2: 미션 힌트 코드 ───── */
export const Week5MissionHint = () => (
  <div className="animate-up">
    <h2>
      미션 <span style={{ color: "var(--ll-orange)" }}>힌트 코드</span>
    </h2>
    <p className="lead">이 구조를 뼈대로 시작해보세요. import/export로 파일을 연결하는 게 핵심이에요</p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "1.2rem" }}>
      {/* 기본 뼈대 */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #eee" }}
      >
        <div style={{ padding: "10px 16px", background: "#1e1e2e", display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ display: "flex", gap: "5px" }}>
            {["#ff5f56","#ffbd2e","#27c93f"].map(c => (
              <span key={c} style={{ width: "8px", height: "8px", borderRadius: "50%", background: c }} />
            ))}
          </div>
          <span style={{ color: "#888", fontSize: "0.72rem", fontWeight: 600 }}>🟢 기본 · 🟡 심화 — src/App.jsx</span>
        </div>
        <div style={{ background: "#fafafa" }}>
          <SyntaxHighlighter language="jsx" style={oneLight} customStyle={codeStyle}>
{`// 🟡 심화: 컴포넌트를 파일로 분리하면 import!
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import SkillList from './components/SkillList';

// 🟢 기본: App.jsx 안에 바로 작성해도 OK
function Header({ title, subtitle }) { ... }

function ProfileCard({ name, role, emoji, bio }) { ... }

function SkillList({ skills }) {
  return (
    <ul>
      {skills.map((skill, i) => (
        <li key={i}>{skill}</li>
      ))}
    </ul>
  );
}

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];
  return (
    <div>
      <Header
        title="김사자의 포트폴리오"
        subtitle="프론트엔드 개발자를 꿈꿉니다"
      />
      <ProfileCard
        name="김사자" role="프론트엔드 지망"
        emoji="🦁" bio="안녕하세요!"
      />
      <SkillList skills={skills} />
    </div>
  );
}

export default App;`}
          </SyntaxHighlighter>
        </div>
      </motion.div>

      {/* 도전 힌트 */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        style={{ display: "flex", flexDirection: "column", gap: "14px" }}
      >
        <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #FECACA" }}>
          <div style={{ padding: "10px 16px", background: "#1e1e2e", display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ display: "flex", gap: "5px" }}>
              {["#ff5f56","#ffbd2e","#27c93f"].map(c => (
                <span key={c} style={{ width: "8px", height: "8px", borderRadius: "50%", background: c }} />
              ))}
            </div>
            <span style={{ color: "#888", fontSize: "0.72rem", fontWeight: 600 }}>🔴 도전 — 배열 + .map() + 파일 분리</span>
          </div>
          <div style={{ background: "#fafafa" }}>
            <SyntaxHighlighter language="jsx" style={oneLight} customStyle={codeStyle}>
{`// src/components/ProfileCard.jsx
export default function ProfileCard({ name, role, emoji, color }) {
  return (
    <div style={{ borderLeft: \`4px solid \${color}\` }}>
      <h3>{emoji} {name}</h3>
      <p>{role}</p>
    </div>
  );
}

// src/App.jsx
import ProfileCard from './components/ProfileCard';

const members = [
  { name: "김사자", role: "FE", emoji: "🦁", color: "#FF6000" },
  { name: "이멋사", role: "BE", emoji: "🐯", color: "#61DAFB" },
];

function App() {
  return (
    <div>
      {members.map((m, i) => (
        <ProfileCard key={i} {...m} />
      ))}
    </div>
  );
}`}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* 체크리스트 */}
        <div style={{
          background: "rgba(255,96,0,0.04)",
          borderRadius: "12px",
          padding: "14px 16px",
          border: "1px solid rgba(255,96,0,0.15)",
        }}>
          <div style={{ fontWeight: 800, fontSize: "0.82rem", color: "var(--ll-orange)", marginBottom: "10px" }}>
            ✅ 제출 전 셀프 체크
          </div>
          {[
            "npm run dev 실행 시 에러 없이 뜨나요?",
            "import/export가 모두 올바르게 연결됐나요?",
            "컴포넌트 이름이 모두 대문자로 시작하나요?",
            "SkillList가 .map()으로 렌더링되고 있나요?",
          ].map((check, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.07 }}
              style={{
                display: "flex", gap: "8px", alignItems: "flex-start",
                marginBottom: "6px",
                fontSize: "0.78rem", color: "#333", fontWeight: 600, lineHeight: 1.4,
              }}
            >
              <span style={{ color: "#10B981", flexShrink: 0 }}>□</span>
              {check}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

/* ───── 슬라이드 3: WrapUp ───── */
export const Week5WrapUp = () => (
  <div
    style={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <motion.div
      style={{
        position: "absolute",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(97,218,251,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
    />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ position: "relative", zIndex: 1, maxWidth: "800px", width: "100%" }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        style={{ fontSize: "4rem", marginBottom: "1rem" }}
      >
        ⚛️
      </motion.div>

      <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1rem", letterSpacing: "-0.04em" }}>
        <span style={{ color: "var(--ll-black)" }}>5주차 </span>
        <span style={{ color: "var(--ll-orange)" }}>완료!</span>
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px", margin: "2rem 0" }}
      >
        {[
          { icon: "⚛️", label: "React 개요", color: "#61DAFB" },
          { icon: "📝", label: "JSX 문법", color: "#8B5CF6" },
          { icon: "🧩", label: "컴포넌트 분리", color: "#10B981" },
          { icon: "📦", label: "Props 전달", color: "var(--ll-orange)" },
          { icon: "⚡", label: "Vite 실습", color: "#646CFF" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 + i * 0.1 }}
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "16px 12px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
              border: "1px solid #f0f0f0",
            }}
          >
            <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{item.icon}</div>
            <div style={{ fontWeight: 700, fontSize: "0.82rem", color: item.color }}>{item.label}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "14px 28px",
          borderRadius: "100px",
          background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(97,218,251,0.08))",
          border: "1px solid rgba(16,185,129,0.2)",
        }}
      >
        <span style={{ fontSize: "1.2rem" }}>🔁</span>
        <span style={{ fontWeight: 800, fontSize: "1rem", color: "#10B981" }}>
          다음 주: useState · useEffect — 상태와 생애주기!
        </span>
      </motion.div>
    </motion.div>
  </div>
);
