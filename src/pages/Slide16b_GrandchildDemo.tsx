import { GrandchildDemo } from "../components/GrandchildDemo";

export const Slide16b_GrandchildDemo = () => {
  return (
    <div className="slide slide-demo">
      <h1>親・子・孫デモ</h1>
      <p className="demo-description">
        親のデータが子を経由して孫まで渡される様子
      </p>
      <GrandchildDemo />
    </div>
  );
};
