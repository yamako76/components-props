export const Slide4_ComponentImage = () => {
  return (
    <div className="slide">
      <h1>コンポーネントのイメージ</h1>

      <div className="diagram">
        <div className="diagram-app">
          <div className="diagram-label">App（アプリ全体）</div>
          <div className="diagram-header">Header（ヘッダー）</div>
          <div className="diagram-body">
            <div className="diagram-sidebar">Sidebar</div>
            <div className="diagram-main">
              <div className="diagram-label">Main</div>
              <div className="diagram-card">Card</div>
              <div className="diagram-card">Card</div>
            </div>
          </div>
        </div>
      </div>

      <p className="note">それぞれが独立した「部品」として動作する</p>
    </div>
  );
};
