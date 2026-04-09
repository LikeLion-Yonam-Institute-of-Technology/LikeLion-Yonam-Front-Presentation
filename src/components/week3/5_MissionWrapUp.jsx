import React from 'react';
import { motion } from 'framer-motion';
import CodePreview from '../common/CodePreview';

/* ───── Slide 1: Mission Briefing ───── */
export const MissionBriefing = () => (
  <div className="animate-up">
    <h2>🦁 PBL 미션</h2>
    <p className="lead">사자 명단 추가 · 삭제 앱을 만들어보세요!</p>

    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '32px', marginTop: '1.5rem' }}>
      {/* Requirements */}
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            {
              step: '기능 1',
              title: '사자 추가',
              desc: '입력 필드에 이름을 입력하고 버튼을 누르면 목록에 추가',
              icon: '➕',
              color: '#10B981',
            },
            {
              step: '기능 2',
              title: '사자 삭제',
              desc: '각 사자 옆의 삭제 버튼을 누르면 목록에서 제거',
              icon: '🗑️',
              color: '#EF4444',
            },
            {
              step: '기능 3',
              title: '인원 카운트',
              desc: '현재 명단에 있는 사자 수를 실시간으로 표시',
              icon: '📊',
              color: '#3B82F6',
            },
            {
              step: '보너스',
              title: '빈 입력 방지',
              desc: '이름을 입력하지 않으면 추가되지 않도록 예외 처리',
              icon: '🛡️',
              color: '#8B5CF6',
            },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * i + 0.3 }}
              style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                padding: '16px',
                background: '#f8f9fa',
                borderRadius: '12px',
                border: '1px solid #f0f0f0',
              }}
            >
              <div style={{
                fontSize: '1.5rem',
                flexShrink: 0,
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `${item.color}10`,
                borderRadius: '10px',
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: item.color, letterSpacing: '0.05em' }}>
                    {item.step.toUpperCase()}
                  </span>
                  <span style={{ fontWeight: 800, fontSize: '1rem' }}>{item.title}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visual mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        style={{
          background: 'white',
          borderRadius: '20px',
          padding: '24px',
          border: '2px solid rgba(255,96,0,0.2)',
          boxShadow: '0 20px 60px rgba(255,96,0,0.1)',
        }}
      >
        <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#999', letterSpacing: '0.1em', marginBottom: '16px' }}>
          🎯 완성 목표
        </div>

        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '16px',
        }}>
          <div style={{
            flex: 1,
            padding: '10px 14px',
            border: '2px solid #eee',
            borderRadius: '8px',
            fontSize: '0.85rem',
            color: '#999',
          }}>
            이름 입력...
          </div>
          <div style={{
            padding: '10px 16px',
            background: 'var(--ll-orange)',
            color: 'white',
            borderRadius: '8px',
            fontSize: '0.85rem',
            fontWeight: 700,
          }}>
            추가
          </div>
        </div>

        {['김사자', '이멋사', '박프론트'].map((name, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 14px',
            background: i === 2 ? 'rgba(255,96,0,0.05)' : '#f8f9fa',
            borderRadius: '8px',
            marginBottom: '6px',
            border: i === 2 ? '1px solid rgba(255,96,0,0.15)' : '1px solid #f0f0f0',
          }}>
            <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>🦁 {name}</span>
            <span style={{ color: '#EF4444', fontSize: '0.8rem', cursor: 'pointer' }}>삭제</span>
          </div>
        ))}

        <div style={{
          marginTop: '12px',
          padding: '8px 12px',
          background: 'rgba(59,130,246,0.06)',
          borderRadius: '8px',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: '#3B82F6',
          textAlign: 'center',
        }}>
          총 3명의 사자 🦁
        </div>
      </motion.div>
    </div>
  </div>
);

/* ───── Slide 2: Mission Code Starter ───── */
export const MissionCodeStarter = () => (
  <div className="animate-up">
    <h2>미션 시작 코드</h2>
    <p className="lead">아래 코드를 기반으로 사자 명단 앱을 완성해보세요!</p>
    <CodePreview
      code={`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>사자 명단</title>
  <style>
    body { font-family: sans-serif; max-width: 400px; margin: 40px auto; }
    h1 { color: #FF6000; }
    .input-group { display: flex; gap: 8px; margin-bottom: 16px; }
    input { flex: 1; padding: 10px; border: 2px solid #eee; border-radius: 8px; font-size: 14px; }
    input:focus { outline: none; border-color: #FF6000; }
    button { padding: 10px 20px; background: #FF6000; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
    .lion-item { display: flex; justify-content: space-between; padding: 10px; background: #f8f8f8; border-radius: 8px; margin-bottom: 6px; }
    .delete-btn { background: none; border: none; color: #EF4444; cursor: pointer; font-weight: bold; }
    #count { margin-top: 12px; color: #3B82F6; font-weight: bold; }
  </style>
</head>
<body>
  <h1>🦁 사자 명단</h1>
  <div class="input-group">
    <input type="text" id="nameInput" placeholder="사자 이름 입력...">
    <button onclick="addLion()">추가</button>
  </div>
  <div id="lionList"></div>
  <p id="count"></p>

  <script>
    // 상태 (데이터)
    let lions = ["김사자", "이멋사"];

    // 화면 그리기 함수
    function render() {
      const listEl = document.getElementById("lionList");
      const countEl = document.getElementById("count");
      
      listEl.innerHTML = "";
      lions.forEach((lion, index) => {
        // TODO: 각 사자를 화면에 표시하고
        // 삭제 버튼도 추가해보세요!
      });
      
      countEl.textContent = "총 " + lions.length + "명의 사자 🦁";
    }

    // 사자 추가 함수
    function addLion() {
      const input = document.getElementById("nameInput");
      // TODO: 빈 입력 방지 + 배열에 추가 + render() 호출
    }

    // 사자 삭제 함수
    function removeLion(index) {
      // TODO: 배열에서 삭제 + render() 호출
    }

    // 초기 렌더링
    render();
  </script>
</body>
</html>`}
      title="사자 명단 앱 시작 코드"
      language="html"
      height="400px"
    />
  </div>
);

/* ───── Slide 3: Week 3 Wrap Up ───── */
export const Week3WrapUp = () => (
  <div className="animate-up" style={{ textAlign: 'center' }}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 style={{ justifyContent: 'center' }}>3주차 정리</h2>
    </motion.div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '2rem', textAlign: 'center' }}>
      {[
        { title: '변수 & 함수', desc: 'let, const, function으로\n데이터 저장 및 재사용', icon: '📦', color: '#F7DF1E' },
        { title: 'DOM 조작', desc: 'querySelector로 요소를 선택하고\ntextContent, style로 변경', icon: '🎯', color: '#3B82F6' },
        { title: '이벤트 처리', desc: 'addEventListener로\n사용자 행동에 반응', icon: '⚡', color: '#8B5CF6' },
        { title: '상태 → 화면', desc: '데이터가 바뀌면\n화면을 다시 그리기', icon: '🔄', color: 'var(--ll-orange)' },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 * i + 0.3 }}
          className="pbl-card"
          style={{ textAlign: 'center' }}
        >
          <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{item.icon}</div>
          <h3 style={{ fontSize: '1.1rem', color: item.color, marginBottom: '8px' }}>{item.title}</h3>
          <p style={{ fontSize: '0.82rem', color: '#666', whiteSpace: 'pre-line', lineHeight: 1.5 }}>{item.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      style={{
        marginTop: '2.5rem',
        padding: '24px 32px',
        background: 'linear-gradient(135deg, #0f172a, #1e293b)',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      }}
    >
      <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--ll-orange)', letterSpacing: '0.1em', marginBottom: '12px' }}>
        NEXT WEEK PREVIEW
      </div>
      <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '8px' }}>
        4주차 — JavaScript 비동기 & 데이터 흐름
      </h3>
      <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '16px' }}>
        API 호출, Promise, async/await로 외부 데이터를 가져오는 방법을 배웁니다
      </p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {['fetch API', 'Promise', 'async/await', 'JSON 데이터'].map((tag, i) => (
          <span key={i} style={{
            padding: '6px 14px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '8px',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#94a3b8',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  </div>
);
