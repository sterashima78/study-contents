# ADR 0023: 基本スタイルをレイアウトコンポーネントへ集約する

- Status: Accepted
- Date: 2026-08-29
- Related: ADR 0001, ADR 0022
- Supersedes: ADR 0022

## Context

ADR 0022 により教材固有の共有CSSは廃止され、静的な教材UIはAstroコンポーネントがscoped styleを所有する構成になった。一方で、リセット、基本フォント、背景、CSSカスタムプロパティを保持する `src/styles/global.css` は残り、`StudyPage.astro` から読み込んでいた。

この構成でも影響範囲は大幅に限定されたが、ページの基礎スタイルだけがコンポーネント外のファイルに残るため、画面の表示責務を追う際に `StudyPage.astro` と別CSSファイルの2箇所を確認する必要がある。

すべての公開ページは `StudyPage.astro` を直接または上位コンポーネント経由で利用しているため、文書ルートに必要な最低限の指定も含め、基本スタイルをレイアウトコンポーネントへ集約できる。

なお、CSSファイル名はスタイルの影響範囲を保証しない。`global.css` という名前を禁止しても、別名のCSSファイルや `:global(...)` によって同等のグローバルルールを定義できるため、ファイル名そのものをアーキテクチャ境界として扱わない。

## Decision

### 1. ページ基本スタイルは `StudyPage.astro` が所有する

ページ全体の基本表示に必要なスタイルは `src/components/ui/StudyPage.astro` に集約する。

今回の移行では、それまで使っていた `src/styles/global.css` を削除する。ただし、`global.css` というファイル名の存在・不在自体を設計ルールやCIの判定条件にはしない。

### 2. デザイントークンは `.study-page` に保持する

色、境界、サーフェス、フォーカス色などのCSSカスタムプロパティは `:root` ではなく `.study-page` に定義する。

子の教材UIコンポーネントは `.study-page` の子孫としてこれらの値を継承する。これにより、デザイントークンの有効範囲も教材レイアウト内へ限定する。

基本フォント、文字色、`font-synthesis`、`text-rendering` も `.study-page` が所有する。

### 3. 文書ルートに必要な指定だけ `StudyPage.astro` 内で `:global(...)` を使う

次のようにコンポーネント自身のDOMだけでは指定できない文書ルートのスタイルは、`StudyPage.astro` の `<style>` 内に記述する。

- `html` のスクロール挙動
- `body` の余白、最小幅、最小高さ、背景

グローバルに作用する指定は、ファイル名ではなく「どのコンポーネントがその責務を所有するか」で管理する。

### 4. 子孫要素へのリセットは `.study-page` から範囲を限定する

`box-sizing` やフォーム要素のフォント継承は、次のように `.study-page` 配下へ限定する。

- `.study-page` とその子孫の `box-sizing`
- `.study-page` 配下の `button`、`input`、`textarea`、`select` のフォント継承

サイト外や別レイアウトへ自動的に影響する汎用リセットは設けない。

### 5. 各教材UIのscoped style方針は維持する

パンくず、ヒーロー、一覧、概念カード、例題、誘導練習、実践問題、ナビゲーションなどの視覚表現は引き続き各Astroコンポーネントがscoped styleを所有する。

親コンポーネントから子コンポーネント内部のクラス構造へ依存したスタイル指定は行わない。

### 6. 動的演習の `exercise.css` は限定例外として維持する

`ExerciseSet.astro` と `PhysicsExerciseSet.astro` はブラウザ上でDOMを動的生成するため、ADR 0022で定めた `exercise.css` の例外を維持する。

ただし `exercise.css` 全体は引き続き次のルートを指定したCSS `@scope` の内側に限定する。

- `[data-exercise-set]`
- `[data-physics-exercise-set]`

この例外を他の教材UIへ拡大しない。

### 7. CIはファイル名ではなく既知のスタイル境界を検証する

`scripts/verify-component-styles.mjs` は次を検証する。

- `StudyPage.astro` が `body` の基本スタイルとデザイントークンを所有していること
- 廃止した旧共有CSSを参照していないこと
- `exercise.css` の利用先と `@scope` が限定されていること
- 主要UIコンポーネントがscoped styleを所有していること
- 旧共有レイアウトクラスを再利用していないこと

CSSファイル名から「グローバルかどうか」を推測する検査は行わない。新しいスタイル構成を追加する場合は、影響範囲と所有責務をコードレビューとADRで判断する。

PR CIとGitHub Pagesデプロイ前チェックの両方で実行する。

## Consequences

基本スタイルとページシェルの責務が `StudyPage.astro` の1箇所に集約され、表示の起点を追いやすくなる。

CSSカスタムプロパティも `.study-page` の範囲へ限定されるため、将来別レイアウトを追加した場合に意図せず同じテーマが適用されにくい。

一方、`html` と `body` への指定だけは文書ルートへ作用する必要があるため、Astroの `:global(...)` を `StudyPage.astro` 内で使用する。グローバル作用の有無はファイル名ではなくセレクタと所有責務で評価する。
