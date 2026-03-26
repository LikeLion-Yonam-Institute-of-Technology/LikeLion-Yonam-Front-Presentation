import React from 'react';
import CodePreview from '../common/CodePreview';

export const HtmlListsBasic = () => (
  <div className="animate-up">
    <h2>목록 만들기 (1): OL & UL</h2>
    <p className="lead">순서가 있는 목록과 없는 목록을 구분하여 사용합니다.</p>
    <CodePreview 
      code={`<!-- 순서 있는 목록 -->\n<ol>\n  <li>기획하기</li>\n  <li>디자인하기</li>\n  <li>개발하기</li>\n</ol>\n\n<!-- 순서 없는 목록 -->\n<ul>\n  <li>HTML/CSS</li>\n  <li>JavaScript</li>\n</ul>`}
      title="순서/비순서 목록"
      tags={[
        { name: 'ul', desc: '순서 없는 목록 (Unordered)' },
        { name: 'ol', desc: '순서 있는 목록 (Ordered)' },
        { name: 'li', desc: '목록의 각 항목 (List Item)' }
      ]}
    />
  </div>
);

export const HtmlListsDef = () => (
  <div className="animate-up">
    <h2>목록 만들기 (2): 정의 목록</h2>
    <p className="lead">용어와 그에 대한 정의를 쌍으로 묶어 표현합니다.</p>
    <CodePreview 
      code={`<!-- 정의 목록 (Description List) -->\n<dl>\n  <dt>HTML</dt>\n  <dd>뼈대를 만드는 언어</dd>\n  <dt>CSS</dt>\n  <dd>디자인을 입히는 언어</dd>\n</dl>`}
      title="정의 목록"
      tags={[
        { name: 'dl', desc: '용어와 정의 목록 (Description)' },
        { name: 'dt', desc: '정의할 용어 (Term)' },
        { name: 'dd', desc: '용어에 대한 설명 (Description)' }
      ]}
    />
  </div>
);

export const HtmlTables = () => (
  <div className="animate-up">
    <h2>표 구성하기 (Tables)</h2>
    <p className="lead">복잡한 데이터를 행과 열로 정렬하여 보여줍니다.</p>
    <CodePreview 
      code={`<table border="1">\n  <thead>\n    <tr>\n      <th>과목</th>\n      <th>시간</th>\n      <th>비고</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>HTML/CSS</td>\n      <td>14:00</td>\n      <td rowspan="2">실습 필수</td>\n    </tr>\n    <tr>\n      <td>JS Basics</td>\n      <td>16:00</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan="3">오프라인 세션 총 4시간</td>\n    </tr>\n  </tfoot>\n</table>`}
      title="표 구조"
      tags={[
        { name: 'table', desc: '표 전체를 감싸는 태그' },
        { name: 'tr', desc: '표의 한 줄 (Row)' },
        { name: 'th/td', desc: '제목 셀 / 일반 데이터 셀' }
      ]}
    />
  </div>
);

export const HtmlListPractice = () => (
  <div className="animate-up">
    <div className="status-badge" style={{ marginBottom: '1rem', width: 'fit-content', background: 'var(--ll-black)' }}>실습 04</div>
    <h2>나만의 레시피 만들기</h2>
    <p className="lead">순서 없는 목록(&lt;ul&gt;)과 순서 있는 목록(&lt;ol&gt;)을 조합해 봅시다.</p>
    <CodePreview 
      code={`<h3>김치볶음밥 레시피</h3>\n<h4>준비물</h4>\n<ul>\n  <li>김치, 밥, 계란 프라이</li>\n</ul>\n\n<h4>조리 순서</h4>\n<ol>\n  <li>김치를 볶는다</li>\n  <li>밥을 넣어 섞는다</li>\n  <li>계란프라이를 올린다</li>\n</ol>`}
      title="계층 구조 예시"
      tags={[
        { name: 'ol/ul', desc: '순서가 중요한지 아닌지에 따라 구분' },
        { name: 'li', desc: '반드시 ol/ul 내부에서만 사용' }
      ]}
    />
    <div className="pbl-card" style={{ marginTop: '2rem', border: '1px solid #ddd', background: '#fdfdfd' }}>
      <h4 style={{ color: 'var(--ll-black)' }}>💻 로컬 실습</h4>
      <ul style={{ fontSize: '1rem', marginTop: '0.5rem', paddingLeft: '20px', lineHeight: '1.8' }}>
        <li>본인이 가장 좋아하는 요리의 레시피를 작성해 보세요.</li>
        <li>준비물은 `&lt;ul&gt;`, 조리 순서는 `&lt;ol&gt;`을 사용하세요.</li>
        <li>`&lt;dl&gt;`, `&lt;dt&gt;`, `&lt;dd&gt;`를 사용해서 요리 팁을 추가해 보세요.</li>
      </ul>
    </div>
  </div>
);
