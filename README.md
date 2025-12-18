# モダンフロントエンド勉強会（コンポーネントとProps）

## コンポーネントとは？

UIを「部品」として分割する考え方です。

- **再利用性**: 同じUIを何度も書かなくて済む
- **保守性**: 修正が必要な箇所が明確
- **可読性**: コードが整理されて読みやすい

```tsx
const Greeting = () => {
  return <h1>こんにちは！</h1>;
};
```

## Propsとは？

親コンポーネントから子コンポーネントへデータを渡す仕組みです。

- **一方通行**: 親 → 子 の方向にのみ流れる
- **読み取り専用**: 子は受け取ったPropsを変更できない
- **関数も渡せる**: 子から親の処理を呼び出せる

```tsx
type GreetingProps = {
  name: string;
};

const Greeting = ({ name }: GreetingProps) => {
  return <h1>こんにちは、{name}さん！</h1>;
};

// 使い方
<Greeting name="田中" />
```

## 実装例

このプロジェクトでは、親・子・従兄弟の3つのコンポーネントを使って、Propsとデータの流れを学べます。

### ファイル構成

```
src/
├── App.tsx                      # アプリのエントリーポイント
├── App.css                      # スタイル
└── components/
    ├── ParentComponent.tsx      # 親コンポーネント（データの持ち主）
    ├── ChildComponent.tsx       # 子コンポーネント
    └── CousinComponent.tsx      # 従兄弟コンポーネント
```

### 起動方法

```bash
npm install
npm run dev
```

## データはどう更新される？

### 親のデータ

親のStateが変わると、子・従兄弟すべてが再レンダリングされます。

```
親のState更新 → 子も従兄弟も再レンダリング
```

### 子のデータ

子のローカルStateが変わると、子だけが再レンダリングされます。

```
子のローカルState更新 → 子だけ再レンダリング（親・従兄弟に影響なし）
```

### 従兄弟はどうなる？

- 親のデータが更新されると、従兄弟も新しいPropsを受け取って再レンダリングされる
- 子のローカルStateが更新されても、従兄弟には影響しない

## 発表資料

Marp形式の発表資料は `slides.md` にあります。

### 資料の表示方法

1. VS Codeの場合: [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) 拡張機能をインストール
2. プレビューを開く（Ctrl+Shift+V または Cmd+Shift+V）

### PDFへの書き出し

VS Codeの場合、コマンドパレットから「Marp: Export Slide Deck」を選択
