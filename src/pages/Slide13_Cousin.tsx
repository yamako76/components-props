export const Slide13_Cousin = () => {
  return (
    <div className="slide">
      <h1>兄弟コンポーネントの関係</h1>

      <div className="cousin-diagram">
        <div className="cousin-parent">
          <div className="cousin-title">親コンポーネント</div>
          <code>count, message (State)</code>

          <div className="cousin-children">
            <div className="cousin-box child">
              <strong>子A</strong>
              <ul>
                <li>Props受取</li>
                <li>親を更新可</li>
                <li>localCount (独自State)</li>
              </ul>
            </div>
            <div className="cousin-box sibling">
              <strong>子B（兄弟）</strong>
              <ul>
                <li>Props受取</li>
                <li>表示のみ</li>
                <li>localValue (独自State)</li>
              </ul>
            </div>
          </div>

          <p className="cousin-note">
            ※ 子Aが親を更新 → 兄弟の子Bも再レンダリング
          </p>
        </div>
      </div>
    </div>
  );
};
