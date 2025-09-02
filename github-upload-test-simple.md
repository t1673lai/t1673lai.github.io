---
title: "GitHub網頁上傳測試：不包含手動時間"
collection: publications
category: manuscripts
permalink: /publication/2025-08-29-github-upload-test
excerpt: '測試在GitHub網頁上傳時，沒有手動設定時間的情況。'
date: 2025-08-29
venue: '網頁上傳測試期刊'
citation: '賴鵬仁. (2025). &quot;GitHub網頁上傳測試：不包含手動時間.&quot; <i>網頁上傳測試期刊</i>. 第1卷, 第1期, 頁1-2.'
share: true
---

## GitHub 網頁上傳測試

這個檔案模擬在 GitHub 網頁介面上傳的情況：

### 時間來源測試

1. **Date 欄位**：只有日期 `2025-08-29`（沒有具體時間）
2. **Modified 欄位**：完全沒有設定
3. **Git 時間戳**：依賴 `jekyll-last-modified-at` 插件

### 預期結果

- 上傳時間：應該顯示日期（不顯示 00:00）
- 編輯時間：應該顯示 Git 的實際 commit 時間
