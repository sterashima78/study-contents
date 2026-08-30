# 作図コンポーネントの利用方法

図は任意のSVG文字列ではなく、`DiagramScene` の型付きデータとして定義する。
同じ `DiagramScene` を説明表示と作図回答の初期図・模範図で共有する。

## 説明図

`DiagramView.astro` を本文の必要な位置に配置する。`WorkedExample.astro` では例題全体の `diagram` と各 `steps[].diagram` も利用できる。

```ts
import type { DiagramScene } from "../src/lib/diagram";

const triangle: DiagramScene = {
  width: 480,
  height: 300,
  ariaLabel: "三角形ABCと辺AB",
  responsive: { minWidth: 420, allowHorizontalScroll: true },
  elements: [
    { kind: "point", id: "a", x: 80, y: 240 },
    { kind: "point", id: "b", x: 400, y: 240 },
    { kind: "point", id: "c", x: 240, y: 60 },
    { kind: "polygon", points: [{ x: 80, y: 240 }, { x: 400, y: 240 }, { x: 240, y: 60 }] },
    { kind: "label", at: { x: 68, y: 260 }, text: "A" },
    { kind: "label", at: { x: 412, y: 260 }, text: "B" },
    { kind: "label", at: { x: 240, y: 45 }, text: "C" },
  ],
};
```

説明用の `DiagramView` はズームだけを提供する。小画面で図が読みづらくなる場合は横スクロールを優先する。

## 色

各図形要素は `color` にCSSの色文字列を指定できる。`#2563eb`、`rgb(...)`、`hsl(...)`、`oklch(...)`、色名などを利用できる。

```ts
const comparison: DiagramScene = {
  width: 420,
  height: 260,
  ariaLabel: "2本のグラフの比較",
  elements: [
    { kind: "functionPlot", color: "#2563eb", samples: firstSamples },
    { kind: "functionPlot", color: "oklch(62% 0.19 28)", samples: secondSamples },
  ],
};
```

`color` はSVGの `color` 属性へ渡し、実際の線や文字は `currentColor` で描画する。教材データから `style`、`stroke`、`fill`、任意SVGを直接注入しない。作図回答で模範図を重ねるときは、教材側の `color` より模範図用の固定色を優先し、回答図と模範図を区別できる状態を維持する。

## 関数グラフの計算ヘルパー

`functionPlot` の `samples` を教材ごとに手計算せず、`src/lib/diagram/math.ts` のヘルパーで数学座標から生成する。

```ts
import {
  createCartesianAxes,
  createCartesianTransform,
  createQuadraticPlot,
  type DiagramScene,
} from "../src/lib/diagram";

const transform = createCartesianTransform({
  width: 480,
  height: 320,
  xMin: -4,
  xMax: 4,
  yMin: -2,
  yMax: 10,
  padding: 28,
});

const scene: DiagramScene = {
  width: 480,
  height: 320,
  ariaLabel: "y=x² と y=2x² の比較",
  elements: [
    createCartesianAxes(transform),
    createQuadraticPlot({ transform, a: 1, color: "#2563eb" }),
    createQuadraticPlot({ transform, a: 2, color: "#c2410c" }),
  ],
};
```

`createCartesianTransform` は数学座標とSVG座標を相互変換する。`sampleFunctionPlot` は教材コード側の関数を指定点数でサンプリングし、`createQuadraticPlot` は係数 `a`、`b`、`c` から二次関数の値と表示用 `expression` を同じ入力から生成する。

`expression` は引き続き表示用メタデータであり、ブラウザでは評価しない。JSONなどの教材データに実行可能な式を保存しない。関数値が有限数にならない場合はヘルパーがエラーにするため、不連続関数などは必要に応じて区間を分割した複数の `functionPlot` として定義する。

## 作図回答

`DiagramExercise.astro` に初期図、模範図、問題で許可するツールだけを渡す。

```ts
const tools = [
  { kind: "segment", label: "線分" },
  { kind: "circle", label: "円" },
] satisfies DiagramEditorTool[];
```

学習者が追加した要素は標準で移動・削除を許可し、拡大縮小・回転は許可しない。ツールの `edit` で上書きできる。教材側の初期要素は `edit` を省略するとすべて編集不可になる。

作図データはブラウザ内でのみ保持し、再読み込み・ページ移動で破棄する。自動採点は行わず、「答えを見る」で固定色の模範図を重ねる。模範図を一度表示した後は回答図を編集できない。

## 専用記号

`kind: "symbol"` で意味を保持し、表示時に基本SVG図形へ展開する。初期セットは次の通り。

- physics: `mass`, `pulley`
- circuit: `battery`, `resistor`, `switch`, `lamp`
- chemistry: `atom`, `molecule`, `beaker`
- biology: `cell`, `nucleus`, `chromosome`

単純な記号は `src/lib/diagram/symbols.ts` に追加する。独自SVG文字列、HTML、実行可能な式は図データに保存しない。

## 関数グラフ

`functionPlot` は `expression` を実行しない。描画対象は `samples` に計算済み座標として渡す。これにより教材データから任意コードを評価しない。

数学教材では手入力した `samples` より計算ヘルパーを優先し、関数の係数・定義域と表示図が別々の値から作られないようにする。

## 検証

構造不正、未知の要素・記号、重複ID、存在しない参照、分野不整合はエラーにする。`color` は空でない256文字以内の文字列だけを受け付ける。実際のCSS色として解釈できない値はブラウザ側で無効になるが、任意のCSS宣言やSVG属性としては展開しない。

平行・垂直・角度・距離・比率・包含・順序など、基準座標が制約を満たさない場合は近似配置の対象として警告する。

JSON教材内の `diagram` / `scene` / `initialScene` / `modelAnswer` は `pnpm check:diagrams` で検証する。Astro/TypeScriptから描画するシーンは各描画コンポーネントでも検証される。
