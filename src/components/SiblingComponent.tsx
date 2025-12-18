import { useState } from "react";

// Propsの型定義
type SiblingProps = {
  count: number;
  message: string;
  onDecrement: () => void;
};

// 兄弟コンポーネント：親から同じPropsを受け取る
export const SiblingComponent = ({ count, message, onDecrement }: SiblingProps) => {
  // 兄弟独自のローカルState
  const [localValue, setLocalValue] = useState("初期値");

  const handleLocalChange = () => {
    setLocalValue(`更新: ${new Date().toLocaleTimeString()}`);
  };

  return (
    <div className="sibling-component">
      <h3>兄弟コンポーネント</h3>

      <div className="props-section">
        <h4>Propsで受け取ったデータ</h4>
        <p>
          count: <strong>{count}</strong>
        </p>
        <p>
          message: <strong>"{message}"</strong>
        </p>

        <button onClick={onDecrement} className="sibling-button">
          親のcountを減らす
        </button>
        <p className="note">
          ※ 兄弟も関数を受け取れば親を更新できる！
        </p>
      </div>

      <div className="local-section">
        <h4>兄弟のローカルState</h4>
        <p>
          localValue: <strong>"{localValue}"</strong>
        </p>
        <button onClick={handleLocalChange} className="local-button">
          兄弟のlocalValueを更新
        </button>
        <p className="note">
          ※ このボタンを押しても親・子には影響しない
        </p>
      </div>
    </div>
  );
};
