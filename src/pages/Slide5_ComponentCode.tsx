export const Slide5_ComponentCode = () => {
  return (
    <div className="slide">
      <h1>コンポーネントの書き方</h1>

      <pre className="code-block">
        <code>{`// 関数コンポーネント
const Greeting = () => {
  return <h1>こんにちは！</h1>;
};

// アプリで使う
const App = () => {
  return (
    <div>
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  );
};`}</code>
      </pre>

      <div className="point-box">
        同じコンポーネントを何度でも使える！
      </div>
    </div>
  );
};
