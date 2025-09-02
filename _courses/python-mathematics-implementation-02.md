---
title: "用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 2 產生 numpy 的 數組, 矩陣點乘 等"
collection: courses
type: "程式設計課程"
permalink: /courses/python-mathematics-implementation-02
venue: "線性代數矩陣計算、微積分與數論"
date: 2024-01-01
location: "Python程式實作"
---

  用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 2 產生 numpy 的 數組, 矩陣點乘 等 

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

* * *

本系列文章之連結
========

*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 1 Python科學計算第三方庫, 原生指令, 內建模組, 外部模組 [link](https://blog.csdn.net/m0_47985483/article/details/123617733)
    
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
- [以下直接以例子講解](#以下直接以例子講解)
    - [Python 的 原生 list(串列 or列表) 是最常用的放資料的容器, 用 \[ \] 包住就是](#python-的-原生-list串列-or列表-是最常用的放資料的容器-用---包住就是)
      - [Python 的 原生 list: \[a,b,c,d,…\\dots…\]](#python-的-原生-list-abcddots)
      - [Python 原生最簡單產生數列的方式: `range(start, end, stride)` ( Matlab: start:stride:end)](#python-原生最簡單產生數列的方式-rangestart-end-stride--matlab-startstrideend)
      - [NumPy 數組 np.array 最簡單產生 numpy 數列的方式: `np.arange(start, end, stride)` (Matlab: start:stride:end)](#numpy-數組-nparray-最簡單產生-numpy-數列的方式-nparangestart-end-stride-matlab-startstrideend)
      - [Python 的 原生 list 做 copy 要小心](#python-的-原生-list-做-copy-要小心)
      - [list 的 擷取元素與切片 (indexing 與 slicing)](#list-的-擷取元素與切片-indexing-與-slicing)
        - [取用 aList 的其中一個元素, 我們稱為 **indexing**, 取用第 index 個元素](#取用-alist-的其中一個元素-我們稱為-indexing-取用第-index-個元素)
        - [取用 aList 的其中一段元素, 我們稱為 **slicing** (slice 切片)](#取用-alist-的其中一段元素-我們稱為-slicing-slice-切片)
      - [list 複製](#list-複製)
        - [\*aCopy1=aList\[:\] 淺複製, 只有第一層不連動](#acopy1alist-淺複製-只有第一層不連動)
        - [aCopy=aList.copy() 淺複製, 只有第一層不連動](#acopyalistcopy-淺複製-只有第一層不連動)
        - [深複製, 全部(各層)不連動](#深複製-全部各層不連動)
        - [複製但連動, 完全一樣](#複製但連動-完全一樣)
    - [產生 numpy 的 數組: np.array(), (Matlab: \[1,2,3; 4,5,6\])](#產生-numpy-的-數組-nparray-matlab-123-456)
    - [產生 numpy 的 數組: 各類特殊矩陣: 零矩陣、都是1的矩陣、 單位矩陣(對角線為1之矩陣)、 取用對角線矩陣、 上三角矩陣](#產生-numpy-的-數組-各類特殊矩陣-零矩陣都是1的矩陣-單位矩陣對角線為1之矩陣-取用對角線矩陣-上三角矩陣)
    - [改變形狀 np.reshape()、 np.resize() (Matlab: reshape(1:6,3,2))](#改變形狀-npreshape-npresize-matlab-reshape1632)
    - [np.array()的元素可以是那些？](#nparray的元素可以是那些)
    - [為何不用 Python 的 原生 list 來執行類似數組的操作?](#為何不用-python-的-原生-list-來執行類似數組的操作)
    - [A 的長寬高 A.shape(), A 的元素個數 A.size (Matlab: size(A), length(A))](#a-的長寬高-ashape-a-的元素個數-asize-matlab-sizea-lengtha)
    - [A 的維度有幾維 A.ndim (Matlab: ndims(A))](#a-的維度有幾維-andim-matlab-ndimsa)
    - [矩陣相乘](#矩陣相乘)
    - [矩陣點乘](#矩陣點乘)
    - [矩陣點除](#矩陣點除)
    - [矩陣複製](#矩陣複製)
      - [如果直接用 A1= A](#如果直接用-a1-a)
      - [切片是 view 會連動](#切片是-view-會連動)
      - [copy(), id()](#copy-id)
      - [fancy indexing: np.array 的切片可以用 真假值之 list 或整數 之 list 或 np.array 做下標集, 提取內容, 但不連動](#fancy-indexing-nparray-的切片可以用-真假值之-list-或整數-之-list-或-nparray-做下標集-提取內容-但不連動)
- [NumPy 的 速查簡表](#numpy-的-速查簡表)
- [NumPy 與 Matlab, R, Octave 等的對照速查簡表](#numpy-與-matlab-r-octave-等的對照速查簡表)
- [References](#references)

* * *

以下直接以例子講解
=========

**以下例子會同步將原生 list 與 numpy 模組 的 np.array() 兩種作比較, 可能讀者剛讀會有點混淆, 只要注意, 有 np. 開頭的就是numpy 模組 的 np.array() , 沒有就是指 原生 list.**

### Python 的 原生 list(串列 or列表) 是最常用的放資料的容器, 用 \[ \] 包住就是

#### Python 的 原生 list: \[a,b,c,d,…\\dots…\]

    >>> [1,2,3,4,5]
    [1, 2, 3, 4, 5]
    >>> type([1,2,3,4,5])
    <class 'list'>
    

#### Python 原生最簡單產生數列的方式: `range(start, end, stride)` ( Matlab: start:stride:end)

range(1,6) 會產生 1,2,3,4,5

    >>> range(1,6)
    range(1, 6)
    >>> type(range(10))
    <class 'range'>
    

他是一個 跌代器 iterator, 為了提高效能, 不會印出來, 要看他的內容, 要用 for loop print 印出來

    >>> for i in range(1,6):
    	print(i)	
    1
    2
    3
    4
    5
    >>> for i in range(1,6,2):
    	print(i)
    1
    3
    5
    

如果要由大到小 用  
**令 b>a, range(b,a,-1) 會得到 b,b-1,a+1**  
例如 range(10,5,-1)

    >>> for i in range(10,5,-1):
    	print(i)
    10
    9
    8
    7
    6
    

#### NumPy 數組 np.array 最簡單產生 numpy 數列的方式: `np.arange(start, end, stride)` (Matlab: start:stride:end)

產生 a 到 (b-1) 間格 間格 gap, 之 等分點, 可以用以下指令, 指定間格寬度為 gap  
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
    

* * *

*   **以下可以等進階時再細看**

#### Python 的 原生 list 做 copy 要小心

Python 的 原生 list 可以放 list在裡面, 可以是較複雜的,  
例如　以下, a 串列的元素有純量, 有 list, 也有 dict (字典),

    >>> a = [1,2,3,[4,5,6],'abc',{'a':1,'b':2,'c':3}]
    >>> a
    [1, 2, 3, [4, 5, 6], 'abc', {'a': 1, 'b': 2, 'c': 3}]
    

**註:** 因為Python 的 原生 list 可以放一層一層的資料容器在內, 在copy 時會出現不預期的狀況, 後面介紹**深拷貝跟淺拷貝**, 有點繁瑣, 建議第一次閱讀, 可以跳過.  
**如果只是要拷貝某個 aList 內容, 不想跟原來的 aList 會有連動, 就用**

**import copy**  
**aDeepCopy=aList.copy.deepcopy()**

執行深複製, 全部(各層)不連動, 避免產生不預期的狀況.

*   **以上可以等進階時再細看**

* * *

#### list 的 擷取元素與切片 (indexing 與 slicing)

    >>> aList = [1,2,3,4,5]
    >>> aList
    [1, 2, 3, 4, 5]
    

##### 取用 aList 的其中一個元素, 我們稱為 **indexing**, 取用第 index 個元素

**特別注意 Python 的所有資料的容器(例如 list) 下標是從 0 開始**  
( Python, C, JavaScript 下標是從 0 開始  
Matlab, R 下標是從 1 開始 )

    >>> aList[0]
    1
    >>> aList[1]
    2
    

##### 取用 aList 的其中一段元素, 我們稱為 **slicing** (slice 切片)

所謂　slicing 語法, 是指　 **n:m** 　語法

    >>> aList[1:3]
    [2, 3]
    >>> b = aList[1:3]
    >>> b
    [2, 3]
    

b 是 aList 的 slice, a 改變, 不會影響 b  
**( Python 的 list 之 slice 不會連動)  
(注意: np.array()的 slice 會連動)**

    >>> aList[1]=22
    >>> aList
    [1, 22, 3, 4, 5]
    >>> b
    [2, 3]
    

**Python 的 list 不能用 真假值或整數 list 取切片**  
**但是 np.array 可以用 真假值或整數 之 np.array 或 lis 取切片**

> 請參考後面 fancy indexing: np.array 的切片可以用 真假值之 list 或整數 之 list 或 np.array 做下標集, 提取內容, 但不連動

    >>> aList
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    >>> aList[[0,2,4]]
    Traceback (most recent call last):
      File "<pyshell#76>", line 1, in <module>
        aList[[0,2,4]]
    TypeError: list indices must be integers or slices, not list
    

* * *

*   **以下可以等進階時再細看**

#### list 複製

**Python 深淺拷貝, 只差在第二層以上**  
**當 list 中含有 list 時, 深淺拷貝才會有差別**

##### \*aCopy1=aList\[:\] 淺複製, 只有第一層不連動

aCopy1=aList\[:\]  
當 aList 改變 其中一個純量元素 時, aCopy 不會連動

    >>> aList = [1,22,3,4,5]
    >>> aCopy1 = aList[:]
    >>> aCopy1
    [1, 22, 3, 4, 5]
    >>> aCopy1[0]=2
    >>> aCopy1
    [2, 22, 3, 4, 5]
    >>> aList
    [1, 22, 3, 4, 5]
    

對於 aList 是 list 含有 list 時

    >>> aList = [1,2,3,4,[1,2,3]]
    >>> aCopy = alist[:]
    >>> aCopy
    [1, 2, 3, 4, [1, 2, 3]]
    >>> aList[4][0]=11
    >>> aList
    [1, 2, 3, 4, [11, 2, 3]]
    >>> aCopy
    [1, 2, 3, 4, [11, 2, 3]]
    

##### aCopy=aList.copy() 淺複製, 只有第一層不連動

aCopy=aList.copy()  
當 aList 改變 其中一個純量元素 時, aCopy 不會連動

    >>> aList
    [1, 22, 3, 4, 5]
    >>> aCopy=aList.copy()
    >>> aCopy
    [1, 22, 3, 4, 5]
    >>> aCopy is aList
    False
    >>> aCopy == aList
    True
    >>> aCopy[0]=2
    >>> aCopy
    [2, 22, 3, 4, 5]
    >>> aList
    [1, 22, 3, 4, 5]
    

**當 list 中含有 list 時, 如果只改變 list 中的 list 的一個元素 時, 淺拷貝還是會連動**  
當 aList 改變 list 中的 list 的一個元素 時, aCopy 也跟著改了

    >>> aList = [1,22,3,4,[1,2,3]]
    >>> aList
    [1, 22, 3, 4, [1, 2, 3]]
    >>> aCopy=aList.copy()
    >>> aCopy
    [1, 22, 3, 4, [1, 2, 3]]
    >>> aList[0]=2
    >>> aList
    [2, 22, 3, 4, [1, 2, 3]]
    >>> aCopy
    [1, 22, 3, 4, [1, 2, 3]]
    # 當 aList 改變  list 中的 list 的一個元素 時, aCopy 也跟著改了
    >>> aList[4][1]=0
    >>> aList
    [2, 22, 3, 4, [1, 0, 3]]
    >>> aCopy
    [1, 22, 3, 4, [1, 0, 3]]
    >>> aList[4] == aCopy[4]
    True
    >>> aList[4] is aCopy[4]
    True
    >>> aList[0] is aCopy[0]
    True
    >>> aList is aCopy
    False
    # 當 aList 改變 其中一個純量元素 時, aCopy 不會改
    >>> aList[0]=3
    >>> aList
    [3, 22, 3, 4, [1, 0, 3]]
    >>> aCopy
    [2, 22, 3, 4, [1, 0, 3]]
    

**當 aList 改變 list 中的 整個 list 時, 淺拷貝不連動**  
如果把 list 中的 list, 整條換掉, 似乎指向 list 中的該 list 的位址就改變了,  
就把 aList\[4\] 與 aCopy\[4\] 的關聯脫鉤了!  
( 如果只是更改 aList\[4\]\[1\], 則 aList\[4\] 與 aCopy\[4\] 仍是同位址)

    >>> aList[4]=[11,0,33]
    >>> aList
    [3, 22, 3, 4, [11, 0, 33]]
    >>> aCopy
    [2, 22, 3, 4, [1, 0, 3]]
    >>> aList[4][1]=2
    >>> aList
    [3, 22, 3, 4, [11, 2, 33]]
    >>> aCopy
    [2, 22, 3, 4, [1, 0, 3]]
    >>> aList[4] is aCopy[4]
    False
    

*   **以上可以等進階時再細看**

* * *

##### 深複製, 全部(各層)不連動

**import copy**  
**aDeepCopy=copy.deepcopy(aList)**

    >>> import copy
    >>> aDeepCopy=aList.copy.deepcopy()
    Traceback (most recent call last):
      File "<pyshell#39>", line 1, in <module>
        aDeepCopy=aList.copy.deepcopy()
    AttributeError: 'builtin_function_or_method' object has no attribute 'deepcopy'
    >>> aDeepCopy=copy.deepcopy(aList)
    >>> aDeepCopy
    [1, 22, 3, 4, 5]
    >>> aDeepCopy is aList
    False
    >>> aDeepCopy == aList
    True
    

**即使 aList 是一個 list 中含有 list, aDeepCopy是深複製得來的, 它還是, 各層都不會與 aList 連動**

    >>> aList = [1,2,3,4,[1,2,3]]
    >>> aDeepCopy = copy.deepcopy(aList)
    >>> aDeepCopy
    [1, 2, 3, 4, [1, 2, 3]]
    >>> aList[4][0] = 11
    >>> aList
    [1, 2, 3, 4, [11, 2, 3]]
    >>> aDeepCopy
    [1, 2, 3, 4, [1, 2, 3]]
    

##### 複製但連動, 完全一樣

用等號 **aListRef = aList**, 其實是得到完全一樣

    >>> aListRef = aList
    >>> aListRef
    [1, 22, 3, 4, 5]
    >>> aListRef == aList
    True
    >>> aListRef is aList
    True
    

### 產生 numpy 的 數組: np.array(), (Matlab: \[1,2,3; 4,5,6\])

> 對照: 劉正君, 3.4

    >>> import numpy as np
    >>> A = np.array([[1,2,3],[4,5,6]]);A
    array([[1, 2, 3],
           [4, 5, 6]])
    >>> B = np.arange(11,17);B
    array([11, 12, 13, 14, 15, 16])
    >>> B.reshape(3,2)
    array([[11, 12],
           [13, 14],
           [15, 16]])
    

### 產生 numpy 的 數組: 各類特殊矩陣: 零矩陣、都是1的矩陣、 單位矩陣(對角線為1之矩陣)、 取用對角線矩陣、 上三角矩陣

ref: 劉正君, 3.6. 3

zeros filled array 零矩陣 (Matlab: zeros(3,5))

    >>> a = np.zeros(5)
    >>> a
    array([0., 0., 0.,>>> a1 = np.zeros([5,5])
    >>> a1
    array([[0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0.]]) 0., 0.])
    # 注意, 維度用 [5,5] 包住
    >>> a1 = np.ones(5,5);a1
    Traceback (most recent call last):
      File "<pyshell#5>", line 1, in <module>
        a1 = np.ones(5,5);a1
      File "C:\Users\user\AppData\Local\Programs\Python\Python38-32\lib\site-packages\numpy\core\numeric.py", line 207, in ones
        a = empty(shape, dtype, order)
    TypeError: data type not understood
    

ones filled array 1矩陣 (Matlab: ones(3,5))

    >>> b = np.ones(5)
    >>> b
    array([1., 1., 1., 1., 1.])
    >>> b1 = np.ones([5,5])
    >>> b1
    array([[1., 1., 1., 1., 1.],
           [1., 1., 1., 1., 1.],
           [1., 1., 1., 1., 1.],
           [1., 1., 1., 1., 1.],
           [1., 1., 1., 1., 1.]])
    

any number filled array 任意數字填滿矩陣 (Matlab: ones(3,5)\*9 )

    >>> b2 = b1*3
    >>> b2
    array([[3., 3., 3., 3., 3.],
           [3., 3., 3., 3., 3.],
           [3., 3., 3., 3., 3.],
           [3., 3., 3., 3., 3.],
           [3., 3., 3., 3., 3.]])
    

identity array 單位矩陣(對角線矩陣) (Matlab: eye(3))

    >>> c = np.eye(4)
    >>> c
    array([[1., 0., 0., 0.],
           [0., 1., 0., 0.],
           [0., 0., 1., 0.],
           [0., 0., 0., 1.]])
    >>> c1 = np.identity(4)
    >>> c1
    array([[1., 0., 0., 0.],
           [0., 1., 0., 0.],
           [0., 0., 1., 0.],
           [0., 0., 0., 1.]])
    

給定 np.array a 取用a 的對角線 (Matlab: diag(a), diag(a,0))

    >>> a
    array([[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]])
    >>> a_diag = np.diag(a)
    >>> a_diag
    array([1, 5, 9])
    >>> a_diag2d = a_diag*np.eye(3)
    >>> a_diag2d
    array([[1., 0., 0.],
           [0., 5., 0.],
           [0., 0., 9.]])
    

隨機數組 (Matlab: rand(3,4))

    >>> a_rand = np.random.rand(3,4)
    >>> a_rand
    array([[0.65543729, 0.32649166, 0.21621299, 0.58931067],
           [0.7932652 , 0.35415987, 0.83885435, 0.02375679],
           [0.01526737, 0.95740181, 0.36366563, 0.66846968]])
    

### 改變形狀 np.reshape()、 np.resize() (Matlab: reshape(1:6,3,2))

**注意: 使用 reshape()時, 原array沒改變!**

    >>> B=np.array([11, 12, 13, 14, 15, 16])
    >>> B
    array([11, 12, 13, 14, 15, 16])
    # 將 B reshape() 後的 array指定給 B1
    >>> B1 = B.reshape(2,3)
    >>> B1
    array([[11, 12, 13],
           [14, 15, 16]])
    # B 原 array 沒改變
    >>> B
    array([11, 12, 13, 14, 15, 16])
    

注意 A.reshape 後指定給另一個名稱, 例如 A\_reform, A 與 A\_reform 會連動,

    >>> A = np.arange(1,11)
    >>> A
    array([ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10])
    >>> A.reshape(2,5)
    array([[ 1,  2,  3,  4,  5],
           [ 6,  7,  8,  9, 10]])
    >>> A
    array([ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10])
    >>> A_reform=A.reshape(2,5)
    >>> A_reform
    array([[ 1,  2,  3,  4,  5],
           [ 6,  7,  8,  9, 10]])
    >>> A_reform[1,2]
    8
    >>> A_reform[1,2]=18
    >>> A_reform
    array([[ 1,  2,  3,  4,  5],
           [ 6,  7, 18,  9, 10]])
    >>> A
    array([ 1,  2,  3,  4,  5,  6,  7, 18,  9, 10])
    

**注意: 使用 resize()時, 原array會改變!**

    >>> B2 = np.resize(B,(3,2))
    >>> B2
    array([[11, 12],
           [13, 14],
           [15, 16]])
    >>> B
    array([[11, 12],
           [13, 14],
           [15, 16]])
    

用 B2 = B.resize(3,2)會出錯

    >>> B2 = B.resize(3,2)
    >>> B2
    >>> B2[0]
    Traceback (most recent call last):
      File "<pyshell#46>", line 1, in <module>
        B2[0]
    TypeError: 'NoneType' object is not subscriptable
    

### np.array()的元素可以是那些？

基本上就是整數、浮點數、複數、字串等

    >>> np.typeDict.values()
    dict_values([<class 'numpy.bool_'>, <class 'numpy.bool_'>, <class 'numpy.int8'>, <class 'numpy.int8'>, <class 'numpy.int8'>, <class 'numpy.uint8'>, <class 'numpy.uint8'>, <class 'numpy.uint8'>, <class 'numpy.int16'>, <class 'numpy.int16'>, <class 'numpy.int16'>, <class 'numpy.uint16'>, <class 'numpy.uint16'>, <class 'numpy.uint16'>, <class 'numpy.intc'>, <class 'numpy.intc'>, <class 'numpy.uint32'>, <class 'numpy.uintc'>, <class 'numpy.uintc'>, <class 'numpy.intc'>, <class 'numpy.intc'>, <class 'numpy.uintc'>, <class 'numpy.uintc'>, <class 'numpy.int32'>, <class 'numpy.int32'>, <class 'numpy.int32'>, <class 'numpy.uint32'>, <class 'numpy.uint32'>, <class 'numpy.int64'>, <class 'numpy.int64'>, <class 'numpy.int64'>, <class 'numpy.uint64'>, <class 'numpy.uint64'>, <class 'numpy.uint64'>, <class 'numpy.float16'>, <class 'numpy.float16'>, <class 'numpy.float16'>, <class 'numpy.float32'>, <class 'numpy.float32'>, <class 'numpy.float64'>, <class 'numpy.float64'>, <class 'numpy.float64'>, <class 'numpy.longdouble'>, <class 'numpy.longdouble'>, <class 'numpy.longdouble'>, <class 'numpy.complex128'>, <class 'numpy.complex64'>, <class 'numpy.complex64'>, <class 'numpy.complex128'>, <class 'numpy.complex128'>, <class 'numpy.complex128'>, <class 'numpy.clongdouble'>, <class 'numpy.clongdouble'>, <class 'numpy.clongdouble'>, <class 'numpy.object_'>, <class 'numpy.object_'>, <class 'numpy.bytes_'>, <class 'numpy.bytes_'>, <class 'numpy.str_'>, <class 'numpy.str_'>, <class 'numpy.str_'>, <class 'numpy.void'>, <class 'numpy.void'>, <class 'numpy.void'>, <class 'numpy.datetime64'>, <class 'numpy.datetime64'>, <class 'numpy.timedelta64'>, <class 'numpy.timedelta64'>, <class 'numpy.bool_'>, <class 'numpy.bool_'>, <class 'numpy.bool_'>, <class 'numpy.int32'>, <class 'numpy.int32'>, <class 'numpy.int32'>, <class 'numpy.uint32'>, <class 'numpy.uintc'>, <class 'numpy.uint32'>, <class 'numpy.float16'>, <class 'numpy.float16'>, <class 'numpy.float16'>, <class 'numpy.float32'>, <class 'numpy.float32'>, <class 'numpy.float32'>, <class 'numpy.float64'>, <class 'numpy.float64'>, <class 'numpy.float64'>, <class 'numpy.complex64'>, <class 'numpy.complex64'>, <class 'numpy.complex64'>, <class 'numpy.complex128'>, <class 'numpy.complex128'>, <class 'numpy.complex128'>, <class 'numpy.object_'>, <class 'numpy.object_'>, <class 'numpy.bytes_'>, <class 'numpy.bytes_'>, <class 'numpy.str_'>, <class 'numpy.str_'>, <class 'numpy.void'>, <class 'numpy.void'>, <class 'numpy.datetime64'>, <class 'numpy.datetime64'>, <class 'numpy.datetime64'>, <class 'numpy.timedelta64'>, <class 'numpy.timedelta64'>, <class 'numpy.timedelta64'>, <class 'numpy.uint32'>, <class 'numpy.int64'>, <class 'numpy.int64'>, <class 'numpy.int64'>, <class 'numpy.uint64'>, <class 'numpy.uint64'>, <class 'numpy.uint64'>, <class 'numpy.int16'>, <class 'numpy.int16'>, <class 'numpy.int16'>, <class 'numpy.uint16'>, <class 'numpy.uint16'>, <class 'numpy.uint16'>, <class 'numpy.int8'>, <class 'numpy.int8'>, <class 'numpy.int8'>, <class 'numpy.uint8'>, <class 'numpy.uint8'>, <class 'numpy.uint8'>, <class 'numpy.complex128'>, <class 'numpy.intc'>, <class 'numpy.uintc'>, <class 'numpy.float32'>, <class 'numpy.complex64'>, <class 'numpy.complex64'>, <class 'numpy.float64'>, <class 'numpy.intc'>, <class 'numpy.uintc'>, <class 'numpy.int32'>, <class 'numpy.longdouble'>, <class 'numpy.clongdouble'>, <class 'numpy.clongdouble'>, <class 'numpy.bool_'>, <class 'numpy.bytes_'>, <class 'numpy.bytes_'>, <class 'numpy.str_'>, <class 'numpy.object_'>, <class 'numpy.str_'>, <class 'numpy.int32'>, <class 'numpy.float64'>, <class 'numpy.complex128'>, <class 'numpy.bool_'>, <class 'numpy.object_'>, <class 'numpy.str_'>, <class 'numpy.bytes_'>, <class 'numpy.bytes_'>])
    

如果元素是 list, 或是 np.array 的類型,也可以

    >>> a=np.array(['a','b',[1,2]])
    >>> a
    array(['a', 'b', list([1, 2])], dtype=object)
    >>> a=np.array(['a','b',np.array([1,2])])
    >>> a
    array(['a', 'b', array([1, 2])], dtype=object)
    >>> a[0]
    'a'
    >>> a[2]
    array([1, 2])
    

### 為何不用 Python 的 原生 list 來執行類似數組的操作?

Ans:

1.  NumPy 的 array 是用 C 的 知名線性代數工具庫 去計算, 而 list 的效能並沒有用 C 優化,
2.  NumPy 的 array 允許用真假值(布林值)或整數 之 list 或 真假值(布林值)或整數 之 np.array 做下標集, 提取內容, 但 list 無此功能

有關上面 2. 的測試:  
產生一個 Python 的 原生 list

    # 產生一個 Python 的 原生 list
    >>> aList = [0,1,2,3,4,5]
    >>> aList
    [0, 1, 2, 3, 4, 5]
    # 定義一個真假值(布林值) list
    >>> booleanIndex = [ True, False, True, False, True, False]
    # 用真假值(布林值)做下標集, 提取
    # 出現錯誤訊息, 顯示, list 的 下標集只能用單一整數或是 slices 切片(用 n:m 語法）
    >>> aList[booleanIndex]
    Traceback (most recent call last):
      File "<pyshell#3>", line 1, in <module>
        aList[booleanIndex]
    TypeError: list indices must be integers or slices, not list
    

產生一個 np 的 array, 用跟上面一樣的真假值(布林值) list: booleanIndex 去提取內容, 發現可以!

    >>> import numpy as np
    >>> aArray = np.array([0,1,2,3,4,5])
    >>> aArray
    array([0, 1, 2, 3, 4, 5])
    >>> aArray[booleanIndex]
    array([0, 2, 4])
    >>> 
    

> 請參考後面 fancy indexing: np.array 的切片可以用 真假值之 list 或整數 之 list 或 np.array 做下標集, 提取內容, 但不連動

### A 的長寬高 A.shape(), A 的元素個數 A.size (Matlab: size(A), length(A))

**array (或matrix) 常需要維度的訊息**

    >>> A.shape
    (2, 3)
    >>> np.shape(A)
    (2, 3)
    >>> len(A)
    2
    >>> B.shape
    (6,)
    >>> B1.shape
    (3, 2)
    >>> B2.shape
    (2, 3)
    
    >>> A.size
    6
    >>> np.size(A)
    6
    

### A 的維度有幾維 A.ndim (Matlab: ndims(A))

以下Ａrray 有3維  
在操作線性代數時, 有時會需要知道該數組的維度有幾維

    >>> aArray = np.array([[[1,2,3],[4,5,6]],[[7,8,9],[10,11,12]]])
    >>> aArray
    array([[[ 1,  2,  3],
            [ 4,  5,  6]],
    
           [[ 7,  8,  9],
            [10, 11, 12]]])
    >>> aArray.ndim
    3
    

此時 A 與 B1的維度相合, 就可以進行矩陣相乘

### 矩陣相乘

*   在 Matlab 中是用 **A \* B1**,
*   在 numpy中用 **numpy.dot(A, B1)**, 或是
*   **numpy.matmul(A,B1)**

    >>> np.dot(A,B1)
    array([[ 82,  88],
           [199, 214]])
    >>> np.matmul(A,B1)
    array([[ 82,  88],
           [199, 214]])
    

### 矩陣點乘

*   在 Matlab 中是用 **A .\* B**
*   在 numpy中用 **A\*B**

    >>> B2=B.reshape(2,3)
    >>> B2
    array([[11, 12, 13],
           [14, 15, 16]])
    >>> A*B2
    array([[11, 24, 39],
           [56, 75, 96]])
    >>> np.multiply(A,B2)
    array([[11, 24, 39],
           [56, 75, 96]])
    

### 矩陣點除

*   在 Matlab 中是用 **A ./ B**
*   在 numpy中用 **A/B**

    >>> A/B2
    array([[0.09090909, 0.16666667, 0.23076923],
           [0.28571429, 0.33333333, 0.375     ]])
    

### 矩陣複製

**np 中最常出錯的是對一個array 做 copy 的動作**  
**ref: Scipy lecture notes, Edition 2020.1: sec 4.1.6 copy and view**  
\*\*ref: 何敏煌, Python 程式設計實務, sec 6.3.5: a is b \*\*

#### 如果直接用 A1= A

則得到一個完全一樣的 A, 只是多一個別名叫 A1 而已,  
此時你改變 A1, 就等於改變A, A 與 A1 都指向同一個位址

    >>> A1 = A
    >>> A1 is A
    True
    >>> A.shape
    (2, 3)
    >>> A1.shape
    (2, 3)
    >>> A1.shape=(3,2)
    >>> A1.shape
    (3, 2)
    >>> A.shape
    (3, 2)
    >>> A
    array([[1, 2],
           [3, 4],
           [5, 6]])
    >>> A1
    array([[1, 2],
           [3, 4],
           [5, 6]])
    >>> id(A)
    60451360
    >>> id(A1)
    60451360
    

#### 切片是 view 會連動

**view 是(淺層)拷貝 (shallow) copy**  
**取 slicing 就是 view**  
當 S 是 A 的 slice, 改變 S, 也會改變 A, **會連動**

    >>> A
    array([[1, 2],
           [3, 4],
           [5, 6]])
    >>> S = A[:,1]
    >>> S
    array([2, 4, 6])
    >>> S[:] = 10
    >>> S
    array([10, 10, 10])
    >>> A
    array([[ 1, 10],
           [ 3, 10],
           [ 5, 10]])
    

#### copy(), id()

**copy 是(深層)拷貝 (deep) copy**  
**D = A.copy()**, 則D 的資料與 A 一樣, 但是, 位址不同, 改變D, 與 A 無關!

    >>> D = A.copy()
    >>> D
    array([[ 1, 10],
           [ 3, 10],
           [ 5, 10]])
    >>> D is A
    False
    >>> D[0,:]=9
    >>> D
    array([[ 9,  9],
           [ 3, 10],
           [ 5, 10]])
    >>> A
    array([[ 1, 10],
           [ 3, 10],
           [ 5, 10]])
    
    >>> id(A)
    60451360
    >>> id(D)
    206144320
    

#### fancy indexing: np.array 的切片可以用 真假值之 list 或整數 之 list 或 np.array 做下標集, 提取內容, 但不連動

NumPy 的 array 允許用真假值(布林值)或整數 之 list 或 真假值(布林值)或整數 之 np.array 做下標集, 提取內容(但 list 無此功能), 與原來的 array 不連動, scipy lecture notes 稱此為 **fancy indexing**.

**ref:** Scipy lecture notes, Edition 2020.1: sec4.1.7 Fancy indexing

以下用 整數 之 list 取切片, 不連動

    >>> import numpy as np
    >>> aArray = np.array([1,2,3,4,5])
    >>> aArray
    array([1, 2, 3, 4, 5])
    >>> aArray[[0,1,4]]
    array([1, 2, 5])
    >>> bArray = aArray[[0,1,4]]
    >>> bArray
    array([1, 2, 5])
    >>> aArray[0]=22
    >>> aArray
    array([22,  2,  3,  4,  5])
    >>> bArray
    array([1, 2, 5])
    >>> bArray[0]=11
    >>> bArray
    array([11,  2,  5])
    >>> aArray
    array([22,  2,  3,  4,  5])
    >>> arrayIndex = np.array([1,2,4])
    >>> arrayIndex
    array([1, 2, 4])
    >>> bArray = aArray[arrayIndex]
    >>> bArray
    array([2, 3, 5])
    

以下用 整數 之 np.array 取切片, 不連動

    >>> arrayIndex = np.array([0,1,4])
    >>> arrayIndex
    array([0, 1, 4])
    >>> bArray = aArray[arrayIndex]
    >>> bArray
    array([22,  2,  5])
    >>> aArray[0]=222
    >>> aArray
    array([222,   2,   3,   4,   5])
    >>> bArray
    array([22,  2,  5])
    

NumPy 的 速查簡表
============

Ref: 以下我們參考: Python Numpy全世界最長基礎教程最適合小白學習 還詳細很全速拿, https://twgreatdaily.com/AhWyTG8BMH2\_cNUgWU4g.html [link](https://twgreatdaily.com/AhWyTG8BMH2_cNUgWU4g.html).

一、數組方法

創建數組：arange()創建一維數組；array()創建一維或多維數組，其參數是類似於數組的對象，如列表等

創建數組：np.zeros((2,3))，或者np.ones((2,3))，參數是一個元組分別表示行數和列數

對應元素相乘，a \* b，得到一個新的矩陣，形狀要一致；但是允許a是向量而b是矩陣，a的列數必須等於b的列數，a與每個行向量點乘

*   *   / 與 \* 的運算規則相同。

數學上定義的矩陣乘法 np.dot(a, b)。如果形狀不匹配會報錯；但是允許允許a和b都是向量，返回兩個向量的內積。只要有一個參數不是向量，就應用矩陣乘法。

（PS：總之就是，向量很特殊，在運算中可以自由轉置而不會出錯，運算的返回值如果維度為1，也一律用行向量\[\]表示）

讀取數組元素：如a\[0\],a\[0,0\]

數組變形：如b=a.reshape(2,3,4)將得到原數組變為2_3_4的三維數組後的數組；或是a.shape=(2,3,4)或a.resize(2,3,4)直接改變數組a的形狀

數組組合：水平組合hstack((a,b))或concatenate（（a,b）,axis=1）;垂直組合vstack((a,b))或concatenate（（a,b）,axis=0）;深度組合dstack((a,b))

數組分割（與數組組合相反）：分別有hsplit,vsplit,dsplit,split(split與concatenate相對應)

將np數組變為py列表：a.tolist()

數組排序（小到大）：列排列np.msort(a)，行排列np.sort(a)，np.argsort(a)排序後返回下標

複數排序：np.sort\_complex(a)按先實部後虛部排序

數組的插入：np.searchsorted(a,b)將b插入原有序數組a，並返回插入元素的索引值

類型轉換：如a.astype(int)，np的數據類型比py豐富，且每種類型都有轉換方法

條件查找，返回滿足條件的數組元素的索引值：np.where(條件)

條件查找，返回下標：np.argwhere(條件)

    >>> A
    array([ 1,  4,  7, 10])
    >>> np.argwhere(A==7)
    array([[2]], dtype=int64)
    >>> np.where(A==7)
    (array([2], dtype=int64),)
    >>> np.where(A%2==0)
    (array([1, 3], dtype=int64),)
    >>> np.argwhere(A%2==0)
    array([[1],
           [3]], dtype=int64)
    

條件查找，返回滿足條件的數組元素：np.extract(\[條件\],a)

根據b中元素作為索引，查找a中對應元素：np.take(a,b)一維

數組中最小最大元素的索引：np.argmin(a)，np.argmax(a)

多個數組的對應位置上元素大小的比較：np.maximum(a,b,c,……)返回每個索引位置上的最大值，np.minimum(…….)相反

將a中元素都置為b：a.fill(b)

每個數組元素的指數：np.exp(a)

生成等差行向量：如np.linspace(1,6,10)則得到1到6之間的均勻分布，總共返回10個數

求余：np.mod(a,n)相當於a%n，np.fmod(a,n)仍為求余且餘數的正負由a決定

計算平均值：np.mean(a)

計算最大值：amax(a, axis=None, out=None, keepdims=False) 。Return the maximum of an array or maximum along an axis.

計算加權平均值：np.average(a,b),其中b是權重

計算數組的極差：np.pth(a)=max(a)-min(a)

計算方差（總體方差）：np.var(a)

標準差：np.std(a)

算術平方根，a為浮點數類型：np.sqrt(a)

對數：np.log(a)

修剪數組，將數組中小於x的數均換為x，大於y的數均換為y：a.clip(x,y)

所有數組元素乘積：a.prod()

數組元素的累積乘積：a.cumprod()

數組元素的符號：np.sign(a)，返回數組中各元素的正負符號，用1和-1表示

數組元素分類：np.piecewise(a,\[條件\]，\[返回值\])，分段給定取值，根據判斷條件給元素分類，並返回設定的返回值。

判斷兩數組是否相等： np.array\_equal(a,b)

判斷數組元素是否為實數： np.isreal(a)

去除數組中首尾為0的元素：np.trim\_zeros(a)

對浮點數取整，但不改變浮點數類型：np.rint(a)

二、數組屬性

1.獲取數組每一維度的大小：a.shape

2.獲取數組維度：a.ndim

3.元素個數：a.size

4.數組元素在內存中的字節數：a.itemsize

5.數組字節數：a.nbytes==a.size\*a.itemsize

6.數組元素覆蓋：a.flat=1，則a中數組元素都被1覆蓋

7.數組轉置：a.T

不能求逆、求協方差、跡等，不適用於複雜科學計算，可以將array轉換成matrix。

三、矩陣方法

np.mat(『…』) 官網已建議不要使用  
創建矩陣：np.mat(『…』)通過字符串格式創建，np.mat(a)通過array數組創建，也可用matrix或bmat函數創建

創建複合矩陣：np.bmat(『A B』,』AB』)，用A和B創建複合矩陣AB（字符串格式）

創建n\*n維單位矩陣：np.eye(n)

矩陣的轉置：A.T

矩陣的逆矩陣：A.I

計算協方差矩陣：np.cov(x)，np.cov(x,y)

計算矩陣的跡（對角線元素和）：a.trace()

相關係數：np.corrcoef(x,y)

給出對角線元素：a.diagonal()

四、線性代數

估計線性模型中的係數：a=np.linalg.lstsq(x,b),有b=a\*x

求方陣的逆矩陣：np.linalg.inv(A)

求廣義逆矩陣：np.linalg.pinv(A)

求矩陣的行列式：np.linalg.det(A)

解形如AX=b的線性方程組：np.linalg.solve(A,b)

求矩陣的特徵值：np.linalg.eigvals（A）

求特徵值和特徵向量：np.linalg.eig(A)

Svd分解：np.linalg.svd(A)

五、機率分布

產生二項分布的隨機數：np.random.binomial(n,p,size=…)，其中n,p,size分別是每輪試驗次數、機率、輪數

產生超幾何分布隨機數：np.random.hypergeometric(n1,n2,n,size=…)，其中參數意義分別是物件1總量、物件2總量、每次採樣數、試驗次數

產生N個正態分布的隨機數：np.random.normal(均值，標準差，N)

產生N個對數正態分布的隨機數：np.random.lognormal(mean,sigma,N)

六、多項式

多項式擬合：poly= np.polyfit(x,a,n),擬合點集a得到n級多項式，其中x為橫軸長度，返回多項式的係數

多項式求導函數：np.polyder(poly),返回導函數的係數

得到多項式的n階導函數：多項式.deriv(m = n)

多項式求根：np.roots(poly)

多項式在某點上的值：np.polyval(poly,x\[n\]),返回poly多項式在橫軸點上x\[n\]上的值

兩個多項式做差運算： np.polysub(a,b)

Matpoltlib簡單繪圖方法

引入簡單繪圖的包import matplotlib.pyplot as plt，最後用plt.show()顯示圖像

基本畫圖方法：plt.plot(x,y)，plt.xlabel(『x』)，plt.ylabel(『y』)，plt.title(『…』)

子圖：plt.subplot(abc)，其中abc分別表示子圖行數、列數、序號

創建繪圖組件的頂層容器：fig = plt.figure()

添加子圖：ax = fig.add\_subplot(abc)

設置橫軸上的主定位器：ax.xaxis.set\_major\_locator(…)

繪製方圖：plt.hist(a,b)，a為長方形的左橫坐標值，b為柱高

繪製散點圖：plt.scatter(x,y,c = 『…』,s = …)，c表示顏色，s表示大小

添加網格線：plt.grid(True)

添加注釋：如ax.annotate(‘x’, xy=xpoint, textcoords=‘offsetpoints’,xytext=(-50, 30), arrowprops=dict(arrowstyle=“->”))

增加圖例：如plt.legend(loc=‘best’, fancybox=True)

對坐標取對數：橫坐標plt.semilogx()，縱坐標plt.semilogy()，橫縱同時plt.loglog()

NumPy 與 Matlab, R, Octave 等的對照速查簡表
==================================

可以參考以下 References.

References
==========

*   Python Numpy全世界最長基礎教程最適合小白學習 還詳細很全速拿, https://twgreatdaily.com/AhWyTG8BMH2\_cNUgWU4g.html [link](https://twgreatdaily.com/AhWyTG8BMH2_cNUgWU4g.html).

**Python NumPy 與 Matlab, R, Octave 等的對照:**

*   Thesaurus of Mathematical Languages,  
    or MATLAB synonymous commands in Python/NumPy  
    列出 Matlab, Python, R, Octave等, 相對應的指令,  
    有 pdf檔.  
    Copyright ©2006,2008 Vidar Bronken Gundersen, http://mathesaurus.sf.net/  
    link
    
*   NumPy for Matlab users  
    列出 Matlab, Python 相對應的指令.  
    https://numpy.org/doc/stable/user/numpy-for-matlab-users.html  
    link