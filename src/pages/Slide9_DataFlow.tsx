export const Slide9_DataFlow = () => {
  return (
    <div className="slide">
      <h1>データの流れ</h1>

      <div className="flow-diagram">
        <div className="flow-parent">
          <div className="flow-title">親コンポーネント</div>
          <code>const [count, setCount] = useState(0)</code>

          <div className="flow-arrow">↓ Props で渡す</div>

          <div className="flow-props">
            <code>count=&#123;count&#125;</code>
            <code>onIncrement=&#123;...&#125;</code>
          </div>

          <div className="flow-arrow">↓</div>

          <div className="flow-child">
            <div className="flow-title">子コンポーネント</div>
            <ul>
              <li>Propsを受け取って表示</li>
              <li>関数を呼んで親を更新</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
