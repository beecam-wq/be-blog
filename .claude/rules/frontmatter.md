# Frontmatter 仕様

## 必須フィールド
```yaml
---
title: "記事タイトル"
date: "YYYY-MM-DD"
category: "design" # design / photo / book / film / note
tags: []
draft: true # 公開時は false に変更
---
```

## 任意フィールド
```yaml
description: "SNSシェア時の説明文（100字以内）"
cover: "/images/posts/YYYY-MM-DD_filename.jpg"
related: [] # 関連記事スラッグの配列
```

## ルール
- `title` は30字以内を目安。長すぎるとSNSで切れる
- `date` は執筆日ではなく**公開日**
- `draft: true` のまま `posts/` に入れない（`drafts/` に置く）
- `tags` は小文字・英語を推奨。日本語タグも可（例: `["typography", "Bauhaus"]`）
- `cover` 画像は `public/images/posts/` に配置し、相対パスではなくルートパスで記述
