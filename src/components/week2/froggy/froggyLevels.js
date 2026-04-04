const row3 = [
  { left: "18%", top: "42%" },
  { left: "45%", top: "42%" },
  { left: "72%", top: "42%" },
];

const row3Bottom = [
  { left: "18%", top: "70%" },
  { left: "45%", top: "70%" },
  { left: "72%", top: "70%" },
];

const row3Center = [
  { left: "30%", top: "42%" },
  { left: "45%", top: "42%" },
  { left: "60%", top: "42%" },
];

const row3CenterBottom = [
  { left: "30%", top: "70%" },
  { left: "45%", top: "70%" },
  { left: "60%", top: "70%" },
];

const column3 = [
  { left: "45%", top: "14%" },
  { left: "45%", top: "40%" },
  { left: "45%", top: "66%" },
];

const column3Bottom = [
  { left: "45%", top: "30%" },
  { left: "45%", top: "54%" },
  { left: "45%", top: "78%" },
];

const grid6Top = [
  { left: "18%", top: "22%" },
  { left: "45%", top: "22%" },
  { left: "72%", top: "22%" },
  { left: "18%", top: "48%" },
  { left: "45%", top: "48%" },
  { left: "72%", top: "48%" },
];

const grid6Bottom = [
  { left: "18%", top: "44%" },
  { left: "45%", top: "44%" },
  { left: "72%", top: "44%" },
  { left: "18%", top: "70%" },
  { left: "45%", top: "70%" },
  { left: "72%", top: "70%" },
];

const twoColumnThreeRows = [
  { left: "28%", top: "16%" },
  { left: "28%", top: "40%" },
  { left: "28%", top: "64%" },
  { left: "58%", top: "16%" },
  { left: "58%", top: "40%" },
  { left: "58%", top: "64%" },
];

const twoColumnThreeRowsCenter = [
  { left: "34%", top: "16%" },
  { left: "34%", top: "40%" },
  { left: "34%", top: "64%" },
  { left: "64%", top: "16%" },
  { left: "64%", top: "40%" },
  { left: "64%", top: "64%" },
];

const spacedColumnsWrapReverse = [
  { left: "72%", top: "22%" },
  { left: "72%", top: "48%" },
  { left: "72%", top: "74%" },
  { left: "28%", top: "22%" },
  { left: "28%", top: "48%" },
  { left: "28%", top: "74%" },
];

const addColors = (targets, colors) =>
  targets.map((target, index) => ({ ...target, color: colors[index] }));

export const froggyLevels = [
  {
    id: 1,
    title: "Level 1. 오른쪽 끝으로 보내기",
    concept: "justify-content",
    prompt: "초록 개구리 1마리를 오른쪽 위 연꽃 위치로 이동시키세요.",
    lessonContent: {
      description:
        "오른쪽의 justify-content 속성을 이용하여 개구리가 연꽃으로 이동할 수 있도록 도와주세요. 이 속성은 요소들을 가로축에서 정렬합니다.",
      bullets: [
        {
          label: "flex-start",
          text: "요소들을 컨테이너의 왼쪽으로 정렬합니다.",
        },
        {
          label: "flex-end",
          text: "요소들을 컨테이너의 오른쪽으로 정렬합니다.",
        },
        { label: "center", text: "요소들을 컨테이너의 가운데로 정렬합니다." },
        { label: "space-between", text: "요소들 사이에 동일한 간격을 둡니다." },
        { label: "space-around", text: "요소들 주위에 동일한 간격을 둡니다." },
      ],
      example: "justify-content: flex-end;",
    },
    hint: "가로축 이동은 justify-content입니다.",
    starterCode: `#pond {\n}`,
    requiredStyles: { "#pond": { "justify-content": "flex-end" } },
    frogs: ["green"],
    targets: addColors([{ left: "90%", top: "10%", size: "78px" }], ["green"]),
  },
  {
    id: 2,
    title: "Level 2. 가운데로 모으기",
    concept: "justify-content",
    prompt: "개구리 2마리를 가운데 연꽃 위치로 모아보세요.",
    lessonContent: {
      description:
        "justify-content를 다시 사용하여 개구리들을 가운데로 모아보세요. 이 속성은 요소들을 가로축에서 정렬합니다.",
      bullets: [
        {
          label: "flex-start",
          text: "요소들을 컨테이너의 왼쪽으로 정렬합니다.",
        },
        {
          label: "flex-end",
          text: "요소들을 컨테이너의 오른쪽으로 정렬합니다.",
        },
        { label: "center", text: "요소들을 컨테이너의 가운데로 정렬합니다." },
        { label: "space-between", text: "요소들 사이에 동일한 간격을 둡니다." },
        { label: "space-around", text: "요소들 주위에 동일한 간격을 둡니다." },
      ],
      example: "justify-content: center;",
    },
    hint: "가로축 기준으로 가운데 정렬합니다.",
    starterCode: `#pond {\n}`,
    requiredStyles: { "#pond": { "justify-content": "center" } },
    frogs: ["green", "yellow"],
    targets: addColors(
      [
        { left: "43%", top: "10%" },
        { left: "61%", top: "10%" },
      ],
      ["green", "yellow"],
    ),
  },
  {
    id: 3,
    title: "Level 3. 간격 벌리기",
    concept: "justify-content",
    prompt: "개구리 3마리를 연꽃 위치에 맞게 벌려보세요.",
    lessonContent: {
      description:
        "justify-content를 사용하여 세 마리의 개구리가 모두 연꽃으로 이동할 수 있도록 도와주세요. 이번에는 연꽃 주위에 많은 간격이 있습니다.",
      bullets: [
        {
          label: "tip",
          text: "justify-content 위에 포인터를 올리면 사용할 수 있는 값을 다시 확인할 수 있습니다.",
        },
        {
          label: "hint",
          text: "이번에는 요소 주위 간격이 동일하게 들어가는 값을 떠올려보세요.",
        },
      ],
      example: "justify-content: space-around;",
    },
    hint: "요소 주위에 동일한 여백이 생기는 값을 생각해보세요.",
    starterCode: `#pond {\n}`,
    requiredStyles: { "#pond": { "justify-content": "space-around" } },
    frogs: ["green", "yellow", "red"],
    targets: addColors(
      [
        { left: "15%", top: "10%" },
        { left: "50%", top: "10%" },
        { left: "85%", top: "10%" },
      ],
      ["green", "yellow", "red"],
    ),
  },
  {
    id: 4,
    title: "Level 4. 양끝에 붙이기",
    concept: "justify-content",
    prompt: "양끝 연꽃까지 꽉 차도록 배치하세요.",
    lessonContent: {
      description:
        "수련잎이 연못 가장자리로 떠내려가면서 수련잎 사이의 간격이 넓어졌습니다. justify-content를 사용하세요. 이번에는 요소 사이에 동일한 간격이 있습니다.",
      bullets: [
        {
          label: "flex-start",
          text: "요소들을 컨테이너의 왼쪽으로 정렬합니다.",
        },
        {
          label: "flex-end",
          text: "요소들을 컨테이너의 오른쪽으로 정렬합니다.",
        },
        { label: "center", text: "요소들을 컨테이너의 가운데로 정렬합니다." },
        { label: "space-between", text: "요소들 사이에 동일한 간격을 둡니다." },
        { label: "space-around", text: "요소들 주위에 동일한 간격을 둡니다." },
      ],
      example: "justify-content: space-between;",
    },
    hint: "첫 번째와 마지막 요소가 양끝에 붙는 값을 떠올려보세요.",
    starterCode: `#pond {\n}`,
    requiredStyles: { "#pond": { "justify-content": "space-between" } },
    frogs: ["green", "yellow", "red"],
    targets: addColors(
      [
        { left: "12%", top: "10%" },
        { left: "50%", top: "10%" },
        { left: "88%", top: "10%" },
      ],
      ["green", "yellow", "red"],
    ),
  },
  {
    id: 5,
    title: "Level 5. 아래 줄 맞추기",
    concept: "align-items",
    prompt: "모든 개구리를 아래쪽 연꽃 줄에 맞춰보세요.",
    lessonContent: {
      description:
        "이제 align-items를 사용하여 개구리들이 연못의 아래쪽에 도착할 수 있도록 도와주세요. 이 속성은 요소들을 세로축에서 정렬합니다.",
      bullets: [
        {
          label: "flex-start",
          text: "요소들을 컨테이너의 꼭대기로 정렬합니다.",
        },
        { label: "flex-end", text: "요소들을 컨테이너의 바닥으로 정렬합니다." },
        {
          label: "center",
          text: "요소들을 컨테이너의 세로축 가운데로 정렬합니다.",
        },
        {
          label: "baseline",
          text: "요소들을 컨테이너의 시작 위치에 정렬합니다.",
        },
        { label: "stretch", text: "요소들을 컨테이너에 맞도록 늘립니다." },
      ],
      example: "align-items: flex-end;",
    },
    hint: "세로축 정렬은 align-items입니다.",
    starterCode: `#pond {\n}`,
    requiredStyles: { "#pond": { "align-items": "flex-end" } },
    frogs: ["green", "yellow", "red"],
    pondWidth: "250px",
    targets: addColors(
      [
        { left: "11%", top: "89%" },
        { left: "31%", top: "89%" },
        { left: "51%", top: "89%" },
      ],
      ["green", "yellow", "red"],
    ),
    pondPaddingLeft: "12px",
    pondPaddingBottom: "12px",
    pondColumnGap: "12px",
  },
  {
    id: 6,
    title: "Level 6. 정중앙 정렬",
    concept: "justify-content + align-items",
    prompt: "개구리 1마리를 연못의 정중앙으로 이동시키세요.",
    lessonContent: {
      description:
        "justify-content와 align-items를 함께 사용하여 개구리가 연못의 중앙으로 이동할 수 있도록 도와주세요.",
      bullets: [
        {
          label: "justify-content",
          text: "가로축에서 개구리의 위치를 조절합니다.",
        },
        {
          label: "align-items",
          text: "세로축에서 개구리의 위치를 조절합니다.",
        },
      ],
      example: "justify-content: center; align-items: center;",
    },
    hint: "가로와 세로 정렬을 함께 써야 합니다.",
    starterCode: `#pond {\n}`,
    requiredStyles: {
      "#pond": { "justify-content": "center", "align-items": "center" },
    },
    frogs: ["green"],
    targets: addColors([{ left: "50%", top: "50%" }], ["green"]),
  },
  {
    id: 7,
    title: "Level 7. 벌리면서 아래로",
    concept: "justify-content + align-items",
    prompt: "개구리를 넓게 벌리되 아래쪽 연꽃 줄에 맞추세요.",
    lessonContent: {
      description:
        "개구리들이 연못을 다시 건너려 하는데, 수련잎 주위에 간격이 있습니다. justify-content와 align-items를 함께 사용해보세요.",
      bullets: [
        {
          label: "justify-content",
          text: "가로축에서 개구리 사이 간격을 조절합니다.",
        },
        {
          label: "align-items",
          text: "세로축에서 개구리들을 아래쪽으로 내립니다.",
        },
      ],
      example: "justify-content: space-around; align-items: flex-end;",
    },
    hint: "space-around와 flex-end를 함께 사용합니다.",
    starterCode: `#pond {\n}`,
    requiredStyles: {
      "#pond": { "justify-content": "space-around", "align-items": "flex-end" },
    },
    frogs: ["green", "yellow", "red"],
    targets: addColors(
      [
        { left: "16%", top: "88%" },
        { left: "50%", top: "88%" },
        { left: "84%", top: "88%" },
      ],
      ["green", "yellow", "red"],
    ),
    pondPaddingBottom: "18px",
  },
  {
    id: 8,
    title: "Level 8. 순서 뒤집기",
    concept: "flex-direction",
    prompt: "개구리의 나열 방향을 뒤집어 왼쪽 연꽃에 맞추세요.",
    lessonContent: {
      description:
        "개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요. 이번에는 flex-direction을 사용해 정렬 방향을 바꿔봅니다.",
      bullets: [
        { label: "row", text: "요소들을 텍스트 방향과 동일하게 정렬합니다." },
        {
          label: "row-reverse",
          text: "요소들을 텍스트의 반대 방향으로 정렬합니다.",
        },
        { label: "column", text: "요소들을 위에서 아래로 정렬합니다." },
        { label: "column-reverse", text: "요소들을 아래에서 위로 정렬합니다." },
      ],
      example: "flex-direction: row-reverse;",
    },
    hint: "한 줄 방향을 반대로 뒤집으면 순서도 함께 바뀝니다.",
    starterCode: `#pond {\n}`,
    requiredStyles: { "#pond": { "flex-direction": "row-reverse" } },
    frogs: ["green", "yellow", "red"],
    targets: addColors(
      [
        { left: "50%", top: "10%" },
        { left: "70%", top: "10%" },
        { left: "89%", top: "10%" },
      ],
      ["red", "yellow", "green"],
    ),
    pondPaddingRight: "18px",
    pondColumnGap: "12px",
  },
  {
    id: 9,
    title: "Level 9. 세로 한 줄 만들기",
    concept: "flex-direction",
    prompt: "개구리들을 세로 한 줄의 연꽃 위로 세워보세요.",
    lessonContent: {
      description:
        "flex-direction을 사용하여 개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요. 이번에는 세로 방향으로 쌓아봅니다.",
      bullets: [
        { label: "row", text: "요소들을 텍스트 방향과 동일하게 정렬합니다." },
        {
          label: "row-reverse",
          text: "요소들을 텍스트의 반대 방향으로 정렬합니다.",
        },
        { label: "column", text: "요소들을 위에서 아래로 정렬합니다." },
        { label: "column-reverse", text: "요소들을 아래에서 위로 정렬합니다." },
      ],
      example: "flex-direction: column;",
    },
    hint: "이번에는 세로 방향입니다.",
    starterCode: `#pond {\n}`,
    requiredStyles: { "#pond": { "flex-direction": "column" } },
    frogs: ["green", "yellow", "red"],
    targets: addColors(
      [
        { left: "11%", top: "11%" },
        { left: "11%", top: "30%" },
        { left: "11%", top: "49%" },
      ],
      ["green", "yellow", "red"],
    ),
    pondHeight: "340px",
    pondPaddingTop: "12px",
    pondPaddingLeft: "12px",
    pondColumnGap: "18px",
    pondRowGap: "10px",
  },
  {
    id: 10,
    title: "Level 10. 뒤집고 왼쪽으로",
    concept: "flex-direction + justify-content",
    prompt: "색 순서를 뒤집고, 왼쪽 연꽃 쪽으로 붙여보세요.",
    lessonContent: {
      description:
        "개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요. flex-direction과 justify-content를 모두 사용해야 합니다.",
      bullets: [
        {
          label: "tip",
          text: "column-reverse 또는 row-reverse를 사용하면 요소들의 start와 end의 순서도 뒤바뀝니다.",
        },
      ],
      example: "flex-direction: row-reverse; justify-content: start;",
    },
    hint: "row-reverse와 justify-content를 함께 사용합니다.",
    starterCode: `#pond {\n}`,
    requiredStyles: {
      "#pond": { "flex-direction": "row-reverse", "justify-content": "start" },
    },
    frogs: ["green", "yellow", "red"],
    targets: addColors(
      [
        { left: "11%", top: "10%" },
        { left: "30%", top: "10%" },
        { left: "49%", top: "10%" },
      ],
      ["red", "yellow", "green"],
    ),
    pondPaddingLeft: "12px",
    pondRowGap: "18px",
    pondColumnGap: "18px",
  },
  {
    id: 11,
    title: "Level 11. 세로축 아래로",
    concept: "flex-direction + justify-content",
    prompt: "세로 방향으로 바꾼 뒤 아래쪽 연꽃에 맞추세요.",
    lessonContent: {
      description:
        "개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요. flex-direction과 justify-content를 모두 사용해야 합니다.",
      bullets: [
        {
          label: "tip",
          text: "Flex의 방향이 column일 경우 justify-content의 방향이 세로로, align-items의 방향이 가로로 바뀝니다.",
        },
      ],
      example: "flex-direction: column; justify-content: flex-end;",
    },
    hint: "column이 되면 justify-content가 세로축을 기준으로 동작합니다.",
    starterCode: `#pond {\n}`,
    requiredStyles: {
      "#pond": { "flex-direction": "column", "justify-content": "flex-end" },
    },
    frogs: ["green", "yellow", "red"],
    targets: addColors(
      [
        { left: "11%", top: "50%" },
        { left: "11%", top: "69%" },
        { left: "11%", top: "88%" },
      ],
      ["green", "yellow", "red"],
    ),
    pondHeight: "100%",
    pondPaddingLeft: "12px",
    pondPaddingBottom: "12px",
    pondRowGap: "18px",
  },
  {
    id: 12,
    title: "Level 12. 세로축 반전과 분배",
    concept: "column-reverse + justify-content",
    prompt: "세로 방향을 반전시키고 연꽃 사이를 고르게 채워보세요.",
    lessonContent: {
      description:
        "flex-direction과 justify-content를 사용하여 개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요.",
      bullets: [
        {
          label: "flex-direction",
          text: "개구리들의 정렬 방향을 뒤집거나 세로 방향으로 바꿉니다.",
        },
        {
          label: "justify-content",
          text: "현재 주축 방향을 기준으로 간격과 위치를 조절합니다.",
        },
      ],
      example:
        "flex-direction: column-reverse; justify-content: space-between;",
    },
    hint: "column-reverse와 space-between 조합입니다.",
    starterCode: `#pond {\n}`,
    requiredStyles: {
      "#pond": {
        "flex-direction": "column-reverse",
        "justify-content": "space-between",
      },
    },
    frogs: ["green", "yellow", "red"],
    targets: addColors(
      [
        { left: "11%", top: "10%" },
        { left: "11%", top: "49%" },
        { left: "11%", top: "88%" },
      ],
      ["red", "yellow", "green"],
    ),
    pondHeight: "100%",
    pondPaddingLeft: "12px",
    pondPaddingTop: "12px",
    pondPaddingBottom: "12px",
  },
  {
    id: 13,
    title: "Level 13. 복합 정렬",
    concept: "direction + justify + align",
    prompt: "색 순서를 뒤집고, 가운데 아래쪽 연꽃 줄에 맞춰보세요.",
    lessonContent: {
      description:
        "flex-direction, justify-content, 그리고 align-items를 사용하여 개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요.",
      bullets: [
        {
          label: "flex-direction",
          text: "개구리의 나열 방향과 순서를 바꿉니다.",
        },
        {
          label: "justify-content",
          text: "주축 기준으로 개구리 묶음의 위치를 조절합니다.",
        },
        {
          label: "align-items",
          text: "교차축 기준으로 개구리들을 아래쪽으로 내립니다.",
        },
      ],
      example:
        "flex-direction: row-reverse; justify-content: center; align-items: flex-end;",
    },
    hint: "row-reverse, center, flex-end를 함께 사용합니다.",
    starterCode: `#pond {\n}`,
    requiredStyles: {
      "#pond": {
        "flex-direction": "row-reverse",
        "justify-content": "center",
        "align-items": "flex-end",
      },
    },
    frogs: ["green", "yellow", "red"],
    targets: addColors(
      [
        { left: "30%", top: "88%" },
        { left: "50%", top: "88%" },
        { left: "70%", top: "88%" },
      ],
      ["red", "yellow", "green"],
    ),
    pondPaddingBottom: "12px",
    pondRowGap: "18px",
    pondGap: "20px",
    pondColumnGap: "18px",
  },
  {
    id: 14,
    title: "Level 14. 노란 개구리 순서 바꾸기",
    concept: "order",
    prompt: "노란 개구리를 맨 뒤로 보내 연꽃 순서를 맞추세요.",
    lessonContent: {
      description:
        "때때로 컨테이너의 row나 column 순서를 바꾸는 것만으로는 충분하지 않습니다. 이럴 때는 order 속성을 각 요소에 적용해 순서를 바꿀 수 있습니다.",
      bullets: [
        {
          label: "order",
          text: "특정 요소만 다른 순서로 배치하고 싶을 때 사용합니다.",
        },
        {
          label: "tip",
          text: "order의 기본값은 0이며, 양수나 음수로 값을 바꿀 수 있습니다.",
        },
      ],
      example: ".yellow { order: 1000; }",
    },
    hint: "특정 개구리만 골라 order를 적용합니다.",
    starterCode: `#pond {\n  display: flex;\n}\n\n.yellow {\n}`,
    requiredStyles: { ".yellow": { order: "1000" } },
    frogs: ["green", "yellow", "red"],
    targets: addColors(
      [
        { left: "10%", top: "10%" },
        { left: "30%", top: "10%" },
        { left: "50%", top: "10%" },
      ],
      ["green", "red", "yellow"],
    ),
    pondRowGap: "18px",
    pondGap: "20px",
    pondColumnGap: "20px",
  },
  {
    id: 15,
    title: "Level 15. 빨간 개구리 먼저",
    concept: "order",
    prompt: "빨간색 개구리를 빨간색 수련잎으로 보내주세요.",
    lessonContent: {
      description:
        "order 속성을 사용하여 빨간 개구리를 빨간색 수련잎으로 보내주세요.",
      bullets: [
        {
          label: "order",
          text: "특정 요소만 앞으로 보내거나 뒤로 미룰 수 있습니다.",
        },
      ],
      example: ".red { order: -2; }",
    },
    hint: "앞으로 보내려면 음수 order가 유용합니다.",
    starterCode: `#pond {\n  display: flex;\n}\n\n.red {\n}`,
    requiredStyles: { ".red": { order: "-2" } },
    frogs: ["green", "green", "red", "green", "green"],
    targets: addColors(
      [
        { left: "10%", top: "10%" },
        { left: "30%", top: "10%" },
        { left: "50%", top: "10%" },
        { left: "70%", top: "10%" },
        { left: "89%", top: "10%" },
      ],
      ["red", "green", "green", "green", "green"],
    ),
    pondRowGap: "18px",
    pondGap: "20px",
    pondColumnGap: "20px",
  },
  {
    id: 16,
    title: "Level 16. 노란 개구리만 아래로",
    concept: "align-self",
    prompt: "노란 개구리만 아래쪽 연꽃으로 이동시켜보세요.",
    lessonContent: {
      description:
        "align-self는 개별 요소에 적용할 수 있는 또 다른 속성입니다. 이 속성은 align-items가 사용하는 값들을 인자로 받으며, 그 값들은 지정한 요소에만 적용됩니다.",
      bullets: [
        {
          label: "align-items",
          text: "모든 개구리의 기본 세로 정렬 기준을 정합니다.",
        },
        {
          label: "align-self",
          text: "특정 개구리 하나만 다른 위치로 보낼 수 있습니다.",
        },
      ],
      example: ".yellow { align-self: flex-end; }",
    },
    hint: "개별 item 정렬은 align-self입니다.",
    starterCode: `#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n}`,
    requiredStyles: { ".yellow": { "align-self": "flex-end" } },
    frogs: ["green", "green", "yellow", "green", "green"],
    targets: addColors([{ left: "50%", top: "89%" }], ["yellow"]),
    frogStyles: {
      yellow: {
        marginBottom: "12px",
      },
    },
    pondRowGap: "18px",
    pondGap: "20px",
    pondColumnGap: "20px",
  },
  {
    id: 17,
    title: "Level 17. 순서와 개별 정렬 조합",
    concept: "order + align-self",
    prompt: "개구리들을 자기 색깔과 같은 수련잎 위로 보내주세요.",
    lessonContent: {
      description:
        "order는 개구리의 순서를 바꾸고, align-self는 특정 개구리 하나만 다른 줄로 이동시킬 수 있습니다. 두 속성을 함께 사용해 색깔과 위치를 모두 맞춰보세요.",
      bullets: [
        {
          label: "order",
          text: "노란 개구리의 가로 순서를 뒤쪽으로 보냅니다.",
        },
        { label: "align-self", text: "노란 개구리만 아래쪽으로 내립니다." },
      ],
      example: ".yellow { order: 1; align-self: flex-end; }",
    },
    hint: "order와 align-self를 함께 써야 합니다.",
    starterCode: `#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n}`,
    requiredStyles: {
      ".yellow": { order: "1", "align-self": "flex-end" },
    },
    frogs: ["yellow", "green", "yellow", "green", "green"],
    targets: addColors(
      [
        { left: "11%", top: "10%" },
        { left: "30%", top: "10%" },
        { left: "49%", top: "10%" },
        { left: "68%", top: "88%" },
        { left: "88%", top: "88%" },
      ],
      ["green", "green", "green", "yellow", "yellow"],
    ),
    frogStyles: {
      yellow: {
        marginBottom: "10px",
      },
    },
    pondRowGap: "18px",
    pondGap: "20px",
    pondColumnGap: "20px",
  },
  {
    id: 18,
    title: "Level 18. 줄 바꿈",
    concept: "flex-wrap",
    prompt:
      "flex-wrap 속성은 요소들을 한 줄에 둘지, 여러 줄로 넘길지를 정합니다.",
    lessonContent: {
      description:
        "오 이런! 개구리들이 한 줄 위에 비좁게 앉아있네요. flex-wrap을 사용해 개구리들이 넓게 앉을 수 있도록 해보세요.",
      bullets: [
        { label: "nowrap", text: "모든 요소들을 한 줄에 정렬합니다." },
        { label: "wrap", text: "요소들을 여러 줄에 걸쳐 정렬합니다." },
        {
          label: "wrap-reverse",
          text: "요소들을 여러 줄에 걸쳐 반대로 정렬합니다.",
        },
      ],
      example: "flex-wrap: wrap;",
    },
    hint: "한 줄에 다 못 들어가면 다음 줄로 넘기는 속성입니다.",
    starterCode: `#pond {\n}`,
    requiredStyles: { "#pond": { "flex-wrap": "wrap" } },
    frogs: ["yellow", "green", "green", "green", "green", "green", "red"],
    targets: addColors(
      [
        { left: "12%", top: "10%" },
        { left: "31%", top: "10%" },
        { left: "50%", top: "10%" },
        { left: "69%", top: "10%" },
        { left: "88%", top: "10%" },
        { left: "12%", top: "58%" },
        { left: "30%", top: "58%" },
      ],
      ["yellow", "green", "green", "green", "green", "green", "red"],
    ),
    pondWidth: "480px",
    pondRowGap: "18px",
    pondGap: "20px",
    pondColumnGap: "20px",
  },
  {
    id: 19,
    title: "Level 19. 세로로 감싸기",
    concept: "flex-direction + flex-wrap",
    prompt:
      "세로 방향으로 쌓다가 공간이 부족해지면 다음 column으로 넘어가도록 만들어보세요.",
    lessonContent: {
      description:
        "flex-direction과 flex-wrap을 사용하여 개구리들이 세 개의 column에 정렬되도록 도와주세요.",
      bullets: [
        { label: "flex-direction", text: "개구리들을 세로 방향으로 쌓습니다." },
        {
          label: "flex-wrap",
          text: "세로로 쌓다가 공간이 부족하면 다음 column으로 넘어갑니다.",
        },
      ],
      example: "flex-wrap: wrap; flex-direction: column;",
    },
    hint: "column과 wrap을 함께 써야 합니다.",
    starterCode: `#pond {\n}`,
    requiredStyles: {
      "#pond": { "flex-direction": "column", "flex-wrap": "wrap" },
    },
    frogs: [
      "green",
      "green",
      "green",
      "green",
      "green",
      "red",
      "red",
      "red",
      "red",
      "red",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
    ],
    targets: addColors(
      [
        { left: "8%", top: "10%" },
        { left: "8%", top: "29%" },
        { left: "8%", top: "48%" },
        { left: "8%", top: "67%" },
        { left: "8%", top: "86%" },
        { left: "32%", top: "10%" },
        { left: "32%", top: "29%" },
        { left: "32%", top: "48%" },
        { left: "32%", top: "67%" },
        { left: "32%", top: "86%" },
        { left: "56%", top: "10%" },
        { left: "56%", top: "29%" },
        { left: "56%", top: "48%" },
        { left: "56%", top: "67%" },
        { left: "56%", top: "86%" },
      ],
      [
        "green",
        "green",
        "green",
        "green",
        "green",
        "red",
        "red",
        "red",
        "red",
        "red",
        "yellow",
        "yellow",
        "yellow",
        "yellow",
        "yellow",
      ],
    ),
    pondWidth: "320px",
    pondHeight: "470px",
    pondRowGap: "14px",
    pondGap: "20px",
    pondColumnGap: "16px",
  },
  {
    id: 20,
    title: "Level 20. shorthand로 쓰기",
    concept: "flex-flow",
    prompt:
      "flex-direction과 flex-wrap은 자주 같이 사용되기 때문에, flex-flow라는 축약 속성으로 한 번에 쓸 수 있습니다.",
    lessonContent: {
      description: "flex-flow를 사용하여 이전 단계를 반복해보세요.",
      bullets: [
        {
          label: "예시",
          text: "요소들을 가로 방향의 여러 줄에 걸쳐 정렬하려면 flex-flow: row wrap;을 사용할 수 있습니다.",
        },
        {
          label: "목표",
          text: "flex-flow를 사용해 direction과 wrap을 한 줄로 작성해보세요.",
        },
      ],
      example: "flex-flow: column wrap;",
    },
    hint: "flex-direction과 flex-wrap의 축약 속성입니다.",
    starterCode: `#pond {\n}`,
    requiredStyles: { "#pond": { "flex-flow": "column wrap" } },
    frogs: [
      "green",
      "green",
      "green",
      "green",
      "green",
      "red",
      "red",
      "red",
      "red",
      "red",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
      "yellow",
    ],
    targets: addColors(
      [
        { left: "8%", top: "10%" },
        { left: "8%", top: "29%" },
        { left: "8%", top: "48%" },
        { left: "8%", top: "67%" },
        { left: "8%", top: "86%" },
        { left: "32%", top: "10%" },
        { left: "32%", top: "29%" },
        { left: "32%", top: "48%" },
        { left: "32%", top: "67%" },
        { left: "32%", top: "86%" },
        { left: "56%", top: "10%" },
        { left: "56%", top: "29%" },
        { left: "56%", top: "48%" },
        { left: "56%", top: "67%" },
        { left: "56%", top: "86%" },
      ],
      [
        "green",
        "green",
        "green",
        "green",
        "green",
        "red",
        "red",
        "red",
        "red",
        "red",
        "yellow",
        "yellow",
        "yellow",
        "yellow",
        "yellow",
      ],
    ),
    pondWidth: "320px",
    pondHeight: "470px",
    pondRowGap: "14px",
    pondGap: "20px",
    pondColumnGap: "16px",
  },
  {
    id: 21,
    title: "Level 21. 여러 줄을 위로",
    concept: "align-content",
    prompt:
      "align-content는 여러 줄이 생겼을 때 줄 묶음 전체를 어디에 놓을지 정하는 속성입니다. 한 줄만 있을 때는 눈에 띄는 변화가 거의 없습니다.",
    lessonContent: {
      description:
        "개구리들이 연못의 사방에 퍼져 있고, 수련잎은 연못의 위쪽에 모여 있습니다. align-content를 사용하여 여러 줄의 위치를 위로 올려보세요.",
      bullets: [
        {
          label: "flex-start",
          text: "여러 줄들을 컨테이너의 위쪽에 정렬합니다.",
        },
        {
          label: "flex-end",
          text: "여러 줄들을 컨테이너의 아래쪽에 정렬합니다.",
        },
        {
          label: "center",
          text: "여러 줄들을 세로축의 가운데에 정렬합니다.",
        },
        {
          label: "space-between",
          text: "여러 줄들 사이에 동일한 간격을 둡니다.",
        },
        {
          label: "space-around",
          text: "여러 줄들 주위에 동일한 간격을 둡니다.",
        },
        { label: "stretch", text: "여러 줄들을 컨테이너에 맞도록 늘립니다." },
        {
          label: "tip",
          text: "align-content는 여러 줄 묶음의 위치를, align-items는 각 줄 안 개별 요소의 정렬을 조절합니다.",
        },
      ],
      example: "align-content: flex-start;",
    },
    hint: "wrap이 있어야 align-content가 눈에 보입니다.",
    starterCode: `#pond {\n}`,
    requiredStyles: {
      "#pond": { "flex-wrap": "wrap", "align-content": "flex-start" },
    },
    frogs: [
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
    ],
    targets: addColors(
      [
        { left: "8%", top: "8%" },
        { left: "27%", top: "8%" },
        { left: "46%", top: "8%" },
        { left: "65%", top: "8%" },
        { left: "84%", top: "8%" },
        { left: "8%", top: "26%" },
        { left: "27%", top: "26%" },
        { left: "46%", top: "26%" },
        { left: "65%", top: "26%" },
        { left: "84%", top: "26%" },
        { left: "8%", top: "44%" },
        { left: "27%", top: "44%" },
        { left: "46%", top: "44%" },
        { left: "65%", top: "44%" },
        { left: "84%", top: "44%" },
      ],
      [
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
      ],
    ),
    frogStyles: {
      all: {
        marginLeft: "8px",
      },
    },
    correctFrogStyles: {
      all: {
        marginBottom: "-4px",
        marginRight: "-4px",
      },
    },
    pondWidth: "470px",
    pondRowGap: "6px",
    pondColumnGap: "6px",
  },
  {
    id: 22,
    title: "Level 22. 여러 줄을 아래로",
    concept: "align-content",
    prompt:
      "align-content를 사용하여 여러 줄 전체를 컨테이너의 아래쪽으로 내려보세요.",
    lessonContent: {
      description:
        "이제 연못의 조류에 의해 수련잎이 아래쪽으로 떠내려갔습니다. align-content를 사용하여 여러 줄을 아래로 내려보세요.",
      bullets: [
        {
          label: "align-content",
          text: "여러 줄 전체 묶음을 아래쪽으로 내립니다.",
        },
        {
          label: "wrap",
          text: "여러 줄이 있어야 align-content의 변화가 보입니다.",
        },
      ],
      example: "align-content: end;",
    },
    hint: "align-content는 줄 전체 묶음의 위치를 바꿉니다.",
    starterCode: `#pond {\n}`,
    requiredStyles: {
      "#pond": { "flex-wrap": "wrap", "align-content": "end" },
    },
    frogs: [
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
    ],
    targets: addColors(
      [
        { left: "8%", top: "50%" },
        { left: "27%", top: "50%" },
        { left: "46%", top: "50%" },
        { left: "65%", top: "50%" },
        { left: "84%", top: "50%" },
        { left: "8%", top: "68%" },
        { left: "27%", top: "68%" },
        { left: "46%", top: "68%" },
        { left: "65%", top: "68%" },
        { left: "84%", top: "68%" },
        { left: "8%", top: "86%" },
        { left: "27%", top: "86%" },
        { left: "46%", top: "86%" },
        { left: "65%", top: "86%" },
        { left: "84%", top: "86%" },
      ],
      [
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
      ],
    ),
    frogStyles: {
      all: {
        marginLeft: "8px",
      },
    },
    correctFrogStyles: {
      all: {
        marginBottom: "13px",
        marginRight: "-4px",
      },
    },
    pondWidth: "470px",
    pondGap: "10px",
    pondColumnGap: "6px",
    pondRowGap: "6px",
  },
  {
    id: 23,
    title: "Level 23. 세로 반전과 중앙 묶기",
    concept: "direction + align-content",
    prompt:
      "세로 방향을 반대로 바꾸고, 여러 줄 묶음을 가운데로 모아서 노랑, 초록, 빨강 위치를 차례대로 맞춰보세요.",
    lessonContent: {
      description:
        "개구리들이 신나는 파티를 가졌습니다. 이제는 집으로 돌아갈 시간입니다. flex-direction과 align-content를 사용하여 개구리들을 색깔별 위치로 돌려보세요.",
      bullets: [
        {
          label: "flex-direction",
          text: "개구리 배치 방향을 세로 반전시킵니다.",
        },
        { label: "align-content", text: "여러 줄 묶음을 가운데로 모읍니다." },
      ],
      example: "flex-direction: column-reverse; align-content: center;",
    },
    hint: "column-reverse와 align-content를 같이 사용합니다.",
    starterCode: `#pond {\n}`,
    requiredStyles: {
      "#pond": {
        "flex-wrap": "wrap",
        "flex-direction": "column-reverse",
        "align-content": "center",
      },
    },
    frogs: [
      "red",
      "green",
      "green",
      "green",
      "yellow",
      "red",
      "green",
      "green",
      "green",
      "yellow",
      "red",
      "green",
      "green",
      "green",
      "yellow",
    ],
    targets: addColors(
      [
        { left: "30%", top: "10%" },
        { left: "50%", top: "10%" },
        { left: "70%", top: "10%" },
        { left: "30%", top: "29%" },
        { left: "50%", top: "29%" },
        { left: "70%", top: "29%" },
        { left: "30%", top: "48%" },
        { left: "50%", top: "48%" },
        { left: "70%", top: "48%" },
        { left: "30%", top: "67%" },
        { left: "50%", top: "67%" },
        { left: "70%", top: "67%" },
        { left: "30%", top: "86%" },
        { left: "50%", top: "86%" },
        { left: "70%", top: "86%" },
      ],
      [
        "yellow",
        "yellow",
        "yellow",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "green",
        "red",
        "red",
        "red",
      ],
    ),
    pondWidth: "470px",
    pondHeight: "480px",
    pondColumnGap: "14px",
    pondRowGap: "10px",
    conditionalFrogStyles: [
      {
        selector: "#pond",
        declarations: {
          "flex-direction": "column-reverse",
        },
        styles: {
          all: {
            marginBottom: "10px",
          },
        },
      },
    ],
    correctFrogStyles: {
      all: {
        marginBottom: "10px",
      },
    },
    correctPondLeft: "-2%",
    correctPondTransform: "translateX(-50%)",
  },
  {
    id: 24,
    title: "Level 24. 최종 보스",
    concept: "wrap-reverse + column-reverse + justify-content + align-content",
    prompt: "지금까지 배운 CSS 속성들을 모두 조합해 최종 배치를 완성해보세요.",
    lessonContent: {
      description:
        "지금까지 배운 CSS 속성들을 사용하여 개구리들이 집으로 돌아갈 수 있도록 마지막으로 도전해보세요.",
      bullets: [
        { label: "justify-content", text: "주축 정렬을 조절합니다." },
        { label: "align-items", text: "교차축 정렬을 조절합니다." },
        { label: "flex-direction", text: "정렬 방향을 바꿉니다." },
        { label: "order", text: "개별 요소의 순서를 조절합니다." },
        { label: "align-self", text: "개별 요소의 교차축 정렬을 조절합니다." },
        { label: "flex-wrap", text: "여러 줄 배치를 만듭니다." },
        { label: "flex-flow", text: "direction과 wrap을 함께 씁니다." },
        {
          label: "align-content",
          text: "여러 줄 묶음 사이 간격을 조절합니다.",
        },
      ],
      example:
        "flex-wrap: wrap-reverse; flex-direction: column-reverse; justify-content: center; align-content: space-between;",
    },
    hint: "column-reverse, wrap-reverse, justify-content, align-content를 모두 점검해보세요.",
    starterCode: `#pond {\n}`,
    requiredStyles: {
      "#pond": {
        "flex-direction": "column-reverse",
        "flex-wrap": "wrap-reverse",
        "justify-content": "center",
        "align-content": "space-between",
      },
    },
    frogs: ["red", "green", "green", "green", "green", "yellow", "yellow"],
    targets: addColors(
      [
        { left: "12%", top: "36%" },
        { left: "12%", top: "56%" },
        { left: "86%", top: "8%" },
        { left: "86%", top: "26%" },
        { left: "86%", top: "44%" },
        { left: "86%", top: "62%" },
        { left: "86%", top: "80%" },
      ],
      ["yellow", "yellow", "green", "green", "green", "green", "red"],
    ),
    pondWidth: "100%",
    pondHeight: "403px",
    pondPaddingLeft: "18px",
    pondPaddingTop: "13px",
    pondPaddingRight: "18px",
    pondGap: "18px",
  },
];
