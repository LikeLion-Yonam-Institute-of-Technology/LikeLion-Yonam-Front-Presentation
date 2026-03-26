import CodePreview from '../common/CodePreview';

export const HtmlSemantics1 = () => (
  <div className="animate-up">
    <h2>태그는 '이름표'입니다 (Semantics)</h2>
    <p className="lead">태그를 잘 쓰는 것은 상자에 정확한 이름표를 붙이는 것과 같습니다.</p>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', marginTop: '2rem' }}>
      <div className="pbl-card" style={{ background: 'var(--ll-bg-soft)', border: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--ll-dark-grey)' }}>
          단순히 '상자'(&lt;div&gt;)라고 부르는 것보다, <br/>
          <strong>'냉장고'</strong>, <strong>'침대'</strong>라고 명확히 부르면 <br/>
          누가 봐도 안에 무엇이 있는지 알 수 있죠?
        </p>
        <p style={{ marginTop: '1.5rem', fontWeight: 600, color: 'var(--ll-orange)' }}>
          브라우저와 검색 엔진에게 웹사이트의 구조를 <br/> "의미 있게" 전달하는 것이 핵심입니다.
        </p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        {[
          { tag: '<header>', desc: '지붕 (상단)' },
          { tag: '<nav>', desc: '표지판 (메뉴)' },
          { tag: '<main>', desc: '광장 (핵심)' },
          { tag: '<article>', desc: '방 (독립된 글)' },
          { tag: '<footer>', desc: '지하실 (정보)' }
        ].map(item => (
          <div key={item.tag} className="pbl-card" style={{ padding: '15px 25px', flex: '1 0 140px', textAlign: 'center' }}>
            <code style={{ fontSize: '1.1rem', color: 'var(--ll-orange)', fontWeight: 800 }}>{item.tag}</code>
            <div style={{ fontSize: '0.85rem', marginTop: '5px' }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const HtmlBoilerplate = () => (
  <div className="animate-up">
    <h2>HTML은 이렇게 시작해요</h2>
    <p style={{ marginBottom: '1.5rem' }} className="lead">모든 HTML 파일이 가져야 할 '최소한의 약속'입니다.</p>
    <CodePreview 
      title="index.html"
      code={`<!DOCTYPE html>\n<html lang="ko">\n<head>\n  <meta charset="UTF-8">\n  <title>첫 페이지</title>\n</head>\n<body>\n  <h1>안녕, 웹의 세계!</h1>\n</body>\n</html>`}
      tags={[
        { name: '!DOCTYPE', desc: '문서 형식 정의 (HTML5)' },
        { name: 'html', desc: '전체 문서의 시작과 끝' },
        { name: 'head', desc: '문서 정보(메타데이터) 영역' },
        { name: 'body', desc: '실제 화면에 보이는 영역' }
      ]}
    >
      <div style={{ padding: '10px' }}>
        <ul style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.8 }}>
          <li><strong>!DOCTYPE</strong>: "나는 최신 HTML5야!"</li>
          <li><strong>head</strong>: 화면엔 안 보이지만 중요한 정보들</li>
          <li><strong>body</strong>: 우리가 눈으로 보는 모든 것</li>
        </ul>
      </div>
    </CodePreview>
  </div>
);

export const HtmlIntroPractice = () => (
  <div className="animate-up">
    <div className="status-badge" style={{ marginBottom: '1rem', width: 'fit-content', background: 'var(--ll-black)' }}>PRACTICE 01</div>
    <h2>첫 번째 HTML 문서 만들기</h2>
    <p className="lead">이제 여러분의 컴퓨터에서 직접 첫 번째 웹 페이지를 만들어 볼 시간입니다.</p>
    
    <CodePreview 
      code={`<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <title>아기사자 자기소개</title>\n  </head>\n  <body>\n    <h1>안녕하세요, 멋사 14기 OOO입니다!</h1>\n    <p>만나서 반가워요. 우리 함께 열공해요!</p>\n  </body>\n</html>`}
      title="예시 코드 구조"
      tags={[
        { name: 'h1', desc: '가장 중요한 대제목' },
        { name: 'p', desc: '일반 본문 텍스트 (단락)' }
      ]}
    />

    <div className="pbl-card" style={{ marginTop: '2rem', border: '1px solid #ddd', background: '#fdfdfd' }}>
      <h4 style={{ color: 'var(--ll-black)' }}>💻 Local Task: VS Code에서 진행하세요</h4>
      <ul style={{ fontSize: '1rem', marginTop: '0.5rem', paddingLeft: '20px', lineHeight: '1.8' }}>
        <li>VS Code를 열고 `index.html` 파일을 생성하세요.</li>
        <li>위의 예시 코드를 참고하여 나만의 문구를 작성해 보세요.</li>
        <li>파일을 저장한 뒤 브라우저로 열어 결과를 확인하세요. (Go Live 클릭)</li>
      </ul>
    </div>
  </div>
);
