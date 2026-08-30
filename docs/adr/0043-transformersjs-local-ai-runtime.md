# ADR 0043: ブラウザ内AIランタイムをTransformers.jsへ切り替える

- Status: Accepted
- Date: 2026-08-30
- Related: ADR 0005, ADR 0022, ADR 0040, ADR 0041, ADR 0042

## Context

ADR 0042では、静的サイトのまま教材質問を端末内で処理するため、`@mlc-ai/web-llm@0.2.84` と `Qwen3-1.7B-q4f16_1-MLC` を採用した。

AndroidのChromium系ブラウザで実機確認したところ、モデルのロードと生成開始には成功する一方、回答に日本語・英単語・コード断片などが不規則に混ざり、自然言語として成立しない出力が発生した。この状態では、単なる1.7Bモデルの回答能力不足と、WebLLM/MLC/WebGPU実行経路の問題を区別できない。

まずモデル規模を変えず、同じQwen3 1.7B系を別のブラウザ推論ランタイムで実行して原因を分離する。ランタイムを変えて正常な文章を生成できる場合は、モデル変更より先に実行基盤の問題だったと判断できる。ランタイムを変えても回答品質が不足する場合だけ、次段階として別モデルを比較する。

ADR 0005に従って2026-08-30時点の公開版を確認した結果、`@huggingface/transformers@4.2.0` が最新安定版である。Transformers.js v4はONNX Runtimeを利用する新しいWebGPUバックエンドを提供している。`onnx-community/Qwen3-1.7B-ONNX` はTransformers.js対応モデルとして公開されており、現時点の最新commitは `cc6a06a21d614e9b8e92a6adfab1074d4e7d2438` である。

## Decision

### 1. WebLLMをTransformers.js 4.2.0へ置き換える

`@mlc-ai/web-llm` を依存から削除し、`@huggingface/transformers@4.2.0` を完全バージョンで直接依存へ追加する。

外部AI APIやAPIキーは引き続き使用しない。質問、教材コンテキスト、会話履歴はモデル推論のために外部AIサービスへ送信しない。

### 2. 最初の比較ではQwen3 1.7Bを維持する

モデルは `onnx-community/Qwen3-1.7B-ONNX`、量子化は `q4f16` とする。モデル世代と規模を維持してランタイムだけを変更し、回答破綻の原因を切り分ける。

モデルID、量子化方式、Hugging Face revisionはアプリケーション側の定数に固定する。revisionは `cc6a06a21d614e9b8e92a6adfab1074d4e7d2438` とし、利用者入力からモデル名、モデルURL、revisionを受け取らない。

モデル成果物はHugging Faceから初回利用時に取得してブラウザキャッシュを利用するが、実行するモデルの参照先をcommit単位で固定し、公開リポジトリから任意のモデルコードやアクセストークンを注入しない。

### 3. 推論は専用Web Workerで遅延実行する

教材ページを開いただけではモデルをロードしない。最初の質問送信時に専用Web Workerを生成し、Worker内で `AutoTokenizer.from_pretrained` と `AutoModelForCausalLM.from_pretrained` を呼び出す。

モデルは `device: "webgpu"`、`dtype: "q4f16"` でロードする。生成中の本文UIをブロックしないよう、トークン生成、ストリーミング、停止判定はWorker内で処理する。

ストリーミングには `TextStreamer`、停止には `InterruptableStoppingCriteria` を使用する。Service Workerによるモデル常駐は導入しない。

### 4. 既存チャットUIとの境界を維持する

`StudyAIChat.astro` が利用しているストリーミング形式に合わせ、メインスレッド側の `browser-engine.ts` でTransformers.js Workerのメッセージを薄いアダプターへ変換する。

これにより、教材コンテキスト抽出、会話履歴、プレーンテキスト描画、停止ボタンなどの安全境界をランタイム変更と同時に作り直さない。

ADR 0042で決めた次の方針は本ADRでも継続する。

- AIチャットは共通 `StudyPage` に配置する。
- 教材コンテキストは表示本文から抽出し、`script`、`template`、入力要素、AIチャット自身などを除外する。
- 問題の内部正答や生成ロジックをモデル入力へ渡さない。
- `<study_context>` は命令ではなく教材データとして扱う。
- モデル出力は `textContent` だけで描画し、HTMLとして評価しない。
- 会話履歴はページ単位の `sessionStorage` に最大10件だけ保存する。
- WebGPUまたはWorker非対応環境ではAI入力を無効化する。

### 5. Qwen3のthinkingは無効化する

チャットテンプレートへ `enable_thinking: false` を指定する。初期比較では回答品質と安定性の判定を優先し、長い思考出力による生成時間とメモリ使用量の増加を避ける。

既存UIと同様に、生成は原則 `temperature: 0.4`、`top_p: 0.9`、最大320新規トークンとし、Worker側でも上限を512新規トークンに制限する。

### 6. モデル変更はTransformers.jsの実機確認後に判断する

最初の実機確認ではモデルを変更しない。

Transformers.js + Qwen3-1.7Bで自然な日本語が安定して生成でき、教材チューターとしての回答能力だけが不足する場合に限り、次の比較候補としてQwen2.5 1.5B系またはGemma 3 1B系を検討する。

一方、単純な短文プロンプトでも出力が破綻する場合はモデル能力の比較へ進まず、AndroidのWebGPU/ONNX Runtime互換性と実行設定を先に調査する。

モデルを変更する場合は、採用理由、モデルrevision、容量、言語性能、Android実機結果を別ADRに記録する。

### 7. ブラウザ用途で不要な依存パッケージのinstall scriptは実行しない

Transformers.js 4.2.0はパッケージとしてNode.js向け依存も含み、`pnpm install` 時には `onnxruntime-node@1.24.3`、`protobufjs@7.6.6`、`sharp@0.34.5` のbuild scriptが検出される。しかし本サイトのAI推論はブラウザ内のWebGPU経路だけを使用し、これらNode.js向けbuild scriptの実行を必要としない。

公開リポジトリのサプライチェーン境界を狭くするため、`pnpm-workspace.yaml` の `allowBuilds` で上記3パッケージを明示的に `false` とする。既存ビルドに必要な `esbuild@0.28.2` だけを `true` のまま維持する。

必要性を確認せずbuild scriptを許可することはしない。将来Transformers.jsやビルド方式の変更によりNode.js側処理が必要になった場合は、対象スクリプトの用途とリスクを確認してから本ADRを更新する。

## Consequences

### Positive

- モデル規模を維持したままWebLLMとTransformers.jsを比較でき、原因分離がしやすい。
- Transformers.js公式のWebGPU/ONNX Runtime経路を利用できる。
- APIキーやサーバーAIを追加せず、静的サイト構成と端末内推論を維持できる。
- モデルrevisionをcommitで固定し、モデル成果物の参照先を再現可能にできる。
- ADR 0042の教材コンテキスト、HTML出力、履歴保存に関する安全境界を維持できる。
- ブラウザ実行に不要なNode.js依存のinstall scriptを実行せず、依存導入時の実行権限を最小化できる。

### Negative

- 初回に約1.4GB級のq4f16モデル成果物を取得する必要がある。
- WebGPUとAndroid GPUドライバへの依存自体は残る。
- Transformers.jsへ切り替えても、1.7Bモデル自体の回答能力が教材チューター用途に不足する可能性がある。
- ランタイム変更により、WebLLM固有のAPIとキャッシュは利用できなくなる。
- Hugging Faceからモデル成果物を取得するため、初回ロード時にはHugging Faceへのネットワークアクセスが発生する。

## Validation

自動検証では次を確認する。

- `pnpm install` で `@huggingface/transformers@4.2.0` とlockfileが一致し、`@mlc-ai/web-llm` が残っていないこと。
- `pnpm install` が、不要な `onnxruntime-node`、`protobufjs`、`sharp` のbuild scriptを許可せず成功すること。
- `pnpm check` が通ること。
- `pnpm build` が通り、Transformers.jsを含むWeb Workerを静的ビルドできること。
- `scripts/verify-study-ai.mjs` がモデルID、40桁commit revision、`q4f16`、Web Worker、WebGPU、thinking無効化、HTML非評価の境界を検証すること。

Android実機では、ChromeまたはChromium系ブラウザで次を順番に確認する。

1. `1+1はいくつですか？` のような短い質問に自然な日本語で回答できる。
2. 短い教材コンテキスト付き質問でも文字列が破綻しない。
3. 実際の演習ページで「練習問題の解き方がわかりません」のような質問へ、教材に沿った日本語回答を返せる。
4. 生成停止、履歴消去、再質問が動作する。
5. ページ再読込後にモデル成果物のブラウザキャッシュが再利用される。
6. モデルロードまたは推論が失敗した場合、教材本文は利用可能なままでAIだけがエラー表示になる。

1または2で出力が破綻する場合はモデル比較へ進まない。1と2が安定し、3の回答能力だけが不足する場合に次のモデル比較を開始する。

## Supersedes

ADR 0042を置き換える。ADR 0042の教材UI、安全なコンテキスト抽出、学習支援プロンプト、プレーンテキスト出力、sessionStorage方針は本ADRへ引き継ぎ、WebLLM固有の決定だけをTransformers.jsへ変更する。

## Related Decisions

- ADR 0005: package version policy
- ADR 0022: component-owned content styles
- ADR 0040: portable static math rendering
- ADR 0041: cross-course practice and browser learning records
- ADR 0042: browser local AI study chat, superseded by this ADR
