# ADR 0061: 長い数式は親レイアウトを広げず横スクロールで表示する

- Status: Accepted
- Date: 2026-08-31
- Related: ADR 0022, ADR 0040

## Context

モバイル幅の教材ページで、内分点・外分点など横に長い数式がカードや例題の表示領域を突き抜ける場合がある。

ADR 0040で導入した `StaticMath.astro` はブロック数式に `overflow-x: auto` を指定しているが、数式を包むGrid itemやGrid track側がコンテンツ固有幅を保持すると、子のスクロールコンテナーを100%幅にしても親要素自体が数式の内容幅まで広がる場合がある。結果として数式部分だけではなくページ全体に横スクロールや右側の余白が発生する。

数式は通常の文章と異なり、演算子・分数・括弧などの位置関係が意味理解に影響する。画面幅に合わせて任意の位置で折り返すより、式の一行構造を保ったまま必要時だけ数式領域を横方向へスクロールできる方が教材として読みやすい。

## Decision

### 1. ブロック数式は表示領域内に収まるスクロールコンテナーにする

`StaticMath.astro` のブロック表示に `width: 100%`、`min-width: 0`、`max-width: 100%` を指定し、横方向のはみ出しを `overflow-x: auto` で扱う。

数式自体は `white-space: nowrap` とし、式の途中で画面都合の改行を行わない。内容が収まる場合は通常表示し、収まらない場合だけ横スクロールを利用できるようにする。

### 2. 数式を包む要素とGrid trackも親幅を超えないようにする

`ConceptCard.astro` では次を必須とする。

- `.concept-card` 自体を `min-width: 0`、`max-width: 100%` にして、親Grid内でコンテンツ固有幅より小さく縮められるようにする。
- `.formulas` は `grid-template-columns: minmax(0, 1fr)` とし、Gridの自動最小幅が長い数式のmin-content幅を採用しないようにする。
- `.formulas` と各 `.formula` / `.formula-plain` は `width: 100%`、`min-width: 0`、`max-width: 100%` とし、ラッパー自身が内部数式の幅まで拡大しないようにする。
- MathLive数式の外側 `.formula` は `overflow: hidden` とし、実際の横スクロールは内側の `StaticMath` に限定する。

`WorkedExample.astro` では既存の `grid-template-columns: 1.7rem minmax(0, 1fr)` と `.expression { min-width: 0; max-width: 100%; overflow-x: auto; }` を維持する。

子のスクロールコンテナーだけに `max-width: 100%` を指定しても、祖先のGrid trackがmin-content幅で拡大すればページ全体の横幅を押し広げるため、Grid trackとラッパーの両方で縮小可能性を保証する。

### 3. プレーンテキスト数式にも同じ横スクロール方針を適用する

MathLive静的レンダリングを使わない数式についても、数式専用の表示領域では `overflow-x: auto` と `white-space: nowrap` を使う。

`ConceptCard.astro` ではプレーンテキスト数式へ `formula-plain` クラスを付ける。`WorkedExample.astro` では `expression` を横スクロール可能にする。

### 4. 通常の説明文は従来どおり折り返す

横スクロールは数式専用領域に限定する。例題の説明文や注釈など文章コンテンツには適用せず、従来どおり画面幅に合わせて折り返す。

### 5. 外部依存関係を追加しない

CSSの既存標準機能だけで対応し、新しいライブラリ、外部CDN、外部APIは追加しない。MathLiveを含む依存関係のバージョンも今回の修正では変更しない。

公開リポジトリに秘密情報、個人情報、認証情報を追加しない。

## Consequences

長い数式でも教材カードや例題全体の横幅を押し広げず、モバイル端末では数式部分だけを横にスクロールして確認できる。ページ全体に不要な横方向の余白が生じることを防ぎ、数式の一行構造も維持できる。

一方、長い式では横方向の操作が必要になる。通常の文章まで横スクロールにはせず、対象を数式専用領域に限定する。

## Validation

- モバイル幅で内分点・外分点など長い数式がカード外へ突き抜けないこと。
- 数式のラッパーおよびカードがビューポート由来の親幅より広がらず、ページ全体に横スクロールや右側余白を発生させないこと。
- 長いブロック数式を数式領域内で横方向へスクロールして末尾まで確認できること。
- `ConceptCard` のプレーンテキスト数式も横スクロールできること。
- `WorkedExample` の式だけが横スクロールし、説明文は通常どおり折り返すこと。
- `pnpm check:component-styles` でGrid trackと数式ラッパーの幅制約を検証すること。
- `pnpm check:adr` でADRの採番・Status・参照整合性が成功すること。
- `pnpm check` と `pnpm build` を含むCIが成功すること。
- `package.json` と `pnpm-lock.yaml` を変更していないこと。
