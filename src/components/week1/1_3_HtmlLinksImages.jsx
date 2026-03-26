import React from 'react';
import CodePreview from '../common/CodePreview';

export const HtmlLinks = () => (
  <div className="animate-up">
    <h2>하이퍼링크 (Hyperlinks)</h2>
    <p className="lead">문서와 문서, 혹은 문서 내의 특정 지점을 연결합니다.</p>
    
// ... (existing pbl-card remains)

    <CodePreview 
      code={`<a href="https://likelion.university" target="_blank" rel="noopener">\n  라이온 대학 방문하기 (새 탭)\n</a>\n\n<a href="/guide.pdf" download>\n  가이드 다운로드\n</a>`}
      title="링크 예시"
      tags={[
        { name: 'a', desc: '하이퍼링크 (Anchor)' },
        { name: 'href', desc: '연결할 대상의 주소 (필수 속성)' }
      ]}
    />
  </div>
);

export const HtmlImages = () => (
  <div className="animate-up">
    <h2>이미지와 요소 그룹화</h2>
    <p className="lead">시각적 정보를 제공할 때는 의미를 명확히 하는 것이 중요합니다.</p>
    <CodePreview 
      code={`<!-- alt는 시각 장애인이나 이미지 로딩 실패 시를 위한 필수 속성입니다 -->\n<img src="https://picsum.photos/400/200" alt="멋진 풍경 사진" />\n\n<!-- 이미지와 설명을 하나로 묶기 -->\n<figure>\n  <img src="https://picsum.photos/400/201" alt="바다" />\n  <figcaption>그림 1. 여름 바다의 풍경</figcaption>\n</figure>`}
      title="이미지 & 캡션"
      tags={[
        { name: 'img', desc: '이미지 삽입 (종료 태그 없음)' },
        { name: 'figure', desc: '독립적인 콘텐츠와 캡션 결합' },
        { name: 'figcaption', desc: '요소에 대한 설명(캡션) 추가' }
      ]}
    />
  </div>
);

export const HtmlLinkPractice = () => (
  <div className="animate-up">
    <div className="status-badge" style={{ marginBottom: '1rem', width: 'fit-content', background: 'var(--ll-black)' }}>실습 03</div>
    <h2>나만의 링크 모음 만들기</h2>
    <p className="lead">자주 방문하는 사이트 3개를 연결하는 목록을 만들어 봅시다.</p>
    <CodePreview 
      code={`<ul>\n  <li>\n    <a href="https://google.com" target="_blank" rel="noopener">구글 (새 탭에서 열기)</a>\n  </li>\n  <li>\n    <a href="https://github.com" target="_blank" rel="noopener">깃허브</a>\n  </li>\n</ul>`}
      title="링크 목록 예시"
      tags={[
        { name: 'a', desc: '다른 페이지로 이동하는 링크' },
        { name: 'target', desc: '링크가 열릴 위치 (예: _blank)' }
      ]}
    />
    <div className="pbl-card" style={{ marginTop: '2rem', border: '1px solid #ddd', background: '#fdfdfd' }}>
      <h4 style={{ color: 'var(--ll-black)' }}>💻 로컬 실습</h4>
      <ul style={{ fontSize: '1rem', marginTop: '0.5rem', paddingLeft: '20px', lineHeight: '1.8' }}>
        <li>자주 가는 사이트 3개를 `&lt;li&gt;`와 `&lt;a&gt;` 태그로 연결해 보세요.</li>
        <li>모든 링크가 **새 탭(`target="_blank"`)**에서 열리도록 설정하세요.</li>
        <li>보안을 위해 `rel="noopener"` 속성도 반드시 추가해 보세요!</li>
      </ul>
    </div>
  </div>
);
