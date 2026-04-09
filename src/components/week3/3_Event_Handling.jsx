import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DOMPlayground from '../common/DOMPlayground';

/* ───── Slide 1: What Are Events ───── */
export const WhatAreEvents = () => (
  <div className="animate-up">
    <h2>이벤트(Event)란?</h2>
    <p className="lead">
      사용자의 행동(클릭, 입력, 스크롤 등)을 감지하고<br />
      <strong style={{ color: 'var(--ll-orange)' }}>그에 반응하는 코드</strong>를 실행하는 메커니즘
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginTop: '2rem' }}>
      {[
        { event: 'click', desc: '클릭했을 때', icon: '🖱️', color: '#3B82F6' },
        { event: 'input', desc: '값을 입력할 때', icon: '⌨️', color: '#10B981' },
        { event: 'mouseover', desc: '마우스를 올렸을 때', icon: '👆', color: '#8B5CF6' },
        { event: 'keydown', desc: '키를 눌렀을 때', icon: '⬇️', color: '#EF4444' },
      ].map((item, i) => (
        <motion.div
          key={item.event}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i + 0.3 }}
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            textAlign: 'center',
            border: `2px solid ${item.color}15`,
            boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
          }}
        >
          <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{item.icon}</div>
          <code style={{
            fontSize: '0.9rem',
            fontWeight: 800,
            color: item.color,
            fontFamily: 'var(--font-mono)',
          }}>
            {item.event}
          </code>
          <p style={{ fontSize: '0.82rem', color: '#666', marginTop: '8px', fontWeight: 500 }}>{item.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      style={{
        marginTop: '2rem',
        background: '#0f172a',
        borderRadius: '16px',
        padding: '24px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.95rem',
        lineHeight: 1.8,
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      }}
    >
      <div style={{ color: '#F7DF1E', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '8px' }}>
        기본 구조
      </div>
      <div style={{ color: '#e2e8f0' }}>
        <span style={{ color: '#94a3b8' }}>요소</span>
        <span style={{ color: '#e2e8f0' }}>.</span>
        <span style={{ color: '#F7DF1E' }}>addEventListener</span>
        <span style={{ color: '#94a3b8' }}>(</span>
        <span style={{ color: '#86EFAC' }}>"이벤트이름"</span>
        <span style={{ color: '#94a3b8' }}>, </span>
        <span style={{ color: '#C084FC' }}>실행할함수</span>
        <span style={{ color: '#94a3b8' }}>)</span>
      </div>
    </motion.div>
  </div>
);

/* ───── Slide 2: Event Visualizer ───── */
export const EventVisualizer = () => {
  const [eventLogs, setEventLogs] = useState([]);
  const [flashKey, setFlashKey] = useState(0);
  const logIdRef = useRef(0);

  const addLog = (type, detail) => {
    const id = logIdRef.current++;
    setEventLogs(prev => [...prev.slice(-8), { id, type, detail, time: new Date().toLocaleTimeString() }]);
    setFlashKey(prev => prev + 1);
  };

  return (
    <div className="animate-up">
      <h2>이벤트 <span style={{ color: '#8B5CF6' }}>시각화</span> 패널</h2>
      <p className="lead">아래 요소들과 상호작용하면 이벤트 로그가 실시간으로 쌓입니다!</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '1.5rem' }}>
        {/* Interactive Area */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: '20px',
          padding: '24px',
          border: '1px solid #eee',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#999', letterSpacing: '0.1em' }}>
            INTERACTIVE ZONE
          </div>

          {/* Click button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => addLog('click', '버튼이 클릭됨!')}
            style={{
              padding: '14px 24px',
              background: '#3B82F6',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            🖱️ 클릭해보기
          </motion.button>

          {/* Hover area */}
          <motion.div
            whileHover={{ scale: 1.02, background: '#EDE9FE' }}
            onMouseEnter={() => addLog('mouseover', '마우스가 들어옴')}
            onMouseLeave={() => addLog('mouseleave', '마우스가 나감')}
            style={{
              padding: '20px',
              background: '#F5F3FF',
              borderRadius: '12px',
              textAlign: 'center',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: '#8B5CF6',
              cursor: 'pointer',
              transition: 'all 0.2s',
              border: '2px dashed #C4B5FD',
            }}
          >
            👆 여기에 마우스를 올려보세요
          </motion.div>

          {/* Input field */}
          <input
            type="text"
            placeholder="여기에 타이핑해보세요..."
            onInput={(e) => addLog('input', `입력값: "${e.target.value}"`)}
            onKeyDown={(e) => addLog('keydown', `키: ${e.key}`)}
            style={{
              padding: '14px 16px',
              border: '2px solid #E5E7EB',
              borderRadius: '12px',
              fontSize: '0.95rem',
              outline: 'none',
              fontFamily: 'inherit',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#F59E0B';
              addLog('focus', '입력 필드에 포커스');
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E5E7EB';
            }}
          />

          {/* Double-click area */}
          <div
            onDoubleClick={() => addLog('dblclick', '더블클릭!')}
            style={{
              padding: '16px',
              background: '#FEF3C7',
              borderRadius: '12px',
              textAlign: 'center',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: '#92400E',
              cursor: 'pointer',
              border: '2px dashed #FDE68A',
            }}
          >
            👆👆 더블클릭해보세요
          </div>
        </div>

        {/* Event Log */}
        <div style={{
          background: '#1e1e2e',
          borderRadius: '20px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <AnimatePresence>
                {eventLogs.length > 0 && (
                  <motion.span
                    key={flashKey}
                    initial={{ scale: 1.5, opacity: 1 }}
                    animate={{ scale: 1, opacity: 0.7 }}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#10B981',
                      display: 'inline-block',
                    }}
                  />
                )}
              </AnimatePresence>
              <span style={{ color: '#10B981', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                EVENT LOG
              </span>
            </div>
            <button
              onClick={() => setEventLogs([])}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '6px',
                color: '#666',
                padding: '4px 10px',
                fontSize: '0.65rem',
                cursor: 'pointer',
                fontWeight: 700,
              }}
            >
              CLEAR
            </button>
          </div>

          <div style={{
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            fontFamily: 'Consolas, Monaco, monospace',
            fontSize: '0.8rem',
          }}>
            {eventLogs.length === 0 && (
              <div style={{ color: '#555', fontStyle: 'italic', fontSize: '0.8rem', textAlign: 'center', marginTop: '2rem' }}>
                왼쪽 요소들과 상호작용하면<br />이벤트가 여기에 표시됩니다
              </div>
            )}
            <AnimatePresence>
              {eventLogs.map((log) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -20, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: 'auto' }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.03)',
                    borderLeft: `3px solid ${
                      log.type === 'click' ? '#3B82F6' :
                      log.type === 'mouseover' || log.type === 'mouseleave' ? '#8B5CF6' :
                      log.type === 'input' || log.type === 'keydown' ? '#10B981' :
                      log.type === 'dblclick' ? '#F59E0B' :
                      '#6B7280'
                    }`,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <span style={{
                      color: log.type === 'click' ? '#60A5FA' :
                             log.type.includes('mouse') ? '#A78BFA' :
                             log.type === 'input' || log.type === 'keydown' ? '#34D399' :
                             '#FBBF24',
                      fontWeight: 700,
                      marginRight: '8px',
                    }}>
                      {log.type}
                    </span>
                    <span style={{ color: '#94a3b8' }}>{log.detail}</span>
                  </div>
                  <span style={{ color: '#4B5563', fontSize: '0.65rem' }}>{log.time}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ───── Slide 3: addEventListener Anatomy ───── */
export const AddEventListenerAnatomy = () => (
  <div className="animate-up">
    <h2>addEventListener 해부하기</h2>
    <p className="lead">이벤트 리스너는 3개의 파트로 구성됩니다</p>

    <div style={{
      marginTop: '2rem',
      background: '#0f172a',
      borderRadius: '24px',
      padding: '40px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    }}>
      {/* Code display */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
        lineHeight: 2,
        textAlign: 'center',
        marginBottom: '2.5rem',
      }}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            color: '#38BDF8',
            background: 'rgba(56,189,248,0.1)',
            padding: '4px 8px',
            borderRadius: '6px',
            border: '1px solid rgba(56,189,248,0.2)',
          }}
        >
          button
        </motion.span>
        <span style={{ color: '#94a3b8' }}>.</span>
        <span style={{ color: '#F7DF1E' }}>addEventListener</span>
        <span style={{ color: '#94a3b8' }}>(</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            color: '#86EFAC',
            background: 'rgba(134,239,172,0.1)',
            padding: '4px 8px',
            borderRadius: '6px',
            border: '1px solid rgba(134,239,172,0.2)',
          }}
        >
          "click"
        </motion.span>
        <span style={{ color: '#94a3b8' }}>, </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            color: '#C084FC',
            background: 'rgba(192,132,252,0.1)',
            padding: '4px 8px',
            borderRadius: '6px',
            border: '1px solid rgba(192,132,252,0.2)',
          }}
        >
          handleClick
        </motion.span>
        <span style={{ color: '#94a3b8' }}>)</span>
      </div>

      {/* 3 parts explanation */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {[
          {
            part: '① 대상 (Target)',
            code: 'button',
            desc: '어떤 요소에?',
            detail: 'document.querySelector로\n선택한 요소',
            color: '#38BDF8',
            delay: 0.4,
          },
          {
            part: '② 이벤트 (Event)',
            code: '"click"',
            desc: '무슨 행동을?',
            detail: 'click, input, keydown,\nmouseover 등',
            color: '#86EFAC',
            delay: 0.6,
          },
          {
            part: '③ 핸들러 (Handler)',
            code: 'handleClick',
            desc: '어떻게 반응?',
            detail: '이벤트 발생 시\n실행할 함수',
            color: '#C084FC',
            delay: 0.8,
          },
        ].map((item) => (
          <motion.div
            key={item.part}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: item.delay }}
            style={{
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '16px',
              padding: '20px',
              border: `1px solid ${item.color}30`,
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: item.color, letterSpacing: '0.05em', marginBottom: '8px' }}>
              {item.part}
            </div>
            <code style={{
              fontSize: '1.1rem',
              fontWeight: 900,
              color: item.color,
              fontFamily: 'var(--font-mono)',
            }}>
              {item.code}
            </code>
            <p style={{ color: 'white', fontWeight: 700, fontSize: '1rem', margin: '12px 0 8px' }}>{item.desc}</p>
            <p style={{ color: '#94a3b8', fontSize: '0.8rem', whiteSpace: 'pre-line', lineHeight: 1.5 }}>{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

/* ───── Slide 4: Event Practice Live ───── */
export const EventPracticeLive = () => (
  <div className="animate-up">
    <h2>이벤트 실습 — <span style={{ color: '#8B5CF6' }}>클릭 이벤트 달기</span></h2>
    <p className="lead">버튼에 이벤트를 연결하고 동작을 확인해보세요!</p>
    <DOMPlayground
      initialHtml={`<h2 id="title">🎯 이벤트 실습</h2>
<button id="colorBtn">색상 바꾸기</button>
<button id="addBtn">항목 추가</button>
<p id="message" style="margin-top: 12px; font-weight: bold;"></p>
<ul id="list">
  <li>기존 항목 1</li>
  <li>기존 항목 2</li>
</ul>`}
      initialJs={`// 1. 요소 선택
const colorBtn = document.querySelector("#colorBtn");
const addBtn = document.querySelector("#addBtn");
const message = document.querySelector("#message");
const list = document.querySelector("#list");

// 2. 색상 바꾸기 이벤트
const colors = ["#FF6000", "#3B82F6", "#10B981", "#8B5CF6"];
let idx = 0;

colorBtn.addEventListener("click", function() {
  idx = (idx + 1) % colors.length;
  message.style.color = colors[idx];
  message.textContent = "색상이 바뀌었어요! " + colors[idx];
});

// 3. 항목 추가 이벤트
let count = 3;
addBtn.addEventListener("click", function() {
  const li = document.createElement("li");
  li.textContent = "새 항목 " + count;
  li.style.color = "#FF6000";
  list.appendChild(li);
  count++;
});`}
      title="이벤트 실습"
      description="▶ RUN 후 버튼을 클릭해보세요! 코드를 수정해서 다른 동작도 만들어보세요."
    />
  </div>
);
