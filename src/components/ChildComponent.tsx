import { useState } from "react";

// Propsの型定義
type ChildProps = {
  count: number;
  message: string;
  onIncrement: () => void;
  onUpdateMessage: (message: string) => void;
};

// 子コンポーネント：親からPropsを受け取る
export const ChildComponent = ({
  count,
  message,
  onIncrement,
  onUpdateMessage,
}: ChildProps) => {
  // 子コンポーネント独自のState（ローカルな状態）
  const [localCount, setLocalCount] = useState(0);

  const handleLocalIncrement = () => {
    setLocalCount((prev) => prev + 1);
  };

  const handleMessageChange = () => {
    const messages = ["おはよう！", "こんにちは！", "こんばんは！", "やっほー！"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    onUpdateMessage(randomMessage);
  };

  return (
    <div className="child-component">
      <h3>子コンポーネント</h3>

      <div className="props-section">
        <h4>Propsで受け取ったデータ</h4>
        <p>
          count: <strong>{count}</strong>
        </p>
        <p>
          message: <strong>"{message}"</strong>
        </p>

        <div className="button-group">
          <button onClick={onIncrement} className="child-button">
            親のcountを更新
          </button>
          <button onClick={handleMessageChange} className="child-button">
            親のmessageを更新
          </button>
        </div>
      </div>

      <div className="local-section">
        <h4>子のローカルState</h4>
        <p>
          localCount: <strong>{localCount}</strong>
        </p>
        <button onClick={handleLocalIncrement} className="local-button">
          子のlocalCountを更新
        </button>
        <p className="note">
          ※ このボタンを押しても親・兄弟には影響しない
        </p>
      </div>
    </div>
  );
};
