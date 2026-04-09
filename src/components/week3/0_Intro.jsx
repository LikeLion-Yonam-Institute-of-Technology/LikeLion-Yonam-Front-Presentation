import { motion } from 'framer-motion';

export const Week3Welcome = () => (
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
    {/* Background glow */}
    <div
      style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(247, 223, 30, 0.08) 0%, transparent 70%)',
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

    {/* Background lion */}
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

    {/* Background JS icon */}
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
      ⚡
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
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--ll-orange)', display: 'inline-block' }} />
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
        3주차 — JavaScript 기초 & DOM 조작
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
          { label: '변수 & 함수', color: '#F7DF1E' },
          { label: '배열 · 객체', color: '#10B981' },
          { label: 'DOM 조작', color: '#3B82F6' },
          { label: '이벤트 처리', color: '#8B5CF6' },
          { label: '사자 명단 PBL', color: 'var(--ll-orange)' },
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

export const Week3Goals = () => (
  <div className="animate-up">
    <h2>이번 주 학습 목표</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
      {[
        {
          icon: '📦',
          title: 'JS 기초 문법',
          desc: '변수, 함수, 배열, 객체 같은 JavaScript의 기본 구성 요소들을 배우고 직접 실행해봅니다.',
        },
        {
          icon: '🎯',
          title: 'DOM 조작 & 이벤트',
          desc: 'HTML 요소를 JavaScript로 선택하고, 내용을 바꾸고, 클릭 같은 사용자 행동에 반응하는 법을 익힙니다.',
        },
        {
          icon: '🔄',
          title: '상태 → 화면 흐름',
          desc: '"데이터가 바뀌면 화면도 바뀐다"는 핵심 개념을 사자 명단 앱을 만들며 직접 경험합니다.',
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
          <div style={{ fontSize: '2.5rem' }}>{item.icon}</div>
          <span style={{ color: 'var(--ll-orange)', fontWeight: 900, letterSpacing: '0.08em', fontSize: '0.8rem' }}>
            GOAL 0{index + 1}
          </span>
          <h3 style={{ fontSize: '1.6rem' }}>{item.title}</h3>
          <p style={{ color: 'var(--ll-dark-grey)', lineHeight: 1.7 }}>{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export const WhyJavaScript = () => (
  <div className="animate-up">
    <h2>왜 <span style={{ color: '#F7DF1E' }}>JavaScript</span>인가?</h2>
    <p className="lead">HTML/CSS만으로는 "정적"인 페이지밖에 만들 수 없습니다.</p>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 1fr', gap: '24px', alignItems: 'center', marginTop: '2.5rem' }}>
      {/* Before: Static */}
      <motion.div
        className="pbl-card"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        style={{ textAlign: 'center', background: '#f8f9fa', borderColor: '#eee' }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.6 }}>🖼️</div>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#6B7280' }}>HTML + CSS</h3>
        <p style={{ fontSize: '1rem', fontWeight: 700, color: '#9CA3AF', marginBottom: '1.5rem' }}>정적 페이지</p>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          border: '1px solid #eee',
        }}>
          <div style={{ background: '#f3f4f6', borderRadius: '8px', padding: '12px', marginBottom: '8px', fontSize: '0.85rem', color: '#9CA3AF' }}>
            버튼을 눌러도...
          </div>
          <div style={{
            background: '#e5e7eb',
            borderRadius: '8px',
            padding: '10px 16px',
            fontSize: '0.85rem',
            color: '#9CA3AF',
            cursor: 'not-allowed',
          }}>
            😴 아무 일도 안 일어남
          </div>
        </div>
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{ textAlign: 'center', fontSize: '2rem', color: 'var(--ll-orange)' }}
      >
        →
      </motion.div>

      {/* After: Dynamic */}
      <motion.div
        className="pbl-card"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        style={{ textAlign: 'center', border: '2px solid rgba(247, 223, 30, 0.3)' }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#111' }}>+ JavaScript</h3>
        <p style={{ fontSize: '1rem', fontWeight: 700, color: '#F7DF1E', marginBottom: '1.5rem' }}>동적 인터랙션</p>
        <DynamicDemo />
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      style={{
        marginTop: '2rem',
        padding: '16px 24px',
        background: 'linear-gradient(135deg, rgba(247,223,30,0.08), rgba(255,96,0,0.08))',
        borderRadius: '12px',
        border: '1px solid rgba(247,223,30,0.15)',
        textAlign: 'center',
        fontSize: '1.1rem',
        fontWeight: 600,
        color: '#111',
      }}
    >
      💡 JavaScript = <strong style={{ color: 'var(--ll-orange)' }}>사용자의 행동</strong>에 <strong style={{ color: '#3B82F6' }}>반응</strong>하여 <strong style={{ color: '#10B981' }}>화면을 변경</strong>하는 언어
    </motion.div>
  </div>
);

// Small interactive demo for the "Why JS" slide
const DynamicDemo = () => {
  const [count, setCount] = React.useState(0);
  const [color, setColor] = React.useState('#111');
  const colors = ['#FF6000', '#3B82F6', '#10B981', '#8B5CF6', '#EF4444', '#F7DF1E'];

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '20px',
      border: '1px solid #eee',
    }}>
      <motion.div
        key={count}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{
          fontSize: '2rem',
          fontWeight: 900,
          color: color,
          marginBottom: '12px',
          transition: 'color 0.3s',
        }}
      >
        {count}번 클릭!
      </motion.div>
      <button
        onClick={() => {
          setCount(c => c + 1);
          setColor(colors[(count + 1) % colors.length]);
        }}
        style={{
          background: 'var(--ll-orange)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '10px 20px',
          fontSize: '0.9rem',
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'transform 0.1s',
        }}
        onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
        onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
      >
        🖱️ 클릭해보세요!
      </button>
    </div>
  );
};

// React import needed for DynamicDemo
import React from 'react';
