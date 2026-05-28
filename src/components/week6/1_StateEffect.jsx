import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const Motion = motion;

const cardStyle = {
  background: "white",
  borderRadius: "16px",
  padding: "22px",
  border: "1px solid #f0f0f0",
  boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
};

const sectionLabelStyle = {
  fontSize: "0.72rem",
  fontWeight: 900,
  letterSpacing: "0.1em",
  color: "var(--ll-orange)",
  marginBottom: "10px",
};

const codeStyle = {
  margin: 0,
  padding: "15px 17px",
  fontSize: "0.78rem",
  fontFamily: "var(--font-mono)",
  background: "#f8fafc",
  lineHeight: 1.58,
};

const CodeBlock = ({ code, language = "jsx", height = "auto" }) => (
  <div
    style={{
      borderRadius: "12px",
      border: "1px solid #e5e7eb",
      overflow: "auto",
      maxHeight: height,
      background: "#f8fafc",
    }}
  >
    <SyntaxHighlighter
      language={language}
      style={oneLight}
      customStyle={codeStyle}
      codeTagProps={{ style: { fontFamily: "var(--font-mono)" } }}
    >
      {code}
    </SyntaxHighlighter>
  </div>
);

const Pill = ({ children, color = "var(--ll-orange)" }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "5px 10px",
      borderRadius: "999px",
      background: `${color}14`,
      color,
      fontWeight: 900,
      fontSize: "0.76rem",
      border: `1px solid ${color}30`,
    }}
  >
    {children}
  </span>
);

export const StateMentalModel = () => (
  <div className="animate-up">
    <h2>
      State는 <span style={{ color: "var(--ll-orange)" }}>컴포넌트의 기억</span>
    </h2>
    <p className="lead">
      props는 부모가 내려주는 값이고, state는 컴포넌트 안에서 시간이 지나며
      바뀌는 값입니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "26px",
        marginTop: "1.8rem",
      }}
    >
      <Motion.div
        style={{ ...cardStyle, background: "#EFF6FF" }}
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div style={{ ...sectionLabelStyle, color: "#2563EB" }}>PROPS</div>
        <h3 style={{ color: "#1D4ED8", marginBottom: "12px" }}>
          부모가 전달하는 읽기 전용 데이터
        </h3>
        <CodeBlock
          code={`<ProfileCard
  name="김사자"
  role="Frontend"
/>`}
        />
        <p style={{ color: "#1E3A8A", fontWeight: 800, lineHeight: 1.55 }}>
          컴포넌트가 직접 바꾸지 않습니다. 다른 값이 필요하면 부모에서 다른
          props를 내려줍니다.
        </p>
      </Motion.div>

      <Motion.div
        style={{ ...cardStyle, background: "#FFF7ED" }}
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.12 }}
      >
        <div style={sectionLabelStyle}>STATE</div>
        <h3 style={{ color: "#EA580C", marginBottom: "12px" }}>
          이벤트에 따라 컴포넌트가 기억하는 데이터
        </h3>
        <CodeBlock
          code={`const [likes, setLikes] = useState(0);

button.onClick = () => {
  setLikes(likes + 1);
};`}
        />
        <p style={{ color: "#9A3412", fontWeight: 800, lineHeight: 1.55 }}>
          상태가 바뀌면 React가 컴포넌트를 다시 실행하고, 새로운 화면을
          렌더링합니다.
        </p>
      </Motion.div>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "14px",
        marginTop: "22px",
      }}
    >
      {["이벤트 발생", "setState 호출", "컴포넌트 다시 실행", "화면 갱신"].map(
        (step, index) => (
          <Motion.div
            key={step}
            style={{
              padding: "16px",
              borderRadius: "14px",
              background: index === 1 ? "rgba(255,96,0,0.09)" : "white",
              border: "1px solid #f0f0f0",
              textAlign: "center",
              fontWeight: 900,
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + index * 0.08 }}
          >
            {step}
          </Motion.div>
        ),
      )}
    </div>
  </div>
);

export const StateClosureAndRender = () => (
  <div className="animate-up">
    <h2>
      useState와 클로저:{" "}
      <span style={{ color: "var(--ll-orange)" }}>렌더마다 값이 고정된다</span>
    </h2>
    <p className="lead">
      컴포넌트 함수는 렌더링될 때마다 다시 실행됩니다. 그 렌더에서 만든 이벤트
      핸들러는 그 순간의 state 값을 기억하는 클로저가 됩니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: "24px",
        marginTop: "1.5rem",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>STATE SNAPSHOT</div>
        <CodeBlock
          height="430px"
          code={`function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }

  return <button onClick={handleClick}>{count}</button>;
}

// 버튼을 눌렀을 때
// 화면: 1
// console: 0
//
// 이유: handleClick은 "이번 렌더의 count"를
// 클로저로 기억합니다. setCount는 다음 렌더를 예약합니다.`}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {[
          {
            title: "렌더 1",
            desc: "count는 0입니다. handleClick도 count=0을 기억합니다.",
            color: "#3B82F6",
          },
          {
            title: "클릭",
            desc: "setCount(1)을 요청하지만, 지금 실행 중인 함수의 count는 여전히 0입니다.",
            color: "var(--ll-orange)",
          },
          {
            title: "렌더 2",
            desc: "React가 상태 큐를 반영해 컴포넌트를 다시 실행합니다. 새 count는 1입니다.",
            color: "#10B981",
          },
          {
            title: "새 클로저",
            desc: "렌더 2에서 새 handleClick이 만들어지고 이번에는 count=1을 기억합니다.",
            color: "#8B5CF6",
          },
        ].map((item, index) => (
          <Motion.div
            key={item.title}
            style={{ ...cardStyle, padding: "16px", borderColor: `${item.color}33` }}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.09 }}
          >
            <strong style={{ color: item.color }}>{item.title}</strong>
            <p style={{ margin: "7px 0 0", color: "#666", lineHeight: 1.55 }}>
              {item.desc}
            </p>
          </Motion.div>
        ))}
      </div>
    </div>
  </div>
);

export const StateRerenderMechanism = () => (
  <div className="animate-up">
    <h2>
      왜 useState를 써야 <span style={{ color: "var(--ll-orange)" }}>화면이 다시 그려질까?</span>
    </h2>
    <p className="lead">
      일반 변수는 렌더 사이에 보존되지 않고, 값을 바꿔도 React에게 다시 렌더링할
      이유를 알려주지 못합니다. state setter는 React에 업데이트를 예약합니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginTop: "1.5rem",
      }}
    >
      <div style={{ ...cardStyle, background: "#FEF2F2" }}>
        <div style={{ ...sectionLabelStyle, color: "#DC2626" }}>LOCAL VARIABLE</div>
        <h3 style={{ color: "#991B1B", marginBottom: "12px" }}>
          값은 바뀌지만 React는 모릅니다
        </h3>
        <CodeBlock
          height="300px"
          code={`function Counter() {
  let count = 0;

  function handleClick() {
    count += 1;
    console.log(count);
  }

  return <button onClick={handleClick}>{count}</button>;
}`}
        />
        <p style={{ color: "#991B1B", fontWeight: 800, lineHeight: 1.55 }}>
          클릭할 때 변수는 바뀔 수 있지만 React가 컴포넌트를 다시 실행하지 않으므로
          화면은 갱신되지 않습니다.
        </p>
      </div>

      <div style={{ ...cardStyle, background: "#F0FDF4" }}>
        <div style={{ ...sectionLabelStyle, color: "#16A34A" }}>STATE SETTER</div>
        <h3 style={{ color: "#166534", marginBottom: "12px" }}>
          setter가 렌더링을 예약합니다
        </h3>
        <CodeBlock
          height="300px"
          code={`function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>{count}</button>;
}`}
        />
        <p style={{ color: "#166534", fontWeight: 800, lineHeight: 1.55 }}>
          setCount는 새 값을 React 업데이트 큐에 넣고, React는 다음 렌더에서 새
          state로 JSX를 다시 계산합니다.
        </p>
      </div>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "12px",
        marginTop: "20px",
      }}
    >
      {[
        "이벤트 발생",
        "setter 호출",
        "업데이트 큐 등록",
        "컴포넌트 재실행",
        "DOM 반영",
      ].map((step, index) => (
        <Motion.div
          key={step}
          style={{
            padding: "14px",
            borderRadius: "14px",
            background: index === 2 ? "rgba(255,96,0,0.09)" : "white",
            border: "1px solid #f0f0f0",
            textAlign: "center",
            fontWeight: 900,
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
        >
          {step}
        </Motion.div>
      ))}
    </div>
  </div>
);

export const StateQueueAndBatching = () => (
  <div className="animate-up">
    <h2>
      상태 업데이트 큐: <span style={{ color: "var(--ll-orange)" }}>같은 렌더의 count는 그대로</span>
    </h2>
    <p className="lead">
      React는 이벤트 핸들러가 끝난 뒤 상태 업데이트를 모아서 처리합니다. 이전
      값을 기준으로 여러 번 바꿔야 하면 함수형 업데이트를 사용합니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginTop: "1.5rem",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>STALE SNAPSHOT</div>
        <CodeBlock
          height="370px"
          code={`function plusThree() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}

// count가 0인 렌더에서 실행되면
// 세 줄 모두 setCount(1)과 같습니다.
// 결과: 1`}
        />
      </div>

      <div style={cardStyle}>
        <div style={sectionLabelStyle}>UPDATER FUNCTION</div>
        <CodeBlock
          height="370px"
          code={`function plusThree() {
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
}

// React가 큐를 처리하며
// 0 -> 1 -> 2 -> 3 순서로 계산합니다.
// 결과: 3`}
        />
      </div>
    </div>

    <div
      style={{
        marginTop: "20px",
        padding: "17px 20px",
        borderRadius: "14px",
        background: "#0f172a",
        color: "white",
        fontWeight: 900,
        lineHeight: 1.6,
      }}
    >
      정리: 다음 상태가 현재 상태에 의존하면 `setCount(prev =&gt; prev + 1)`처럼
      updater 함수를 씁니다. 이 방식은 클로저가 기억한 오래된 count 대신 React가
      큐에서 넘겨주는 최신 이전값을 사용합니다.
    </div>
  </div>
);

export const RenderingDefinition = () => (
  <div className="animate-up">
    <h2>
      React 렌더링이란?{" "}
      <span style={{ color: "var(--ll-orange)" }}>컴포넌트 함수를 다시 실행하는 것</span>
    </h2>
    <p className="lead">
      렌더링은 실제 DOM을 무조건 바꾸는 일이 아닙니다. React가 컴포넌트 함수를
      실행해서 이번 화면의 UI 구조를 다시 계산하는 과정입니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginTop: "1.5rem",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>RENDERING</div>
        <CodeBlock
          height="360px"
          code={`function App() {
  console.log("App 렌더링");

  return <h1>Hello</h1>;
}

// 렌더링이 일어나면
// 1. 컴포넌트 함수가 다시 실행되고
// 2. JSX 결과가 다시 만들어지고
// 3. React가 이전 결과와 비교합니다.`}
        />
      </div>

      <div style={cardStyle}>
        <div style={sectionLabelStyle}>JSX RESULT</div>
        <CodeBlock
          height="360px"
          language="javascript"
          code={`// JSX
<h1>Hello</h1>

// 내부적으로는 대략 이런 객체 구조가 됩니다.
{
  type: "h1",
  props: {
    children: "Hello"
  }
}

// React는 새 결과와 이전 결과를 비교해
// 실제 DOM에 필요한 변경만 반영합니다.`}
        />
      </div>
    </div>

    <div
      style={{
        marginTop: "20px",
        padding: "17px 20px",
        borderRadius: "14px",
        background: "#0f172a",
        color: "white",
        fontWeight: 900,
        lineHeight: 1.6,
      }}
    >
      핵심 구분: 렌더링은 "UI를 다시 계산"하는 일이고, DOM 업데이트는 비교 후
      "실제로 바뀐 부분만 화면에 반영"하는 일입니다.
    </div>
  </div>
);

export const RenderingTriggers = () => (
  <div className="animate-up">
    <h2>
      렌더링이 일어나는 <span style={{ color: "var(--ll-orange)" }}>대표적인 이유</span>
    </h2>
    <p className="lead">
      React는 UI가 달라질 가능성이 있는 순간 컴포넌트를 다시 실행합니다. 대표적인
      원인은 state, props, 부모 렌더링, context 변경입니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "14px",
        marginTop: "1.4rem",
      }}
    >
      {[
        {
          title: "state 변경",
          desc: "setCount 같은 setter가 호출되어 컴포넌트 내부 상태가 바뀔 때",
          color: "#3B82F6",
        },
        {
          title: "props 변경",
          desc: "부모가 자식에게 넘겨주는 값이 이전 렌더와 달라질 때",
          color: "#10B981",
        },
        {
          title: "부모 렌더링",
          desc: "부모가 다시 실행되면 자식도 다시 확인되고 렌더링될 수 있음",
          color: "#8B5CF6",
        },
        {
          title: "context 변경",
          desc: "Provider value가 바뀌면 그 값을 읽는 컴포넌트가 다시 렌더링",
          color: "var(--ll-orange)",
        },
      ].map((item, index) => (
        <Motion.div
          key={item.title}
          style={{
            ...cardStyle,
            padding: "16px",
            background: `${item.color}0D`,
            borderColor: `${item.color}33`,
          }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
        >
          <div style={{ ...sectionLabelStyle, color: item.color }}>
            REASON 0{index + 1}
          </div>
          <h3 style={{ color: item.color, fontSize: "1rem", marginBottom: "8px" }}>
            {item.title}
          </h3>
          <p style={{ margin: 0, color: "#666", lineHeight: 1.5, fontSize: "0.84rem" }}>
            {item.desc}
          </p>
        </Motion.div>
      ))}
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "18px",
        marginTop: "20px",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>STATE / PROPS</div>
        <CodeBlock
          height="250px"
          code={`function Parent() {
  const [name, setName] = useState("희승");

  return (
    <>
      <Child name={name} />
      <button onClick={() => setName("준수")}>
        이름 변경
      </button>
    </>
  );
}`}
        />
      </div>

      <div style={cardStyle}>
        <div style={sectionLabelStyle}>PARENT / CHILD</div>
        <CodeBlock
          height="250px"
          code={`function Parent() {
  const [count, setCount] = useState(0);

  console.log("Parent 렌더링");

  return (
    <>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <Child />
    </>
  );
}`}
        />
      </div>
    </div>
  </div>
);

export const RenderCommitPhases = () => (
  <div className="animate-up">
    <h2>
      렌더링 과정: <span style={{ color: "var(--ll-orange)" }}>Render Phase와 Commit Phase</span>
    </h2>
    <p className="lead">
      React는 먼저 새 UI 결과를 계산하고, 이전 결과와 비교한 뒤, 필요한 변경만
      실제 DOM에 반영합니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "18px",
        marginTop: "1.5rem",
      }}
    >
      {[
        {
          step: "1",
          title: "Render Phase",
          desc: "컴포넌트 함수를 실행해 새 JSX 결과를 계산합니다.",
          code: `function App() {
  return <p>{count}</p>;
}`,
          color: "#3B82F6",
        },
        {
          step: "2",
          title: "Reconciliation",
          desc: "이전 UI 결과와 새 UI 결과를 비교해 바뀐 부분을 찾습니다.",
          code: `이전: <p>0</p>
새 결과: <p>1</p>`,
          color: "#8B5CF6",
        },
        {
          step: "3",
          title: "Commit Phase",
          desc: "실제 DOM에는 필요한 변경만 적용합니다.",
          code: `텍스트 노드만
0 -> 1로 변경`,
          color: "var(--ll-orange)",
        },
      ].map((item, index) => (
        <Motion.div
          key={item.title}
          style={{ ...cardStyle, borderColor: `${item.color}33` }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: item.color,
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              marginBottom: "12px",
            }}
          >
            {item.step}
          </div>
          <h3 style={{ color: item.color, marginBottom: "8px" }}>{item.title}</h3>
          <p style={{ color: "#666", lineHeight: 1.5 }}>{item.desc}</p>
          <CodeBlock code={item.code} height="130px" />
        </Motion.div>
      ))}
    </div>

    <div
      style={{
        marginTop: "20px",
        padding: "17px 20px",
        borderRadius: "14px",
        background: "rgba(255,96,0,0.08)",
        border: "1px solid rgba(255,96,0,0.18)",
        color: "var(--ll-orange)",
        fontWeight: 900,
        lineHeight: 1.6,
      }}
    >
      렌더링이 일어나도 새 결과가 이전 결과와 같다면 실제 DOM 변경은 거의 없을 수
      있습니다. 렌더링과 DOM 업데이트는 같은 말이 아닙니다.
    </div>
  </div>
);

export const RenderingBailoutAndImmutability = () => (
  <div className="animate-up">
    <h2>
      렌더링이 건너뛰어질 때:{" "}
      <span style={{ color: "var(--ll-orange)" }}>같은 값과 객체 참조</span>
    </h2>
    <p className="lead">
      React는 state가 이전 값과 같다고 판단하면 렌더링을 건너뛸 수 있습니다.
      객체와 배열은 값을 직접 바꾸지 말고 새 참조를 만들어야 합니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginTop: "1.4rem",
      }}
    >
      <div style={{ ...cardStyle, background: "#FEF2F2" }}>
        <div style={{ ...sectionLabelStyle, color: "#DC2626" }}>BAD</div>
        <CodeBlock
          height="360px"
          code={`const [user, setUser] = useState({
  name: "희승",
  age: 20,
});

function changeName() {
  user.name = "준수";
  setUser(user);
}

// 객체 내부 값은 바뀌었지만
// 객체 주소는 그대로입니다.`}
        />
      </div>

      <div style={{ ...cardStyle, background: "#F0FDF4" }}>
        <div style={{ ...sectionLabelStyle, color: "#16A34A" }}>GOOD</div>
        <CodeBlock
          height="360px"
          code={`function changeName() {
  setUser({
    ...user,
    name: "준수",
  });
}

const [items, setItems] = useState([]);

setItems([...items, "새 아이템"]);

// 새 객체, 새 배열을 만들어
// React가 변경을 감지하게 합니다.`}
        />
      </div>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "14px",
        marginTop: "18px",
      }}
    >
      {[
        ["같은 원시값", "현재 count가 0인데 setCount(0)을 하면 React가 건너뛸 수 있습니다."],
        ["Object.is 비교", "React는 state 변경 판단에 Object.is 방식의 비교를 사용합니다."],
        ["불변 업데이트", "객체/배열은 직접 수정하지 않고 새 값으로 교체해야 안전합니다."],
      ].map(([title, desc], index) => (
        <Motion.div
          key={title}
          style={{ ...cardStyle, padding: "16px" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <strong style={{ color: "var(--ll-orange)" }}>{title}</strong>
          <p style={{ margin: "8px 0 0", color: "#666", lineHeight: 1.5 }}>
            {desc}
          </p>
        </Motion.div>
      ))}
    </div>
  </div>
);

export const RenderingOptimization = () => (
  <div className="animate-up">
    <h2>
      불필요한 렌더링 줄이기:{" "}
      <span style={{ color: "var(--ll-orange)" }}>필요할 때만 최적화</span>
    </h2>
    <p className="lead">
      렌더링은 대부분 괜찮습니다. 다만 컴포넌트가 많거나 계산이 무거울 때
      `React.memo`, `useMemo`, `useCallback`으로 비용을 줄일 수 있습니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "18px",
        marginTop: "1.5rem",
      }}
    >
      {[
        {
          title: "React.memo",
          desc: "props가 같으면 자식 컴포넌트 렌더링을 건너뛸 수 있습니다.",
          code: `const Child = React.memo(function Child({ name }) {
  console.log("Child 렌더링");
  return <p>{name}</p>;
});`,
          color: "#3B82F6",
        },
        {
          title: "useMemo",
          desc: "무거운 계산 결과를 dependency가 바뀔 때만 다시 계산합니다.",
          code: `const filtered = useMemo(() => {
  return members.filter((m) => m.part === part);
}, [members, part]);`,
          color: "#10B981",
        },
        {
          title: "useCallback",
          desc: "함수 참조를 기억합니다. memoized 자식에게 함수를 넘길 때 유용합니다.",
          code: `const handleClick = useCallback(() => {
  console.log("클릭");
}, []);`,
          color: "#8B5CF6",
        },
      ].map((item, index) => (
        <Motion.div
          key={item.title}
          style={{ ...cardStyle, borderColor: `${item.color}33` }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div style={{ ...sectionLabelStyle, color: item.color }}>
            {item.title}
          </div>
          <p style={{ color: "#666", lineHeight: 1.5 }}>{item.desc}</p>
          <CodeBlock code={item.code} height="210px" />
        </Motion.div>
      ))}
    </div>

    <div
      style={{
        marginTop: "20px",
        padding: "17px 20px",
        borderRadius: "14px",
        background: "#0f172a",
        color: "white",
        fontWeight: 900,
        lineHeight: 1.6,
      }}
    >
      먼저 올바른 state 구조를 만들고, 실제로 느린 부분이 보일 때 최적화합니다.
      최적화 Hook 자체도 복잡도를 만들기 때문입니다.
    </div>
  </div>
);

export const UseStateCounter = () => {
  const [likes, setLikes] = useState(0);
  const [name, setName] = useState("김사자");

  return (
    <div className="animate-up">
      <h2>
        useState: <span style={{ color: "var(--ll-orange)" }}>값을 기억하고 바꾸기</span>
      </h2>
      <p className="lead">
        `useState(초기값)`은 현재 값과 그 값을 바꾸는 함수를 배열로 돌려줍니다.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 0.9fr",
          gap: "26px",
          marginTop: "1.6rem",
        }}
      >
        <div style={cardStyle}>
          <div style={sectionLabelStyle}>CODE</div>
          <CodeBlock
            height="430px"
            code={`import { useState } from "react";

function LikeBox() {
  const [likes, setLikes] = useState(0);
  const [name, setName] = useState("김사자");

  return (
    <section>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>{name}의 자기소개</h3>
      <button onClick={() => setLikes(likes + 1)}>
        좋아요 {likes}
      </button>
    </section>
  );
}`}
          />
        </div>

        <div style={{ ...cardStyle, background: "#0f172a", color: "white" }}>
          <div style={{ ...sectionLabelStyle, color: "#FBBF24" }}>LIVE</div>
          <label
            style={{
              display: "block",
              fontWeight: 900,
              color: "#CBD5E1",
              marginBottom: "8px",
            }}
          >
            이름
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "12px 14px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              fontWeight: 800,
              outline: "none",
            }}
          />

          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              borderRadius: "14px",
              background: "white",
              color: "#111",
            }}
          >
            <div style={{ fontSize: "2.4rem", marginBottom: "8px" }}>🦁</div>
            <h3 style={{ margin: "0 0 8px" }}>{name || "이름 없음"}의 자기소개</h3>
            <p style={{ color: "#666", lineHeight: 1.55 }}>
              상태가 바뀔 때마다 이 카드가 자동으로 다시 렌더링됩니다.
            </p>
            <button
              type="button"
              onClick={() => setLikes((prev) => prev + 1)}
              style={{
                marginTop: "10px",
                border: "none",
                borderRadius: "10px",
                padding: "11px 16px",
                background: "var(--ll-orange)",
                color: "white",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              좋아요 {likes}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EventHandlingForms = () => (
  <div className="animate-up">
    <h2>
      이벤트 처리: <span style={{ color: "var(--ll-orange)" }}>사용자 입력을 상태로</span>
    </h2>
    <p className="lead">
      React 이벤트 이름은 camelCase입니다. 폼 입력은 `value`와 `onChange`를
      함께 쓰면 상태와 화면이 한 방향으로 흐릅니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "18px",
        marginTop: "1.7rem",
      }}
    >
      {[
        {
          title: "클릭",
          event: "onClick",
          code: `<button onClick={handleAdd}>
  추가
</button>`,
          color: "#3B82F6",
        },
        {
          title: "입력",
          event: "onChange",
          code: `<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>`,
          color: "#10B981",
        },
        {
          title: "제출",
          event: "onSubmit",
          code: `<form onSubmit={handleSubmit}>
  ...
</form>`,
          color: "var(--ll-orange)",
        },
      ].map((item, index) => (
        <Motion.div
          key={item.event}
          style={cardStyle}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div style={{ ...sectionLabelStyle, color: item.color }}>
            {item.event}
          </div>
          <h3 style={{ marginBottom: "12px" }}>{item.title} 이벤트</h3>
          <CodeBlock code={item.code} />
        </Motion.div>
      ))}
    </div>

    <div
      style={{
        marginTop: "22px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "18px",
      }}
    >
      <div style={{ ...cardStyle, background: "#FEF2F2" }}>
        <div style={{ ...sectionLabelStyle, color: "#DC2626" }}>주의</div>
        <h3 style={{ color: "#991B1B" }}>폼 제출은 기본 새로고침을 막기</h3>
        <CodeBlock
          code={`function handleSubmit(e) {
  e.preventDefault();
  // 여기서 상태 업데이트
}`}
        />
      </div>
      <div style={{ ...cardStyle, background: "#F0FDF4" }}>
        <div style={{ ...sectionLabelStyle, color: "#16A34A" }}>원칙</div>
        <h3 style={{ color: "#166534" }}>화면을 직접 지우지 말고 상태를 바꾸기</h3>
        <p style={{ margin: 0, color: "#166534", fontWeight: 800, lineHeight: 1.6 }}>
          입력값 초기화도 `setName("")`, 목록 추가도 `setMembers(...)`처럼 상태
          업데이트로 처리합니다.
        </p>
      </div>
    </div>
  </div>
);

const initialMembers = [
  { id: 1, name: "김사자", part: "Frontend", skill: "React" },
  { id: 2, name: "이멋사", part: "Backend", skill: "Node.js" },
  { id: 3, name: "박디자인", part: "Design", skill: "Figma" },
];

export const ListAddDelete = () => {
  const [members, setMembers] = useState(initialMembers);
  const [name, setName] = useState("");
  const [part, setPart] = useState("Frontend");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setMembers((prev) => [
      {
        id: Date.now(),
        name: name.trim(),
        part,
        skill: part === "Frontend" ? "React" : part === "Backend" ? "API" : "UI",
      },
      ...prev,
    ]);
    setName("");
  };

  return (
    <div className="animate-up">
      <h2>
        목록 상태: <span style={{ color: "var(--ll-orange)" }}>추가와 삭제</span>
      </h2>
      <p className="lead">
        배열 상태는 원본을 직접 수정하지 않고 새 배열을 만들어 교체합니다.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: "24px",
          marginTop: "1.4rem",
        }}
      >
        <div style={cardStyle}>
          <div style={sectionLabelStyle}>핵심 코드</div>
          <CodeBlock
            height="470px"
            code={`const [members, setMembers] = useState([]);

function addMember(newMember) {
  setMembers((prev) => [
    newMember,
    ...prev,
  ]);
}

function deleteMember(id) {
  setMembers((prev) =>
    prev.filter((member) => member.id !== id)
  );
}

// 금지: members.push(newMember)
// React가 변경을 알아차리기 어렵습니다.`}
          />
        </div>

        <div style={cardStyle}>
          <div style={sectionLabelStyle}>LIVE</div>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 130px auto",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름"
              style={{
                padding: "11px 12px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                fontWeight: 800,
              }}
            />
            <select
              value={part}
              onChange={(e) => setPart(e.target.value)}
              style={{
                padding: "11px 12px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                fontWeight: 800,
              }}
            >
              <option>Frontend</option>
              <option>Backend</option>
              <option>Design</option>
            </select>
            <button
              type="submit"
              style={{
                border: "none",
                borderRadius: "10px",
                padding: "0 16px",
                background: "var(--ll-orange)",
                color: "white",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              추가
            </button>
          </form>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <AnimatePresence>
              {members.map((member) => (
                <Motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "12px",
                    alignItems: "center",
                    padding: "12px 14px",
                    borderRadius: "12px",
                    background: "#f8f9fa",
                    border: "1px solid #eee",
                  }}
                >
                  <div>
                    <strong>{member.name}</strong>
                    <div style={{ marginTop: "4px", display: "flex", gap: "6px" }}>
                      <Pill color="#3B82F6">{member.part}</Pill>
                      <Pill color="#10B981">{member.skill}</Pill>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setMembers((prev) =>
                        prev.filter((item) => item.id !== member.id),
                      )
                    }
                    style={{
                      border: "1px solid #FECACA",
                      borderRadius: "9px",
                      background: "#FEF2F2",
                      color: "#DC2626",
                      padding: "8px 10px",
                      fontWeight: 900,
                      cursor: "pointer",
                    }}
                  >
                    삭제
                  </button>
                </Motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FilteringDerivedState = () => {
  const [filter, setFilter] = useState("ALL");
  const [query, setQuery] = useState("");

  const visibleMembers = initialMembers.filter((member) => {
    const matchPart = filter === "ALL" || member.part === filter;
    const matchQuery = member.name.toLowerCase().includes(query.toLowerCase());
    return matchPart && matchQuery;
  });

  return (
    <div className="animate-up">
      <h2>
        필터링: <span style={{ color: "var(--ll-orange)" }}>저장할 상태와 계산할 값 구분</span>
      </h2>
      <p className="lead">
        원본 목록, 필터 값, 검색어만 상태로 저장하고 화면에 보일 목록은 렌더링
        중 계산합니다.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          marginTop: "1.5rem",
        }}
      >
        <div style={cardStyle}>
          <div style={sectionLabelStyle}>DERIVED DATA</div>
          <CodeBlock
            height="420px"
            code={`const [members, setMembers] = useState(initialMembers);
const [filter, setFilter] = useState("ALL");
const [query, setQuery] = useState("");

const visibleMembers = members.filter((member) => {
  const matchPart =
    filter === "ALL" || member.part === filter;

  const matchQuery = member.name
    .toLowerCase()
    .includes(query.toLowerCase());

  return matchPart && matchQuery;
});`}
          />
        </div>

        <div style={cardStyle}>
          <div style={sectionLabelStyle}>LIVE</div>
          <div style={{ display: "flex", gap: "10px", marginBottom: "14px" }}>
            {["ALL", "Frontend", "Backend", "Design"].map((part) => (
              <button
                type="button"
                key={part}
                onClick={() => setFilter(part)}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "999px",
                  padding: "8px 12px",
                  background: filter === part ? "var(--ll-orange)" : "white",
                  color: filter === part ? "white" : "#111",
                  fontWeight: 900,
                  cursor: "pointer",
                }}
              >
                {part}
              </button>
            ))}
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="이름 검색"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              fontWeight: 800,
              marginBottom: "16px",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {visibleMembers.map((member) => (
              <div
                key={member.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "13px 14px",
                  borderRadius: "12px",
                  background: "#f8f9fa",
                  border: "1px solid #eee",
                }}
              >
                <strong>{member.name}</strong>
                <Pill color="var(--ll-orange)">{member.part}</Pill>
              </div>
            ))}
            {visibleMembers.length === 0 && (
              <div
                style={{
                  padding: "18px",
                  textAlign: "center",
                  color: "#888",
                  fontWeight: 800,
                  background: "#f8f9fa",
                  borderRadius: "12px",
                }}
              >
                검색 결과가 없습니다.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const UseEffectBasics = () => (
  <div className="animate-up">
    <h2>
      useEffect: <span style={{ color: "var(--ll-orange)" }}>렌더링 이후 실행할 작업</span>
    </h2>
    <p className="lead">
      Effect는 화면 렌더링이 끝난 뒤 React 바깥 세계와 동기화할 때 사용합니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "18px",
        marginTop: "1.7rem",
      }}
    >
      {[
        {
          title: "처음 한 번",
          deps: "[]",
          desc: "컴포넌트가 화면에 처음 나타났을 때 API 요청",
          code: `useEffect(() => {
  loadMembers();
}, []);`,
          color: "#3B82F6",
        },
        {
          title: "값이 바뀔 때",
          deps: "[query]",
          desc: "검색어, 필터, id 같은 값이 바뀔 때 실행",
          code: `useEffect(() => {
  document.title = query;
}, [query]);`,
          color: "#8B5CF6",
        },
        {
          title: "정리 함수",
          deps: "cleanup",
          desc: "타이머, 구독, 이벤트 리스너를 해제",
          code: `useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
}, []);`,
          color: "var(--ll-orange)",
        },
      ].map((item, index) => (
        <Motion.div
          key={item.title}
          style={cardStyle}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div style={{ ...sectionLabelStyle, color: item.color }}>
            {item.deps}
          </div>
          <h3 style={{ marginBottom: "8px" }}>{item.title}</h3>
          <p style={{ color: "#666", lineHeight: 1.55 }}>{item.desc}</p>
          <CodeBlock code={item.code} />
        </Motion.div>
      ))}
    </div>

    <div
      style={{
        marginTop: "22px",
        padding: "18px 22px",
        borderRadius: "14px",
        background: "#0f172a",
        color: "white",
        fontWeight: 900,
        lineHeight: 1.6,
      }}
    >
      판단 기준: 렌더링 중 계산할 수 있으면 Effect가 아닙니다. 서버 요청, 타이머,
      브라우저 API처럼 React 바깥과 연결될 때 Effect를 사용합니다.
    </div>
  </div>
);

export const UseEffectDeepDive = () => (
  <div className="animate-up">
    <h2>
      useEffect 심화:{" "}
      <span style={{ color: "var(--ll-orange)" }}>의존성 배열과 클린업</span>
    </h2>
    <p className="lead">
      Effect는 "언제 실행할지"와 "이전 작업을 어떻게 정리할지"를 함께 설계해야
      합니다. 특히 타이머, 이벤트 리스너, 요청 취소, 구독에는 cleanup이 필요합니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "18px",
        marginTop: "1.5rem",
      }}
    >
      {[
        {
          title: "의존성 없음",
          dep: "생략",
          desc: "매 렌더 후 실행됩니다. Effect 안에서 setState를 하면 무한 반복이 되기 쉽습니다.",
          code: `useEffect(() => {
  console.log("매 렌더 후 실행");
});`,
          color: "#DC2626",
        },
        {
          title: "빈 배열",
          dep: "[]",
          desc: "마운트 후 한 번 실행됩니다. props/state를 읽지 않는 초기 연결이나 최초 요청에 사용합니다.",
          code: `useEffect(() => {
  loadInitialData();
}, []);`,
          color: "#3B82F6",
        },
        {
          title: "값 배열",
          dep: "[roomId]",
          desc: "배열 안 reactive value가 바뀔 때마다 이전 cleanup 후 다시 실행합니다.",
          code: `useEffect(() => {
  connect(roomId);
  return () => disconnect(roomId);
}, [roomId]);`,
          color: "var(--ll-orange)",
        },
      ].map((item, index) => (
        <Motion.div
          key={item.dep}
          style={{ ...cardStyle, borderColor: `${item.color}33` }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div style={{ ...sectionLabelStyle, color: item.color }}>{item.dep}</div>
          <h3 style={{ color: item.color, marginBottom: "8px" }}>{item.title}</h3>
          <p style={{ color: "#666", lineHeight: 1.5, fontSize: "0.84rem" }}>
            {item.desc}
          </p>
          <CodeBlock code={item.code} height="150px" />
        </Motion.div>
      ))}
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "18px",
        marginTop: "20px",
      }}
    >
      <div style={{ ...cardStyle, background: "#FFF7ED" }}>
        <div style={sectionLabelStyle}>CLEANUP TIMING</div>
        <CodeBlock
          height="240px"
          code={`useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => {
    clearInterval(id);
  };
}, []);

// cleanup 실행 시점
// 1. 컴포넌트가 사라질 때
// 2. dependency가 바뀌어 Effect를 다시 실행하기 직전`}
        />
      </div>

      <div style={{ ...cardStyle, background: "#F0FDF4" }}>
        <div style={{ ...sectionLabelStyle, color: "#16A34A" }}>왜 필요한가</div>
        {[
          "타이머가 계속 살아 있으면 사라진 화면의 코드를 계속 실행합니다.",
          "이벤트 리스너를 제거하지 않으면 같은 이벤트가 중복으로 처리됩니다.",
          "API 요청 순서가 꼬이면 늦게 도착한 이전 응답이 최신 화면을 덮을 수 있습니다.",
          "구독/웹소켓 연결은 화면이 사라질 때 반드시 끊어야 합니다.",
        ].map((item, index) => (
          <div
            key={item}
            style={{
              display: "flex",
              gap: "8px",
              padding: "8px 0",
              borderBottom: index < 3 ? "1px solid rgba(0,0,0,0.06)" : "none",
              fontWeight: 800,
              color: "#166534",
              lineHeight: 1.45,
            }}
          >
            <span>□</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const UseEffectCleanupWhy = () => (
  <div className="animate-up">
    <h2>
      Cleanup 함수:{" "}
      <span style={{ color: "var(--ll-orange)" }}>Effect가 남긴 일을 정리하기</span>
    </h2>
    <p className="lead">
      Effect는 컴포넌트 바깥 세계와 연결합니다. 연결을 만들었다면 컴포넌트가
      사라지거나 의존성이 바뀔 때 이전 연결을 끊어야 합니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginTop: "1.4rem",
      }}
    >
      <div style={{ ...cardStyle, background: "#FEF2F2" }}>
        <div style={{ ...sectionLabelStyle, color: "#DC2626" }}>CLEANUP 없음</div>
        <CodeBlock
          height="430px"
          code={`function TimerPanel() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }, []);

  return <p>{seconds}초</p>;
}

// 문제
// 1. 화면에서 사라져도 interval이 계속 실행될 수 있음
// 2. 다시 들어올 때 interval이 중복 생성될 수 있음
// 3. 사라진 컴포넌트의 state 업데이트를 시도할 수 있음`}
        />
      </div>

      <div style={{ ...cardStyle, background: "#F0FDF4" }}>
        <div style={{ ...sectionLabelStyle, color: "#16A34A" }}>CLEANUP 있음</div>
        <CodeBlock
          height="430px"
          code={`function TimerPanel() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p>{seconds}초</p>;
}

// 컴포넌트가 사라질 때 interval을 정리합니다.`}
        />
      </div>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "14px",
        marginTop: "18px",
      }}
    >
      {[
        ["메모리 누수", "사용하지 않는 타이머, 구독, 리스너가 계속 남아 자원을 씁니다."],
        ["중복 실행", "화면을 다시 열 때마다 같은 이벤트 핸들러나 interval이 계속 쌓입니다."],
        ["오래된 응답", "이전 요청이 늦게 도착해 최신 화면의 state를 덮어쓸 수 있습니다."],
        ["예측 불가", "컴포넌트는 사라졌는데 외부 작업은 살아 있어 디버깅이 어려워집니다."],
      ].map(([title, desc], index) => (
        <Motion.div
          key={title}
          style={{ ...cardStyle, padding: "16px" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
        >
          <strong style={{ color: index < 2 ? "#DC2626" : "var(--ll-orange)" }}>
            {title}
          </strong>
          <p style={{ margin: "8px 0 0", color: "#666", lineHeight: 1.5 }}>
            {desc}
          </p>
        </Motion.div>
      ))}
    </div>
  </div>
);

export const UseEffectCleanupCases = () => (
  <div className="animate-up">
    <h2>
      Cleanup이 필요한 대표 상황:{" "}
      <span style={{ color: "var(--ll-orange)" }}>타이머, 이벤트, 요청</span>
    </h2>
    <p className="lead">
      cleanup은 선택 장식이 아니라 "이전 Effect를 무효화하는 장치"입니다.
      의존성이 바뀌면 React는 새 Effect를 실행하기 전에 이전 cleanup을 먼저 실행합니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "18px",
        marginTop: "1.5rem",
      }}
    >
      {[
        {
          title: "이벤트 리스너",
          desc: "resize, scroll, keydown처럼 window에 붙인 리스너는 직접 제거해야 합니다.",
          code: `useEffect(() => {
  const handleResize = () => {
    console.log(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);`,
          color: "#3B82F6",
        },
        {
          title: "구독 / 소켓",
          desc: "roomId가 바뀌면 이전 방 연결을 끊고 새 방에 연결해야 합니다.",
          code: `useEffect(() => {
  const connection = createConnection(roomId);
  connection.connect();

  return () => {
    connection.disconnect();
  };
}, [roomId]);`,
          color: "#8B5CF6",
        },
        {
          title: "API 요청 무효화",
          desc: "이전 요청이 늦게 끝났을 때 최신 state를 덮어쓰지 못하게 막습니다.",
          code: `useEffect(() => {
  let ignore = false;

  async function loadUser() {
    const data = await fetchUser(userId);
    if (!ignore) setUser(data);
  }

  loadUser();

  return () => {
    ignore = true;
  };
}, [userId]);`,
          color: "var(--ll-orange)",
        },
      ].map((item, index) => (
        <Motion.div
          key={item.title}
          style={{ ...cardStyle, borderColor: `${item.color}33` }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div style={{ ...sectionLabelStyle, color: item.color }}>
            {item.title}
          </div>
          <p style={{ color: "#666", lineHeight: 1.5, fontSize: "0.84rem" }}>
            {item.desc}
          </p>
          <CodeBlock code={item.code} height="310px" />
        </Motion.div>
      ))}
    </div>

    <div
      style={{
        marginTop: "18px",
        padding: "16px 20px",
        borderRadius: "14px",
        background: "#0f172a",
        color: "white",
        fontWeight: 900,
        lineHeight: 1.6,
      }}
    >
      기억할 문장: Effect가 외부에 무언가를 "등록"했다면 cleanup에서 반드시
      "해제"합니다.
    </div>
  </div>
);

export const EffectClosureAndAsyncState = () => (
  <div className="animate-up">
    <h2>
      비동기와 state:{" "}
      <span style={{ color: "var(--ll-orange)" }}>콘솔은 이전값, 화면은 현재값?</span>
    </h2>
    <p className="lead">
      axios 응답을 받아 `setState` 한 직후 같은 함수에서 state를 출력하면 이전값이
      보일 수 있습니다. setter는 값을 즉시 바꾸는 대입문이 아니라 다음 렌더를
      예약하는 요청입니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: "24px",
        marginTop: "1.4rem",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>COMMON CONFUSION</div>
        <CodeBlock
          height="450px"
          code={`function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const res = await axios.get("/api/me");

      setUser(res.data);
      console.log(user); // 이전 렌더의 user
    }

    loadUser();
  }, []);

  return <h2>{user?.name}</h2>; // 다음 렌더의 user
}`}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {[
          {
            title: "1. 첫 렌더",
            desc: "user는 null입니다. Effect 안의 loadUser 함수도 user=null인 클로저를 기억합니다.",
            color: "#64748B",
          },
          {
            title: "2. axios 응답",
            desc: "응답 데이터는 도착했지만 setUser는 React에 다음 렌더를 예약할 뿐입니다.",
            color: "#3B82F6",
          },
          {
            title: "3. 즉시 console.log",
            desc: "아직 첫 렌더의 함수 안이므로 console.log(user)는 null을 출력합니다.",
            color: "#DC2626",
          },
          {
            title: "4. 다음 렌더",
            desc: "React가 user를 새 값으로 반영해 컴포넌트를 다시 실행하고 화면은 현재값을 보여줍니다.",
            color: "#16A34A",
          },
        ].map((item, index) => (
          <Motion.div
            key={item.title}
            style={{ ...cardStyle, padding: "16px", borderColor: `${item.color}33` }}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.09 }}
          >
            <strong style={{ color: item.color }}>{item.title}</strong>
            <p style={{ margin: "7px 0 0", color: "#666", lineHeight: 1.5 }}>
              {item.desc}
            </p>
          </Motion.div>
        ))}
      </div>
    </div>
  </div>
);

export const AsyncStateDebugPattern = () => (
  <div className="animate-up">
    <h2>
      해결 패턴: <span style={{ color: "var(--ll-orange)" }}>응답값과 state 관찰을 분리</span>
    </h2>
    <p className="lead">
      API 응답을 확인하려면 응답 객체를 바로 출력하고, state가 실제로 바뀐 뒤의
      값을 확인하려면 해당 state를 의존성으로 둔 Effect에서 관찰합니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginTop: "1.5rem",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>응답 데이터 확인</div>
        <CodeBlock
          height="390px"
          code={`useEffect(() => {
  async function loadUser() {
    const res = await axios.get("/api/me");

    console.log(res.data); // 방금 받은 최신 응답
    setUser(res.data);
  }

  loadUser();
}, []);`}
        />
      </div>

      <div style={cardStyle}>
        <div style={sectionLabelStyle}>state 변경 후 확인</div>
        <CodeBlock
          height="390px"
          code={`useEffect(() => {
  if (!user) return;

  console.log(user); // 렌더에 반영된 최신 state
}, [user]);

// 화면에 보여줄 값도 user에서 읽습니다.
// return <h2>{user?.name}</h2>;`}
        />
      </div>
    </div>

    <div
      style={{
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "14px",
      }}
    >
      {[
        ["setState 직후 로그", "이전 렌더의 클로저 값을 볼 가능성이 높습니다."],
        ["응답 객체 로그", "서버에서 방금 받은 데이터를 즉시 확인할 때 적합합니다."],
        ["state 의존 Effect", "화면과 같은 기준의 최신 state를 확인할 때 적합합니다."],
      ].map(([title, desc], index) => (
        <Motion.div
          key={title}
          style={{ ...cardStyle, padding: "16px" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <strong style={{ color: "var(--ll-orange)" }}>{title}</strong>
          <p style={{ margin: "8px 0 0", color: "#666", lineHeight: 1.5 }}>
            {desc}
          </p>
        </Motion.div>
      ))}
    </div>
  </div>
);

export const FetchWithEffect = () => {
  const [members, setMembers] = useState([]);
  const [status, setStatus] = useState("idle");

  const loadMembers = async () => {
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setMembers([
      { id: 101, name: "Alex Kim", email: "alex@example.com" },
      { id: 102, name: "Mina Lee", email: "mina@example.com" },
      { id: 103, name: "June Park", email: "june@example.com" },
    ]);
    setStatus("success");
  };


  return (
    <div className="animate-up">
      <h2>
        API 연동: <span style={{ color: "var(--ll-orange)" }}>로딩 상태까지 함께 관리</span>
      </h2>
      <p className="lead">
        외부 데이터 요청은 시간이 걸립니다. 데이터뿐 아니라 로딩/성공/실패
        상태도 함께 설계해야 합니다.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 0.95fr",
          gap: "24px",
          marginTop: "1.4rem",
        }}
      >
        <div style={cardStyle}>
          <div style={sectionLabelStyle}>FETCH EFFECT</div>
          <CodeBlock
            height="475px"
            code={`function MemberList() {
  const [members, setMembers] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    async function loadMembers() {
      try {
        setStatus("loading");
        const res = await fetch("https://randomuser.me/api/?results=3");
        const data = await res.json();
        setMembers(data.results);
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    }

    loadMembers();
  }, []);
}`}
          />
        </div>

        <div style={cardStyle}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
            <div style={sectionLabelStyle}>LIVE</div>
            <button
              type="button"
              onClick={loadMembers}
              disabled={status === "loading"}
              style={{
                border: "none",
                borderRadius: "10px",
                padding: "10px 14px",
                background: status === "loading" ? "#ddd" : "var(--ll-orange)",
                color: "white",
                fontWeight: 900,
                cursor: status === "loading" ? "not-allowed" : "pointer",
              }}
            >
              다시 불러오기
            </button>
          </div>
          <div
            style={{
              padding: "14px",
              borderRadius: "12px",
              background: status === "loading" ? "#EFF6FF" : "#F0FDF4",
              color: status === "loading" ? "#1D4ED8" : "#166534",
              fontWeight: 900,
              marginBottom: "14px",
            }}
          >
            상태: {status}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {members.map((member) => (
              <Motion.div
                key={member.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: "13px 14px",
                  borderRadius: "12px",
                  background: "#f8f9fa",
                  border: "1px solid #eee",
                }}
              >
                <strong>{member.name}</strong>
                <div style={{ color: "#666", marginTop: "4px", fontSize: "0.86rem" }}>
                  {member.email}
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const CustomHookIntro = () => (
  <div className="animate-up">
    <h2>
      Custom Hook: <span style={{ color: "var(--ll-orange)" }}>반복 로직을 분리하기</span>
    </h2>
    <p className="lead">
      여러 컴포넌트에서 같은 상태/Effect 로직을 반복한다면 `use`로 시작하는
      함수로 추출할 수 있습니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginTop: "1.5rem",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>BEFORE</div>
        <CodeBlock
          height="420px"
          code={`function MemberList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch(url);
        setData(await res.json());
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);
}`}
        />
      </div>

      <div style={cardStyle}>
        <div style={sectionLabelStyle}>AFTER</div>
        <CodeBlock
          height="420px"
          code={`function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

function MemberList() {
  const { data, loading, error } = useFetch(url);
}`}
        />
      </div>
    </div>

    <div
      style={{
        marginTop: "22px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "14px",
      }}
    >
      {[
        ["이름 규칙", "반드시 use로 시작해야 React Hook 규칙을 지킬 수 있습니다."],
        ["책임", "UI가 아니라 상태와 로직을 재사용하는 함수입니다."],
        ["반환값", "컴포넌트가 필요한 값과 함수를 객체로 돌려줍니다."],
      ].map(([title, desc]) => (
        <div key={title} style={{ ...cardStyle, padding: "16px" }}>
          <strong style={{ color: "var(--ll-orange)" }}>{title}</strong>
          <p style={{ margin: "8px 0 0", color: "#666", lineHeight: 1.5 }}>
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export const RouterConcept = () => (
  <div className="animate-up">
    <h2>
      Router: <span style={{ color: "var(--ll-orange)" }}>URL로 화면을 나누기</span>
    </h2>
    <p className="lead">
      React 자체에는 라우터가 내장되어 있지 않습니다. React 앱에서 라우팅은
      URL을 읽고, 그 URL에 맞는 컴포넌트를 보여주는 설계를 별도로 선택하는
      일입니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginTop: "1.5rem",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>WITHOUT ROUTER</div>
        <CodeBlock
          height="330px"
          code={`function App() {
  return (
    <main>
      <Header />
      <ProfileSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}

// 한 화면 안에서 스크롤로만 이동
// URL은 계속 "/" 하나뿐입니다.`}
        />
      </div>

      <div style={cardStyle}>
        <div style={sectionLabelStyle}>WITH ROUTER</div>
        <CodeBlock
          height="330px"
          code={`/              -> <HomePage />
/members       -> <MemberListPage />
/members/3     -> <MemberDetailPage />
/projects      -> <ProjectPage />
/contact       -> <ContactPage />

// URL이 화면 상태가 됩니다.
// 새로고침, 공유 링크, 뒤로가기가 자연스러워집니다.`}
        />
      </div>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "14px",
        marginTop: "20px",
      }}
    >
      {[
        ["공유 가능", "/members/3 링크를 보내면 같은 화면을 볼 수 있음"],
        ["뒤로가기", "브라우저 히스토리와 앱 이동 흐름이 맞아짐"],
        ["화면 분리", "페이지 단위로 컴포넌트와 상태를 작게 나눌 수 있음"],
        ["프로젝트 구조", "기능별 폴더와 페이지 파일을 정리하기 쉬움"],
      ].map(([title, desc], index) => (
        <Motion.div
          key={title}
          style={{ ...cardStyle, padding: "16px" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
        >
          <strong style={{ color: "var(--ll-orange)" }}>{title}</strong>
          <p style={{ margin: "8px 0 0", color: "#666", lineHeight: 1.5 }}>
            {desc}
          </p>
        </Motion.div>
      ))}
    </div>
  </div>
);

export const RouterApproaches = () => (
  <div className="animate-up">
    <h2>
      React에서 쓰는 <span style={{ color: "var(--ll-orange)" }}>라우팅 방법들</span>
    </h2>
    <p className="lead">
      앱 규모, 배포 환경, 데이터 로딩 방식에 따라 라우팅 선택이 달라집니다.
      처음에는 React Router를 표준 선택지로 두고, 상황별 대안을 이해하면 됩니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "12px",
        marginTop: "1.4rem",
      }}
    >
      {[
        {
          name: "상태 기반 전환",
          route: "page state",
          good: "탭, 모달, 온보딩 단계",
          weak: "URL 공유와 뒤로가기가 약함",
          why: "진짜 페이지가 아니라 한 컴포넌트 안의 보기 전환일 때 가장 단순합니다.",
          color: "#64748B",
        },
        {
          name: "Hash Router",
          route: "#/members",
          good: "GitHub Pages 같은 정적 배포",
          weak: "URL에 #이 들어가고 SEO에는 불리함",
          why: "서버 설정 없이도 새로고침 404를 피해야 할 때 유용합니다.",
          color: "#3B82F6",
        },
        {
          name: "Browser Router",
          route: "/members",
          good: "일반적인 SPA",
          weak: "서버가 모든 경로를 index.html로 돌려줘야 함",
          why: "가장 자연스러운 URL을 만들 수 있어 Vite + React 앱의 기본 선택입니다.",
          color: "#10B981",
        },
        {
          name: "Data Router",
          route: "loader/action",
          good: "페이지 진입 전 데이터 로딩",
          weak: "개념이 조금 더 많음",
          why: "목록/상세/폼 제출이 많은 앱에서 로딩과 에러 처리를 route 단위로 묶습니다.",
          color: "#8B5CF6",
        },
        {
          name: "File-based Routing",
          route: "app/page.jsx",
          good: "Next.js, Remix 같은 프레임워크",
          weak: "프레임워크 규칙을 따라야 함",
          why: "SSR, 서버 데이터, 메타데이터, 배포 전략까지 같이 필요할 때 선택합니다.",
          color: "var(--ll-orange)",
        },
      ].map((item, index) => (
        <Motion.div
          key={item.name}
          style={{
            ...cardStyle,
            padding: "16px",
            background: `${item.color}0D`,
            borderColor: `${item.color}33`,
          }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
        >
          <div style={{ ...sectionLabelStyle, color: item.color }}>
            {item.route}
          </div>
          <h3 style={{ color: item.color, fontSize: "1rem", marginBottom: "10px" }}>
            {item.name}
          </h3>
          <p style={{ margin: "0 0 10px", color: "#333", fontWeight: 800, lineHeight: 1.45 }}>
            {item.good}
          </p>
          <p style={{ margin: "0 0 10px", color: "#777", fontSize: "0.78rem", lineHeight: 1.45 }}>
            주의: {item.weak}
          </p>
          <p style={{ margin: 0, color: "#444", fontSize: "0.78rem", lineHeight: 1.5 }}>
            {item.why}
          </p>
        </Motion.div>
      ))}
    </div>
  </div>
);

export const PageStateRoutingExample = () => (
  <div className="animate-up">
    <h2>
      상태 기반 전환: <span style={{ color: "var(--ll-orange)" }}>URL 없는 화면 전환</span>
    </h2>
    <p className="lead">
      탭, 모달, 온보딩 단계처럼 "페이지 이동"이 아니라 같은 화면 안의 보기만
      바꿀 때는 state 하나로 가장 단순하게 처리할 수 있습니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: "24px",
        marginTop: "1.4rem",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>PAGE STATE</div>
        <CodeBlock
          height="460px"
          code={`import { useState } from "react";

function ProfileDashboard() {
  const [view, setView] = useState("intro");

  return (
    <main>
      <nav>
        <button onClick={() => setView("intro")}>소개</button>
        <button onClick={() => setView("skills")}>기술</button>
        <button onClick={() => setView("projects")}>프로젝트</button>
      </nav>

      {view === "intro" && <IntroPanel />}
      {view === "skills" && <SkillPanel />}
      {view === "projects" && <ProjectPanel />}
    </main>
  );
}`}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {[
          ["좋은 사용처", "탭 메뉴, 설정 패널, 모달, 아코디언, 온보딩 1단계/2단계"],
          ["장점", "라이브러리 없이 빠르게 만들 수 있고 컴포넌트 내부 상태로 흐름이 단순합니다."],
          ["주의", "URL이 바뀌지 않으므로 공유 링크, 새로고침 복원, 브라우저 뒤로가기가 약합니다."],
          ["판단 기준", "사용자가 이 화면을 URL로 공유해야 한다면 Router를 쓰는 편이 낫습니다."],
        ].map(([title, desc], index) => (
          <Motion.div
            key={title}
            style={{ ...cardStyle, padding: "16px" }}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.09 }}
          >
            <strong style={{ color: index === 2 ? "#DC2626" : "var(--ll-orange)" }}>
              {title}
            </strong>
            <p style={{ margin: "7px 0 0", color: "#666", lineHeight: 1.5 }}>
              {desc}
            </p>
          </Motion.div>
        ))}
      </div>
    </div>
  </div>
);

export const HashRouterExample = () => (
  <div className="animate-up">
    <h2>
      Hash Router: <span style={{ color: "var(--ll-orange)" }}>서버 설정 없이 정적 배포</span>
    </h2>
    <p className="lead">
      `#/members`처럼 # 뒤쪽을 프론트엔드가 읽습니다. 서버에는 항상 `/`만
      요청되므로 GitHub Pages 같은 정적 호스팅에서 새로고침 404를 피하기 쉽습니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: "24px",
        marginTop: "1.4rem",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>HASH ROUTER</div>
        <CodeBlock
          height="460px"
          code={`import {
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">홈</Link>
        <Link to="/members">아기사자</Link>
        <Link to="/projects">프로젝트</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/members" element={<MemberListPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </HashRouter>
  );
}

// 실제 주소 예시
// https://username.github.io/app/#/members`}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {[
          ["좋은 사용처", "GitHub Pages, 단순 S3 정적 호스팅, 서버 fallback 설정이 어려운 배포"],
          ["장점", "서버가 어떤 경로를 받아도 index.html로 돌려주는 설정을 하지 않아도 됩니다."],
          ["주의", "URL에 #이 들어가고, 서버와 검색 엔진은 # 뒤의 경로를 일반 경로처럼 다루지 않습니다."],
          ["판단 기준", "정적 배포가 우선이고 URL 모양보다 배포 안정성이 중요하면 선택할 수 있습니다."],
        ].map(([title, desc], index) => (
          <Motion.div
            key={title}
            style={{ ...cardStyle, padding: "16px" }}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.09 }}
          >
            <strong style={{ color: index === 2 ? "#DC2626" : "#3B82F6" }}>
              {title}
            </strong>
            <p style={{ margin: "7px 0 0", color: "#666", lineHeight: 1.5 }}>
              {desc}
            </p>
          </Motion.div>
        ))}
      </div>
    </div>
  </div>
);

export const BrowserRouterExample = () => (
  <div className="animate-up">
    <h2>
      Browser Router: <span style={{ color: "var(--ll-orange)" }}>가장 자연스러운 SPA URL</span>
    </h2>
    <p className="lead">
      `/members`처럼 깔끔한 경로를 사용합니다. Vite + React로 만드는 일반 SPA의
      기본 선택지이지만, 배포 서버의 fallback 설정이 필요합니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: "24px",
        marginTop: "1.4rem",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>BROWSER ROUTER</div>
        <CodeBlock
          height="460px"
          code={`import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <NavLink to="/">홈</NavLink>
        <NavLink to="/members">아기사자</NavLink>
        <NavLink to="/members/1">김사자</NavLink>
      </Layout>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/members" element={<MemberListPage />} />
        <Route path="/members/:id" element={<MemberDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// 배포 서버는 /members 새로고침도
// index.html을 내려줘야 합니다.`}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {[
          ["좋은 사용처", "Vite SPA, 관리자 페이지, 포트폴리오, 대시보드, 대부분의 일반 React 앱"],
          ["장점", "URL이 깔끔하고 공유/북마크/뒤로가기가 자연스럽습니다."],
          ["주의", "서버가 /members 요청을 실제 파일로 찾으면 404가 납니다. 모든 경로를 index.html로 보내야 합니다."],
          ["판단 기준", "배포 환경에서 SPA fallback 설정이 가능하면 가장 먼저 고려합니다."],
        ].map(([title, desc], index) => (
          <Motion.div
            key={title}
            style={{ ...cardStyle, padding: "16px" }}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.09 }}
          >
            <strong style={{ color: index === 2 ? "#DC2626" : "#10B981" }}>
              {title}
            </strong>
            <p style={{ margin: "7px 0 0", color: "#666", lineHeight: 1.5 }}>
              {desc}
            </p>
          </Motion.div>
        ))}
      </div>
    </div>
  </div>
);

export const DataRouterExample = () => (
  <div className="animate-up">
    <h2>
      Data Router: <span style={{ color: "var(--ll-orange)" }}>라우트 단위 데이터 로딩</span>
    </h2>
    <p className="lead">
      React Router의 Data Router는 페이지 컴포넌트가 렌더링되기 전에 `loader`로
      데이터를 준비하고, 폼 제출은 `action`으로 처리할 수 있습니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: "24px",
        marginTop: "1.4rem",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>DATA ROUTER</div>
        <CodeBlock
          height="470px"
          code={`import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";

async function membersLoader() {
  const res = await fetch("/api/members");
  return res.json();
}

function MemberListPage() {
  const members = useLoaderData();

  return members.map((member) => (
    <MemberCard key={member.id} member={member} />
  ));
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "members",
        element: <MemberListPage />,
        loader: membersLoader,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}`}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {[
          ["좋은 사용처", "목록/상세 페이지, 폼 제출, 로딩/에러 처리가 많은 서비스형 앱"],
          ["장점", "데이터 로딩, 에러 화면, 제출 흐름을 route 설정 근처에 모을 수 있습니다."],
          ["주의", "BrowserRouter보다 개념이 많고 loader/action 사고방식을 익혀야 합니다."],
          ["판단 기준", "페이지 진입 전 데이터가 필요하거나 route별 에러 처리를 체계화하고 싶을 때 적합합니다."],
        ].map(([title, desc], index) => (
          <Motion.div
            key={title}
            style={{ ...cardStyle, padding: "16px" }}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.09 }}
          >
            <strong style={{ color: index === 2 ? "#DC2626" : "#8B5CF6" }}>
              {title}
            </strong>
            <p style={{ margin: "7px 0 0", color: "#666", lineHeight: 1.5 }}>
              {desc}
            </p>
          </Motion.div>
        ))}
      </div>
    </div>
  </div>
);

export const FileBasedRoutingExample = () => (
  <div className="animate-up">
    <h2>
      File-based Routing: <span style={{ color: "var(--ll-orange)" }}>파일 구조가 곧 URL</span>
    </h2>
    <p className="lead">
      Next.js, Remix 같은 프레임워크는 파일/폴더 구조로 라우트를 만듭니다.
      SSR, 서버 데이터, 메타데이터, 배포 전략까지 프레임워크가 함께 제공합니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginTop: "1.4rem",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>NEXT.JS APP ROUTER</div>
        <CodeBlock
          height="470px"
          code={`app/
  layout.jsx
  page.jsx                 // /
  members/
    page.jsx               // /members
    [id]/
      page.jsx             // /members/:id
  projects/
    page.jsx               // /projects

// app/members/[id]/page.jsx
export default async function MemberPage({ params }) {
  const member = await getMember(params.id);

  return (
    <section>
      <h1>{member.name}</h1>
      <p>{member.bio}</p>
    </section>
  );
}`}
        />
      </div>

      <div style={cardStyle}>
        <div style={sectionLabelStyle}>판단 기준</div>
        {[
          ["좋은 사용처", "SEO가 중요한 서비스, 서버 렌더링, 로그인/권한, 메타데이터가 필요한 프로젝트"],
          ["장점", "파일을 만들면 URL이 생기고, 서버 데이터 로딩과 배포 규칙이 프레임워크 안에 정리됩니다."],
          ["주의", "React만 쓰는 것보다 프레임워크 규칙이 많고, 클라이언트/서버 경계를 이해해야 합니다."],
          ["이번 수업 기준", "Vite React에서는 React Router를 먼저 배우고, 프로젝트 규모가 커지면 Next.js 같은 선택지를 비교합니다."],
        ].map(([title, desc], index) => (
          <div
            key={title}
            style={{
              padding: "12px 0",
              borderBottom: index < 3 ? "1px solid #f0f0f0" : "none",
            }}
          >
            <strong style={{ color: index === 2 ? "#DC2626" : "var(--ll-orange)" }}>
              {title}
            </strong>
            <p style={{ margin: "7px 0 0", color: "#666", lineHeight: 1.5 }}>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ReactRouterPractice = () => (
  <div className="animate-up">
    <h2>
      React Router: <span style={{ color: "var(--ll-orange)" }}>이번 프로젝트의 추천 방식</span>
    </h2>
    <p className="lead">
      Vite로 만든 일반 React SPA에서는 React Router로 URL과 컴포넌트를 명시적으로
      연결하는 방식이 가장 배우기 좋고, 프로젝트 구조도 선명해집니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: "24px",
        marginTop: "1.4rem",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>BASIC ROUTES</div>
        <CodeBlock
          height="440px"
          code={`// npm install react-router-dom
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">홈</Link>
        <Link to="/members">아기사자</Link>
        <Link to="/projects">프로젝트</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/members" element={<MemberListPage />} />
        <Route path="/members/:id" element={<MemberDetailPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function MemberDetailPage() {
  const { id } = useParams();
  return <h2>{id}번 아기사자 상세</h2>;
}`}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {[
          {
            title: "BrowserRouter",
            desc: "브라우저 History API를 사용해 /members 같은 깔끔한 URL을 만듭니다. Netlify, Vercel, 자체 서버처럼 fallback 설정이 가능한 배포에 적합합니다.",
            color: "#10B981",
          },
          {
            title: "Routes / Route",
            desc: "URL 패턴과 렌더링할 컴포넌트를 선언합니다. path='*'는 매칭 실패 화면, :id는 동적 상세 페이지에 씁니다.",
            color: "#3B82F6",
          },
          {
            title: "Link / NavLink",
            desc: "a 태그처럼 보이지만 새로고침 없이 이동합니다. 현재 메뉴 강조가 필요하면 NavLink가 편합니다.",
            color: "#8B5CF6",
          },
          {
            title: "중첩 라우트",
            desc: "대시보드 안의 탭, 마이페이지 하위 메뉴처럼 공통 레이아웃을 유지하고 내부 화면만 바꿀 때 사용합니다.",
            color: "var(--ll-orange)",
          },
        ].map((item, index) => (
          <Motion.div
            key={item.title}
            style={{
              ...cardStyle,
              padding: "15px 16px",
              borderColor: `${item.color}33`,
            }}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.09 }}
          >
            <strong style={{ color: item.color }}>{item.title}</strong>
            <p style={{ margin: "7px 0 0", color: "#666", lineHeight: 1.5, fontSize: "0.84rem" }}>
              {item.desc}
            </p>
          </Motion.div>
        ))}
      </div>
    </div>
  </div>
);

const previewMembers = [
  { id: 1, name: "김사자", part: "Frontend", skill: "React" },
  { id: 2, name: "이멋사", part: "Backend", skill: "Node.js" },
  { id: 3, name: "박디자인", part: "Design", skill: "Figma" },
];

export const Week6MissionPreview = () => {
  const [filter, setFilter] = useState("ALL");
  const visibleMembers = useMemo(
    () =>
      filter === "ALL"
        ? previewMembers
        : previewMembers.filter((member) => member.part === filter),
    [filter],
  );

  return (
    <div className="animate-up">
      <h2>
        미션 완성 예시: <span style={{ color: "var(--ll-orange)" }}>동적 자기소개 명단</span>
      </h2>
      <p className="lead">
        지난주 정적 자기소개 페이지에 상태, 이벤트, Effect를 붙이면 사용 가능한
        작은 앱이 됩니다.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "240px 1fr",
          gap: "24px",
          marginTop: "1.4rem",
          alignItems: "start",
        }}
      >
        <div style={cardStyle}>
          <div style={sectionLabelStyle}>기능 구성</div>
          {[
            "직접 팀원 추가",
            "카드 삭제",
            "파트별 필터링",
            "외부 API에서 랜덤 팀원 불러오기",
            "useMembers 커스텀 훅 분리",
          ].map((item, index) => (
            <div
              key={item}
              style={{
                display: "flex",
                gap: "9px",
                padding: "10px 0",
                borderBottom: index < 4 ? "1px solid #f0f0f0" : "none",
                fontWeight: 800,
                color: "#333",
              }}
            >
              <span style={{ color: "var(--ll-orange)" }}>{index + 1}.</span>
              {item}
            </div>
          ))}
        </div>

        <div
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid #e5e7eb",
            boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              padding: "16px 20px",
              background: "linear-gradient(135deg, #FF6000, #FF8C42)",
              color: "white",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "1.1rem" }}>
              🦁 아기사자 자기소개 대시보드
            </h3>
            <p style={{ margin: "4px 0 0", opacity: 0.85, fontSize: "0.82rem" }}>
              상태로 관리되는 팀원 목록
            </p>
          </div>
          <div style={{ padding: "18px", background: "#f8fafc" }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
              {["ALL", "Frontend", "Backend", "Design"].map((part) => (
                <button
                  key={part}
                  type="button"
                  onClick={() => setFilter(part)}
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: "999px",
                    padding: "7px 12px",
                    background: filter === part ? "#111" : "white",
                    color: filter === part ? "white" : "#111",
                    fontWeight: 900,
                    cursor: "pointer",
                  }}
                >
                  {part}
                </button>
              ))}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
              }}
            >
              {visibleMembers.map((member) => (
                <Motion.div
                  key={member.id}
                  layout
                  style={{
                    background: "white",
                    borderRadius: "12px",
                    padding: "14px",
                    border: "1px solid #eee",
                  }}
                >
                  <div style={{ fontSize: "1.8rem" }}>🦁</div>
                  <strong>{member.name}</strong>
                  <div style={{ marginTop: "8px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    <Pill color="#3B82F6">{member.part}</Pill>
                    <Pill color="#10B981">{member.skill}</Pill>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Week6Mission = () => (
  <div className="animate-up">
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: "12px",
      }}
    >
      <h2 style={{ margin: 0 }}>
        6주차 <span style={{ color: "var(--ll-orange)" }}>PBL 미션</span>
      </h2>
      <Pill>나만의 동적 자기소개 페이지</Pill>
    </div>
    <p className="lead">
      5주차 결과물을 그대로 출발점으로 삼고, 아래 기능을 단계별로 붙입니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
        marginTop: "1.4rem",
      }}
    >
      {[
        {
          level: "기본",
          color: "#16A34A",
          items: [
            "useState로 members 배열 관리",
            "폼으로 이름/파트/소개 추가",
            "삭제 버튼으로 카드 제거",
            "전체/Frontend/Backend/Design 필터",
          ],
        },
        {
          level: "심화",
          color: "#D97706",
          items: [
            "검색어로 이름 필터링",
            "빈 입력 방지와 입력 초기화",
            "로딩 상태 UI 만들기",
            "React Router로 /members 페이지 분리",
          ],
        },
        {
          level: "도전",
          color: "#DC2626",
          items: [
            "randomuser API 연동",
            "요청 실패 처리와 재시도 버튼",
            "useMembers 커스텀 훅 분리",
            "/members/:id 상세 페이지 구현",
          ],
        },
      ].map((tier, tierIndex) => (
        <Motion.div
          key={tier.level}
          style={{
            ...cardStyle,
            background: `${tier.color}0A`,
            borderColor: `${tier.color}33`,
          }}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: tierIndex * 0.12 }}
        >
          <h3 style={{ color: tier.color, marginBottom: "12px" }}>
            {tier.level}
          </h3>
          {tier.items.map((item, index) => (
            <div
              key={item}
              style={{
                display: "flex",
                gap: "8px",
                padding: "9px 0",
                borderBottom:
                  index < tier.items.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                fontWeight: 800,
                lineHeight: 1.45,
              }}
            >
              <span style={{ color: tier.color }}>□</span>
              {item}
            </div>
          ))}
        </Motion.div>
      ))}
    </div>

    <div
      style={{
        marginTop: "18px",
        padding: "16px 20px",
        borderRadius: "14px",
        background: "#0f172a",
        color: "white",
        fontWeight: 900,
        lineHeight: 1.6,
      }}
    >
      제출 전 체크: 새로고침 없이 추가/삭제/필터가 동작하고, API 요청 중 로딩
      상태가 보이며, 콘솔 에러 없이 `npm run build`가 통과해야 합니다.
    </div>
  </div>
);

export const Week6WrapUp = () => (
  <div className="animate-up" style={{ textAlign: "center" }}>
    <h2 style={{ justifyContent: "center" }}>6주차 정리</h2>
    <p className="lead">
      오늘의 핵심은 "이벤트가 상태를 바꾸고, 상태가 화면을 다시 만든다"입니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "14px",
        marginTop: "2rem",
      }}
    >
      {[
        ["useState", "컴포넌트가 기억하는 값"],
        ["event", "사용자 행동을 상태 변경으로 연결"],
        ["filter/map", "상태에서 보여줄 화면 계산"],
        ["useEffect", "렌더링 이후 외부 작업"],
        ["custom hook", "반복 로직 재사용"],
        ["router", "URL에 맞는 페이지 렌더링"],
      ].map(([title, desc], index) => (
        <Motion.div
          key={title}
          className="pbl-card"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <h3 style={{ color: "var(--ll-orange)", marginBottom: "10px" }}>
            {title}
          </h3>
          <p style={{ margin: 0, color: "#666", lineHeight: 1.55 }}>{desc}</p>
        </Motion.div>
      ))}
    </div>

    <Motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      style={{
        marginTop: "2rem",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "14px 26px",
        borderRadius: "999px",
        background: "linear-gradient(135deg, rgba(255,96,0,0.08), rgba(59,130,246,0.08))",
        border: "1px solid rgba(255,96,0,0.18)",
        color: "var(--ll-orange)",
        fontWeight: 900,
      }}
    >
      다음 주: 프로젝트 진행
    </Motion.div>
  </div>
);


