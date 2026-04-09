import React from 'react';
import { motion } from 'framer-motion';
import LiveJSConsole from '../common/LiveJSConsole';

/* ───── Slide 1: Variables Concept ───── */
export const VariablesConcept = () => (
  <div className="animate-up">
    <h2>변수(Variable) = <span style={{ color: '#F7DF1E' }}>이름표 붙은 상자</span></h2>
    <p className="lead">데이터를 담아두고 나중에 꺼내 쓰기 위해 이름을 붙이는 것</p>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '2rem' }}>
      {[
        {
          keyword: 'let',
          desc: '바꿀 수 있는 상자',
          example: 'let age = 20;\nage = 21; // ✅ OK',
          color: '#3B82F6',
          icon: '📦',
          note: '값을 나중에 변경할 수 있음',
        },
        {
          keyword: 'const',
          desc: '잠긴 상자 (상수)',
          example: 'const name = "사자";\nname = "호랑이"; // ❌ Error',
          color: '#10B981',
          icon: '🔒',
          note: '한 번 넣으면 변경 불가',
        },
        {
          keyword: 'var',
          desc: '옛날 상자 (비추천)',
          example: 'var score = 100;\n// 요즘은 let/const 사용',
          color: '#9CA3AF',
          icon: '📜',
          note: 'ES6 이전 방식. 스코프 문제 있음',
        },
      ].map((item, i) => (
        <motion.div
          key={item.keyword}
          className="pbl-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 * i + 0.3 }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: item.color }} />
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
          <code style={{
            fontSize: '1.5rem',
            fontWeight: 900,
            color: item.color,
            fontFamily: 'var(--font-mono)',
          }}>
            {item.keyword}
          </code>
          <p style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0.8rem 0 0.5rem', color: '#111' }}>{item.desc}</p>
          <pre style={{
            background: '#f8f9fa',
            padding: '12px',
            borderRadius: '8px',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-mono)',
            lineHeight: 1.5,
            color: '#333',
            margin: '0.8rem 0',
            whiteSpace: 'pre-wrap',
          }}>
            {item.example}
          </pre>
          <p style={{ fontSize: '0.8rem', color: '#666', fontWeight: 500 }}>{item.note}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

/* ───── Slide 2: Variables Live Console ───── */
export const VariablesLive = () => (
  <div className="animate-up">
    <h2>직접 실행해보기 — <span style={{ color: '#F7DF1E' }}>변수</span></h2>
    <p className="lead">코드를 수정하고 ▶ RUN을 눌러 결과를 확인해보세요!</p>
    <LiveJSConsole
      code={`// 변수를 만들어봅시다!
let name = "사자";
let age = 3;
const school = "연암공과대학교";

console.log("이름:", name);
console.log("나이:", age);
console.log("학교:", school);

// name을 바꿔보세요!
name = "멋쟁이 사자";
console.log("변경 후:", name);`}
      title="변수 실습"
      description="let은 변경 가능, const는 변경 불가! 직접 수정해보세요."
    />
  </div>
);

/* ───── Slide 3: Data Types ───── */
export const DataTypes = () => (
  <div className="animate-up">
    <h2>자료형(Data Types)</h2>
    <p className="lead">JavaScript의 값들은 서로 다른 "종류"를 가지고 있습니다.</p>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginTop: '2rem' }}>
      {[
        { type: '문자열', keyword: 'String', example: '"안녕하세요"', icon: '📝', color: '#EF4444' },
        { type: '숫자', keyword: 'Number', example: '42, 3.14', icon: '🔢', color: '#3B82F6' },
        { type: '불리언', keyword: 'Boolean', example: 'true / false', icon: '⚡', color: '#F59E0B' },
        { type: '배열', keyword: 'Array', example: '[1, 2, 3]', icon: '📋', color: '#10B981' },
        { type: '객체', keyword: 'Object', example: '{name: "사자"}', icon: '🗂️', color: '#8B5CF6' },
      ].map((item, i) => (
        <motion.div
          key={item.keyword}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i + 0.2 }}
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px 16px',
            textAlign: 'center',
            border: `2px solid ${item.color}15`,
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
          }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{item.icon}</div>
          <div style={{ fontWeight: 900, fontSize: '0.95rem', color: '#111', marginBottom: '4px' }}>{item.type}</div>
          <code style={{
            fontSize: '0.75rem',
            color: item.color,
            fontWeight: 700,
            fontFamily: 'var(--font-mono)',
          }}>
            {item.keyword}
          </code>
          <div style={{
            marginTop: '12px',
            background: '#f8f9fa',
            borderRadius: '8px',
            padding: '8px',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)',
            color: '#555',
          }}>
            {item.example}
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      style={{
        marginTop: '2rem',
        padding: '14px 24px',
        background: 'rgba(247,223,30,0.06)',
        borderRadius: '12px',
        border: '1px solid rgba(247,223,30,0.15)',
        fontSize: '1rem',
        fontWeight: 600,
        color: '#111',
        textAlign: 'center',
      }}
    >
      💡 <code style={{ fontFamily: 'var(--font-mono)', color: '#8B5CF6' }}>typeof</code>로 자료형을 확인할 수 있어요:&nbsp;
      <code style={{ fontFamily: 'var(--font-mono)', background: '#f3f4f6', padding: '2px 8px', borderRadius: '4px' }}>typeof "hello" → "string"</code>
    </motion.div>
  </div>
);

/* ───── Slide 4: Functions Intro ───── */
export const FunctionsIntro = () => (
  <div className="animate-up">
    <h2>함수(Function) = <span style={{ color: '#8B5CF6' }}>재사용 가능한 레시피</span></h2>
    <p className="lead">특정 작업을 수행하는 코드 묶음에 이름을 붙인 것</p>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 100px 1fr', gap: '24px', alignItems: 'center', marginTop: '2rem' }}>
      {/* Function definition */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          background: '#0f172a',
          borderRadius: '20px',
          padding: '28px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.9rem',
          lineHeight: '1.8',
          color: '#e2e8f0',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        }}
      >
        <div style={{ color: '#6366F1', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '12px' }}>
          함수 정의
        </div>
        <div>
          <span style={{ color: '#C084FC' }}>function</span>{' '}
          <span style={{ color: '#F7DF1E' }}>greet</span>
          <span style={{ color: '#94a3b8' }}>(</span>
          <span style={{ color: '#FB923C' }}>name</span>
          <span style={{ color: '#94a3b8' }}>)</span>
          <span style={{ color: '#94a3b8' }}> {'{'}</span>
        </div>
        <div style={{ paddingLeft: '1.5rem' }}>
          <span style={{ color: '#C084FC' }}>return</span>{' '}
          <span style={{ color: '#86EFAC' }}>"안녕, "</span>
          <span style={{ color: '#94a3b8' }}> + </span>
          <span style={{ color: '#FB923C' }}>name</span>
          <span style={{ color: '#94a3b8' }}>;</span>
        </div>
        <div><span style={{ color: '#94a3b8' }}>{'}'}</span></div>
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        style={{ textAlign: 'center' }}
      >
        <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📞</div>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6B7280' }}>호출하면</div>
      </motion.div>

      {/* Function call & result */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div style={{
          background: '#f8f9fa',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid #eee',
          marginBottom: '16px',
        }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#6B7280', marginBottom: '8px', letterSpacing: '0.1em' }}>호출</div>
          <code style={{ fontSize: '1.1rem', fontWeight: 700 }}>
            <span style={{ color: '#F7DF1E' }}>greet</span>
            <span style={{ color: '#111' }}>(</span>
            <span style={{ color: '#10B981' }}>"사자"</span>
            <span style={{ color: '#111' }}>)</span>
          </code>
        </div>
        <div style={{
          background: '#10B981',
          borderRadius: '16px',
          padding: '20px 24px',
          color: 'white',
          fontWeight: 700,
          fontSize: '1.2rem',
          textAlign: 'center',
          boxShadow: '0 8px 24px rgba(16,185,129,0.3)',
        }}>
          → "안녕, 사자"
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      style={{
        marginTop: '2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
      }}
    >
      {[
        { label: '입력 (매개변수)', desc: '함수에 넣어주는 재료', icon: '📥', color: '#FB923C' },
        { label: '처리 (함수 본문)', desc: '재료를 요리하는 과정', icon: '⚙️', color: '#8B5CF6' },
        { label: '출력 (반환값)', desc: '완성된 결과물', icon: '📤', color: '#10B981' },
      ].map((item, i) => (
        <div key={i} style={{
          background: 'rgba(0,0,0,0.02)',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
        }}>
          <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.85rem', color: item.color }}>{item.label}</div>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>{item.desc}</div>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

/* ───── Slide 5: Functions Live ───── */
export const FunctionsLive = () => (
  <div className="animate-up">
    <h2>직접 실행해보기 — <span style={{ color: '#8B5CF6' }}>함수</span></h2>
    <p className="lead">함수를 정의하고 호출해보세요!</p>
    <LiveJSConsole
      code={`// 함수 만들기
function greet(name) {
  return "안녕, " + name + "! 🦁";
}

// 함수 호출
console.log(greet("사자"));
console.log(greet("여러분"));

// 화살표 함수 (간결한 문법)
const add = (a, b) => a + b;
console.log("3 + 5 =", add(3, 5));`}
      title="함수 실습"
      description="greet 함수의 인사말을 바꿔보세요! 새로운 함수도 만들어보세요."
    />
  </div>
);

/* ───── Slide 6: Arrays & Objects ───── */
export const ArraysObjects = () => (
  <div className="animate-up">
    <h2>배열(Array) vs 객체(Object)</h2>
    <p className="lead">여러 데이터를 묶는 두 가지 방법</p>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '2rem' }}>
      {/* Array */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="pbl-card"
        style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.03), rgba(16,185,129,0.08))' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '2rem' }}>📋</span>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0' }}>배열 (Array)</h3>
            <p style={{ color: '#10B981', fontWeight: 700, fontSize: '0.85rem' }}>번호가 붙은 리스트</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem' }}>
          {['김사자', '이멋사', '박프론트'].map((name, i) => (
            <div key={i} style={{
              flex: 1,
              background: 'white',
              borderRadius: '12px',
              padding: '12px',
              textAlign: 'center',
              border: '2px solid rgba(16,185,129,0.2)',
            }}>
              <div style={{ fontSize: '0.65rem', color: '#10B981', fontWeight: 800, marginBottom: '4px' }}>[{i}]</div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{name}</div>
            </div>
          ))}
        </div>

        <pre style={{
          background: '#0f172a',
          borderRadius: '12px',
          padding: '16px',
          color: '#A5B4FC',
          fontSize: '0.85rem',
          fontFamily: 'var(--font-mono)',
          lineHeight: 1.6,
        }}>
{`const members = [
  "김사자",
  "이멋사",
  "박프론트"
];
members[0]  // "김사자"`}
        </pre>
      </motion.div>

      {/* Object */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="pbl-card"
        style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.03), rgba(139,92,246,0.08))' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '2rem' }}>🗂️</span>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0' }}>객체 (Object)</h3>
            <p style={{ color: '#8B5CF6', fontWeight: 700, fontSize: '0.85rem' }}>이름표가 붙은 묶음</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.5rem' }}>
          {[
            { key: 'name', value: '"김사자"' },
            { key: 'age', value: '20' },
            { key: 'track', value: '"프론트엔드"' },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '10px',
              padding: '10px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: '2px solid rgba(139,92,246,0.15)',
            }}>
              <span style={{ fontWeight: 800, color: '#8B5CF6', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{item.key}</span>
              <span style={{ fontWeight: 600, color: '#111', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{item.value}</span>
            </div>
          ))}
        </div>

        <pre style={{
          background: '#0f172a',
          borderRadius: '12px',
          padding: '16px',
          color: '#A5B4FC',
          fontSize: '0.85rem',
          fontFamily: 'var(--font-mono)',
          lineHeight: 1.6,
        }}>
{`const member = {
  name: "김사자",
  age: 20,
  track: "프론트엔드"
};
member.name  // "김사자"`}
        </pre>
      </motion.div>
    </div>
  </div>
);

/* ───── Slide 7: Arrays Live ───── */
export const ArraysLive = () => (
  <div className="animate-up">
    <h2>직접 실행해보기 — <span style={{ color: '#10B981' }}>배열 & 객체</span></h2>
    <p className="lead">배열과 객체를 직접 다뤄보세요!</p>
    <LiveJSConsole
      code={`// 배열 다루기
const fruits = ["🍎", "🍌", "🍊"];
console.log("과일:", fruits);
console.log("첫번째:", fruits[0]);

// 추가
fruits.push("🍇");
console.log("추가 후:", fruits);
console.log("총 개수:", fruits.length);

// 객체 다루기
const lion = {
  name: "김사자",
  age: 20,
  skills: ["HTML", "CSS", "JS"]
};
console.log(lion.name + "의 스킬:");
console.log(lion.skills);`}
      title="배열 & 객체 실습"
      description="push, pop, length 등을 실험해보세요!"
    />
  </div>
);
