# ADR 0056: Android実機の生成破綻を切り分けるためQwen3 1.7Bのq4f32モデルを検証する

- Status: Superseded
- Date: 2026-08-31
- Superseded by: ADR 0064
- Related: ADR 0005, ADR 0042, ADR 0049, ADR 0052, ADR 0055

## Context

ADR 0055で、WebLLM 0.2.84の回帰可能性を切り分けるため、モデル、prompt、context、生成設定を固定したままWebLLM 0.2.82へ変更した。

Android実機で0.2.82を確認した結果、モデルロード、WebGPU adapter取得、`shader-f16` 利用可能判定までは成功したが、教材コンテキストを一切渡していない自己診断でも0.2.84と同種の文字列破綻が再現した。

```text
stage: self-test
runtime: WebLLM 0.2.82
model: Qwen3-1.7B-q4f16_1-MLC
context-window: 2048
prefill-chunk: 128
webgpu: available
adapter: available
shader-f16: available
error: Unexpected self-test response: <不規則な多言語・コード断片>
```

このため、0.2.83以降のshape cache回帰だけを主要因とする仮説は棄却する。教材コンテキスト、会話履歴、教材用system promptも必要条件ではない。

次に、同じQwen3 1.7Bと同じWebLLM 0.2.82を維持しつつ、q4f16モデルからq4f32モデルへ変更して、半精度演算経路と対象Android WebGPU実装の組み合わせが原因かを切り分ける。

WebLLM 0.2.82の公式 `prebuiltAppConfig` には `Qwen3-1.7B-q4f32_1-MLC` が含まれており、同モデルの推定VRAMは約2635 MBである。q4f16版の約2037 MBより増加するため、生成正当性の比較と同時にモデルロード時のメモリ制約も確認する。

## Decision

### 1. モデルだけをq4f32版へ変更する

`STUDY_AI_MODEL_ID` を次へ変更する。

```text
Qwen3-1.7B-q4f32_1-MLC
```

WebLLMは0.2.82のまま完全固定する。context window、prefill chunk、自己診断、生成設定、Worker、教材コンテキスト制限、安全境界は変更しない。

### 2. q4f16とq4f32の差を優先して判定する

実機では次の順で確認する。

1. q4f32モデルをロードでき、ブラウザが終了しない。
2. 自己診断 `1+1は？数字だけで答えてください。` が数値2を含む正常応答になる。
3. 通常質問 `1+1=` が破綻しない。
4. 短い教材質問が破綻しない。
5. 実際の演習質問へ自然な日本語で回答できる。

q4f32で自己診断が正常化する場合、WebLLMのq4f16演算経路または対象Androidのf16 WebGPU実行が主要因である可能性が高くなる。

q4f32でも同じ文字列破綻が再現する場合、f16固有の問題ではないため、WebGPU driver、Qwen3 model artifact、WebLLMのQwen3共通実行経路を次の調査対象とする。

### 3. メモリ不足の場合は0.6B q4f32を次の比較候補とする

1.7B q4f32はq4f16より推定VRAMが約600 MB増える。モデルロード中にブラウザ終了、device loss、out-of-memory相当の失敗が起きた場合、q4f32演算経路の正当性を判定できない。

その場合は、同じWebLLM 0.2.82の `Qwen3-0.6B-q4f32_1-MLC` を次の診断候補とする。これはモデルサイズも変わるため一次比較には使わず、1.7B q4f32がメモリ制約で実行不能な場合だけ利用する。

### 4. 診断情報と安全境界を維持する

質問本文、教材本文、会話履歴、完全なUser-Agent、GPUデバイス名は診断へ含めない。モデルID、runtime、context、prefill、WebGPU利用可否、adapter利用可否、`shader-f16` 利用可否、サニタイズ済み例外だけを表示する。

モデル出力は引き続き `textContent` で描画し、HTMLとして評価しない。

## Consequences

### Positive

- runtime version、モデル規模、prompt、context、生成設定を固定し、q4f16とq4f32の差を比較できる。
- 0.2.82でも再現したため、version回帰仮説から精度・GPU実行経路の検証へ進める。
- 既存の自己診断と診断UIをそのまま利用できる。

### Negative

- q4f32版はq4f16版より推定VRAMが大きく、Androidでロード時のメモリ不足が起こる可能性がある。
- q4f32で正常化しても、GPU driver側とWebLLM側のどちらに原因があるかまでは単独では確定できない。
- WebLLM 0.2.82の一時固定を継続するため、ADR 0005の最新版利用原則に対する例外が続く。

## Validation

- `@mlc-ai/web-llm` は0.2.82の完全固定を維持すること。
- `STUDY_AI_MODEL_ID` が `Qwen3-1.7B-q4f32_1-MLC` であること。
- context window 2048、prefill chunk 128、自己診断条件を変更しないこと。
- `pnpm check` が通ること。
- `pnpm build` が通ること。
- Android実機の診断情報でmodelがq4f32版になっていること。
- Android実機でq4f32の自己診断結果をq4f16時の結果と比較すること。

## Superseded by

ADR 0064で、1.7B q4f32でも最小自己診断が同種の文字列破綻となった実機結果を受け、Qwen3 0.6B q0f16へ診断モデルを変更する。

## Supersedes

ADR 0055の「Qwen3 1.7B q4f16のままWebLLM versionだけを比較する」診断段階を完了し、次の原因分離としてq4f32モデルを検証する。ADR 0055で得た「0.2.82でも自己診断が破綻する」という実機結果は本ADRの前提として維持する。

## References

- WebLLM v0.2.82 `prebuiltAppConfig`
- `Qwen3-1.7B-q4f16_1-MLC`
- `Qwen3-1.7B-q4f32_1-MLC`
