export const Slide12_UpdateChild = () => {
  return (
    <div className="slide">
      <h1>データはどう更新される？</h1>
      <h2>子のローカルデータを更新した場合</h2>

      <div className="info-box orange">
        <h3>子のローカルStateが変わると...</h3>
        <ol>
          <li>子コンポーネントだけが再レンダリング</li>
          <li>親には影響しない</li>
          <li>従兄弟にも影響しない</li>
        </ol>
      </div>

      <div className="point-box">
        ポイント: ローカルStateは自分だけのもの
      </div>
    </div>
  );
};
