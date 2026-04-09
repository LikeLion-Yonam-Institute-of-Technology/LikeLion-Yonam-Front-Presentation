import React from 'react';
import { motion } from 'framer-motion';
import DOMPlayground from '../common/DOMPlayground';

/* ───── Slide 1: What is DOM ───── */
export const WhatIsDOM = () => (
  <div className="animate-up">
    <h2>DOM이란?</h2>
    <p className="lead">
      <strong>D</strong>ocument <strong>O</strong>bject <strong>M</strong>odel — 
      HTML 문서를 JavaScript가 이해할 수 있는 <strong style={{ color: 'var(--ll-orange)' }}>객체 트리</strong>로 변환한 것
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 1fr', gap: '24px', alignItems: 'center', marginTop: '2rem' }}>
      {/* HTML */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          background: '#0f172a',
          borderRadius: '20px',
          padding: '24px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          lineHeight: 1.8,
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        }}
      >
        <div style={{ color: '#E34F26', fontSize: '0.7rem', fontWeight: 700, marginBottom: '8px', letterSpacing: '0.1em' }}>HTML 코드</div>
        <div style={{ color: '#94a3b8' }}>
          <span style={{ color: '#6B7280' }}>&lt;</span><span style={{ color: '#EF4444' }}>html</span><span style={{ color: '#6B7280' }}>&gt;</span><br />
          {'  '}<span style={{ color: '#6B7280' }}>&lt;</span><span style={{ color: '#EF4444' }}>body</span><span style={{ color: '#6B7280' }}>&gt;</span><br />
          {'    '}<span style={{ color: '#6B7280' }}>&lt;</span><span style={{ color: '#EF4444' }}>h1</span><span style={{ color: '#6B7280' }}>&gt;</span>
          <span style={{ color: '#86EFAC' }}>제목</span>
          <span style={{ color: '#6B7280' }}>&lt;/</span><span style={{ color: '#EF4444' }}>h1</span><span style={{ color: '#6B7280' }}>&gt;</span><br />
          {'    '}<span style={{ color: '#6B7280' }}>&lt;</span><span style={{ color: '#EF4444' }}>p</span><span style={{ color: '#6B7280' }}>&gt;</span>
          <span style={{ color: '#86EFAC' }}>내용</span>
          <span style={{ color: '#6B7280' }}>&lt;/</span><span style={{ color: '#EF4444' }}>p</span><span style={{ color: '#6B7280' }}>&gt;</span><br />
          {'  '}<span style={{ color: '#6B7280' }}>&lt;/</span><span style={{ color: '#EF4444' }}>body</span><span style={{ color: '#6B7280' }}>&gt;</span><br />
          <span style={{ color: '#6B7280' }}>&lt;/</span><span style={{ color: '#EF4444' }}>html</span><span style={{ color: '#6B7280' }}>&gt;</span>
        </div>
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        style={{ textAlign: 'center' }}
      >
        <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#6B7280', marginBottom: '8px' }}>브라우저가<br />파싱</div>
        <div style={{ fontSize: '2rem', color: 'var(--ll-orange)' }}>→</div>
      </motion.div>

      {/* DOM Tree */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          background: '#f8f9fa',
          borderRadius: '20px',
          padding: '24px',
          border: '1px solid #eee',
        }}
      >
        <div style={{ color: '#3B82F6', fontSize: '0.7rem', fontWeight: 700, marginBottom: '12px', letterSpacing: '0.1em' }}>DOM 트리 (객체)</div>
        <DOMTreeNode label="document" color="#6B7280" level={0}>
          <DOMTreeNode label="html" color="#EF4444" level={1}>
            <DOMTreeNode label="body" color="#EF4444" level={2}>
              <DOMTreeNode label="h1" color="#F59E0B" level={3} text='"제목"' />
              <DOMTreeNode label="p" color="#10B981" level={3} text='"내용"' />
            </DOMTreeNode>
          </DOMTreeNode>
        </DOMTreeNode>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      style={{
        marginTop: '2rem',
        padding: '16px 24px',
        background: 'rgba(59,130,246,0.06)',
        borderRadius: '12px',
        border: '1px solid rgba(59,130,246,0.12)',
        fontSize: '1rem',
        fontWeight: 600,
        color: '#111',
        textAlign: 'center',
      }}
    >
      💡 JavaScript는 이 <strong style={{ color: '#3B82F6' }}>DOM 트리</strong>를 통해 HTML 요소를 선택하고, 내용을 바꾸고, 새로 만들 수 있습니다
    </motion.div>
  </div>
);

// Simple DOM tree node component
const DOMTreeNode = ({ label, color, level, text, children }) => (
  <div style={{ marginLeft: level > 0 ? '20px' : '0', marginTop: '6px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {level > 0 && (
        <div style={{ width: '12px', height: '1px', background: '#ccc' }} />
      )}
      <span style={{
        background: `${color}15`,
        color: color,
        padding: '4px 12px',
        borderRadius: '6px',
        fontSize: '0.82rem',
        fontWeight: 800,
        fontFamily: 'var(--font-mono)',
        border: `1px solid ${color}25`,
      }}>
        {label}
      </span>
      {text && (
        <span style={{ fontSize: '0.78rem', color: '#666', fontStyle: 'italic' }}>{text}</span>
      )}
    </div>
    {children}
  </div>
);

/* ───── Slide 2: Selecting Elements ───── */
export const SelectingElements = () => (
  <div className="animate-up">
    <h2>요소 선택하기</h2>
    <p className="lead">DOM에서 원하는 요소를 "잡는" 방법</p>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '1.5rem' }}>
      {[
        {
          method: 'querySelector',
          syntax: 'document.querySelector("CSS선택자")',
          desc: 'CSS 선택자로 첫 번째 요소를 선택',
          examples: [
            { code: 'querySelector("#title")', desc: 'id가 title인 요소' },
            { code: 'querySelector(".card")', desc: 'class가 card인 첫 요소' },
            { code: 'querySelector("p")', desc: '첫 번째 p 태그' },
          ],
          color: '#3B82F6',
          recommended: true,
        },
        {
          method: 'getElementById',
          syntax: 'document.getElementById("아이디")',
          desc: 'ID로 요소를 직접 선택',
          examples: [
            { code: 'getElementById("title")', desc: 'id가 title인 요소' },
            { code: 'getElementById("list")', desc: 'id가 list인 요소' },
          ],
          color: '#10B981',
          recommended: false,
        },
      ].map((item, i) => (
        <motion.div
          key={item.method}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.15 }}
          className="pbl-card"
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {item.recommended && (
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: item.color,
              color: 'white',
              padding: '3px 10px',
              borderRadius: '100px',
              fontSize: '0.65rem',
              fontWeight: 800,
            }}>
              ⭐ 추천
            </div>
          )}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: item.color }} />
          <code style={{
            fontSize: '1.1rem',
            fontWeight: 900,
            color: item.color,
            fontFamily: 'var(--font-mono)',
          }}>
            .{item.method}()
          </code>
          <p style={{ color: '#666', fontSize: '0.9rem', margin: '8px 0 16px' }}>{item.desc}</p>

          <div style={{
            background: '#0f172a',
            borderRadius: '12px',
            padding: '14px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            marginBottom: '4px',
            color: '#94a3b8',
            lineHeight: 1.4,
          }}>
            {item.syntax}
          </div>

          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {item.examples.map((ex, j) => (
              <div key={j} style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                padding: '8px 12px',
                background: '#f8f9fa',
                borderRadius: '8px',
              }}>
                <code style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: item.color, fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {ex.code}
                </code>
                <span style={{ fontSize: '0.78rem', color: '#666' }}>{ex.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      style={{
        marginTop: '1.5rem',
        padding: '14px 24px',
        background: 'rgba(59,130,246,0.06)',
        borderRadius: '12px',
        border: '1px solid rgba(59,130,246,0.12)',
        fontSize: '0.95rem',
        fontWeight: 600,
        color: '#111',
        textAlign: 'center',
      }}
    >
      💡 <code style={{ fontFamily: 'var(--font-mono)', color: '#3B82F6' }}>querySelectorAll()</code>을 쓰면 조건에 맞는 <strong>모든</strong> 요소를 선택할 수 있어요
    </motion.div>
  </div>
);

/* ───── Slide 3: DOM Playground ───── */
export const DOMPlaygroundSlide = () => (
  <div className="animate-up">
    <h2>DOM 놀이터 — <span style={{ color: '#3B82F6' }}>직접 조작해보기</span></h2>
    <p className="lead">JS 코드로 오른쪽 미니 브라우저의 HTML을 바꿔보세요!</p>
    <DOMPlayground
      initialHtml={`<h1 id="title" style="color: #111;">Hello World!</h1>
<p id="desc">이 텍스트를 JS로 바꿔보세요</p>
<button id="btn" style="padding: 8px 16px; border-radius: 8px;">버튼</button>
<ul id="list">
  <li>항목 1</li>
  <li>항목 2</li>
</ul>`}
      initialJs={`// 1. 요소 선택하기
const title = document.querySelector("#title");
const desc = document.querySelector("#desc");

// 2. 내용 바꾸기
title.textContent = "안녕, DOM! 🦁";
title.style.color = "#FF6000";

// 3. 스타일 바꾸기
desc.textContent = "JavaScript로 바꿨어요!";
desc.style.fontWeight = "bold";
desc.style.color = "#3B82F6";`}
      title="DOM 조작 실습"
      description="textContent, style, classList 등을 사용해 DOM을 변경해보세요!"
    />
  </div>
);

/* ───── Slide 4: Modifying DOM ───── */
export const ModifyingDOM = () => (
  <div className="animate-up">
    <h2>DOM 수정 방법 정리</h2>
    <p className="lead">요소를 선택한 후 할 수 있는 것들</p>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '1.5rem' }}>
      {[
        {
          title: '내용 바꾸기',
          property: '.textContent',
          code: 'el.textContent = "새 텍스트";',
          desc: '요소의 텍스트를 변경',
          icon: '✏️',
          color: '#3B82F6',
        },
        {
          title: '스타일 바꾸기',
          property: '.style',
          code: 'el.style.color = "red";\nel.style.fontSize = "24px";',
          desc: '인라인 CSS 스타일을 변경',
          icon: '🎨',
          color: '#8B5CF6',
        },
        {
          title: 'HTML 삽입',
          property: '.innerHTML',
          code: 'el.innerHTML = "<strong>굵은 텍스트</strong>";',
          desc: 'HTML 코드를 직접 넣기',
          icon: '🔧',
          color: '#EF4444',
        },
        {
          title: '요소 생성 & 추가',
          property: 'createElement / appendChild',
          code: 'const li = document.createElement("li");\nli.textContent = "새 항목";\nlist.appendChild(li);',
          desc: '새로운 요소를 만들어 추가',
          icon: '➕',
          color: '#10B981',
        },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i + 0.2 }}
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '20px',
            border: '1px solid #f0f0f0',
            boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
            <span style={{ fontWeight: 800, fontSize: '1rem' }}>{item.title}</span>
          </div>
          <code style={{
            display: 'block',
            fontSize: '0.8rem',
            color: item.color,
            fontWeight: 700,
            fontFamily: 'var(--font-mono)',
            marginBottom: '8px',
          }}>
            {item.property}
          </code>
          <pre style={{
            background: '#0f172a',
            borderRadius: '10px',
            padding: '14px',
            color: '#A5B4FC',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)',
            lineHeight: 1.5,
            margin: 0,
            whiteSpace: 'pre-wrap',
          }}>
            {item.code}
          </pre>
          <p style={{ fontSize: '0.78rem', color: '#888', marginTop: '8px', fontWeight: 500 }}>{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

/* ───── Slide 5: DOM Live Practice ───── */
export const DOMPractice = () => (
  <div className="animate-up">
    <h2>DOM 놀이터 — <span style={{ color: '#10B981' }}>요소 추가하기</span></h2>
    <p className="lead">createElement와 appendChild로 새 요소를 추가해보세요!</p>
    <DOMPlayground
      initialHtml={`<h2 id="title">🦁 사자 목록</h2>
<ul id="lion-list">
  <li>김사자</li>
  <li>이멋사</li>
</ul>
<p id="count">총 2명</p>`}
      initialJs={`// 새로운 사자 추가하기!
const list = document.querySelector("#lion-list");
const countEl = document.querySelector("#count");

// 새 li 요소 만들기
const newLion = document.createElement("li");
newLion.textContent = "박프론트 🆕";
newLion.style.color = "#FF6000";
newLion.style.fontWeight = "bold";

// 리스트에 추가
list.appendChild(newLion);

// 카운트 업데이트
const count = list.children.length;
countEl.textContent = "총 " + count + "명";`}
      title="요소 추가 실습"
      description="새로운 사자를 추가해보세요! textContent와 style도 바꿔보세요."
    />
  </div>
);
