import {
  WelcomeSlide,
  WebPillars,
  EverythingIsABox,
} from "../components/week1/0_Intro.jsx";
import {
  HtmlConceptLighthouse,
  HtmlSemantics1,
  HtmlBoilerplate,
  HtmlIntroPractice,
} from "../components/week1/1_1_HtmlIntro.jsx";
import {
  HtmlText1,
  HtmlVoidElements,
  HtmlTextEmphasis,
  HtmlTextEdit,
  HtmlText3,
  HtmlTextPractice,
} from "../components/week1/1_2_HtmlTextFormatting.jsx";
import {
  HtmlLinks,
  HtmlImages,
  HtmlLinkPractice,
} from "../components/week1/1_3_HtmlLinksImages.jsx";
import {
  HtmlListsBasic,
  HtmlListsDef,
  HtmlTables,
  HtmlListPractice,
} from "../components/week1/1_4_HtmlListsTables.jsx";
import {
  HtmlForms,
  HtmlFormsSelect,
  HtmlFormsModern,
  HtmlFormPractice,
} from "../components/week1/1_5_HtmlForms.jsx";
import { HtmlSemantics2 } from "../components/week1/1_6_HtmlSemantics.jsx";
import { CssIntro1, CssIntro2 } from "../components/week1/2_1_CssIntro.jsx";
import {
  CssSelectors1,
  CssSelectors2,
} from "../components/week1/2_2_CssSelectors.jsx";
import {
  CssSpecificity,
  CssColors,
  CssUnits,
  CssLayoutVillains,
} from "../components/week1/2_4_CssAdvancedBasics.jsx";
import {
  CssVisuals1,
  CssVisuals2,
} from "../components/week1/2_3_CssVisuals.jsx";
import {
  BoxModel1,
  BoxModel2,
  DisplayProperty,
  BoxDecoration,
  BoxModelPlayground,
} from "../components/week1/3_1_BoxModelDeepDive.jsx";
import DevToolsGuide from "../components/week1/3_2_DevToolsGuide.jsx";
import {
  Flexbox1,
  Flexbox2,
} from "../components/week1/4_1_FlexboxDeepDive.jsx";
import { MissionHTML, MissionCSS } from "../components/week1/5_1_Practice.jsx";
import { WrapUp1, WrapUp2 } from "../components/week1/5_WrapUp.jsx";
import { Week4Welcome } from "../components/week4/0_Intro.jsx";
import {
  Week4Goals,
  AsyncConcept,
  CallStackSyncExample,
  EventLoopSetTimeoutExample,
  PromiseAsyncAwait,
  FetchJsonFlow,
  ArrayMethodsDataTransform,
  DashboardDataFlow,
  AsyncLionDemo,
  Week4MissionBriefing,
  Week4WrapUp,
} from "../components/week4/1_AsyncDataFlow.jsx";

import { Week2Welcome, Week2Goals } from "../components/week2/0_Intro.jsx";
import {
  AssignmentReviewIntro,
  AssignmentReviewBuildFlow,
  AssignmentReviewStep1,
  AssignmentReviewStep2,
  AssignmentReviewStep3,
  AssignmentReviewStep4,
} from "../components/week2/1_1_AssignmentReview.jsx";
import { froggyLevelSlides } from "../components/week2/1_2_EmbeddedFroggy.jsx";
import {
  GridConceptPractice,
  PositionConceptPractice,
  MediaQueryConceptPractice,
  TransformConceptPractice,
} from "../components/week2/2_1_CssConceptPractice.jsx";
import {
  Week2Mission,
  Week2CodeStarter,
} from "../components/week2/3_1_Mission.jsx";
import {
  Week2WrapUpSummary,
  Week2NextSession,
} from "../components/week2/4_1_WrapUp.jsx";

// Week 3 imports
import {
  Week3Welcome,
  Week3Goals,
  WhyJavaScript,
} from "../components/week3/0_Intro.jsx";
import {
  VariablesConcept,
  VariablesLive,
  DataTypes,
  FunctionsIntro,
  FunctionsLive,
  ArraysObjects,
  ArraysLive,
} from "../components/week3/1_JS_Basics.jsx";
import {
  WhatIsDOM,
  SelectingElements,
  DOMPlaygroundSlide,
  ModifyingDOM,
  DOMPractice,
} from "../components/week3/2_DOM_Manipulation.jsx";
import {
  WhatAreEvents,
  EventVisualizer,
  AddEventListenerAnatomy,
  EventPracticeLive,
} from "../components/week3/3_Event_Handling.jsx";
import {
  StateConceptIntro,
  StateToUIFlow,
  LionListDemo,
} from "../components/week3/4_State_to_UI.jsx";
import {
  MissionBriefing,
  MissionCodeStarter,
  Week3WrapUp,
} from "../components/week3/5_MissionWrapUp.jsx";

export const weeklySlides = {
  1: {
    title: "WEEK 01 : HTML & CSS 기초",
    slides: [
      WelcomeSlide,
      WebPillars,
      EverythingIsABox,
      HtmlConceptLighthouse,
      HtmlSemantics1,
      HtmlBoilerplate,
      HtmlIntroPractice,
      HtmlText1,
      HtmlVoidElements,
      HtmlTextEmphasis,
      HtmlTextEdit,
      HtmlText3,
      HtmlTextPractice,
      HtmlLinks,
      HtmlImages,
      HtmlLinkPractice,
      HtmlListsBasic,
      HtmlListsDef,
      HtmlTables,
      HtmlListPractice,
      HtmlForms,
      HtmlFormsSelect,
      HtmlFormsModern,
      HtmlFormPractice,
      HtmlSemantics2,
      CssIntro1,
      CssIntro2,
      CssSelectors1,
      CssSelectors2,
      CssSpecificity,
      CssColors,
      CssUnits,
      CssLayoutVillains,
      CssVisuals1,
      CssVisuals2,
      BoxModel1,
      BoxModel2,
      DisplayProperty,
      BoxDecoration,
      DevToolsGuide,
      BoxModelPlayground,
      Flexbox1,
      Flexbox2,
      MissionHTML,
      MissionCSS,
      WrapUp1,
      WrapUp2,
    ],
  },
  2: {
    title: "WEEK 02 : CSS 레이아웃 & 반응형 설계",
    slides: [
      Week2Welcome,
      Week2Goals,
      AssignmentReviewIntro,
      AssignmentReviewBuildFlow,
      AssignmentReviewStep1,
      AssignmentReviewStep2,
      AssignmentReviewStep3,
      AssignmentReviewStep4,
      ...froggyLevelSlides,
      GridConceptPractice,
      PositionConceptPractice,
      MediaQueryConceptPractice,
      TransformConceptPractice,
      Week2Mission,
      Week2CodeStarter,
      Week2WrapUpSummary,
      Week2NextSession,
    ],
  },
  3: {
    title: "WEEK 03 : JavaScript 기초 & DOM 조작",
    slides: [
      // 섹션 0: 인트로
      Week3Welcome,
      Week3Goals,
      WhyJavaScript,
      // 섹션 1: JS 기초
      VariablesConcept,
      VariablesLive,
      DataTypes,
      FunctionsIntro,
      FunctionsLive,
      ArraysObjects,
      ArraysLive,
      // 섹션 2: DOM 조작
      WhatIsDOM,
      SelectingElements,
      DOMPlaygroundSlide,
      ModifyingDOM,
      DOMPractice,
      // 섹션 3: 이벤트 처리
      WhatAreEvents,
      EventVisualizer,
      AddEventListenerAnatomy,
      EventPracticeLive,
      // 섹션 4: 상태 → 화면
      StateConceptIntro,
      StateToUIFlow,
      LionListDemo,
      // 섹션 5: 미션 & 마무리
      MissionBriefing,
      MissionCodeStarter,
      Week3WrapUp,
    ],
  },
  4: {
    title: "WEEK 04 : JavaScript 비동기 & 데이터 흐름",
    slides: [
      Week4Welcome,
      Week4Goals,
      AsyncConcept,
      CallStackSyncExample,
      EventLoopSetTimeoutExample,
      PromiseAsyncAwait,
      FetchJsonFlow,
      ArrayMethodsDataTransform,
      DashboardDataFlow,
      AsyncLionDemo,
      Week4MissionBriefing,
      Week4WrapUp,
    ],
  },
  5: {
    title: "WEEK 05 : React 시작하기 - 컴포넌트 사고",
    slides: [],
  },
};
