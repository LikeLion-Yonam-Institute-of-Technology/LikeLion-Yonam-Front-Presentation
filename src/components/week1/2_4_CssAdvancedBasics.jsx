import { useState } from 'react';
import CodePreview from '../common/CodePreview';

export const CssSpecificity = () => (
  <div className="animate-up">
    <h2>선택자 우선순위 (Specificity)</h2>
    <p className="lead">같은 요소를 가리킬 때, 누가 이길까요?</p>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', marginTop: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { type: 'ID (#)', score: '100', color: '#EF4444', desc: '가장 강력함 (단 하나만 존재)' },
          { type: 'CLASS (.)', score: '10', color: '#3B82F6', desc: '중간 강도 (여러 개 사용 가능)' },
          { type: 'TAG', score: '1', color: '#10B981', desc: '가장 약함' }
        ].map((item) => (
          <div key={item.type} className="pbl-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: item.color, color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 900, fontSize: '1.2rem' }}>
              {item.score}
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{item.type}</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>{item.desc}</div>
            </div>
          </div>
        ))}
        <p style={{ fontSize: '0.9rem', color: 'var(--ll-orange)', fontWeight: 700, marginTop: '10px' }}>
          * 나중에 쓴 코드보다 '점수'가 높은 코드가 최종 적용됩니다!
        </p>
      </div>
      <CodePreview 
        language="css"
        title="styles.css"
        code={`#title {\n  color: red; /* Win! */\n}\n\n.main-text {\n  color: blue;\n}\n\nh1 {\n  color: black;\n}`}
        previewHtml='<h1 id="title" class="main-text">우승자는 RED!</h1>'
      >
        <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1 id="title" className="main-text" style={{ color: 'red', fontSize: '3rem', margin: 0 }}>
            우승자는 RED!
          </h1>
        </div>
      </CodePreview>
    </div>
  </div>
);

export const CssColors = () => (
  <div className="animate-up">
    <h2>색상 표기법: 컴퓨터에게 색 말하기</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '2rem' }}>
      <div className="pbl-card" style={{ textAlign: 'center' }}>
        <div style={{ height: '100px', background: '#FF6000', borderRadius: '12px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#111', fontWeight: 900 }}>#FF6000</div>
        <h3>HEX Code</h3>
        <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>16진수 표기법.<br/>가장 널리 쓰입니다.</p>
      </div>
      <div className="pbl-card" style={{ textAlign: 'center' }}>
        <div style={{ height: '100px', background: 'rgb(255, 96, 0)', borderRadius: '12px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#111', fontWeight: 900 }}>rgb(255, 96, 0)</div>
        <h3>RGB</h3>
        <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>Red, Green, Blue<br/>빛의 3원색 조합.</p>
      </div>
      <div className="pbl-card" style={{ textAlign: 'center' }}>
        <div style={{ height: '100px', background: 'hsl(23, 100%, 50%)', borderRadius: '12px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#111', fontWeight: 900 }}>hsl(23, 100%, 50%)</div>
        <h3>HSL</h3>
        <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>Hue, Saturation, Lightness<br/>직관적인 색 조절.</p>
      </div>
    </div>
  </div>
);

export const CssUnits = () => (
  <div className="animate-up">
    <h2>CSS 단위: 크기 측정하기</h2>
    <p className="lead">상황에 맞는 적절한 단위를 선택하는 것이 중요합니다.</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', marginTop: '2rem' }}>
      <div className="pbl-card">
        <h3 style={{ marginBottom: '1.2rem', color: 'var(--ll-orange)' }}>절대 단위 (Absolute)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ padding: '15px', background: '#f8f9fa', borderRadius: '12px', borderLeft: '4px solid #111' }}>
            <strong style={{ fontSize: '1.1rem' }}>px (Pixel)</strong>
            <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>모니터의 화소 하나 크기. 고정된 크기를 가집니다.</p>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#999' }}>* 정교한 디자인이 필요할 때 사용</p>
        </div>
      </div>
      <div className="pbl-card">
        <h3 style={{ marginBottom: '1.2rem', color: 'var(--ll-orange)' }}>상대 단위 (Relative)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ padding: '15px', background: '#f8f9fa', borderRadius: '12px', borderLeft: '4px solid #3B82F6' }}>
            <strong style={{ fontSize: '1.1rem' }}>rem (Root Em)</strong>
            <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>브라우저 기본 폰트 크기(기본 16px)의 배수. <b>가장 권장됨!</b></p>
          </div>
          <div style={{ padding: '15px', background: '#f8f9fa', borderRadius: '12px', borderLeft: '4px solid #10B981' }}>
            <strong style={{ fontSize: '1.1rem' }}>% (Percentage)</strong>
            <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>부모 요소 크기에 대한 비율.</p>
          </div>
          <div style={{ padding: '15px', background: '#f8f9fa', borderRadius: '12px', borderLeft: '4px solid #FCD34D' }}>
            <strong style={{ fontSize: '1.1rem' }}>vw / vh</strong>
            <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>화면(Viewport)의 너비/높이에 대한 비율.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const CssLayoutVillains = () => {
  const [activeVillain, setActiveVillain] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  const villains = [
    {
      title: '우선순위 빌런',
      icon: '🥷',
      color: '#EF4444',
      symptom: '"나중에 작성한 클래스 코드가 적용되지 않아요!"',
      cause: 'CSS는 기본적으로 나중에 작성된 코드가 적용되지만, 선택자(Selector)의 우선순위(ID > Class > Tag)가 먼저 적용되기 때문입니다.',
      solutionText: '선택자를 더 구체적으로 결합하거나(예: #header.box) 과도한 ID 사용을 피하세요.',
      brokenCode: `.box {\n  background: blue; /* 나중에 작성했지만 클래스이므로 무시됨 */\n}\n\n#header {\n  background: red; /* 위에 썼지만 ID의 우선순위가 더 높음 */\n  width: 100%;\n  padding: 20px;\n  color: white;\n}`,
      brokenRender: (
        <div style={{ width: '100%', background: '#fff' }}>
          <div style={{ background: 'red', width: '100%', padding: '20px', color: 'white', fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center', borderRadius: '8px' }}>
            우선순위 때문에 여전히 빨간색이 적용된 상태 😭
          </div>
        </div>
      ),
      fixedCode: `#header.box {\n  background: blue; /* ID와 Class를 결합하여 우선순위를 가장 높게 만듦 */\n  width: 100%;\n  padding: 20px;\n  color: white;\n}`,
      fixedRender: (
        <div style={{ width: '100%', background: '#fff' }}>
          <div style={{ background: '#3B82F6', width: '100%', padding: '20px', color: 'white', fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center', borderRadius: '8px' }}>
            더 구체적인 선택자로 파란색 적용 성공! 🎉
          </div>
        </div>
      ),
      previewHtml: '<div class="box" id="header" style="width:100%;padding:20px;color:white;font-weight:bold;font-size:1.2rem;text-align:center;border-radius:8px;">이 박스의 배경색은?</div>'
    },
    {
      title: '팽창 빌런',
      icon: '💥',
      color: '#3B82F6',
      symptom: '"분명 너비 100%를 줬는데 박스가 부모를 뚫고 나가요!"',
      cause: '기본 content-box 상태에서는 너비 100%에 패딩이 추가로 더해져서 100%를 초과하게 됩니다.',
      solutionText: '마법의 코드 * { box-sizing: border-box; } 를 추가하세요.',
      brokenCode: `.parent {\n  width: 100%;\n  background: #eee;\n}\n\n.child {\n  width: 100%;\n  padding: 40px; /* 여기서 팽창 발생! */\n  background: #3B82F6;\n  box-sizing: content-box; /* 기본값 */\n}`,
      brokenRender: (
        <div style={{ width: '100%', background: '#eee', padding: '20px', border: '2px dashed #999', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '10px', background: '#fff', fontSize: '0.8rem', padding: '0 5px' }}>.parent (100%)</div>
          <div style={{ width: '100%', padding: '40px', background: 'rgba(59, 130, 246, 0.9)', boxSizing: 'content-box', color: 'white', fontWeight: 'bold', borderRadius: '8px', zIndex: 2, position: 'relative' }}>
            우측 영역을 뚫고 튀어나갑니다!! 💥 
          </div>
        </div>
      ),
      fixedCode: `* {\n  box-sizing: border-box; /* 패딩을 너비 100% 안으로 구겨넣음! */\n}\n\n.parent {\n  width: 100%;\n  background: #eee;\n}\n\n.child {\n  width: 100%;\n  padding: 40px;\n  background: #10B981;\n}`,
      fixedRender: (
        <div style={{ width: '100%', background: '#eee', padding: '20px', border: '2px dashed #999', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '10px', background: '#fff', fontSize: '0.8rem', padding: '0 5px' }}>.parent (100%)</div>
          <div style={{ width: '100%', padding: '40px', background: '#10B981', boxSizing: 'border-box', color: 'white', fontWeight: 'bold', borderRadius: '8px' }}>
            이제 부모 안에 예쁘게 쏙 들어갑니다 😌
          </div>
        </div>
      ),
      previewHtml: '<div class="parent" style="border:2px dashed #999;padding:20px;position:relative;"><span style="position:absolute;top:-10px;left:10px;background:#fff;font-size:0.8rem;padding:0 5px;">.parent (100%)</span><div class="child">이 박스가 부모를 뚫게 될까요?</div></div>'
    },
    {
      title: '여백 증발 빌런',
      icon: '👻',
      color: '#10B981',
      symptom: '"위아래로 50px씩 띄웠는데 간격이 100px이 아니에요!"',
      cause: '블록 요소들의 위아래 마진이 맞닿으면, 둘 중 더 큰 값 하나로 합쳐지는(병합) 현상입니다.',
      solutionText: '마진 대신 부모의 padding, 혹은 Flexbox의 gap을 사용해 안전하게 띄우세요.',
      brokenCode: `.box1 {\n  margin-bottom: 50px;\n  background: orange;\n}\n\n.box2 {\n  margin-top: 50px;\n  background: skyblue;\n}\n/* 결과: 실제 간격은 50px만 벌어짐 */`,
      brokenRender: (
        <div style={{ width: '100%', background: '#fafafa', border: '1px solid #ddd', minHeight: '300px' }}>
          <div style={{ background: '#F59E0B', padding: '20px', marginBottom: '50px', color: 'white', fontWeight: 'bold', textAlign: 'center' }}>BOX 1 (margin-bottom: 50px)</div>
          <div style={{ background: '#3B82F6', padding: '20px', marginTop: '50px', color: 'white', fontWeight: 'bold', textAlign: 'center' }}>BOX 2 (margin-top: 50px)</div>
          <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#EF4444', fontWeight: 'bold', marginTop: '20px' }}>🚨 두 박스 사이 간격이 100px이 아니라 50px로 겹쳤습니다!</div>
        </div>
      ),
      fixedCode: `.container {\n  display: flex;\n  flex-direction: column;\n  gap: 100px; /* 명확한 간격 지정! 완전 안전! */\n}\n\n.box1 { margin: 0; background: orange; }\n.box2 { margin: 0; background: skyblue; }`,
      fixedRender: (
        <div style={{ width: '100%', background: '#fafafa', border: '1px solid #ddd', display: 'flex', flexDirection: 'column', gap: '100px', minHeight: '300px' }}>
          <div style={{ background: '#F59E0B', padding: '20px', color: 'white', fontWeight: 'bold', margin: '0', textAlign: 'center' }}>BOX 1 (margin: 0)</div>
          <div style={{ background: '#10B981', padding: '20px', color: 'white', fontWeight: 'bold', margin: '0', textAlign: 'center' }}>BOX 2 (margin: 0)</div>
        </div>
      ),
      previewHtml: '<div class="container"><div class="box1" style="padding:20px;color:white;font-weight:bold;text-align:center;">BOX 1</div><div class="box2" style="padding:20px;color:white;font-weight:bold;text-align:center;">BOX 2</div></div>'
    }
  ];

  const currentVillain = villains[activeVillain];

  return (
    <div className="animate-up" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h2>레이아웃의 3대 빌런</h2>
      <p className="lead" style={{ marginBottom: '1.5rem' }}>버튼을 클릭하며 왜 레이아웃이 깨지는지, 코드로 어떻게 고치는지 눈으로 확인해보세요!</p>
      
      {/* 탭 메뉴 */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {villains.map((v, idx) => (
          <button
            key={idx}
            onClick={() => { setActiveVillain(idx); setIsFixed(false); }}
            style={{
              padding: '12px 24px',
              borderRadius: '8px',
              border: `2px solid ${activeVillain === idx ? v.color : '#eaeaea'}`,
              background: activeVillain === idx ? `${v.color}15` : 'white',
              cursor: 'pointer',
              fontWeight: activeVillain === idx ? 800 : 500,
              fontSize: '1rem',
              color: activeVillain === idx ? v.color : '#666',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>{v.icon}</span> {v.title}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
        {/* 상단: 설명 및 해결 버튼 (3열 배치) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <div className="pbl-card" style={{ borderTop: `6px solid ${currentVillain.color}`, padding: '20px', background: '#fafafa', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 900, color: currentVillain.color }}>😵 증상</span>
            <p style={{ fontSize: '1.05rem', color: '#111', marginTop: '12px', fontWeight: 700, lineHeight: 1.5 }}>
              {currentVillain.symptom}
            </p>
          </div>
          
          <div className="pbl-card" style={{ padding: '20px', borderTop: '6px solid #ccc', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 900, color: '#666' }}>🕵️ 원인</span>
            <p style={{ fontSize: '0.95rem', color: '#444', marginTop: '12px', lineHeight: 1.6 }}>
              {currentVillain.cause}
            </p>
          </div>

          <div style={{ background: isFixed ? '#ecfdf5' : '#fff', border: `2px solid ${isFixed ? '#10B981' : '#eee'}`, borderTop: `6px solid ${isFixed ? '#10B981' : 'var(--ll-orange)'}`, padding: '16px 20px', borderRadius: '12px', transition: 'all 0.3s', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 900, color: isFixed ? '#065F46' : 'var(--ll-orange)' }}>💡 해결책</span>
            <p style={{ fontSize: '0.9rem', color: '#333', marginTop: '8px', marginBottom: '12px', lineHeight: 1.5, fontWeight: isFixed ? 600 : 400 }}>
              {currentVillain.solutionText}
            </p>
            
            <button 
              onClick={() => setIsFixed(!isFixed)}
              style={{
                width: '100%',
                padding: '10px',
                background: isFixed ? '#10B981' : 'var(--ll-orange)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 800,
                fontSize: '0.95rem',
                cursor: 'pointer',
                boxShadow: `0 4px 12px ${isFixed ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255, 96, 0, 0.3)'}`,
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: 'auto'
              }}
            >
              {isFixed ? '✅ 완벽하게 해결됨! (원상복구)' : '🚀 마법의 주문으로 고치기'}
            </button>
          </div>
        </div>

        {/* 하단: 코드 프리뷰 시각화 */}
        <div>
          <div key={activeVillain + (isFixed ? 'fixed' : 'broken')} style={{ animation: 'fadeIn 0.3s ease-out', height: '100%' }}>
            <CodePreview 
              language="css"
              code={isFixed ? currentVillain.fixedCode : currentVillain.brokenCode}
              title={isFixed ? '✨ 해결된 레이아웃 코드' : '🚨 문제가 발생한 레이아웃 코드'}
              height="700px"
              previewHtml={currentVillain.previewHtml || ''}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '0 20px', width: '100%' }}>
                {isFixed ? currentVillain.fixedRender : currentVillain.brokenRender}
              </div>
            </CodePreview>
          </div>
        </div>
      </div>
    </div>
  );
};
