# be-blog — アーキテクチャ設計書

## 設計思想
ベストプラクティス（`2026-03-20_claude-code-best-practice-guide`）に倣い、
CLAUDE.md はインデックス役（60行以内）に絞り、詳細は各ファイルへ委譲する構成。

```
prj_be-blog/
├── CLAUDE.md                    # ★ インデックス（60行以内）
│
├── .claude/
│   ├── rules/                   # 詳細ルール群（CLAUDE.mdから@importで参照）
│   │   ├── writing.md           # 文体・執筆ルール
│   │   ├── frontmatter.md       # Frontmatter仕様
│   │   └── git.md               # コミット規約
│   │
│   ├── commands/                # 明示的に呼び出すプロンプトテンプレート
│   │   ├── new-post.md          # /new-post — 下書き作成
│   │   ├── review.md            # /review — 記事レビュー
│   │   └── publish.md           # /publish — 公開準備
│   │
│   ├── agents/                  # 独立コンテキストで動く専門エージェント
│   │   ├── editor.md            # ブランドエディター（Opus）
│   │   └── tagger.md            # タグ付与（Haiku・軽量）
│   │
│   ├── skills/                  # 必要時に自動展開される知識
│   │   ├── writing-style.md     # ブランドボイス・文体の知識
│   │   └── astro-blog.md        # Astro技術構成の知識
│   │
│   └── ARCHITECTURE.md          # このファイル
│
├── content/
│   ├── posts/                   # 公開済み記事（draft: false）
│   └── drafts/                  # 下書き（draft: true、ビルド対象外）
│
└── public/
    └── images/posts/            # 記事カバー画像

```

## Commands / Sub-agents / Skills の使い分け

| 機能 | いつ使う | 例 |
|---|---|---|
| **Commands** | ルーティンワークを呼び出す | `/new-post`、`/review`、`/publish` |
| **Sub-agents** | メイン作業と並行して専門タスクを任せる | 編集依頼、タグ付与 |
| **Skills** | キーワードを検知して知識を自動注入 | 執筆時のボイスガイド、Astro構成 |

**判断基準**: 迷ったら Commands から始める → 複雑になったら Sub-agents へ昇格

## 今後の拡張候補

| 機能 | 種別 | 概要 |
|---|---|---|
| `/image-alt` | Command | 画像のalt文を自動生成 |
| `seo-checker` | Sub-agent | title・descriptionのSEO最適化 |
| `astro-component` | Skill | 新コンポーネント追加時の知識展開 |
| pre-commit hook | Hook | Frontmatterの必須フィールドチェック |
