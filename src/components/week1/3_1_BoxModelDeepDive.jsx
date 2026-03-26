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
    <h2>Box-sizing: 크기 폭발 막기</h2>
    <p className="lead"><code>width: 150px</code>에 <code>padding: 25px</code>을 더하면 박스의 <b>진짜 크기</b>는 어떻게 될까요?</p>
    
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '2rem' }}>
      
      {/* Content-box */}
      <div className="pbl-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: '6px solid #EF4444' }}>
        <h3 style={{ color: '#EF4444', marginBottom: '0.5rem' }}>content-box (기본값)</h3>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '2rem', textAlign: 'center', lineHeight: 1.6 }}>
          "컨텐츠 크기만 150px로 맞출게.<br/>패딩과 테두리는 그 바깥에 <strong>추가로</strong> 붙여!"
        </p>
        
        <div style={{ position: 'relative', width: '200px', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
          {/* Dimension Line */}
          <div style={{ position: 'absolute', top: '0', width: '200px', borderTop: '2px dashed #EF4444', display: 'flex', justifyContent: 'center' }}>
            <span style={{ background: '#fff', padding: '0 8px', color: '#EF4444', fontSize: '0.85rem', fontWeight: 800, transform: 'translateY(-50%)' }}>실제 크기: 200px (커짐!)</span>
          </div>
          
          {/* Actual Box */}
          <div style={{ 
            width: '150px', height: '150px', 
            background: 'rgba(255, 96, 0, 0.15)',
            border: '2px dashed #EF4444',
            padding: '25px', 
            boxSizing: 'content-box',
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
          }}>
            <div style={{ background: 'var(--ll-orange)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 900, textAlign: 'center', lineHeight: 1.4, borderRadius: '4px' }}>
              컨텐츠<br/>150px
            </div>
          </div>
        </div>

        <div style={{ background: '#fef2f2', color: '#991B1B', padding: '15px', borderRadius: '8px', width: '100%', fontSize: '0.9rem', marginTop: 'auto', textAlign: 'center' }}>
          150px + 양쪽 패딩(50px) = <strong>200px</strong><br/>
          <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>원했던 150px보다 커져서 레이아웃이 박살납니다💀</span>
        </div>
      </div>

      {/* Border-box */}
      <div className="pbl-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: '6px solid #10B981', background: '#f8fffb' }}>
        <h3 style={{ color: '#10B981', marginBottom: '0.5rem' }}>border-box (강력 추천!)</h3>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '2rem', textAlign: 'center', lineHeight: 1.6 }}>
          "패딩과 테두리를 다 포함해서 150px로 맞출게.<br/>대신 내용물을 <strong>안으로</strong> 찌그러트려!"
        </p>

        <div style={{ position: 'relative', width: '200px', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
          {/* Dimension Line */}
          <div style={{ position: 'absolute', top: '25px', width: '150px', borderTop: '2px dashed #10B981', display: 'flex', justifyContent: 'center', zIndex: 10 }}>
            <span style={{ background: '#f8fffb', padding: '0 8px', color: '#10B981', fontSize: '0.85rem', fontWeight: 800, transform: 'translateY(-50%)' }}>전체: 150px (유지!)</span>
          </div>
          
          {/* Actual Box */}
          <div style={{ 
            width: '150px', height: '150px', 
            background: 'rgba(16, 185, 129, 0.15)',
            border: '2px dashed #10B981',
            padding: '25px', 
            boxSizing: 'border-box',
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
          }}>
            <div style={{ background: '#10B981', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 900, textAlign: 'center', lineHeight: 1.4, borderRadius: '4px' }}>
              컨텐츠<br/>100px
            </div>
          </div>
        </div>

        <div style={{ background: '#ecfdf5', color: '#065F46', padding: '15px', borderRadius: '8px', width: '100%', fontSize: '0.9rem', marginTop: 'auto', textAlign: 'center' }}>
          크기는 내가 선언한 <strong>150px 그대로!</strong><br/>
          <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>내용물이 작아지더라도 레이아웃 크기가 안전합니다😊</span>
        </div>
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
        language="css"
        title="border-radius (모서리)"
        code={`.box {\n  border-radius: 20px;\n}`}
        previewHtml='<section style="display:flex;gap:20px;align-items:center;justify-content:center;height:100%;"><div class="box" style="width:100px;height:100px;background:#FF6000;"></div><div class="box" style="width:100px;height:100px;background:#111;border-radius:50%;"></div></section>'
        tags={[
          { name: 'border-radius', desc: '상자의 모서리를 둥글게 깎는 속성 (px 또는 % 단위)' }
        ]}
      />
      <CodePreview 
        language="css"
        title="box-shadow (그림자)"
        code={`.box {\n  box-shadow: 0 10px 30px rgba(0,0,0,0.1);\n}`}
        previewHtml='<section style="display:flex;gap:20px;align-items:center;justify-content:center;height:100%;"><div class="box" style="width:100px;height:100px;background:white;border:1px solid #eee;border-radius:16px;"></div><div class="box" style="width:100px;height:100px;background:#FF6000;border-radius:16px;"></div></section>'
        tags={[
          { name: 'box-shadow', desc: '상자에 그림자 효과 부여 (x축 y축 블러 색상 순서)' }
        ]}
      />
    </div>
  </div>
);

export const BoxModelPlayground = () => (
    <InteractiveCSS />
);

