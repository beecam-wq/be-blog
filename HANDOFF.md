# 引き継ぎメモ — be-blog Astro × microCMS

## 新セッションへの指示
「be-blogのAstro × microCMS構築の続きをやりたいです。前回までの進捗はHANDOFF.mdに記載しています。」

---

## 完了済み

| 内容 | ファイル |
|---|---|
| microCMS接続設定 | `src/lib/microcms.ts` |
| トップページ（記事一覧） | `src/pages/index.astro` |
| 記事詳細ページ | `src/pages/posts/[slug].astro` |
| カテゴリページ | `src/pages/[category].astro` |
| 既存Markdown記事を移行済み | microCMS上の「はじめに」 |
| 共通レイアウト | `src/layouts/BaseLayout.astro` |
| Noto Sans JP フォント設定 | Google Fonts via `<link>` in BaseLayout |
| Tailwind Typography | `@tailwindcss/typography`（`tailwind.config.cjs`） |
| デザイン全体（ヘッダー・フッター・カード・prose） | 完了 |

## 技術的な注意点

- microCMSのセレクトフィールドは**配列**で返る
  - `category=["note"]` のため、フィルター時は以下で対応：
  ```ts
  const cat = Array.isArray(post.category) ? post.category[0] : post.category;
  ```
- `publishedAt` / `updatedAt` はmicroCMSが自動生成（手動フィールド不要）
- Tailwindのconfigは `tailwind.config.cjs`（package.jsonが `"type": "module"` のため `.mjs` だとjiti非対応でクラッシュする）
- 開発サーバー起動: `npm run dev` → `http://localhost:4321/`

## デザイン仕様

- 背景: `#fafaf8`（温かみのあるオフホワイト）
- テキスト: `#1c1c1c`
- ミュート: `#999` / `#bbb`
- ボーダー: `#e8e6e1`
- フォント: Noto Sans JP (400/500/700)
- 最大幅: `680px`

## 次にやること

- 記事を追加して実際の見た目を確認する
- OGP / meta設定（SNSシェア対応）
- Vercel / Netlifyにデプロイ
