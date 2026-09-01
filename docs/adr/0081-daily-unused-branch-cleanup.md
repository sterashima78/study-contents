# ADR 0081: open PRに関連しない非保護ブランチを毎日自動削除する

- Status: Accepted
- Date: 2026-09-01
- Supersedes: ADR 0080
- Related: ADR 0012

## Context

ADR 0080では、30日以上未更新かつマージ済みの作業ブランチだけを週次で削除する方針を採用した。しかし、マージ済みという条件では、PRを作らずに中断された作業ブランチや、不要になった未マージブランチが残り続ける。

このリポジトリでは、継続して保持する作業はopen PRとして明示し、それ以外の非デフォルト・非保護ブランチは短命な作業領域として扱う。したがって、ブランチのマージ状態、名称、経過日数を保存条件に使わず、open PRとの関連を主な保存条件とする。

## Decision

- `.github/workflows/cleanup-unused-branches.yml` を使用する。
- 毎日午前2時（Asia/Tokyo）に定期実行する。
- GitHub Actionsのtimezone対応scheduleを使い、`cron: "0 2 * * *"` と `timezone: "Asia/Tokyo"` を指定する。
- `workflow_dispatch` を維持し、手動実行時は `dry_run` を既定で有効にする。定期実行時は実削除する。
- 次のブランチは削除しない。
  1. リポジトリのデフォルトブランチ。
  2. GitHub上でprotectedと判定されるブランチ。
  3. open PRのheadとして使用されている同一リポジトリ内ブランチ。
  4. open PRのbaseとして使用されている同一リポジトリ内ブランチ。
- 上記に該当しないブランチは、マージ状態、ブランチ名の接頭辞、最終更新日時にかかわらず削除候補とする。
- 削除直前に対象ブランチを再取得し、次を再確認する。
  - デフォルトブランチへ変更されていないこと。
  - protectedになっていないこと。
  - 初回確認後に先端SHAが更新されていないこと。
  - open PRのheadまたはbaseになっていないこと。
- 実行中に先端SHAが更新されたブランチは、その実行では削除しない。次回実行時に改めて判定する。
- GitHub API操作にはリポジトリ標準の `GITHUB_TOKEN` のみを使用し、権限は `contents: write` と `pull-requests: read` に限定する。
- 外部トークンや第三者Actionは導入しない。GitHub公式 `actions/github-script` v9.0.0をフルコミットSHAで固定する。
- cleanupの並行実行を避けるため `concurrency` を設定し、ジョブには10分のtimeoutを設定する。

## Consequences

- open PRを作成していない作業ブランチは、作成直後や未マージであっても次回の日次cleanupで削除される。
- 継続して保持したい作業ブランチは、open PRに関連付けるかprotectedにする必要がある。
- stacked PR等で別PRのbaseになっているブランチも保持される。
- ブランチ名や経過日数に依存しないため、命名規則外の不要ブランチも整理される。
- 削除直前の再確認により、cleanup実行中に保護・PR作成・更新されたブランチの誤削除を避ける。

## Validation

- GitHub Actions YAML syntax check
- `actions/github-script` script syntax check
- ADR numbering and consistency check
- CI workflow
- Manual dry-run when changing deletion criteria
