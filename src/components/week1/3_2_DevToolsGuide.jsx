import React from 'react';
import { motion } from 'framer-motion';

const DevToolsGuide = () => (
  <div className="animate-up">
    <h2>개발자 도구(DevTools) 활용하기</h2>
    <p className="lead">박스 모델이 실제로 어떻게 적용되었는지 확인하는 가장 강력한 방법입니다.</p>
    
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', marginTop: '2rem' }}>
      <div className="pbl-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h3 style={{ color: 'var(--ll-orange)' }}>F12 / Cmd + Option + I</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', listStyle: 'none', padding: 0 }}>
          {[
            { step: '1', text: '브라우저에서 개발자 도구를 켭니다.' },
            { step: '2', text: '좌측 상단의 화살표 아이콘(Select)을 클릭합니다.' },
            { step: '3', text: '확인하고 싶은 요소를 클릭합니다.' },
            { step: '4', text: '우측 Computed 탭에서 박스 모델을 확인합니다.' }
          ].map(item => (
            <li key={item.step} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <span style={{ 
                background: 'var(--ll-black)', 
                color: 'white', 
                width: '24px', 
                height: '24px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '0.8rem',
                flexShrink: 0,
                marginTop: '2px'
              }}>
                {item.step}
              </span>
              <p style={{ fontWeight: 500, fontSize: '1.1rem' }}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <div style={{ background: '#202124', borderRadius: '24px', padding: '30px', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
        <div style={{ color: '#9AA0A6', fontSize: '0.7rem', marginBottom: '20px', fontFamily: 'var(--font-mono)' }}>Computed Panel</div>
        {/* Visualization of DevTools Box Model Diagram */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '240px' }}>
           <div style={{ border: '1px dashed #F8D66D', padding: '20px', width: '280px', textAlign: 'center', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '2px', left: '5px', fontSize: '0.6rem', color: '#F8D66D' }}>margin</span>
              <div style={{ border: '1px solid #737373', padding: '20px', position: 'relative' }}>
                 <span style={{ position: 'absolute', top: '2px', left: '5px', fontSize: '0.6rem', color: '#737373' }}>border</span>
                 <div style={{ border: '1px dashed #92B0E8', padding: '20px', position: 'relative', background: 'rgba(146, 176, 232, 0.1)' }}>
                    <span style={{ position: 'absolute', top: '2px', left: '5px', fontSize: '0.6rem', color: '#92B0E8' }}>padding</span>
                    <div style={{ background: '#92B0E8', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#202124', fontWeight: 900 }}>
                       100 x 100
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <div style={{ marginTop: '20px', borderTop: '1px solid #3c4043', paddingTop: '15px' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
              <span style={{ color: '#8AB4F8' }}>display</span>
              <span style={{ color: '#E8EAED' }}>block</span>
           </div>
           <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginTop: '8px' }}>
              <span style={{ color: '#8AB4F8' }}>box-sizing</span>
              <span style={{ color: '#E8EAED' }}>border-box</span>
           </div>
        </div>
      </div>
    </div>
  </div>
);

export default DevToolsGuide;
