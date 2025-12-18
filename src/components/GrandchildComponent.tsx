type GrandchildProps = {
  message: string;
  level: number;
};

export const GrandchildComponent = ({ message, level }: GrandchildProps) => {
  return (
    <div className="grandchild-component">
      <h4>👶 孫コンポーネント</h4>
      <div className="grandchild-info">
        <p>
          受け取ったメッセージ: <strong>{message}</strong>
        </p>
        <p>
          階層レベル: <strong>{level}</strong>
        </p>
      </div>
      <p className="grandchild-note">
        ※ 親 → 子 → 孫 と Props が渡されてきた！
      </p>
    </div>
  );
};
