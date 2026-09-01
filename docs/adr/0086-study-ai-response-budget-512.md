# ADR 0086: 端末内AIの回答予算を512トークンへ広げる

- Status: Accepted
- Date: 2026-09-01
- Related: ADR 0005, ADR 0049, ADR 0067, ADR 0072

## Context

ADR 0072では、Android実機で安定して動作した `Llama-3.2-1B-Instruct-q4f16_1-MLC` を維持しながら、練習問題の対象を具体的な1問へ絞り、回答を原則250字程度、生成上限を320 tokensとした。

その後の実機利用では、数学の練習問題について「問題文の確認 → 使う考え方 → 式への代入 → 計算 → 最終結果」まで説明する教材チューターとして、320 tokensでは回答予算が不足しやすいと判断した。

一方、Qwen3系で発生していた文字列破綻はLlama 3.2 1Bでは再現しておらず、今回の変更理由は推論経路の修正ではなく、正常に動作するモデルへ教材として十分な説明量を与えることである。

## Decision

### 1. 通常回答の生成上限を512 tokensへ引き上げる

`StudyAIChat.astro` の通常回答を次へ変更する。

```text
max_tokens: 512
```

自己診断の16 tokensは変更しない。

320から512への引き上げに留め、768以上へ一度に増やさない。Android実機で推論時間、発熱、メモリ使用量、回答品質を確認した上で次の変更を判断する。

### 2. 回答長の目安を400〜600字程度へ緩和する

system promptの250字程度という制約を外し、通常400〜600字程度を目安とする。

練習問題では、具体的な1問だけを対象にし、教材にある数値・条件を確認してから、考え方、計算手順、答えの順に説明するADR 0072の方針を維持する。不要に複数問題を列挙して回答を長くすることは許可しない。

### 3. length終了の明示を維持する

512 tokensへ増やしても `finish_reason === "length"` の検出は維持する。上限到達時は回答末尾へ「続き」と入力できる案内を表示し、無言で途中終了させない。

### 4. Android向け実行条件と安全境界は変更しない

次は変更しない。

- `Llama-3.2-1B-Instruct-q4f16_1-MLC`
- WebLLM 0.2.82
- context window 2048
- prefill chunk 128
- Web Worker実行
- 練習問題ではGuidedPracticeを優先する教材コンテキスト選択
- モデル出力を `textContent` のみで表示する境界
- 任意model ID、runtime、外部URLを利用者入力から指定できない設計

## Consequences

### Positive

- 数学・理科で途中過程を省略せず説明できる余裕が増える。
- 320 tokens由来の途中終了を減らせる。
- モデルやruntimeを変更しないため、今回の実機評価を回答予算の差として比較しやすい。
- length終了検出を残すため、512 tokensでも上限到達を利用者へ明示できる。

### Negative

- 1回答あたりの生成時間とKV cache利用量は320 tokens時より増える可能性がある。
- Android端末では長い回答ほど発熱やバッテリー消費が増える可能性がある。
- 512 tokensでも複雑な問題の完全解説には不足する場合がある。

## Validation

- 通常回答が `max_tokens: 512` であること。
- 自己診断の `max_tokens: 16` は維持すること。
- system promptが通常400〜600字程度を目安としていること。
- 具体的な1問のみを扱う制約を維持すること。
- `finish_reason === "length"` の案内を維持すること。
- `Llama-3.2-1B-Instruct-q4f16_1-MLC`、WebLLM 0.2.82、context 2048、prefill 128を変更しないこと。
- `pnpm check:study-ai` が通ること。
- `pnpm check` が通ること。
- `pnpm build` が通ること。
- Android実機で数学の練習問題を再質問し、途中過程を含む回答が不自然に切れないことを確認すること。

## Supersedes

ADR 0072の教材コンテキスト選択、1問限定、プレーンテキスト、安全境界は継承し、回答長と生成上限の判断を本ADRで置き換える。

## References

- ADR 0072
- `src/components/ai/StudyAIChat.astro`
- `src/lib/ai/system-prompt.ts`
- `scripts/verify-study-ai.mjs`
