# /publish — 下書きを公開準備する

## 目的
`content/drafts/` の記事を `content/posts/` に移動し、公開前の最終チェックを行う。
本番サイトの記事は microCMS から読み込まれるため、最後に microCMS への投稿内容を案内する。

## 実行手順

1. 対象ファイルのパスを受け取る

2. 公開前チェックリストを確認する：
   - [ ] Frontmatterに必須フィールドがすべて揃っているか
   - [ ] `draft: true` → `draft: false` に変更されているか
   - [ ] タイトルは30字以内か
   - [ ] `description` が書かれているか（100字以内）
   - [ ] `cover` 画像が設定されているか（任意だが推奨）
   - [ ] ファイル名の日付が `date` フィールドと一致しているか

3. 問題があれば **ユーザーに確認を求めてから**修正する

4. チェックが完了したら：
   - ファイルを `content/posts/` に移動（`drafts/` から削除）
   - `draft: false` に更新
   - 移動後のパスを報告

5. microCMS への投稿内容を案内する（Claude は microCMS に接続できないため、投稿はユーザーが管理画面で行う）：
   - 記事の値を埋めた表を提示する。フィールド仕様は `.claude/rules/microcms-schema.md` を参照
   - 対応は次のとおり

   | microCMS | 入れる値 |
   |---|---|
   | `title` | Frontmatter の `title` |
   | `slug` | ファイル名から日付を除いた英語スラッグ（例: `2026-10-03_reading-rachi-to-ketsudan.md` → `reading-rachi-to-ketsudan`） |
   | `postType` | 目安: book / film → `review`、note → `diary`、photo → `photo`。design など迷う場合はユーザーに確認する |
   | `category` | Frontmatter の `category` |
   | `body` | Frontmatter（`---` で囲まれた部分）より下の本文。リッチテキストにそのまま貼り付ける（空行ごとに段落になる） |
   | `description` | Frontmatter の `description` |
   | `tags` | Frontmatter の `tags` を**半角スペース区切りの文字列**にする（例: `読書 蓮池薫`） |
   | `coverImage` | `cover` がある場合のみ、画像を microCMS にアップロード |
   | `author` | book の場合のみ、著者名 |
   | `director` / `originalTitle` / `platform` / `releaseYear` | film の場合のみ |
   | `draft` | オフ（`false`） |

   - `publishedAt` は microCMS が自動で付ける。Frontmatter の `date` は使われず、公開した日の日付になることを伝える
   - 公開すると microCMS の Webhook で Vercel が自動で再ビルドされる。数分後にトップページと `/posts/<slug>` を確認するよう案内する

6. コミットメッセージ案を提示する（実行はユーザーが行う）

## 禁止事項
- ユーザーの確認なしに `drafts/` のファイルを削除しない
- チェックリストを飛ばして移動しない
- microCMS への投稿が済むまで「サイトに公開された」と報告しない（`main` へのマージだけでは本番に反映されない）
