"Talk is cheap. Show me the code."  
― Linus Torvalds

**老子第41章**  
上德若谷  
大白若辱  
大方無隅  
大器晚成  
大音希聲  
大象無形  
道隱無名

*拳打千遍, 身法自然*

---

### 🐢 Python Turtle Graphics 課程系列

本系列課程將帶你從基礎到進階，學會使用 Python Turtle 創作精美的圖形作品。

#### 本系列文章之連結：

<!-- 課程介紹頁面 -->
{% if page.permalink == "/courses/python-turtle-01-introduction" %}
- **課程介紹 - Python Turtle Graphics 完整教學** *(目前頁面)*
{% else %}
- [課程介紹 - Python Turtle Graphics 完整教學](/courses/python-turtle-01-introduction)
{% endif %}

<!-- 動態載入本地課程 -->
{% for course in site.courses %}
  {% if course.permalink contains "python-turtle" and course.permalink != "/courses/python-turtle-01-introduction" %}
    {% if course.permalink == page.permalink %}
- **{{ course.title }}** *(目前頁面)*
    {% else %}
- [{{ course.title }}]({{ course.permalink }})
    {% endif %}
  {% endif %}
{% endfor %}

<!-- 尚未遷移的外部連結課程 -->
- 從turtle海龜動畫 學習 Python - 高中彈性課程系列 8.1 碎形 L-system [[外部連結]](https://blog.csdn.net/m0_47985483/article/details/117931956?spm=1001.2014.3001.5502){:target="_blank"}
- 從turtle海龜動畫 學習 Python - 高中彈性課程系列 9 Python 物件導向介紹 [[外部連結]](https://blog.csdn.net/m0_47985483/article/details/110688222?spm=1001.2014.3001.5502){:target="_blank"}
- 從turtle海龜動畫 學習 Python - 高中彈性課程系列 9.1 Python 物件導向的練習 [[外部連結]](https://blog.csdn.net/m0_47985483/article/details/119729966){:target="_blank"}
- 從turtle海龜動畫 學習 Python - 高中彈性課程系列 10 藝術畫 自定義海龜形狀 [[外部連結]](https://blog.csdn.net/m0_47985483/article/details/110649238?spm=1001.2014.3001.5502){:target="_blank"}
- 從turtle海龜動畫 學習 Python - 高中彈性課程系列 10.1 藝術畫 python繪製天然雪花結晶 [[外部連結]](https://blog.csdn.net/m0_47985483/article/details/122262036){:target="_blank"}
- 從turtle海龜動畫 學習 Python - 高中彈性課程系列 10.2 藝術畫 Python 製作生成式藝術 [[外部連結]](https://blog.csdn.net/m0_47985483/article/details/126163337){:target="_blank"}
- 從turtle海龜動畫 學習 Python - 高中彈性課程系列 11.1 氣泡排序 - 用 turtle 呈現演算法之執行動作 [[外部連結]](https://blog.csdn.net/m0_47985483/article/details/115699161?spm=1001.2014.3001.5502){:target="_blank"}
- 從turtle海龜動畫 學習 Python - 高中彈性課程系列 11.2 maze 迷宮 - 用 turtle 呈現演算法之執行動作 [[外部連結]](https://blog.csdn.net/m0_47985483/article/details/111172062?spm=1001.2014.3001.5502){:target="_blank"}

---
