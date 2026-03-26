import { WelcomeSlide, WebPillars, EverythingIsABox } from '../components/week1/0_Intro.jsx';
import { HtmlConceptLighthouse, HtmlSemantics1, HtmlBoilerplate, HtmlIntroPractice } from '../components/week1/1_1_HtmlIntro.jsx';
import { HtmlText1, HtmlVoidElements, HtmlTextEmphasis, HtmlTextEdit, HtmlText3, HtmlTextPractice } from '../components/week1/1_2_HtmlTextFormatting.jsx';
import { HtmlLinks, HtmlImages, HtmlLinkPractice } from '../components/week1/1_3_HtmlLinksImages.jsx';
import { HtmlListsBasic, HtmlListsDef, HtmlTables, HtmlListPractice } from '../components/week1/1_4_HtmlListsTables.jsx';
import { HtmlForms, HtmlFormsSelect, HtmlFormsModern, HtmlFormPractice } from '../components/week1/1_5_HtmlForms.jsx';
import { HtmlSemantics2 } from '../components/week1/1_6_HtmlSemantics.jsx';
import { CssIntro1, CssIntro2 } from '../components/week1/2_1_CssIntro.jsx';
import { CssSelectors1, CssSelectors2 } from '../components/week1/2_2_CssSelectors.jsx';
import { CssSpecificity, CssColors, CssUnits, CssLayoutVillains } from '../components/week1/2_4_CssAdvancedBasics.jsx';
import { CssVisuals1, CssVisuals2 } from '../components/week1/2_3_CssVisuals.jsx';
import { BoxModel1, BoxModel2, DisplayProperty, BoxDecoration, BoxModelPlayground } from '../components/week1/3_1_BoxModelDeepDive.jsx';
import DevToolsGuide from '../components/week1/3_2_DevToolsGuide.jsx';

import { Flexbox1, Flexbox2 } from '../components/week1/4_1_FlexboxDeepDive.jsx';
import { MissionHTML, MissionCSS } from '../components/week1/5_1_Practice.jsx';
import { WrapUp1, WrapUp2 } from '../components/week1/5_WrapUp.jsx';

export const weeklySlides = {
  1: {
    title: "WEEK 01 : HTML & CSS 기초",
    slides: [
      // Intro & Mental Model
      WelcomeSlide,
      WebPillars,
      EverythingIsABox,

      // Session 1: HTML Structure
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
      
      // Session 2: CSS Basics
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
      
      // Session 3: Box Model
      BoxModel1,
      BoxModel2,
      DisplayProperty,
      BoxDecoration,
      DevToolsGuide,
      BoxModelPlayground,

      // Session 4: Layout (Flexbox)
      Flexbox1,
      Flexbox2,
      
      // Session 5: Comprehensive Practice
      MissionHTML,
      MissionCSS,
      
      // Wrap-up
      WrapUp1,
      WrapUp2
    ]
  },
  2: {
    title: "WEEK 02 : CSS 레이아웃 & 반응형 설계",
    slides: []
  },
  3: {
    title: "WEEK 03 : JavaScript 기초 & DOM 조작",
    slides: []
  },
  4: {
    title: "WEEK 04 : JavaScript 비동기 & 데이터 흐름",
    slides: []
  },
  5: {
    title: "WEEK 05 : React 시작하기 - 컴포넌트 사고",
    slides: []
  }
};
