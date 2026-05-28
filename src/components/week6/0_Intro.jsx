import { motion } from "framer-motion";

const Motion = motion;

export const Week6Welcome = () => (
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
    <div
      style={{
        position: "absolute",
        width: "620px",
        height: "620px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,96,0,0.08) 0%, transparent 70%)",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}
    />

    <Motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: -10 }}
      animate={{ opacity: 0.16, scale: 1, rotate: [-10, -4, -10] }}
      transition={{
        opacity: { duration: 1.2 },
        scale: { duration: 1.2 },
        rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
      }}
      style={{
        position: "absolute",
        left: "2rem",
        bottom: "0.5rem",
        fontSize: "clamp(10rem, 22vw, 18rem)",
        lineHeight: 1,
        pointerEvents: "none",
        filter: "blur(1px)",
      }}
    >
      🦁
    </Motion.div>

    <Motion.div
      initial={{ opacity: 0, scale: 0.85, y: -30 }}
      animate={{ opacity: 0.18, scale: 1, y: [0, -14, 0] }}
      transition={{
        opacity: { duration: 1.2, delay: 0.3 },
        scale: { duration: 1.2, delay: 0.3 },
        y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
      }}
      style={{
        position: "absolute",
        right: "2.5rem",
        top: "2.5rem",
        fontSize: "clamp(7rem, 14vw, 10rem)",
        lineHeight: 1,
        pointerEvents: "none",
      }}
    >
      ⚛️
    </Motion.div>

    <Motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: "relative", zIndex: 1 }}
    >
      <Motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "2.4rem",
          padding: "10px 24px",
          borderRadius: "999px",
          background: "rgba(255,96,0,0.08)",
          border: "1px solid rgba(255,96,0,0.2)",
          color: "var(--ll-orange)",
          fontWeight: 800,
          fontSize: "0.9rem",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "var(--ll-orange)",
            display: "inline-block",
          }}
        />
        멋쟁이사자처럼 연암공대 14기
      </Motion.div>

      <h1
        style={{
          fontSize: "clamp(3.4rem, 8vw, 6rem)",
          lineHeight: 1,
          marginBottom: "1.5rem",
          fontWeight: 900,
        }}
      >
        <span style={{ display: "block", color: "var(--ll-black)" }}>
          React 페이지에
        </span>
        <span
          style={{
            color: "var(--ll-orange)",
            display: "inline-block",
            position: "relative",
          }}
        >
          생명 불어넣기
          <Motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.95, duration: 0.75 }}
            style={{
              position: "absolute",
              left: 0,
              bottom: "6%",
              height: "12px",
              borderRadius: "5px",
              background: "rgba(255,96,0,0.15)",
              zIndex: -1,
            }}
          />
        </span>
      </h1>

      <Motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.8 }}
        style={{
          fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
          color: "var(--ll-dark-grey)",
          fontWeight: 700,
          marginBottom: "2.6rem",
        }}
      >
        WEEK 06 : 상태(State)와 Effect
      </Motion.p>

      <Motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.7 }}
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        {[
          { label: "useState", color: "#3B82F6" },
          { label: "이벤트 처리", color: "#10B981" },
          { label: "useEffect", color: "#8B5CF6" },
          { label: "Custom Hook", color: "#F59E0B" },
          { label: "Router", color: "#EC4899" },
          { label: "API 연동", color: "var(--ll-orange)" },
        ].map((keyword, index) => (
          <Motion.span
            key={keyword.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35 + index * 0.08 }}
            style={{
              background: "white",
              padding: "8px 18px",
              borderRadius: "10px",
              fontSize: "0.9rem",
              fontWeight: 800,
              color: keyword.color,
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              border: "1px solid #f0f0f0",
            }}
          >
            {keyword.label}
          </Motion.span>
        ))}
      </Motion.div>
    </Motion.div>
  </div>
);

export const Week6Goals = () => (
  <div className="animate-up">
    <h2>
      이번 주 <span style={{ color: "var(--ll-orange)" }}>학습 목표</span>
    </h2>
    <p className="lead">
      5주차 자기소개 페이지를 정적인 컴포넌트에서 사용자가 조작할 수 있는
      동적인 React 앱으로 확장합니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "16px",
        marginTop: "2.2rem",
      }}
    >
      {[
        {
          icon: "📦",
          title: "상태",
          desc: "useState로 화면이 기억해야 할 값을 관리합니다.",
          color: "#3B82F6",
        },
        {
          icon: "🖱️",
          title: "이벤트",
          desc: "클릭, 입력, 제출 이벤트로 상태를 변경합니다.",
          color: "#10B981",
        },
        {
          icon: "🧮",
          title: "파생 데이터",
          desc: "filter, map으로 지금 보여줄 목록을 계산합니다.",
          color: "#8B5CF6",
        },
        {
          icon: "🔄",
          title: "Effect",
          desc: "렌더링 이후 필요한 외부 작업을 useEffect로 처리합니다.",
          color: "#F59E0B",
        },
        {
          icon: "🧰",
          title: "Custom Hook",
          desc: "반복되는 상태와 Effect 로직을 함수로 분리합니다.",
          color: "var(--ll-orange)",
        },
        {
          icon: "🧭",
          title: "Router",
          desc: "여러 화면을 URL 기준으로 나누고 이동 흐름을 설계합니다.",
          color: "#EC4899",
        },
      ].map((item, index) => (
        <Motion.div
          key={item.title}
          className="pbl-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 * index }}
          style={{
            textAlign: "center",
            background: `${item.color}0D`,
            borderColor: `${item.color}33`,
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "14px" }}>
            {item.icon}
          </div>
          <h3
            style={{
              fontSize: "1.05rem",
              color: item.color,
              fontWeight: 900,
              marginBottom: "10px",
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              fontSize: "0.82rem",
              lineHeight: 1.6,
              color: "var(--ll-dark-grey)",
              margin: 0,
            }}
          >
            {item.desc}
          </p>
        </Motion.div>
      ))}
    </div>

    <Motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.75 }}
      style={{
        marginTop: "2rem",
        padding: "18px 24px",
        background:
          "linear-gradient(135deg, rgba(255,96,0,0.06), rgba(59,130,246,0.06))",
        borderRadius: "14px",
        border: "1px solid rgba(255,96,0,0.16)",
        display: "flex",
        alignItems: "center",
        gap: "14px",
      }}
    >
      <span style={{ fontSize: "1.6rem", flexShrink: 0 }}>🎯</span>
      <p
        style={{
          margin: 0,
          fontSize: "0.95rem",
          fontWeight: 800,
          color: "var(--ll-black)",
          lineHeight: 1.55,
        }}
      >
        PBL 미션: 아기사자 자기소개 페이지에 추가/삭제, 필터링, 외부 API 연동
        기능을 붙여 동적인 명단 앱으로 업그레이드하기
      </p>
    </Motion.div>
  </div>
);


