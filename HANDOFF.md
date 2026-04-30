# 引き継ぎメモ — be-blog Astro × microCMS

## 新セッションへの指示
「be-blogのAstro × microCMS構築の続きをやりたいです。前回までの進捗はHANDOFF.mdに記載しています。」

---

## 本番URL
**https://be-blog-iota.vercel.app**

GitHub: `https://github.com/beecam-wq/be-blog`（HTTPS、Personal Access Token認証）

---

## 完了済み（全項目）

| 内容 | ファイル / 備考 |
|---|---|
| microCMS接続設定 | `src/lib/microcms.ts` |
| トップページ（記事一覧） | `src/pages/index.astro` |
| 記事詳細ページ | `src/pages/posts/[slug].astro` |
| カテゴリページ | `src/pages/[category].astro` |
| 共通レイアウト | `src/layouts/BaseLayout.astro` |
| Noto Sans JP フォント | Google Fonts via `<link>` in BaseLayout |
| Tailwind Typography | `@tailwindcss/typography`（`tailwind.config.cjs`） |
| デザイン全体 | ヘッダー・フッター・カード型一覧・prose |
| OGP / Twitter Card | BaseLayout + [slug].astroに実装済み |
| Vercel デプロイ | `https://be-blog-iota.vercel.app` |
| microCMS Webhook | 記事公開・更新時にVercel自動リビルド |

---

## 技術的な注意点

- microCMSのセレクトフィールドは**配列**で返る
  ```ts
  const cat = Array.isArray(post.category) ? post.category[0] : post.category;
  ```
- `publishedAt` / `updatedAt` はmicroCMSが自動生成（手動フィールド不要）
- Tailwindのconfigは必ず `tailwind.config.cjs`（`.mjs` はjiti非対応でビルドクラッシュ）
- GitHubへのpushは `git push`（HTTPS + Personal Access Token）
- 開発サーバー: `npm run dev` → `http://localhost:4321/`

## デザイン仕様

- 背景: `#fafaf8` / テキスト: `#1c1c1c` / ミュート: `#999`, `#bbb` / ボーダー: `#e8e6e1`
- フォント: Noto Sans JP (400/500/700) / 最大幅: 680px

---

## 次にやること（優先順）

1. **microCMSで記事を追加**して本番サイトの見た目を確認する
2. **カスタムドメイン**の設定（必要であれば）— Vercel → Settings → Domains
