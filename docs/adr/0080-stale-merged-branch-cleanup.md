# ADR 0080: 30日以上未更新のマージ済み作業ブランチを週次で自動削除する

- Status: Accepted
- Date: 2026-09-01
- Related: ADR 0012

## Context

このリポジトリでは、教材追加や修正ごとに `feat/`、`fix/`、`prep/` などの作業ブランチを作成している。squash mergeを採用しているため、マージ済みPRのブランチ先端は `main` のGit祖先にならない場合があり、単純な祖先判定だけでは安全にマージ済みブランチを識別できない。

一方、公開リポジトリで広い書き込み権限を持つ定期ワークフローや、未マージブランチまで日数だけで削除する仕組みは、誤削除やサプライチェーン上のリスクを増やす。

そのため、削除対象を短命な作業ブランチに限定し、マージ済みであること、一定期間更新されていないこと、open PRがないことを複数条件で確認してから削除する。

## Decision

- `.github/workflows/cleanup-merged-branches.yml` を追加し、毎週月曜日 02:17 UTC（日本時間11:17）に実行する。
- 毎時00分付近の混雑を避けるため、cronの分は17分とする。
- `workflow_dispatch` を提供し、手動実行時は `dry_run` を既定で有効にする。定期実行時は実削除する。
- 削除候補は次の接頭辞を持つ非デフォルトブランチに限定する。
  - `feat/`
  - `feature/`
  - `fix/`
  - `bugfix/`
  - `chore/`
  - `docs/`
  - `refactor/`
  - `test/`
  - `prep/`
  - `dependabot/`
  - `renovate/`
- 保護ブランチは削除しない。
- 先端コミットから30日未満のブランチは削除しない。
- open PRが存在するブランチは削除しない。
- マージ済み判定は、次のいずれかを満たす場合に限る。
  1. 現在のブランチ先端SHAが `main` の祖先または `main` と同一である。
  2. 現在のブランチ先端SHAが、同じブランチから作成されてマージ済みとなったPRのhead SHAと一致する。
- 実削除直前にブランチを再取得し、保護状態、先端SHA、open PRを再確認する。先端が初回確認時から動いていた場合は削除しない。
- GitHub API操作にはリポジトリ標準の `GITHUB_TOKEN` のみを使用し、権限は `contents: write` と `pull-requests: read` に限定する。
- 外部トークンや第三者Actionは導入しない。GitHub公式 `actions/github-script` v9.0.0をフルコミットSHAで固定する。
- 同じcleanupが並行実行されないよう `concurrency` を設定し、ジョブには10分のtimeoutを設定する。

## Consequences

- マージ後に放置された作業ブランチは、少なくとも30日の猶予後に週次で整理される。
- squash mergeされたブランチも、PRのhead SHA一致によって安全に判定できる。
- 未マージブランチ、作業継続中のブランチ、open PR付きブランチ、保護ブランチは自動削除されない。
- 対象接頭辞に含まれない長期運用ブランチは自動削除されないため、将来ブランチ命名規則を増やす場合はこのADRとワークフローを同時に更新する必要がある。
- GitHubの仕様上、公開リポジトリが60日間非アクティブの場合はscheduleワークフローが自動無効化される可能性がある。

## Validation

- GitHub Actions YAML syntax check
- `actions/github-script` script syntax check
- ADR numbering and consistency check
- CI workflow
- Manual dry-run before changing deletion criteria
