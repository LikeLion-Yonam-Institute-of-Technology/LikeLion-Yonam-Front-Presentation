import { motion } from "framer-motion";

export const Week5Welcome = () => (
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
    {/* Background glow */}
    <div
      style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(97,218,251,0.08) 0%, transparent 70%)",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}
    />

    <motion.div
      style={{
        position: "absolute",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        border: "1px solid rgba(97,218,251,0.1)",
        top: "50%",
        left: "50%",
        pointerEvents: "none",
      }}
      initial={{ scale: 0.8, opacity: 0, x: "-50%", y: "-50%" }}
      animate={{ scale: [0.8, 1.3, 0.8], opacity: [0, 0.4, 0], x: "-50%", y: "-50%" }}
      transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
    />

    {/* Background lion */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -15, x: -50, y: 50 }}
      animate={{ opacity: 0.12, scale: 1, rotate: [-15, -10, -15], x: 0, y: [0, -20, 0] }}
      transition={{
        opacity: { duration: 1.5, delay: 0.3 },
        scale: { duration: 1.5, delay: 0.3, ease: "easeOut" },
        rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
        y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
      }}
      style={{
        position: "absolute",
        bottom: "1rem",
        left: "-1rem",
        fontSize: "clamp(12rem, 25vw, 22rem)",
        lineHeight: 1,
        pointerEvents: "none",
        zIndex: 0,
        filter: "grayscale(20%) blur(1px)",
      }}
    >
      🦁
    </motion.div>

    {/* Background React icon */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: 10, x: 50, y: -50 }}
      animate={{ opacity: 0.18, scale: 1, rotate: [10, 25, 10], x: 0, y: [0, -15, 0] }}
      transition={{
        opacity: { duration: 1.5, delay: 0.6 },
        scale: { duration: 1.5, delay: 0.6, ease: "easeOut" },
        rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
        y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 },
      }}
      style={{
        position: "absolute",
        top: "2rem",
        right: "2rem",
        fontSize: "clamp(8rem, 15vw, 11rem)",
        lineHeight: 1,
        pointerEvents: "none",
        zIndex: 0,
        filter: "blur(1px)",
      }}
    >
      ⚛️
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: "relative", zIndex: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "2.5rem",
          padding: "10px 24px",
          borderRadius: "100px",
          background: "rgba(97,218,251,0.08)",
          border: "1px solid rgba(97,218,251,0.2)",
          color: "#61DAFB",
          fontWeight: 700,
          fontSize: "0.9rem",
          letterSpacing: "0.03em",
        }}
      >
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#61DAFB", display: "inline-block" }} />
        멋쟁이사자처럼 연암대 14기
      </motion.div>

      <h1
        style={{
          fontSize: "clamp(3.5rem, 9vw, 6rem)",
          lineHeight: 1,
          marginBottom: "1.5rem",
          letterSpacing: "-0.05em",
          fontWeight: 900,
        }}
      >
        <span style={{ display: "block", color: "var(--ll-black)", marginBottom: "0.3em" }}>
          멋쟁이사자처럼
        </span>
        <span style={{ color: "var(--ll-orange)", position: "relative", display: "inline-block" }}>
          프론트엔드 트랙
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute",
              bottom: "5%",
              left: 0,
              height: "12px",
              background: "rgba(255,96,0,0.15)",
              zIndex: -1,
              borderRadius: "4px",
            }}
          />
        </span>
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
          color: "var(--ll-dark-grey)",
          fontWeight: 600,
          marginBottom: "3rem",
          letterSpacing: "-0.02em",
        }}
      >
        WEEK 05 : React 시작하기 — 컴포넌트 사고
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", maxWidth: "760px", margin: "0 auto" }}
      >
        {[
          { label: "React 개요", color: "#61DAFB" },
          { label: "JSX 문법", color: "#8B5CF6" },
          { label: "컴포넌트 분리", color: "#10B981" },
          { label: "Props 전달", color: "var(--ll-orange)" },
          { label: "Vite 실습", color: "#646CFF" },
        ].map((keyword, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + index * 0.1 }}
            style={{
              background: "white",
              padding: "8px 18px",
              borderRadius: "10px",
              fontSize: "0.9rem",
              fontWeight: 700,
              color: keyword.color,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              border: "1px solid #f0f0f0",
              letterSpacing: "-0.01em",
            }}
          >
            {keyword.label}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  </div>
);

export const Week5Goals = () => (
  <div className="animate-up">
    <h2>
      이번 주 <span style={{ color: "var(--ll-orange)" }}>학습 목표</span>
    </h2>
    <p className="lead">React의 핵심 개념을 배우고, Vite로 실제 프로젝트를 구성합니다</p>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px", marginTop: "2.5rem" }}>
      {[
        {
          icon: "⚛️",
          color: "#61DAFB",
          bg: "rgba(97,218,251,0.06)",
          border: "rgba(97,218,251,0.2)",
          title: "React 개요",
          desc: "왜 React인가? 선언적 UI vs 명령형 DOM 조작의 차이를 이해한다",
        },
        {
          icon: "📝",
          color: "#8B5CF6",
          bg: "rgba(139,92,246,0.06)",
          border: "rgba(139,92,246,0.2)",
          title: "JSX 문법",
          desc: "HTML처럼 생겼지만 JS인 JSX. 표현식 삽입과 속성 규칙을 익힌다",
        },
        {
          icon: "🧩",
          color: "#10B981",
          bg: "rgba(16,185,129,0.06)",
          border: "rgba(16,185,129,0.2)",
          title: "컴포넌트 분리",
          desc: "화면을 독립적인 컴포넌트로 쪼개 구조화하는 사고 방식을 배운다",
        },
        {
          icon: "📦",
          color: "var(--ll-orange)",
          bg: "rgba(255,96,0,0.06)",
          border: "rgba(255,96,0,0.15)",
          title: "Props 전달",
          desc: "부모 → 자식으로 데이터를 흘려보내며 재사용 가능한 UI를 만든다",
        },
        {
          icon: "⚡",
          color: "#646CFF",
          bg: "rgba(100,108,255,0.06)",
          border: "rgba(100,108,255,0.2)",
          title: "Vite 실습",
          desc: "npm create vite로 프로젝트를 만들고 컴포넌트를 파일로 분리한다",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.12 }}
          className="pbl-card"
          style={{ background: item.bg, borderColor: item.border, textAlign: "center" }}
        >
          <div style={{ fontSize: "2.8rem", marginBottom: "16px" }}>{item.icon}</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: item.color, marginBottom: "10px" }}>
            {item.title}
          </h3>
          <p style={{ fontSize: "0.82rem", color: "var(--ll-dark-grey)", lineHeight: 1.6 }}>{item.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      style={{
        marginTop: "2rem",
        padding: "18px 24px",
        background: "linear-gradient(135deg, rgba(97,218,251,0.06), rgba(255,96,0,0.06))",
        borderRadius: "14px",
        border: "1px solid rgba(97,218,251,0.15)",
        display: "flex",
        alignItems: "center",
        gap: "14px",
      }}
    >
      <span style={{ fontSize: "1.6rem", flexShrink: 0 }}>🎯</span>
      <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 700, color: "var(--ll-black)" }}>
        미션: Vite 프로젝트로{" "}
        <code style={{ fontFamily: "var(--font-mono)", color: "var(--ll-orange)", background: "rgba(255,96,0,0.08)", padding: "2px 8px", borderRadius: "6px", fontSize: "0.9rem" }}>
          Header / ProfileCard / SkillList
        </code>{" "}
        컴포넌트로 나만의 자기소개 포트폴리오 만들기
      </p>
    </motion.div>
  </div>
);
