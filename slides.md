---
marp: true
theme: default
paginate: true
backgroundColor: #ffffff
style: |
  section {
    font-family: 'Hiragino Sans', 'Meiryo', sans-serif;
    font-size: 28px;
    padding: 50px;
    background-color: #ffffff;
    color: #333333;
  }
  h1 {
    color: #667eea;
    font-size: 48px;
    margin-bottom: 24px;
  }
  h2 {
    color: #764ba2;
    font-size: 36px;
    margin-bottom: 20px;
  }
  h3 {
    color: #333;
    font-size: 28px;
  }
  h4 {
    color: #555;
    font-size: 24px;
  }
  p, li {
    font-size: 24px;
    line-height: 1.8;
    color: #333333;
  }
  code {
    background: #f5f5f5;
    color: #e91e63;
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 22px;
    border: 1px solid #ddd;
  }
  pre {
    background: #f8f8f8;
    border-radius: 12px;
    padding: 20px;
    font-size: 18px;
    line-height: 1.5;
    border: 2px solid #e0e0e0;
  }
  pre code {
    background: transparent;
    color: #333333;
    padding: 0;
    border: none;
  }
  ul {
    margin-left: 0;
  }
  li {
    margin-bottom: 12px;
  }
  strong {
    color: #667eea;
  }
  table {
    font-size: 22px;
  }
  th {
    background: #667eea;
    color: white;
  }
  td {
    background: #f9f9f9;
  }
  .highlight {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 24px 32px;
    border-radius: 16px;
    font-size: 26px;
    margin: 20px 0;
  }
  .highlight strong {
    color: white;
  }
  .box-blue {
    background: #e3f2fd;
    padding: 24px;
    border-radius: 12px;
    border-left: 6px solid #2196f3;
    margin: 16px 0;
    color: #333;
  }
  .box-blue strong {
    color: #1565c0;
  }
  .box-green {
    background: #e8f5e9;
    padding: 24px;
    border-radius: 12px;
    border-left: 6px solid #4caf50;
    margin: 16px 0;
    color: #333;
  }
  .box-green strong {
    color: #2e7d32;
  }
  .box-orange {
    background: #fff3e0;
    padding: 24px;
    border-radius: 12px;
    border-left: 6px solid #ff9800;
    margin: 16px 0;
    color: #333;
  }
  .box-orange strong {
    color: #e65100;
  }
  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  .small-code pre {
    font-size: 16px;
  }
---

# モダンフロントエンド勉強会

## コンポーネントとProps

---

# 今日のアジェンダ

1. **コンポーネントとは？** - UIの部品化という考え方

2. **Propsとは？** - 親から子へのデータの受け渡し

3. **実装例** - 実際にコードを見てみよう

4. **データはどう更新される？** - 親・子・従兄弟の関係

---

# コンポーネントとは？

## UIを「部品」として分割する考え方

<div class="highlight">

**コンポーネント** = 再利用可能なUIの部品

</div>

**なぜ部品化するの？**

- **再利用性** - 同じUIを何度も書かなくて済む
- **保守性** - 修正が必要な箇所が明確
- **可読性** - コードが整理されて読みやすい

---

# コンポーネントのイメージ

```
+-----------------------------------+
|         App（アプリ全体）          |
|  +-----------------------------+  |
|  |     Header（ヘッダー）       |  |
|  +-----------------------------+  |
|  +----------+  +--------------+   |
|  | Sidebar  |  |    Main      |   |
|  |          |  |  +--------+  |   |
|  |          |  |  | Card   |  |   |
|  |          |  |  +--------+  |   |
|  |          |  |  +--------+  |   |
|  |          |  |  | Card   |  |   |
|  +----------+  |  +--------+  |   |
|                +--------------+   |
+-----------------------------------+
```

---

# コンポーネントの書き方

```tsx
// 関数コンポーネント
const Greeting = () => {
  return <h1>こんにちは！</h1>;
};

// アプリで使う
const App = () => {
  return (
    <div>
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  );
};
```

**同じコンポーネントを何度でも使える！**

---

# Propsとは？

## 親から子へデータを渡す仕組み

<div class="highlight">

**Props** = Properties（プロパティ）の略

親コンポーネントから子コンポーネントへの「引数」のようなもの

</div>

**Propsの特徴**

- **一方通行** - 親 → 子 の方向にのみ流れる
- **読み取り専用** - 子は受け取ったPropsを変更できない

---

# Propsの基本的な使い方

<div class="small-code">

```tsx
// 型定義
type GreetingProps = {
  name: string;
  age: number;
};

// 子コンポーネント
const Greeting = ({ name, age }: GreetingProps) => {
  return (
    <p>名前: {name}、年齢: {age}歳</p>
  );
};

// 親コンポーネント
const App = () => {
  return <Greeting name="田中" age={25} />;
};
```

</div>

---

# 関数もPropsで渡せる！

<div class="small-code">

```tsx
type ButtonProps = {
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
};
```

</div>

**子から親の処理を呼び出せる！**

---

# データの流れ

```
+---------------------------------+
|        親コンポーネント          |
|                                 |
|  const [count, setCount] = ...  |
|                                 |
|         ↓ Props で渡す          |
|    +----------------------+     |
|    |  count={count}       |     |
|    |  onIncrement={...}   |     |
|    +----------------------+     |
|              ↓                  |
|  +---------------------------+  |
|  |     子コンポーネント       |  |
|  |  - Propsを受け取って表示   |  |
|  |  - 関数を呼んで親を更新    |  |
|  +---------------------------+  |
+---------------------------------+
```

---

# 実装例：親コンポーネント

<div class="small-code">

```tsx
const ParentComponent = () => {
  // 親が持つState
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("こんにちは！");

  const incrementCount = () => setCount(prev => prev + 1);

  return (
    <div>
      <p>count = {count}</p>
      <ChildComponent
        count={count}
        message={message}
        onIncrement={incrementCount}
      />
    </div>
  );
};
```

</div>

---

# 実装例：子コンポーネント

<div class="small-code">

```tsx
type ChildProps = {
  count: number;
  message: string;
  onIncrement: () => void;
};

const ChildComponent = ({ count, onIncrement }: ChildProps) => {
  const [localCount, setLocalCount] = useState(0);

  return (
    <div>
      <p>親のcount: {count}</p>
      <button onClick={onIncrement}>親のcountを+1</button>
      <p>子のlocalCount: {localCount}</p>
      <button onClick={() => setLocalCount(p => p + 1)}>子を+1</button>
    </div>
  );
};
```

</div>

---

# データはどう更新される？

## 親のデータを更新した場合

<div class="box-blue">

**親のStateが変わると...**

1. 親コンポーネントが再レンダリング
2. 子にも新しいPropsが渡される
3. 子コンポーネントも再レンダリング
4. 従兄弟も同じPropsを受け取っていれば再レンダリング

</div>

**ポイント**: データは上から下へ流れる（単方向データフロー）

---

# データはどう更新される？

## 子のローカルデータを更新した場合

<div class="box-orange">

**子のローカルStateが変わると...**

1. 子コンポーネントだけが再レンダリング
2. 親には影響しない
3. 従兄弟にも影響しない

</div>

**ポイント**: ローカルStateは自分だけのもの

---

# 従兄弟コンポーネントの関係

```
+-------------------------------------+
|          親コンポーネント            |
|       count, message (State)        |
|                                     |
|   +-----------+   +-----------+     |
|   |    子     |   |  従兄弟   |     |
|   |           |   |           |     |
|   | Props受取 |   | Props受取 |     |
|   | 親を更新可 |   |  表示のみ |     |
|   |           |   |           |     |
|   |localCount |   |localValue |     |
|   |(独自State)|   |(独自State)|     |
|   +-----------+   +-----------+     |
|                                     |
| * 子が親を更新 → 従兄弟も再レンダリング |
+-------------------------------------+
```

---

# まとめ

<div class="columns">
<div class="box-blue">

**コンポーネント**

- UIを部品として分割
- 再利用性・保守性UP
- 関数として定義

</div>
<div class="box-green">

**Props**

- 親→子へのデータ受け渡し
- 一方通行・読み取り専用
- 関数も渡せる

</div>
</div>

<div class="box-orange">

**データの流れ**: 親のState更新 → 子・従兄弟も再レンダリング

</div>

---

# 実際に動かしてみよう！

```bash
npm run dev
```

ブラウザで確認しながら、ボタンを押してデータの流れを体験！

| ボタン | 影響範囲 |
|--------|----------|
| 親のボタン | 全体に影響 |
| 子の「親を更新」ボタン | 全体に影響 |
| 子の「ローカル」ボタン | 子だけ影響 |
| 従兄弟のボタン | 従兄弟だけ影響 |

---

# 補足：なぜ単方向データフロー？

<div class="highlight">

**双方向だと何が問題？**

- どこでデータが変わったか追跡が難しい
- 予期しない更新が起きやすい
- デバッグが困難

</div>

**単方向のメリット**

- データの流れが予測可能
- バグの原因を特定しやすい
- コードの可読性が高い

---

# 次のステップ

1. **状態管理ライブラリ** - Redux, Zustand, Jotai など

2. **Context API** - Propsバケツリレーの解消

3. **カスタムフック** - ロジックの再利用

---

# ありがとうございました！

## 質問があればどうぞ！
