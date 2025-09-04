---
title: "用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 3 向量與矩陣運算 "
collection: courses
type: "程式設計課程"
permalink: /courses/python-mathematics-implementation-03
venue: "線性代數矩陣計算、微積分與數論"
date: 2025-09-01
location: "Python程式實作"
---  
  用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 3 向量與矩陣運算 

“Talk is cheap. Show me the code.”  
― Linus Torvalds

本系列文章之連結
========

*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 1 Python科學計算第三方庫, 原生指令, 內建模組, 外部模組 [link](/courses/python-mathematics-implementation)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 1.1 scipy.linalg 官網完整列表 [link](/courses/python-mathematics-implementation-01)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 2 產生 numpy 的 數組, 矩陣點乘 等 [link](/courses/python-mathematics-implementation-02)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 3 向量與矩陣運算 [link](/courses/python-mathematics-implementation-03)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 4 函數向量化 function vectorized  
    [link](/courses/python-mathematics-implementation-04)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 5 矩陣特徵值等不變量計算 [link](/courses/python-mathematics-implementation-05)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 5.1 矩陣分解的指令 [link](/courses/python-mathematics-implementation-05_1)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 6 解線性方程組 直接法: Gauss 消去, LU 等 [link](/courses/python-mathematics-implementation-06)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 7 解線性方程組 迭代法: Jacobi iterated,Gauss-Seidel 等 [link](/courses/python-mathematics-implementation-07)
    

執行線代的例子
=======

Ref:  
Clever B Moler, Numerical computing with Matlab  
**Moler的書: Ch2 線性代數**

* * *

### 文章目錄

- [本系列文章之連結](#本系列文章之連結)
- [執行線代的例子](#執行線代的例子)
    - [文章目錄](#文章目錄)
  - [線性聯立方程指令求解](#線性聯立方程指令求解)
  - [Moler 的書: 2.4 排列矩陣](#moler-的書-24-排列矩陣)
    - [NumPy 排列可以用 `np.random.permutation()`](#numpy-排列可以用-nprandompermutation)
    - [Python 內建的 random 模組可以用](#python-內建的-random-模組可以用)
    - [產生一個排列矩陣](#產生一個排列矩陣)
  - [向量(點列)之操作](#向量點列之操作)
    - [產生點列 `np.arange(start, end, stride)` ( Matlab start:stride:end)](#產生點列-nparangestart-end-stride--matlab-startstrideend)
    - [切割成共 k 個點 `np.linspace(n, m, k)` ( Matlab linspace(n, m, k))](#切割成共-k-個點-nplinspacen-m-k--matlab-linspacen-m-k)
    - [3.2.4 向量內積(矩陣點乘)　 np.dot(u,v), np.vdot(u,v) (Matlab dot(u,v))](#324-向量內積矩陣點乘-npdotuv-npvdotuv-matlab-dotuv)
    - [3.2.3 向量外積　 np.cross(u,v) (Matlab cross(u,v))](#323-向量外積-npcrossuv-matlab-crossuv)
    - [3.2.６ 反轉向量(或list)　(Matlab: y=wrev(x))](#32６-反轉向量或listmatlab-ywrevx)
      - [原生 list 用 list.reverse() 反轉list](#原生-list-用-listreverse-反轉list)
      - [原生 list 或 1d 的 np.array 可以用 reversed() 反轉向量](#原生-list-或-1d-的-nparray-可以用-reversed-反轉向量)
    - [sort 排序 list.sort(), sorted(a) (Matlab: y=wrev(x))](#sort-排序-listsort-sorteda-matlab-ywrevx)
      - [a.sort() 會改變 a, 原生 list 有, np.array 也有此指令](#asort-會改變-a-原生-list-有-nparray-也有此指令)
      - [b = sorted(a) 不會改變 a, 原生 list 有, 只可用在 1d 的 np.array](#b--sorteda-不會改變-a-原生-list-有-只可用在-1d-的-nparray)
      - [reversed(), sorted() 都是 built-in functions](#reversed-sorted-都是-built-in-functions)

* * *

線性聯立方程指令求解
----------

Ax\=B Ax=B Ax\=B  
(10−70−3265−15)(x1x2x3)\=(b1b2b3) \\left( \\begin{array}{c c} 10 & -7 & 0 \\\\ -3 & 2 & 6 \\\\ 5 & -1 & 5 \\\\ \\end{array} \\right) \\left( \\begin{array}{c c} x\_1 \\\\ x\_2 \\\\ x\_3 \\\\ \\end{array} \\right) = \\left( \\begin{array}{c c} b\_1 \\\\ b\_2 \\\\ b\_3 \\\\ \\end{array} \\right)\\\\ ​10−35​−72−1​065​​​x1​x2​x3​​​\=​b1​b2​b3​​​  
where  
A\=(10−70−3265−15)x\=(x1x2x3)B\=(b1b2b3) A = \\left( \\begin{array}{c c} 10 & -7 & 0 \\\\ -3 & 2 & 6 \\\\ 5 & -1 & 5 \\\\ \\end{array} \\right)\\\\ x = \\left( \\begin{array}{c c} x\_1 \\\\ x\_2 \\\\ x\_3 \\\\ \\end{array} \\right)\\\\ B= \\left( \\begin{array}{c c} b\_1 \\\\ b\_2 \\\\ b\_3 \\\\ \\end{array} \\right) A\=​10−35​−72−1​065​​x\=​x1​x2​x3​​​B\=​b1​b2​b3​​​

Matalb 的指令  
`x=A\B`

    x=A\B
    

**Python + np + scipy 的指令**  
`x= scipy.linalg.solve(A,B)`

    >>> import numpy as np
    >>> A=np.array([[10,-7,0],[-3,2,6],[5,-1,5]])
    >>> A
    array([[10, -7,  0],
           [-3,  2,  6],
           [ 5, -1,  5]])
    >>> B = np.array([7,4,6])
    >>> B
    array([7, 4, 6])
    >>> x=A\B
    SyntaxError: unexpected character after line continuation character
    >>> from scipy import linalg
    >>> x= scipy.linalg.solve(A,B)
    >>> x
    array([ 0., -1.,  1.])
    
    

可以檢查解出之x 是否為解, 計算 Ax 看是否會等於 B  
`np.dot(A,x)`

    >>> np.dot(A,x)
    array([7., 4., 6.])
    

發現與 B 相等, 解為正確

Moler 的書: 2.4 排列矩陣
------------------

### NumPy 排列可以用 `np.random.permutation()`

### Python 內建的 random 模組可以用

`random.shuffle()` 隨機洗牌  
`random.sample()` 隨機抽樣

    >>> permu=np.random.permutation(5)
    >>> permu
    array([2, 0, 3, 1, 4])
    >>> permu=np.random.permutation(5);permu
    array([4, 0, 1, 2, 3])
    >>> import random
    >>> data = [1,2,3,4,5,6,7]
    >>> random.shuffle(data)
    >>> data
    [7, 1, 3, 4, 5, 6, 2]
    >>> random.sample([1,2,3,4],2)
    [4, 2]
    >>> random.sample([1,2,3,4],4)
    [2, 4, 1, 3]
    >>> random.sample([1,2,3,4,5],5)
    [3, 2, 4, 5, 1]
    >>> random.sample([1,2,3,4,5],5)
    [1, 2, 4, 3, 5]
    

### 產生一個排列矩陣

    >>> permu=random.sample(range(5),5)
    >>> permu
    [3, 4, 0, 1, 2]
    >>> P=np.zeros((5,5));P
    array([[0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0.]])
    >>> P[0,permu[0]]=1
    >>> P
    array([[0., 0., 0., 1., 0.],
           [0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0.]])
    
    >>> for i in range(5):
    	P[i,permu[i]]=1
    
    	
    >>> P
    array([[0., 0., 0., 1., 0.],
           [0., 0., 0., 0., 1.],
           [1., 0., 0., 0., 0.],
           [0., 1., 0., 0., 0.],
           [0., 0., 1., 0., 0.]])
    
    

向量(點列)之操作
---------

Ref: 劉正君, ch3 向量與矩陣運算, Matlab 科學計算與可視化仿真, 電子工業.

### 產生點列 `np.arange(start, end, stride)` ( Matlab start:stride:end)

此指令強調切完之後的間格為 stride (預設是1).  
產生 a 到 (b-1) 間格 gap, 之 等分點, 可以用以下指令, 指定間格寬度為 gap  
`np.arange(a, b, gap)`  
就是  
`np.arange(start, end, stride)`  
**arrange** 是 **array range** 的意思, 是 numpy 的指令, 初學容易跟原生的 range 混淆

    >>> np.arange(1,6)
    array([1, 2, 3, 4, 5])
    
    >>> np.arange(1,6,2)
    array([1, 3, 5])
    >>> type(np.arange(1,6))
    <class 'numpy.ndarray'>
    # 反轉
    >>> np.arange(10,5,-1)
    array([10,  9,  8,  7,  6])
    

    >>> a= np.arange(1,50,1)
    >>> a
    array([ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17,
           18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
           35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49])
    >>> np.arange(10,0,-1)
    array([10,  9,  8,  7,  6,  5,  4,  3,  2,  1])
    

### 切割成共 k 個點 `np.linspace(n, m, k)` ( Matlab linspace(n, m, k))

此指令強調切完之後的點數為 k.  
對初學學者容易誤會, 要小心!!

**為切成含頭尾等分之總共 k 個點, 有 k-1個間格, 間格長度為 (m-n)/(k-1)**

**a=np.linspace(0,1,11)**  
則切成含頭尾等分之11個點 (小心: 切10個間格,間格1/10, 含頭尾兩點總共11個點)  
array(\[0. , 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1. \])

如果下 `a=np.linspace(0,1,10)`, 則為切9個間格, 間格1/9, 含頭尾總共10個點

    array([0.        , 0.11111111, 0.22222222, 0.33333333, 0.44444444,
           0.55555556, 0.66666667, 0.77777778, 0.88888889, 1.        ])
    

這種結果, 很可能不是你的原意!

如果沒也指定 k, 也就是沒有指定切割成多少點,  
**則預設切成含頭尾共50個點**  
`a=np.linspace(0,49)`  
從0到49, 預設切成等分之 含頭尾共50個點 (間格 1)

    array([ 0.,  1.,  2.,  3.,  4.,  5.,  6.,  7.,  8.,  9., 10., 11., 12.,
           13., 14., 15., 16., 17., 18., 19., 20., 21., 22., 23., 24., 25.,
           26., 27., 28., 29., 30., 31., 32., 33., 34., 35., 36., 37., 38.,
           39., 40., 41., 42., 43., 44., 45., 46., 47., 48., 49.])
    

如果是以下, 則間格不是 1, 是 50/49  
`a=np.linspace(0,50)`

    array([ 0.        ,  1.02040816,  2.04081633,  3.06122449,  4.08163265,
            5.10204082,  6.12244898,  7.14285714,  8.16326531,  9.18367347,
           10.20408163, 11.2244898 , 12.24489796, 13.26530612, 14.28571429,
           15.30612245, 16.32653061, 17.34693878, 18.36734694, 19.3877551 ,
           20.40816327, 21.42857143, 22.44897959, 23.46938776, 24.48979592,
           25.51020408, 26.53061224, 27.55102041, 28.57142857, 29.59183673,
           30.6122449 , 31.63265306, 32.65306122, 33.67346939, 34.69387755,
           35.71428571, 36.73469388, 37.75510204, 38.7755102 , 39.79591837,
           40.81632653, 41.83673469, 42.85714286, 43.87755102, 44.89795918,
           45.91836735, 46.93877551, 47.95918367, 48.97959184, 50.        ])
    

如果要 0~50 間格1 等分, 可以用以下指令較順, 指定間格寬度為1  
`np.arange(start, end, stride) ( Matlab start:stride:end)`

    >>>a= np.arange(1,50,1)
    array([ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17,
           18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
           35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49])
    

簡而言之  
**a=np.linspace(n, m, k), 切割 n 到 m, 為指定含頭尾總共 k 個點**, 此指令強調切完之後的點數為 k (預設含頭尾共50個點).  
**a= np.arange(n, m, s), 切割 n 到 m, 指定間格寬度為 s, np.arange(start, end, stride)**, 此指令強調切完之後的間格為 stride (預設是1).

    >>> import numpy as np
    >>> a=np.array(range(1,11))
    >>> a
    array([ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10])
    >>> a=np.linspace(1,10,10)
    >>> a
    array([ 1.,  2.,  3.,  4.,  5.,  6.,  7.,  8.,  9., 10.])
    >>> a=np.linspace(0,1,11)
    >>> a
    array([0. , 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1. ])
    >>> a=np.linspace(0,1,10)
    >>> a
    array([0.        , 0.11111111, 0.22222222, 0.33333333, 0.44444444,
           0.55555556, 0.66666667, 0.77777778, 0.88888889, 1.        ])
    >>> a=np.linspace(0,49)
    >>> a
    array([ 0.,  1.,  2.,  3.,  4.,  5.,  6.,  7.,  8.,  9., 10., 11., 12.,
           13., 14., 15., 16., 17., 18., 19., 20., 21., 22., 23., 24., 25.,
           26., 27., 28., 29., 30., 31., 32., 33., 34., 35., 36., 37., 38.,
           39., 40., 41., 42., 43., 44., 45., 46., 47., 48., 49.])
    >>> a=np.linspace(0,50)
    >>> a
    array([ 0.        ,  1.02040816,  2.04081633,  3.06122449,  4.08163265,
            5.10204082,  6.12244898,  7.14285714,  8.16326531,  9.18367347,
           10.20408163, 11.2244898 , 12.24489796, 13.26530612, 14.28571429,
           15.30612245, 16.32653061, 17.34693878, 18.36734694, 19.3877551 ,
           20.40816327, 21.42857143, 22.44897959, 23.46938776, 24.48979592,
           25.51020408, 26.53061224, 27.55102041, 28.57142857, 29.59183673,
           30.6122449 , 31.63265306, 32.65306122, 33.67346939, 34.69387755,
           35.71428571, 36.73469388, 37.75510204, 38.7755102 , 39.79591837,
           40.81632653, 41.83673469, 42.85714286, 43.87755102, 44.89795918,
           45.91836735, 46.93877551, 47.95918367, 48.97959184, 50.        ])
    >>> 50/49
    1.0204081632653061
    >>> a= np.arange(1,50,1)
    >>> a
    array([ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17,
           18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
           35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49])
    

### 3.2.4 向量內積(矩陣點乘)　 np.dot(u,v), np.vdot(u,v) (Matlab dot(u,v))

    >>> aArray = np.array([1,2,3,4,5])
    >>> bArray = np.array([11,12,13,14,15])
    >>> np.dot(aArray,bArray)
    205
    >>> np.vdot(aArray,bArray)
    205
    

### 3.2.3 向量外積　 np.cross(u,v) (Matlab cross(u,v))

只能用 3 維的向量

    >>> a3dArray = np.array([1,2,3])
    >>> b3dArray = np.array([11,12,13])
    >>> np.cross(a3dArray,b3dArray)
    array([-10,  20, -10])
    

### 3.2.６ 反轉向量(或list)　(Matlab: y=wrev(x))

令 b>a, `arange(b,a,-1)` 會得到 b,b-1,a+1  
(令 b>a, range(b,a,-1) 會得到 b,b-1,a+1, 是原生的 range() )

    >>> for i in range(5,1,-1):
    	print(i)
    5
    4
    3
    2
    

    >>> a= np.array([11,12,13,14,15])
    >>>> np.arange(4,0,-1)
    array([4, 3, 2, 1])
    >>> a[np.arange(4,0,-1)]
    array([15, 14, 13, 12])
    

#### 原生 list 用 list.reverse() 反轉list

    >>> a=[1,2,3,4,5]
    >>> a.reverse()
    >>> a
    [5, 4, 3, 2, 1]
    

np.array 無此 a.reverse() 指令, (1D np.array 可以用緊接此處之後提到的 reversed(a) )

    >>> a=np.array([1,2,3,4,5])
    >>> a.reverse()
    Traceback (most recent call last):
      File "<pyshell#75>", line 1, in <module>
        a.reverse()
    AttributeError: 'numpy.ndarray' object has no attribute 'reverse'
    

#### 原生 list 或 1d 的 np.array 可以用 reversed() 反轉向量

**ref:** 猿媛之家, Python 程序員面試筆試寶典, 機械工業出版, 2.6.8.  
reversed() 是內建的指令(built-in function), 可以用在 序列類 或 1d 的 np.array 都可以,  
reversed(a) 不會改變 a,  
reversed() 傳回一個迭代器 iterator, 必須用 for print才看的到內容:

    >>> for i in reversed(np.array([5,4,3,2,1])):
    	print(i)
    1
    2
    3
    4
    5
    

    reversed() 用在 序列類, 會傳回一個迭代器 iterator
    >>> reversed([5,4,3,2,1])
    <list_reverseiterator object at 0x03016E68>
    >>> for i in reversed([5,4,3,2,1]):
    	print(i)
    1
    2
    3
    4
    5
    

如果是用在 2d np.array, 則只是調換 row 的次序

    >>> np.array([[1,2,3],[4,5,6]])
    array([[1, 2, 3],
           [4, 5, 6]])
    >>> for i in reversed(np.array([[1,2,3],[4,5,6]])):
    	print(i)
    
    [4 5 6]
    [1 2 3]
    

**Ex:** 寫一個可以反轉 2d np.array 的函數  
**Ans:**

    # 43鄭蕙倪 40王培瑜 36董伊真 33何宛庭 23李鈞菱 4林姵綺
    # EX：寫一個可以反轉 2d np.array 的函數
    import numpy as np
    arr2D=np.array([[11,12,13,14],[54,55,56,57]])
    reversedArr=np.flip(arr2D)
    print(reversedArr)
    

### sort 排序 list.sort(), sorted(a) (Matlab: y=wrev(x))

**ref:** Sorting how to, https://github.com/python/cpython/blob/3.8/Doc/howto/sorting.rst  
[link](https://github.com/python/cpython/blob/3.8/Doc/howto/sorting.rst)  
“Python lists have a built-in list.sort() method that modifies the list in-place. There is also a sorted() built-in function that builds a new sorted list from an iterable.”  
官網的 **sorting how to** 這篇, 講到, list.sort() 是 list 類內建的指令,  
sorted()則是 built-in funciton, 所有的 iterable 都可以, 所謂 iterable 氏只有順序的容器, 例如 list, tuple, dict 等, 但是只有原生的可以, 例如第三方庫的纇 np.array 後面示例不行,

#### a.sort() 會改變 a, 原生 list 有, np.array 也有此指令

    >>> a = [3,1,5,6,4]
    >>> a.sort()
    >>> a
    [1, 3, 4, 5, 6]
    

#### b = sorted(a) 不會改變 a, 原生 list 有, 只可用在 1d 的 np.array

    >>> a = [3,1,5,6,4]
    >>> b = sorted(a)
    >>> a
    [3, 1, 5, 6, 4]
    >>> b
    [1, 3, 4, 5, 6]
    

a.sort(), 可用在 所有維度的 np.array  
但是 sorted(a) 只可用在 1d 的 np.array

    >>> a = np.array([3,1,2])
    >>> a.sort()
    >>> a
    array([1, 2, 3])
    >>> a = np.array([3,1,2])
    >>> b = sorted(a)
    >>> a
    array([3, 1, 2])
    >>> b
    [1, 2, 3]
    

2D np.array 只有 a.sort() 可以用

    >>> a2D = np.array([[3,1,2],[5,4,6]])
    >>> a2D
    array([[3, 1, 2],
           [5, 4, 6]])
    >>> a2D.sort()
    >>> a2D
    array([[1, 2, 3],
           [4, 5, 6]])
    >>> a2D = np.array([[3,1,2],[5,4,6]])
    >>> b2D = sorted(a2D)
    Traceback (most recent call last):
      File "<pyshell#65>", line 1, in <module>
        b2D = sorted(a2D)
    ValueError: The truth value of an array with more than one element is ambiguous. Use a.any() or a.all()
    

#### reversed(), sorted() 都是 built-in functions

    >>> dir(__builtins__)
    ['ArithmeticError', 'AssertionError', 'AttributeError', 'BaseException', 'BlockingIOError', 'BrokenPipeError', 'BufferError', 'BytesWarning', 'ChildProcessError', 'ConnectionAbortedError', 'ConnectionError', 'ConnectionRefusedError', 'ConnectionResetError', 'DeprecationWarning', 'EOFError', 'Ellipsis', 'EnvironmentError', 'Exception', 'False', 'FileExistsError', 'FileNotFoundError', 'FloatingPointError', 'FutureWarning', 'GeneratorExit', 'IOError', 'ImportError', 'ImportWarning', 'IndentationError', 'IndexError', 'InterruptedError', 'IsADirectoryError', 'KeyError', 'KeyboardInterrupt', 'LookupError', 'MemoryError', 'ModuleNotFoundError', 'NameError', 'None', 'NotADirectoryError', 'NotImplemented', 'NotImplementedError', 'OSError', 'OverflowError', 'PendingDeprecationWarning', 'PermissionError', 'ProcessLookupError', 'RecursionError', 'ReferenceError', 'ResourceWarning', 'RuntimeError', 'RuntimeWarning', 'StopAsyncIteration', 'StopIteration', 'SyntaxError', 'SyntaxWarning', 'SystemError', 'SystemExit', 'TabError', 'TimeoutError', 'True', 'TypeError', 'UnboundLocalError', 'UnicodeDecodeError', 'UnicodeEncodeError', 'UnicodeError', 'UnicodeTranslateError', 'UnicodeWarning', 'UserWarning', 'ValueError', 'Warning', 'WindowsError', 'ZeroDivisionError', '_', '__build_class__', '__debug__', '__doc__', '__import__', '__loader__', '__name__', '__package__', '__spec__', 'abs', 'all', 'any', 'ascii', 'bin', 'bool', 'breakpoint', 'bytearray', 'bytes', 'callable', 'chr', 'classmethod', 'compile', 'complex', 'copyright', 'credits', 'delattr', 'dict', 'dir', 'divmod', 'enumerate', 'eval', 'exec', 'exit', 'filter', 'float', 'format', 'frozenset', 'getattr', 'globals', 'hasattr', 'hash', 'help', 'hex', 'id', 'input', 'int', 'isinstance', 'issubclass', 'iter', 'len', 'license', 'list', 'locals', 'map', 'max', 'memoryview', 'min', 'next', 'object', 'oct', 'open', 'ord', 'pow', 'print', 'property', 'quit', 'range', 'repr', 'reversed', 'round', 'set', 'setattr', 'slice', 'sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple', 'type', 'vars', 'zip']