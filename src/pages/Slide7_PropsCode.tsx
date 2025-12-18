export const Slide7_PropsCode = () => {
  return (
    <div className="slide">
      <h1>Propsの基本的な使い方</h1>

      <pre className="code-block">
        <code>{`// 型定義
type GreetingProps = {
  name: string;
  age: number;
};

// 子コンポーネント
const Greeting = ({ name, age }: GreetingProps) => {
  return <p>名前: {name}、年齢: {age}歳</p>;
};

// 親コンポーネント
const App = () => {
  return <Greeting name="田中" age={25} />;
};`}</code>
      </pre>
    </div>
  );
};
