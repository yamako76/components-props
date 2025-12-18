import { useState } from "react";
import { ChildComponent } from "./ChildComponent";
import { SiblingComponent } from "./SiblingComponent";

// 親コンポーネント：データの「持ち主」
export const ParentComponent = () => {
  // 親が持つデータ（State）
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("こんにちは！");

  // データを更新する関数
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setCount((prev) => prev - 1);
  };

  const updateMessage = (newMessage: string) => {
    setMessage(newMessage);
  };

  return (
    <div className="parent-component">
      <h2>親コンポーネント</h2>
      <p className="data-display">
        親のデータ: count = <strong>{count}</strong>
      </p>
      <p className="data-display">
        親のデータ: message = <strong>"{message}"</strong>
      </p>

      <button onClick={incrementCount} className="parent-button">
        親でカウントアップ
      </button>

      <div className="children-container">
        {/* 子コンポーネントにPropsでデータと関数を渡す */}
        <ChildComponent
          count={count}
          message={message}
          onIncrement={incrementCount}
          onUpdateMessage={updateMessage}
        />

        {/* 兄弟コンポーネント：同じ親からPropsを受け取る */}
        <SiblingComponent count={count} message={message} onDecrement={decrementCount} />
      </div>
    </div>
  );
};
