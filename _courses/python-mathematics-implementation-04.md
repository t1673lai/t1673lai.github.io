---
title: "用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 4 函數向量化 function vectorized"
collection: courses
type: "程式設計課程"
permalink: /courses/python-mathematics-implementation-04
venue: "線性代數矩陣計算、微積分與數論"
date: 2025-09-01
location: "Python程式實作"
---  
    用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 4 函數向量化 function vectorized 

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

“There’s no shortage of remarkable ideas, what’s missing is the will to execute them.” – Seth Godin  
「很棒的點子永遠不會匱乏，然而缺少的是執行點子的意志力。」—賽斯．高汀

110\_1\_高中週期性課程: Python程式入門與資料分析初探, 道明高中

本系列文章之連結
========

*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 1 Python科學計算第三方庫, 原生指令, 內建模組, 外部模組 [link](https://blog.csdn.net/m0_47985483/article/details/123617733)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 1.1 scipy.linalg 官網完整列表 [link](https://blog.csdn.net/m0_47985483/article/details/107158299)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 2 產生 numpy 的 數組, 矩陣點乘 等 [link](https://blog.csdn.net/m0_47985483/article/details/111745673?spm=1001.2014.3001.5501)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 3 向量與矩陣運算 [link](https://blog.csdn.net/m0_47985483/article/details/113095920?spm=1001.2014.3001.5501)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 4 函數向量化 function vectorized  
    [link](https://blog.csdn.net/m0_47985483/article/details/122241771)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 5 矩陣特徵值等不變量計算 [link](https://blog.csdn.net/m0_47985483/article/details/122667111)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 6 解線性方程組 直接法: Gauss 消去, LU 等 [link](https://blog.csdn.net/m0_47985483/article/details/122691113)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 7 解線性方程組 迭代法: Jacobi iterated,Gauss-Seidel 等 [link](https://blog.csdn.net/m0_47985483/article/details/122754154)
    

* * *

### 文章目录

- [本系列文章之連結](#本系列文章之連結)
    - [文章目录](#文章目录)
- [np 的函數會自動向量化](#np-的函數會自動向量化)
- [原生或 math 等 的函數要向量化需用 `np.vectorize()`](#原生或-math-等-的函數要向量化需用-npvectorize)
- [將自定義函數轉成 向量化函數](#將自定義函數轉成-向量化函數)

* * *

之前的系列是介紹, 向量與向量, 或是 向量與矩陣, 矩陣與矩陣 的加減乘除次方, 排序等運算,  
這篇我們討論 如果有一個函數 f(x)f(x)f(x) 作用在向量或是矩陣 x, 會遇到的狀況.

np 的函數會自動向量化
============

例如以下  
我們先用 `x = np.arange(0,1,0.1)`  
產生 np 的 array: \[0. , 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9\]

再用 `np.sin` 作用在 x=\[0. , 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9\]  
得到:`np.sin(x)=np.sin([0. , 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9])`  
發現 sin⁡(x)\\sin(x)sin(x) 會依序作用在每個 \[x1,x2,⋯ \]\[x\_1, x\_2,\\cdots\]\[x1​,x2​,⋯\], 得到  
\[sin⁡(x1),sin⁡(x2),⋯ \]\[\\sin(x\_1), \\sin(x\_2),\\cdots\]\[sin(x1​),sin(x2​),⋯\],

    >>> x = np.arange(0,1,0.1)
    >>> x
    array([0. , 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9])
    >>> np.sin(x)
    array([0.        , 0.09983342, 0.19866933, 0.29552021, 0.38941834,
           0.47942554, 0.56464247, 0.64421769, 0.71735609, 0.78332691])
    

由此可以看出, **np 的函數會自動向量化**, 可以直接作用在整批資料的每個點上.  
**但是**, 如果是自己定義的函數, 就沒有自動向量化的功能, 一次只能作用在一個點.

原生或 math 等 的函數要向量化需用 `np.vectorize()`
=====================================

接續上面的例子,  
我們這次改用 math 模組的 sin⁡\\sinsin 函數 作用在同樣的  
`x = np.arange(0,1,0.1)` 上,  
`math.sin(x)`  
發現出現錯誤訊息:

    >>> import math
    >>> import numpy as np
    >>> x = np.arange(0,1,0.1)
    >>> x
    array([0. , 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9])
    >>> math.sin(x)
    Traceback (most recent call last):
      File "<pyshell#25>", line 1, in <module>
        math.sin(x)
    TypeError: only size-1 arrays can be converted to Python scalars
    

此時我們可以用 `np.vectorize()` 指令, 將 math.sin 轉成向量化的函數, 重新命名為 例如: mathSinVectorize():

    >>> mathSinVectorize = np.vectorize( math.sin, otypes=[np.float])
    

發現 mathSinVectorize() 可以向量化作用了

    >>> mathSinVectorize(x)
    array([0.        , 0.09983342, 0.19866933, 0.29552021, 0.38941834,
           0.47942554, 0.56464247, 0.64421769, 0.71735609, 0.78332691])
    

將自定義函數轉成 向量化函數
==============

先定義一個平方函數:

    def square(x):
        return x**2
    

再用 `numpy.vectorize()` 將其轉成 向量化函數

    >>> import numpy as np
    >>> squareVec=np.vectorize(square)
    

發現可以作用在 list 上了

    >>> squareVec([1,2,3,4])
    array([ 1,  4,  9, 16])