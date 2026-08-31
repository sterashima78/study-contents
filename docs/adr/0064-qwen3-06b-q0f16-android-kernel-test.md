# ADR 0064: Android実機の生成破綻を切り分けるためQwen3 0.6B q0f16を検証する

- Status: Superseded
- Superseded by: ADR 0067
- Date: 2026-08-31
- Related: ADR 0005, ADR 0042, ADR 0049, ADR 0052, ADR 0055, ADR 0056

## Context

Android実機では、WebLLM 0.2.84 + `Qwen3-1.7B-q4f16_1-MLC`、WebLLM 0.2.82 + 同q4f16モデル、WebLLM 0.2.82 + `Qwen3-1.7B-q4f32_1-MLC` のいずれでも、教材コンテキストを一切渡さない最小自己診断で不規則な多言語・コード断片が生成された。

直近のq4f32結果は次のとおりである。

```text
stage: self-test
runtime: WebLLM 0.2.82
model: Qwen3-1.7B-q4f32_1-MLC
context-window: 2048
prefill-chunk: 128
webgpu: available
adapter: available
shader-f16: available
error: Unexpected self-test response: <不規則な多言語・コード断片>
```

この結果から、0.2.83以降のruntime回帰、教材コンテキスト、会話履歴、q4f16固有の半精度演算だけでは現象を説明できない。

次はモデル規模と量子化実行経路を変更して、1.7Bのq4 `_1` 系に依存する問題か、より広いQwen3/WebGPU実行経路の問題かを切り分ける。

WebLLM 0.2.82の公式 `prebuiltAppConfig` には `Qwen3-0.6B-q0f16-MLC` が含まれており、対応するWebGPU model libraryも同versionの標準設定から解決できる。推定VRAMは約2220 MBで、1.7B q4f32の約2635 MBより小さい。

## Decision

### 1. 診断モデルをQwen3 0.6B q0f16へ変更する

`STUDY_AI_MODEL_ID` を次へ変更する。

```text
Qwen3-0.6B-q0f16-MLC
```

WebLLMは0.2.82のまま完全固定する。context window 2048、prefill chunk 128、自己診断、生成設定、専用Web Worker、教材コンテキスト制限、安全境界は変更しない。

この変更は教材チューター用モデルの最終選定ではなく、Android実機の生成正当性を切り分ける診断である。

### 2. 判定条件を固定する

Android実機では次を順に確認する。

1. モデルロード後にブラウザが終了しない。
2. 自己診断 `1+1は？数字だけで答えてください。` が数値2を含む正常応答になる。
3. 通常の `1+1=` が破綻しない。
4. 短い教材質問が破綻しない。
5. 実際の演習質問へ自然な日本語で回答できる。

0.6B q0f16で自己診断が正常化する場合、1.7B q4 `_1` 系のweight layoutまたは量子化kernel経路が主要因である可能性が高くなる。その場合は、教材品質を考慮しつつAndroidで安定する別layout・別modelの検討へ進む。

0.6B q0f16でも同種の文字列破綻が再現する場合、1.7B規模やq4 `_1` 固有ではないため、Android GPU driver、WebGPU実装、WebLLMのQwen3共通kernel経路を主要調査対象とする。

### 3. 安全境界を変更しない

質問本文、教材本文、会話履歴、完全なUser-Agent、GPUデバイス名は診断情報へ含めない。モデル出力は引き続き `textContent` で描画し、HTMLとして評価しない。

利用者入力、URL parameter、localStorage等からmodel IDやruntime versionを任意指定できる経路も追加しない。

### 4. Pages配備前にもStudy AI境界検証を実行する

PR用CIだけでなくGitHub Pagesのbuild jobでも `pnpm check:study-ai` を実行する。これにより、model ID、runtime固定、context/prefill条件、安全な出力境界が検証されないまま公開される経路をなくす。

## Consequences

### Positive

- 0.2.82標準の別量子化経路を使い、1.7B q4 `_1` 系から問題を分離できる。
- q4f32 1.7Bより推定VRAMが小さく、Androidで比較を完遂しやすい。
- runtime、context、prefill、自己診断条件を維持するため、既存の実機結果と比較しやすい。
- Pages配備時にもStudy AI境界検証が必須となり、PR外の変更でも公開前に設定不整合を検出できる。

### Negative

- モデル規模と量子化方式を同時に変更するため、正常化した場合にどちらが決定要因かは追加比較が必要になる。
- 0.6Bは教材チューターとしての回答品質が1.7Bより低い可能性があり、診断成功をそのまま最終採用判断にはできない。
- WebLLM 0.2.82の一時固定を継続するため、ADR 0005の最新版利用原則に対する例外が続く。

## Validation

- `@mlc-ai/web-llm` は0.2.82の完全固定を維持すること。
- `STUDY_AI_MODEL_ID` が `Qwen3-0.6B-q0f16-MLC` であること。
- context window 2048、prefill chunk 128、自己診断条件を変更しないこと。
- `pnpm check:study-ai` が通ること。
- `pnpm check` が通ること。
- `pnpm build` が通ること。
- GitHub Pages buildでも `pnpm check:study-ai` を実行すること。
- Android実機の診断情報でmodelが0.6B q0f16版になっていること。
- Android実機で自己診断結果を1.7B q4f16/q4f32時の結果と比較すること。

## Supersedes

ADR 0056の「Qwen3 1.7B q4f32でf16固有問題を切り分ける」診断段階を完了し、次の原因分離としてQwen3 0.6B q0f16を検証する。ADR 0056で得た「1.7B q4f32でも自己診断が破綻する」という実機結果は本ADRの前提として維持する。

## References

- WebLLM v0.2.82 `prebuiltAppConfig`
- `Qwen3-0.6B-q0f16-MLC`
- ADR 0056
