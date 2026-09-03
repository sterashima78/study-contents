# ADR 0094: Study AIをWebLLM 0.2.84へ更新して一時固定を終了する

- Status: Accepted
- Date: 2026-09-03
- Related: ADR 0005, ADR 0055, ADR 0067, ADR 0072, ADR 0087, ADR 0093

## Context

Study AIではAndroid実機の生成破綻を切り分けるため、ADR 0055以降でWebLLM 0.2.82を一時固定した。しかし、Qwen3系では0.2.82へ戻しても最小自己診断の破綻が解消せず、その後 `Llama-3.2-1B-Instruct-q4f16_1-MLC` へ変更したことで自己診断と通常生成が正常化した。

この経緯から、0.2.82固定は恒久的な互換要件ではなく原因分離のための一時条件として扱うのが適切である。互換性検証段階は完了したため、ADR 0005の「確認時点の最新リリースへ固定する」原則へ戻す。

2026-09-03の公開レジストリ確認時点では `@mlc-ai/web-llm` の最新公開版は0.2.84である。モデル、context window、prefill chunk、Web Worker、安全な出力境界、自己診断、回答予算は変更せず、runtime versionだけを最新版へ更新する。

## Decision

### 1. WebLLMを0.2.84へ完全固定する

`package.json` の直接依存を次へ更新する。

```json
"@mlc-ai/web-llm": "0.2.84"
```

`STUDY_AI_RUNTIME_VERSION` も `0.2.84` とし、診断表示と実際の依存バージョンを一致させる。`pnpm-lock.yaml` はpnpm 12.2.1で公開レジストリから再生成する。

### 2. Llama 3.2 1BとAndroid向け低メモリ条件を維持する

次は変更しない。

- model: `Llama-3.2-1B-Instruct-q4f16_1-MLC`
- context window: 2048
- prefill chunk: 128
- 自己診断: `1+1は？数字だけで答えてください。`
- 専用Web Worker実行
- 教材コンテキスト最大2 section
- GuidedPractice優先の練習問題コンテキスト

runtime更新とモデル・メモリ条件の変更を同時に行わず、既存の安定条件を維持する。

### 3. ADR 0087の回答予算と安全境界を継承する

通常回答は `max_tokens: 512`、回答長は通常400〜600字程度を目安とし、`finish_reason === "length"` の場合は「続き」で再開できることを明示する。

モデル出力は `textContent` でのみ描画し、`innerHTML`、`insertAdjacentHTML`、`outerHTML` を使わない。質問本文、教材本文、会話履歴、完全なUser-Agent、GPUデバイス名を診断情報へ含めない。利用者入力やURL parameter、localStorageから任意のruntime version、model ID、外部model URLを指定できる経路は追加しない。

### 4. 0.2.82への自動フォールバックは導入しない

複数runtimeをbundleへ含めず、公開サイトでは0.2.84だけを使用する。将来、新しいWebLLMで対象端末に回帰が確認された場合は、旧版への自動切替ではなく、再現条件と解除条件を新しいADRへ記録した上で完全固定版を変更する。

### 5. Study AI境界検証を0.2.84へ同期する

`scripts/verify-study-ai.mjs` は `package.json` と `STUDY_AI_RUNTIME_VERSION` が0.2.84で一致することを検証する。Llama 3.2 1B、context 2048、prefill 128、Worker、自己診断、教材コンテキスト、安全な出力、512 token回答予算の検証は継続する。

## Consequences

### Positive

- Android原因分離のための一時的な旧版固定を終了し、リポジトリ全体の最新版利用方針と整合する。
- runtime表示、直接依存、lockfile、CI検証が同じ0.2.84へ揃う。
- モデルやメモリ条件を変えないため、既存のLlama 3.2 1B向け安定化設計を維持できる。
- 複数runtimeや自動fallbackを持たず、bundle・キャッシュ・診断経路を単純に保てる。

### Negative

- 将来のWebLLM更新でも実機回帰の可能性は残る。
- runtime更新後も端末ごとのWebGPU実装差は存在するため、自己診断と安全な失敗表示は引き続き必要である。

## Validation

- `package.json` と `pnpm-lock.yaml` が `@mlc-ai/web-llm@0.2.84` の完全固定で一致すること。
- `STUDY_AI_RUNTIME_VERSION` が0.2.84であること。
- `Llama-3.2-1B-Instruct-q4f16_1-MLC`、context 2048、prefill 128を維持すること。
- 通常回答が `max_tokens: 512` であること。
- 自己診断、Worker、安全な出力境界、教材コンテキスト制約を維持すること。
- `pnpm check:study-ai` が通ること。
- `pnpm check` が通ること。
- `pnpm build` が通ること。
- GitHub Pages buildでもStudy AI境界検証が通ること。

## Supersedes

ADR 0087の回答予算、教材コンテキスト、安全境界を継承しつつ、WebLLM 0.2.82を変更しないというruntime固定条件を置き換える。以後のStudy AI基準は、WebLLM 0.2.84、Llama 3.2 1B、context 2048、prefill 128、512 token回答予算とする。

## References

- ADR 0005
- ADR 0055
- ADR 0067
- ADR 0087
- `package.json`
- `src/lib/ai/model-config.ts`
- `scripts/verify-study-ai.mjs`
