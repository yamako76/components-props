import { ParentComponent } from "../components/ParentComponent";

export const Slide10_Demo = () => {
  return (
    <div className="slide slide-demo">
      <h1>実装例：デモ</h1>
      <p className="demo-description">
        ボタンを押してデータの流れを確認しよう！
      </p>
      <ParentComponent />
    </div>
  );
};
