---
title: "用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 1 Python科學計算第三方庫, 原生指令, 內建模組, 外部模組"
collection: courses
type: "大學課程"
permalink: /courses/python-mathematics-implementation_01
venue: "線性代數矩陣計算、微積分與數論"
date: 2025-09-01
location: "Taiwan"
excerpt: "用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 1 Python科學計算第三方庫, 原生指令, 內建模組, 外部模組 "
---

  用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 1 Python科學計算第三方庫, 原生指令, 內建模組, 外部模組 

“Talk is cheap. Show me the code.”  
― Linus Torvalds

老子第41章  
上德若谷  
大白若辱  
大方無隅  
大器晚成  
大音希聲  
大象無形  
道隱無名

拳打千遍, 身法自然

20200706

如果想立即參考 Python+ Numpy用在線性代數課程上的指令之例子, 可先看以下陳擎文這份網頁,  
(我提醒你官網的文件建議盡量用 numpy.array( , ), 不要用 numpy.matrix, 陳擎文這份網頁有很多用 matrix )  
**Ref:** 陳擎文教學網這裡有很具體的指令用法, 用在線性代數課程上:  
陳擎文教學網：python解線性代數, https://acupun.site/lecture/linearAlgebra/index.htm [link](https://acupun.site/lecture/linearAlgebra/index.htm)

本系列文章之連結
========

*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 1 Python科學計算第三方庫, 原生指令, 內建模組, 外部模組 [link](https://editor.csdn.net/md/?articleId=107158299)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 1.1 scipy.linalg 官網完整列表 [link](https://blog.csdn.net/m0_47985483/article/details/107158299)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 2 產生 numpy 的 數組, 矩陣點乘 等 [link](https://blog.csdn.net/m0_47985483/article/details/111745673?spm=1001.2014.3001.5501)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 3 向量與矩陣運算 [link](https://blog.csdn.net/m0_47985483/article/details/113095920?spm=1001.2014.3001.5501)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 4 函數向量化 function vectorized  
    [link](https://blog.csdn.net/m0_47985483/article/details/122241771)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 5 矩陣特徵值等不變量計算 [link](https://blog.csdn.net/m0_47985483/article/details/122667111)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 5.1 矩陣分解的指令 [link](https://blog.csdn.net/m0_47985483/article/details/124607454?csdn_share_tail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22124607454%22%2C%22source%22%3A%22m0_47985483%22%7D&ctrtid=dgV5e)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 6 解線性方程組 直接法: Gauss 消去, LU 等 [link](https://blog.csdn.net/m0_47985483/article/details/122691113)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 7 解線性方程組 迭代法: Jacobi iterated,Gauss-Seidel 等 [link](https://blog.csdn.net/m0_47985483/article/details/122754154)
    

* * *

### 文章目录

- [本系列文章之連結](#本系列文章之連結)
    - [文章目录](#文章目录)
- [以下企圖將我原先用 Matlab 跑的有關矩陣(線性代數)的操作, 轉成用 Python + NumPy + SciPy 來執行,](#以下企圖將我原先用-matlab-跑的有關矩陣線性代數的操作-轉成用-python--numpy--scipy-來執行)
- [緣起:](#緣起)
- [Python 的科學計算第三方庫最基本有: 矩陣計算 NumPy, 科學計算 SciPy, 繪圖 Matplotlib, 符號運算 SymPy](#python-的科學計算第三方庫最基本有-矩陣計算-numpy-科學計算-scipy-繪圖-matplotlib-符號運算-sympy)
- [Python, Numpy, SciPy 的安裝或線上使用](#python-numpy-scipy-的安裝或線上使用)
- [注意事項:](#注意事項)
  - [剛學 Python 較容易感到混淆的, 就是那些指令是本來就有的, 那些是從外部第三方庫引入的](#剛學-python-較容易感到混淆的-就是那些指令是本來就有的-那些是從外部第三方庫引入的)
    - [A. 本來就有(原生)指令](#a-本來就有原生指令)
      - [A.1. 打開IDLE就可以馬上用的指令(開箱即用)](#a1-打開idle就可以馬上用的指令開箱即用)
      - [A.2. 要先載入需要之內建模組, 例如 math, turtle 等模組需先用 import 載入才能用的指令](#a2-要先載入需要之內建模組-例如-math-turtle-等模組需先用-import-載入才能用的指令)
        - [A.2.1 內建 數學函數與內建的 math 模組 的數學函數](#a21-內建-數學函數與內建的-math-模組-的數學函數)
        - [A.2.2 查看有那些內建的模組 `help(__builtins__)`](#a22-查看有那些內建的模組-help__builtins__)
    - [B. 需從外部安裝所謂"第三方程式庫"的指令](#b-需從外部安裝所謂第三方程式庫的指令)
      - [B.1 查看已經安裝的所有模組, 包括外部模組 `help('modules')`](#b1-查看已經安裝的所有模組-包括外部模組-helpmodules)
    - [C. 內部指令與第三方程式庫之指令常有同名之情形, 或是不同之第三方程式庫指令會有同名之情形, 在使用時要小心](#c-內部指令與第三方程式庫之指令常有同名之情形-或是不同之第三方程式庫指令會有同名之情形-在使用時要小心)
    - [D. 粗略查看某個模組的所有方法或指令](#d-粗略查看某個模組的所有方法或指令)
- [Reference](#reference)

* * *

以下企圖將我原先用 Matlab 跑的有關矩陣(線性代數)的操作, 轉成用 Python + NumPy + SciPy 來執行,
=================================================================

以下我將假設讀者略懂 Python, 但是我還是盡量為完全沒學過 Python 或 Matlab 的人, 把指令最基本的功用, 或是需要叮嚀的地方,都用**最簡略**的說明附上, 為避免見樹不見林, 妨礙 “用 Python + NumPy + SciPy 跑的有關矩陣(線性代數)” 的主軸, 這類有關最基本的說明, 都用最簡短的方式一語就帶過.

(如果想知道Python更基礎的部分, 例如 list 串列, 函數如何定義, random 隨機數之產生等等, 可以參考本人另一篇: 從turtle海龜動畫 學習 Python - 高中彈性課程系列 3 烏龜繪圖 所需之Python基礎  
https://blog.csdn.net/m0\_47985483/article/details/109522858 [link](https://blog.csdn.net/m0_47985483/article/details/109522858))

緣起:
===

我在大學數學系教了20年, 在教學研究中, 搭配使用了 Maple、Matlab、C、Python、R、 JavaScript 等程式語言，GSP、GeoGebra 等動態幾何軟體.

1983 讀大學時被當時的 CDC Cyber172 大型電腦嚇到了, 輸入codes要用打卡機打卡, 到下學期學校有了終端機, 但是輸入一個指令要等 1、2 分鐘回應, 讓我對電腦又愛又怕, 走了純數學的學習方向.  
1997 完成德國博士學位回國開始教書後, 電腦的環境已經大為友善, (其實在德國讀博時, 我的指導教授是萊比錫 “馬克思普朗克研究所-數學在自然科學之應用” 的所長 Jost 博士, 當時所上就有很先進的 UNIX 系統的電腦, 我的數學博士論文都是用 Tex 編輯排版成的, 多虧了我當時德國博班研究所好友是Tex高手, 可以隨時問他, Jost的書出版在Springer-Verlag 的原稿都是他用 Tex 編打的!).

想到之前在清大數學系當專任助教時一直想學 C 的心願, 我就先學 C, 還是覺得太難, 一直在除錯, 終於 Maple 在約20年前開始普及, 當時盜版 Maple5 很容易拿到, Mathematica 還需要鎖硬體鎖, 拿到盜版軟體也沒用, 終於從 Maple 開始圓了我可以自由在自己的電腦 (不用在大電腦跑程式) 寫程式的夢, 系上也買了整間電腦教室授權版, Maple 的程式語法與函數式習慣的設計, 都是數學家的口味, 對於數學的研究人員, 學起來特別順, 也是直譯式, 可以立即看執行結果.

後來為了做研究要跑基因演算法、螞蟻族群演算法等, Maple的速度有點慢, 當模擬的尺度較大時, 執行時間實在太久, 用 C 寫, 又一直陷在不斷除錯,

改學 Matlab, 發現 Matlab 真的好用, 他就像用語法糖重新包裹 C 語言, 直觀且向量化操作, 在跟矩陣有關的程式處理, 特別簡單直接, 也符合數學家的思維習慣, 尤其在繪圖呈現執行結果, 比 C 方便多了, 同樣系上也買了整間電腦教室基本版之授權版. 但是我還是喜歡用同學抓到的完整版, 因為工具箱全都有.

之後在工教系教微積分課, 三節課中抽一節課教同學用 C 執行牛頓法、數值微分、數值積分等, 但是同學反應 C 太難, 隔年改用 Matalb, 同學反應意見好多了, 但是遇到一件事, 同學跟我要軟體, 因為離開電腦教室, 他們沒法執行 Matlab 程式.

我才發現, 當時約10年前, 台灣要找盜版辦軟體已經不容易了, 我在這之前, 這麼多年用的很多軟體, 多是同學提供的, 都是拜託會在網路上找軟體的同學抓給我, 因為有時要試用某些軟體, 一套都少則四、五千, 多則五、六萬不可能花錢去買, 通常是先找看看有沒有網路上找到的軟體可以用, 用得不錯, 再建議系上買.

因為約10多年前同學跟我要軟體, 我才發現網路上找軟體在台灣已經越來越困難了, 在當時新聞又報, 模糊的印象如下: 新竹或台北某專科或科技大學的老師, 因為給同學軟體, 遭到微軟提告!(後來是否沒事, 我沒有去注意)

也因為這樣的狀況, 讓我警覺到, 不能再依賴這些付費軟體了, 用免費之開源軟體, 同學可以光明正大的使用, 有任何更新, 也都會自動更新,

老師在學校教學生這些付費軟體, 其實是在幫這些跨國的軟體公司免費宣傳他們的軟體, 同學用習慣的這些軟體, 將來進入業界, 也會建議公司購買, 少部分軟體公司, 卻沒有遠見, 讓老師幫他們忙還要擔心被起訴…

用免費之開源軟體, 唯一的難點是, 免費之開源軟體通常說明文件較不詳細,且幾乎都是原文, 會的人也少, 相對於 Matlab 在網路及出版書籍之滿坑滿谷的資料, Python 在10 多年前要學, 真的較辛苦, 且光安裝, 在當時開源軟體在 Windows 上通常較困難安裝(目前微軟已改變形象, 支持開源軟體) .

後來我還是忍耐慢慢摸熟了Python, 當初是為了能在 GeoGebra5 上執行 Python codes (2014已停掉這個功能, 目前能仍用 JavaScript 在 GeoGebra 寫程式),  
我是透過 Python 的 turtle 模組, 切入 Python 的使用, turtle 模組有較豐富的說明文件, 也可以觀摩源程式碼, 感謝 Python 的 turtle 模組的開發人員! (用 Python 的 turtle 模組探索數學, 可以參考本人的正在寫的另一篇: 從turtle海龜動畫學習Python-高中彈性課程1 [link](https://blog.csdn.net/m0_47985483/article/details/107502070).

* * *

**註:** 本文以下提到 **“Python 的 原生 …\\dots…”**,  
指的是 Python 一安裝好就有的功能、模組、物件或指令等, 例如內建的 list串列 string字串 等物件及其使用之指令, 等等, 不需要另外安裝第三方程式庫的東東.

* * *

**註:** 以下我將內容分成初步及進階, 第一次讀, 可以跳過進階的部分, 以免見樹不見林  
如果看到以下之註明:

*   **以下可以等進階時再細看**  
    , , , , , , ,
*   **以上可以等進階時再細看**  
    就表示此部分第一次讀, 可以跳過.

* * *

Python 的科學計算第三方庫最基本有: 矩陣計算 NumPy, 科學計算 SciPy, 繪圖 Matplotlib, 符號運算 SymPy
=======================================================================

![numpy_scipy_matplotlib之差異](https://i-blog.csdnimg.cn/blog_migrate/c163cab2f9e07f4c5cb2318a24659f79.jpeg)  
**這三個第三方庫: NumPy, SciPy, Matplotlib 有何不同?**  
根據官網的 Scipy Lecture Notes 2020 版:  
NumPy 主要是提供對數組(array) 或矩陣(matrix)的指令  
SciPy 則提供較上層的科學計算的函數: 最佳化(求極大極小), 求零根, 統計, 傅立葉變換等  
**SciPy 的基本內容大項: 特殊函數、積分、最佳化、訊號處理、統計等等**  
![scipy的基本內容大項](https://i-blog.csdnimg.cn/blog_migrate/b8579d92884c880e8bfcd828a45873fd.jpeg)

Matplotlib 則支持繪圖方面, **Matplotlib.pyplot 是提供跟 Matlab 繪圖指令接近的繪圖函式庫**  
**Ref:** Scipy Lecture Notes: http://scipy-lectures.org/  
[link](http://scipy-lectures.org/)  
…  
也可以參考許多博客的說明:  
例如 csdn上的  
**Ref:** 简述Python的Numpy,SciPy和Pandas,Matplotlib的区别,  
https://blog.csdn.net/ctrigger/article/details/92666676  
[link](https://blog.csdn.net/ctrigger/article/details/92666676)

**Ref:** 這裡有很具體的指令用法, 用在線性代數課程上: 陳擎文教學網：python解線性代數, https://acupun.site/lecture/linearAlgebra/index.htm [link](https://acupun.site/lecture/linearAlgebra/index.htm)

Python, Numpy, SciPy 的安裝或線上使用
=============================

*   安裝Python  
    請參考本人的另一篇  
    https://blog.csdn.net/m0\_47985483/article/details/109522800  
    安裝Python 那節  
    [link](https://blog.csdn.net/m0_47985483/article/details/109522800)
    
*   Python安裝之後並沒有 NumPy, SciPy, Pandas, 他們是額外加裝在 Python 上的程式庫,  
    在 Windows 下, 打開 “命令提示字元” 的視窗, (注意, 當下的路徑可能要在Python的資料夾下), 輸入
    

`>> pip install numpy`  
`>> pip install scipy`

*   或是使用 **Anaconda**, 安裝好之後, 最重要的程式庫都已裝好,  
    Anaconda + Jupyter Notebook 會自動安裝好所需的科學計算或大數據的程式庫 (or Anaconda + Spyder or Anaconda + PyCharm 等),
    
*   或是使用 **VSCode**, 安裝好之後, 重要的程式庫可以當下搜尋外掛擴充.
    
*   線上使用可以用 Google Colab, 也會自動安裝好所需的科學計算或大數據的程式庫.
    

注意事項:
=====

**Python 的 list 之 slice(切片) 不會與原 list 連動**  
**np.array() 的 slice 會與原 np.array 連動**  
**特別注意 Python 的所有資料的容器(例如 list) 下標是從 0 開始**

剛學 Python 較容易感到混淆的, 就是那些指令是本來就有的, 那些是從外部第三方庫引入的
-----------------------------------------------

以下提到 **“Python 的 原生 …\\dots…”**,  
指的是一安裝好就有的功能、模組、物件或指令等,

### A. 本來就有(原生)指令

又分,

#### A.1. 打開IDLE就可以馬上用的指令(開箱即用)

可以下 **dir(‘builtins’)** 查看內建的指令, 發現跟下面官網的 Built-in Functions列表不太一樣

    >>> dir('builtins')
    ['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
    

以下是官網的 Built-in Functions列表, 下面有連結處

Built-in Functions:  
abs() delattr() hash() memoryview() set()  
all() dict() help() min() setattr()  
any() dir() hex() next() slice()  
ascii() divmod() id() object() sorted()  
bin() enumerate() input() oct() staticmethod()  
bool() eval() int() open() str()  
breakpoint() exec() isinstance() ord() sum()  
bytearray() filter() issubclass() pow() super()  
bytes() float() iter() print() tuple()  
callable() format() len() property() type()  
chr() frozenset() list() range() vars()  
classmethod() getattr() locals() repr() zip()  
compile() globals() map() reversed() **import**()  
complex() hasattr() max() round()  
![Python38 Built-in Functions](https://i-blog.csdnimg.cn/blog_migrate/a2096848901a88f50b38db579c570a2b.jpeg)

例如 **abs()** 就是取絕對值,

**ref:** 官網的 Built-in Functions列表 : https://docs.python.org/3/library/functions.html  
[link](https://docs.python.org/3/library/functions.html)

另外, 以及各內建 class 的方法, 例如 list 物件的方法, 例如 **list.sort()** 等, 都是**開箱即用**

#### A.2. 要先載入需要之內建模組, 例如 math, turtle 等模組需先用 import 載入才能用的指令

還有些是要載入自動安裝好的模組, 例如 求最大公因數, 可以用**math.gcd(a,b)**  
需要先載入 math module  
先下  
`import math`  
再下  
`math.gcd(a,b)`

Python 才會認得並執行.

##### A.2.1 內建 數學函數與內建的 math 模組 的數學函數

內建\_數學函數:  
abs(), comlex(), max(), min(), pow(), round(), sorted(), sum(),

內建的math 模組的數學函數:  
sin(), cos(), atan(),fmod(), ceil(), floor(), fabs(),factorial(), exp(), gcd(), pow(x,y),  
log10(), sqrt(),fsum(), math.gamma(), math.pi, math.e, math.inf ( =float(‘inf’) ), math.nan ( =float(‘nan’))

ref: 內建的math 模組的數學函數:  
https://docs.python.org/3/library/math.html  
[link](https://docs.python.org/3/library/math.html)

\>>> import math  
\>>> dir(math)  
\[‘**doc**’, ‘**loader**’, ‘**name**’, ‘**package**’, ‘**spec**’, ‘acos’, ‘acosh’, ‘asin’, ‘asinh’, ‘atan’, ‘atan2’, ‘atanh’, ‘ceil’, ‘comb’, ‘copysign’, ‘cos’, ‘cosh’, ‘degrees’, ‘dist’, ‘e’, ‘erf’, ‘erfc’, ‘exp’, ‘expm1’, ‘fabs’, ‘factorial’, ‘floor’, ‘fmod’, ‘frexp’, ‘fsum’, ‘gamma’, ‘gcd’, ‘hypot’, ‘inf’, ‘isclose’, ‘isfinite’, ‘isinf’, ‘isnan’, ‘isqrt’, ‘ldexp’, ‘lgamma’, ‘log’, ‘log10’, ‘log1p’, ‘log2’, ‘modf’, ‘nan’, ‘perm’, ‘pi’, ‘pow’, ‘prod’, ‘radians’, ‘remainder’, ‘sin’, ‘sinh’, ‘sqrt’, ‘tan’, ‘tanh’, ‘tau’, ‘trunc’\]

**Ref** Python 中有數學指令的模組或程式庫:  
用 Python+SciPy+SymPy 執行微積分計算 1 [link](https://blog.csdn.net/m0_47985483/article/details/117298121)  
部分參考自 陳擎文教學網, python求解數學式（高中數學，大學數學，工程數學，微積分）

*   **以下可以等進階時再細看**

##### A.2.2 查看有那些內建的模組 `help(__builtins__)`

要從 Windows 開始程式集 處選取, 例如  
/python38/Module Docs  
才看的到, 其實內容是放在安裝在硬碟的檔案,  
![Python38原生的模組](https://i-blog.csdnimg.cn/blog_migrate/3a18d3f27c66d77de496039f1945baf7.jpeg)  
或是下  
`>>>help(__builtins__)`  
也可以

### B. 需從外部安裝所謂"第三方程式庫"的指令

就是非原生的程式庫, 需要另外加裝, 例如 numpy, scipy 等以及它們的物件跟指令.  
例如, 如果是 Windows 作業系統下, 需要先打開 cmd(命令提示字元), 下  
**pip install numpy**  
才算安裝好  
在 IDLE 內還要下  
**import numpy**  
才能開始使用 numpy 的指令

#### B.1 查看已經安裝的所有模組, 包括外部模組 `help('modules')`

如果查看已經安裝的所有模組, 包括外部模組,  
可以在 IDLE下  
`help('modules')`  
查看已經安裝的所有模組, 會顯示內建的跟已安裝的第三方程式庫,

    >>> help('modules')
    
    Please wait a moment while I gather a list of all available modules...
    
    FactorList_Lai      autocomplete        html                runpy
    __future__          autocomplete_w      http                runscript
    __main__            autoexpand          hyperparser         sched
    _abc                base64              idle                scipy
    _ast                bdb                 idle_test           scrolledlist
    _asyncio            binascii            idlelib             search
    _bisect             binhex              imaplib             searchbase
    _blake2             bisect              imghdr              searchengine
    _bootlocale         browser             imp                 secrets
    _bz2                builtins            importlib           select
    _codecs             bz2                 inspect             selectors
    _codecs_cn          cProfile            io                  setuptools
    _codecs_hk          caesarCipher        iomenu              shelve
    _codecs_iso2022     calendar            ipaddress           shlex
    _codecs_jp          calltip             isympy              shutil
    _codecs_kr          calltip_w           itertools           sidebar
    _codecs_tw          cgi                 json                signal
    _collections        cgitb               keyword             site
    _collections_abc    chunk               kiwisolver          six
    _compat_pickle      cmath               lib2to3             smtpd
    _compression        cmd                 linecache           smtplib
    _contextvars        code                locale              sndhdr
    _csv                codecontext         logging             socket
    _ctypes             codecs              lzma                socketserver
    _ctypes_test        codeop              macosx              sqlite3
    _datetime           collections         mailbox             squeezer
    _decimal            colorizer           mailcap             sre_compile
    _dummy_thread       colorsys            mainmenu            sre_constants
    _elementtree        compileall          marshal             sre_parse
    _functools          concurrent          math                ssl
    _hashlib            config              matplotlib          stackviewer
    _heapq              config_key          mimetypes           stat
    _imp                configdialog        mmap                statistics
    _io                 configparser        modulefinder        statusbar
    _json               contextlib          mpmath              string
    _locale             contextvars         msilib              stringprep
    _lsprof             copy                msvcrt              struct
    _lzma               copyreg             multicall           subprocess
    _markupbase         crypt               multiprocessing     sunau
    _md5                csv                 netrc               symbol
    _msi                ctypes              nntplib             sympy
    _multibytecodec     curses              nt                  symtable
    _multiprocessing    cycler              ntpath              sys
    _opcode             dataclasses         nturl2path          sysconfig
    _operator           datetime            numbers             tabnanny
    _osx_support        dateutil            numpy               tarfile
    _overlapped         dbm                 opcode              telnetlib
    _pickle             debugger            operator            tempfile
    _py_abc             debugger_r          optparse            test
    _pydecimal          debugobj            os                  textview
    _pyio               debugobj_r          outwin              textwrap
    _queue              decimal             pandas              this
    _random             delegator           parenmatch          threading
    _sha1               difflib             parser              time
    _sha256             dis                 pathbrowser         timeForVectorMethodFactor
    _sha3               distutils           pathlib             timeit
    _sha512             doctest             pdb                 tkinter
    _signal             dummy_threading     percolator          token
    _sitebuiltins       dynoption           pickle              tokenize
    _socket             easy_install        pickletools         tooltip
    _sqlite3            editor              pip                 trace
    _sre                email               pipes               traceback
    _ssl                encodings           pkg_resources       tracemalloc
    _stat               ensurepip           pkgutil             tree
    _statistics         enum                platform            tty
    _string             errno               plistlib            turtle
    _strptime           ex1_Sum_n_Squre_3_Python_style poplib              turtledemo
    _struct             ex3_check           posixpath           types
    _symtable           ex4_checkRandom     pprint              typing
    _testbuffer         ex5_checkRandomList profile             undo
    _testcapi           faulthandler        pstats              unicodedata
    _testconsole        filecmp             pty                 unittest
    _testimportmultiple fileinput           py_compile          urllib
    _testmultiphase     filelist            pyclbr              uu
    _thread             fnmatch             pydoc               uuid
    _threading_local    format              pydoc_data          venv
    _tkinter            formatter           pyexpat             warnings
    _tracemalloc        fractions           pylab               wave
    _warnings           ftplib              pyparse             weakref
    _weakref            functools           pyparsing           webbrowser
    _weakrefset         gc                  pyperclip           window
    _winapi             genericpath         pyshell             winreg
    _xxsubinterpreters  getopt              pytz                winsound
    abc                 getpass             query               wsgiref
    aifc                gettext             queue               xdrlib
    antigravity         glob                quopri              xml
    argparse            grep                random              xmlrpc
    array               gzip                re                  xxsubtype
    ast                 hashlib             redirector          zipapp
    asynchat            heapq               replace             zipfile
    asyncio             help                reprlib             zipimport
    asyncore            help_about          rlcompleter         zlib
    atexit              history             rpc                 zoomheight
    audioop             hmac                run                 zzdummy
    
    Enter any module name to get more help.  Or, type "modules spam" to search
    for modules whose name or summary contain the string "spam".
    

*   **以上可以等進階時再細看**

* * *

*   **以下可以等進階時再細看**

### C. 內部指令與第三方程式庫之指令常有同名之情形, 或是不同之第三方程式庫指令會有同名之情形, 在使用時要小心

指令同名, 可能用法不同, 所以要小心!  
例如 Python 有原生的 random 模組,  
而 NumPy 模組的 numpy.random 也有很多類似的指令.

所以很多資料都建議, 在載入第三方程式庫時盡量不要用  
**from math import \***  
此種載入方式, 可以直接使用指令, 例如  
gcd(100,25)

盡量用  
**import math**  
的方式  
此種載入方式, 指令前需加一個模組名及點語法, 例如  
math.gcd(100,25)  
如此就可以知道, gcd()是來自於 math 模組, 如果其他模組也有 gcd(), 就不會混淆.

細節等以後再提

### D. 粗略查看某個模組的所有方法或指令

可以在用 import 載入該模組之後, 使用 dir查詢  
例如以下可以列出內建之 turtle 模組的所有指令  
詳細的用法仍需查 Pyhton 官網的說明  
https://docs.python.org/3/library/turtle.html

    >>> import turtle
    >>> dir(turtle)
    ['Canvas', 'Pen', 'RawPen', 'RawTurtle', 'Screen', 'ScrolledCanvas', 'Shape', 'TK', 'TNavigator', 'TPen', 'Tbuffer', 'Terminator', 'Turtle', 'TurtleGraphicsError', 'TurtleScreen', 'TurtleScreenBase', 'Vec2D', '_CFG', '_LANGUAGE', '_Root', '_Screen', '_TurtleImage', '__all__', '__builtins__', '__cached__', '__doc__', '__file__', '__forwardmethods', '__func_body', '__loader__', '__methodDict', '__methods', '__name__', '__package__', '__spec__', '__stringBody', '_alias_list', '_make_global_funcs', '_screen_docrevise', '_tg_classes', '_tg_screen_functions', '_tg_turtle_functions', '_tg_utilities', '_turtle_docrevise', '_ver', 'addshape', 'back', 'backward', 'begin_fill', 'begin_poly', 'bgcolor', 'bgpic', 'bk', 'bye', 'circle', 'clear', 'clearscreen', 'clearstamp', 'clearstamps', 'clone', 'color', 'colormode', 'config_dict', 'deepcopy', 'degrees', 'delay', 'distance', 'done', 'dot', 'down', 'end_fill', 'end_poly', 'exitonclick', 'fd', 'fillcolor', 'filling', 'forward', 'get_poly', 'get_shapepoly', 'getcanvas', 'getmethparlist', 'getpen', 'getscreen', 'getshapes', 'getturtle', 'goto', 'heading', 'hideturtle', 'home', 'ht', 'inspect', 'isdown', 'isfile', 'isvisible', 'join', 'left', 'listen', 'lt', 'mainloop', 'math', 'mode', 'numinput', 'onclick', 'ondrag', 'onkey', 'onkeypress', 'onkeyrelease', 'onrelease', 'onscreenclick', 'ontimer', 'pd', 'pen', 'pencolor', 'pendown', 'pensize', 'penup', 'pos', 'position', 'pu', 'radians', 'read_docstrings', 'readconfig', 'register_shape', 'reset', 'resetscreen', 'resizemode', 'right', 'rt', 'screensize', 'seth', 'setheading', 'setpos', 'setposition', 'settiltangle', 'setundobuffer', 'setup', 'setworldcoordinates', 'setx', 'sety', 'shape', 'shapesize', 'shapetransform', 'shearfactor', 'showturtle', 'simpledialog', 'speed', 'split', 'st', 'stamp', 'sys', 'textinput', 'tilt', 'tiltangle', 'time', 'title', 'towards', 'tracer', 'turtles', 'turtlesize', 'types', 'undo', 'undobufferentries', 'up', 'update', 'width', 'window_height', 'window_width', 'write', 'write_docstringdict', 'xcor', 'ycor']
    

如果想查NumPy 模組的所有指令, 一樣用 import 載入之後, 使用 dir查詢  
指令長達 93行,  
詳細的用法仍需查 Numpy 官網的說明或手冊

    >>> import numpy
    >>> dir(numpy)
    ['ALLOW_THREADS', 'AxisError', 'BUFSIZE', 'CLIP', 'ComplexWarning', 'DataSource', 'ERR_CALL',
    'ERR_DEFAULT', 'ERR_IGNORE', 'ERR_LOG', 'ERR_PRINT', 'ERR_RAISE', 'ERR_WARN', 
    'FLOATING_POINT_SUPPORT', 'FPE_DIVIDEBYZERO', 'FPE_INVALID', 'FPE_OVERFLOW',
     'FPE_UNDERFLOW', 'False_', 'Inf', 'Infinity', 'MAXDIMS', 'MAY_SHARE_BOUNDS', 
     'MAY_SHARE_EXACT', 'MachAr', 'ModuleDeprecationWarning', 'NAN', 'NINF', 'NZERO', 'NaN', 'PINF', 
     'PZERO', 'RAISE', 'RankWarning', 'SHIFT_DIVIDEBYZERO', 'SHIFT_INVALID', 'SHIFT_OVERFLOW',
      'SHIFT_UNDERFLOW', 'ScalarType', 'Tester', 'TooHardError', 'True_', 'UFUNC_BUFSIZE_DEFAULT',
     'UFUNC_PYVALS_NAME', 'VisibleDeprecationWarning', 'WRAP', '_NoValue', '_UFUNC_API',
     '__NUMPY_SETUP__', '__all__', '__builtins__', '__cached__', '__config__', '__dir__', '__doc__', '__file__', 
     '__getattr__', '__git_revision__', '__loader__', '__name__', '__package__', '__path__', '__spec__',
     '__version__', '_add_newdoc_ufunc', '_distributor_init', '_globals', '_mat', '_pytesttester', 'abs', 'absolute',
    'absolute_import', 'add', 'add
    

*   **以上可以等進階時再細看**

Reference
=========

*   LU 分解 的現成指令, 只有在 scipy.linalg 與 sympy 有看到,numpy.linalg 則沒有,  
    兩者都有, cholesky, qr, svd.  
    scipy.linalg 多 lu, shur 等  
    – **Numpy linalg 最新列表:** https://numpy.org/devdocs/reference/routines.linalg.html [link](https://numpy.org/devdocs/reference/routines.linalg.html)  
    – **SciPy linalg 最新列表:** https://docs.scipy.org/doc/scipy/reference/linalg.html#scipy.linalg [link](https://docs.scipy.org/doc/scipy/reference/linalg.html#scipy.linalg)
    
*   (如果想知道Pythn更基礎的部分, 例如 list串列, 函數如何定義, random 隨機數之產生等等, 可以參考本人另一篇: 從turtle海龜動畫 學習 Python - 高中彈性課程系列 3 烏龜繪圖 所需之Python基礎  
    https://blog.csdn.net/m0\_47985483/article/details/109522858 [link](https://blog.csdn.net/m0_47985483/article/details/109522858)
    
*   我是透過 Python 的 turtle 模組, 切入 Python 的使用, turtle 模組有較豐富的說明文件, 也可以觀摩源程式碼, 感謝 Python 的 turtle 模組的開發人員! (用 Python 的 turtle 模組探索數學, 可以參考本人的正在寫的另一篇: 從turtle海龜動畫學習Python-高中彈性課程1 [link](https://blog.csdn.net/m0_47985483/article/details/107502070).
    
*   官網的 Built-in Functions列表 : https://docs.python.org/3/library/functions.html  
    [link](https://docs.python.org/3/library/functions.html)
    
*   內建的math 模組的數學函數:  
    https://docs.python.org/3/library/math.html  
    [link](https://docs.python.org/3/library/math.html)
    
*   Scipy Lecture Notes: http://scipy-lectures.org/  
    [link](http://scipy-lectures.org/)
    
*   也可以參考許多博客的說明:  
    例如 csdn上的, 简述Python的Numpy,SciPy和Pandas,Matplotlib的区别, https://blog.csdn.net/ctrigger/article/details/92666676 [link](https://blog.csdn.net/ctrigger/article/details/92666676)
    
*   **推薦:** 這裡有很具體的指令用法, 用在線性代數課程上: 陳擎文教學網：python解線性代數, https://acupun.site/lecture/linearAlgebra/index.htm [link](https://acupun.site/lecture/linearAlgebra/index.htm)
    
*   Python 中有數學指令的模組或程式庫:  
    用 Python+SciPy+SymPy 執行微積分計算 1 [link](https://blog.csdn.net/m0_47985483/article/details/117298121)  
    部分參考自 陳擎文教學網, python求解數學式（高中數學，大學數學，工程數學，微積分）
    
*   Python 中有數學指令的模組或程式庫: 陳擎文教學網, python求解數學式（高中數學，大學數學，工程數學，微積分）https://acupun.site/lecture/python\_math/index.htm#chp5 [link](https://acupun.site/lecture/python_math/index.htm)
    
*   Thesaurus of Mathematical Languages,  
    or MATLAB synonymous commands in Python/NumPy  
    **列出 Matlab, Python, R, Octave等, 相對應的指令**,  
    有 pdf檔.  
    Copyright ©2006,2008 Vidar Bronken Gundersen, http://mathesaurus.sf.net/  
    [link](http://mathesaurus.sf.net/)
    
*   NumPy for Matlab users  
    **列出 Matlab, Python 相對應的指令**.  
    https://numpy.org/doc/stable/user/numpy-for-matlab-users.html  
    [link](https://numpy.org/doc/stable/user/numpy-for-matlab-users.html)
    
*   SciPy: Tentative\_NumPy\_Tutorial  
    https://scipy.github.io/old-wiki/pages/Tentative\_NumPy\_Tutorial  
    [link](https://scipy.github.io/old-wiki/pages/Tentative_NumPy_Tutorial)
    
*   SciPy: Numpy\_Example\_List  
    **很有用的指令列表, 很長按字母順序排, 都有例子, 非常棒!**  
    https://scipy.github.io/old-wiki/pages/Numpy\_Example\_List.html  
    [link](https://scipy.github.io/old-wiki/pages/Numpy_Example_List.html)
    
*   **numpy.linalg 與 scipy.linalg 會有不少相同的 array 指令, 兩者都有的指令, 該用那個?**  
    https://docs.scipy.org/doc/scipy/reference/tutorial/linalg.html#scipy-linalg-vs-numpy-linalg  
    以上官網這裡提到, **numpy.linalg有的, scipy.linalg都有, 且更進階更快!**  
    scipy.linalg contains all the functions in numpy.linalg. plus some other more advanced ones not contained in numpy.linalg. Another advantage of using scipy.linalg over numpy.linalg is that it is always compiled with BLAS/LAPACK support, while for numpy this is optional. Therefore, the scipy version might be faster depending on how numpy was installed. Therefore, unless you don’t want to add scipy as a dependency to your numpy program, use scipy.linalg instead of numpy.linalg.  
    [link](https://docs.scipy.org/doc/scipy/reference/tutorial/linalg.html#scipy-linalg-vs-numpy-linalg)
    
*   **numpy.matrix vs 2-D numpy.ndarray 該用那個?**  
    numpy 有 ndarray 類, 也有 matrix矩陣類, matrix矩陣類操作更直觀且指令與matlab更接近, **但是官網建議盡量用 numpy.array( , )**,  
    https://docs.scipy.org/doc/scipy/reference/tutorial/linalg.html#scipy-linalg-vs-numpy-linalg  
    **numpy.matrix vs 2-D numpy.ndarray**  
    “The classes that represent matrices, and basic operations, such as matrix multiplications and transpose are a part of numpy. For convenience, we summarize the differences between numpy.matrix and numpy.ndarray here.  
    numpy.matrix is matrix class that has a more convenient interface than numpy.ndarray for matrix operations. This class supports, for example, MATLAB-like creation syntax via the semicolon, has matrix multiplication as default for the \* operator, and contains I and T members that serve as shortcuts for inverse and transpose:  
    Despite its convenience, the use of the numpy.matrix class is discouraged, since it adds nothing that cannot be accomplished with 2-D numpy.ndarray objects, and may lead to a confusion of which class is being used. For example, the above code can be rewritten as: ,”  
    [link](https://docs.scipy.org/doc/scipy/reference/tutorial/linalg.html#scipy-linalg-vs-numpy-linalg)
    
*   Sorting how to, https://github.com/python/cpython/blob/3.8/Doc/howto/sorting.rst  
    [link](https://github.com/python/cpython/blob/3.8/Doc/howto/sorting.rst)
    
*   Clever B Moler, Numerical computing with Matlab.
    
*   劉正君, Matlab 科學計算與可視化仿真, 電子工業.
    
*   張若愚, Pyhton 科學計算.
    
*   猿媛之家, Python 程序員面試筆試寶典, 機械工業出版,
    
*   Python函數的返回值與嵌套函數 - 每日頭條,  
    函數基本解釋, 閉包解釋清楚簡單  
    https://kknews.cc/zh-tw/code/ngopzeg.html [link](https://kknews.cc/zh-tw/code/ngopzeg.html)
