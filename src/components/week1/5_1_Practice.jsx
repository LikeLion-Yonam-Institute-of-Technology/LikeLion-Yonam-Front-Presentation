import React from 'react';

export const MissionHTML = () => (
  <div className="animate-up">
    <h2>1주차 최종 PBL: 아기 사자 자기소개 카드</h2>
    <div className="pbl-card" style={{ border: '2px solid var(--ll-orange)', background: 'var(--ll-orange-light)', position: 'relative', minHeight: '450px' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, padding: '10px 24px', background: 'var(--ll-orange)', color: 'white', fontWeight: 900, borderBottomLeftRadius: '24px' }}>WEEK 01 FINAL PBL</div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', marginTop: '1rem' }}>
        <div>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>🦁 "나를 가장 잘 표현하는 카드"</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.6, color: '#444' }}>
            지금까지 배운 <strong>시맨틱 HTML, 박스 모델, CSS 기초, Flexbox</strong>를 모두 동원하여 멋쟁이사자처럼의 정체성이 담긴 자기소개 카드를 완성하세요.
          </p>
          
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #eee' }}>
            <h4 style={{ marginBottom: '1rem' }}>필수 포함 요소:</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem', listStyle: 'none', padding: 0 }}>
              <li>📸 <strong>Profile Image</strong>: 본인 사진 또는 캐릭터</li>
              <li>🏷️ <strong>Name & Part</strong>: 이름과 소속 파트 (FE/BE/PM/Design)</li>
              <li>🔥 <strong>Resolution</strong>: 14기에 임하는 짧고 강렬한 각오</li>
              <li>🔗 <strong>Social Link</strong>: 블로그, 깃허브 등 링크 1개 이상</li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ 
            width: '240px', 
            background: 'white', 
            borderRadius: '24px', 
            overflow: 'hidden', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            border: '1px solid #eee'
          }}>
            <div style={{ height: '140px', background: 'linear-gradient(135deg, var(--ll-orange) 0%, #FF8A00 100%)' }} />
            <div style={{ padding: '20px', textAlign: 'center', marginTop: '-50px' }}>
              <div style={{ width: '80px', height: '80px', background: '#ddd', borderRadius: '50%', margin: '0 auto 15px', border: '4px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }} />
              <h4 style={{ margin: 0, fontSize: '1.2rem' }}>김멋사 (FE)</h4>
              <p style={{ fontSize: '0.8rem', color: '#999', margin: '5px 0 15px' }}>"성장하는 사자가 되겠습니다!"</p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <span style={{ padding: '4px 12px', borderRadius: '20px', background: '#f5f5f5', fontSize: '0.7rem' }}>GitHub</span>
                <span style={{ padding: '4px 12px', borderRadius: '20px', background: '#f5f5f5', fontSize: '0.7rem' }}>Blog</span>
              </div>
            </div>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#888' }}>Mockup Example</p>
        </div>
      </div>
    </div>
  </div>
);

export const MissionCSS = () => (
  <div className="animate-up">
    <h2>PBL 가이드: 기술적 제약 사항</h2>
    <div className="pbl-card" style={{ border: '2px solid #111', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, padding: '10px 24px', background: '#111', color: 'white', fontWeight: 900, borderBottomLeftRadius: '24px' }}>TECHNICAL GUIDE</div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '1.5rem' }}>
        <div>
          <h4 style={{ color: 'var(--ll-orange)', marginBottom: '1rem' }}>1. Semantic Markup</h4>
          <ul style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#555' }}>
            <li><code>article</code> 태그로 카드를 감싸세요.</li>
            <li><code>header</code>에 이름과 파트를 넣으세요.</li>
            <li><code>main</code> 또는 <code>section</code>에 각오를 적으세요.</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: 'var(--ll-orange)', marginBottom: '1rem' }}>2. CSS Layout</h4>
          <ul style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#555' }}>
            <li><code>box-sizing: border-box</code>를 전역에 설정하세요.</li>
            <li><code>display: flex</code>를 사용해 중앙 정렬하세요.</li>
            <li><code>margin</code> 상사 현상을 주의하세요!</li>
          </ul>
        </div>
      </div>

      <div className="pbl-card" style={{ marginTop: '2rem', background: '#fcfcfc', border: '1px dashed #ccc' }}>
        <h4 style={{ marginBottom: '0.5rem' }}>💻 Local Task</h4>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          VS Code에서 새로운 폴더를 만들고 <code>index.html</code>과 <code>style.css</code>를 생성하여 작업을 시작하세요. 완료 후 브라우저 캡처본을 제출해 주세요!
        </p>
      </div>
    </div>
  </div>
);
