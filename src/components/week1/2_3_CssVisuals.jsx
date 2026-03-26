import React from 'react';
import CodePreview from '../common/CodePreview';

export const CssVisuals1 = () => (
  <div className="animate-up">
    <h2>폰트와 텍스트 스타일</h2>
    <p className="lead">가독성을 결정하는 가장 중요한 요소입니다.</p>
    <CodePreview 
      language="css"
      code={`p {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.5;\n  text-align: center;\n}`}
      title="텍스트 속성"
      previewHtml='<p style="margin-bottom:10px;">제목 스타일</p><p>텍스트의 크기, 굵기, 행간(줄 간격)을 적절히 조절하면 사용자 경험이 크게 향상됩니다.</p>'
      tags={[
        { name: 'font-size', desc: '글자의 크기' },
        { name: 'font-weight', desc: '글자의 굵기 (400=기본, 700=굵게)' },
        { name: 'line-height', desc: '줄 간격 (가독성을 위해 1.5~1.8 권장)' },
        { name: 'text-align', desc: '가로 정렬 (left, center, right, justify)' }
      ]}
    >
      <div style={{ padding: '20px' }}>
        <p style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '10px' }}>제목 스타일</p>
        <p style={{ fontSize: '1rem', fontWeight: 400, lineHeight: 1.6, color: '#666' }}>
          텍스트의 크기, 굵기, 행간(줄 간격)을 적절히 조절하면 사용자 경험이 크게 향상됩니다.
        </p>
      </div>
    </CodePreview>
  </div>
);

export const CssVisuals2 = () => (
  <div className="animate-up">
    <h2>배경과 색상 (Background)</h2>
    <p className="lead">분위기를 만드는 컬러와 이미지입니다.</p>
    <CodePreview 
      language="css"
      code={`div {\n  background-color: #FF6000;\n  background-image: url('...');\n  background-size: cover;\n}`}
      title="배경 스타일링"
      previewHtml='<div style="width:100%;height:150px;display:flex;align-items:center;justify-content:center;color:white;font-weight:900;font-size:1.5rem;border-radius:16px;">배경 스타일</div>'
      tags={[
        { name: 'background-color', desc: '배경 색상' },
        { name: 'background-image', desc: '배경 이미지 설정' },
        { name: 'background-size', desc: '이미지 사이즈 조절 (cover: 꽉 채우기)' }
      ]}
    >
      <div style={{ 
        width: '100%', 
        height: '150px', 
        background: 'linear-gradient(135deg, var(--ll-orange) 0%, #FF9000 100%)', 
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 900,
        fontSize: '1.5rem',
        boxShadow: '0 10px 20px rgba(255, 96, 0, 0.2)'
      }}>
        그라데이션 배경
      </div>
    </CodePreview>
  </div>
);
