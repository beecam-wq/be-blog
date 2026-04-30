# microCMS スキーマ定義

Hobbyプラン（API 3つ）での構成。microCMS管理画面で設定する際の仕様書。

---

## API 1 — `posts`（記事）

| フィールドID | 表示名 | 型 | 必須 | 備考 |
|---|---|---|---|---|
| `title` | タイトル | テキスト | ✓ | 30字目安 |
| `slug` | スラッグ | テキスト | ✓ | URLスラッグ（英数字・ハイフン） |
| `postType` | 投稿タイプ | セレクト | ✓ | `diary` / `review` / `photo` / `art` |
| `category` | カテゴリ | セレクト | ✓ | `design` / `photo` / `book` / `film` / `note` |
| `body` | 本文 | リッチテキスト | ✓ | |
| `description` | 説明文 | テキスト | | SNSシェア用（100字以内） |
| `coverImage` | カバー画像 | 画像 | | |
| `tags` | タグ | テキスト（複数） | | 小文字英語推奨 |
| `publishedAt` | 公開日 | 日時 | ✓ | |
| `updatedAt` | 更新日 | 日時 | | 加筆・修正した日 |
| `draft` | 下書き | 真偽値 | | `true` = 非公開 |
| `relatedPosts` | 関連記事 | コンテンツ参照（`posts`） | | 複数選択可 |
| `reviewScore` | 評価スコア | 数値 | | film / book のみ使用（1〜5） |
| `director` | 監督名 | テキスト | | filmのみ |
| `originalTitle` | 原題 | テキスト | | filmのみ。例: _De son vivant_ |
| `platform` | 配信プラットフォーム | テキスト | | filmのみ。例: Netflix, Disney+ |
| `releaseYear` | 公開年 | 数値 | | filmのみ |
| `author` | 著者名 | テキスト | | bookのみ |

---

## API 2 — `tags`（タグ）

| フィールドID | 表示名 | 型 | 必須 | 備考 |
|---|---|---|---|---|
| `name` | タグ名 | テキスト | ✓ | 例: Typography |
| `slug` | スラッグ | テキスト | ✓ | 例: typography |

---

## API 3 — `profile`（プロフィール）

| フィールドID | 表示名 | 型 | 必須 | 備考 |
|---|---|---|---|---|
| `name` | 著者名 | テキスト | ✓ | |
| `bio` | プロフィール文 | リッチテキスト | | |
| `avatar` | アイコン画像 | 画像 | | |
| `twitterUrl` | Twitter URL | テキスト | | SNSリンク |

---

## 現行Frontmatterとの対応

| Markdown frontmatter | microCMS フィールド |
|---|---|
| `title` | `title` |
| `date` | `publishedAt` |
| `category` | `category` |
| `tags` | `tags` |
| `description` | `description` |
| `cover` | `coverImage` |
| `draft` | `draft` |
| `related` | `relatedPosts` |
| —（新規）| `updatedAt` |
| —（新規）| `originalTitle` |
