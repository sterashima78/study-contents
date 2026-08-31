# ADR 0052: Android向けブラウザ内AIをWebLLMへ戻して低メモリ設定で検証する

- Status: Superseded
- Date: 2026-08-31
- Superseded by: ADR 0055
- Related: ADR 0005, ADR 0042, ADR 0047, ADR 0049, ADR 0051

## Context

Android実機では、ADR 0042のWebLLM + `Qwen3-1.7B-q4f16_1-MLC` はモデルロードと回答生成まで到達していたが、回答文字列が不自然に破綻するケースがあった。

原因分離のためADR 0047でTransformers.js + ONNX Runtime WebGPUへ切り替えたところ、Qwen3 1.7BはONNX session作成時に `std::bad_alloc` で失敗した。ADR 0051でQwen3 0.6Bへ縮小した後も、モデル取得後の準備段階でAndroidブラウザ自体が終了し、JavaScript側で例外を捕捉できなかった。

この結果から、対象Android端末ではローカルLLMそのものが不可能なのではなく、Transformers.js / ONNX Runtimeのモデル展開・session初期化時のピークメモリが実用上の制約になっていると判断する。すでに1.7Bモデルの生成まで到達した実績があるWebLLMへ戻し、入力長とprefill時のメモリ負荷を抑えて原因を再検証する。

2026-08-31時点で `@mlc-ai/web-llm` のlatestは `0.2.84` であるため、ADR 0005の最新版方針に従ってまず0.2.84を採用する。一方、0.2.83以降のshape cacheにより一部GPUで長めのprefillが失敗する未解決報告があるため、Android実機で文字列破綻が再現する場合は、同一モデル・同一入力で0.2.82との互換性比較を次の判断材料とする。

## Decision

### 1. 推論ランタイムをWebLLM 0.2.84へ戻す

`@huggingface/transformers` を削除し、`@mlc-ai/web-llm@0.2.84` を完全バージョンで直接依存へ戻す。

モデルは、Android実機でロードと生成まで到達した実績がある `Qwen3-1.7B-q4f16_1-MLC` とする。利用者入力からモデルID、URL、runtime versionを指定できる経路は追加しない。

推論は引き続き専用Web Workerで実行し、`WebWorkerMLCEngineHandler` と `CreateWebWorkerMLCEngine` を利用する。

### 2. Android向けにcontext windowとprefill chunkを縮小する

モデルロード時の設定を次に固定する。

```text
context_window_size: 2048
prefill_chunk_size: 128
```

以前の4096 contextよりKV cacheを抑え、prefill chunkを小さくして一時バッファのピークを抑える。生成品質と安定性の確認前にcontext windowを拡大しない。

### 3. モデルロード直後に短い自己診断を実行する

初回ロード完了後、教材コンテキストや会話履歴を渡す前に `1+1は？数字だけで答えてください。` という短い質問を実行する。

回答に数値2が含まれない場合、通常の教材質問へ進まず `self-test` stageとして失敗させる。これにより、短いpromptでも生成自体が破綻している状態と、教材コンテキストを追加した後だけ問題が起きる状態を分離する。

自己診断の質問・回答はsessionStorageへ保存しない。

### 4. 教材コンテキストを表示位置と質問に関連する少数セクションへ絞る

ページ全体を広くモデルへ渡さず、現在の画面付近の教材と、最新質問の語句に関連する教材sectionを優先する。モデル入力へ含める関連sectionは最大2件、1件あたり420文字までとする。関連sectionを取得できない場合だけ、教材本文を650文字までの概要として利用する。

`script`、`style`、`template`、AIチャット自身、入力要素、`math-field` は引き続き除外し、内部の問題正答や生成ロジックを教材コンテキストとして渡さない。

### 5. 既存の診断表示と安全境界を維持する

ADR 0049で導入した失敗時診断UIを継続する。表示内容はWebLLM向けに、stage、runtime version、model ID、context window、prefill chunk、WebGPU、adapter、`shader-f16`、サニタイズ済み例外文字列とする。

質問本文、教材本文、会話履歴、完全なUser-Agent、GPUデバイス名を診断情報へ含めない。token、access token、auth query、Bearer形式の値は表示前に伏せる。モデル出力は引き続き `textContent` のみで描画し、HTMLとして評価しない。

### 6. WebLLM 0.2.82は自動フォールバックにしない

0.2.84の既知回帰は対象Android端末で同一原因と確認できていないため、現時点では最新版から自動的にダウングレードしない。

0.2.84で短い自己診断は成功するが、教材コンテキスト付き生成で再び文字列破綻またはprefill失敗が起きる場合に限り、同一端末・同一モデル・同一質問で0.2.82を比較する。0.2.82を採用する場合は最新版方針の例外として別ADRまたは本ADRの更新で理由と解除条件を明記する。

## Consequences

### Positive

- Android実機で1.7Bモデルの生成まで到達した実績のあるランタイムへ戻せる。
- Transformers.js / ONNX Runtimeで発生したsession初期化時のメモリピーク問題を回避できる可能性が高い。
- context window、prefill chunk、教材コンテキストを同時に抑え、モバイルGPUのprefill負荷を減らせる。
- 短い自己診断により、モデル実行そのものと教材入力追加後の問題を切り分けられる。
- APIキーやサーバーAIを追加せず、質問と教材データをブラウザ内に留める方針を維持できる。

### Negative

- WebLLM 0.2.84には一部GPUで長めのprefillが失敗する未解決報告があり、Android実機での安定性は再検証が必要である。
- context windowと教材コンテキストを縮小するため、長いページ全体を横断した質問では参照情報が不足する可能性がある。
- 自己診断分だけ初回利用時の生成時間が増える。
- Qwen3 1.7B自体の教材チューター品質が十分かどうかは、ランタイム安定化後に改めて評価する必要がある。

## Validation

- `pnpm install` で `@mlc-ai/web-llm@0.2.84` とlockfileが一致し、`@huggingface/transformers` が残っていないこと。
- `pnpm check` が通ること。
- `pnpm build` が通り、WebLLM Workerを静的ビルドできること。
- `scripts/verify-study-ai.mjs` がWebLLM version、Qwen3 1.7B、2048 context、128 prefill、自己診断、Worker、教材コンテキスト上限、安全な出力境界を検証すること。
- Android実機でモデルロード後にブラウザが終了せず、自己診断を通過すること。
- `1+1=` の通常質問、短い教材質問、実際の演習質問を順に確認すること。
- 文字列破綻が再現した場合は、診断情報と入力条件を記録して0.2.82互換性比較の要否を判断すること。

## Superseded by

ADR 0055で、0.2.84の最小自己診断でも文字列破綻が再現した実機結果を受け、同一条件のままWebLLM 0.2.82へ固定してA/B比較する決定に置き換える。

## Supersedes

ADR 0047のTransformers.js採用とADR 0051のONNX Qwen3 0.6B採用を置き換える。ADR 0049の診断UI、診断情報を保存しない方針、学習データや識別性の高い情報を診断へ含めない方針は継続し、runtime固有のstageと表示項目だけを本ADRへ更新する。
