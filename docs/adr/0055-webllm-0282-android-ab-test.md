# ADR 0055: Android実機の生成破綻を切り分けるためWebLLM 0.2.82へ一時固定する

- Status: Superseded
- Date: 2026-08-31
- Superseded by: ADR 0056
- Related: ADR 0005, ADR 0042, ADR 0049, ADR 0052

## Context

ADR 0052でAndroid向けブラウザ内AIをWebLLMへ戻し、`Qwen3-1.7B-q4f16_1-MLC`、`context_window_size: 2048`、`prefill_chunk_size: 128` に固定した。教材コンテキストや会話履歴の影響を分離するため、モデルロード直後に `1+1は？数字だけで答えてください。` という最小の自己診断も追加した。

Android実機でWebLLM 0.2.84を確認したところ、モデルロード、WebGPU adapter取得、`shader-f16` 利用可能判定までは成功したが、教材コンテキストを一切渡していない自己診断で次のような文字列破綻が発生した。

```text
stage: self-test
runtime: WebLLM 0.2.84
model: Qwen3-1.7B-q4f16_1-MLC
context-window: 2048
prefill-chunk: 128
webgpu: available
adapter: available
shader-f16: available
error: Unexpected self-test response: <不規則な多言語・コード断片>
```

この結果により、教材コンテキスト、会話履歴、教材用system promptは今回の文字列破綻の必要条件ではない。少なくともWebLLM 0.2.84と対象Android WebGPU環境の組み合わせでは、短い通常生成自体が正常ではない。

WebLLM upstream issue #844では、0.2.83で導入されたshape cache以降、0.2.83と0.2.84でQwen3系の生成が失敗し、同一端末・同一モデル・同一promptで0.2.82は正常だったという未解決の回帰報告がある。報告環境はWindows/AMDであり対象Android端末と同一原因であることは未確認だが、WebLLM versionだけを変えるA/B比較を行う根拠として十分である。

ADR 0005ではライブラリの最新版利用を原則としているが、互換性回帰の原因分離では既知の最後の正常版を完全固定して比較する必要がある。`^0.2.82` のような範囲指定は0.2.84へ解決されるため使用しない。

## Decision

### 1. WebLLMを0.2.82へ完全固定する

直接依存を次の完全バージョンへ変更する。

```json
"@mlc-ai/web-llm": "0.2.82"
```

`STUDY_AI_RUNTIME_VERSION` も `0.2.82` に変更し、診断表示と実際の依存バージョンを一致させる。

これは恒久的な旧版採用ではなく、Android実機で0.2.84との挙動差を確認するための互換性A/Bテスト兼暫定固定である。

### 2. version以外の実行条件を変更しない

比較可能性を保つため、次はADR 0052から変更しない。

- model: `Qwen3-1.7B-q4f16_1-MLC`
- `context_window_size: 2048`
- `prefill_chunk_size: 128`
- 自己診断: `1+1は？数字だけで答えてください。`
- `temperature: 0.1`
- `top_p: 0.8`
- `max_tokens: 16`
- `enable_thinking: false`
- 専用Web Worker
- 教材コンテキスト最大2 section
- 診断情報のサニタイズとプレーンテキスト描画

モデル、prompt、context、生成設定まで同時に変えるとruntime version差を判定できないため、このA/Bテスト中は変更しない。

### 3. 自動フォールバックは導入しない

0.2.84から0.2.82へ実行時に自動切り替えする仕組みは追加しない。複数runtimeをbundleへ含めると容量、キャッシュ、診断、再現性が複雑になるため、ビルド時に0.2.82だけを完全固定する。

利用者入力、URL parameter、localStorageなどからruntime versionを選択できる経路も追加しない。

### 4. 判定条件を固定する

Android実機では次の順で確認する。

1. モデルロード後にブラウザが終了しない。
2. 自己診断が数値2を含む正常応答で通過する。
3. 通常の `1+1=` に自然な日本語または数値で回答する。
4. 短い教材質問で文字列が破綻しない。
5. 実際の演習質問で教材チューターとして回答する。

0.2.82で1と2が成功し、0.2.84では同一自己診断が失敗しているため、version差が主要因である可能性が強くなる。その場合は0.2.82を暫定互換版として維持し、upstreamで回帰修正を含む新しいreleaseが出た時点で再評価する。

0.2.82でも同じ自己診断破綻が起きる場合は、0.2.83以降の回帰だけでは説明できないため、Android GPU driver、WebGPU実行、モデルartifact、WebLLMのQwen3実行経路を次の調査対象とする。

### 5. 旧版固定の解除条件を明示する

次のいずれかを満たした場合、0.2.82固定を見直す。

- upstream issue #844相当の回帰が修正された新しいWebLLM releaseが公開され、対象Android実機の自己診断を通過する。
- 0.2.82でも同じ文字列破綻が再現し、version差が原因ではないと判断できる。
- 別runtimeまたは別実行方式がAndroid実機で同等以上の安定性と教材品質を満たす。

新しいWebLLM releaseへ戻す場合も、まず同じ自己診断と同じmodel/settingsで比較してからADRを更新する。

## Consequences

### Positive

- model、prompt、context、生成設定を固定したままWebLLM 0.2.84と0.2.82を比較できる。
- upstreamで報告されている0.2.83以降の回帰との関連をAndroid実機で切り分けられる。
- 既存の自己診断と診断UIをそのまま利用できる。
- 自動fallbackや任意version選択を追加せず、公開サイトの実装と依存関係を単純に保てる。

### Negative

- ADR 0005の最新版利用原則に対する一時的な例外になる。
- 0.2.83/0.2.84で追加された機能や修正を利用できない。
- upstreamの回帰報告環境はWindows/AMDであり、0.2.82でAndroidの問題が解消する保証はない。
- 0.2.82で正常化しても、Qwen3 1.7Bの教材チューターとしての品質評価は別途必要である。

## Validation

- `package.json` と `pnpm-lock.yaml` が `@mlc-ai/web-llm@0.2.82` の完全固定で一致すること。
- `src/lib/ai/model-config.ts` のruntime表示が `0.2.82` であること。
- `pnpm check` が通ること。
- `pnpm build` が通ること。
- AI境界検証が0.2.82、Qwen3 1.7B、2048 context、128 prefill、自己診断、Worker、安全な出力境界を確認すること。
- Android実機で診断情報が `runtime: WebLLM 0.2.82` となること。
- Android実機で自己診断結果を0.2.84時の結果と比較すること。

## Superseded by

Android実機でWebLLM 0.2.82でも最小自己診断がq4f16版と同種の不規則な多言語・コード断片へ破綻したため、version差だけでは原因を説明できない。ADR 0056で同じWebLLM 0.2.82とQwen3 1.7Bを維持し、q4f32モデルへ切り替えてf16演算経路を切り分ける。

## Supersedes

ADR 0052の「まずWebLLM 0.2.84を利用する」というruntime versionの決定を置き換える。ADR 0052で採用したQwen3 1.7B、低メモリ設定、自己診断、教材コンテキスト縮小、安全境界は継続する。

## References

- WebLLM issue #844: 0.2.83以降のshape cache回帰報告
- WebLLM v0.2.82 release
- npm `@mlc-ai/web-llm` version history
