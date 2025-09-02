#!/bin/bash

# 自動時間戳注入腳本
# 用於 GitHub Actions 自動為新增和修改的文章添加時間戳

set -e

# 設定時區為台北時間
export TZ='Asia/Taipei'
current_time=$(date '+%Y-%m-%d %H:%M:%S %z')
current_date=$(date '+%Y-%m-%d')

echo "Current time: $current_time"
echo "Current date: $current_date"

# 函數：處理單個檔案的時間戳
process_file() {
    local file="$1"
    local is_new="$2"
    
    echo "Processing $([[ $is_new == "true" ]] && echo "new" || echo "modified") file: $file"
    
    # 檢查檔案是否存在且在指定目錄中（包含根目錄的測試檔案）
    if [[ ! -f "$file" ]] || [[ ! "$file" =~ ^_(publications|posts|teaching|talks|portfolio)/.*\.md$|^[^/]*test.*\.md$ ]]; then
        echo "Skipping $file (not a content file)"
        return
    fi
    
    # 備份原檔案
    cp "$file" "$file.bak"
    
    # 檢查是否有 front matter
    if ! head -1 "$file" | grep -q "^---$"; then
        echo "Skipping $file (no front matter)"
        rm "$file.bak"
        return
    fi
    
    # 處理新檔案
    if [[ $is_new == "true" ]]; then
        # 檢查是否已有完整的 date 欄位
        if ! grep -q "^date:" "$file"; then
            # 添加 date 欄位
            sed -i "/^---$/a date: $current_time" "$file"
            echo "  ✓ Added date: $current_time"
        elif grep -q "^date: [0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}$" "$file"; then
            # 更新只有日期的 date 欄位
            sed -i "s/^date: \([0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}\)$/date: \1 $(date '+%H:%M:%S %z')/" "$file"
            echo "  ✓ Enhanced date with time"
        fi
        
        # 添加 modified 欄位（與 date 相同）
        if ! grep -q "^modified:" "$file"; then
            sed -i "/^date:/a modified: $current_time" "$file"
            echo "  ✓ Added modified: $current_time"
        fi
    else
        # 處理修改的檔案 - 只更新 modified 時間
        if grep -q "^modified:" "$file"; then
            sed -i "s/^modified:.*/modified: $current_time/" "$file"
            echo "  ✓ Updated modified: $current_time"
        else
            sed -i "/^date:/a modified: $current_time" "$file"
            echo "  ✓ Added modified: $current_time"
        fi
    fi
    
    # 檢查是否有實際變更
    if diff -q "$file" "$file.bak" > /dev/null; then
        echo "  - No changes made to $file"
        mv "$file.bak" "$file"
    else
        echo "  ✓ Updated $file"
        rm "$file.bak"
    fi
}

# 主要處理邏輯
echo "=== Auto Timestamp Injection ==="

# 檢查是否有前一次 commit
if git rev-parse HEAD~1 >/dev/null 2>&1; then
    # 處理新增的檔案
    echo "Processing new files..."
    git diff --name-status HEAD~1 HEAD | grep '^A.*\.md$' | cut -f2 | while read file; do
        process_file "$file" "true"
    done
    
    # 處理修改的檔案
    echo "Processing modified files..."
    git diff --name-status HEAD~1 HEAD | grep '^M.*\.md$' | cut -f2 | while read file; do
        process_file "$file" "false"
    done
else
    echo "No previous commit found, processing all markdown files as new..."
    find _publications _posts _teaching _talks _portfolio -name "*.md" 2>/dev/null | while read file; do
        process_file "$file" "true"
    done
fi

echo "=== Timestamp injection completed ==="
