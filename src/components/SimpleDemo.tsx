import { useState } from "react";

// Propsの型定義
type GreetingProps = {
  name: string;
  color: string;
};

// 子コンポーネント：Propsを受け取って表示
const Greeting = ({ name, color }: GreetingProps) => {
  return (
    <div className="greeting-card" style={{ borderColor: color }}>
      <span className="greeting-icon" style={{ background: color }}>
        👋
      </span>
      <p>
        こんにちは、<strong style={{ color }}>{name}</strong>さん！
      </p>
    </div>
  );
};

// 親コンポーネント：データを持ち、子に渡す
export const SimpleDemo = () => {
  const [name, setName] = useState("田中");

  const names = ["田中", "佐藤", "鈴木", "山田"];

  return (
    <div className="simple-demo">
      <div className="demo-controls">
        <label>名前を選択：</label>
        <div className="name-buttons">
          {names.map((n) => (
            <button
              key={n}
              className={`name-btn ${name === n ? "active" : ""}`}
              onClick={() => setName(n)}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      <div className="demo-arrow">
        <span>↓</span>
        <code>name="{name}"</code>
        <span>をPropsで渡す</span>
      </div>

      <div className="demo-components">
        <Greeting name={name} color="#4299e1" />
        <Greeting name={name} color="#48bb78" />
        <Greeting name={name} color="#ed8936" />
      </div>

      <p className="demo-note">
        ↑ 同じコンポーネントを3回使用。Propsで色を変えている
      </p>
    </div>
  );
};
