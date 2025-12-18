export const Slide14_Summary = () => {
  return (
    <div className="slide">
      <h1>まとめ</h1>

      <div className="summary-grid">
        <div className="info-box blue">
          <h3>コンポーネント</h3>
          <ul>
            <li>UIを部品として分割</li>
            <li>再利用性・保守性UP</li>
            <li>関数として定義</li>
          </ul>
        </div>

        <div className="info-box green">
          <h3>Props</h3>
          <ul>
            <li>親→子へのデータ受け渡し</li>
            <li>一方通行・読み取り専用</li>
            <li>関数も渡せる</li>
          </ul>
        </div>
      </div>

      <div className="info-box orange">
        <h3>データの流れ</h3>
        <p>親のState更新 → 子・兄弟も再レンダリング</p>
        <p>子のローカルState更新 → 自分だけ再レンダリング</p>
      </div>
    </div>
  );
};
