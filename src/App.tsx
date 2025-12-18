import { useState } from "react";
import { Slide1_Title } from "./pages/Slide1_Title";
import { Slide2_Agenda } from "./pages/Slide2_Agenda";
import { Slide3_WhatIsComponent } from "./pages/Slide3_WhatIsComponent";
import { Slide4_ComponentImage } from "./pages/Slide4_ComponentImage";
import { Slide4b_ComponentDemo } from "./pages/Slide4b_ComponentDemo";
import { Slide5_ComponentCode } from "./pages/Slide5_ComponentCode";
import { Slide5b_SimpleDemo } from "./pages/Slide5b_SimpleDemo";
import { Slide6_WhatIsProps } from "./pages/Slide6_WhatIsProps";
import { Slide7_PropsCode } from "./pages/Slide7_PropsCode";
import { Slide8_PropsFunction } from "./pages/Slide8_PropsFunction";
import { Slide9_DataFlow } from "./pages/Slide9_DataFlow";
import { Slide10_Demo } from "./pages/Slide10_Demo";
import { Slide11_UpdateParent } from "./pages/Slide11_UpdateParent";
import { Slide12_UpdateChild } from "./pages/Slide12_UpdateChild";
import { Slide13_Cousin } from "./pages/Slide13_Cousin";
import { Slide14_Summary } from "./pages/Slide14_Summary";
import { Slide15_End } from "./pages/Slide15_End";
import { Slide16_GrandchildRelation } from "./pages/Slide16_GrandchildRelation";
import { Slide16b_GrandchildDemo } from "./pages/Slide16b_GrandchildDemo";
import "./App.css";

const slides = [
  { component: Slide1_Title, title: "タイトル" },
  { component: Slide2_Agenda, title: "アジェンダ" },
  { component: Slide3_WhatIsComponent, title: "コンポーネントとは" },
  { component: Slide4_ComponentImage, title: "コンポーネントのイメージ" },
  { component: Slide4b_ComponentDemo, title: "コンポーネントデモ" },
  { component: Slide5_ComponentCode, title: "コンポーネントの書き方" },
  { component: Slide5b_SimpleDemo, title: "Propsデモ" },
  { component: Slide6_WhatIsProps, title: "Propsとは" },
  { component: Slide7_PropsCode, title: "Propsの使い方" },
  { component: Slide8_PropsFunction, title: "関数をPropsで渡す" },
  { component: Slide9_DataFlow, title: "データの流れ" },
  { component: Slide10_Demo, title: "総合デモ" },
  { component: Slide11_UpdateParent, title: "親のデータ更新" },
  { component: Slide12_UpdateChild, title: "子のデータ更新" },
  { component: Slide13_Cousin, title: "兄弟の関係" },
  { component: Slide16_GrandchildRelation, title: "親子孫の関係" },
  { component: Slide16b_GrandchildDemo, title: "親子孫デモ" },
  { component: Slide14_Summary, title: "まとめ" },
  { component: Slide15_End, title: "終わり" },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === " ") {
      goNext();
    } else if (e.key === "ArrowLeft") {
      goPrev();
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="app" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="slide-container">
        <CurrentSlideComponent />
      </div>

      <div className="navigation">
        <button onClick={goPrev} disabled={currentSlide === 0}>
          ← 前へ
        </button>
        <span className="page-indicator">
          {currentSlide + 1} / {slides.length}
        </span>
        <button onClick={goNext} disabled={currentSlide === slides.length - 1}>
          次へ →
        </button>
      </div>

      <div className="slide-list">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slide-thumb ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
