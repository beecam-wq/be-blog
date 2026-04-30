---
name: astro-blog
description: Astroフレームワーク・ブログ構成に関する技術知識。コンポーネント編集やコンフィグ変更時に自動展開される。
triggers:
  - astro
  - コンポーネント
  - config
  - layout
  - ビルド
---

# Astro Blog Skill — 技術構成の知識

## プロジェクト構成
```
prj_be-blog/
├── src/
│   ├── pages/
│   │   ├── index.astro        # トップページ
│   │   ├── [category]/        # カテゴリページ
│   │   └── posts/[slug].astro # 記事詳細ページ
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── PostCard.astro
│   │   └── Footer.astro
│   └── styles/
│       └── global.css
├── content/
│   ├── posts/     # 公開済み記事
│   └── drafts/    # 下書き（ビルド対象外）
├── public/
│   └── images/
│       └── posts/ # 記事カバー画像
└── astro.config.mjs
```

## Content Collections 設定
- `content/posts/` は Astro の Content Collections として管理
- スキーマは `src/content/config.ts` で定義
- `draft: true` の記事は本番ビルドから除外（`getCollection` でフィルタリング）

## よく使うコマンド
```bash
npm run dev     # 開発サーバー起動（localhost:4321）
npm run build   # 本番ビルド
npm run preview # ビルド結果をプレビュー
```

## Tailwind CSS
- クラスは `src/styles/global.css` と `@apply` で管理
- ユーティリティクラスの直書きは最小限に抑える
- フォント: 本文は `font-sans`（Noto Sans JP推奨）
