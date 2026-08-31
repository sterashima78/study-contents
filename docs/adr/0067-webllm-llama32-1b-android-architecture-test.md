# ADR 0067: Android実機の生成破綻をLlama 3.2 1Bでアーキテクチャ比較する

- Status: Superseded
- Superseded by: ADR 0072
- Date: 2026-08-31
- Related: ADR 0005, ADR 0049, ADR 0055, ADR 0056, ADR 0064

## Context

Android実機では、WebLLMを使った最小自己診断が次の条件でいずれも不規則な多言語・コード断片へ破綻した。

- WebLLM 0.2.84 + `Qwen3-1.7B-q4f16_1-MLC`
- WebLLM 0.2.82 + `Qwen3-1.7B-q4f16_1-MLC`
- WebLLM 0.2.82 + `Qwen3-1.7B-q4f32_1-MLC`
- WebLLM 0.2.82 + `Qwen3-0.6B-q0f16-MLC`

最後の0.6B q0f16でも、教材コンテキストを一切渡さない自己診断 `1+1は？数字だけで答えてください。` が正常化しなかった。

```text
stage: self-test
runtime: WebLLM 0.2.82
model: Qwen3-0.6B-q0f16-MLC
context-window: 2048
prefill-chunk: 128
webgpu: available
adapter: available
shader-f16: available
error: Unexpected self-test response: <不規則な多言語・コード断片>
```

この結果により、1.7Bというモデル規模、q4量子化、`_1` weight layout、q4f16固有経路、WebLLM 0.2.84固有回帰、教材コンテキストや会話履歴だけを主因とする仮説は弱くなった。

次はQwen3系から離れ、同じWebLLM 0.2.82の標準モデルである `Llama-3.2-1B-Instruct-q4f16_1-MLC` を使ってモデルアーキテクチャを比較する。WebLLM 0.2.82の `prebuiltAppConfig` では同モデルがlow-resource向けとして定義され、推定VRAMは約879 MBである。

## Decision

### 1. 診断モデルをLlama 3.2 1Bへ変更する

`STUDY_AI_MODEL_ID` を次へ変更する。

```text
Llama-3.2-1B-Instruct-q4f16_1-MLC
```

WebLLMは0.2.82の完全固定を維持する。context window 2048、prefill chunk 128、自己診断、生成設定、専用Web Worker、教材コンテキスト制限、安全境界は変更しない。

この変更は最終的な教材チューター用モデル選定ではなく、Qwen3共通実行経路とWebLLM/WebGPU共通実行経路を分離するための診断である。

### 2. 判定条件を固定する

Android実機では次を順に確認する。

1. モデルロード後にブラウザが終了しない。
2. 自己診断 `1+1は？数字だけで答えてください。` が数値2を含む正常応答になる。
3. 通常の `1+1=` が破綻しない。
4. 短い教材質問が破綻しない。
5. 実際の演習質問へ自然な文で回答できる。

Llama 3.2 1Bで自己診断が正常化する場合、対象AndroidのWebGPU全般ではなく、Qwen3のmodel artifact、モデル固有kernel、またはQwen3実行経路との組み合わせが主要因である可能性が高くなる。

Llama 3.2 1Bでも同種の文字列破綻が再現する場合、Qwen3固有の問題では説明できない。その場合は対象AndroidのGPU driver、WebGPU実装、WebLLM共通kernel実行経路を主要調査対象とする。

Llamaモデルも `_1` layoutを使用するため、Llamaで正常化した場合は `_1` layout一般の問題という仮説も弱くなる。

### 3. 安全境界を変更しない

質問本文、教材本文、会話履歴、完全なUser-Agent、GPUデバイス名は診断情報へ含めない。モデル出力は引き続き `textContent` で描画し、HTMLとして評価しない。

利用者入力、URL parameter、localStorage等からmodel IDやruntime versionを任意指定できる経路は追加しない。

### 4. 公開前検証を維持する

PR用CIとGitHub Pages buildの双方で `pnpm check:study-ai` を実行し、model ID、runtime固定、context/prefill条件、安全な出力境界を公開前に検証する。

## Consequences

### Positive

- Qwen3系からモデルアーキテクチャを変更し、WebLLM/WebGPU共通問題かQwen3固有問題かを高い情報量で比較できる。
- WebLLM 0.2.82の標準prebuiltモデルを使うため、独自model libraryや任意URLを追加せず検証できる。
- 推定VRAMがQwen3 0.6B q0f16より小さく、Androidでモデルロードを完遂しやすい。
- 既存の診断UI、安全境界、自己診断条件を維持できる。

### Negative

- モデルアーキテクチャと量子化方式が変わるため、正常化した場合にQwen3内部のどの要素が原因かまでは単独で確定できない。
- Llama 3.2 1Bは日本語教材チューターとして最終採用に十分な品質とは限らない。
- WebLLM 0.2.82の一時固定を継続するため、ADR 0005の最新版利用原則に対する例外が続く。

## Validation

- `@mlc-ai/web-llm` は0.2.82の完全固定を維持すること。
- `STUDY_AI_MODEL_ID` が `Llama-3.2-1B-Instruct-q4f16_1-MLC` であること。
- context window 2048、prefill chunk 128、自己診断条件を変更しないこと。
- `pnpm check:study-ai` が通ること。
- `pnpm check` が通ること。
- `pnpm build` が通ること。
- GitHub Pages buildでも `pnpm check:study-ai` が通ること。
- Android実機の診断情報でmodelがLlama 3.2 1Bになっていること。
- Android実機で自己診断結果をQwen3各条件と比較すること。

## Supersedes

ADR 0064のQwen3 0.6B q0f16診断段階を完了し、次の原因分離としてLlama 3.2 1Bによるモデルアーキテクチャ比較へ進む。ADR 0064で得た「Qwen3 0.6B q0f16でも自己診断が破綻する」という実機結果は本ADRの前提として維持する。

## References

- WebLLM v0.2.82 `prebuiltAppConfig`
- `Llama-3.2-1B-Instruct-q4f16_1-MLC`
- ADR 0064
