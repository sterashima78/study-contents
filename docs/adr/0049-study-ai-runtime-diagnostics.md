# ADR 0049: ブラウザ内AIの実行失敗を端末上で診断可能にする

- Status: Accepted
- Date: 2026-08-30
- Related: ADR 0005, ADR 0042, ADR 0047

## Context

ADR 0047でWebLLMからTransformers.js + ONNX Runtime WebGPUへ切り替えた後、Android実機でAI実行が失敗するケースが確認された。

従来のUIはWorkerから返された元エラーを汎用メッセージへ置き換えるため、モデル取得、tokenizer初期化、ONNXモデル初期化、WebGPU warm-up、回答生成のどの段階で失敗したかを端末上から判別できなかった。モバイル環境では開発者コンソールの確認も容易ではない。

原因を推測したままモデル変更へ進むと、モデル固有障害、メモリ不足、WebGPU/ONNX Runtime互換性、通信失敗を混同する可能性がある。まず実行経路を観測可能にし、その結果から次のモデル比較またはランタイム調整を判断する。

## Decision

### 1. Workerが失敗段階を明示する

`study-ai.worker.ts` は実行失敗を `tokenizer`、`model`、`warmup`、`generation` の4段階に分類してメインスレッドへ返す。Workerの例外文字列は制御文字を除去し、最大1200文字に制限する。

### 2. 失敗時だけ診断情報をUIへ表示する

AIチャットの実行失敗時に「診断情報」を展開表示し、失敗段階、推論ランタイム、固定済みモデルID、モデルrevision、dtype、WebGPU利用可否、GPU adapter取得可否、`shader-f16` featureの可否、サニタイズ済みの元エラーメッセージをプレーンテキストで示す。成功時や再試行開始時には診断表示を消去する。

### 3. 診断情報へ学習内容や識別性の高い情報を含めない

診断情報には質問本文、教材本文、会話履歴、sessionStorage内容、完全なUser-Agent、任意のGPUデバイス名を含めない。

エラーメッセージ中のtoken、access token、auth query、Bearer形式の値は表示前に伏せる。診断情報はsessionStorageやlocalStorageへ保存せず、失敗したページのDOM上にだけ一時表示する。

### 4. 診断結果を見てからモデル変更を判断する

本ADRではQwen3-1.7B-ONNXからモデルを変更しない。`model` または `warmup` で失敗する場合は、ONNXモデルの健全性、Androidメモリ、WebGPU/ONNX Runtime互換性を確認する。必要なら次の切り分けとしてQwen3-0.6B-ONNXを比較する。

`tokenizer` や通信系エラーの場合はモデル変更より先にモデル配信経路を確認する。`generation` でのみ失敗する場合は入力長、メモリ使用量、生成設定を調査する。

## Consequences

### Positive

- Android実機だけで失敗段階と元エラーを確認できる。
- モデル変更とランタイム問題の切り分けを実測に基づいて進められる。
- 質問や教材本文を診断情報へ含めず、既存の学習データ境界を維持できる。
- 認証情報らしい値を伏せ、エラー表示による漏えいリスクを抑えられる。

### Negative

- ランタイム内部の英語エラーが利用者に見える場合がある。
- WebGPU adapter確認のため、失敗後に追加で `requestAdapter()` を1回行う。
- 診断情報だけではGPUドライバ内部障害を必ず特定できるとは限らない。

## Validation

- `pnpm check` が通ること。
- `pnpm build` が通ること。
- `scripts/verify-study-ai.mjs` が診断UI、失敗段階、`shader-f16`診断、User-Agent非収集を検証すること。
- モデルロードまたは生成失敗時に診断情報が表示されること。
- 診断情報に質問本文、教材本文、会話履歴が含まれないこと。
- 再試行開始時と履歴消去時に以前の診断情報が消えること。
- Android実機で表示された `stage` と `error` を基に、ADR 0047で定義した次段階の判断を行うこと。
