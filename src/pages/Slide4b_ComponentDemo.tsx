import { ComponentDemo } from "../components/ComponentDemo";

export const Slide4b_ComponentDemo = () => {
  return (
    <div className="slide">
      <h1>コンポーネント = 再利用できる部品</h1>
      <p className="demo-description">
        1回作れば何度でも使える。Propsで中身を変えられる
      </p>
      <ComponentDemo />
    </div>
  );
};
