# GitHub 網頁上傳 Publications 範本

複製以下內容，在 GitHub 網頁新增檔案時使用：

```markdown
---
title: "您的論文標題"
collection: publications
category: manuscripts
permalink: /publication/YYYY-MM-DD-your-article-name
excerpt: '論文簡短摘要，會顯示在列表頁面。'
date: YYYY-MM-DD HH:MM:SS +0800
venue: '期刊或會議名稱'
citation: '作者. (年份). &quot;論文標題.&quot; <i>期刊名稱</i>. 卷號, 期號, 頁碼範圍.'
share: true
---

## 您的論文內容

在這裡撰寫論文內容...
```

## 時間設定說明

### 選項 1：完整時間（推薦）
```yaml
date: 2025-08-29 14:30:00 +0800
```
- 顯示：2025年08月29日 14:30

### 選項 2：只有日期
```yaml
date: 2025-08-29
```
- 顯示：2025年08月29日

### 選項 3：依賴 Git 時間
```yaml
date: 2025-08-29
# 不設定 modified，讓系統自動使用 Git 時間戳
```
- 上傳時間：2025年08月29日
- 編輯時間：實際的 Git commit 時間

## 檔名規則
- 檔名：`YYYY-MM-DD-article-name.md`
- 位置：`_publications/` 資料夾
- permalink 要與檔名對應
