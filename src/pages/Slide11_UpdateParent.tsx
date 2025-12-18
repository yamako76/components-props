export const Slide11_UpdateParent = () => {
  return (
    <div className="slide">
      <h1>データはどう更新される？</h1>
      <h2>親のデータを更新した場合</h2>

      <div className="info-box blue">
        <h3>親のStateが変わると...</h3>
        <ol>
          <li>親コンポーネントが再レンダリング</li>
          <li>子にも新しいPropsが渡される</li>
          <li>子コンポーネントも再レンダリング</li>
          <li>兄弟も同じPropsを受け取っていれば再レンダリング</li>
        </ol>
      </div>

      <div className="point-box">
        ポイント: データは上から下へ流れる（単方向データフロー）
      </div>
    </div>
  );
};
