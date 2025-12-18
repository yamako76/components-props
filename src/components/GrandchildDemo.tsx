import { useState } from "react";

// 孫コンポーネント
const Grandchild = ({ message, color }: { message: string; color: string }) => {
  return (
    <div className="gc-demo-grandchild" style={{ borderColor: color }}>
      <div className="gc-demo-label" style={{ background: color }}>
        👶 孫
      </div>
      <p>
        受け取った: <strong style={{ color }}>{message}</strong>
      </p>
    </div>
  );
};

// 子コンポーネント
const Child = ({ message, color }: { message: string; color: string }) => {
  return (
    <div className="gc-demo-child">
      <div className="gc-demo-label gc-demo-label-child">👦 子</div>
      <p>
        親から受け取った: <strong>{message}</strong>
      </p>
      <div className="gc-demo-pass">↓ 孫に渡す</div>
      <Grandchild message={message} color={color} />
    </div>
  );
};

// 親コンポーネント
export const GrandchildDemo = () => {
  const [message, setMessage] = useState("こんにちは");

  const messages = [
    { text: "こんにちは", color: "#48bb78" },
    { text: "ありがとう", color: "#4299e1" },
    { text: "おめでとう", color: "#ed8936" },
  ];

  return (
    <div className="gc-demo">
      <div className="gc-demo-parent">
        <div className="gc-demo-label gc-demo-label-parent">👨 親</div>
        <div className="gc-demo-controls">
          <span>メッセージを選択:</span>
          <div className="gc-demo-buttons">
            {messages.map((m) => (
              <button
                key={m.text}
                className={`gc-demo-btn ${message === m.text ? "active" : ""}`}
                style={{
                  borderColor: m.color,
                  background: message === m.text ? m.color : "white",
                  color: message === m.text ? "white" : m.color,
                }}
                onClick={() => setMessage(m.text)}
              >
                {m.text}
              </button>
            ))}
          </div>
        </div>
        <div className="gc-demo-pass">↓ 子に渡す</div>
        <Child
          message={message}
          color={messages.find((m) => m.text === message)?.color || "#48bb78"}
        />
      </div>
      <div className="gc-demo-note">
        親で選んだメッセージが 子 → 孫 へと伝わる！
      </div>
    </div>
  );
};
