# ADR 0012: ADRの整合性と採番をCIで検証する

- Status: Accepted
- Date: 2026-08-29

## Context

このリポジトリでは、実装方針や教材構成の意思決定を `docs/adr/` にADRとして記録している。

ADRが増えるにつれて、番号の重複や欠番、ファイル名と見出し番号の不一致、Statusの表記揺れ、存在しないADRへの参照などが手作業では見落とされやすくなる。特に複数の変更を並行して進める場合、同じ番号のADRが別ブランチで追加される可能性がある。

これらはレビュー時だけでなく、PRのCIで機械的に検出できるようにする必要がある。

## Decision

### 1. ADRファイル名と採番を固定する

`docs/adr/` 直下のMarkdownファイルは次の形式とする。

```text
NNNN-kebab-case.md
```

番号は `0001` から始まる4桁の連番とし、重複と欠番を許可しない。

ファイル名の番号と先頭見出しの `# ADR NNNN: タイトル` の番号は一致させる。

### 2. ADRの必須メタデータを検証する

各ADRには次のメタデータを1件ずつ記載する。

```text
- Status: Accepted
- Date: YYYY-MM-DD
```

Statusは次のいずれかとする。

- Proposed
- Accepted
- Rejected
- Deprecated
- Superseded

Dateは実在する日付を `YYYY-MM-DD` 形式で記載する。

### 3. Superseded状態の参照を検証する

Statusが `Superseded` のADRには、後継ADRを次の形式で1件指定する。

```text
- Superseded by: ADR NNNN
```

Statusが `Superseded` 以外の場合は `Superseded by` を記載しない。

一方、既存の `Supersedes` は決定の一部だけを置き換える用途もあるため、参照先ADRのStatusを自動的に `Superseded` へ変更することは要求しない。

### 4. ADR参照先の存在を検証する

ADR本文中の `ADR NNNN` 形式の参照は、同じADR自身への記述を除き、`docs/adr/` に対応する番号が存在することを要求する。

これにより、削除済み・未採番・誤記されたADR番号への参照をCIで検出する。

### 5. Node.js標準APIだけで検証する

`scripts/verify-adrs.mjs` を追加し、外部の検証ライブラリやランタイム依存関係は追加しない。

`package.json` に `check:adr` を追加し、通常の `check` にも含める。

PR用GitHub ActionsではBiomeの後にADR検証を実行し、違反があればビルド前にCIを失敗させる。

## Consequences

ADR追加時の採番ミス、メタデータの不整合、存在しないADRへの参照をPR段階で検出できる。

並行ブランチで同じADR番号が使われた場合も、mainの更新を取り込んだ時点で重複または欠番として検出できる。

追加のnpm依存関係を持たないため、依存関係の更新負荷やサプライチェーン上の攻撃面は増えない。

一方、ADRのファイル命名やStatus表記を変更する場合は、検証スクリプトとこのADRを同時に更新する必要がある。
