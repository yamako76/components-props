export const Slide8_PropsFunction = () => {
  return (
    <div className="slide">
      <h1>関数もPropsで渡せる！</h1>

      <pre className="code-block">
        <code>{`type ButtonProps = {
  label: string;
  onClick: () => void;  // 関数の型
};

const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};

const App = () => {
  const handleClick = () => {
    alert('クリックされました！');
  };
  return <Button label="押してね" onClick={handleClick} />;
};`}</code>
      </pre>

      <div className="point-box">子から親の処理を呼び出せる！</div>
    </div>
  );
};
