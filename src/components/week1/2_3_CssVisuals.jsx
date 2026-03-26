import React from 'react';
import CodePreview from '../common/CodePreview';

export const CssVisuals1 = () => (
  <div className="animate-up">
    <h2>폰트와 텍스트 스타일</h2>
    <p className="lead">가독성을 결정하는 가장 중요한 요소입니다.</p>
    <CodePreview 
      language="css"
      code={`p {\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.6;\n  text-align: center;\n  color: #333;\n}`}
      title="텍스트 속성"
      previewHtml='<div style="padding:40px 20px; background:#f8f9fa; border-radius:12px; height:100%; display:flex; flex-direction:column; justify-content:center;"><h3 style="font-size:1rem; color:#FF6000; margin-bottom:15px; text-align:center;">TEXT STYLING</h3><p>이 텍스트의 스타일이 왼쪽 코드에 따라 실시간으로 변합니다. 값을 다양하게 수정해 보세요!</p></div>'
      tags={[
        { name: 'font-size', desc: '글자의 크기' },
        { name: 'font-weight', desc: '글자의 굵기 (400=기본, 700=굵게)' },
        { name: 'line-height', desc: '줄 간격 (가독성을 위해 1.5~1.8 권장)' },
        { name: 'text-align', desc: '가로 정렬 (left, center, right, justify)' }
      ]}
    />
  </div>
);

export const CssVisuals2 = () => (
  <div className="animate-up">
    <h2>배경과 색상 (Background)</h2>
    <p className="lead">분위기를 만드는 컬러와 이미지입니다.</p>
    <CodePreview 
      language="css"
      code={`.box {\n  background-color: #FF6000;\n  color: white;\n  border-radius: 16px;\n  /* 그라데이션, 이미지 배경 등 적용 가능 */\n}`}
      title="배경 스타일링"
      previewHtml='<div style="width:100%;height:100%;padding:40px;display:flex;align-items:center;justify-content:center;background:#fafafa;"><div class="box" style="width:100%;height:150px;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:1.5rem;box-shadow:0 10px 20px rgba(0,0,0,0.1);">배경 스타일 박스</div></div>'
      tags={[
        { name: 'background-color', desc: '배경 색상' },
        { name: 'background-image', desc: '배경 이미지 설정 (url(...))' },
        { name: 'background-size', desc: '이미지 사이즈 조절 (cover: 꽉 채우기)' }
      ]}
    />
  </div>
);
