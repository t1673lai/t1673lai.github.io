---
title: "用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 5.1 矩陣分解的指令"
collection: courses
type: "程式設計課程"
permalink: /courses/python-mathematics-implementation-05_1
venue: "線性代數矩陣計算、微積分與數論"
date: 2024-01-01
location: "Python程式實作"
---  
        用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 5.1 矩陣分解的指令 

本篇介紹 NumPy 與 Matlab 的 矩陣分解的指令

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

*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 1 Python科學計算第三方庫, 原生指令, 內建模組, 外部模組 [link](https://blog.csdn.net/m0_47985483/article/details/123617733)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 1.1 scipy.linalg 官網完整列表 [link](https://blog.csdn.net/m0_47985483/article/details/107158299)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 2 產生 numpy 的 數組, 矩陣點乘 等 [link](https://blog.csdn.net/m0_47985483/article/details/111745673?spm=1001.2014.3001.5501)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 3 向量與矩陣運算 [link](https://blog.csdn.net/m0_47985483/article/details/113095920?spm=1001.2014.3001.5501)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 4 函數向量化 function vectorized  
    [link](https://blog.csdn.net/m0_47985483/article/details/122241771)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 5 矩陣特徵值等不變量計算 [link](https://blog.csdn.net/m0_47985483/article/details/122667111)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 5.1 矩陣分解的指令  
    [link](https://blog.csdn.net/m0_47985483/article/details/124607454)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 6 解線性方程組 直接法: Gauss 消去, LU 等 [link](https://blog.csdn.net/m0_47985483/article/details/122691113)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 7 解線性方程組 迭代法: Jacobi iterated,Gauss-Seidel 等 [link](https://blog.csdn.net/m0_47985483/article/details/122754154)
    

* * *

### 文章目录

- [本系列文章之連結](#本系列文章之連結)
    - [文章目录](#文章目录)
- [Numpy 與 Matlab 的矩陣分解的指令](#numpy-與-matlab-的矩陣分解的指令)
- [scipy.linalg 中有關矩陣分解的指令](#scipylinalg-中有關矩陣分解的指令)
- [References](#references)

* * *

Numpy 與 Matlab 的矩陣分解的指令
=======================

矩陣分解的指令

SciPy (NumPy)

Matlab

矩陣的條件數

from numpy import linalg `linalg.cond()` (只有 numpy 的 linalg 才有, scipy 的 linalg 沒有)

cond()

rank

from numpy import linalg `linalg.matrix_rank()` (只有 numpy 的 linalg 才有, scipy 的 linalg 沒有)

rank()

LU 分解

`linalg.lu()` (只有 scipy.linalg 才有)

lu()

Cholesky 分解(對稱矩陣的LU分解)

`linalg.cholesky()`

chol()

QR: 先用 Householder’s 方法將對稱矩陣分解成 tridiagonal, 再求出 eignevalues

`clinalg.qr()`

qr()

svd 奇異值分解

`linalg.svd()`

svd()

Shur 分解, Shur theorem 保證 每個方陣A都 unitarily similar to 一個三角矩陣B: B\=UAU∗B=UAU^{\*}B\=UAU∗

`linalg.shur()` (只有 scipy.linalg 才有)

shur()

注意: `linalg.cond(a)` 是 Numpy 之下的, SciPy 之下的 linalg 沒有.  
注意: `linalg.matrix_rank(a)` 是 Numpy 之下的, SciPy 之下的 linalg 沒有.

    >>> import numpy
    >>>> from numpy import linalg
    >>>> a = numpy.ones([3,3])
    >>> a
    array([[1., 1., 1.],
           [1., 1., 1.],
           [1., 1., 1.]])
    
    >>> linalg.matrix_rank(a)
    1
    

雖然 scipy 是基於 numpy 的 package, 如果整個改成用 scipy 執行上面的動作, 會看到錯誤訊息

    import scipy
    from scipy import linalg
    a = scipy.ones([3,3])
    print(a)
    print(linalg.matrix_rank(a))
    
    >>> 
    ============= RESTART: C:/Users/user/Desktop/linalg.matrix_rank.py =============
    
    Warning (from warnings module):
      File "C:/Users/user/Desktop/linalg.matrix_rank.py", line 12
        a = scipy.ones([3,3])
    DeprecationWarning: scipy.ones is deprecated and will be removed in SciPy 2.0.0, use numpy.ones instead
    [[1. 1. 1.]
     [1. 1. 1.]
     [1. 1. 1.]]
    Traceback (most recent call last):
      File "C:/Users/user/Desktop/linalg.matrix_rank.py", line 16, in <module>
        print(linalg.matrix_rank(a))
    AttributeError: module 'scipy.linalg' has no attribute 'matrix_rank'
    

錯誤或警告訊息提到, `scipy.ones()` 將不再使用, 請使用 `numpy.ones([3,3])`,  
另外也提到 scipy 的 linalg 是沒有 matrix\_rank 的指令!

scipy.linalg 中有關矩陣分解的指令
=======================

**Decompositions :**

指令

說明

lu(a\[, permute\_l, overwrite\_a, check\_finite\])

Compute pivoted LU decomposition of a matrix.

lu\_factor(a\[, overwrite\_a, check\_finite\])

Compute pivoted LU decomposition of a matrix.

lu\_solve(lu\_and\_piv, b\[, trans, …\])

Solve an equation system, a x = b, given the LU factorization of a

svd(a\[, full\_matrices, compute\_uv, …\])

Singular Value Decomposition.

svdvals(a\[, overwrite\_a, check\_finite\])

Compute singular values of a matrix.

diagsvd(s, M, N)

Construct the sigma matrix in SVD from singular values and size M, N.

orth(A\[, rcond\])

Construct an orthonormal basis for the range of A using SVD

null\_space(A\[, rcond\])

Construct an orthonormal basis for the null space of A using SVD

ldl(A\[, lower, hermitian, overwrite\_a, …\])

Computes the LDLt or Bunch-Kaufman factorization of a symmetric/ hermitian matrix.

cholesky(a\[, lower, overwrite\_a, check\_finite\])

Compute the Cholesky decomposition of a matrix.

cholesky\_banded(ab\[, overwrite\_ab, lower, …\])

Cholesky decompose a banded Hermitian positive-definite matrix

cho\_factor(a\[, lower, overwrite\_a, check\_finite\])

Compute the Cholesky decomposition of a matrix, to use in cho\_solve

cho\_solve(c\_and\_lower, b\[, overwrite\_b, …\])

Solve the linear equations A x = b, given the Cholesky factorization of A.

cho\_solve\_banded(cb\_and\_lower, b\[, …\])

Solve the linear equations A x = b, given the Cholesky factorization of the banded Hermitian A.

polar(a\[, side\])

Compute the polar decomposition.

qr(a\[, overwrite\_a, lwork, mode, pivoting, …\])

Compute QR decomposition of a matrix.

qr\_multiply(a, c\[, mode, pivoting, …\])

Calculate the QR decomposition and multiply Q with a matrix.

qr\_update(Q, R, u, v\[, overwrite\_qruv, …\])

Rank-k QR update

qr\_delete(Q, R, k, int p=1\[, which, …\])

QR downdate on row or column deletions

qr\_insert(Q, R, u, k\[, which, rcond, …\])

QR update on row or column insertions

rq(a\[, overwrite\_a, lwork, mode, check\_finite\])

Compute RQ decomposition of a matrix.

qz(A, B\[, output, lwork, sort, overwrite\_a, …\])

QZ decomposition for generalized eigenvalues of a pair of matrices.

ordqz(A, B\[, sort, output, overwrite\_a, …\])

QZ decomposition for a pair of matrices with reordering.

schur(a\[, output, lwork, overwrite\_a, sort, …\])

Compute Schur decomposition of a matrix.

rsf2csf(T, Z\[, check\_finite\])

Convert real Schur form to complex Schur form.

hessenberg(a\[, calc\_q, overwrite\_a, …\])

Compute Hessenberg form of a matrix.

cdf2rdf(w, v)

Converts complex eigenvalues w and eigenvectors v to real eigenvalues in a block diagonal form wr and the associated real eigenvectors vr, such that.

cossin(X\[, p, q, separate, swap\_sign, …\])

Compute the cosine-sine (CS) decomposition of an orthogonal/unitary matrix.

See also

scipy.linalg.interpolative – Interpolative matrix decompositions

References
==========

*   **Numpy linalg 最新列表:** https://numpy.org/devdocs/reference/routines.linalg.html [link](https://numpy.org/devdocs/reference/routines.linalg.html)
    
*   **SciPy linalg 最新列表:** https://docs.scipy.org/doc/scipy/reference/linalg.html#scipy.linalg [link](https://docs.scipy.org/doc/scipy/reference/linalg.html#scipy.linalg)
    
*   **SciPy linalg Decompositions(矩陣分解) 最新列表:**  
    https://docs.scipy.org/doc/scipy/reference/linalg.html#decompositions [link](https://docs.scipy.org/doc/scipy/reference/linalg.html#decompositions)
    
*   LU 分解 的現成指令, 只有在 scipy 與 sympy 有看到, NumPy 則沒有,  
    陳擎文教學網：python解線性代數, 線性代數第6章  
    反矩陣inverse, LU分解算聯立方程式, https://acupun.site/lecture/linearAlgebra/pdfBooks/chp6-inverseMatrix.pdf [link](https://acupun.site/lecture/linearAlgebra/pdfBooks/chp6-inverseMatrix.pdf)
    
*   LU 分解 的現成指令, 只有在 scipy.linalg 與 sympy 有看到, numpy.linalg 則沒有,  
    兩者都有, cholesky, qr, svd.  
    scipy.linalg 多 lu, shur
    
*   R. L. Burden, J. D. Faires, Numerical analysis, Brooks/Cole, 7th ed., 2001.
    
*   \[矩阵的QR分解系列一\] 施密特(Schmidt)正交规范化, https://blog.csdn.net/honyniu/article/details/109959777 [link](https://blog.csdn.net/honyniu/article/details/109959777).