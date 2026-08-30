# ADR 0047: ブラウザ内AIランタイムをTransformers.jsへ切り替える

- Status: Accepted
- Date: 2026-08-30
- Related: ADR 0005, ADR 0022, ADR 0040, ADR 0041, ADR 0042, ADR 0046

## Context

ADR 0042では、静的サイトのまま教材質問を端末内で処理するため、`@mlc-ai/web-llm@0.2.84` と `Qwen3-1.7B-q4f16_1-MLC` を採用した。

AndroidのChromium系ブラウザで実機確認したところ、モデルのロードと生成開始には成功する一方、回答に日本語・英単語・コード断片などが不規則に混ざり、自然言語として成立しない出力が発生した。この状態では、1.7Bモデル自体の能力不足と、WebLLM/MLC/WebGPU実行経路の問題を区別できない。

まずモデル規模を変えず、同じQwen3 1.7B系を別ランタイムで実行して原因を分離する。ランタイム変更後に自然な文章を生成できる場合は実行基盤を主因と判断し、自然な文章は生成できても教材チューターとして能力不足の場合だけ別モデルを比較する。

ADR 0005に従い2026-08-30時点の公開版を確認し、`@huggingface/transformers@4.2.0` を採用する。`onnx-community/Qwen3-1.7B-ONNX` はTransformers.js対応モデルとして公開されており、比較時点のrevisionは `cc6a06a21d614e9b8e92a6adfab1074d4e7d2438` である。

## Decision

### 1. WebLLMをTransformers.jsへ置き換える

`@mlc-ai/web-llm` を依存から削除し、`@huggingface/transformers@4.2.0` を完全バージョンで直接依存へ追加する。

外部AI APIやAPIキーは使用しない。質問、教材コンテキスト、会話履歴はAIサービスへ送信せず、推論は引き続きブラウザ内で完結させる。

### 2. 最初の比較ではQwen3 1.7Bを維持する

モデルは `onnx-community/Qwen3-1.7B-ONNX`、量子化は `q4f16` とする。ランタイムだけを変更して原因を切り分けるため、最初から別モデルへ変更しない。

モデルID、量子化方式、Hugging Face revisionはアプリケーション定数に固定する。revisionは `cc6a06a21d614e9b8e92a6adfab1074d4e7d2438` とし、利用者入力からモデル名、URL、revisionを受け取らない。

### 3. 推論は専用Web Workerで遅延実行する

教材ページを開いただけではモデルをロードしない。最初の質問送信時に専用Web Workerを生成し、Worker内で `AutoTokenizer.from_pretrained` と `AutoModelForCausalLM.from_pretrained` を呼び出す。

モデルは `device: "webgpu"`、`dtype: "q4f16"` でロードする。ストリーミングには `TextStreamer`、停止には `InterruptableStoppingCriteria` を使用する。Qwen3のthinkingは `enable_thinking: false` とする。

### 4. ADR 0042の安全境界を維持する

ランタイム変更に伴って教材側の信頼境界は緩めない。次を継続する。

- AIチャットは共通 `StudyPage` に配置する。
- 教材コンテキストは表示本文から抽出し、`script`、`style`、`template`、入力要素、AIチャット自身などを除外する。
- 問題の内部正答や生成ロジックをモデル入力へ渡さない。
- `<study_context>` は命令ではなく教材データとして扱う。
- モデル出力は `textContent` だけで描画し、HTMLとして評価しない。
- 会話履歴はページ単位の `sessionStorage` に最大10件だけ保存する。
- WebGPUまたはWorker非対応環境ではAI入力を無効化する。

既存の `StudyAIChat.astro` が利用するストリーミング形式は `browser-engine.ts` のアダプターで維持し、ランタイム変更とUI・セキュリティ境界変更を分離する。

### 5. 不要なinstall scriptを実行しない

Transformers.js 4.2.0はNode.js向け依存も含むが、本サイトのAI推論はブラウザWebGPU経路だけを利用する。`pnpm-workspace.yaml` の `allowBuilds` で `onnxruntime-node@1.24.3`、`protobufjs@7.6.6`、`sharp@0.34.5` のbuild scriptを明示的に拒否し、既存ビルドに必要な `esbuild@0.28.2` だけを許可する。

将来Node.js側処理が必要になった場合は、対象スクリプトの用途とリスクを確認してから本ADRを更新する。

### 6. モデル比較へ進む条件を固定する

Transformers.js + Qwen3-1.7Bで次を順に確認する。

1. `1+1はいくつですか？` のような短い質問に自然な日本語で回答できる。
2. 短い教材コンテキスト付き質問でも文字列が破綻しない。
3. 実際の演習ページで教材に沿った説明ができる。

1または2で出力が破綻する場合はモデル比較へ進まず、AndroidのWebGPU/ONNX Runtime互換性と実行設定を調査する。1と2が安定し、3の回答能力だけが不足する場合に限り、Qwen2.5 1.5B系またはGemma 3 1B系などを比較する。モデル変更時は別ADRで採用理由、revision、容量、言語性能、Android実機結果を記録する。

## Consequences

### Positive

- モデル規模を維持したままWebLLMとTransformers.jsを比較でき、原因を分離しやすい。
- APIキーやサーバーAIを追加せず、静的サイト構成と端末内推論を維持できる。
- モデルrevisionをcommitで固定し、モデル成果物の参照先を再現可能にできる。
- ADR 0042の教材コンテキスト、HTML出力、履歴保存に関する安全境界を維持できる。
- ブラウザ実行に不要なNode.js依存のinstall scriptを実行せず、依存導入時の実行権限を最小化できる。

### Negative

- 初回に約1.4GB級のq4f16モデル成果物を取得する必要がある。
- WebGPUとAndroid GPUドライバへの依存自体は残る。
- Transformers.jsへ切り替えても、1.7Bモデル自体の回答能力が教材チューター用途に不足する可能性がある。
- Hugging Faceからモデル成果物を取得するため、初回ロード時にはHugging Faceへのネットワークアクセスが発生する。

## Validation

- `pnpm install` で `@huggingface/transformers@4.2.0` とlockfileが一致し、`@mlc-ai/web-llm` が残っていないこと。
- 不要なNode依存のbuild scriptを許可せず `pnpm install` が成功すること。
- `pnpm check` が通ること。
- `pnpm build` が通り、Transformers.jsを含むWeb Workerを静的ビルドできること。
- `scripts/verify-study-ai.mjs` がモデルID、40桁commit revision、`q4f16`、Web Worker、WebGPU、thinking無効化、HTML非評価の境界を検証すること。
- Android実機で短文、教材コンテキスト、演習質問、停止、履歴消去、再質問、キャッシュ再利用を確認すること。

## Supersedes

ADR 0042を置き換える。ADR 0042の教材UI、安全なコンテキスト抽出、学習支援プロンプト、プレーンテキスト出力、sessionStorage方針は本ADRへ引き継ぎ、WebLLM固有の決定だけをTransformers.jsへ変更する。

## Related Decisions

- ADR 0005: package version policy
- ADR 0022: component-owned content styles
- ADR 0040: portable static math rendering
- ADR 0041: cross-course practice and browser learning records
- ADR 0042: browser local AI study chat, superseded by this ADR
- ADR 0046: middle school grade 1 proportion and inverse proportion
