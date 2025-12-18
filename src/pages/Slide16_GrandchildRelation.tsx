export const Slide16_GrandchildRelation = () => {
  return (
    <div className="slide">
      <h1>親・子・孫の関係</h1>
      <h2>Propsは階層を超えて渡せる</h2>

      <div className="grandchild-diagram">
        <div className="gc-parent">
          <div className="gc-title">👨 親コンポーネント</div>
          <code>const message = "Hello"</code>

          <div className="gc-arrow">↓ Props</div>

          <div className="gc-child">
            <div className="gc-title">👦 子コンポーネント</div>
            <code>props.message を受け取る</code>

            <div className="gc-arrow">↓ Props</div>

            <div className="gc-grandchild">
              <div className="gc-title">👶 孫コンポーネント</div>
              <code>props.message を受け取る</code>
            </div>
          </div>
        </div>
      </div>

      <div className="point-box">
        データは上から下へ流れる（単方向データフロー）
      </div>
    </div>
  );
};
