import { SimpleDemo } from "../components/SimpleDemo";

export const Slide5b_SimpleDemo = () => {
  return (
    <div className="slide">
      <h1>コンポーネントとPropsのデモ</h1>
      <p className="demo-description">
        名前を選ぶと、3つのコンポーネントすべてに反映される
      </p>
      <SimpleDemo />
    </div>
  );
};
