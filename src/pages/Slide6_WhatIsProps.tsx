export const Slide6_WhatIsProps = () => {
  return (
    <div className="slide">
      <h1>Propsとは？</h1>
      <h2>親から子へデータを渡す仕組み</h2>

      <div className="highlight-box">
        <strong>Props</strong> = Properties（プロパティ）の略
        <br />
        親コンポーネントから子コンポーネントへの「引数」のようなもの
      </div>

      <h3>Propsの特徴</h3>
      <ul>
        <li>
          <strong>一方通行</strong> - 親 → 子 の方向にのみ流れる
        </li>
        <li>
          <strong>読み取り専用</strong> - 子は受け取ったPropsを変更できない
        </li>
      </ul>
    </div>
  );
};
