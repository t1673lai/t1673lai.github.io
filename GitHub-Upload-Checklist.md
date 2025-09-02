# GitHub 網頁上傳 MD 檔案檢查清單

## ✅ 上傳前檢查
1. **檔名格式正確**
   - `_publications`: `YYYY-MM-DD-filename.md`
   - `_posts`: `YYYY-MM-DD-filename.md`
   - `_teaching`: `YYYY-MM-DD-filename.md` 
   - `_talks`: `YYYY-MM-DD-filename.md`

2. **Front Matter 完整**
   ```yaml
   ---
   title: "文章標題"
   collection: publications  # 對應資料夾名稱
   permalink: /publication/檔名
   date: YYYY-MM-DD
   ---
   ```

## ✅ 上傳後檢查
1. **確認上傳到正確分支**
   - 必須是 `main` 分支
   - 不是其他分支

2. **檢查 GitHub Actions**
   - 進入 repo 的 "Actions" 頁籤
   - 看是否有新的 workflow 執行
   - 等待變成綠色勾號

3. **檢查建置時間**
   - 通常需要 3-5 分鐘
   - 大檔案可能需要 10-15 分鐘

4. **確認 GitHub Pages 設定**
   - Settings → Pages
   - Source: "GitHub Actions" (不是 Deploy from branch)

## ❌ 常見錯誤
1. **檔名錯誤** - 缺少日期前綴
2. **Front Matter 錯誤** - 格式不正確或欄位遺漏
3. **上傳到錯誤分支** - 不是 main 分支
4. **沒等建置完成** - 太快檢查網站
5. **瀏覽器快取** - 需要強制重新整理 (Ctrl+F5)

## 🔧 除錯步驟
1. 檢查 Actions 頁面是否有錯誤訊息
2. 確認檔案是否真的在 main 分支
3. 嘗試手動觸發 workflow (Actions → Run workflow)
4. 清除瀏覽器快取重新載入網站
