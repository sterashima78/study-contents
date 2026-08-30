# ADR 0051: Android実機のメモリ制約に合わせてQwen3 0.6Bへ切り替える

- Status: Accepted
- Date: 2026-08-30
- Related: ADR 0005, ADR 0047, ADR 0049

## Context

ADR 0049で追加した診断表示をAndroid実機で確認したところ、Transformers.js + ONNX Runtime WebGPUによる `onnx-community/Qwen3-1.7B-ONNX` / `q4f16` の初期化は次の状態で失敗した。

```text
stage: model
webgpu: available
adapter: available
shader-f16: available
error: Error: Can't create a session. ERROR_CODE: 6, ERROR_MESSAGE: std::bad_alloc
```

失敗段階は `model` であり、WebGPU、GPU adapter、`shader-f16` は利用可能だった。`std::bad_alloc` はONNX Runtimeが推論session作成中に必要なメモリを確保できなかったことを示す。この失敗はwarm-upや回答生成より前に発生するため、教材コンテキスト、会話履歴、生成token数、system promptの内容を減らしても直接の解決にはならない。

`onnx-community/Qwen3-1.7B-ONNX` の `q4f16` は約1.4GB級であり、Androidブラウザではモデルファイルそのもの以外にもONNX Runtime、WebGPU buffer、session初期化用の一時領域が必要になる。

Hugging FaceのTransformers.js公式WebGPUサンプルは `onnx-community/Qwen3-0.6B-ONNX` をブラウザ内推論モデルとして採用している。同モデルの `q4f16` ONNXファイルは約570MBで、1.7B版よりsession作成時のメモリ負荷を大きく下げられる。

2026-08-30時点で対象モデルの公開成果物を確認し、モデルrevisionは `da1453100cf3ff33ef56d17983fc7a8648706db6` とする。

## Decision

### 1. Android互換性検証モデルをQwen3 0.6Bへ変更する

`STUDY_AI_MODEL_ID` を次へ変更する。

```text
onnx-community/Qwen3-0.6B-ONNX
```

量子化は引き続き `q4f16` とする。モデルrevisionは `da1453100cf3ff33ef56d17983fc7a8648706db6` に固定する。

利用者入力からモデルID、revision、dtype、任意URLを指定できるようにはしない。

### 2. ランタイムと安全境界は変更しない

Transformers.js 4.2.0、ONNX Runtime WebGPU、専用Web Worker、`enable_thinking: false`、プレーンテキスト描画、教材コンテキストの除外ルール、sessionStorage方針はADR 0047のまま維持する。

ADR 0049の診断表示も維持し、0.6Bでも失敗した場合に `stage` と元エラーを確認できる状態を保つ。

### 3. 0.6Bではまず実行可能性を評価する

最初の評価目的は回答品質ではなく、Android実機でONNX sessionを作成して推論まで到達できるかの確認とする。

次の順に確認する。

1. モデルロードが `model` stageを通過する。
2. warm-upが成功する。
3. `1+1=` の短い質問へ自然言語で回答する。
4. 短い教材コンテキスト付き質問へ回答する。
5. 実際の演習ページで教材チューターとして回答する。

1または2で再び `std::bad_alloc` が発生する場合は、モデル品質比較へ進まず、ONNX Runtimeのsession初期化時メモリ、モデル配置方式、Androidブラウザのメモリ上限を次の調査対象とする。

1から4が安定し、5だけが能力不足の場合に、Gemma 3 1BやQwen2.5系など別モデルをAndroidで実行可能な容量の範囲で比較する。そのモデル変更は別ADRで記録する。

## Consequences

### Positive

- q4f16成果物を約1.4GB級から約570MBへ縮小し、Androidでのsession作成時メモリ負荷を大幅に下げられる。
- Transformers.js公式WebGPUサンプルと同じQwen3 0.6B系を利用するため、ランタイム互換性の切り分けがしやすい。
- ランタイムや教材データの安全境界を変更せず、モデルサイズだけを比較できる。
- モデルIDとrevisionを固定し、公開サイトから任意モデルを読み込ませる経路を追加しない。

### Negative

- 1.7Bから0.6Bへ縮小するため、複雑な数学説明、日本語の長い推論、教材に沿った段階的説明の品質が低下する可能性がある。
- 約570MBのモデル取得と実行メモリは依然必要で、すべてのAndroid端末で動作する保証はない。
- WebGPU、GPUドライバ、ONNX Runtime Webの互換性問題はモデル縮小だけでは解消しない。

## Validation

- `scripts/verify-study-ai.mjs` が `onnx-community/Qwen3-0.6B-ONNX`、40桁revision、`q4f16` を検証すること。
- `pnpm check` が通ること。
- `pnpm build` が通ること。
- Android実機で診断表示の `model` が `onnx-community/Qwen3-0.6B-ONNX` になっていること。
- Android実機で `model` stageとwarm-upを通過できること。
- `1+1=` で生成結果または新しい診断結果を確認すること。

## Relationship to ADR 0047

ADR 0047のTransformers.js採用、Web Worker、WebGPU、安全境界の決定は継続する。ADR 0047で「最初の比較」として固定したQwen3 1.7Bのモデル選択だけを、本ADRの実機診断結果に基づいてQwen3 0.6Bへ更新する。

## References

- Hugging Face `onnx-community/Qwen3-0.6B-ONNX`
- Hugging Face Transformers.js examples `qwen3-webgpu`
