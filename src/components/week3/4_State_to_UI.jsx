import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ───── Slide 1: State Concept Intro ───── */
export const StateConceptIntro = () => (
  <div className="animate-up">
    <h2>핵심 개념: <span style={{ color: 'var(--ll-orange)' }}>상태(State)</span></h2>
    <p className="lead">
      "데이터가 바뀌면, 화면도 바뀌어야 한다"
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '2rem' }}>
      {/* Bad way */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="pbl-card"
        style={{ background: '#FEF2F2', borderColor: 'rgba(239,68,68,0.15)' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '1.5rem' }}>❌</span>
          <h3 style={{ fontSize: '1.3rem', color: '#DC2626', margin: 0 }}>데이터 없이 DOM만 조작</h3>
        </div>
        <div style={{
          background: '#0f172a',
          borderRadius: '12px',
          padding: '16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          lineHeight: 1.6,
          color: '#e2e8f0',
          marginBottom: '16px',
        }}>
          <div style={{ color: '#6B7280' }}>// 화면에만 직접 추가</div>
          <div>list.innerHTML += <span style={{ color: '#86EFAC' }}>"&lt;li&gt;새 항목&lt;/li&gt;"</span>;</div>
          <div style={{ color: '#6B7280' }}>// 데이터가 어딨는지 모름 😢</div>
        </div>
        <p style={{ fontSize: '0.85rem', color: '#991B1B', fontWeight: 600 }}>
          데이터와 화면이 따로 놀아서 관리 어려움
        </p>
      </motion.div>

      {/* Good way */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="pbl-card"
        style={{ background: '#F0FDF4', borderColor: 'rgba(16,185,129,0.15)' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '1.5rem' }}>✅</span>
          <h3 style={{ fontSize: '1.3rem', color: '#16A34A', margin: 0 }}>상태 → 화면 갱신</h3>
        </div>
        <div style={{
          background: '#0f172a',
          borderRadius: '12px',
          padding: '16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          lineHeight: 1.6,
          color: '#e2e8f0',
          marginBottom: '16px',
        }}>
          <div style={{ color: '#6B7280' }}>// 1. 데이터(상태)를 변경</div>
          <div>lions.<span style={{ color: '#F7DF1E' }}>push</span>(<span style={{ color: '#86EFAC' }}>"새 사자"</span>);</div>
          <div style={{ color: '#6B7280' }}>// 2. 화면을 다시 그리기</div>
          <div><span style={{ color: '#F7DF1E' }}>render</span>();</div>
        </div>
        <p style={{ fontSize: '0.85rem', color: '#166534', fontWeight: 600 }}>
          데이터가 진실의 원천(Source of Truth)!
        </p>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      style={{
        marginTop: '2rem',
        padding: '20px',
        background: 'linear-gradient(135deg, rgba(255,96,0,0.06), rgba(247,223,30,0.06))',
        borderRadius: '16px',
        border: '1px solid rgba(255,96,0,0.12)',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111', margin: 0 }}>
        💡 이 패턴은 <strong style={{ color: '#3B82F6' }}>React</strong>에서
        <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--ll-orange)', margin: '0 4px' }}>useState</code>로 더 쉽게 사용합니다!
      </p>
      <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '8px', marginBottom: 0 }}>
        지금은 Vanilla JS로 그 원리를 직접 체험해봅시다
      </p>
    </motion.div>
  </div>
);

/* ───── Slide 2: State → UI Flow ───── */
export const StateToUIFlow = () => (
  <div className="animate-up">
    <h2>상태 → 화면 흐름</h2>
    <p className="lead">데이터 중심 렌더링의 3단계 사이클</p>

    <div style={{
      marginTop: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0',
    }}>
      {[
        {
          step: '① 상태 (State)',
          desc: '데이터를 변수에 저장',
          code: 'let lions = ["김사자", "이멋사"]',
          icon: '📦',
          color: '#3B82F6',
        },
        null, // arrow
        {
          step: '② 렌더링 (Render)',
          desc: '상태를 기반으로 화면을 그림',
          code: 'function render() {\n  list.innerHTML = "";\n  lions.forEach(...);\n}',
          icon: '🖼️',
          color: '#10B981',
        },
        null, // arrow
        {
          step: '③ 이벤트 (Event)',
          desc: '사용자 행동이 상태를 변경',
          code: 'btn.addEventListener("click",\n  () => {\n    lions.push(input.value);\n    render();\n  }\n);',
          icon: '⚡',
          color: '#FF6000',
        },
      ].map((item, i) => {
        if (item === null) {
          return (
            <motion.div
              key={`arrow-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              style={{
                fontSize: '1.5rem',
                color: '#ccc',
                padding: '0 12px',
                flexShrink: 0,
              }}
            >
              →
            </motion.div>
          );
        }
        return (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.12 }}
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '24px',
              border: `2px solid ${item.color}20`,
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
              flex: 1,
              minWidth: 0,
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{item.icon}</div>
            <div style={{ fontWeight: 900, fontSize: '0.9rem', color: item.color, marginBottom: '4px' }}>
              {item.step}
            </div>
            <p style={{ fontSize: '0.82rem', color: '#666', marginBottom: '12px' }}>{item.desc}</p>
            <pre style={{
              background: '#0f172a',
              borderRadius: '10px',
              padding: '12px',
              color: '#A5B4FC',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)',
              lineHeight: 1.5,
              margin: 0,
              whiteSpace: 'pre-wrap',
            }}>
              {item.code}
            </pre>
          </motion.div>
        );
      })}
    </div>

    {/* Cycle arrow */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      style={{
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '0.9rem',
        fontWeight: 700,
        color: '#999',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }}
    >
      <span style={{ fontSize: '1.5rem' }}>🔄</span>
      이벤트가 상태를 바꾸면 → 다시 렌더링 → 무한 반복! (React의 핵심 원리)
    </motion.div>
  </div>
);

/* ───── Slide 3: Lion List Demo ───── */
export const LionListDemo = () => {
  const [lions, setLions] = useState(['김사자', '이멋사', '박프론트']);
  const [inputValue, setInputValue] = useState('');
  const [stateLog, setStateLog] = useState([]);

  const addLion = () => {
    if (!inputValue.trim()) return;
    const newLions = [...lions, inputValue.trim()];
    setLions(newLions);
    setStateLog(prev => [...prev.slice(-4), `+ "${inputValue.trim()}" 추가 → [${newLions.join(', ')}]`]);
    setInputValue('');
  };

  const removeLion = (index) => {
    const removed = lions[index];
    const newLions = lions.filter((_, i) => i !== index);
    setLions(newLions);
    setStateLog(prev => [...prev.slice(-4), `- "${removed}" 삭제 → [${newLions.join(', ')}]`]);
  };

  return (
    <div className="animate-up">
      <h2>🦁 사자 명단 <span style={{ color: 'var(--ll-orange)' }}>라이브 데모</span></h2>
      <p className="lead">상태(배열) → 화면(리스트) 흐름을 직접 체험해보세요!</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', marginTop: '1.5rem' }}>
        {/* App UI */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '28px',
          border: '2px solid rgba(255,96,0,0.15)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.06)',
        }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--ll-orange)', letterSpacing: '0.1em', marginBottom: '16px' }}>
            APP UI (화면)
          </div>

          {/* Input */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addLion()}
              placeholder="새 사자 이름..."
              style={{
                flex: 1,
                padding: '12px 16px',
                border: '2px solid #eee',
                borderRadius: '10px',
                fontSize: '0.95rem',
                outline: 'none',
                fontFamily: 'inherit',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => e.target.style.borderColor = '#FF6000'}
              onBlur={(e) => e.target.style.borderColor = '#eee'}
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={addLion}
              style={{
                padding: '12px 20px',
                background: 'var(--ll-orange)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              추가
            </motion.button>
          </div>

          {/* List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <AnimatePresence>
              {lions.map((lion, index) => (
                <motion.div
                  key={`${lion}-${index}`}
                  initial={{ opacity: 0, x: -20, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: 'auto' }}
                  exit={{ opacity: 0, x: 20, height: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 16px',
                    background: '#f8f9fa',
                    borderRadius: '10px',
                    border: '1px solid #f0f0f0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontWeight: 800, color: 'var(--ll-orange)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                      [{index}]
                    </span>
                    <span style={{ fontWeight: 600 }}>{lion}</span>
                  </div>
                  <button
                    onClick={() => removeLion(index)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#EF4444',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'rgba(239,68,68,0.1)'}
                    onMouseLeave={(e) => e.target.style.background = 'none'}
                  >
                    ✕
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div style={{
            marginTop: '16px',
            padding: '10px 14px',
            background: 'rgba(255,96,0,0.06)',
            borderRadius: '8px',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--ll-orange)',
          }}>
            🦁 총 {lions.length}명의 사자
          </div>
        </div>

        {/* State View */}
        <div style={{
          background: '#0f172a',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{ color: '#F7DF1E', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '16px' }}>
            STATE (상태 / 데이터)
          </div>

          {/* Current state */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            borderRadius: '12px',
            padding: '16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            lineHeight: 1.6,
            color: '#e2e8f0',
            marginBottom: '16px',
          }}>
            <span style={{ color: '#C084FC' }}>const</span>{' '}
            <span style={{ color: '#F7DF1E' }}>lions</span>{' '}
            <span style={{ color: '#94a3b8' }}>=</span>{' '}
            <span style={{ color: '#94a3b8' }}>[</span>
            <br />
            {lions.map((lion, i) => (
              <div key={i} style={{ paddingLeft: '1.5rem' }}>
                <motion.span
                  key={`${lion}-${i}`}
                  initial={{ color: '#FF6000' }}
                  animate={{ color: '#86EFAC' }}
                  transition={{ duration: 0.5 }}
                >
                  "{lion}"
                </motion.span>
                <span style={{ color: '#94a3b8' }}>{i < lions.length - 1 ? ',' : ''}</span>
              </div>
            ))}
            <span style={{ color: '#94a3b8' }}>];</span>
          </div>

          {/* Change log */}
          <div style={{
            flex: 1,
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '16px',
          }}>
            <div style={{ color: '#10B981', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '10px' }}>
              CHANGE LOG
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
            }}>
              {stateLog.length === 0 && (
                <span style={{ color: '#555', fontStyle: 'italic' }}>사자를 추가/삭제하면 로그가 여기에 표시됩니다</span>
              )}
              {stateLog.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{
                    color: log.startsWith('+') ? '#86EFAC' : '#FCA5A5',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                >
                  {log}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
