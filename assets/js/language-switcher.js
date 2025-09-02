// 語言切換功能
(function() {
    'use strict';
    
    // 語言對照表
    const translations = {
        'en': {
            'CV': 'CV',
            'Publications': 'Publications',
            'Teaching': 'Teaching',
            'Student Supervision': 'Student Supervision',
            'Blog Posts': 'Blog Posts',
            'Courses': 'Courses',
            'Portfolio': 'Portfolio',
            'Talks': 'Talks',
            // 從中文翻譯回英文
            '履歷': 'CV',
            '學術發表': 'Publications',
            '教學': 'Teaching',
            '部落格': 'Blog Posts',
            '課程': 'Courses',
            '作品集': 'Portfolio',
            '演講': 'Talks'
        },
        'zh': {
            'CV': '履歷',
            'Publications': '學術發表',
            'Teaching': '教學',
            'Student Supervision': '教學指導',
            'Blog Posts': '部落格',
            'Courses': '課程',
            'Portfolio': '作品集',
            'Talks': '演講'
        }
    };
    
    // 獲取當前語言
    function getCurrentLanguage() {
        return localStorage.getItem('preferred-language') || 'en';
    }
    
    // 設置語言
    function setLanguage(lang) {
        localStorage.setItem('preferred-language', lang);
        
        // 先重置所有導航項目到原始狀態
        resetNavigation();
        
        // 然後翻譯
        translatePage(lang);
        updateLanguageButton(lang);
    }
    
    // 重置導航欄到原始狀態
    function resetNavigation() {
        const navItems = document.querySelectorAll('.masthead__menu-item a');
        navItems.forEach(item => {
            const originalText = item.getAttribute('data-original-text');
            if (originalText) {
                item.textContent = originalText;
            }
        });
    }
    
    // 翻譯頁面
    function translatePage(lang) {
        const translation = translations[lang];
        if (!translation) return;
        
        // 翻譯導航欄 - 更精確的選擇器
        const navItems = document.querySelectorAll('.masthead__menu-item a');
        navItems.forEach(item => {
            const text = item.textContent.trim();
            // 儲存原始文字到 data 屬性中
            if (!item.getAttribute('data-original-text')) {
                item.setAttribute('data-original-text', text);
            }
            
            if (translation[text]) {
                item.textContent = translation[text];
            }
        });
        
        // 翻譯頁面標題和其他固定文字
        const titleElements = document.querySelectorAll('h1, h2, h3, h4');
        titleElements.forEach(element => {
            // 只翻譯那些明確標記的元素
            if (element.getAttribute('data-translate')) {
                const key = element.getAttribute('data-translate');
                if (translation[key]) {
                    element.textContent = translation[key];
                }
            }
        });
        
        // 翻譯特定的 strong 元素（避免全部翻譯）
        document.querySelectorAll('strong[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translation[key]) {
                element.textContent = translation[key];
            }
        });
    }
    
    // 更新語言按鈕
    function updateLanguageButton(lang) {
        const button = document.getElementById('language-switcher');
        if (button) {
            if (lang === 'en') {
                button.textContent = '中文';
                button.setAttribute('data-lang', 'zh');
            } else {
                button.textContent = 'English';
                button.setAttribute('data-lang', 'en');
            }
        }
    }
    
    // 初始化
    function init() {
        // 創建語言切換按鈕
        const langButton = document.createElement('button');
        langButton.id = 'language-switcher';
        langButton.className = 'btn btn--small language-switcher';
        langButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 1000;
            background: #52adc8;
            color: white;
            border: none;
            padding: 6px 10px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 11px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            opacity: 0.8;
            transition: opacity 0.3s ease;
        `;
        
        // 響應式設計調整
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        function handleMediaQuery(e) {
            if (e.matches) {
                // 小屏幕：調整按鈕大小和位置
                langButton.style.bottom = '10px';
                langButton.style.left = '10px';
                langButton.style.padding = '4px 8px';
                langButton.style.fontSize = '10px';
            } else {
                // 大屏幕：原始設計
                langButton.style.bottom = '20px';
                langButton.style.left = '20px';
                langButton.style.padding = '6px 10px';
                langButton.style.fontSize = '11px';
            }
        }
        
        handleMediaQuery(mediaQuery);
        mediaQuery.addListener(handleMediaQuery);
        
        // 鼠標懸停效果
        langButton.addEventListener('mouseenter', function() {
            this.style.opacity = '1';
        });
        
        langButton.addEventListener('mouseleave', function() {
            this.style.opacity = '0.8';
        });
        
        // 添加按鈕事件
        langButton.addEventListener('click', function() {
            const targetLang = this.getAttribute('data-lang');
            setLanguage(targetLang);
        });
        
        // 添加按鈕到頁面
        document.body.appendChild(langButton);
        
        // 初始化語言
        const currentLang = getCurrentLanguage();
        setLanguage(currentLang);
    }
    
    // 頁面加載完成後初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
