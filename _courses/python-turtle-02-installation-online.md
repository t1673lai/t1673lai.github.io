---
title: "從turtle海龜動畫 學習 Python - 高中彈性課程系列 2 安裝 Python, 線上執行 Python"
collection: courses
type: "高中課程"
permalink: /courses/python-turtle-02-installation-online
venue: "高中彈性課程"
date: 2025-01-02
location: "Taiwan"
excerpt: "學習如何安裝 Python 開發環境，以及使用線上平台執行 Python 程式。"
---

{% include python-turtle-header.html %}

## 目錄
{: .no_toc}

* TOC
{:toc}

# 課程內容
以下我將內容分成初步及進階, 第一次讀, 可以跳過進階的部分, 以免見樹不見林
如果看到以下之註明:
-**以下可以等進階時再細看**
就表示此部分第一次讀, 可以跳過.

## 0.0 有那些公司在用Python
YouTube、Google、Yahoo!、NASA 都在內部大量地使用 Python。很多遊戲，如 EVE Online 使用 Python 來處理遊戲中繁多的邏輯。OLPC 的作業系統 Sugar 項目的大多數軟體都是使用 Python 編寫。使用 Python 編寫了如下著名應用：

    Google - 在Google內部的很多專案，例如Google應用服務引擎使用C++編寫效能要求極高的部分，然後用Python或Java/Go調用相應的模組。[17][18]
    Youtube - 影片社群網站
    Reddit - 社交分享網站
    Dropbox - 檔案分享服務
    豆瓣網 - 圖書、唱片、電影等文化產品的資料資料庫網站
    Plone - 內容管理系統
    Instagram - 是一款免費提供線上圖片及影片分享的社交應用軟體，使用Django作為後台
    Fabric - 用於管理成百上千台Linux主機的程式庫
    Python Wikipedia Robot Framework - MediaWiki的機器人程式
    MoinMoinWiki - Python寫成的Wiki程式
    Trac - 使用Python編寫的BUG管理系統
    Mailman - 使用Python編寫的郵寄清單軟體
    Mezzanine - 基於Django編寫的內容管理系統
    EVE - 網路遊戲EVE大量使用Python進行開發
    Blender - 使用Python作為建模工具與GUI語言的開源3D繪圖軟體
    Inkscape - 一個開源的SVG向量圖形編輯器。
    知乎 - 一個問答網站
    果殼 - 一個泛科技主題網站
    Odoo - 仍在持續發展壯大且最受歡迎的ERP軟體
    ZhPy - 周蟒，支援使用繁/簡中文語句編寫程式的Python語言。
Ref: 維基 https://zh.wikipedia.org/zh-tw/Python [link](
 https://zh.wikipedia.org/zh-tw/Python)

## 0.1 與 Python 的緣
我本人是在 2013 開始學 Python, 一開始是為了能在自由軟體 "動態幾何軟體 GeoGebra "中執行 Python 的烏龜繪圖的程式,  (註: 後來  GeoGebra 取消 執行 Python 程式的功能, GeoGebra 還是可以用 JavaScript 寫程式), **我因為這個因緣愛上了這個開放原始碼的 Python**, 當時我已經學習使用 Matlab 很多年了, 在當時我們系上, 還少有老師知道 Python,  一般系沿襲老習慣, 程式語言就教 C, 科學計算的課就用, Matlab.

在2013 當時要學 Python 還是相當辛苦的, 必須花很多時間上網查詢原文的說明, 書籍相對較少, 部落客的講解也很少, 還面臨 Python2 與 Python3 剛分支的情況, 即使安裝第三方庫也要上網查看半天, 當時還沒有 pip 的完善管理版本的方法, 容易碰到版本衝突的狀況, 網上說明通常都是示範在 Linux 上安裝, 現在學 Python 環境已經友善很多, 安裝第三方庫也很簡單了, Windows 對開源軟體也開始採取支持的態度.


 ## 1. 安裝Python
 初學者, 在安裝官網 Python3 之後, 就有一個官方預設的編輯器　**IDLE Python**, 
 **建議初學者就先用這個 IDLE**,  功能已經很多了, 等較熟之後, 再換其他威力更大的編輯器(或 IDE), 因為威力更大的編輯器通常功能很龐大複雜, 會讓初學者陷入一堆細節, 反而耽誤了主軸的學習.
 
 一般免費開源軟體的安裝, 可以上網搜尋 (注意是否是 **https://** 是有加密的網站, 如果是舊的 **http://**, 則較容遇到偽裝的網站, 可能會下載到有病毒的軟體!)
 下載安裝, 在Windows下, 通常按兩下, 一鍵安裝, 非常方便. 
 
 ### 1.1 Python IDLE
最簡單的就是到官網下載安裝 Python3, 安裝好後, 會有一個　**IDLE Python**, 是官方預設的 Python 的編輯器, 
就非常好用, 按 tab 鍵會有自動補齊程式碼的功能, 但是只限於內建的指令, 載入第三方庫的指令按 tab 鍵也會呈現, 已經比起 2013那時要多很多功能了.
#### IDLE 按 tab 鍵 會有自動補齊指令(拼字)的功能
![IDLE按 tab 鍵 會有自動補齊指令拼字的功能](/images/courses/python-turtle/idle-tab-autocomplete.jpg)
可以直接輸入加減乘除的運算, 次方用 **, 雙斜線 // 是整除(高斯符號) 

```python
>>> 2+3
5
>>> 2**4
16
>>> 2/3
0.6666666666666666
>>> 5 % 2
1
>>> 5/2
2.5
>>> 5//2
2

>>> import math
>>> math.floor(5/2)
2
```

要進行烏龜繪圖, 需載入 turtle 模組,
**而 turtle 是內建模組, 不須要另外安裝**, 只需要在程式碼一開始寫入
**import turtle**
或是
__from turtle import *__
就可以開始執行　烏龜繪圖的所有動作

- **以下可以等進階時再細看**

如果需要用到第三方庫, 例如　NumPy, SciPy, Matplotlib 等, (假設你是用 Windows10等) 則要打開　Windows 的　"命令提示字元"視窗, cmd, 在此 cmd 視窗 輸入
```
C:\Users\user>　pip install numpy 
C:\Users\user>　pip install scipy
```
等等
安裝完, 要使用他們的指令時, 還是得在程式碼一開始寫入
**import numpy**
**import scipy**
等等, 
就可以使用　NumPy, SciPy, Matplotlib 的指令了.

### 1.2 Anaconda + Jupyter Notebook 會自動安裝好所需的科學計算或大數據的程式庫 (or Anaconda + Spyder or Anaconda + PyCharm )
另一種工作環境 (IDE) 的選擇, 可以安裝免費(基本版免費)的　**Annaconda**, 
會自動把科學計算與資料分析要用到的所有第三方庫都裝好, 執行時, 可以選擇用 **Jupyter Notebook**, 或是 **Spyder**, _Spyder 的畫面跟　Matlab 最像_, 或是 **PyCharm**.
#### 在 Spyder 按 tab 鍵 會有自動補齊指令拼字的功能
![在 Spyder 按 tab 鍵 會有自動補齊指令拼字的功能](/images/courses/python-turtle/spyder-tab-autocomplete.jpg)

#### 在 Spyder 輸入指令(物件方法)時, 會自動提示引數之輸入法則
![在 Spyder 輸入指令(物件方法)時, 會自動提示引數之輸入法則](/images/courses/python-turtle/spyder-method-hints.jpg)

#### 在 PyCharm 不用按 tab 鍵 會有自動補齊指令拼字的功能
![在 PyCharm 不用按 tab 鍵 會有自動補齊指令拼字的功能](/images/courses/python-turtle/pycharm-autocomplete.jpg)
- **以上可以等進階時再細看**

## 2 線上執行 Python 程式
有時, 教學現場欠缺個人電腦或筆電, 可以改用線上執行程式, 尤其目前雲端概念正興起, 幾乎人手一支手機或平板, 只要能上網, 就可以線上執行程式,
線上執行程式, 就是用瀏覽器連到一些可以線上執行程式的網站,

較常聽說的站有至少幾個:

 - 1. https://trinket.io/ [link](https://trinket.io)
可以選 Python, Block, Java, Html 等程式語言, 
**可以執行 turtle, numpy**
trinket.io 有 Python, Blocks, Java, 配合免費之電子書的線上即時輸入執行之環境!

> **說明圖片：** trinket.io 網站首頁顯示支援 Python、Blocks、Java 等程式語言，並提供線上即時執行環境

trinket.io 也有 Python 海龜繪圖之入門課程, 搭配執行效果之動畫, 線上即時輸入執行之環境,  有給出課程之按部就班之程式碼, 可以立即看到海龜如何照指令運動!
A Visual Introduction to Python [link](https://hourofpython.trinket.io/a-visual-introduction-to-python#/welcome/an-hour-of-code)

> **說明圖片：** trinket.io 的 Python 海龜繪圖教學介面，左側為程式碼編輯區，右側為海龜繪圖執行結果

有程式碼分享

JacksonPollock_generator_類n似米羅的畫 Python codes
![Trinket Download-Pollock generator-3004f4c350](/images/courses/python-turtle/pollock-generator.png)


Georgia'sSpirals_圓圍繞圓上一點旋轉生成之曼陀羅 python codes
![Georgia'sSpirals_圓圍繞圓上一點旋轉生成之曼陀羅python](/images/courses/python-turtle/georgia-spirals.png)



- 2. Google Colaboratory–適合 Python 初學者的雲端開發環境
ref: 台大計算機中心.
目前官方建議使用Chrome，Firefox或Safari。
開啟chrome先登入google帳號，
連結URL )
https://colab.research.google.com/ [link](https://colab.research.google.com/)

Colab_可以先先登入 Google, 再打開雲端硬碟, 選取 `+` 加號 新增, 選取 `更多`, 進入 `Google Colaboratory` 畫面,

![Colab_雲端硬碟進入畫面](/images/courses/python-turtle/colab-drive-interface.jpg)


發現無法執行官方的 turtle 模組,
仍可以安裝 `ColabTurtle`, 指令較少!
一開始要做一些動作:
```
!pip install ColabTurtle

from ColabTurtle.Turtle import *

T=initializeTurtle()

help('ColabTurtle.turtle')

forward(100)

left(90)

forward(100)
```

可以查看 ColabTurtle 的原始碼, 看有哪些指令可以用
https://github.com/tolgaatam/ColabTurtle [link](https://github.com/tolgaatam/ColabTurtle)
這裡有說明安裝, 跟初始化的指令

```
Turtle for Google Colab notebooks
Installation for Google Colab:
Create an empty code cell and type:

!pip3 install ColabTurtle
Run the code cell.

Usage
In any code cell, import like following:

from ColabTurtle.Turtle import *
As Colab stores the declared variables in the runtime, call this before using:

initializeTurtle()
Have fun drawing!
```

```python
# -*- coding: utf-8 -*-
"""ColabTurtle_multi_7_gon.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1HZlv8bkZLpAVk9EndjoZFbZJy8NCj5Rv
"""

!pip install ColabTurtle

from ColabTurtle.Turtle import *

initializeTurtle()

color("green")
width(5)

def polygon(n, sideLength):
	for i in range(n):
		forward(sideLength)
		left(360.0/n)

n=7
m=10
for i in range(m+2):
	polygon(n,100-5*n)
	left(306.0/m)
```

![ColabTurtle_旋轉正7邊形](/images/courses/python-turtle/colabturtle-polygon.jpg)


---


- 3. https://repl.it/
可以選各程式語言
可以執行 turtle, numpy

- 4. http://ideone.com/
效能較快
但此站似乎無法執行 turtle

---



另一種方式是在手機或平板安裝 可以執行 Python 程式的 App,

- Iphon 手機:
Pythonista 
要錢 9.99

- Android手機:
QPython 等很多

發現這類 App 學生現場安裝之後, 大都可以跑 turtle


 ## 3. 欣賞  turtle 模組的 demo

 打開 IDLE, Help, 裡面點選 Turtle Demo, 就會出現 內建寫好的烏龜繪圖的許多demo例子,

 以後我們點選的的符號就用 **IDLE/Help/Turtle Demo**,
 ![內建寫好的烏龜繪圖的許多demo](/images/courses/python-turtle/turtle-demo-examples.jpg)
會出現一個空白窗框, 點選 Examples, 會出現所有例子的列表,  **IDLE/Help/Turtle Demo/Examples**, 這些例子有: clock 時鐘模擬, forest 碎形樹, fractalcurves 雪花碎形等, lindenmayer 碎形模擬植物型態, minimal_hanoi 河內塔模擬, yinyang 陰陽太極圖,,,,等等, 
**非常豐富多樣, 有些程式碼也不簡單! 可以當作學習 Python 的範例**.
  
例如點選 forest, 就會畫碎形樹
![turtleDemo_content_1_IDLE](/images/courses/python-turtle/turtle-demo-forest-start.jpg)
點選下方 start, 才會畫碎形樹,  **IDLE/Help/Turtle Demo/Examples/forest/START**
是以 **動畫** 呈現
以下是畫到中間
![turtleDemo_forest_2_中間_IDLE](/images/courses/python-turtle/turtle-demo-forest-middle.jpg)
最後完成如下, 播放速度很快
![turtleDemo_forest_2_IDLE](/images/courses/python-turtle/turtle-demo-forest-complete.jpg)
例如以下是河內塔模擬
 **IDLE/Help/Turtle Demo/Examples/minimal_hanoi/START/空白鍵**
![河內塔模擬](/images/courses/python-turtle/turtle-demo-hanoi.jpg)
左方窗框內容是完整的程式碼, 
*（說明：左方窗框顯示完整的程式碼內容）*
- **以下可以等進階時再細看**
完整的程式碼也可以查硬碟內的 Python3 安裝的位置.
C:\Users\user\AppData\Local\Programs\Python\Python38-32\Lib\turtledemo
*（說明：turtle 模組的 demo 完整的程式碼在硬碟的位置）*


另一個執行 turtle demo 方法可以用 Windows/cmd, (或 Linux下) 輸入
**C:\Users\user>python -m turtledemo**

**註:** turtle 模組的 demo 完整的官方原始程式碼, 在 Windows10
可以查硬碟內的 Python3 安裝的位置.
C:\Users\user\AppData\Local\Programs\Python\Python38-32\Lib\turtledemo
 
- **以上可以等進階時再細看**

# References

- A Visual Introduction to Python [link](https://hourofpython.trinket.io/a-visual-introduction-to-python#/welcome/an-hour-of-code)
可以選幾種程式語言, 可以執行 turtle, NumPy.

- https://colab.research.google.com/ [link](https://colab.research.google.com/)

-  https://repl.it/
可以選各程式語言
可以執行 turtle, numpy

-  http://ideone.com/
效能較快
但此站似乎無法執行 turtle
