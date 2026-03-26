import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CodePreview from '../common/CodePreview';
import InteractiveCSS from '../common/InteractiveCSS';


export const BoxModel1 = () => (
  <div className="animate-up">
    <h2>Box Model: 4개의 영역</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {[
          { name: 'Margin (바깥 여백)', desc: '테두리 바깥쪽 여백 (박스 외부 공간)', color: '#FCD34D' },
          { name: 'Border (테두리)', desc: '실제 테두리 (박스의 경계)', color: '#10B981' },
          { name: 'Padding (안쪽 여백)', desc: '테두리 안쪽 여백 (콘텐츠와 테두리 사이)', color: '#3B82F6' },
          { name: 'Content (콘텐츠)', desc: '실제 내용 (텍스트, 이미지 등)', color: '#FFFFFF' }
        ].map((item, i) => (
          <motion.div 
            key={item.name} 
            className="pbl-card" 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{ padding: '20px', borderLeft: `8px solid ${item.color}` }}
          >
            <strong style={{ fontSize: '1.2rem', display: 'block' }}>{item.name}</strong>
            <span style={{ fontSize: '0.95rem', color: '#666' }}>{item.desc}</span>
          </motion.div>
        ))}
      </div>
      <div style={{ background: '#f8f9fa', borderRadius: '32px', padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ 
          background: '#FCD34D', 
          padding: '30px', 
          borderRadius: '8px', 
          width: '100%', 
          aspectRatio: '1', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          boxShadow: '0 4px 0 rgba(0,0,0,0.1)'
        }}>
          <div style={{ 
            background: '#10B981', 
            padding: '5px', 
            borderRadius: '4px', 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}>
            <div style={{ 
              background: '#3B82F6', 
              padding: '30px', 
              borderRadius: '2px', 
              width: '100%', 
              height: '100%', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}>
              <div style={{ 
                background: 'white', 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                fontWeight: 900, 
                fontSize: '1.2rem',
                color: '#111'
              }}>
                CONTENT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const BoxModel2 = () => (
  <div className="animate-up">
    <h2>Box-sizing: 크기 계산의 마법</h2>
    <p className="lead">패딩과 테두리를 포함할지 말지 결정합니다.</p>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '2rem' }}>
      <div className="pbl-card">
        <h4 style={{ marginBottom: '1.5rem', fontWeight: 800 }}>box-sizing: content-box (기본값)</h4>
        <div style={{ width: '150px', height: '150px', background: 'var(--ll-orange)', opacity: 0.2, position: 'absolute' }} />
        <div style={{ 
          width: '150px', 
          height: '150px', 
          background: 'var(--ll-orange)', 
          padding: '40px', 
          border: '10px solid #111', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: 'white', 
          fontWeight: 900,
          boxSizing: 'content-box',
          position: 'relative',
          zIndex: 1
        }}>
          250px?!
        </div>
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>설정한 width(150px)에 padding과 border가 <strong>더해져서</strong> 박스가 커집니다.</p>
      </div>
      <div className="pbl-card" style={{ background: 'var(--ll-orange-light)', border: '2px solid var(--ll-orange)' }}>
        <h4 style={{ marginBottom: '1.5rem', fontWeight: 800, color: 'var(--ll-orange)' }}>box-sizing: border-box (추천!)</h4>
        <div style={{ 
          width: '150px', 
          height: '150px', 
          background: 'var(--ll-orange)', 
          padding: '40px', 
          border: '10px solid #111', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: 'white', 
          fontWeight: 900,
          boxSizing: 'border-box'
        }}>
          150px!
        </div>
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>설정한 width(150px) <strong>안에</strong> padding과 border가 포함됩니다. 크기 계산이 훨씬 쉬워집니다.</p>
      </div>
    </div>
  </div>
);

export const DisplayProperty = () => {
  const [display, setDisplay] = useState('block');

  return (
    <div className="animate-up">
      <h2>Display: 박스의 성질</h2>
      <p className="lead">박스가 화면에서 어떻게 배치될지 결정합니다.</p>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '2rem' }}>
        {['block', 'inline', 'inline-block'].map(val => (
          <button 
            key={val}
            onClick={() => setDisplay(val)}
            className={`nav-btn ${display === val ? 'primary' : ''}`}
            style={{ padding: '10px 20px' }}
          >
            {val}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div className="pbl-card" style={{ minHeight: '300px' }}>
          {[1, 2, 3].map(i => (
            <div 
              key={i} 
              style={{ 
                display: display, 
                width: display === 'inline' ? 'auto' : '100px', 
                height: display === 'inline' ? 'auto' : '60px', 
                background: i === 1 ? 'var(--ll-orange)' : '#111', 
                color: 'white', 
                margin: '5px', 
                padding: '10px', 
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: 800
              }}
            >
              BOX {i}
            </div>
          ))}
        </div>
        <div className="pbl-card">
           <AnimatePresence mode="wait">
             <motion.div
               key={display}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
             >
                <h4 style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>{display}</h4>
                <p style={{ color: '#666', lineHeight: 1.6 }}>
                  {display === 'block' && '길막 대장! 한 줄을 다 차지합니다. width/height 설정이 가능합니다.'}
                  {display === 'inline' && '흐르는 물처럼! 콘텐츠 크기만큼만 차지하며, width/height 설정이 무시됩니다.'}
                  {display === 'inline-block' && '양쪽의 장점! inline처럼 한 줄에 여러 개가 오면서, block처럼 크기 조절이 가능합니다.'}
                </p>
             </motion.div>
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export const BoxDecoration = () => (
  <div className="animate-up">
    <h2>박스 꾸미기: 눈길을 끄는 디테일</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '2rem' }}>
      <CodePreview 
        title="border-radius (모서리)"
        code={`div {\n  border-radius: 20px;\n}`}
        tags={[
          { name: 'border-radius', desc: '상자의 모서리를 둥글게 깎는 속성 (px 또는 % 단위)' }
        ]}
      >
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <div style={{ width: '100px', height: '100px', background: 'var(--ll-orange)', borderRadius: '20px' }} />
          <div style={{ width: '100px', height: '100px', background: '#111', borderRadius: '50%' }} />
        </div>
      </CodePreview>
      <CodePreview 
        title="box-shadow (그림자)"
        code={`div {\n  box-shadow: 0 10px 30px rgba(0,0,0,0.1);\n}`}
        tags={[
          { name: 'box-shadow', desc: '상자에 그림자 효과 부여 (x축 y축 블러 색상 순서)' }
        ]}
      >
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <div style={{ width: '100px', height: '100px', background: 'white', border: '1px solid #eee', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          <div style={{ width: '100px', height: '100px', background: 'var(--ll-orange)', borderRadius: '16px', boxShadow: '0 0 20px rgba(255, 96, 0, 0.4)' }} />
        </div>
      </CodePreview>
    </div>
  </div>
);

export const BoxModelPlayground = () => (
    <InteractiveCSS />
);

