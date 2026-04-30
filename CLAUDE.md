# be-blog — Claude Code ガイド

## プロジェクト概要
Yasuhide Ura 個人ブログ。デザイン・写真・絵本・映画レビューなど、
気になることを気軽に書いていく場所。技術的な整合性より、
**書き手の目線と温度感**を最優先にすること。

## 技術スタック
- フレームワーク: Astro（静的サイト生成）
- コンテンツ: Markdown / MDX（`content/posts/` に格納）
- スタイル: Tailwind CSS
- 言語: 日本語（UIテキスト・記事ともに）

## 絶対ルール（禁止事項）
- ❌ 記事のトーンを「ですます体」に統一しない（文体は記事ごとに自然体で）
- ❌ SEOのためだけのキーワード詰め込みをしない
- ❌ `content/posts/` のファイルを無断で削除・移動しない
- ❌ `git push --force` は使わない
- ❌ 画像ファイルを `public/` 以外に置かない

## コンテンツカテゴリ
| スラッグ | 内容 |
|---|---|
| `design` | デザイン・UI・タイポグラフィ |
| `photo` | 写真・カメラ・ライティング |
| `book` | 絵本・読み物レビュー |
| `film` | 映画・映像レビュー |
| `note` | 日常メモ・雑記 |

## ファイル命名規則
`YYYY-MM-DD_slug-in-english.md`（例: `2026-04-01_dieter-rams-design.md`）

## 詳細ルール（参照先）
- 記事執筆ルール → @.claude/rules/writing.md
- Frontmatter仕様 → @.claude/rules/frontmatter.md
- コミット規約 → @.claude/rules/git.md

## コマンド一覧（よく使うもの）
- `/new-post` — 新記事の下書きを作成
- `/review` — 記事のトーン・構成をレビュー
- `/publish` — 下書きを `posts/` に移動して公開準備

## Sub-agents
- `editor` — 文体・構成・表現の編集専門
- `tagger` — タグ・カテゴリの自動付与
