// ボタンコンポーネント（部品）
const MyButton = ({ label, color }: { label: string; color: string }) => {
  return (
    <button
      className="demo-btn"
      style={{ background: color }}
      onClick={() => alert(`${label}がクリックされました！`)}
    >
      {label}
    </button>
  );
};

// カードコンポーネント（部品）
const MyCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="demo-card">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

// バッジコンポーネント（部品）
const MyBadge = ({ text, color }: { text: string; color: string }) => {
  return (
    <span className="demo-badge" style={{ background: color }}>
      {text}
    </span>
  );
};

export const ComponentDemo = () => {
  return (
    <div className="component-demo">
      <div className="component-section">
        <div className="component-label">
          <code>&lt;MyButton /&gt;</code>
          <span>ボタン部品</span>
        </div>
        <div className="component-examples">
          <MyButton label="保存" color="#48bb78" />
          <MyButton label="削除" color="#f56565" />
          <MyButton label="編集" color="#4299e1" />
        </div>
      </div>

      <div className="component-section">
        <div className="component-label">
          <code>&lt;MyCard /&gt;</code>
          <span>カード部品</span>
        </div>
        <div className="component-examples cards">
          <MyCard title="React" description="UIライブラリ" />
          <MyCard title="TypeScript" description="型付きJS" />
        </div>
      </div>

      <div className="component-section">
        <div className="component-label">
          <code>&lt;MyBadge /&gt;</code>
          <span>バッジ部品</span>
        </div>
        <div className="component-examples">
          <MyBadge text="新着" color="#ed8936" />
          <MyBadge text="人気" color="#e53e3e" />
          <MyBadge text="おすすめ" color="#667eea" />
          <MyBadge text="無料" color="#38a169" />
        </div>
      </div>

      <div className="component-point">
        同じ部品を使い回せる → コードがスッキリ！
      </div>
    </div>
  );
};
