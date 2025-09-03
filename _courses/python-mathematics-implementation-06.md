---
title: "用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 6 解線性方程組 直接法: Gauss 消去, LU 分解 等"
collection: courses
type: "程式設計課程"
permalink: /courses/python-mathematics-implementation-06
venue: "線性代數矩陣計算、微積分與數論"
date: 2024-01-01
location: "Python程式實作"
---  
        用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 6 解線性方程組 直接法: Gauss 消去, LU 分解 等 

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
- [線性聯立方程組指令求解](#線性聯立方程組指令求解)
- [求解線性聯立方程組演算法之直接法(direct method)](#求解線性聯立方程組演算法之直接法direct-method)
  - [Gauss Elimination 高斯消去法](#gauss-elimination-高斯消去法)
    - [理論](#理論)
      - [Exercises](#exercises)
    - [程式碼實作 : Gauss Elimination 高斯消去法](#程式碼實作--gauss-elimination-高斯消去法)
      - [先觀摩一下 codesansar.com 的程式碼](#先觀摩一下-codesansarcom-的程式碼)
      - [由作者改寫的程式碼觀察是否完成上三角矩陣](#由作者改寫的程式碼觀察是否完成上三角矩陣)
      - [由作者改寫的程式碼接著觀察"後向替代法"之部分](#由作者改寫的程式碼接著觀察後向替代法之部分)
      - [Exercises](#exercises-1)
  - [程式碼實作 : Gauss-Jordan Elimination 高斯喬丹消去法](#程式碼實作--gauss-jordan-elimination-高斯喬丹消去法)
    - [Gauss-Jordan 的 codes](#gauss-jordan-的-codes)
      - [Exercises](#exercises-2)
      - [改寫為 Python 的 list comprehension 列表解析式的風格](#改寫為-python-的-list-comprehension-列表解析式的風格)
  - [LU 分解](#lu-分解)
    - [sympy 中有關 LU 分解的指令](#sympy-中有關-lu-分解的指令)
    - [用寫程式的方式實現 LU 分解](#用寫程式的方式實現-lu-分解)
      - [LU 分解 演算法 的原理](#lu-分解-演算法-的原理)
      - [LU 分解 演算法](#lu-分解-演算法)
    - [LU 分解定理](#lu-分解定理)
- [Appendix](#appendix)
  - [\\begin{bmatrix}](#beginbmatrix)
  - [控制print 印出之小數位數只有一位](#控制print-印出之小數位數只有一位)
  - [scipy.linalg 中有關矩陣分解的指令](#scipylinalg-中有關矩陣分解的指令)
- [References](#references)

* * *

線性聯立方程組指令求解
===========

給一線性聯立方程組  
10  x1+−7  x2+0  x3\=7−3  x1+2  x2+6  x3\=45  x1+−1  x2+5  x3\=6 \\begin{array}{c c} 10 \\;x\_1 &+& -7 \\;x\_2 &+& 0 \\;x\_3 &=& 7 \\\\ -3 \\;x\_1 &+& 2 \\;x\_2 &+& 6 \\;x\_3 &=& 4 \\\\ 5 \\;x\_1 &+& -1 \\;x\_2 &+& 5 \\;x\_3 &=& 6 \\end{array} 10x1​−3x1​5x1​​+++​−7x2​2x2​−1x2​​+++​0x3​6x3​5x3​​\=\=\=​746​  
可以寫下對照之矩陣表法:  
Ax\=B Ax=B Ax\=B  
(10−70−3265−15)(x1x2x3)\=(746) \\left( \\begin{array}{c c} 10 & -7 & 0 \\\\ -3 & 2 & 6 \\\\ 5 & -1 & 5 \\\\ \\end{array} \\right) \\left( \\begin{array}{c c} x\_1 \\\\ x\_2 \\\\ x\_3 \\\\ \\end{array} \\right) = \\left( \\begin{array}{c c} 7 \\\\ 4 \\\\ 6 \\\\ \\end{array} \\right)\\\\ ​10−35​−72−1​065​​​x1​x2​x3​​​\=​746​​  
where  
A\=(10−70−3265−15)x\=(x1x2x3)B\=(746) %A = \\left( \\begin{array}{c c} 10 & -7 & 0 \\\\ -3 & 2 & 6 \\\\ 5 & -1 & 5 \\\\ \\end{array} \\right)\\\\ A = \\begin{pmatrix}10 & -7 & 0 \\\\ -3 & 2 & 6 \\\\ 5 & -1 & 5 \\\\ \\end{pmatrix} \\\\ x = \\left( \\begin{array}{c c} x\_1 \\\\ x\_2 \\\\ x\_3 \\\\ \\end{array} \\right)\\\\ B= \\left( \\begin{array}{c c} 7 \\\\ 4 \\\\ 6 \\\\ \\end{array} \\right) A\=​10−35​−72−1​065​​x\=​x1​x2​x3​​​B\=​746​​

基於矩陣的表法, 我們可以輕鬆的用數學的觀點來解這個線性方程組, 就是左右兩邊同時乘上 A 的反矩陣:  
⇒\\Rightarrow⇒  
(10−70−3265−15)−1(10−70−3265−15)(x1x2x3)\=(10−70−3265−15)−1(746) \\left( \\begin{array}{c c} 10 & -7 & 0 \\\\ -3 & 2 & 6 \\\\ 5 & -1 & 5 \\\\ \\end{array} \\right)^{-1} \\left( \\begin{array}{c c} 10 & -7 & 0 \\\\ -3 & 2 & 6 \\\\ 5 & -1 & 5 \\\\ \\end{array} \\right) \\left( \\begin{array}{c c} x\_1 \\\\ x\_2 \\\\ x\_3 \\\\ \\end{array} \\right) = \\left( \\begin{array}{c c} 10 & -7 & 0 \\\\ -3 & 2 & 6 \\\\ 5 & -1 & 5 \\\\ \\end{array} \\right)^{-1} \\left( \\begin{array}{c c} 7 \\\\ 4 \\\\ 6 \\\\ \\end{array} \\right)\\\\ ​10−35​−72−1​065​​−1​10−35​−72−1​065​​​x1​x2​x3​​​\=​10−35​−72−1​065​​−1​746​​  
⇒\\Rightarrow⇒  
(x1x2x3)\=(10−70−3265−15)−1(746) \\left( \\begin{array}{c c} x\_1 \\\\ x\_2 \\\\ x\_3 \\\\ \\end{array} \\right) = \\left( \\begin{array}{c c} 10 & -7 & 0 \\\\ -3 & 2 & 6 \\\\ 5 & -1 & 5 \\\\ \\end{array} \\right)^{-1} \\left( \\begin{array}{c c} 7 \\\\ 4 \\\\ 6 \\\\ \\end{array} \\right)\\\\ ​x1​x2​x3​​​\=​10−35​−72−1​065​​−1​746​​

**Matlab 的指令**

    x=A\B
    

`A\B` 表示 A−1⋅BA^{-1}\\cdot BA−1⋅B

如果Matlab 的指令是 `B/A` 則表示 B⋅A−1B \\cdot A^{-1}B⋅A−1

**Python + numpy + scipy 的指令**

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

    >>> np.dot(A,x)
    array([7., 4., 6.])
    

發現與 B 相等, 解為正確

求解線性聯立方程組演算法之直接法(direct method)
===============================

在一般數值分析的書上, 所謂的**直接法(direct method)**, 是相對於**迭代法( iterative methods)**,

迭帶法意指透過同樣的演算程序一直迭帶, 得到越來越精確的解,  
直接法就不是逐步逼近, 而是透過一定計算步驟之後就得到精確解, 例如 中學熟知的 Gauss Elimination(高斯消去法), Gauss-Jordan(高斯-喬丹消去法) 等等.

給一線性聯立方程組  
a11  x1+a12  x2+a13  x3\=b1a21  x1+a22  x2+a23  x3\=b2a31  x1+a32  x2+a33  x3\=b3 \\begin{array}{c c} a\_{11} \\;x\_1 &+& a\_{12} \\;x\_2 &+& a\_{13} \\;x\_3 &=& b\_{1} \\\\ a\_{21} \\;x\_1 &+& a\_{22} \\;x\_2 &+& a\_{23} \\;x\_3 &=& b\_{2} \\\\ a\_{31} \\;x\_1 &+& a\_{32} \\;x\_2 &+& a\_{33} \\;x\_3 &=& b\_{3}\\end{array} a11​x1​a21​x1​a31​x1​​+++​a12​x2​a22​x2​a32​x2​​+++​a13​x3​a23​x3​a33​x3​​\=\=\=​b1​b2​b3​​  
可以寫下對照之矩陣表法:  
Ax\=B Ax=B Ax\=B  
(a11a12a13a21a22a23a31a32a33)(x1x2x3)\=(b1b2b3) \\left( \\begin{array}{c c} a\_{11} & a\_{12} & a\_{13} \\\\ a\_{21} & a\_{22} & a\_{23} \\\\ a\_{31} & a\_{32} & a\_{33} \\\\ \\end{array} \\right) \\left( \\begin{array}{c c} x\_1 \\\\ x\_2 \\\\ x\_3 \\\\ \\end{array} \\right) = \\left( \\begin{array}{c c} b\_{1} \\\\ b\_{2} \\\\ b\_{3} \\\\ \\end{array} \\right)\\\\ ​a11​a21​a31​​a12​a22​a32​​a13​a23​a33​​​​x1​x2​x3​​​\=​b1​b2​b3​​​

Gauss Elimination 高斯消去法
-----------------------

*   高斯消去法是用行或列基本運算清掃成**上三角矩陣**
*   Gauss-Jordan 消去法是用行或列基本運算清掃成**對角線矩陣**

### 理論

Gauss Elimination 高斯消去法 就是透過 elementrary row operation(**橫行基本運算**) 或是 elementrary column operation(**直行基本運算**) 將 線性聯立方程組的 AAA 矩陣轉成一個(等價)的上三角矩陣(或下三角矩陣也可以)  
轉成上三角矩陣後, 線性聯立方程組就很好解了.

Ax\=B Ax=B Ax\=B  
(a11a12a13a21a22a23a31a32a33)(x1x2x3)\=(b1b2b3) \\left( \\begin{array}{c c} a\_{11} & a\_{12} & a\_{13} \\\\ a\_{21} & a\_{22} & a\_{23} \\\\ a\_{31} & a\_{32} & a\_{33} \\\\ \\end{array} \\right) \\left( \\begin{array}{c c} x\_1 \\\\ x\_2 \\\\ x\_3 \\\\ \\end{array} \\right) = \\left( \\begin{array}{c c} b\_{1} \\\\ b\_{2} \\\\ b\_{3} \\\\ \\end{array} \\right)\\\\ ​a11​a21​a31​​a12​a22​a32​​a13​a23​a33​​​​x1​x2​x3​​​\=​b1​b2​b3​​​  
⟹行列基本運算\\stackrel{行列基本運算}{\\Longrightarrow}⟹行列基本運算​  
(a11′a12′a13′0a22′a23′00a33′)(x1x2x3)\=(b1′b2′b3′) \\left( \\begin{array}{c c} a\_{11}' & a\_{12}' & a\_{13}' \\\\ 0 & a\_{22}' & a\_{23}' \\\\ 0 & 0 & a\_{33}' \\\\ \\end{array} \\right) \\left( \\begin{array}{c c} x\_1 \\\\ x\_2 \\\\ x\_3 \\\\ \\end{array} \\right) = \\left( \\begin{array}{c c} b\_{1}' \\\\ b\_{2}' \\\\ b\_{3}' \\\\ \\end{array} \\right)\\\\ ​a11′​00​a12′​a22′​0​a13′​a23′​a33′​​​​x1​x2​x3​​​\=​b1′​b2′​b3′​​​

就是用 a11a\_{11}a11​ 去清掃以下的 row , 接著用 a22a\_{22}a22​ 去清掃以下的 row (水平的一條叫row, 垂直叫column) (**上方的 row 不清掃, 只往下方的 row 清掃**),  
最後形成一個**上三角矩陣**, 再依序用**後向代入**得到 x3x\_3x3​, x2x\_2x2​, x1x\_1x1​, 就立即得到解.

上面說的**清掃**, 就是用所謂的 行基本運算或列基本運算, 因為華語界的行列慣用定義不一致, 所以我這裡用 row 代表橫行, column 代表直行,

* * *

對一般性的線性聯立方程組  
a11  x1+a12  x2+a13  x3\=b1a21  x1+a22  x2+a23  x3\=b2a31  x1+a32  x2+a33  x3\=b3 \\begin{array}{c c} a\_{11} \\;x\_1 &+& a\_{12} \\;x\_2 &+& a\_{13} \\;x\_3 &=& b\_{1} \\\\ a\_{21} \\;x\_1 &+& a\_{22} \\;x\_2 &+& a\_{23} \\;x\_3 &=& b\_{2} \\\\ a\_{31} \\;x\_1 &+& a\_{32} \\;x\_2 &+& a\_{33} \\;x\_3 &=& b\_{3}\\end{array} a11​x1​a21​x1​a31​x1​​+++​a12​x2​a22​x2​a32​x2​​+++​a13​x3​a23​x3​a33​x3​​\=\=\=​b1​b2​b3​​  
透過適當的**行列運算**, 將 AAA 整理為等價之上三角矩陣  
a11′  x1+a12′  x2+a13′  x3\=b1′̸a21  x1+a22′  x2+a23′  x3\=b2′̸a31  x1+̸a32  x2+a33′  x3\=b3′ \\begin{array}{c c} a\_{11}' \\;x\_1 &+& a\_{12}' \\;x\_2 &+& a\_{13}' \\;x\_3 &=& b\_{1}' \\\\ \\not{a\_{21}} \\;x\_1 &+& a\_{22}' \\;x\_2 &+& a\_{23}' \\;x\_3 &=& b\_{2}' \\\\ \\not{a\_{31}} \\;x\_1 &+& \\not{a\_{32}} \\;x\_2 &+& a\_{33}' \\;x\_3 &=& b\_{3}'\\end{array} a11′​x1​a21​x1​a31​x1​​+++​a12′​x2​a22′​x2​a32​x2​​+++​a13′​x3​a23′​x3​a33′​x3​​\=\=\=​b1′​b2′​b3′​​

a11′  x1+a12′  x2+a13′  x3\=b1′0  x1+a22′  x2+a23′  x3\=b2′0  x1+0  x2+a33′  x3\=b3′ \\begin{array}{c c} a\_{11}' \\;x\_1 &+& a\_{12}' \\;x\_2 &+& a\_{13}' \\;x\_3 &=& b\_{1}' \\\\ 0 \\;x\_1 &+& a\_{22}' \\;x\_2 &+& a\_{23}' \\;x\_3 &=& b\_{2}' \\\\ 0 \\;x\_1 &+& 0 \\;x\_2 &+& a\_{33}' \\;x\_3 &=& b\_{3}' \\end{array} a11′​x1​0x1​0x1​​+++​a12′​x2​a22′​x2​0x2​​+++​a13′​x3​a23′​x3​a33′​x3​​\=\=\=​b1′​b2′​b3′​​

寫成矩陣表法就是上三角矩陣:  
(a11′a12′a13′0a22′a23′00a33′)(x1x2x3)\=(b1′b2′b3′) \\left( \\begin{array}{c c} a\_{11}' & a\_{12}' & a\_{13}' \\\\ 0 & a\_{22}' & a\_{23}' \\\\ 0 & 0 & a\_{33}' \\\\ \\end{array} \\right) \\left( \\begin{array}{c c} x\_1 \\\\ x\_2 \\\\ x\_3 \\\\ \\end{array} \\right) = \\left( \\begin{array}{c c} b\_{1}' \\\\ b\_{2}' \\\\ b\_{3}' \\\\ \\end{array} \\right)\\\\ ​a11′​00​a12′​a22′​0​a13′​a23′​a33′​​​​x1​x2​x3​​​\=​b1′​b2′​b3′​​​

* * *

在原文書, **橫行基本運算**稱為 **elementrary row operation**,  
以下參考 Linear Algebra, 2Nd Edition - Kenneth Hoffmann And Ray Kunze  
我們複習橫行基本運算的定義:  
**Def**  
![row_operation_Linear Algebra, 2Nd Edition - Kenneth Hoffmann And Ray Kunze](https://i-blog.csdnimg.cn/blog_migrate/f519fb8cd1933f4799b0dc4cc6fe9855.png#pic_center)  
就是中學教科書說的 三個基本的 row 運算 (橫行基本運算) elementrary row operation

1.  對某一 row 換成, 該 row 乘上非零之常數
2.  對某一 row 換成, 該 row 加上另一row 乘上非零之常數
3.  對某兩個 row 置換(互換)

直行基本運算 elementrary column operation, 則是類似的操作, 只是改成對直行操作.

上面所謂**轉成一個(等價)的上三角矩陣**為何義?  
先定義兩個 線性聯立方程組是等價的意思,  
**定義** 兩個 線性聯立方程組是等價的, 如果彼此的方程式互為對方的方程式的線性組合,

則書中有簡單論證, 知道:  
**Theorem1** 兩個等價的 線性聯立方程組的解是同樣的,  
![thm1_equivalentLinearSystem_Linear Algebra, 2Nd Edition - Kenneth Hoffmann And Ray Kunze](https://i-blog.csdnimg.cn/blog_migrate/c0a1f6553d16dc88b28936de186aa4f0.png#pic_center)  
書中接著定義了兩個矩陣是等價的含意, 就是透過有限次三個基本的 row 運算可以將其中一個矩陣轉成另一個矩陣:  
![equivalentLinearSystem_matrix, 2Nd Edition - Kenneth Hoffmann And Ray Kunze](https://i-blog.csdnimg.cn/blog_migrate/c55b84d45be8602420b116f1e12067d5.png#pic_center)  
則知道, Gauss Elimination 高斯消去法 是透過基本行列運算 將 線性聯立方程組的 AAA 矩陣轉成一個的上三角矩陣, 這是與原矩陣等價的, 轉成上三角矩陣後, 線性聯立方程組就很好解了, 得到的解會與原解一致.

#### Exercises

**Ex:** 將以下 Maple 的 row operation 的動作用 Python 重寫一次:

    AddRow(A, i, j, s)
    
    MultiplyRow(A, i, s)
    
    SwapRow(A, i, j)
    

Maple 官網 指令的說明:  
• The AddRow(A, i, j, s) command replaces row i of A with row i + s \* row j. This command can also be called as AddRows(A, i, j, s).

• The MultiplyRow(A, i, s) command replaces row i of A with s \* row i.

• The SwapRow(A, i, j) command interchanges rows i and j of A. This command can also be called as SwapRows(A, i, j).

**Ref:** https://www.maplesoft.com/support/help/maple/view.aspx?path=Student%2FLinearAlgebra%2FAddRow [link](https://www.maplesoft.com/support/help/maple/view.aspx?path=Student%2FLinearAlgebra%2FAddRow)

### 程式碼實作 : Gauss Elimination 高斯消去法

#### 先觀摩一下 codesansar.com 的程式碼

**Ref:** https://www.codesansar.com/numerical-methods/gauss-elimination-method-algorithm.htm [link](https://www.codesansar.com/numerical-methods/gauss-elimination-method-algorithm.htm)

他的程式碼寫的較詳細繁瑣, 容易見樹不見林,  
尤其 AAA 的 entry 輸入是用input 的方法, 在 consola 逐個輸入, 矩陣較大, 就很不方便!  
(緊接此後面, 本文作者已寫一個簡化版, 方便初學者直接抓住高斯消去法的主要精神及coding.)

以下 codesansar 的程式碼較瑣碎, 可以直接看註解例子說明, 直接抓住感覺

給一線性聯立方程組  
2  x1+3  x2+1  x3\=44  x1+1  x2+−3  x3\=−2−1  x1+2  x2+2  x3\=2 \\begin{array}{c c} 2 \\;x\_1 &+& 3 \\;x\_2 &+& 1 \\;x\_3 &=& 4 \\\\ 4 \\;x\_1 &+& 1 \\;x\_2 &+& -3 \\;x\_3 &=& -2 \\\\ -1 \\;x\_1 &+& 2 \\;x\_2 &+& 2 \\;x\_3 &=& 2 \\end{array} 2x1​4x1​−1x1​​+++​3x2​1x2​2x2​​+++​1x3​−3x3​2x3​​\=\=\=​4−22​  
可以寫下對照之矩陣表法:  
Ax\=B Ax=B Ax\=B  
(23141−3−122)(x1x2x3)\=(4−22) \\left( \\begin{array}{c c} 2 & 3 & 1 \\\\ 4 & 1 & -3 \\\\ -1 & 2 & 2 \\\\ \\end{array} \\right) \\left( \\begin{array}{c c} x\_1 \\\\ x\_2 \\\\ x\_3 \\\\ \\end{array} \\right) = \\left( \\begin{array}{c c} 4 \\\\ -2 \\\\ 2 \\\\ \\end{array} \\right)\\\\ ​24−1​312​1−32​​​x1​x2​x3​​​\=​4−22​​  
where  
A\=(23141−3−122)x\=(x1x2x3)B\=(4−22) A = \\left( \\begin{array}{c c} 2 & 3 & 1 \\\\ 4 & 1 & -3 \\\\ -1 & 2 & 2 \\\\ \\end{array} \\right)\\\\ %A = \\begin{pmatrix}10 & -7 & 0 \\\\ -3 & 2 & 6 \\\\ 5 & -1 & 5 \\\\ \\end{pmatrix} \\\\ x = \\left( \\begin{array}{c c} x\_1 \\\\ x\_2 \\\\ x\_3 \\\\ \\end{array} \\right)\\\\ B= \\left( \\begin{array}{c c} 4 \\\\ -2 \\\\ 2 \\\\ \\end{array} \\right) A\=​24−1​312​1−32​​x\=​x1​x2​x3​​​B\=​4−22​​

    ##以下先觀摩一下 codesansar,com 的程式碼
    ##**Ref:** https://www.codesansar.com/numerical-methods/gauss-elimination-method-algorithm.htm [link](https://www.codesansar.com/numerical-methods/gauss-elimination-method-algorithm.htm)
    ##他的程式碼寫的較詳細繁瑣, 容易見樹不見林, 
    ##緊接此後面, 本文作者已寫一個簡化版, 方便初學者直接抓住高斯消去法的主要精神及coding.
    # Ref: CodesSansar
    # 河西寫的有分段落, 較清楚, 20210322
    
    # Importing NumPy Library
    import numpy as np
    import sys
    
    # Reading number of unknowns
    n = int(input('Enter number of unknowns: '))
    
    # Making numpy array of n x n+1 size and initializing 
    # to zero for storing augmented matrix
    a = np.zeros((n,n+1))
    
    # Making numpy array of n size and initializing 
    # to zero for storing solution vector
    x = np.zeros(n)
    
    # Reading augmented matrix coefficients
    print('Enter Augmented Matrix Coefficients:')
    for i in range(n):
        for j in range(n+1):
            a[i][j] = float(input( 'a['+str(i)+']['+ str(j)+']='))
    
    # Applying Gauss Elimination
    for i in range(n):
        if a[i][i] == 0.0:
            sys.exit('Divide by zero detected!')
            
        for j in range(i+1, n):
            ratio = a[j][i]/a[i][i]
            # 此處 codes, 河西寫的有分段落, 較清楚
            for k in range(n+1):
                a[j][k] = a[j][k] - ratio * a[i][k]
    
    # Back Substitution
    x[n-1] = a[n-1][n]/a[n-1][n-1]
    
    for i in range(n-2,-1,-1):
        x[i] = a[i][n]
        
        for j in range(i+1,n):
            x[i] = x[i] - a[i][j]*x[j]
        
        x[i] = x[i]/a[i][i]
    
    # Displaying solution
    print('\nRequired solution is: ')
    for i in range(n):
        print('X%d = %0.2f' %(i,x[i]), end = '\t')
    
    
    ##>>> 
    ##= RESTART: C:/Users/user/Desktop/Gauss Elimination Python Program_Codesansar.py
    ##Enter number of unknowns: 3
    ##Enter Augmented Matrix Coefficients:
    ##a[0][0]=2.0
    ##a[0][1]=3.0
    ##a[0][2]=1.0
    ##a[0][3]=4.0
    ##a[1][0]=4.0
    ##a[1][1]=1.0
    ##a[1][2]=-3.0
    ##a[1][3]=-2.0
    ##a[2][0]=-1.0
    ##a[2][1]=2.0
    ##a[2][2]=2.0
    ##a[2][3]=2.0
    ##
    ##Required solution is: 
    ##X0 = 2.00	X1 = -1.00	X2 = 3.00	
    
    

#### 由作者改寫的程式碼觀察是否完成上三角矩陣

以下是作者改寫的程式碼, 會較清楚簡單  
為了更清楚觀察了解程式碼的細節, 我們加寫可以列印出中間上三角矩陣的部分,

    # By Prof. P-J Lai MATH NKNU 20220208
    #為了更清楚觀察了解程式碼的細節,  我們加寫可以列印出中間上三角矩陣的部分,
    #Gauss Elimination_UpperTriangle_Lai.py
    
    
    # Importing NumPy Library
    import numpy as np
    import sys
    
    N = 3
    A = np.zeros((N,N+1))
    
    A = [[10.0, -7.0, 0, 7.0],
             [-3.0, 2.0, 6.0, 4.0],
             [5.0, -1.0, 5.0, 6.0]]
    
    x = np.zeros(N)
    
    # Applying Gauss Elimination
    for i in range(N):
        if A[i][i] == 0.0:
            sys.exit('Divide by zero detected!')
            
    for k in range(0,N):
        pivot = A[k][k] # 取 pivot
        if pivot == 0.0:
            sys.exit('Divide by zero detected!')
        
        for i in range(k+1, N):
        ##      if i != k:
                d= A[i][k]
                for j1 in range(N+1):
                    A[i][j1] = A[i][j1] - d*A[k][j1]/pivot
    
    # 以下觀察是否已清掃成上三角矩陣
    for k in range(N):
        for i in range(N+1):
            print("x{}{} = {:.1f}\t".format( k+1,i+1 , A[k][i]), end="\t")
        print("\n")
            
    
    ##輸出:
    ##>>> 
    ##= RESTART: D:/NEW_筆電的/網路免費軟體資料/Python教學/Python科學計算/線性代數/聯立方程式的解法2_GaussElimination消去法/Gauss Elimination_UpperTriangle_Lai.py
    ##x11 = 10.0		x12 = -7.0		x13 = 0.0		x14 = 7.0		
    ##
    ##x21 = 0.0		x22 = -0.1		x23 = 6.0		x24 = 6.1		
    ##
    ##x31 = 0.0		x32 = 0.0		x33 = 155.0		x34 = 155.0	  
    
    

輸出:

    >>> 
    = RESTART: D:\NEW_筆電的\網路免費軟體資料\Python教學\Python科學計算\線性代數\聯立方程式的解法2_GaussElimination消去法\Gauss Elimination_backwardSubstitution_Lai.py
    x11 = 10.0		x12 = -7.0		x13 = 0.0		x14 = 7.0		
    
    x21 = 0.0		x22 = -0.1		x23 = 6.0		x24 = 6.1		
    
    x31 = 0.0		x32 = 0.0		x33 = 155.0		x34 = 155.0
    

**注意一下以上 print 之呈現**: 控制print 印出之小數位數只有一位, 讓視覺較舒服  
`print("x{}{} = {:.1f}\t".format( k+1,i+1 , A[k][i]), end="\t")`

#### 由作者改寫的程式碼接著觀察"後向替代法"之部分

    # By Prof. P-J Lai MATH NKNU 20220209
    
    #Gauss Elimination_backwardSubstitution_Lai.py
    
    # Importing NumPy Library
    import numpy as np
    import sys
    
    N = 3
    A = np.zeros((N,N+1))
    A = [[10.0, -7.0, 0, 7.0],
             [-3.0, 2.0, 6.0, 4.0],
             [5.0, -1.0, 5.0, 6.0]]
    
    x = np.zeros(N)
    
    # Applying Gauss Elimination
    for i in range(N):
        if A[i][i] == 0.0:
            sys.exit('Divide by zero detected!')
     
    for k in range(0,N):
        pivot = A[k][k] # 取 pivot
        if pivot == 0.0:
            sys.exit('Divide by zero detected!')
        
        for i in range(k+1, N):
        ##      if i != k:
                d= A[i][k]
                for j1 in range(N+1):
                    A[i][j1] = A[i][j1] - d*A[k][j1]/pivot
    
    #進行後向替代求出解
    # Back Substitution
    # 觀摩一下 codesansar,com 的程式碼
    # 以下codesansar的程式碼較瑣碎, 可以直接看註解例子說明, 直接抓住感覺
    # 可以不拘泥用 augmented matrix,
    # 而是把 A 與  b 分開, 對照自己心中高斯消去法的的思緒會較清楚. 
    
    x[N-1] = A[N-1][N]/A[N-1][N-1]
    # 就是, 例如, x3 = b3/A33
    
    for i in range(N-2,-1,-1):
        x[i] = A[i][N]
        # 就是, 例如, b2
        
        for j in range(i+1,N):
            x[i] = x[i] - A[i][j]*x[j]
            # A22*x2 = b2 - A23*x3
        
        x[i] = x[i]/A[i][i]
        # x2 = (b2 - A23*x3)/A22
    
    # Displaying solution
    print('\nRequired solution is: ')
    for i in range(N):
        #print('X%d = %0.2f' %(i,x[i]), end = '\t')
        print('X{} = {:.2f}'.format(i,x[i]), end = '\t')
    
    ##輸出:
    ##Required solution is: 
    ##X0 = 0.00	X1 = -1.00	X2 = 1.00
    

輸出:

    >>> 
    = RESTART: D:\NEW_筆電的\網路免費軟體資料\Python教學\Python科學計算\線性代數\聯立方程式的解法2_GaussElimination消去法\Gauss Elimination_backwardSubstitution_Lai.py
    
    Required solution is: 
    X0 = 0.00	X1 = -1.00	X2 = 1.00	
    

#### Exercises

**Ex:** 練習在 consola(終端視窗) 狀態, 一動一動執行, 了解整個過程.

**Ex:** 如果你已經完成理論那節的習題, 用 Python程式 寫下以下的指令  
`AddRow(A, i, j, s)`, `MultiplyRow(A, i, s)`, `SwapRow(A, i, j)`,  
試著用此三個指令重寫上面 高斯消去法的程式, 看看是否會更清楚, 更易閱讀與維護程式碼.

**Ex:** 用 list comprehension 重寫, 看看這樣寫出的codes 是否會較清楚直觀.

**Ex:** 可以不拘泥用 augmented matrix, 而是把 A 與 b 分開, 對照自己心中高斯消去法的的思緒, 看看這樣寫出的codes 是否會較清楚直觀.

程式碼實作 : Gauss-Jordan Elimination 高斯喬丹消去法
----------------------------------------

*   高斯消去法是用行或列基本運算清掃成**上三角矩陣**
*   Gauss-Jordan 消去法是用行或列基本運算清掃成**對角線矩陣**

**Gauss-Jordan 高斯喬丹消去法** 寫成矩陣表法, 就是用行或列基本運算將 A 清掃成**對角線矩陣**:

Ax\=B Ax=B Ax\=B  
(a11a12a13a21a22a23a31a32a33)(x1x2x3)\=(b1b2b3) \\left( \\begin{array}{c c} a\_{11} & a\_{12} & a\_{13} \\\\ a\_{21} & a\_{22} & a\_{23} \\\\ a\_{31} & a\_{32} & a\_{33} \\\\ \\end{array} \\right) \\left( \\begin{array}{c c} x\_1 \\\\ x\_2 \\\\ x\_3 \\\\ \\end{array} \\right) = \\left( \\begin{array}{c c} b\_{1} \\\\ b\_{2} \\\\ b\_{3} \\\\ \\end{array} \\right)\\\\ ​a11​a21​a31​​a12​a22​a32​​a13​a23​a33​​​​x1​x2​x3​​​\=​b1​b2​b3​​​  
⟹行列基本運算\\stackrel{行列基本運算}{\\Longrightarrow}⟹行列基本運算​  
(100010001)(x1x2x3)\=(b1′b2′b3′) \\left( \\begin{array}{c c} 1 & 0 & 0 \\\\ 0 & 1& 0 \\\\ 0 & 0 & 1 \\\\ \\end{array} \\right) \\left( \\begin{array}{c c} x\_1 \\\\ x\_2 \\\\ x\_3 \\\\ \\end{array} \\right) = \\left( \\begin{array}{c c} b\_{1}' \\\\ b\_{2}' \\\\ b\_{3}' \\\\ \\end{array} \\right)\\\\ ​100​010​001​​​x1​x2​x3​​​\=​b1′​b2′​b3′​​​

**Gauss-Jordan** 就是用 a11a\_{11}a11​ 去清掃其餘 row, 接著用 a22a\_{22}a22​ 去清掃其餘 row (水平的一條叫row, 垂直叫column) (**上下方的 row 都清掃**), 接著用 a33a\_{33}a33​ 去清掃其餘 row, 最後形成一個**對角線矩陣**, 就可以立即得到解.  
**Gauss elimination** 則是只往下方的 row 清掃 (**上方的 row 不清掃**), 最後形成一個上三角矩陣, 再依序用 “後向代入” 得 x3x\_3x3​, x2x\_2x2​, x1x\_1x1​.

a11  x1+a12  x2+a13  x3\=b1a21  x1+a22  x2+a23  x3\=b2a31  x1+a32  x2+a33  x3\=b3 \\begin{array}{c c} a\_{11} \\;x\_1 &+& a\_{12} \\;x\_2 &+& a\_{13} \\;x\_3 &=& b\_{1} \\\\ a\_{21} \\;x\_1 &+& a\_{22} \\;x\_2 &+& a\_{23} \\;x\_3 &=& b\_{2} \\\\ a\_{31} \\;x\_1 &+& a\_{32} \\;x\_2 &+& a\_{33} \\;x\_3 &=& b\_{3}\\end{array} a11​x1​a21​x1​a31​x1​​+++​a12​x2​a22​x2​a32​x2​​+++​a13​x3​a23​x3​a33​x3​​\=\=\=​b1​b2​b3​​  
Ax\=B Ax=B Ax\=B  
(2.03.01.04.01.0−3.0−122)(x1x2x3)\=(4.0−2.02.0) \\left( \\begin{array}{c c} 2.0 & 3.0 & 1.0 \\\\ 4.0 & 1.0 & -3.0 \\\\ -1 & 2 & 2 \\\\ \\end{array} \\right) \\left( \\begin{array}{c c} x\_1 \\\\ x\_2 \\\\ x\_3 \\\\ \\end{array} \\right) = \\left( \\begin{array}{c c} 4.0 \\\\ -2.0 \\\\ 2.0 \\\\ \\end{array} \\right)\\\\ ​2.04.0−1​3.01.02​1.0−3.02​​​x1​x2​x3​​​\=​4.0−2.02.0​​  
where  
A\=(2.03.01.04.01.0−3.0−122)x\=(x1x2x3)B\=(4.0−2.02.0) A = \\left( \\begin{array}{c c} 2.0 & 3.0 & 1.0 \\\\ 4.0 & 1.0 & -3.0 \\\\ -1 & 2 & 2 \\\\ \\end{array} \\right)\\\\ x = \\left( \\begin{array}{c c} x\_1 \\\\ x\_2 \\\\ x\_3 \\\\ \\end{array} \\right)\\\\ B= \\left( \\begin{array}{c c} 4.0 \\\\ -2.0 \\\\ 2.0 \\\\ \\end{array} \\right) A\=​2.04.0−1​3.01.02​1.0−3.02​​x\=​x1​x2​x3​​​B\=​4.0−2.02.0​​

### Gauss-Jordan 的 codes

**Ref:**

*   https://www.codesansar.com/numerical-methods/gauss-jordan-method-python-program-output.htm [link](https://www.codesansar.com/numerical-methods/gauss-jordan-method-python-program-output.htm)  
    有現成的數值計算的Python codes
    
*   河西朝雄: Gauss-Jordan 參考 河西朝雄 Rei15.c, 改寫為 Python codes
    

以下為作者改寫自河西朝雄的C語言程式碼, 所以風格還是偏向 C 語言的迴圈式風格:

    # By Prof. P-J Lai MATH NKNU 20201223
    # 聯立方程式的解法1_Gauss-Jordan
    # Ref: 河西朝雄 Rei15.c
    
    N = 3
    A = [[2.0, 3.0, 1.0, 4.0],
             [4.0, 1.0, -3.0, -2.0],
             [-1.0, 2.0, 2.0, 2.0]]
    
    # 注意, 軸只有 N-1(3個),  每個主軸 row1~row3 分別除一次自己的 pivot, 故loop只做 0~ (N-1)
    for k in range(N):
        pivot = A[k][k] # 取 pivot
        # 注意, 將row k 之 第 j 個column 除以 pivot 時, 是對每個 column 都做, 故loop做 0~N
        for j in range(N+1):
            A[k][j] = A[k][j]/pivot # 除以 pivot
        # 注意, 對各個 row 清掃, 只對每個主軸 row 做, row 個數只有 N,  故loop只做 0~ (N-1)  
        for i in range(N):
            if i != k:
                d= A[i][k]
                 # 注意, 對每個 row 清掃時, 是對每個 column 都做, 故loop做 0~N
                for j1 in range(N+1):
                    A[i][j1] = A[i][j1] - d*A[k][j1]
    
    
    for k in range(N):
        print("x{a} = {b}".format( a=k+1, b=A[k][N]))
    print(A)
    import numpy as np
    A1 = np.array(A)
    print(A1)
    # 輸出
    ##>>> 
    ##============== RESTART: C:/Users/user/Desktop/Gauss_Jordan_test.py =============
    ##x1 = 2.0
    ##x2 = -1.0
    ##x3 = 3.0
    ##[[1.0, 0.0, 0.0, 2.0], [0.0, 1.0, 0.0, -1.0], [-0.0, -0.0, 1.0, 3.0]]
    ##[[ 1.  0.  0.  2.]
    ## [ 0.  1.  0. -1.]
    ## [-0. -0.  1.  3.]]
    ##<class 'numpy.ndarray'>
    

#### Exercises

**Ex:** 如果你已經完成理論那節的習題: 用 Python程式 寫下以下的指令  
`AddRow(A, i, j, s)`, `MultiplyRow(A, i, s)`, `SwapRow(A, i, j)`,  
試著用此三個指令重寫上面 高斯消去法的程式, 看看是否會更清楚, 更易閱讀與維護程式碼.

#### 改寫為 Python 的 list comprehension 列表解析式的風格

以上是 C 語言的風格  
以下改寫為 Python 的 list comprehension 列表解析式的風格

    # By Prof. P-J Lai MATH NKNU 20201223
    # 聯立方程式的解法1_Gauss-Jordan
    # Ref: 河西朝雄 Rei15.c
    # 以下用 列表解析式的寫法 list comprehension
    # linearEq_1_Gauss-Jordan_listCompreh.py
    # [ A[k][j] = A[k][j]/pivot for j in range(N+1)] 不行!
    
    N = 3
    A = [[2.0, 3.0, 1.0, 4.0],
             [4.0, 1.0, -3.0, -2.0],
             [-1.0, 2.0, 2.0, 2.0]]
    
    # 注意, 軸只有 N-1個(3個),  每個主軸 row1~row3 分別除一次自己的 pivot, 故loop只做 0~ (N-1)
    for k in range(N):
        pivot = A[k][k] # 取 pivot
        # 注意, 將row k 之 第 j 個column 除以 pivot 時, 是對每個 column 都做, 故loop做 0~N
        A[k] = [ A[k][j]/pivot for j in range(N+1)] 
        # 注意, 對各個 row 清掃, 只對每個主軸 row 做, row 個數只有 N,  故loop只做 0~ (N-1)  
        for i in range(N):
            if i != k:
                d= A[i][k]
                 # 注意, 對每個 row 清掃時, 是對每個 column 都做, 故loop做 0~N
                A[i] = [ A[i][j1] - d*A[k][j1] for j1 in range(N+1)] 
    
    [ print("x{a} = {b}".format( a=k+1, b=A[k][N])) for k in range(N)]
    
    
    ##>>> 
    ##= RESTART: C:\Users\user\Desktop\linearEq_1_Gauss-Jordan_listCompreh.py
    ##x1 = 2.0
    ##x2 = -1.0
    ##x3 = 3.0
    
    

**Ex:** 以上還可以用列表解析式再進一步簡化,  
但是一般不建議列表解析式的用到含三層或三層以上, 因為已經不好閱讀了!  
同學可以自己試著做看看用到含三層, 看看是否會更好閱讀, 或是閱讀與維護效果不好.

LU 分解
-----

LU 分解可以定義成把高斯消去法的過程寫成演算法, 所以 LU 分解根本就是程式化的高斯消去法.

LU 分解 的現成指令, 只有在 scipy.linalg 與 sympy 有看到,numpy.linalg 則沒有,  
兩者都有, cholesky, qr, svd.  
scipy.linalg 比 numpy.linalg 多了 lu, shur

### sympy 中有關 LU 分解的指令

    from sympy import *
    L, U, _ = A.LUdecomposition()
    

**Ref:**

*   陳擎文教學網：python解線性代數, 線性代數第6章  
    反矩陣inverse, LU分解算聯立方程式, https://acupun.site/lecture/linearAlgebra/pdfBooks/chp6-inverseMatrix.pdf [link](https://acupun.site/lecture/linearAlgebra/pdfBooks/chp6-inverseMatrix.pdf)
*   LU 分解 的現成指令, 只有在 scipy.linalg 與 sympy 有看到,numpy.linalg 則沒有,  
    兩者都有, cholesky, qr, svd.  
    scipy.linalg 多 lu, shur 等  
    – **Numpy linalg 最新列表:** https://numpy.org/devdocs/reference/routines.linalg.html [link](https://numpy.org/devdocs/reference/routines.linalg.html)  
    – **SciPy linalg 最新列表:** https://docs.scipy.org/doc/scipy/reference/linalg.html#scipy.linalg [link](https://docs.scipy.org/doc/scipy/reference/linalg.html#scipy.linalg)
*   R. L. Burden, J. D. Faires, sec 6.5 p.388, Numerical analysis, Brooks/Cole, 7th ed., 2001

### 用寫程式的方式實現 LU 分解

以下討論用寫程式的方式實現 LU 分解:

Ref: R. L. Burden, J. D. Faires, sec 6.5 p.388, Numerical analysis, Brooks/Cole, 7th ed., 2001

#### LU 分解 演算法 的原理

高斯消去法, 可以用來對矩陣進行 LU 分解,  
高斯消去法, 消去第一個column 的動作:

a11′  x1+a12′  x2+a13′  x3\=b1′̸a21  x1+a22′  x2+a23′  x3\=b2′̸a31  x1+a32′  x2+a33′  x3\=b3′ \\begin{array}{c c} a\_{11}' \\;x\_1 &+& a\_{12}' \\;x\_2 &+& a\_{13}' \\;x\_3 &=& b\_{1}'\\\\ \\not{a\_{21}} \\;x\_1 &+& a\_{22}' \\;x\_2 &+& a\_{23}' \\;x\_3 &=& b\_{2}' \\\\ \\not{a\_{31}} \\;x\_1 &+& a\_{32}' \\;x\_2 &+& a\_{33}' \\;x\_3 &=& b\_{3}'\\end{array} a11′​x1​a21​x1​a31​x1​​+++​a12′​x2​a22′​x2​a32′​x2​​+++​a13′​x3​a23′​x3​a33′​x3​​\=\=\=​b1′​b2′​b3′​​  
可以用一個矩陣乘法來表達:  
(100−m2110−m3101)(a11a12a13a21a22a23a31a32a33)\=(a11′a12′a13′0a22′a23′0a32′a33′) \\begin{pmatrix} 1 & 0 & 0 \\\\ -m\_{21} & 1 & 0 \\\\ -m\_{31} & 0 & 1 & \\\\ \\end{pmatrix} \\begin{pmatrix} a\_{11} & a\_{12} & a\_{13} \\\\ a\_{21} & a\_{22} & a\_{23} \\\\ a\_{31} & a\_{32} & a\_{33} \\\\ \\end{pmatrix}= \\begin{pmatrix} a\_{11}' & a\_{12}' & a\_{13}' \\\\ 0 & a\_{22}' & a\_{23}' \\\\ 0 & a\_{32}' & a\_{33}' \\\\ \\end{pmatrix} ​1−m21​−m31​​010​001​​​​a11​a21​a31​​a12​a22​a32​​a13​a23​a33​​​\=​a11′​00​a12′​a22′​a32′​​a13′​a23′​a33′​​​  
Where mj,1\=aj1a11m\_{j,1}=\\frac{a\_{j1}}{a\_{11}}mj,1​\=a11​aj1​​

同學可以自己有耐心的在紙上走一遍高斯消去法,  
會發現對第一個直行column 往下消的動作:  
(Ej−mj,1E1)→Ej,  j\=2,3.(E\_j - m\_{j,1}E\_1) \\rightarrow E\_j, \\;j=2,3.(Ej​−mj,1​E1​)→Ej​,j\=2,3.  
確實對照到以下矩陣相乘

(100−m2110−m3101)(a11a12a13a21a22a23a31a32a33) \\begin{pmatrix} 1 & 0 & 0 \\\\ -m\_{21} & 1 & 0 \\\\ -m\_{31} & 0 & 1 & \\\\ \\end{pmatrix} \\left( \\begin{array}{c c} a\_{11} & a\_{12} & a\_{13} \\\\ a\_{21} & a\_{22} & a\_{23} \\\\ a\_{31} & a\_{32} & a\_{33} \\\\ \\end{array} \\right) ​1−m21​−m31​​010​001​​​​a11​a21​a31​​a12​a22​a32​​a13​a23​a33​​​  
以下我們觀察 對第一個直行column 往下消的過程中, 處理**第2個 row** 的動作:  
(E2−m2,1E1)→E2(E\_2 - m\_{2,1}E\_1) \\rightarrow E\_2(E2​−m2,1​E1​)→E2​ :  
a11  x1+a12  x2+a13  x3\=b1a21  x1+a22  x2+a23  x3\=b2a31  x1+a32  x2+a33  x3\=b3 \\begin{array}{c c} a\_{11} \\;x\_1 &+& a\_{12} \\;x\_2 &+& a\_{13} \\;x\_3 &=& b\_{1} \\\\ a\_{21} \\;x\_1 &+& a\_{22} \\;x\_2 &+& a\_{23} \\;x\_3 &=& b\_{2} \\\\ a\_{31} \\;x\_1 &+& a\_{32} \\;x\_2 &+& a\_{33} \\;x\_3 &=& b\_{3}\\end{array} a11​x1​a21​x1​a31​x1​​+++​a12​x2​a22​x2​a32​x2​​+++​a13​x3​a23​x3​a33​x3​​\=\=\=​b1​b2​b3​​

m2,1E1m\_{2,1}E\_1m2,1​E1​, 就是先把第一個 row E1E\_1E1​ 乘上 −m2,1\=−a21a11\-m\_{2,1}=-\\frac{a\_{21}}{a\_{11}}−m2,1​\=−a11​a21​​, 如下  
⇒\\Rightarrow⇒

−a21a11×(a11×  x1)+−a21a11×(a12×  x2)+−a21a11×(a13×  x3)\=−a21a11×(b1)a21  x1+a22  x2+a23  x3\=b2a31  x1+a32  x2+a33  x3\=b3 \\begin{array}{c c} -\\frac{a\_{21}}{a\_{11}} \\times ({a\_{11}} \\times \\;x\_1) &+& -\\frac{a\_{21}}{a\_{11}} \\times (a\_{12} \\times \\;x\_2) &+& -\\frac{a\_{21}}{a\_{11}} \\times (a\_{13} \\times \\;x\_3) &=& -\\frac{a\_{21}}{a\_{11}} \\times (b\_{1}) \\\\ a\_{21} \\;x\_1 &+& a\_{22} \\;x\_2 &+& a\_{23} \\;x\_3 &=& b\_{2} \\\\ a\_{31} \\;x\_1 &+& a\_{32} \\;x\_2 &+& a\_{33} \\;x\_3 &=& b\_{3}\\end{array} −a11​a21​​×(a11​×x1​)a21​x1​a31​x1​​+++​−a11​a21​​×(a12​×x2​)a22​x2​a32​x2​​+++​−a11​a21​​×(a13​×x3​)a23​x3​a33​x3​​\=\=\=​−a11​a21​​×(b1​)b2​b3​​

(E2−m2,1E1)→E2(E\_2 - m\_{2,1}E\_1) \\rightarrow E\_2(E2​−m2,1​E1​)→E2​, 再把 第一個 row 加到 第二個 row, 此時我們保持 E1E\_1E1​為原來的  
⇒\\Rightarrow⇒

a11  x1+a12  x2+a13  x3\=b1(−a21a11×a11+a21)  x1+(−a21a11×a12+a22)  x2+−a21a11×a13+a23  x3\=−a21a11×b1+b2a31  x1+a32  x2+a33  x3\=b3 \\begin{array}{c c} a\_{11} \\;x\_1 &+& a\_{12} \\;x\_2 &+& a\_{13} \\;x\_3 &=& b\_{1}\\\\ (-\\frac{a\_{21}} {a\_{11}} \\times {a\_{11}} +a\_{21}) \\;x\_1 &+& (-\\frac{a\_{21}} {a\_{11}} \\times {a\_{12}} + a\_{22}) \\;x\_2 &+& -\\frac{a\_{21}} {a\_{11}} \\times a\_{13}+a\_{23} \\;x\_3 &=& -\\frac{a\_{21}} {a\_{11}} \\times b\_{1} +b\_{2} \\\\ a\_{31} \\;x\_1 &+& a\_{32} \\;x\_2 &+& a\_{33} \\;x\_3 &=& b\_{3}\\end{array} a11​x1​(−a11​a21​​×a11​+a21​)x1​a31​x1​​+++​a12​x2​(−a11​a21​​×a12​+a22​)x2​a32​x2​​+++​a13​x3​−a11​a21​​×a13​+a23​x3​a33​x3​​\=\=\=​b1​−a11​a21​​×b1​+b2​b3​​  
這樣操作之後, 就得到 a2,1a\_{2,1}a2,1​ 成為 0.  
(a11′a12′a13′0a22′a23′a31′a32′a33′) \\begin{pmatrix} a\_{11}' & a\_{12}' & a\_{13}' \\\\ 0 & a\_{22}' & a\_{23}' \\\\ a\_{31}' & a\_{32}' & a\_{33}' \\\\ \\end{pmatrix} ​a11′​0a31′​​a12′​a22′​a32′​​a13′​a23′​a33′​​​  
類似的, 同學可以手算驗證,  
對第一個直行column 往下消的過程中, 處理**第 3 個** row 的動作:  
(E3−m3,1E1)→E3(E\_3 - m\_{3,1}E\_1) \\rightarrow E\_3(E3​−m3,1​E1​)→E3​  
m3,1E1m\_{3,1}E\_1m3,1​E1​, 就是先把第一個 row E1E\_1E1​ 乘上 −m3,1\=−a31a11\-m\_{3,1}=-\\frac{a\_{31}}{a\_{11}}−m3,1​\=−a11​a31​​,  
再把 第一個 row 加到 第 3 個 row, (E3−m3,1E1)→E3(E\_3 - m\_{3,1}E\_1) \\rightarrow E\_3(E3​−m3,1​E1​)→E3​,  
就得到 a3,1a\_{3,1}a3,1​ 成為 0,  
如此就完成 第一個直行column 往下消的程序.  
(a11′a12′a13′0a22′a23′0a32′a33′) \\begin{pmatrix} a\_{11}' & a\_{12}' & a\_{13}' \\\\ 0 & a\_{22}' & a\_{23}' \\\\ 0 & a\_{32}' & a\_{33}' \\\\ \\end{pmatrix} ​a11′​00​a12′​a22′​a32′​​a13′​a23′​a33′​​​

* * *

一般性 n ×\\times× n 矩陣的公式,  
Burden & Faires 書中稱此消去第1個直行column的矩陣為  
**The first Gaussian transformation matrix**  
**第一個高斯變換矩陣**負責清掃第1個直行column:  
M(1)\=(10⋯⋯0−m211⋱⋮⋮0⋱⋱⋮⋮⋮⋱10−mn10⋯01), M^{(1)}=\\begin{pmatrix} 1 & 0 & \\cdots & \\cdots & 0 \\\\ -m\_{21} & 1 & \\ddots & & \\vdots \\\\ \\vdots & 0 & \\ddots & \\ddots & \\vdots \\\\ \\vdots & \\vdots & \\ddots & 1 & 0 \\\\ -m\_{n1} & 0 & \\cdots & 0 & 1 & \\\\ \\end{pmatrix}, M(1)\=​1−m21​⋮⋮−mn1​​010⋮0​⋯⋱⋱⋱⋯​⋯⋱10​0⋮⋮01​​​,  
Where mj,1\=aj1(1)a11(1)m\_{j,1}=\\frac{a\_{j1}^{(1)}}{a\_{11}^{(1)}}mj,1​\=a11(1)​aj1(1)​​

消去第k個直行 column 的矩陣 **The kth Gaussian transformation matrix**  
**第k個高斯變換矩陣**負責清掃第k個直行column:  
M(k)\=(100⋯⋯0010⋱⋮⋮0⋱⋱⋱⋮⋮⋮−mk+1,k⋱0⋮⋮⋮⋮⋮1000−mn,k001), M^{(k)}=\\begin{pmatrix} 1 &0& 0 & \\cdots & \\cdots & 0 \\\\ 0 &1& 0 & \\ddots & & \\vdots \\\\ \\vdots & 0 & \\ddots & \\ddots & \\ddots & \\vdots \\\\ \\vdots & \\vdots &-m\_{k+1,k} & \\ddots & 0 & \\vdots \\\\ \\vdots & \\vdots & \\vdots & \\vdots & 1 & 0 & \\\\ 0 & 0 & -m\_{n,k} & 0 & 0 & 1 & \\\\ \\end{pmatrix}, M(k)\=​10⋮⋮⋮0​010⋮⋮0​00⋱−mk+1,k​⋮−mn,k​​⋯⋱⋱⋱⋮0​⋯⋱010​0⋮⋮⋮01​​​,  
Where mj,k\=ajk(k)akk(k)m\_{j,k}=\\frac{a\_{jk}^{(k)}}{a\_{kk}^{(k)}}mj,k​\=akk(k)​ajk(k)​​

透過這一連串的 M(k)M^{(k)}M(k) 乘上 AAA 就把 A 轉成上三角.  
我們依照 Burden & Faires 書中的符號, 來觀察高斯消去法這一過程:  
Ax\=bAx=bAx\=b  
持續左右兩邊乘上第k個高斯變換矩陣  
M(1)Ax\=M(1)bM^{(1)}Ax=M^{(1)}bM(1)Ax\=M(1)b  
M(k)⋯M(1)Ax\=M(k)⋯M(1)bM^{(k)}\\cdots M^{(1)} Ax=M^{(k)}\\cdots M^{(1)}bM(k)⋯M(1)Ax\=M(k)⋯M(1)b  
M(n−1)⋯M(k)⋯M(1)Ax\=M(n−1)⋯M(k)⋯M(1)bM^{(n-1)}\\cdots M^{(k)}\\cdots M^{(1)} Ax=M^{(n-1)}\\cdots M^{(k)}\\cdots M^{(1)}bM(n−1)⋯M(k)⋯M(1)Ax\=M(n−1)⋯M(k)⋯M(1)b  
則知 上式左邊已經是轉成上三角了, 令為 UUU.  
U\=M(n−1)⋯M(1)AU=M^{(n-1)}\\cdots M^{(1)} AU\=M(n−1)⋯M(1)A  
而 UUU 可以透過真實的乘上 M(n−1)⋯M(1)AM^{(n-1)}\\cdots M^{(1)} AM(n−1)⋯M(1)A 去得到:  
M(n−1)⋯M(1)A\=UM^{(n-1)}\\cdots M^{(1)} A=UM(n−1)⋯M(1)A\=U  
實際小矩陣的解題, 也可以透過我們熟悉的高斯消去法對AAA得到的上三角矩陣, 透過這種方式去得到 UUU.  
我們再進一步觀察, 左右兩邊同時乘上 (M(k))−1(M^{(k)})^{-1}(M(k))−1, 讓 AAA 的分解長相呈現出來:  
(M(n−1))−1M(n−1)M(n−2)⋯M(1)A\=(M(n−1))−1U(M^{(n-1)})^{-1}M^{(n-1)}M^{(n-2)}\\cdots M^{(1)} A=(M^{(n-1)})^{-1}U(M(n−1))−1M(n−1)M(n−2)⋯M(1)A\=(M(n−1))−1U  
M(n−2)⋯M(1)A\=(M(n−1))−1UM^{(n-2)}\\cdots M^{(1)} A=(M^{(n-1)})^{-1}UM(n−2)⋯M(1)A\=(M(n−1))−1U  
(M(n−2))−1M(n−2)⋯M(1)A\=(M(n−2))−1(M(n−1))−1U(M^{(n-2)})^{-1}M^{(n-2)}\\cdots M^{(1)} A=(M^{(n-2)})^{-1}(M^{(n-1)})^{-1}U(M(n−2))−1M(n−2)⋯M(1)A\=(M(n−2))−1(M(n−1))−1U  
最終得到 AAA 的分解長相  
A\=(M(1))−1⋯(M(n−2))−1(M(n−1))−1UA=(M^{(1)})^{-1} \\cdots (M^{(n-2)})^{-1}(M^{(n-1)})^{-1}UA\=(M(1))−1⋯(M(n−2))−1(M(n−1))−1U  
如果  
(M(1))−1⋯(M(n−2))−1(M(n−1))−1(M^{(1)})^{-1} \\cdots (M^{(n-2)})^{-1}(M^{(n-1)})^{-1}(M(1))−1⋯(M(n−2))−1(M(n−1))−1  
是一個下三角矩陣, 符號命名為 LLL, 則我們就完成  
A\=L×UA = L \\times UA\=L×U  
的 LU 分解了!

(M(1))−1⋯(M(n−2))−1(M(n−1))−1(M^{(1)})^{-1} \\cdots (M^{(n-2)})^{-1}(M^{(n-1)})^{-1}(M(1))−1⋯(M(n−2))−1(M(n−1))−1 是一個下三角矩陣答案是明顯的, 因為上三角矩陣的反矩陣就是下三角矩陣(自己照反矩陣的公式走一下), 所以  
L\=(M(1))−1⋯(M(n−2))−1(M(n−1))−1L=(M^{(1)})^{-1} \\cdots (M^{(n-2)})^{-1}(M^{(n-1)})^{-1}L\=(M(1))−1⋯(M(n−2))−1(M(n−1))−1  
確實是一個下三角矩陣, 所以 A\=L×UA = L \\times UA\=L×U 的 LU 分解確實完成了!

而 LLL 必須透過真實的乘上 (M(1))−1⋯(M(n−2))−1(M(n−1))−1(M^{(1)})^{-1} \\cdots (M^{(n-2)})^{-1}(M^{(n-1)})^{-1}(M(1))−1⋯(M(n−2))−1(M(n−1))−1 去得到:  
L\=(M(1))−1⋯(M(n−2))−1(M(n−1))−1L=(M^{(1)})^{-1} \\cdots (M^{(n-2)})^{-1}(M^{(n-1)})^{-1}L\=(M(1))−1⋯(M(n−2))−1(M(n−1))−1  
可以寫下明確的公式.  
由以上的觀查, LULULU 就可以直接寫下公式去求得, 此部分就是演算法的核心.

#### LU 分解 演算法

**Algorithm 6.4** Direct Factorization  
To factor the n×\\times×n matrix A\=(aij)A=(a\_{ij})A\=(aij​) into the product of the lower-triangular matrix L\=(lij)L=(l\_{ij})L\=(lij​) and the upper-triangular matrix U\=(uij)U=(u\_{ij})U\=(uij​), that is, A\=LUA=LUA\=LU, where the main diagonal of either LLL or UUU is given:  
**INPUT** dimension n; the entries aija\_{ij}aij​, 1≤i,j≤n1\\le i, j \\le n1≤i,j≤n, of AAA; the diagonal l11,…,lnnl\_{11},\\dots,l\_{nn}l11​,…,lnn​ of LLL or the diagonal u11,…,unnu\_{11},\\dots,u\_{nn}u11​,…,unn​ of UUU.  
**OUTPUT** the entries lijl\_{ij}lij​, 1≤j≤i,1≤i≤n1\\le j \\le i, 1\\le i \\le n1≤j≤i,1≤i≤n of LLL and the entries uiju\_{ij}uij​, 1≤j≤n,1≤i≤n1\\le j \\le n, 1\\le i \\le n1≤j≤n,1≤i≤n of UUU.

*   **STEP1**
*   **STEP2**
*   **STEP3**  
    \* **STEP4**  
    \* **STEP5**
*   **STEP6**
*   **STEP7**

以下是 R. L. Burden, J. D. Faires 書附的 LU 分解的 Matlab codes:

    % DIRECT FACTORIZATION ALGORITHM 6.4
    %
    % To factor the n by n matrix A = (A(I,J)) into the product of the
    % lower triangular matrix L = (L(I,J)) and the upper triangular
    % matrix U = (U(I,J)), that is A = LU, where the main diagonal of 
    % either L or U consists of all ones:
    %
    % INPUT:   dimension n; the entries A(I,J), 1<=I, J<=n, of A;
    %          the diagonal L(1,1), ..., L(N,N) of L or the diagonal
    %          U(1,1), ..., U(N,N) of U.
    %
    % OUTPUT:  the entries L(I,J), 1<=J<=I, 1<=I<=n of L and the entries
    %          U(I,J), I<=J<=n, 1<=I<=n of U.
     syms('AA', 'NAME', 'INP', 'OK', 'N', 'I', 'J', 'A');
     syms('FLAG', 'ISW', 'XL', 'M', 'KK', 'S', 'K', 'JJ');
     syms('SS', 'OUP', 's');
     TRUE = 1;
     FALSE = 0;
     fprintf(1,'This is the general LU factorization method.\n');
     fprintf(1,'The array will be input from a text file in the order:\n');
     fprintf(1,'A(1,1), A(1,2), ..., A(1,N), \n') 
     fprintf(1,'A(2,1), A(2,2), ..., A(2,N),\n');
     fprintf(1,'..., A(N,1), A(N,2), ..., A(N,N)\n\n');
     fprintf(1,'Place as many entries as desired on each line, but separate\n');
     fprintf(1,'entries with\n');
     fprintf(1,'at least one blank.\n\n\n');
     fprintf(1,'Has the input file been created? - enter Y or N.\n');
     AA = input(' ','s');
     if AA == 'Y' | AA == 'y' 
     fprintf(1,'Input the file name in the form - drive:\\name.ext\n');
     fprintf(1,'for example:   A:\\DATA.DTA\n');
     NAME = input(' ','s');
     INP = fopen(NAME,'rt');
     OK = FALSE;
     while OK == FALSE 
     fprintf(1,'Input the dimension n - an integer.\n');
     N = input(' ');
     if N > 0 
     A = zeros(N,N);
     XL = zeros(1,N);
     for I = 1 : N 
     for J = 1 : N 
     A(I,J) = fscanf(INP, '%f',1);
     end;
     end;
     OK = TRUE;
     fclose(INP);
     else fprintf(1,'The number must be a positive integer.\n');
     end;
     end;
     fprintf(1,'Choice of diagonals:\n');
     fprintf(1,'1. Diagonal of L consists of ones\n'); 
     fprintf(1,'2. Diagonal of U consists of ones\n');
     fprintf(1,'Please enter 1 or 2.\n');
     FLAG = input(' ');
     if FLAG == 1 
     ISW = 0;
     else
     ISW = 1;
     end
     else 
     fprintf(1,'The program will end so the input file can be created.\n');
     OK = FALSE;
     end;
     if OK == TRUE 
     for I = 1 : N 
     XL(I) = 1;
     end;
    % STEP 1
     if abs(A(1,1)) <= 1.0e-20 
     OK = FALSE;
     else
    % the entries of L below the main diagonal will be placed 
    % in the corresponding entries of A; the entries of U 
    % above the main diagonal will be placed in the 
    % corresponding entries of A; the main diagonal which 
    % was not input will become the main diagonal of A; 
    % the input main diagonal of L or U is, 
    % of course, placed in XL
     A(1,1) = A(1,1)/XL(1);
    % STEP 2
     for J = 2 : N 
     if ISW == 0 
    % first row of U
     A(1,J) = A(1,J)/XL(1);
    % first column of L
     A(J,1) = A(J,1)/A(1,1);
     else
    % first row of U
     A(1,J) = A(1,J)/A(1,1);
    % first column of L
     A(J,1) = A(J,1)/XL(1);
     end;
     end;
    % STEP 3
     M = N-1;
     I = 2;
     while I <= M & OK == TRUE 
    % STEP 4
     KK = I-1;
     S = 0;
     for K = 1 : KK 
     S = S-A(I,K)*A(K,I);
     end;
     A(I,I) = (A(I,I)+S)/XL(I);
     if abs(A(I,I)) <= 1.0e-20 
     OK = FALSE;
     else
    % STEP 5
     JJ = I+1;
     for J = JJ : N 
     SS = 0;
     S = 0;
     for K = 1 : KK 
     SS = SS-A(I,K)*A(K,J);
     S = S-A(J,K)*A(K,I);
     end;
     if ISW == 0 
    % Ith row of U
     A(I,J) = (A(I,J)+SS)/XL(I);
    % Ith column of L
     A(J,I) = (A(J,I)+S)/A(I,I);
     else
    % Ith row of U
     A(I,J) = (A(I,J)+SS)/A(I,I);
    % Ith column of L
     A(J,I) = (A(J,I)+S)/XL(I);
     end;
     end;
     end;
     I = I+1;
     end;
     if OK == TRUE 
    % STEP 6
     S = 0;
     for K = 1 : M 
     S = S-A(N,K)*A(K,N);
     end;
     A(N,N) = (A(N,N)+S)/XL(N);
    % If A(N,N) = 0 then A = LU but the matrix is singular.
    % Process is complete, all entries of A have been determined.
    % STEP 7
     fprintf(1,'Choice of output method:\n');
     fprintf(1,'1. Output to screen\n');
     fprintf(1,'2. Output to text file\n');
     fprintf(1,'Please enter 1 or 2\n');
     FLAG = input(' ');
     if FLAG == 2 
     fprintf(1,'Input the file name in the form - drive:\\name.ext\n');
     fprintf(1,'For example   A:\\OUTPUT.DTA\n');
     NAME = input(' ','s');
     OUP = fopen(NAME,'wt');
     else
     OUP = 1;
     end;
     fprintf(OUP, 'GENERAL LU FACTORIZATION\n\n');
     if ISW == 0  
     fprintf(OUP, 'The diagonal of L consists of all entries = 1.0\n');
     else
     fprintf(OUP, 'The diagonal of U consists of all entries = 1.0\n');
     end;
     fprintf(OUP, '\nEntries of L below/on diagonal and entries of U above');
     fprintf(OUP, '/on diagonal\n');
     fprintf(OUP, '- output by rows in overwrite format:\n');
     for I = 1 : N 
     for J = 1 : N 
     fprintf(OUP, ' %11.8f', A(I,J));
     end;
     fprintf(OUP, '\n');
     end;
     if OUP ~= 1 
     fclose(OUP);
     fprintf(1,'Output file %s created successfully \n',NAME);
     end;
     end;
     end;
     if OK == FALSE 
     fprintf(1,'The matrix does not have an LU factorization.\n');
     end;
     end;
    

### LU 分解定理

甚麼條件下, 一個矩陣一定保證, 存在 LU 分解?

Ref: R. L. Burden, J. D. Faires, sec 6.5 p.365, Numerical analysis, Brooks/Cole, 7th ed., 2001.

**Theorem 6.17 LU 分解定理**  
假設 Ax\=bAx=bAx\=b 可  
以執行高斯消去法, 且在執行高斯消去法時, 無須做 row 的置換(無須挑選 非零的pivot 元素), 則 A 可以分解為 上三角矩陣與下三角矩陣相乘,  
A\=L×UA=L \\times UA\=L×U  
U\=\=(a11(1)a12(1)a13(1)⋯⋯a1n(1)0a22(2)⋱⋱⋮⋮⋱⋱⋱⋱⋮⋮⋮0⋱⋱⋮⋮⋮⋮⋮an−1,n−1(n−1)an−1,n(n−1)0⋯0⋯0an,n(n)),U==\\begin{pmatrix} a\_{11}^{(1)} & a\_{12}^{(1)}& a\_{13}^{(1)} & \\cdots & \\cdots & a\_{1n}^{(1)} \\\\ 0 & a\_{22}^{(2)} & \\ddots & \\ddots & & \\vdots \\\\ \\vdots & \\ddots & \\ddots & \\ddots & \\ddots & \\vdots \\\\ \\vdots & \\vdots &0 & \\ddots & \\ddots & \\vdots \\\\ \\vdots & \\vdots & \\vdots & \\vdots & a\_{n-1,n-1}^{(n-1)} & a\_{n-1,n}^{(n-1)} & \\\\ 0 & \\cdots & 0 & \\cdots & 0 & a\_{n,n}^{(n)} & \\\\ \\end{pmatrix}, U\==​a11(1)​0⋮⋮⋮0​a12(1)​a22(2)​⋱⋮⋮⋯​a13(1)​⋱⋱0⋮0​⋯⋱⋱⋱⋮⋯​⋯⋱⋱an−1,n−1(n−1)​0​a1n(1)​⋮⋮⋮an−1,n(n−1)​an,n(n)​​​​,,  
L\=(100⋯⋯0m2110⋱⋮⋮⋱⋱⋱⋱⋮⋮⋮mk+1,k⋱0⋮⋮⋮⋮⋮10mn1⋯mn,k⋯mn,n−11),L=\\begin{pmatrix} 1 &0& 0 & \\cdots & \\cdots & 0 \\\\ m\_{21} &1& 0 & \\ddots & & \\vdots \\\\ \\vdots & \\ddots & \\ddots & \\ddots & \\ddots & \\vdots \\\\ \\vdots & \\vdots &m\_{k+1,k} & \\ddots & 0 & \\vdots \\\\ \\vdots & \\vdots & \\vdots & \\vdots & 1 & 0 & \\\\ m\_{n1} & \\cdots & m\_{n,k} & \\cdots & m\_{n,n-1} & 1 & \\\\ \\end{pmatrix}, L\=​1m21​⋮⋮⋮mn1​​01⋱⋮⋮⋯​00⋱mk+1,k​⋮mn,k​​⋯⋱⋱⋱⋮⋯​⋯⋱01mn,n−1​​0⋮⋮⋮01​​​,  
Where mj,k\=ajk(k)akk(k)m\_{j,k}=\\frac{a\_{jk}^{(k)}}{a\_{kk}^{(k)}}mj,k​\=akk(k)​ajk(k)​​,  
and aj,k(i)a\_{j,k}^{(i)}aj,k(i)​ is the ith iteration ai,ka\_{i,k}ai,k​

以上 Burden and Faires 給的條件是 假設 Ax\=bAx=bAx\=b 可以執行高斯消去法, 等,

在  
**Ref:** Kincaid and Cheney, sec 4.2, P.156,Theorem1, Numerical analysis, Brooks/Cole, 3th ed., 2002, 所提的定理Theorem1, 它的前提條件是:  
all n leading principal minors of the n×\\times×n matrix A are nonsingular  
**Theorem1 Theorem on LU-Decomposition**  
If all n leading principal minors of the n×\\times×n matrix A are nonsingular, then AAA has an LU-decomposition.

Appendix
========

\\begin{bmatrix}
----------------

以前我學 Latex 寫矩陣, 標準的寫法有點麻煩, 使用 `\begin{array}`

    A = \left( \begin{array}{c c} 10 & -7 & 0 \\ -3 & 2 & 6 \\ 5 & -1 & 5 \\ \end{array} \right)\\
    

A\=(10−70−3265−15)A = \\left( \\begin{array}{c c} 10 & -7 & 0 \\\\ -3 & 2 & 6 \\\\ 5 & -1 & 5 \\\\ \\end{array} \\right)A\=​10−35​−72−1​065​​

現在可以用  
`\begin{pmatrix}` 左右小括號矩陣

    $$ A =  
    \begin{pmatrix}
    10 & -7 & 0 \\ 
    -3 & 2 & 6 \\ 
    5 & -1 & 5 \\ 
    \end{pmatrix} $$
    

A\=(10−70−3265−15)A = \\begin{pmatrix}10 & -7 & 0 \\\\ -3 & 2 & 6 \\\\ 5 & -1 & 5 \\\\ \\end{pmatrix} A\=​10−35​−72−1​065​​  
`\begin{bmatrix}` 左右中括號矩陣

    $$
    A =  
    \begin{bmatrix}
    10 & -7 & 0 \\ 
    -3 & 2 & 6 \\ 
    5 & -1 & 5 \\ 
    \end{bmatrix} 
    $$
    

A\=\[10−70−3265−15\]A = \\begin{bmatrix}10 & -7 & 0 \\\\ -3 & 2 & 6 \\\\ 5 & -1 & 5 \\\\ \\end{bmatrix} A\=​10−35​−72−1​065​​

`\begin{Bmatrix}` 左右 大括號矩陣

    $$A =  \begin{Bmatrix}10 & -7 & 0 \\ -3 & 2 & 6 \\ 5 & -1 & 5 \\ \end{Bmatrix} $$
    

A\={10−70−3265−15}A = \\begin{Bmatrix}10 & -7 & 0 \\\\ -3 & 2 & 6 \\\\ 5 & -1 & 5 \\\\ \\end{Bmatrix} A\=⎩⎨⎧​10−35​−72−1​065​⎭⎬⎫​

`\begin{vmatrix}` 左右絕對值括號矩陣

    $$A =  \begin{vmatrix}10 & -7 & 0 \\ -3 & 2 & 6 \\ 5 & -1 & 5 \\ \end{vmatrix} $$
    

A\=∣10−70−3265−15∣A = \\begin{vmatrix}10 & -7 & 0 \\\\ -3 & 2 & 6 \\\\ 5 & -1 & 5 \\\\ \\end{vmatrix} A\=​10−35​−72−1​065​​

`\begin{Vmatrix}` 左右雙絕對值(norm)括號矩陣

    $$A =  \begin{Vmatrix}10 & -7 & 0 \\ -3 & 2 & 6 \\ 5 & -1 & 5 \\ \end{Vmatrix} $$
    

A\=∥10−70−3265−15∥A = \\begin{Vmatrix}10 & -7 & 0 \\\\ -3 & 2 & 6 \\\\ 5 & -1 & 5 \\\\ \\end{Vmatrix} A\=​10−35​−72−1​065​​

控制print 印出之小數位數只有一位
-------------------

**注意一下以上print 之呈現**: 控制print 印出之小數位數只有一位, 讓視覺較舒服  
`print("x{}{} = {:.1f}\t".format( k+1,i+1 , A[k][i]), end="\t")`

scipy.linalg 中有關矩陣分解的指令
-----------------------

Decompositions :

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

*   R. L. Burden, J. D. Faires, Numerical analysis, Brooks/Cole, 7th ed., 2001.
    
*   Kincaid and Cheney, sec 4.2, P.156,Theorem1, Numerical analysis, Brooks/Cole, 3th ed., 2002.
    
*   Clever B Moler, Numerical computing with Matlab  
    **Moler的書: Ch2 線性代數**
    
*   Python Numpy全世界最長基礎教程最適合小白學習 還詳細很全速拿, https://twgreatdaily.com/AhWyTG8BMH2\_cNUgWU4g.html [link](https://twgreatdaily.com/AhWyTG8BMH2_cNUgWU4g.html).
    
*   推薦: 這裡有很具體的指令用法, 用在線性代數課程上: 陳擎文教學網：python解線性代數, https://acupun.site/lecture/linearAlgebra/index.htm [link](https://acupun.site/lecture/linearAlgebra/index.htm)
    
*   https://www.codesansar.com/numerical-methods/gauss-jordan-method-python-program-output.htm [link](https://www.codesansar.com/numerical-methods/gauss-jordan-method-python-program-output.htm)  
    有現成的數值計算的Python codes
    
*   河西朝雄
    
*   https://www.maplesoft.com/support/help/maple/view.aspx?path=Student%2FLinearAlgebra%2FAddRow [link](https://www.maplesoft.com/support/help/maple/view.aspx?path=Student%2FLinearAlgebra%2FAddRow)
    
*   LU 分解 的現成指令, 只有在 scipy 與 sympy 有看到, NumPy 則沒有,  
    陳擎文教學網：python解線性代數, 線性代數第6章  
    反矩陣inverse, LU分解算聯立方程式, https://acupun.site/lecture/linearAlgebra/pdfBooks/chp6-inverseMatrix.pdf [link](https://acupun.site/lecture/linearAlgebra/pdfBooks/chp6-inverseMatrix.pdf)
    
*   LU 分解 的現成指令, 只有在 scipy.linalg 與 sympy 有看到, numpy.linalg 則沒有,  
    兩者都有, cholesky, qr, svd.  
    scipy.linalg 多 lu, shur  
    – **Numpy linalg 最新列表:** https://numpy.org/devdocs/reference/routines.linalg.html [link](https://numpy.org/devdocs/reference/routines.linalg.html)  
    – **SciPy linalg 最新列表:** https://docs.scipy.org/doc/scipy/reference/linalg.html#scipy.linalg [link](https://docs.scipy.org/doc/scipy/reference/linalg.html#scipy.linalg)  
    – **SciPy linalg Decompositions(矩陣分解) 最新列表:**  
    https://docs.scipy.org/doc/scipy/reference/linalg.html#decompositions [link](https://docs.scipy.org/doc/scipy/reference/linalg.html#decompositions)