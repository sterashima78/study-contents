# study-contents

Astro で構成する学習コンテンツサイトです。GitHub Pages へ GitHub Actions からデプロイします。

## 開発

```sh
pnpm install
pnpm dev
```

## チェック

```sh
pnpm check
pnpm build
```

Pull Request では CI が Biome とビルドを実行します。`main` へのコミットでは同じチェック後に GitHub Pages へデプロイします。
