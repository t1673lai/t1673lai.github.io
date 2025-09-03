---
title: "用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 5 矩陣特徵值等不變量計算 "
collection: courses
type: "程式設計課程"
permalink: /courses/python-mathematics-implementation-05
venue: "線性代數矩陣計算、微積分與數論"
date: 2025-09-01
location: "Python程式實作"
---  
      用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 5 矩陣特徵值等不變量計算 

本篇介紹 NumPy 的 矩陣不變量求值: 例如 行列式值, 特徵值, 特徵向量等等

註: 所謂矩陣不變量, 例如 矩陣的行列式值, 特徵值, 特徵向量等, 都是矩陣的不變量, 是指 一個矩陣, 在基底變化之後, 樣貌會改變, 但是, 新的樣貌的矩陣的行列式值等, 是跟基底變化之前的矩陣的行列式值一樣的, 有這樣的性質的矩陣量, 就叫做_矩陣的不變量_, 除了行列式值, 特徵值, 特徵向量之外, 還有 trace, 就是 矩陣的對角線元素的和, 等等.

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

* * *

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
    

* * *

### 文章目录

- [本系列文章之連結](#本系列文章之連結)
    - [文章目录](#文章目录)
- [何謂矩陣不變量](#何謂矩陣不變量)
- [NumPy 的 矩陣不變量計算簡表](#numpy-的-矩陣不變量計算簡表)
  - [求方陣的逆矩陣：`np.linalg.inv(A)`](#求方陣的逆矩陣nplinalginva)
  - [求轉置矩陣 `A.T`](#求轉置矩陣-at)
  - [求矩陣的特徵值 `np.linalg.eigvals(A)`](#求矩陣的特徵值-nplinalgeigvalsa)
- [NumPy 的 矩陣不變量計算舉例](#numpy-的-矩陣不變量計算舉例)
  - [官網的 `svd(A)` 分解的示例,](#官網的-svda-分解的示例)
- [Reference](#reference)

* * *

何謂矩陣不變量
=======

所謂矩陣不變量, 例如 矩陣的行列式值, 特徵值, 特徵向量等, 都是矩陣的不變量, 是指 一個矩陣, 在基底變化之後, 樣貌會改變, 但是, 新的樣貌的矩陣的行列式值等, 是跟基底變化之前的矩陣的行列式值一樣的, 有這樣的性質的矩陣量, 就叫做_矩陣的不變量_, 除了行列式值, 特徵值, 特徵向量之外, 還有 trace, 就是 矩陣的對角線元素的和, 等等.

相對於矩陣不變量, 就是, 某些矩陣量, 在基底變化之後, 其值會改變的量, 例如, max(矩陣所有元素), 在基底變化之後, 取矩陣所有元素的最大值, 可能就改變了.

NumPy 的 矩陣不變量計算簡表
=================

Ref: 以下我們參考: Python Numpy全世界最長基礎教程最適合小白學習 還詳細很全速拿, https://twgreatdaily.com/AhWyTG8BMH2\_cNUgWU4g.html [link](https://twgreatdaily.com/AhWyTG8BMH2_cNUgWU4g.html).

四、線性代數

求矩陣的行列式：`np.linalg.det(A)`

求方陣的逆矩陣：`np.linalg.inv(A)`

求廣義逆矩陣：`np.linalg.pinv(A)`

解形如 AX\=bAX=bAX\=b 的線性方程組：`np.linalg.solve(A,b)`

求矩陣的特徵值：`np.linalg.eigvals(A)`

求特徵值和特徵向量：`np.linalg.eig(A)`

Svd 分解：`np.linalg.svd(A)`

估計線性模型中的係數：`a=np.linalg.lstsq(x,b)`,有b=a\*x

求方陣的逆矩陣：`np.linalg.inv(A)`
--------------------------

有時會看到求反矩陣可以用 `A.I` 的指令, 這是 numpy.mat 類的指令, 目前已建議不要用了

    >>>A = numpy.array([[2,3], [4,5]])
    
    >>>A
    
    array([2, 3])
    
    >>>A.I
                    
    Traceback (most recent call last):
      File "<pyshell#17>", line 1, in <module>
        A.I
    AttributeError: 'numpy.ndarray' object has no attribute 'I'
    numpy.linalg.inv(A)
                    
    array([[-2.5,  1.5],
           [ 2. , -1. ]])
    >>>B=numpy.mat(A)
                    
    >>>B
                    
    matrix([[2, 3],
            [4, 5]])
    >>>B.I
                    
    matrix([[-2.5,  1.5],
            [ 2. , -1. ]])
    

    >>> A
    array([[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]])
    >>> np.linalg.det(A)
    0.0
    >>> A = np.array([[12,2,3],[4,5,6],[7,8,9]])
    >>>> A
    array([[12,  2,  3],
           [ 4,  5,  6],
           [ 7,  8,  9]])
    >>> np.linalg.det(A)
    -33.00000000000007
    >>> np.linalg.inv(A)
    array([[ 0.09090909, -0.18181818,  0.09090909],
           [-0.18181818, -2.63636364,  1.81818182],
           [ 0.09090909,  2.48484848, -1.57575758]])
    >>> Ainv=np.linalg.inv(A)
    >>> A*Ainv
    array([[  1.09090909,  -0.36363636,   0.27272727],
           [ -0.72727273, -13.18181818,  10.90909091],
           [  0.63636364,  19.87878788, -14.18181818]])
    # 注意 A 與  A 的反矩陣用點乘 *, 無法成為單位矩陣!
    >>> A*Ainv
    array([[  1.09090909,  -0.36363636,   0.27272727],
           [ -0.72727273, -13.18181818,  10.90909091],
           [  0.63636364,  19.87878788, -14.18181818]])
    # 注意 A 與  A 的反矩陣用 np.dot() 相乘, 才是矩陣乘法, 才成為單位矩陣!
    >>> np.dot(Ainv,A)
    array([[ 1.00000000e+00, -1.11022302e-16, -4.16333634e-17],
           [ 4.44089210e-16,  1.00000000e+00, -2.22044605e-15],
           [-2.22044605e-16,  1.77635684e-15,  1.00000000e+00]])
    
    

求轉置矩陣 `A.T`
-----------

    >>>A.T
                    
    array([[2, 4],
           [3, 5]])
    

求矩陣的特徵值 `np.linalg.eigvals(A)`
------------------------------

    >>> A = np.array([[1,2],[4,5]])
    >>> A
    array([[1, 2],
           [4, 5]])
    >>> np.linalg.eig(A)
    (array([-0.46410162,  6.46410162]), array([[-0.80689822, -0.34372377],
           [ 0.59069049, -0.9390708 ]]))
    >>> np.linalg.eigvals(A)
    array([-0.46410162,  6.46410162])
    # 以下要抽出 eigenvalues, 或 eigenvectors 遇到問題!
    >>> np.linalg.eigvals(A)[0]
    -0.4641016151377544
    >>> np.linalg.eigvals(A)[1]
    6.464101615137754
    >>> np.linalg.eigvals(A)[2]
    Traceback (most recent call last):
      File "<pyshell#51>", line 1, in <module>
        np.linalg.eigvals(A)[2]
    IndexError: index 2 is out of bounds for axis 0 with size 2
    >>> np.linalg.eigvals(A)[0,1]
    Traceback (most recent call last):
      File "<pyshell#52>", line 1, in <module>
        np.linalg.eigvals(A)[0,1]
    IndexError: too many indices for array: array is 1-dimensional, but 2 were indexed
    >>> np.linalg.eigvals(A)[0][0]
    Traceback (most recent call last):
      File "<pyshell#53>", line 1, in <module>
        np.linalg.eigvals(A)[0][0]
    IndexError: invalid index to scalar variable.
    >>> eigvaluesA,eigenvectorsA = np.linalg.eigvals(A)
    >>> eigvaluesA
    -0.4641016151377544
    >>> eigenvectorsA
    6.464101615137754
    >>> eigvaluesA1,eigvaluesA2,eigenvectorsA = np.linalg.eigvals(A)
    Traceback (most recent call last):
      File "<pyshell#57>", line 1, in <module>
        eigvaluesA1,eigvaluesA2,eigenvectorsA = np.linalg.eigvals(A)
    ValueError: not enough values to unpack (expected 3, got 2)
    

NumPy 的 矩陣不變量計算舉例
=================

官網的 `svd(A)` 分解的示例,
-------------------

SciPy Numpy\_Example\_List,  
https://scipy.github.io/old-wiki/pages/Numpy\_Example\_List.html#svd.28.29  
[link](https://scipy.github.io/old-wiki/pages/Numpy_Example_List.html#svd.28.29)

    >>> from numpy import *
    >>> from numpy.linalg import svd
    >>> A = array([[1., 3., 5.],[2., 4., 6.]]) # A is a (2x3) matrix
    >>> U,sigma,V = svd(A)
    >>> print U # U is a (2x2) unitary matrix
    [[-0.61962948 -0.78489445]
     [-0.78489445 0.61962948]]
    >>> print sigma # non-zero diagonal elements of Sigma
    [ 9.52551809 0.51430058]
    >>> print V # V is a (3x3) unitary matrix
    [[-0.2298477 -0.52474482 -0.81964194]
     [ 0.88346102 0.24078249 -0.40189603]
     [ 0.40824829 -0.81649658 0.40824829]]
    >>> Sigma = zeros_like(A) # constructing Sigma from sigma
    >>> n = min(A.shape)
    >>> Sigma[:n,:n] = diag(sigma)
    >>> print dot(U,dot(Sigma,V)) # A = U * Sigma * V
    [[ 1. 3. 5.]
     [ 2. 4. 6.]]
    

Reference
=========

*   Python Numpy全世界最長基礎教程最適合小白學習 還詳細很全速拿, https://twgreatdaily.com/AhWyTG8BMH2\_cNUgWU4g.html [link](https://twgreatdaily.com/AhWyTG8BMH2_cNUgWU4g.html).
    
*   推薦: 這裡有很具體的指令用法, 用在線性代數課程上: 陳擎文教學網：python解線性代數, https://acupun.site/lecture/linearAlgebra/index.htm [link](https://acupun.site/lecture/linearAlgebra/index.htm)