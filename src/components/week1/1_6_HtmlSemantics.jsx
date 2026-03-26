import React from 'react';
import CodePreview from '../common/CodePreview';

export const HtmlSemantics1 = () => (
  <div className="animate-up">
    <h2>왜 시맨틱(Semantic) 태그인가?</h2>
    <p className="lead">Semantic = <strong>'의미가 있는'</strong>. 이름만 봐도 역할을 알 수 있는 태그입니다.</p>
    
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', marginTop: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ marginBottom: '0.5rem', color: 'var(--ll-orange)' }}>시맨틱 태그를 쓰는 3가지 이유</h3>
        {[
          { title: 'SEO (검색 엔진 최적화)', desc: '구글, 네이버 등 검색 엔진이 페이지의 핵심 콘텐츠를 더 잘 파악하여 검색 노출 순위가 올라갑니다.', icon: '🔍' },
          { title: '접근성 (Accessibility)', desc: '시각 장애인이 사용하는 스크린 리더(화면 낭독기)가 웹페이지 구조를 정확하게 파악해 안내합니다.', icon: '👁️' },
          { title: '유지보수성 (Maintainability)', desc: '수많은 <div> 지옥에서 벗어나, 다른 개발자(또는 미래의 나)가 코드를 쉽게 이해할 수 있습니다.', icon: '🛠️' }
        ].map((item, i) => (
          <div key={i} className="pbl-card" style={{ padding: '15px 20px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
            <div>
              <strong style={{ display: 'block', fontSize: '1.05rem', marginBottom: '4px' }}>{item.title}</strong>
              <span style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5, display: 'block' }}>{item.desc}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="pbl-card" style={{ borderLeft: '6px solid #EF4444', padding: '15px' }}>
          <h4 style={{ color: '#EF4444', marginBottom: '10px', fontSize: '1rem' }}>비시맨틱 (의미 없음)</h4>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#666', background: '#f8f8f8', padding: '10px', borderRadius: '8px' }}>
            &lt;div id="header"&gt;...&lt;/div&gt;<br/>
            &lt;div class="nav"&gt;...&lt;/div&gt;<br/>
            &lt;div class="main"&gt;...&lt;/div&gt;
          </div>
          <p style={{ marginTop: '10px', fontSize: '0.8rem', color: '#888' }}>단순한 '상자'. 무엇이 중요한 정보인지 컴퓨터는 알 수 없습니다.</p>
        </div>
        
        <div className="pbl-card" style={{ borderLeft: '6px solid #10B981', background: '#F0FDF4', padding: '15px' }}>
          <h4 style={{ color: '#10B981', marginBottom: '10px', fontSize: '1rem' }}>시맨틱 (의미 있음)</h4>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#111', background: '#fff', padding: '10px', borderRadius: '8px' }}>
            &lt;header&gt;...&lt;/header&gt;<br/>
            &lt;nav&gt;...&lt;/nav&gt;<br/>
            &lt;main&gt;...&lt;/main&gt;
          </div>
          <p style={{ marginTop: '10px', fontSize: '0.8rem', color: '#111', fontWeight: 600 }}>브라우저와 검색 엔진이 콘텐츠의 구조를 완벽히 이해합니다.</p>
        </div>
      </div>
    </div>
  </div>
);

export const HtmlSemantics2 = () => (
  <div className="animate-up" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <h2>레이아웃의 정석</h2>
    <p className="lead" style={{ marginBottom: '2.5rem' }}>
      현대적인 웹사이트는 다음과 같은 구조를 바탕으로 실제 시맨틱 레이아웃을 구성합니다.
    </p>
    
    <div style={{ flex: 1, display: 'flex', gap: '50px', alignItems: 'stretch' }}>
      {/* Left side: Tag descriptions */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
        {[
          { tag: '<header>', desc: '로고, 검색바 등 상단 영역', color: '#EF4444' },
          { tag: '<nav>', desc: '글로벌 네비게이션 메뉴 (GNB)', color: '#F59E0B' },
          { tag: '<main>', desc: '페이지 중심이 되는 핵심 콘텐츠', color: '#10B981' },
          { tag: '<aside>', desc: '사이드바 (광고, 추천글 등)', color: '#8B5CF6' },
          { tag: '<footer>', desc: '저작권, 링크 등 하단 영역', color: '#3B82F6' }
        ].map(item => (
          <div key={item.tag} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ 
              background: item.color, color: 'white', padding: '8px 20px', borderRadius: '12px', 
              fontFamily: 'monospace', fontSize: '1.2rem', fontWeight: 800, width: '130px', textAlign: 'center',
              boxShadow: `0 8px 16px ${item.color}33` 
            }}>{item.tag}</span>
            <span style={{ fontSize: '1.15rem', color: '#444', fontWeight: 600 }}>{item.desc}</span>
          </div>
        ))}
      </div>

      {/* Right side: Visual UI Mockup */}
      <div style={{
        flex: 1.3,
        background: '#ffffff',
        borderRadius: '32px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 30px 60px rgba(0,0,0,0.08)'
      }}>
        {/* Header */}
        <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '3px dashed #EF4444', color: '#EF4444', height: '90px', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 900, fontSize: '1.8rem', letterSpacing: '4px' }}>
          HEADER
        </div>
        
        {/* Nav */}
        <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '3px dashed #F59E0B', color: '#F59E0B', height: '60px', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 900, fontSize: '1.3rem', letterSpacing: '4px' }}>
          NAV
        </div>

        {/* Middle section (Main + Aside) */}
        <div style={{ display: 'flex', gap: '16px', flex: 1, minHeight: '200px' }}>
          <div style={{ flex: 1, background: 'rgba(16, 185, 129, 0.08)', border: '3px dashed #10B981', color: '#10B981', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 900, fontSize: '2.5rem', letterSpacing: '4px' }}>
            MAIN
          </div>
          <div style={{ width: '160px', background: 'rgba(139, 92, 246, 0.08)', border: '3px dashed #8B5CF6', color: '#8B5CF6', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 900, fontSize: '1.5rem', writingMode: 'vertical-rl', letterSpacing: '4px', textOrientation: 'mixed' }}>
            ASIDE
          </div>
        </div>

        {/* Footer */}
        <div style={{ background: 'rgba(59, 130, 246, 0.08)', border: '3px dashed #3B82F6', color: '#3B82F6', height: '70px', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 900, fontSize: '1.4rem', letterSpacing: '4px' }}>
          FOOTER
        </div>
      </div>
    </div>
  </div>
);
