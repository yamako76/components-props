export const Slide3_WhatIsComponent = () => {
  return (
    <div className="slide">
      <h1>コンポーネントとは？</h1>
      <h2>UIを「部品」として分割する考え方</h2>

      <div className="highlight-box">
        <strong>コンポーネント</strong> = 再利用可能なUIの部品
      </div>

      <h3>なぜ部品化するの？</h3>
      <ul>
        <li>
          <strong>再利用性</strong> - 同じUIを何度も書かなくて済む
        </li>
        <li>
          <strong>保守性</strong> - 修正が必要な箇所が明確
        </li>
        <li>
          <strong>可読性</strong> - コードが整理されて読みやすい
        </li>
      </ul>
    </div>
  );
};
