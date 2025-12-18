import { useState } from "react";

// Propsの型定義
type CousinProps = {
  count: number;
  message: string;
};

// 従兄弟コンポーネント：親から同じPropsを受け取る
export const CousinComponent = ({ count, message }: CousinProps) => {
  // 従兄弟独自のローカルState
  const [localValue, setLocalValue] = useState("初期値");

  const handleLocalChange = () => {
    setLocalValue(`更新: ${new Date().toLocaleTimeString()}`);
  };

  return (
    <div className="cousin-component">
      <h3>従兄弟コンポーネント</h3>

      <div className="props-section">
        <h4>Propsで受け取ったデータ</h4>
        <p>
          count: <strong>{count}</strong>
        </p>
        <p>
          message: <strong>"{message}"</strong>
        </p>
        <p className="note">
          ※ 子コンポーネントが親のデータを更新すると、
          <br />
          従兄弟も自動的に再レンダリングされる！
        </p>
      </div>

      <div className="local-section">
        <h4>従兄弟のローカルState</h4>
        <p>
          localValue: <strong>"{localValue}"</strong>
        </p>
        <button onClick={handleLocalChange} className="local-button">
          従兄弟のlocalValueを更新
        </button>
        <p className="note">
          ※ このボタンを押しても親・子には影響しない
        </p>
      </div>
    </div>
  );
};
