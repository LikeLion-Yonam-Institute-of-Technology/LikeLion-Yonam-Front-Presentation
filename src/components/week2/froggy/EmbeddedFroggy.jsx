import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import greenFlower from "../../../assets/froggy/green_flower.png";
import yellowFlower from "../../../assets/froggy/yellow_flower.png";
import redFlower from "../../../assets/froggy/red_flower.png";
import greenFrog from "../../../assets/froggy/green_frog.png";
import yellowFrog from "../../../assets/froggy/yellow_frog.png";
import redFrog from "../../../assets/froggy/red_frog.png";

const flowerByColor = {
  green: greenFlower,
  yellow: yellowFlower,
  red: redFlower,
};

const frogByColor = {
  green: greenFrog,
  yellow: yellowFrog,
  red: redFrog,
};

//입력된 CSS 정리 함수
const normalizeValue = (value) =>
  value.trim().toLowerCase().replace(/\s+/g, " ");

//CSS 속성 React inline style로 변경
//ex) align-items -> alignItems
const cssPropertyToJs = (property) =>
  property.trim().replace(/-([a-z])/g, (_, char) => char.toUpperCase());

//CSS 블록안 선언문들을 객체형태로
const parseDeclarations = (body) => {
  const declarations = {};

  body
    .split(";")
    .map((line) => line.trim())
    .filter(Boolean)
    .forEach((line) => {
      const [property, ...rest] = line.split(":");
      if (!property || rest.length === 0) return;
      declarations[property.trim().toLowerCase()] = normalizeValue(
        rest.join(":"),
      );
    });

  return declarations;
};

//CSS 문자열 selector 별 객체 분리
const parseCssBlocks = (input) => {
  const result = {};
  const blockRegex = /([^{}]+)\{([^{}]*)\}/g; // selector { ... } 형식 검색
  let match = blockRegex.exec(input);

  while (match) {
    const selector = match[1].trim();
    result[selector] = parseDeclarations(match[2]); // selector 에 css 객체로 변환후 저장
    match = blockRegex.exec(input);
  }

  //selector 없을때 처리
  if (Object.keys(result).length === 0) {
    result["#pond"] = parseDeclarations(input);
  }

  return result;
};

// React inline style로 변경
const blockMapToStyle = (declarations = {}) =>
  Object.fromEntries(
    Object.entries(declarations).map(([property, value]) => [
      cssPropertyToJs(property),
      value,
    ]),
  );

//flex 관련 속성 set
const flexContainerProps = new Set([
  "justify-content",
  "align-items",
  "flex-direction",
  "flex-wrap",
  "flex-flow",
  "align-content",
]);

// 정답 비교전 정리
const normalizeRequiredStyles = (requiredStyles) => {
  const normalized = JSON.parse(JSON.stringify(requiredStyles)); //객체 깊은복사
  const pondStyles = normalized["#pond"];

  if (!pondStyles) return normalized;

  //flex 관련 속성 검사
  const needsFlexDisplay = Object.keys(pondStyles).some((property) =>
    flexContainerProps.has(property),
  );

  //flex 속성이 있지만 display가 없을경우 추가
  if (needsFlexDisplay && !pondStyles.display) {
    pondStyles.display = "flex";
  }

  return normalized;
};

//정답 확인
const isSolutionMatch = (parsedBlocks, requiredStyles) =>
  Object.entries(normalizeRequiredStyles(requiredStyles)).every(
    ([selector, declarations]) =>
      Object.entries(declarations).every(
        ([property, value]) => parsedBlocks[selector]?.[property] === value,
      ),
  );

// 연꽃 렌더링
const lilyStyle = (target) => ({
  position: "absolute",
  left: target.left,
  top: target.top,
  transform: "translate(-50%, -50%)",
  width: target.size || "84px",
  height: target.size || "84px",
  backgroundImage: `url(${flowerByColor[target.color || "green"]})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

//개구리 생성
const baseFrogStyle = (color) => ({
  width: "78px",
  height: "78px",
  backgroundImage: `url(${frogByColor[color]})`,
  backgroundSize: "calc(100% - 12px) calc(100% - 18px)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  padding: "9px 6px",
  boxSizing: "border-box",
  flexShrink: 0,
});

//현재 레벨 불러오기
const defaultCode = (level) => level.starterCode;

//CSS 중복확인
const hasDeclarationInSelector = (code, selector, declarationLine) => {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const blockRegex = new RegExp(
    `${escapedSelector}\\s*\\{([\\s\\S]*?)\\}`,
    "m",
  );
  const match = code.match(blockRegex);

  if (!match) return false;
  return match[1].includes(declarationLine);
};

// selector에 css 추가
const appendDeclarationToSelector = (code, selector, declarationLine) => {
  if (hasDeclarationInSelector(code, selector, declarationLine)) {
    return code;
  }

  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const blockRegex = new RegExp(
    `(${escapedSelector}\\s*\\{)([\\s\\S]*?)(\\})`,
    "m",
  );

  if (blockRegex.test(code)) {
    return code.replace(blockRegex, (_, start, body, end) => {
      const trimmedBody = body.replace(/\s*$/, "");
      const prefix = trimmedBody.length > 0 ? `${trimmedBody}\n` : "\n";
      return `${start}${prefix}  ${declarationLine}\n${end}`;
    });
  }

  const separator = code.trim().length > 0 ? "\n\n" : "";
  return `${code.trimEnd()}${separator}${selector} {\n  ${declarationLine}\n}`;
};

//selector에 CSS 삭제
const removeDeclarationFromSelector = (code, selector, declarationLine) => {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const blockRegex = new RegExp(
    `(${escapedSelector}\\s*\\{)([\\s\\S]*?)(\\})`,
    "m",
  );

  if (!blockRegex.test(code)) {
    return code;
  }

  return code.replace(blockRegex, (_, start, body, end) => {
    const nextBody = body
      .split("\n")
      .filter((line) => line.trim() !== declarationLine.trim())
      .join("\n")
      .replace(/\n{3,}/g, "\n\n")
      .replace(/\s*$/, "");

    return `${start}${nextBody ? `${nextBody}\n` : "\n"}${end}`;
  });
};

// Quick Add 토글 함수
const toggleDeclarationInSelector = (code, selector, declarationLine) =>
  hasDeclarationInSelector(code, selector, declarationLine)
    ? removeDeclarationFromSelector(code, selector, declarationLine)
    : appendDeclarationToSelector(code, selector, declarationLine);

// css 속성별 라벨
const helperLabels = {
  "display:flex": "flex 컨테이너 만들기",
  "justify-content:flex-end": "개구리를 오른쪽으로 옮기기",
  "justify-content:start": "개구리를 시작 위치로 붙이기",
  "justify-content:center": "개구리를 가운데로 모으기",
  "justify-content:space-around": "개구리 주위 간격 넓게 두기",
  "justify-content:space-between": "개구리 사이 간격 동일하게 벌리기",
  "align-items:flex-end": "개구리를 아래쪽으로 내리기",
  "align-items:center": "개구리를 세로 가운데로 맞추기",
  "flex-direction:row-reverse": "개구리 순서를 가로로 뒤집기",
  "flex-direction:column": "개구리를 세로로 세우기",
  "flex-direction:column-reverse": "개구리 순서를 세로로 뒤집기",
  "flex-wrap:wrap": "개구리를 여러 줄로 넘기기",
  "flex-flow:column wrap": "세로로 쌓고 옆으로 넘기기",
  "align-content:flex-start": "줄 묶음을 위로 붙이기",
  "align-content:flex-end": "줄 묶음을 아래로 내리기",
  "align-content:center": "줄 묶음을 가운데로 모으기",
  "order:1": "개구리 순서를 뒤로 보내기",
  "order:-1": "개구리를 맨 앞으로 보내기",
  "align-self:flex-start": "개구리 하나만 위로 올리기",
};

const getHelperLabel = (property, value) =>
  helperLabels[`${property}:${value}`] || `${property} 적용하기`;

const buildHelperButtons = (level) => {
  const buttons = [];
  const normalizedRequiredStyles = normalizeRequiredStyles(
    level.requiredStyles,
  );

  Object.entries(normalizedRequiredStyles).forEach(
    ([selector, declarations]) => {
      Object.entries(declarations).forEach(([property, value]) => {
        buttons.push({
          selector,
          line: `${property}: ${value};`,
          label: getHelperLabel(property, value),
        });
      });
    },
  );

  return buttons.sort((a, b) => {
    const aIsDisplayFlex =
      a.selector === "#pond" && a.line.trim() === "display: flex;";
    const bIsDisplayFlex =
      b.selector === "#pond" && b.line.trim() === "display: flex;";

    if (aIsDisplayFlex && !bIsDisplayFlex) return -1;
    if (!aIsDisplayFlex && bIsDisplayFlex) return 1;
    return 0;
  });
};

const selectorStyleForFrog = (parsedBlocks, frog, index) => ({
  ...blockMapToStyle(parsedBlocks[".frog"]),
  ...blockMapToStyle(parsedBlocks[`.${frog.color}`]),
  ...blockMapToStyle(parsedBlocks[`.frog.${frog.color}`]),
  ...blockMapToStyle(parsedBlocks[`.frog:nth-child(${index + 1})`]),
});

const levelStyleForFrog = (level, frog, index) => ({
  ...(level.frogStyles?.all || {}),
  ...(level.frogStyles?.[frog.color] || {}),
  ...(level.frogStyles?.[`index-${index + 1}`] || {}),
});

const levelCorrectStyleForFrog = (level, frog, index, isCorrect) => {
  if (!isCorrect) return {};

  return {
    ...(level.correctFrogStyles?.all || {}),
    ...(level.correctFrogStyles?.[frog.color] || {}),
    ...(level.correctFrogStyles?.[`index-${index + 1}`] || {}),
  };
};

const levelConditionalStyleForFrog = (level, frog, index, parsedBlocks) => {
  const conditions = level.conditionalFrogStyles || [];

  return conditions.reduce((acc, condition) => {
    const selector = condition.selector || "#pond";
    const declarations = condition.declarations || {};
    const matches = Object.entries(declarations).every(
      ([property, value]) => parsedBlocks[selector]?.[property] === value,
    );

    if (!matches) return acc;

    return {
      ...acc,
      ...(condition.styles?.all || {}),
      ...(condition.styles?.[frog.color] || {}),
      ...(condition.styles?.[`index-${index + 1}`] || {}),
    };
  }, {});
};

const InlineCode = ({ children }) => (
  <code
    style={{
      padding: "2px 6px",
      borderRadius: "8px",
      background: "rgba(255,255,255,0.16)",
      color: "#F3F4F6",
      fontFamily: "var(--font-mono)",
      fontWeight: 800,
      fontSize: "0.95em",
    }}
  >
    {children}
  </code>
);

const EmbeddedFroggy = ({ level }) => {
  const [code, setCode] = useState(defaultCode(level));

  const parsedBlocks = useMemo(() => parseCssBlocks(code), [code]);
  const isCorrect = useMemo(
    () => isSolutionMatch(parsedBlocks, level.requiredStyles),
    [parsedBlocks, level.requiredStyles],
  );
  const helperButtons = useMemo(() => buildHelperButtons(level), [level]);
  const pondStyles = useMemo(
    () => blockMapToStyle(parsedBlocks["#pond"]),
    [parsedBlocks],
  );

  return (
    <div
      className="animate-up"
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            width: "fit-content",
            padding: "8px 14px",
            borderRadius: "999px",
            background: "rgba(255, 96, 0, 0.08)",
            border: "1px solid rgba(255, 96, 0, 0.12)",
            color: "var(--ll-orange)",
            fontWeight: 900,
            fontSize: "0.85rem",
            letterSpacing: "0.08em",
          }}
        >
          LEVEL {String(level.id).padStart(2, "0")}
        </div>
        <h2 style={{ marginBottom: 0 }}>{level.title}</h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: "28px",
          minHeight: 0,
        }}
      >
        <div
          className="pbl-card"
          style={{ display: "flex", flexDirection: "column", gap: "18px" }}
        >
          <span
            style={{
              color: "var(--ll-orange)",
              fontWeight: 900,
              letterSpacing: "0.08em",
            }}
          >
            {level.concept.toUpperCase()}
          </span>
          <p className="lead" style={{ marginBottom: 0 }}>
            {level.prompt}
          </p>
          {level.lessonContent && (
            <div
              style={{
                padding: "18px",
                borderRadius: "18px",
                background: "#43A047",
                border: "1px solid rgba(0,0,0,0.08)",
                color: "white",
                lineHeight: 1.8,
                fontSize: "0.95rem",
                boxShadow: "0 10px 24px rgba(67, 160, 71, 0.18)",
              }}
            >
              <p style={{ margin: 0 }}>{level.lessonContent.description}</p>
              <ul style={{ margin: "12px 0 0", paddingLeft: "22px" }}>
                {level.lessonContent.bullets.map((bullet) => (
                  <li key={bullet.label} style={{ marginBottom: "6px" }}>
                    <InlineCode>{bullet.label}</InlineCode>: {bullet.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div
            style={{
              padding: "16px 18px",
              borderRadius: "16px",
              background: "var(--ll-orange-light)",
              color: "var(--ll-black)",
              lineHeight: 1.7,
            }}
          >
            <strong>힌트</strong>
            <br />
            {level.hint}
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 900,
                color: "#6B7280",
                letterSpacing: "0.08em",
              }}
            >
              CSS INPUT
            </div>
            <textarea
              value={code}
              onChange={(event) => setCode(event.target.value)}
              spellCheck={false}
              style={{
                minHeight: "240px",
                width: "100%",
                borderRadius: "18px",
                border: "1px solid var(--ll-border)",
                padding: "18px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.92rem",
                lineHeight: 1.7,
                resize: "vertical",
                outline: "none",
                background: "#FCFCFC",
              }}
            />
          </div>
        </div>

        <div
          className="pbl-card"
          style={{ display: "flex", flexDirection: "column", gap: "18px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 900,
                color: "#6B7280",
                letterSpacing: "0.08em",
              }}
            >
              LIVE BOARD
            </span>
            <span
              style={{
                padding: "8px 12px",
                borderRadius: "999px",
                background: isCorrect
                  ? "rgba(34,197,94,0.12)"
                  : "rgba(17,17,17,0.05)",
                color: isCorrect ? "#166534" : "#374151",
                fontWeight: 800,
                fontSize: "0.82rem",
              }}
            >
              {isCorrect ? "CLEAR" : "TRY AGAIN"}
            </span>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 900,
                color: "#6B7280",
                letterSpacing: "0.08em",
              }}
            >
              빠른 추가
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {helperButtons.map((button) => {
                const alreadyAdded = hasDeclarationInSelector(
                  code,
                  button.selector,
                  button.line,
                );

                return (
                  <button
                    key={`${button.selector}-${button.line}`}
                    type="button"
                    onClick={() =>
                      setCode((prev) =>
                        toggleDeclarationInSelector(
                          prev,
                          button.selector,
                          button.line,
                        ),
                      )
                    }
                    className={`nav-btn ${alreadyAdded ? "" : "primary"}`}
                    style={{ padding: "10px 14px", fontSize: "0.82rem" }}
                  >
                    {button.label}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => setCode(defaultCode(level))}
                className="nav-btn"
                style={{ padding: "10px 14px", fontSize: "0.82rem" }}
              >
                다시 시작
              </button>
            </div>
          </div>

          <div
            style={{
              padding: "16px 18px",
              borderRadius: "16px",
              border: isCorrect
                ? "1px solid rgba(34,197,94,0.25)"
                : "1px solid rgba(17,17,17,0.08)",
              background: isCorrect ? "rgba(34,197,94,0.12)" : "#F9FAFB",
              color: isCorrect ? "#166534" : "#374151",
              fontWeight: 700,
            }}
          >
            {isCorrect
              ? "정답입니다. 다음 레벨로 넘어가면 됩니다."
              : "아직 목표 배치와 다릅니다. 빠른 추가 버튼이나 CSS 입력을 다시 확인해보세요."}
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "560px",
              alignSelf: "center",
              aspectRatio: "1 / 1",
              borderRadius: "28px",
              overflow: "hidden",
              background: "#1F5768",
              border: "1px solid rgba(17,17,17,0.06)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "auto 0 0 0",
                height: "88px",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.14) 100%)",
              }}
            />

            {level.targets.map((target, index) => (
              <div key={index} style={lilyStyle(target)} />
            ))}

            <motion.div
              layout
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                top: isCorrect
                  ? (level.correctPondTop ?? level.pondTop ?? 0)
                  : level.pondTop || 0,
                left: isCorrect
                  ? (level.correctPondLeft ?? level.pondLeft ?? 0)
                  : level.pondLeft || 0,
                right: isCorrect
                  ? (level.correctPondRight ?? level.pondRight)
                  : level.pondRight,
                bottom: isCorrect
                  ? (level.correctPondBottom ?? level.pondBottom)
                  : level.pondBottom,
                transform: isCorrect
                  ? (level.correctPondTransform ?? level.pondTransform)
                  : level.pondTransform,
                width: level.pondWidth || "100%",
                height: level.pondHeight || "100%",
                paddingTop: level.pondPaddingTop || 0,
                paddingRight: level.pondPaddingRight || 0,
                paddingBottom: level.pondPaddingBottom || 0,
                paddingLeft: level.pondPaddingLeft || 0,
                boxSizing: "border-box",
                gap: level.pondGap || "18px",
                columnGap: level.pondColumnGap,
                rowGap: level.pondRowGap,
                ...pondStyles,
              }}
            >
              {level.frogs.map((color, index) => (
                <motion.div
                  key={`${color}-${index}`}
                  layout
                  animate={{ scale: [1, 1.04, 1] }}
                  initial={false}
                  style={{
                    transformOrigin: "center bottom",
                    ...baseFrogStyle(color),
                    ...selectorStyleForFrog(parsedBlocks, { color }, index),
                    ...levelStyleForFrog(level, { color }, index),
                    ...levelConditionalStyleForFrog(
                      level,
                      { color },
                      index,
                      parsedBlocks,
                    ),
                    ...levelCorrectStyleForFrog(
                      level,
                      { color },
                      index,
                      isCorrect,
                    ),
                  }}
                  transition={{
                    layout: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                    scale: {
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.18,
                    },
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbeddedFroggy;
