import React from 'react';
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
        title="styles.css"
        code={`#title {\n  color: red; /* Win! */\n}\n\n.main-text {\n  color: blue;\n}\n\nh1 {\n  color: black;\n}`}
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

export const CssLayoutVillains = () => (
  <div className="animate-up">
    <h2>레이아웃의 3대 빌런 (Why CSS breaks?)</h2>
    <p className="lead">CSS가 내 마음대로 안 될 때, 십중팔구 이 셋 중 하나가 범인입니다.</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '2rem' }}>
      <div className="pbl-card" style={{ borderTop: '8px solid #EF4444' }}>
        <h3 style={{ marginBottom: '1rem' }}>1. 우선순위 꼬임</h3>
        <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>
          전혀 엉뚱한 스타일이 적용될 때! <br/>
          <strong>ID &gt; Class &gt; Tag</strong> 순서를 무시했거나, 나중에 쓴 코드에 밀린 경우입니다.
        </p>
      </div>
      <div className="pbl-card" style={{ borderTop: '8px solid #3B82F6' }}>
        <h3 style={{ marginBottom: '1rem' }}>2. 박스 크기 폭발</h3>
        <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>
          분명 100% 줬는데 삐져나갈 때! <br/>
          <code>content-box</code>와 <code>border-box</code>의 차이 때문입니다. 패딩이 박스를 키우고 있죠.
        </p>
      </div>
      <div className="pbl-card" style={{ borderTop: '8px solid #10B981' }}>
        <h3 style={{ marginBottom: '1rem' }}>3. 마진 상사 (Overlap)</h3>
        <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>
          박스 사이 공간이 이상할 때! <br/>
          위아래 마진이 합쳐지거나(Collapsing), 부모 밖으로 튀어나가는 현상입니다.
        </p>
      </div>
    </div>
    <div className="pbl-card" style={{ marginTop: '2rem', background: 'var(--ll-black)', color: 'white', textAlign: 'center' }}>
      <h4 style={{ color: 'var(--ll-orange)' }}>💡 해결책: 기본기를 탄탄하게!</h4>
      <code style={{ background: '#333', color: '#fff', padding: '5px 15px', borderRadius: '6px', marginTop: '10px', display: 'inline-block' }}>
        * { '{ box-sizing: border-box; }' }
      </code>
      <p style={{ fontSize: '0.85rem', marginTop: '10px', opacity: 0.8 }}>이 한 줄만으로 빌런의 절반은 사라집니다.</p>
    </div>
  </div>
);
