export const Slide2_Agenda = () => {
  return (
    <div className="slide">
      <h1>今日のアジェンダ</h1>
      <ol className="agenda-list">
        <li>
          <strong>コンポーネントとは？</strong>
          <span>UIの部品化という考え方</span>
        </li>
        <li>
          <strong>Propsとは？</strong>
          <span>親から子へのデータの受け渡し</span>
        </li>
        <li>
          <strong>実装例</strong>
          <span>実際にコードを見てみよう</span>
        </li>
        <li>
          <strong>データはどう更新される？</strong>
          <span>親・子・兄弟の関係</span>
        </li>
      </ol>
    </div>
  );
};
