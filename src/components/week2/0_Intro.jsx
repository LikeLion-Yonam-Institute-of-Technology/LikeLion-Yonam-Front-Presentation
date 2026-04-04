import { motion } from 'framer-motion';

export const Week2Welcome = () => (
  <div
    style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 96, 0, 0.06) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }}
    />

    <motion.div
      style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        border: '1px solid rgba(255, 96, 0, 0.08)',
        top: '50%',
        left: '50%',
        pointerEvents: 'none',
      }}
      initial={{ scale: 0.8, opacity: 0, x: '-50%', y: '-50%' }}
      animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 0.5, 0], x: '-50%', y: '-50%' }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
    />

    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -15, x: -50, y: 50 }}
      animate={{ opacity: 0.15, scale: 1, rotate: [-15, -10, -15], x: 0, y: [0, -20, 0] }}
      transition={{
        opacity: { duration: 1.5, delay: 0.3 },
        scale: { duration: 1.5, delay: 0.3, ease: 'easeOut' },
        rotate: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
        y: { repeat: Infinity, duration: 5, ease: 'easeInOut' },
      }}
      style={{
        position: 'absolute',
        bottom: '1rem',
        left: '-1rem',
        fontSize: 'clamp(12rem, 25vw, 22rem)',
        lineHeight: 1,
        pointerEvents: 'none',
        zIndex: 0,
        filter: 'grayscale(20%) blur(1px)',
      }}
    >
      🦁
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: 10, x: 50, y: -50 }}
      animate={{ opacity: 0.2, scale: 1, rotate: [10, 25, 10], x: 0, y: [0, -15, 0] }}
      transition={{
        opacity: { duration: 1.5, delay: 0.6 },
        scale: { duration: 1.5, delay: 0.6, ease: 'easeOut' },
        rotate: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' },
        y: { repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 },
      }}
      style={{
        position: 'absolute',
        top: '2rem',
        right: '2rem',
        fontSize: 'clamp(8rem, 15vw, 12rem)',
        lineHeight: 1,
        pointerEvents: 'none',
        zIndex: 0,
        filter: 'grayscale(10%) blur(1px)',
      }}
    >
      🐸
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '2.5rem',
          padding: '10px 24px',
          borderRadius: '100px',
          background: 'rgba(255, 96, 0, 0.08)',
          border: '1px solid rgba(255, 96, 0, 0.12)',
          color: 'var(--ll-orange)',
          fontWeight: 700,
          fontSize: '0.9rem',
          letterSpacing: '0.03em',
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'var(--ll-orange)',
            display: 'inline-block',
          }}
        />
        멋쟁이사자처럼 연암대 14기
      </motion.div>

      <h1
        style={{
          fontSize: 'clamp(3.5rem, 9vw, 6rem)',
          lineHeight: 1,
          marginBottom: '1.5rem',
          letterSpacing: '-0.05em',
          fontWeight: 900,
        }}
      >
        <span style={{ display: 'block', color: 'var(--ll-black)', marginBottom: '0.3em' }}>
          멋쟁이사자처럼
        </span>
        <span
          style={{
            color: 'var(--ll-orange)',
            position: 'relative',
            display: 'inline-block',
          }}
        >
          프론트엔드 트랙
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              bottom: '5%',
              left: 0,
              height: '12px',
              background: 'rgba(255, 96, 0, 0.15)',
              zIndex: -1,
              borderRadius: '4px',
            }}
          />
        </span>
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          color: 'var(--ll-dark-grey)',
          fontWeight: 600,
          marginBottom: '3rem',
          letterSpacing: '-0.02em',
        }}
      >
        2주차 - CSS 레이아웃 & 반응형 설계
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '760px',
          margin: '0 auto',
        }}
      >
        {[
          { label: 'Flexbox 심화', color: '#1572B6' },
          { label: 'CSS Grid', color: '#0F766E' },
          { label: 'Position', color: '#6B21A8' },
          { label: 'Media Query', color: '#DC2626' },
          { label: '대시보드 PBL', color: 'var(--ll-orange)' },
        ].map((keyword, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + index * 0.1 }}
            style={{
              background: 'white',
              padding: '8px 18px',
              borderRadius: '10px',
              fontSize: '0.9rem',
              fontWeight: 700,
              color: keyword.color,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              border: '1px solid #f0f0f0',
              letterSpacing: '-0.01em',
            }}
          >
            {keyword.label}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  </div>
);

export const Week2Goals = () => (
  <div className="animate-up">
    <h2>이번 주 학습 목표</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
      {[
        {
          title: '전주차 과제 복기',
          desc: '지난 주 과제를 다시 보면서 큰 박스부터 작은 구역까지 어떤 순서로 화면을 만들었는지 복기합니다.',
        },
        {
          title: 'CSS 붙이는 순서',
          desc: '컨테이너, 카드, 이미지, 텍스트, 상세 섹션처럼 구역별로 어떤 스타일을 먼저 넣어야 하는지 흐름을 익힙니다.',
        },
        {
          title: '2주차 확장 포인트',
          desc: '과제 풀이를 마친 뒤 Grid, Position, 반응형, CSS 우선순위로 연결하면서 더 큰 레이아웃으로 확장합니다.',
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          className="pbl-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 * index }}
          style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
        >
          <span style={{ color: 'var(--ll-orange)', fontWeight: 900, letterSpacing: '0.08em' }}>
            GOAL 0{index + 1}
          </span>
          <h3 style={{ fontSize: '1.6rem' }}>{item.title}</h3>
          <p style={{ color: 'var(--ll-dark-grey)', lineHeight: 1.7 }}>{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);
