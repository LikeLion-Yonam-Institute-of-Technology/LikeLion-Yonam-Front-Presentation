import { motion } from 'framer-motion';

export const WelcomeSlide = () => (
  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'radial-gradient(circle at 50% 50%, rgba(255, 96, 0, 0.03) 0%, transparent 70%)' }}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="status-badge" 
        style={{ marginBottom: '2.5rem', padding: '10px 24px', fontSize: '0.9rem' }}
      >
        멋쟁이사자처럼 대학 14기
      </motion.div>
      <h1 style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', lineHeight: 0.9, marginBottom: '2rem', letterSpacing: '-0.05em' }}>
        연암공과대학교 멋사대학<br/>
        <span style={{ color: 'var(--ll-orange)', position: 'relative' }}>
          프론트엔드트랙
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ position: 'absolute', bottom: '10%', left: 0, height: '8px', background: 'var(--ll-orange)', opacity: 0.2, zIndex: -1 }}
          />
        </span>
      </h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="lead" 
        style={{ fontSize: '2rem', color: 'var(--ll-dark-grey)', fontWeight: 600, marginBottom: '2rem' }}
      >
        1주차: HTML & CSS 핵심
      </motion.p>
      
      {/* Learning Objectives / Keywords */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '800px', margin: '0 auto' }}
      >
        {['시맨틱 HTML', 'CSS 기초', 'Box Model', 'Flexbox 기본', '아기사자 소개 카드 (PBL)'].map((keyword, i) => (
          <span key={i} style={{ 
            background: 'white', 
            padding: '8px 16px', 
            borderRadius: '20px', 
            fontSize: '0.9rem', 
            fontWeight: 700,
            color: 'var(--ll-black)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            border: '1px solid var(--ll-border)'
          }}>
            # {keyword}
          </span>
        ))}
      </motion.div>
    </motion.div>
  </div>
);

export const WebPillars = () => (
  <div className="animate-up">
    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <h2 style={{ justifyContent: 'center' }}>웹을 지탱하는 3개의 기둥</h2>
      <p className="lead">현대적인 웹 개발의 표준(Web Standards)을 이루는 핵심 기술입니다.</p>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
      {[
        { title: 'HTML', desc: '구조', detail: '웹페이지의 뼈대와 의미(Semantics)를 구축합니다.', icon: '🏗️', color: '#E34F26' },
        { title: 'CSS', desc: '표현', detail: '시각적 스타일과 레이아웃, 애니메이션을 담당합니다.', icon: '🎨', color: '#1572B6' },
        { title: 'Javascript', desc: '동작', detail: '데이터 처리와 동적인 사용자 인터랙션을 제어합니다.', icon: '⚡', color: '#F7DF1E' }
      ].map((item, i) => (
        <motion.div 
          key={item.title}
          className="pbl-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 + 0.3 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6px', background: item.color }} />
          <div style={{ fontSize: '4.5rem', marginBottom: '2rem', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }}>{item.icon}</div>
          <h3 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', fontWeight: 900 }}>{item.title}</h3>
          <p style={{ color: item.color, fontWeight: 800, fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>{item.desc.toUpperCase()}</p>
          <p style={{ color: 'var(--ll-dark-grey)', fontSize: '1rem', lineHeight: 1.6 }}>{item.detail}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export const EverythingIsABox = () => (
  <div className="animate-up">
    <h2>모든 것은 <span style={{ color: 'var(--ll-orange)' }}>박스(Box)</span>다</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '80px', alignItems: 'center' }}>
      <div>
        <p className="lead">브라우저는 모든 HTML 요소를 하나의 <strong style={{color: 'var(--ll-black)'}}>'상자'</strong>로 인식합니다.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem' }}>
          {[
            { tag: '구조적 박스', text: '복잡한 웹사이트도 결국 박스들의 집합입니다.' },
            { tag: '중첩 박스', text: '박스 안에 박스를 넣으며(쌓아감) 구조를 만듭니다.' },
            { tag: '시각적 박스', text: '박스의 크기, 색상, 위치를 조절하는 것이 CSS의 핵심입니다.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + (i * 0.15) }}
              style={{ display: 'flex', gap: '20px' }}
            >
              <div style={{ flexShrink: 0, width: '4px', height: '100%', background: 'var(--ll-orange)', borderRadius: '2px' }} />
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--ll-orange)', letterSpacing: '0.05em' }}>{item.tag.toUpperCase()}</span>
                <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--ll-black)', marginTop: '4px' }}>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{ background: '#f8f9fa', borderRadius: '48px', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--ll-border)', boxShadow: 'inset 0 0 40px rgba(0,0,0,0.02)' }}
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            style={{ width: '100%', maxWidth: '340px', aspectRatio: '1', border: '4px solid #111', borderRadius: '32px', background: 'white', padding: '30px', boxShadow: '30px 30px 0 rgba(255, 96, 0, 0.1)', position: 'relative' }}
          >
             <div style={{ width: '100%', height: '50px', border: '3px solid #eee', borderRadius: '12px', marginBottom: '20px', background: '#fcfcfc', display: 'flex', alignItems: 'center', padding: '0 15px' }}>
                <div style={{ width: '40%', height: '8px', background: '#eee', borderRadius: '4px' }} />
             </div>
             <div style={{ display: 'flex', gap: '15px', height: '160px' }}>
                <div style={{ width: '80px', height: '100%', border: '3px solid var(--ll-orange-light)', borderRadius: '16px', background: 'rgba(255, 96, 0, 0.05)' }} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                   <div style={{ width: '100%', height: '40px', background: '#f5f5f5', borderRadius: '10px' }} />
                   <div style={{ width: '100%', height: '40px', background: '#f5f5f5', borderRadius: '10px' }} />
                   <div style={{ width: '60%', height: '40px', background: '#f5f5f5', borderRadius: '10px' }} />
                </div>
             </div>
             {/* Dynamic Tooltips */}
             <div style={{ position: 'absolute', top: '-15px', right: '-15px', background: 'var(--ll-black)', color: 'white', padding: '8px 16px', borderRadius: '10px', fontSize: '0.8rem', fontWeight: 700 }}>컨테이너 박스</div>
             <div style={{ position: 'absolute', bottom: '40px', left: '-25px', background: 'var(--ll-orange)', color: 'white', padding: '8px 16px', borderRadius: '10px', fontSize: '0.8rem', fontWeight: 700 }}>아이템 박스</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>
);
