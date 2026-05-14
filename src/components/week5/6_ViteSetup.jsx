import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeStyle = {
  margin: 0,
  padding: "16px 20px",
  fontSize: "12.5px",
  fontFamily: '"Fira Code", Consolas, Monaco, monospace',
  background: "transparent",
  lineHeight: "1.6",
};

/* ───── 슬라이드 1: CDN 한계 → Vite 소개 ───── */
export const ViteWhy = () => (
  <div className="animate-up">
    <h2>
      CDN의 한계 →{" "}
      <span style={{ color: "#646CFF" }}>Vite</span>로
    </h2>
    <p className="lead">
      CDN으로 React를 배웠어요. 이제 실제 개발 환경으로 넘어갈 시간입니다
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "1.5rem" }}>
      {/* CDN 한계 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="pbl-card"
        style={{ background: "#FEF2F2", borderColor: "rgba(239,68,68,0.2)" }}
      >
        <div style={{ fontWeight: 800, color: "#DC2626", fontSize: "0.9rem", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span>😓</span> CDN 방식의 한계
        </div>
        {[
          { icon: "🐌", title: "Babel 실시간 변환", desc: "페이지 로딩마다 JSX를 JS로 변환 → 느림" },
          { icon: "📄", title: "파일 분리 불가", desc: "모든 코드가 한 HTML 파일 안에 뭉쳐있어야 함" },
          { icon: "🔄", title: "핫 리로드 없음", desc: "코드 수정 → 직접 새로고침 해야 반영" },
          { icon: "📦", title: "npm 패키지 사용 불가", desc: "라이브러리 설치해서 쓰는 게 불가능" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 + i * 0.08 }}
            style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "flex-start" }}
          >
            <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.82rem", color: "#DC2626" }}>{item.title}</div>
              <p style={{ margin: 0, fontSize: "0.75rem", color: "#666" }}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Vite 소개 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="pbl-card"
        style={{ background: "rgba(100,108,255,0.04)", borderColor: "rgba(100,108,255,0.2)" }}
      >
        <div style={{ fontWeight: 800, color: "#646CFF", fontSize: "0.9rem", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span>⚡</span> Vite가 해결합니다
        </div>
        {[
          {
            icon: "⚡",
            color: "#646CFF",
            title: "즉각적인 HMR(Hot Module Replacement)",
            desc: "코드 저장하면 브라우저가 0.1초 안에 자동 반영",
          },
          {
            icon: "📂",
            color: "#10B981",
            title: "파일 분리",
            desc: "컴포넌트마다 .jsx 파일로 분리해서 관리",
          },
          {
            icon: "📦",
            color: "#F59E0B",
            title: "npm 생태계",
            desc: "수십만 개 라이브러리를 설치해서 자유롭게 사용",
          },
          {
            icon: "🔨",
            color: "var(--ll-orange)",
            title: "빌드 최적화",
            desc: "npm run build 로 배포용 파일 자동 생성",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.08 }}
            style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "flex-start" }}
          >
            <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.82rem", color: item.color }}>{item.title}</div>
              <p style={{ margin: 0, fontSize: "0.75rem", color: "#666" }}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      style={{
        marginTop: "1.5rem",
        padding: "14px 24px",
        background: "linear-gradient(135deg, rgba(100,108,255,0.08), rgba(97,218,251,0.08))",
        borderRadius: "12px",
        border: "1px solid rgba(100,108,255,0.2)",
        display: "flex",
        alignItems: "center",
        gap: "14px",
      }}
    >
      <span style={{ fontSize: "1.6rem", flexShrink: 0 }}>🚀</span>
      <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 800, color: "#111" }}>
        지금부터 <span style={{ color: "#646CFF" }}>Vite</span>로 진짜 React 프로젝트를 만들어봅니다.{" "}
        <span style={{ color: "#10B981" }}>미션도 Vite 기반</span>으로 진행돼요!
      </p>
    </motion.div>
  </div>
);

/* ───── 슬라이드 1.5: Node.js & npm & Vite 란? ───── */
export const WhatIsNodeNpm = () => (
  <div className="animate-up">
    <h2>
      <span style={{ color: "#68A063" }}>Node.js</span>
      {" · "}
      <span style={{ color: "#CB3837" }}>npm</span>
      {" · "}
      <span style={{ color: "#646CFF" }}>Vite</span>
      {"  가 뭐야?"}
    </h2>
    <p className="lead">
      Vite를 쓰기 전에, 이 세 가지가 무엇이고 어떤 관계인지 알아봐요
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "1.5rem" }}>
      {/* Node.js */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="pbl-card"
        style={{ background: "rgba(104,160,99,0.05)", borderColor: "rgba(104,160,99,0.3)", padding: "24px" }}
      >
        <div style={{ fontSize: "2.8rem", marginBottom: "12px" }}>🟢</div>
        <h3 style={{ fontWeight: 900, color: "#68A063", fontSize: "1.1rem", marginBottom: "8px" }}>Node.js</h3>
        <p style={{ fontSize: "0.82rem", color: "#444", lineHeight: 1.65, marginBottom: "14px" }}>
          JavaScript를 <strong>브라우저 밖</strong> — 내 컴퓨터에서 직접 실행하게 해주는 <strong>실행 환경</strong>
        </p>
        <div style={{ background: "rgba(104,160,99,0.08)", borderRadius: "8px", padding: "10px 12px", marginBottom: "10px", fontSize: "0.78rem", color: "#555", lineHeight: 1.5 }}>
          🔍 비유: 크롬 브라우저 없이 JS를 돌리는 엔진
        </div>
        <div style={{
          background: "#1e1e2e",
          borderRadius: "7px",
          padding: "8px 12px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          color: "#27c93f",
        }}>
          $ node -v<br />
          <span style={{ color: "#888" }}>v20.x.x ← 이렇게 뜨면 OK</span>
        </div>
      </motion.div>

      {/* npm */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32 }}
        className="pbl-card"
        style={{ background: "rgba(203,56,55,0.05)", borderColor: "rgba(203,56,55,0.25)", padding: "24px" }}
      >
        <div style={{ fontSize: "2.8rem", marginBottom: "12px" }}>📦</div>
        <h3 style={{ fontWeight: 900, color: "#CB3837", fontSize: "1.1rem", marginBottom: "8px" }}>npm</h3>
        <p style={{ fontSize: "0.82rem", color: "#444", lineHeight: 1.65, marginBottom: "14px" }}>
          <strong>Node Package Manager</strong> — 전 세계 개발자가 만든 JS 패키지(라이브러리)를 <strong>설치·관리</strong>하는 도구
        </p>
        <div style={{ background: "rgba(203,56,55,0.07)", borderRadius: "8px", padding: "10px 12px", marginBottom: "10px", fontSize: "0.78rem", color: "#555", lineHeight: 1.5 }}>
          🔍 비유: 앱스토어처럼, 코드 라이브러리를 다운받는 것
        </div>
        <div style={{
          background: "#1e1e2e",
          borderRadius: "7px",
          padding: "8px 12px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          color: "#27c93f",
        }}>
          $ npm install react<br />
          <span style={{ color: "#888" }}># React를 내 프로젝트에 설치</span>
        </div>
      </motion.div>

      {/* Vite */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.44 }}
        className="pbl-card"
        style={{ background: "rgba(100,108,255,0.05)", borderColor: "rgba(100,108,255,0.25)", padding: "24px" }}
      >
        <div style={{ fontSize: "2.8rem", marginBottom: "12px" }}>⚡</div>
        <h3 style={{ fontWeight: 900, color: "#646CFF", fontSize: "1.1rem", marginBottom: "8px" }}>Vite</h3>
        <p style={{ fontSize: "0.82rem", color: "#444", lineHeight: 1.65, marginBottom: "14px" }}>
          React 개발 환경을 빠르게 세팅해주는 <strong>빌드 도구</strong>. Node.js + npm이 있어야 동작함
        </p>
        <div style={{ background: "rgba(100,108,255,0.08)", borderRadius: "8px", padding: "10px 12px", marginBottom: "10px", fontSize: "0.78rem", color: "#555", lineHeight: 1.5 }}>
          🔍 비유: 공사 현장의 발판처럼, 코딩에만 집중할 수 있게 환경을 준비
        </div>
        <div style={{
          background: "#1e1e2e",
          borderRadius: "7px",
          padding: "8px 12px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          color: "#27c93f",
        }}>
          $ npm create vite@latest<br />
          <span style={{ color: "#888" }}># React 프로젝트 생성!</span>
        </div>
      </motion.div>
    </div>

    {/* 관계 흐름 */}
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      style={{
        marginTop: "1.5rem",
        padding: "16px 24px",
        background: "white",
        borderRadius: "14px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0",
      }}
    >
      {[
        { label: "Node.js", sub: "실행 환경", color: "#68A063", bg: "rgba(104,160,99,0.08)" },
        { arrow: true },
        { label: "npm", sub: "패키지 관리", color: "#CB3837", bg: "rgba(203,56,55,0.08)" },
        { arrow: true },
        { label: "Vite", sub: "개발 환경", color: "#646CFF", bg: "rgba(100,108,255,0.08)" },
        { arrow: true },
        { label: "우리 React 앱", sub: "완성!", color: "var(--ll-orange)", bg: "rgba(255,96,0,0.08)" },
      ].map((item, i) =>
        item.arrow ? (
          <span key={i} style={{ color: "#94a3b8", fontWeight: 700, fontSize: "1.4rem", padding: "0 10px" }}>→</span>
        ) : (
          <div key={i} style={{ background: item.bg, borderRadius: "10px", padding: "10px 18px", textAlign: "center", minWidth: "120px" }}>
            <div style={{ fontWeight: 800, fontSize: "0.88rem", color: item.color }}>{item.label}</div>
            <div style={{ fontSize: "0.72rem", color: "#888", marginTop: "3px" }}>{item.sub}</div>
          </div>
        )
      )}
    </motion.div>
  </div>
);

/* ───── 슬라이드 2: Vite 설치 ───── */
export const ViteInstall = () => (
  <div className="animate-up">
    <h2>
      Vite <span style={{ color: "#646CFF" }}>프로젝트 생성</span>
    </h2>
    <p className="lead">터미널 명령어 3줄로 React 개발 환경이 완성됩니다</p>

    <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "24px", marginTop: "1.5rem" }}>
      {/* 명령어 블록 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {[
          {
            step: "① 프로젝트 생성",
            cmd: "npm create vite@latest my-portfolio -- --template react",
            desc: "my-portfolio 폴더에 React + Vite 프로젝트 생성",
            color: "#646CFF",
          },
          {
            step: "② 패키지 설치",
            cmd: "cd my-portfolio\nnpm install",
            desc: "package.json에 정의된 패키지(React 등)를 node_modules에 설치",
            color: "#10B981",
          },
          {
            step: "③ 개발 서버 실행",
            cmd: "npm run dev",
            desc: "localhost:5173 에서 개발 서버 시작. 저장하면 브라우저 자동 반영!",
            color: "var(--ll-orange)",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
            style={{ borderRadius: "12px", overflow: "hidden", border: `1px solid ${item.color}25` }}
          >
            <div style={{
              padding: "10px 16px",
              background: "#1e1e2e",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
              <div style={{ display: "flex", gap: "5px" }}>
                {["#ff5f56", "#ffbd2e", "#27c93f"].map(c => (
                  <span key={c} style={{ width: "8px", height: "8px", borderRadius: "50%", background: c }} />
                ))}
              </div>
              <span style={{ color: item.color, fontSize: "0.78rem", fontWeight: 700 }}>
                {item.step}
              </span>
            </div>
            <div style={{ background: "#f8fafc" }}>
              <SyntaxHighlighter language="bash" style={oneLight} customStyle={{ ...codeStyle, padding: "12px 16px", fontSize: "13px" }}>
                {item.cmd}
              </SyntaxHighlighter>
            </div>
            <div style={{
              padding: "8px 16px",
              background: `${item.color}08`,
              borderTop: `1px solid ${item.color}15`,
              fontSize: "0.76rem",
              color: "#555",
              fontWeight: 600,
            }}>
              💡 {item.desc}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 우측 안내 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {/* 성공 배지 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            background: "#F0FDF4",
            borderRadius: "12px",
            padding: "18px 20px",
            border: "1px solid #BBF7D0",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "8px" }}>✅</div>
          <div style={{ fontWeight: 800, color: "#16A34A", fontSize: "1rem", marginBottom: "6px" }}>
            성공!
          </div>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#646CFF",
            background: "rgba(100,108,255,0.08)",
            padding: "8px 16px",
            borderRadius: "8px",
            display: "inline-block",
          }}>
            localhost:5173
          </div>
          <p style={{ margin: "8px 0 0", fontSize: "0.78rem", color: "#666" }}>
            브라우저에서 이 주소를 열면 React 앱이 떠 있어요!
          </p>
        </motion.div>

        {/* Node.js 주의 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{
            background: "#FFFBEB",
            borderRadius: "12px",
            padding: "14px 16px",
            border: "1px solid #FDE68A",
          }}
        >
          <div style={{ fontWeight: 800, color: "#D97706", fontSize: "0.82rem", marginBottom: "8px" }}>
            ⚠️ 사전 준비: Node.js 필요
          </div>
          <p style={{ margin: 0, fontSize: "0.76rem", color: "#444", lineHeight: 1.5 }}>
            터미널에서 먼저 확인하세요:
          </p>
          <div style={{
            background: "#1e1e2e",
            borderRadius: "6px",
            padding: "8px 12px",
            marginTop: "8px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.82rem",
            color: "#27c93f",
          }}>
            $ node -v &nbsp;&nbsp;
            <span style={{ color: "#888" }}># v18 이상이면 OK</span>
          </div>
        </motion.div>

        {/* 폴더명 팁 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            background: "rgba(100,108,255,0.05)",
            borderRadius: "12px",
            padding: "14px 16px",
            border: "1px solid rgba(100,108,255,0.15)",
          }}
        >
          <div style={{ fontWeight: 800, color: "#646CFF", fontSize: "0.82rem", marginBottom: "6px" }}>
            💡 폴더 이름은 자유롭게!
          </div>
          <p style={{ margin: 0, fontSize: "0.76rem", color: "#444", lineHeight: 1.5 }}>
            <code style={{ fontFamily: "var(--font-mono)", background: "rgba(100,108,255,0.1)", padding: "1px 5px", borderRadius: "4px" }}>my-portfolio</code> 대신{" "}
            <code style={{ fontFamily: "var(--font-mono)", background: "rgba(100,108,255,0.1)", padding: "1px 5px", borderRadius: "4px" }}>lion-intro</code>,{" "}
            <code style={{ fontFamily: "var(--font-mono)", background: "rgba(100,108,255,0.1)", padding: "1px 5px", borderRadius: "4px" }}>my-app</code> 등 원하는 이름으로 바꿔도 돼요
          </p>
        </motion.div>
      </div>
    </div>
  </div>
);

/* ───── 슬라이드 3: 프로젝트 구조 ───── */
const fileTree = [
  { indent: 0, name: "my-portfolio/", icon: "📁", color: "#646CFF", desc: "프로젝트 루트" },
  { indent: 1, name: "public/", icon: "📂", color: "#94a3b8", desc: "정적 파일 (이미지 등)" },
  { indent: 1, name: "src/", icon: "📂", color: "#646CFF", desc: "우리가 코드 쓰는 곳!" },
  { indent: 2, name: "components/", icon: "📂", color: "#10B981", desc: "우리가 만들 컴포넌트들" },
  { indent: 2, name: "App.jsx", icon: "⚛️", color: "var(--ll-orange)", desc: "메인 컴포넌트" },
  { indent: 2, name: "App.css", icon: "🎨", color: "#8B5CF6", desc: "App 스타일" },
  { indent: 2, name: "index.css", icon: "🎨", color: "#8B5CF6", desc: "전역 스타일" },
  { indent: 2, name: "main.jsx", icon: "🚀", color: "#61DAFB", desc: "ReactDOM.createRoot 위치" },
  { indent: 1, name: "index.html", icon: "📄", color: "#F59E0B", desc: "진입점 HTML (거의 안 건드림)" },
  { indent: 1, name: "package.json", icon: "📋", color: "#94a3b8", desc: "패키지 목록 & 스크립트" },
  { indent: 1, name: "vite.config.js", icon: "⚙️", color: "#94a3b8", desc: "Vite 설정 (거의 안 건드림)" },
];

export const ViteProjectStructure = () => (
  <div className="animate-up">
    <h2>
      Vite <span style={{ color: "#646CFF" }}>프로젝트 구조</span>
    </h2>
    <p className="lead">어떤 파일이 어디에 있는지 파악해봐요. 우리가 주로 건드리는 건 <code style={{ fontFamily: "var(--font-mono)", color: "#646CFF" }}>src/</code> 폴더예요</p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "1.5rem" }}>
      {/* 파일 트리 */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          background: "#0f172a",
          borderRadius: "14px",
          padding: "20px 24px",
          fontFamily: "var(--font-mono)",
        }}
      >
        <div style={{ color: "#475569", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "14px" }}>
          PROJECT STRUCTURE
        </div>
        {fileTree.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.05 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              paddingLeft: `${item.indent * 20}px`,
              marginBottom: "6px",
            }}
          >
            {item.indent > 0 && (
              <span style={{ color: "#334155", fontSize: "0.75rem", marginLeft: "-14px", marginRight: "6px" }}>
                {item.indent > 1 ? "  └" : "└"}
              </span>
            )}
            <span style={{ fontSize: "0.9rem" }}>{item.icon}</span>
            <span style={{ color: item.color, fontWeight: item.indent === 0 ? 700 : 600, fontSize: "0.82rem" }}>
              {item.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* 파일별 설명 */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        {[
          {
            icon: "🚀",
            color: "#61DAFB",
            bg: "rgba(97,218,251,0.06)",
            name: "main.jsx",
            desc: "앱의 진입점. ReactDOM.createRoot()로 React를 HTML에 연결. 거의 수정 안 해요",
          },
          {
            icon: "⚛️",
            color: "var(--ll-orange)",
            bg: "rgba(255,96,0,0.06)",
            name: "App.jsx",
            desc: "최상위 컴포넌트. 여기서 다른 컴포넌트들을 import해서 조립해요",
          },
          {
            icon: "📂",
            color: "#10B981",
            bg: "rgba(16,185,129,0.06)",
            name: "src/components/",
            desc: "우리가 만드는 컴포넌트 .jsx 파일들이 여기 들어가요. 직접 만들어야 해요!",
          },
          {
            icon: "📋",
            color: "#8B5CF6",
            bg: "rgba(139,92,246,0.06)",
            name: "package.json",
            desc: "npm 패키지 목록과 스크립트(dev, build)가 정의돼 있어요",
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
              border: `1px solid ${item.color}25`,
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{item.icon}</span>
            <div>
              <code style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "0.82rem", color: item.color }}>
                {item.name}
              </code>
              <p style={{ margin: "4px 0 0", fontSize: "0.76rem", color: "#555", lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{
            background: "rgba(100,108,255,0.06)",
            borderRadius: "10px",
            padding: "12px 14px",
            border: "1px solid rgba(100,108,255,0.2)",
          }}
        >
          <p style={{ margin: 0, fontSize: "0.82rem", fontWeight: 700, color: "#646CFF" }}>
            💡 처음엔 <code style={{ fontFamily: "var(--font-mono)" }}>App.jsx</code>만 수정하면 돼요.
            컴포넌트가 많아지면 <code style={{ fontFamily: "var(--font-mono)" }}>src/components/</code> 폴더를 직접 만들어서 분리하세요.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

/* ───── 슬라이드 4: 컴포넌트 파일 분리 ───── */
export const ViteComponentFiles = () => (
  <div className="animate-up">
    <h2>
      컴포넌트를{" "}
      <span style={{ color: "#646CFF" }}>파일로 분리</span>하기
    </h2>
    <p className="lead">
      Vite에서는 컴포넌트마다 <code style={{ fontFamily: "var(--font-mono)", color: "#646CFF" }}>.jsx</code> 파일을 만들고{" "}
      <code style={{ fontFamily: "var(--font-mono)", color: "#10B981" }}>export / import</code>로 연결해요
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "1.5rem" }}>
      {/* CDN 방식 */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #FECACA" }}
      >
        <div style={{ padding: "10px 16px", background: "#FEF2F2", borderBottom: "1px solid #FECACA", fontWeight: 700, color: "#DC2626", fontSize: "0.82rem" }}>
          📄 CDN 방식 — 한 파일에 다 넣기
        </div>
        <div style={{ background: "#fafafa" }}>
          <SyntaxHighlighter language="html" style={oneLight} customStyle={{ ...codeStyle, fontSize: "11.5px", padding: "12px 16px" }}>
{`<!-- index.html -->
<script type="text/babel">
  function Header({ title }) {
    return <h1>{title}</h1>;
  }

  function ProfileCard({ name }) {
    return <p>{name}</p>;
  }

  function App() {
    return (
      <>
        <Header title="포트폴리오" />
        <ProfileCard name="김사자" />
      </>
    );
  }
  // 모든 컴포넌트가 한 파일에 🤯
</script>`}
          </SyntaxHighlighter>
        </div>
      </motion.div>

      {/* Vite 방식 */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #BBF7D0" }}
      >
        <div style={{ padding: "10px 16px", background: "#F0FDF4", borderBottom: "1px solid #BBF7D0", fontWeight: 700, color: "#16A34A", fontSize: "0.82rem" }}>
          📂 Vite 방식 — 파일로 분리!
        </div>
        <div style={{ background: "#fafafa" }}>
          <SyntaxHighlighter language="jsx" style={oneLight} customStyle={{ ...codeStyle, fontSize: "11.5px", padding: "12px 16px" }}>
{`// src/components/Header.jsx
export default function Header({ title }) {
  return <h1>{title}</h1>;
}

// src/components/ProfileCard.jsx
export default function ProfileCard({ name }) {
  return <p>{name}</p>;
}

// src/App.jsx
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <>
      <Header title="포트폴리오" />
      <ProfileCard name="김사자" />
    </>
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
        marginTop: "1.2rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "12px",
      }}
    >
      {[
        {
          icon: "📤",
          color: "#646CFF",
          title: "export default",
          desc: "이 파일의 컴포넌트를 다른 곳에서 쓸 수 있게 내보냄",
          code: "export default function Header() {}",
        },
        {
          icon: "📥",
          color: "#10B981",
          title: "import",
          desc: "다른 파일에서 컴포넌트를 가져와서 사용",
          code: "import Header from './components/Header'",
        },
        {
          icon: "📍",
          color: "var(--ll-orange)",
          title: "경로 주의",
          desc: "./는 현재 파일 기준 상대 경로. 확장자(.jsx) 생략 가능",
          code: "'./components/Header'",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + i * 0.1 }}
          style={{
            background: "white",
            borderRadius: "10px",
            padding: "12px 14px",
            border: `1px solid ${item.color}20`,
            borderTop: `3px solid ${item.color}`,
          }}
        >
          <div style={{ fontWeight: 800, fontSize: "0.82rem", color: item.color, marginBottom: "6px" }}>
            {item.icon} {item.title}
          </div>
          <p style={{ fontSize: "0.74rem", color: "#555", margin: "0 0 8px", lineHeight: 1.5 }}>{item.desc}</p>
          <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#666", background: "#f5f5f5", padding: "3px 6px", borderRadius: "4px", display: "block" }}>
            {item.code}
          </code>
        </motion.div>
      ))}
    </motion.div>
  </div>
);
