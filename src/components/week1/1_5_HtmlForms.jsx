import React from 'react';
import CodePreview from '../common/CodePreview';

export const HtmlForms = () => (
  <div className="animate-up">
    <h2>데이터 입력을 위한 양식 (Forms)</h2>
    <p className="lead">사용자로부터 정보를 입력받을 때 사용하는 가장 중요한 요소입니다.</p>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '2rem' }}>
      <CodePreview 
        code={`<form action="/signup" method="POST">\n  <fieldset>\n    <legend>개인정보 입력</legend>\n    <label for="name">이름: </label>\n    <input type="text" id="name" required placeholder="홍길동">\n    \n    <label for="pw">비밀번호: </label>\n    <input type="password" id="pw" required>\n  </fieldset>\n</form>`}
        title="입력 양식"
        tags={[
          { name: 'form', desc: '입력 양식 전체를 감싸는 영역' },
          { name: 'label', desc: '입력창에 대한 설명 (접근성 필수)' },
          { name: 'input', desc: '다양한 사용자 입력을 받는 요소' }
        ]}
      />
      <div className="pbl-card" style={{ background: 'var(--ll-bg-soft)', border: 'none' }}>
        <h4 style={{ marginBottom: '1rem' }}>주요 속성</h4>
        <ul style={{ fontSize: '0.95rem', lineHeight: 1.8, paddingLeft: '20px', color: 'var(--ll-dark-grey)' }}>
          <li><strong style={{color: 'var(--ll-black)'}}>action:</strong> 데이터를 보낼 서버 주소</li>
          <li><strong style={{color: 'var(--ll-black)'}}>method:</strong> 데이터 전송 방식 (GET/POST)</li>
          <li><strong style={{color: 'var(--ll-black)'}}>label:</strong> 입력창의 이름 (사용자 친화성)</li>
          <li><strong style={{color: 'var(--ll-black)'}}>fieldset:</strong> 관련 입력들을 그룹화</li>
        </ul>
      </div>
    </div>
  </div>
);

export const HtmlFormsSelect = () => (
  <div className="animate-up">
    <h2>선택을 위한 입력 (Check & Radio)</h2>
    <p className="lead">사용자에게 여러 선택지 중 하나 또는 여러 개를 선택받습니다.</p>
    <CodePreview 
      code={`<label>관심 분야:</label>\n<input type="checkbox" id="html"> <label for="html">HTML</label>\n<input type="checkbox" id="css"> <label for="css">CSS</label>\n\n<label>성별:</label>\n<input type="radio" name="gender" value="m"> 남\n<input type="radio" name="gender" value="f"> 여`}
      title="체크박스 & 라디오"
      tags={[
        { name: 'checkbox', desc: '여러 개를 중복 선택할 때' },
        { name: 'radio', desc: '여러 개 중 하나만 선택할 때' }
      ]}
    />
  </div>
);

export const HtmlFormsModern = () => (
  <div className="animate-up" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <h2>다양한 현대적 입력 타입</h2>
    <p className="lead" style={{ marginBottom: '1.5rem' }}>HTML5에서 추가된 다양한 입력 타입들입니다. 브라우저가 알아서 편리한 UI를 제공합니다.</p>
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', flex: 1 }}>
      {[
        { type: 'text', icon: '📝', desc: '일반 텍스트', sample: <input type="text" placeholder="입력하세요..." style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '100%' }} /> },
        { type: 'password', icon: '🔒', desc: '비밀번호 (마스킹)', sample: <input type="password" placeholder="비밀번호" style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '100%' }} /> },
        { type: 'email', icon: '📧', desc: '이메일 형식 검증', sample: <input type="email" placeholder="example@email.com" style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '100%' }} /> },
        { type: 'number', icon: '🔢', desc: '숫자 (스피너 제공)', sample: <input type="number" placeholder="10" style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '100%' }} /> },
        { type: 'date', icon: '📅', desc: '날짜 (캘린더 제공)', sample: <input type="date" style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '100%', cursor: 'pointer' }} /> },
        { type: 'time', icon: '⏰', desc: '시간 선택기', sample: <input type="time" style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '100%', cursor: 'pointer' }} /> },
        { type: 'color', icon: '🎨', desc: '색상 팔레트 제공', sample: <input type="color" defaultValue="#ff6000" style={{ padding: '2px', border: '1px solid #ddd', borderRadius: '4px', width: '100%', height: '40px', cursor: 'pointer' }} /> },
        { type: 'range', icon: '🎚️', desc: '범위 드래그 슬라이더', sample: <input type="range" style={{ width: '100%', cursor: 'pointer', marginTop: '10px' }} /> },
        { type: 'file', icon: '📁', desc: '파일 탐색기 업로드', sample: <input type="file" style={{ fontSize: '0.85rem', width: '100%', marginTop: '5px' }} /> }
      ].map(item => (
        <div key={item.type} className="pbl-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
            <code style={{ fontSize: '1.1rem', color: 'var(--ll-orange)', fontWeight: 800 }}>type="{item.type}"</code>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '8px', minHeight: '20px' }}>{item.desc}</p>
          <div style={{ marginTop: 'auto', background: '#f8f9fa', padding: '12px', borderRadius: '8px', border: '1px solid #eee' }}>
            {item.sample}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const HtmlFormPractice = () => (
  <div className="animate-up">
    <div className="status-badge" style={{ marginBottom: '1rem', width: 'fit-content', background: 'var(--ll-black)' }}>실습 05</div>
    <h2>나만의 로그인/가입 양식 만들기</h2>
    <p className="lead">입력 타입과 라벨(&lt;label&gt;)을 조화롭게 사용하여 폼을 완성해 봅시다.</p>
    <CodePreview 
      code={`<form>\n  <fieldset>\n    <legend>회원가입</legend>\n    <label>아이디: </label>\n    <input type="text" placeholder="아이디를 입력하세요">\n  \n    <label>비밀번호: </label>\n    <input type="password">\n\n    <button type="submit">제출하기</button>\n  </fieldset>\n</form>`}
      title="폼 디자인 예시"
    />
    <div className="pbl-card" style={{ marginTop: '2rem', border: '1px solid #ddd', background: '#fdfdfd' }}>
      <h4 style={{ color: 'var(--ll-black)' }}>💻 로컬 실습</h4>
      <ul style={{ fontSize: '1rem', marginTop: '0.5rem', paddingLeft: '20px', lineHeight: '1.8' }}>
        <li>입력한 내용이 안 보이게 하는 `&lt;input type="password"&gt;`를 넣어 보세요.</li>
        <li>`type="radio"` 또는 `type="checkbox"`를 사용해 선택란을 만들어 보세요.</li>
        <li>가장 하단에 제출 버튼 영역을 만들어 보세요.</li>
      </ul>
    </div>
  </div>
);
