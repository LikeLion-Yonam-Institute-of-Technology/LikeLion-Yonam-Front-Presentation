import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const cardStyle = {
  background: "white",
  borderRadius: "20px",
  padding: "24px",
  border: "1px solid #f0f0f0",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
};

const codeStyle = {
  background: "#f8fafc",
  color: "#111827",
  borderRadius: "12px",
  padding: "16px",
  fontFamily: "var(--font-mono)",
  fontSize: "0.82rem",
  lineHeight: 1.6,
  whiteSpace: "pre-wrap",
  margin: 0,
};

const sectionLabelStyle = {
  fontSize: "0.72rem",
  fontWeight: 900,
  letterSpacing: "0.1em",
  color: "var(--ll-orange)",
  marginBottom: "10px",
};

const codePanelStyle = {
  margin: 0,
  borderRadius: "12px",
  background: "#f8fafc",
  border: "1px solid #e5e7eb",
  overflow: "hidden",
};

const CodeBlock = ({ code, language = "javascript", height = "auto" }) => (
  <div style={{ ...codePanelStyle, maxHeight: height, overflow: "auto" }}>
    <SyntaxHighlighter
      language={language}
      style={oneLight}
      customStyle={{
        margin: 0,
        padding: "16px",
        background: "#f8fafc",
        color: "#111827",
        fontFamily: "var(--font-mono)",
        fontSize: "0.86rem",
        lineHeight: 1.6,
      }}
      codeTagProps={{
        style: {
          color: "#111827",
          fontFamily: "var(--font-mono)",
        },
      }}
    >
      {code}
    </SyntaxHighlighter>
  </div>
);

const ConsoleOutput = ({ logs, hint = "실행 버튼을 눌러 출력 순서를 확인하세요." }) => (
  <div
    style={{
      marginTop: "14px",
      borderRadius: "14px",
      overflow: "hidden",
      border: "1px solid rgba(15,23,42,0.12)",
      background: "#0f172a",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 14px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        color: "#94a3b8",
        fontSize: "0.76rem",
        fontWeight: 900,
        letterSpacing: "0.08em",
      }}
    >
      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f56" }} />
      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e" }} />
      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27c93f" }} />
      CONSOLE OUTPUT
    </div>
    <div
      style={{
        minHeight: "120px",
        padding: "16px",
        fontFamily: "var(--font-mono)",
        fontSize: "0.95rem",
        lineHeight: 1.7,
      }}
    >
      {logs.length === 0 ? (
        <span style={{ color: "#64748b" }}>{hint}</span>
      ) : (
        <AnimatePresence>
          {logs.map((log, index) => (
            <motion.div
              key={`${log}-${index}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ color: "#86efac", fontWeight: 800 }}
            >
              <span style={{ color: "#64748b", marginRight: "10px" }}>
                {String(index + 1).padStart(2, "0")}
              </span>
              {log}
            </motion.div>
          ))}
        </AnimatePresence>
      )}
    </div>
  </div>
);

const runButtonStyle = {
  padding: "10px 14px",
  borderRadius: "10px",
  border: "none",
  background: "var(--ll-orange)",
  color: "white",
  fontWeight: 900,
  cursor: "pointer",
};

export const Week4Goals = () => (
  <div className="animate-up">
    <h2>
      4주차 학습 목표:{" "}
      <span style={{ color: "var(--ll-orange)" }}>
        외부 데이터로 UI 갱신하기
      </span>
    </h2>
    <p className="lead">
      지난주에는 배열 상태를 직접 바꿨고, 이번 주에는 서버에서 받은 데이터를
      상태로 넣어 화면을 다시 그립니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
        marginTop: "2rem",
      }}
    >
      {[
        {
          title: "비동기 흐름 이해",
          desc: "기다림이 필요한 작업을 Promise, async/await로 읽기 쉽게 다룹니다.",
          tag: "Promise",
          color: "#8B5CF6",
        },
        {
          title: "fetch로 데이터 요청",
          desc: "API를 호출하고 JSON 응답을 JavaScript 객체/배열로 변환합니다.",
          tag: "fetch",
          color: "#3B82F6",
        },
        {
          title: "배열 메서드로 화면 갱신",
          desc: "map, filter, sort로 원본 데이터를 UI에 맞는 목록으로 바꿉니다.",
          tag: "map/filter",
          color: "#10B981",
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          className="pbl-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 * index }}
        >
          <div style={{ ...sectionLabelStyle, color: item.color }}>
            GOAL 0{index + 1}
          </div>
          <h3 style={{ fontSize: "1.45rem", marginBottom: "10px" }}>
            {item.title}
          </h3>
          <p style={{ color: "var(--ll-dark-grey)", lineHeight: 1.7 }}>
            {item.desc}
          </p>
          <div
            style={{
              display: "inline-flex",
              marginTop: "18px",
              padding: "8px 14px",
              borderRadius: "10px",
              background: `${item.color}12`,
              color: item.color,
              fontWeight: 900,
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
            }}
          >
            {item.tag}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export const AsyncConcept = () => (
  <div className="animate-up">
    <h2>
      동기와 비동기:{" "}
      <span style={{ color: "var(--ll-orange)" }}>실행 순서와 완료 순서</span>
    </h2>
    <p className="lead">
      JavaScript는 한 번에 한 줄씩 실행하지만, 시간이 오래 걸리는 작업은
      브라우저에게 맡겨두고 나중에 결과를 이어받을 수 있습니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "28px",
        marginTop: "2rem",
      }}
    >
      <motion.div
        style={{
          ...cardStyle,
          background: "#FEF2F2",
          borderColor: "rgba(239,68,68,0.16)",
        }}
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div style={{ ...sectionLabelStyle, color: "#DC2626" }}>SYNC</div>
        <h3 style={{ color: "#991B1B", marginBottom: "14px" }}>
          동기: 앞 코드가 끝나야 다음 코드 실행
        </h3>
        <CodeBlock
          code={`console.log("1. 시작");

for (let i = 0; i < 3_000_000_000; i++) {
  // 오래 걸리는 계산이라고 가정
}

console.log("2. 오래 걸리는 작업 끝");
console.log("3. 다음 코드 실행");`}
        />
        <div
          style={{
            marginTop: "14px",
            padding: "12px",
            borderRadius: "10px",
            background: "rgba(220,38,38,0.08)",
            color: "#991B1B",
            fontWeight: 800,
            lineHeight: 1.55,
          }}
        >
          결과 순서: 1 → 2 → 3<br />
          중간 작업이 오래 걸리면 그동안 다음 코드와 화면 반응도 기다립니다.
        </div>
      </motion.div>

      <motion.div
        style={{
          ...cardStyle,
          background: "#EFF6FF",
          borderColor: "rgba(59,130,246,0.18)",
        }}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15 }}
      >
        <div style={{ ...sectionLabelStyle, color: "#2563EB" }}>ASYNC</div>
        <h3 style={{ color: "#1D4ED8", marginBottom: "14px" }}>
          비동기: 오래 걸리는 작업은 맡겨두고 다음 코드 실행
        </h3>
        <CodeBlock
          code={`console.log("1. 요청 시작");

setTimeout(() => {
  console.log("3. 1초 뒤 완료");
}, 1000);

console.log("2. 다음 코드 먼저 실행");`}
        />
        <div
          style={{
            marginTop: "14px",
            padding: "12px",
            borderRadius: "10px",
            background: "rgba(37,99,235,0.08)",
            color: "#1D4ED8",
            fontWeight: 800,
            lineHeight: 1.55,
          }}
        >
          결과 순서: 1 → 2 → 3<br />
          요청, 타이머, 파일 읽기처럼 기다림이 필요한 작업에 사용합니다.
        </div>
      </motion.div>
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
        ["Call Stack", "지금 당장 실행 중인 코드가 쌓이는 곳"],
        ["Browser API", "타이머, fetch 같은 기다리는 일을 맡아주는 영역"],
        ["Callback Queue", "완료된 비동기 작업의 다음 코드가 대기하는 곳"],
      ].map(([title, desc]) => (
        <div
          key={title}
          style={{
            padding: "16px",
            borderRadius: "14px",
            background: "white",
            border: "1px solid #f0f0f0",
          }}
        >
          <strong style={{ color: "var(--ll-orange)" }}>{title}</strong>
          <p style={{ margin: "8px 0 0", color: "#666", lineHeight: 1.5 }}>
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export const CallStackSyncExample = () => {
  const [logs, setLogs] = useState([]);

  const runSyncExample = () => {
    const nextLogs = [];

    function bar() {
      nextLogs.push("bar");
    }

    function baz() {
      nextLogs.push("baz");
    }

    function foo() {
      nextLogs.push("foo");
      bar();
      baz();
    }

    foo();
    setLogs(nextLogs);
  };

  return (
    <div className="animate-up">
      <h2>
        호출 스택: <span style={{ color: "var(--ll-orange)" }}>동기 코드는 쌓이고 비워진다</span>
      </h2>
      <p className="lead">
        함수가 호출되면 호출 스택에 들어가고, 함수 내부 실행이 끝나면 스택에서
        제거됩니다. 실행 버튼을 눌러 실제 출력 순서를 확인해 봅니다.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          marginTop: "1.6rem",
        }}
      >
        <div style={cardStyle}>
          <div style={sectionLabelStyle}>동기 함수 호출 예제</div>
          <CodeBlock
            height="430px"
            code={`function bar() {
  console.log("bar");
}

function baz() {
  console.log("baz");
}

function foo() {
  console.log("foo");
  bar();
  baz();
}

foo();`}
          />
        </div>

        <div style={cardStyle}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
            <div style={sectionLabelStyle}>실행해보기</div>
            <button type="button" onClick={runSyncExample} style={runButtonStyle}>
              코드 실행
            </button>
          </div>
          <ConsoleOutput logs={logs} />

          <div
            style={{
              marginTop: "16px",
              padding: "14px",
              borderRadius: "12px",
              background: "rgba(255,96,0,0.08)",
              color: "var(--ll-orange)",
              fontWeight: 900,
              lineHeight: 1.55,
            }}
          >
            동기 코드는 호출한 순서대로 끝까지 실행됩니다. foo 안에서 bar가 끝난 뒤
            baz가 실행되므로 출력도 foo → bar → baz입니다.
          </div>

          <div style={{ marginTop: "14px", color: "#666", lineHeight: 1.55 }}>
            <strong style={{ color: "#111" }}>호출 스택 흐름:</strong> foo가 들어오고,
            그 위에 bar가 잠깐 쌓였다가 제거됩니다. 이후 baz가 쌓였다가 제거되고,
            마지막으로 foo도 제거됩니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export const EventLoopSetTimeoutExample = () => {
  const [logs, setLogs] = useState([]);

  const runAsyncExample = () => {
    setLogs([]);
    const append = (value) => setLogs((prev) => [...prev, value]);

    function bar() {
      append("bar");
    }

    function baz() {
      append("baz");
    }

    function foo() {
      append("foo");
      setTimeout(bar, 0);
      baz();
    }

    foo();
  };

  return (
    <div className="animate-up">
      <h2>
        이벤트 루프:{" "}
        <span style={{ color: "var(--ll-orange)" }}>스택이 비어야 콜백이 실행된다</span>
      </h2>
      <p className="lead">
        `setTimeout(bar, 0)`은 “지금 즉시 bar를 실행”이 아닙니다. 아래 코드를
        실행하면 0초 타이머여도 bar가 baz보다 늦게 출력됩니다.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          marginTop: "1.6rem",
        }}
      >
        <div style={cardStyle}>
          <div style={sectionLabelStyle}>setTimeout이 들어간 예제</div>
          <CodeBlock
            height="390px"
            code={`function bar() {
  console.log("bar");
}

function baz() {
  console.log("baz");
}

function foo() {
  console.log("foo");
  setTimeout(bar, 0);
  baz();
}

foo();`}
          />
        </div>

        <div style={cardStyle}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
            <div style={sectionLabelStyle}>실행해보기</div>
            <button type="button" onClick={runAsyncExample} style={runButtonStyle}>
              코드 실행
            </button>
          </div>
          <ConsoleOutput logs={logs} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
              marginTop: "16px",
            }}
          >
            {[
              ["Call Stack", "foo, baz처럼 지금 실행 중인 함수"],
              ["Web API", "타이머를 대신 처리"],
              ["Task Queue", "bar 콜백이 대기하는 곳"],
            ].map(([title, desc], index) => (
              <div
                key={title}
                style={{
                  padding: "12px",
                  borderRadius: "12px",
                  background: index === 1 ? "rgba(59,130,246,0.08)" : "#f8f9fa",
                  border: "1px solid #eee",
                }}
              >
                <strong style={{ color: index === 1 ? "#2563EB" : "#111" }}>
                  {title}
                </strong>
                <p style={{ margin: "6px 0 0", color: "#666", fontSize: "0.82rem", lineHeight: 1.45 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "14px",
              padding: "14px",
              borderRadius: "12px",
              background: "#0f172a",
              color: "white",
              fontWeight: 900,
              lineHeight: 1.55,
            }}
          >
            핵심: 0초는 “즉시 실행”이 아니라 “최소 대기 시간”입니다. bar 콜백은
            호출 스택이 비워진 뒤에야 실행됩니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export const PromiseAsyncAwait = () => (
  <div className="animate-up">
    <h2>
      Promise 상태와{" "}
      <span style={{ color: "var(--ll-orange)" }}>async/await</span>
    </h2>
    <p className="lead">
      Promise는 비동기 작업의 현재 상태를 나타내는 객체입니다. 처음에는 대기
      중이고, 작업 결과에 따라 성공 또는 실패 상태로 한 번만 바뀝니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "18px",
        marginTop: "1.6rem",
      }}
    >
      {[
        {
          state: "pending",
          title: "대기",
          desc: "요청을 보냈지만 아직 결과가 오지 않은 상태",
          color: "#F59E0B",
        },
        {
          state: "fulfilled",
          title: "성공",
          desc: "resolve가 호출되어 정상 결과를 받은 상태",
          color: "#10B981",
        },
        {
          state: "rejected",
          title: "실패",
          desc: "reject가 호출되거나 에러가 발생한 상태",
          color: "#EF4444",
        },
      ].map((item, index) => (
        <motion.div
          key={item.state}
          style={cardStyle}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div style={{ ...sectionLabelStyle, color: item.color }}>
            {item.state.toUpperCase()}
          </div>
          <h3 style={{ marginBottom: "8px" }}>{item.title}</h3>
          <p style={{ margin: 0, color: "#666", lineHeight: 1.55 }}>
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginTop: "22px",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>PROMISE 예시</div>
        <CodeBlock
          code={`const promise = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) resolve("데이터 도착");
    else reject(new Error("요청 실패"));
  }, 1000);
});

promise
  .then((data) => console.log(data))   // fulfilled
  .catch((err) => console.error(err)); // rejected`}
        />
      </div>

      <div style={cardStyle}>
        <div style={sectionLabelStyle}>ASYNC / AWAIT로 읽기 쉽게</div>
        <CodeBlock
          code={`async function loadData() {
  try {
    const data = await promise;
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

loadData();`}
        />
      </div>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginTop: "22px",
      }}
    >
      <div style={{ ...cardStyle, padding: "18px" }}>
        <div style={sectionLabelStyle}>fetch도 Promise를 반환</div>
        <CodeBlock
          code={`fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);
  })
  .catch((err) => {
    console.error(err);
  });`}
        />
      </div>
      <div style={{ ...cardStyle, padding: "18px" }}>
        <div style={sectionLabelStyle}>같은 흐름을 await로 표현</div>
        <CodeBlock
          code={`async function loadUsers() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
  } catch (err) {
    console.error(err);
  }
}`}
        />
      </div>
    </div>
  </div>
);

export const FetchJsonFlow = () => (
  <div className="animate-up">
    <h2>
      fetch 데이터 흐름:{" "}
      <span style={{ color: "var(--ll-orange)" }}>응답을 데이터로 바꾸기</span>
    </h2>
    <p className="lead">
      fetch의 결과는 바로 배열이 아닙니다. Response 객체를 받고, JSON으로 읽고,
      그 안의 results 배열을 우리 앱 데이터로 변환합니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "14px",
        alignItems: "stretch",
        marginTop: "1.7rem",
      }}
    >
      {[
        ["1", "fetch(url)", "Promise<Response>", "서버에 요청하고 응답 객체를 기다림"],
        ["2", "res.ok 확인", "boolean", "HTTP 상태가 성공 범위인지 검사"],
        ["3", "res.json()", "Promise<object>", "응답 body를 JS 객체로 파싱"],
        ["4", "data.results", "array", "실제로 사용할 사용자 배열 꺼내기"],
      ].map(([step, title, value, desc], index) => (
        <motion.div
          key={step}
          style={{
            ...cardStyle,
            padding: "20px",
            textAlign: "center",
            borderColor: index === 3 ? "rgba(255,96,0,0.25)" : "#f0f0f0",
          }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              margin: "0 auto 14px",
              borderRadius: "50%",
              background: index === 3 ? "var(--ll-orange)" : "#111",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
            }}
          >
            {step}
          </div>
          <h3 style={{ fontSize: "1rem", marginBottom: "8px" }}>{title}</h3>
          <code
            style={{
              display: "inline-block",
              marginBottom: "8px",
              padding: "4px 8px",
              borderRadius: "8px",
              background: "#f3f4f6",
              color: "#111",
              fontSize: "0.76rem",
              fontWeight: 800,
            }}
          >
            {value}
          </code>
          <p style={{ color: "#666", fontSize: "0.84rem", lineHeight: 1.5 }}>
            {desc}
          </p>
        </motion.div>
      ))}
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: "24px",
        marginTop: "22px",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>fetchRandomUsers 함수</div>
        <CodeBlock
          height="310px"
          code={`async function fetchRandomUsers(count) {
  const url = \`https://randomuser.me/api/?results=\${count}\`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(\`HTTP \${res.status}\`);
  }

  const data = await res.json();
  return data.results || [];
}`}
        />
      </div>

      <div style={cardStyle}>
        <div style={sectionLabelStyle}>데이터 모양 변화</div>
        {[
          ["Response", "status, ok, headers, body를 가진 응답 객체"],
          ["JSON object", "{ results: [...], info: {...} } 형태의 JS 객체"],
          ["User array", "data.results에 들어있는 사용자 배열"],
          ["Lion array", "map으로 만든 우리 대시보드용 배열"],
        ].map(([title, desc], index) => (
          <div
            key={title}
            style={{
              display: "grid",
              gridTemplateColumns: "92px 1fr",
              gap: "12px",
              alignItems: "center",
              padding: "11px 0",
              borderBottom: index < 3 ? "1px solid #f0f0f0" : "none",
            }}
          >
            <strong style={{ color: index === 3 ? "var(--ll-orange)" : "#111" }}>
              {title}
            </strong>
            <span style={{ color: "#666", lineHeight: 1.45 }}>{desc}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ArrayMethodsDataTransform = () => (
  <div className="animate-up">
    <h2>
      배열 메서드:{" "}
      <span style={{ color: "var(--ll-orange)" }}>
        데이터를 UI에 맞게 바꾸기
      </span>
    </h2>
    <p className="lead">
      서버 데이터는 그대로 쓰기 어렵습니다. map, filter, sort로 화면에 필요한
      형태와 순서를 만듭니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginTop: "1.6rem",
      }}
    >
      {[
        {
          name: "map",
          desc: "각 항목을 새로운 형태로 변환",
          code: `const lions = users.map((user) => ({
  name: user.name.first,
  email: user.email,
}));`,
          result: "배열 길이는 유지되고, 각 항목의 모양만 바뀝니다.",
          color: "#3B82F6",
        },
        {
          name: "filter",
          desc: "조건에 맞는 항목만 남김",
          code: `const frontendLions = lions.filter(
  (lion) => lion.part === "Frontend",
);`,
          result: "조건이 true인 항목만 남아서 배열 길이가 줄 수 있습니다.",
          color: "#10B981",
        },
        {
          name: "sort",
          desc: "보여줄 순서를 정렬",
          code: `const latestFirst = lions
  .slice()
  .sort((a, b) => b.id - a.id);`,
          result: "원본을 지키려면 slice로 복사한 뒤 정렬합니다.",
          color: "#8B5CF6",
        },
      ].map((item, index) => (
        <motion.div
          key={item.name}
          style={cardStyle}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.12 }}
        >
          <div style={{ ...sectionLabelStyle, color: item.color }}>
            {item.name.toUpperCase()}
          </div>
          <h3 style={{ marginBottom: "12px" }}>{item.desc}</h3>
          <CodeBlock code={item.code} height="150px" />
          <p
            style={{
              margin: "12px 0 0",
              color: "#666",
              fontSize: "0.86rem",
              lineHeight: 1.5,
            }}
          >
            {item.result}
          </p>
        </motion.div>
      ))}
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginTop: "22px",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>필터, 검색, 정렬 조합</div>
        <CodeBlock
          height="285px"
          code={`function getVisibleLions() {
  let list = lions.slice();

  if (viewState.part !== "ALL") {
    list = list.filter((lion) => lion.part === viewState.part);
  }

  if (viewState.query.trim()) {
    list = list.filter((lion) =>
      lion.name.toLowerCase().includes(viewState.query.toLowerCase()),
    );
  }

  return list.sort((a, b) => b.id - a.id);
}`}
        />
      </div>

      <div style={cardStyle}>
        <div style={sectionLabelStyle}>이 함수가 필요한 이유</div>
        {[
          ["lions", "원본 상태 배열입니다. 직접 화면 조건을 섞지 않습니다."],
          ["viewState", "파트, 정렬, 검색어 같은 보기 옵션입니다."],
          ["getVisibleLions", "원본과 보기 옵션을 합쳐 지금 보여줄 배열을 계산합니다."],
          ["render", "계산된 배열만 받아 DOM을 다시 그립니다."],
        ].map(([title, desc], index) => (
          <div
            key={title}
            style={{
              padding: "12px 0",
              borderBottom: index < 3 ? "1px solid #f0f0f0" : "none",
            }}
          >
            <strong style={{ color: index === 2 ? "var(--ll-orange)" : "#111" }}>
              {title}
            </strong>
            <p style={{ margin: "5px 0 0", color: "#666", lineHeight: 1.45 }}>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const DashboardDataFlow = () => (
  <div className="animate-up">
    <h2>
      이번 과제의 핵심 구조:{" "}
      <span style={{ color: "var(--ll-orange)" }}>상태 중심 렌더링</span>
    </h2>
    <p className="lead">
      버튼은 DOM을 직접 많이 고치지 않습니다. 먼저 lions 배열을 바꾸고, render가
      현재 상태를 기준으로 화면을 다시 만듭니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "28px",
        marginTop: "1.8rem",
      }}
    >
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>STATE</div>
        <pre style={codeStyle}>{`const lions = [];
let nextId = 1;

const viewState = {
  part: "ALL",
  sort: "latest",
  query: "",
};`}</pre>
      </div>
      <div style={cardStyle}>
        <div style={sectionLabelStyle}>EVENT HANDLER</div>
        <pre style={codeStyle}>{`appendFiveBtn.addEventListener("click", () =>
  runFetchAction(() => appendRandom(5)),
);

partFilter.addEventListener("change", (e) => {
  viewState.part = e.target.value;
  applyAndRender();
});`}</pre>
      </div>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "12px",
        marginTop: "22px",
      }}
    >
      {["이벤트 발생", "상태 변경", "목록 계산", "화면 렌더링"].map(
        (text, index) => (
          <motion.div
            key={text}
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
            transition={{ delay: index * 0.1 }}
          >
            {text}
          </motion.div>
        ),
      )}
    </div>
  </div>
);

const sampleUsers = [
  { name: "Ava Stone", part: "Frontend", skill: "React" },
  { name: "Noah Brooks", part: "Backend", skill: "Node.js" },
  { name: "Mia Carter", part: "Design", skill: "Figma" },
  { name: "Leo Martin", part: "Frontend", skill: "TypeScript" },
  { name: "Ella Wilson", part: "Backend", skill: "Spring" },
];

export const AsyncLionDemo = () => {
  const [lions, setLions] = useState(sampleUsers.slice(0, 2));
  const [status, setStatus] = useState("준비 완료");
  const [isLoading, setIsLoading] = useState(false);

  const loadOne = async () => {
    setIsLoading(true);
    setStatus("불러오는 중...");

    await new Promise((resolve) => setTimeout(resolve, 700));

    const next = sampleUsers[lions.length % sampleUsers.length];
    setLions((prev) => [
      { ...next, name: `${next.name} ${prev.length + 1}` },
      ...prev,
    ]);
    setStatus("완료!");
    setIsLoading(false);
  };

  return (
    <div className="animate-up">
      <h2>
        라이브 데모:{" "}
        <span style={{ color: "var(--ll-orange)" }}>비동기 추가 흐름</span>
      </h2>
      <p className="lead">
        실제 API 대신 0.7초 지연 Promise로 fetch와 같은 흐름을 체험합니다.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: "28px",
          marginTop: "1.6rem",
        }}
      >
        <div style={cardStyle}>
          <div style={sectionLabelStyle}>DASHBOARD</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            <button
              type="button"
              onClick={loadOne}
              disabled={isLoading}
              style={{
                padding: "11px 16px",
                borderRadius: "10px",
                border: "none",
                background: isLoading ? "#ddd" : "var(--ll-orange)",
                color: "white",
                fontWeight: 900,
                cursor: isLoading ? "not-allowed" : "pointer",
              }}
            >
              랜덤 1명 추가
            </button>
            <span
              style={{ color: isLoading ? "#2563EB" : "#666", fontWeight: 800 }}
            >
              {status}
            </span>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <AnimatePresence>
              {lions.map((lion) => (
                <motion.div
                  key={lion.name}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
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
                    <strong>{lion.name}</strong>
                    <div style={{ fontSize: "0.82rem", color: "#666" }}>
                      {lion.part}
                    </div>
                  </div>
                  <span
                    style={{
                      padding: "6px 10px",
                      borderRadius: "999px",
                      background: "white",
                      color: "var(--ll-orange)",
                      fontSize: "0.78rem",
                      fontWeight: 900,
                    }}
                  >
                    {lion.skill}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div style={{ ...cardStyle, background: "#0f172a" }}>
          <div style={{ ...sectionLabelStyle, color: "#F7DF1E" }}>
            WHAT JUST HAPPENED?
          </div>
          <CodeBlock
            code={`async function loadOne() {
  setStatus("불러오는 중...");

  const users = await fetchRandomUsers(1);
  const newLion = randomUserToLion(users[0]);

  lions.push(newLion);
  render(getVisibleLions());

  setStatus("완료!");
}`}
          />
        </div>
      </div>
    </div>
  );
};

export const Week4MissionBriefing = () => (
  <div className="animate-up">
    <h2>
      PBL 미션:{" "}
      <span style={{ color: "var(--ll-orange)" }}>
        인터랙티브 아기 사자 대시보드
      </span>
    </h2>
    <p className="lead">
      외부 데이터를 불러오고, 사용자가 필터/검색/정렬을 바꿀 때마다 명단을 다시
      렌더링합니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.1fr 0.9fr",
        gap: "28px",
        marginTop: "1.6rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {[
          [
            "랜덤 데이터 추가",
            "randomuser API에서 1명 또는 5명을 받아 명단에 추가합니다.",
          ],
          [
            "전체 새로고침",
            "기존 인원 수만큼 새 데이터를 받아 대시보드를 갱신합니다.",
          ],
          [
            "로딩/실패 상태",
            "요청 중 버튼을 잠그고, 실패하면 재시도 버튼을 보여줍니다.",
          ],
          [
            "보기 옵션",
            "파트 필터, 이름 검색, 정렬을 배열 메서드로 처리합니다.",
          ],
        ].map(([title, desc], index) => (
          <motion.div
            key={title}
            style={{
              display: "flex",
              gap: "14px",
              padding: "16px",
              borderRadius: "14px",
              background: "white",
              border: "1px solid #f0f0f0",
            }}
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <strong style={{ color: "var(--ll-orange)", minWidth: "64px" }}>
              기능 {index + 1}
            </strong>
            <div>
              <div style={{ fontWeight: 900, marginBottom: "4px" }}>
                {title}
              </div>
              <p style={{ margin: 0, color: "#666", lineHeight: 1.5 }}>
                {desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={cardStyle}>
        <div style={sectionLabelStyle}>완성 화면에 있어야 하는 것</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          {[
            "카드 목록",
            "상세 목록",
            "추가 폼",
            "랜덤 추가",
            "검색",
            "필터",
            "정렬",
            "재시도",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "12px",
                borderRadius: "10px",
                background: "#f8f9fa",
                fontWeight: 800,
                textAlign: "center",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const Week4WrapUp = () => (
  <div className="animate-up" style={{ textAlign: "center" }}>
    <h2 style={{ justifyContent: "center" }}>4주차 정리</h2>
    <p className="lead">
      오늘의 핵심은 "서버 데이터 → 상태 → 배열 가공 → 렌더링" 흐름입니다.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "18px",
        marginTop: "2rem",
      }}
    >
      {[
        ["Promise", "미래에 완료될 비동기 작업"],
        ["async/await", "비동기 코드를 순서대로 읽히게 작성"],
        ["fetch", "외부 API에 요청하고 JSON 받기"],
        ["map/filter", "받아온 데이터를 화면용 목록으로 변환"],
      ].map(([title, desc], index) => (
        <motion.div
          key={title}
          className="pbl-card"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <h3 style={{ color: "var(--ll-orange)", marginBottom: "10px" }}>
            {title}
          </h3>
          <p style={{ color: "#666", lineHeight: 1.55 }}>{desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55 }}
      style={{
        marginTop: "2rem",
        padding: "22px",
        borderRadius: "18px",
        background: "#0f172a",
        color: "white",
        fontWeight: 900,
      }}
    >
      과제 체크포인트: 로딩 상태, 실패 처리, 재시도, 필터/검색/정렬이 모두 같은
      상태 배열을 기준으로 동작해야 합니다.
    </motion.div>
  </div>
);
