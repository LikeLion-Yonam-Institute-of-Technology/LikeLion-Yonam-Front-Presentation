import React from 'react';
import CodePreview from '../common/CodePreview';

export const HtmlText1 = () => (
  <div className="animate-up">
    <h2>텍스트의 성격 부여하기</h2>
    <p className="lead">제목(Heading)과 본문(Paragraph)을 구분하여 문서의 위계를 잡습니다.</p>
    <CodePreview 
      code={`<h1>h1: 가장 중요한 대제목</h1>\n<h2>h2: 중간 제목</h2>\n<h3>h3: 소제목</h3>\n<p>p: 일반적인 본문 텍스트를 작성할 때 사용합니다.</p>`}
      title="제목 & 단락"
      tags={[
        { name: 'h1~h6', desc: '제목 (숫자가 작을수록 중요함)' },
        { name: 'p', desc: '본문 텍스트 단락' }
      ]}
    />
  </div>
);

export const HtmlVoidElements = () => (
  <div className="animate-up">
    <h2>닫는 태그가 없는 예외들 (빈 요소)</h2>
    <p className="lead">내용(content)을 품지 않아서 <code>&lt;br&gt;</code>처럼 단독으로 쓰이는 태그들입니다.</p>
    <CodePreview 
      code={`<p>\n  아무리 엔터를 쳐도\n  브라우저는 한 줄로 보여줍니다.\n  하지만 <br> 브라우저에게 "줄바꿈해!" 라고\n  명령하면 이렇게 다음 줄로 넘어갑니다.\n</p>\n\n<hr>\n\n<p>hr 태그는 수평선(구분선)을 그어줍니다.</p>`}
      title="줄바꿈 & 수평선"
      tags={[
        { name: 'br', desc: 'Break (줄바꿈 - 엔터 키 역할)' },
        { name: 'hr', desc: 'Horizontal Rule (수평 규칙선)' }
      ]}
    />
  </div>
);

export const HtmlTextEmphasis = () => (
  <div className="animate-up">
    <h2>의미를 담은 강조와 편집 (1)</h2>
    <p className="lead">강조와 하이라이트를 통해 텍스트의 중요도를 조절합니다.</p>
    <CodePreview 
      code={`<p>이 문장은 <strong>매우 중요</strong>합니다.</p>\n<p>이 단어는 <em>강조</em>되었습니다.</p>\n<p>중요한 부분은 <mark>하이라이트</mark> 처리합니다.</p>`}
      title="강조 & 하이라이트"
      tags={[
        { name: 'strong', desc: '중요한 의미를 가진 굵은 글씨' },
        { name: 'em', desc: '기울임꼴로 강조된 텍스트' },
        { name: 'mark', desc: '형광펜 효과 (하이라이트)' }
      ]}
    />
  </div>
);

export const HtmlTextEdit = () => (
  <div className="animate-up">
    <h2>의미를 담은 강조와 편집 (2)</h2>
    <p className="lead">삭제나 추가된 텍스트, 수학/화학 기호 등을 표현합니다.</p>
    <CodePreview 
      code={`<p>가격: <del>10,000원</del> <ins>8,000원</ins></p>\n<p>H<sub>2</sub>O (아래 첨자)</p>\n<p>2<sup>10</sup> = 1024 (위 첨자)</p>`}
      title="편집 & 첨자"
      tags={[
        { name: 'del', desc: '삭제된 텍스트 (취소선)' },
        { name: 'ins', desc: '새로 추가된 텍스트 (밑줄)' },
        { name: 'sub/sup', desc: '아래 첨자 / 위 첨자' }
      ]}
    />
  </div>
);

export const HtmlText3 = () => (
  <div className="animate-up">
    <h2>인용과 코드 표현</h2>
    <p className="lead">긴 인용구나 프로그래밍 코드를 표현할 때 사용합니다.</p>
    <CodePreview 
      code={`<blockquote>\n  "성공적인 웹 개발의 시작은 탄탄한 HTML 설계부터입니다."\n</blockquote>\n\n<pre>\n<code>\nfunction hello() {\n  console.log("Hello Likelion!");\n}\n</code>\n</pre>`}
      title="인용구 & 코드"
      tags={[
        { name: 'blockquote', desc: '긴 인용 문구 블록' },
        { name: 'pre', desc: '작성한 그대로 표시 (공백 유지)' },
        { name: 'code', desc: '짧은 코드 조각' }
      ]}
    />
  </div>
);

export const HtmlTextPractice = () => (
  <div className="animate-up">
    <div className="status-badge" style={{ marginBottom: '1rem', width: 'fit-content', background: 'var(--ll-black)' }}>실습 02</div>
    <h2>텍스트에 의미와 강조 더하기</h2>
    <p className="lead">강조(&lt;strong&gt;), 하이라이트(&lt;mark&gt;), 취소선(&lt;del&gt;) 등을 활용해 문장을 완성해 봅시다.</p>
    <CodePreview 
      code={`<p>오늘의 학습 목표: <strong>HTML 정복하기</strong></p>\n<p>어제까지의 목표: <del>잠자기</del> <ins>열공하기</ins></p>\n\n<blockquote>\n  "성공적인 웹 개발의 시작은 탄탄한 HTML 설계부터입니다."\n</blockquote>`}
      title="텍스트 활용 예시"
      tags={[
        { name: 'strong', desc: '매우 중요한 텍스트' },
        { name: 'del', desc: '취소된 내용 표시' },
        { name: 'blockquote', desc: '명언이나 긴 인용구' }
      ]}
    />
    <div className="pbl-card" style={{ marginTop: '2rem', border: '1px solid #ddd', background: '#fdfdfd' }}>
      <h4 style={{ color: 'var(--ll-black)' }}>💻 로컬 실습</h4>
      <ul style={{ fontSize: '1rem', marginTop: '0.5rem', paddingLeft: '20px', lineHeight: '1.8' }}>
        <li>본인이 좋아하는 명언이나 대사를 `&lt;blockquote&gt;`로 작성해 보세요.</li>
        <li>중요한 단어에 `&lt;mark&gt;`를 사용해 형광펜 효과를 주어 보세요.</li>
        <li>쇼핑몰 가격 표시처럼 `&lt;del&gt;`과 `&lt;ins&gt;`를 조합해 보세요.</li>
      </ul>
    </div>
  </div>
);
