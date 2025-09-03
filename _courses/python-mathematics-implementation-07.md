---
title: "用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 7 解線性方程組 迭代法: Jacobi iterated,Gauss-Seidel 等"
collection: courses
type: "程式設計課程"
permalink: /courses/python-mathematics-implementation-07
venue: "線性代數矩陣計算、微積分與數論"
date: 2025-09-01
location: "Python程式實作"
---  
          用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 7 解線性方程組 迭代法: Jacobi iterated,Gauss-Seidel 等 

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
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 6 解線性方程組 直接法: Gauss 消去, LU 等 [link](https://blog.csdn.net/m0_47985483/article/details/122691113)
    
*   用 Python+Numpy+scipy 執行 Matlab 的矩陣計算 7 解線性方程組 迭代法: Jacobi iterated,Gauss-Seidel 等 [link](https://blog.csdn.net/m0_47985483/article/details/122754154)
    

* * *

### 文章目录

- [本系列文章之連結](#本系列文章之連結)
    - [文章目录](#文章目录)
- [求解線性聯立方程組之迭代法](#求解線性聯立方程組之迭代法)
- [Jacobi iterated method](#jacobi-iterated-method)
- [Gauss-Seidel iterated method](#gauss-seidel-iterated-method)
- [References](#references)

* * *

求解線性聯立方程組之迭代法
=============

迭代法起源於19世紀末, 在小尺度的求解線性聯立方程組, 較少用, 因為時間遠比直接法要久,  
但是對於大型線性聯立方程組且要求高精度且帶有 0 的entry, 迭代法運用計算機的效能要遠高於直接法,  
迭帶法意指透過同樣的演算程序一直迭帶, 得到越來越精確的解,  
類似固定點定理的想法, 求解的步驟, 形如 一個迭代函數:

x(k)\=Tx(k−1)+c,where x0 is some initial vector. x^{(k)}=T x^{(k-1)} + c , \\text{where } x^0 \\text{ is some initial vector}. x(k)\=Tx(k−1)+c,where x0 is some initial vector.  
通過輸入一個任意或適當之起始向量 x0x^0x0, 不斷進行迭代, 得到越來越精確的近似解.  
直接法就不是逐步逼近, 而是透過一定計算步驟之後就得到精確解, 例如 中學熟知的 Gauss Elimination(高斯消去法), Gauss-Jordan 等等.

**Ref:** R. L. Burden, J. D. Faires, Numerical analysis, Brooks/Cole, 7th ed., 2001.

Jacobi iterated method
======================

以下用 GeoGebra 繪製 Jacobi iterated 流程的說明圖,  
![Jacobi iterated method GeoGebra 呈現](https://i-blog.csdnimg.cn/blog_migrate/945a8d138dcc3c05facee3f26e977b56.jpeg#pic_center)

注意, 下圖第 2 步驟的符號有打錯, 待作者修正  
![Jacobi iterated method GeoGebra 呈現 滑桿](https://i-blog.csdnimg.cn/blog_migrate/92da6ea378ab9f2e11d6020839d6d720.jpeg#pic_center)

我們先參考 codesansar 站的 程式碼

Ref: https://www.codesansar.com/numerical-methods/python-program-jacobi-iteration-method.htm [link](https://www.codesansar.com/numerical-methods/python-program-jacobi-iteration-method.htm)

    # JacobiMethod_Codesansar.py
    # Python Source Code: Jacobi Method
    # Defining equations to be solved
    # in diagonally dominant form
    # Ex: 將以下的 codes 改成 input 一個  numpy array(n by n) 20220130 
    
    # 20x + y - 2z = 17
    # 3x + 20y -z = -18
    # 2x - 3y + 20z = 25
    
    f1 = lambda x,y,z: (17-y+2*z)/20
    f2 = lambda x,y,z: (-18-3*x+z)/20
    f3 = lambda x,y,z: (25-2*x+3*y)/20
    
    # Initial setup
    x0 = 0
    y0 = 0
    z0 = 0
    count = 1
    e1 = 100
    e2 = 100
    e3 = 100
    
    # Reading tolerable error
    e = float(input('Enter tolerable error: '))
    
    # Implementation of Jacobi Iteration
    print('\nCount\tx\ty\tz\n')
    
    #condition = True
    condition = e1>e and e2>e and e3>e
    
    while condition:
        x1 = f1(x0,y0,z0)
        y1 = f2(x0,y0,z0)
        z1 = f3(x0,y0,z0)
        print('%d\t%0.4f\t%0.4f\t%0.4f\n' %(count, x1,y1,z1))
        e1 = abs(x0-x1);
        e2 = abs(y0-y1);
        e3 = abs(z0-z1);
    
        x0 = x1
        y0 = y1
        z0 = z1
        
        condition = e1>e and e2>e and e3>e
        
        count += 1
    
    # 20210321 test
    ##>>> 
    ##= RESTART: C:\data\NEW\網路免費軟體資料\Python教學\Python科學計算\線性代數\聯立方程式的解法3_JacobiIterated\JacobiMethod_Codesansar.py
    ##Enter tolerable error: 0.000001
    ##
    ##Count	x	y	z
    ##
    ##1	0.8500	-0.9000	1.2500
    ##
    ##2	1.0200	-0.9650	1.0300
    ##
    ##3	1.0012	-1.0015	1.0032
    ##
    ##4	1.0004	-1.0000	0.9996
    ##
    ##5	1.0000	-1.0001	1.0000
    ##
    ##6	1.0000	-1.0000	1.0000
    ##
    ##7	1.0000	-1.0000	1.0000
    
    

**Ex:** 將以上的 codes 改成 input 一個 numpy array(n by n).

Gauss-Seidel iterated method
============================

我們先參考 codesansar 站的 程式碼

Ref: https://www.codesansar.com/numerical-methods/python-program-gauss-seidel-iteration-method.htm [link](https://www.codesansar.com/numerical-methods/python-program-gauss-seidel-iteration-method.htm)

    # Ref: https://www.codesansar.com/numerical-methods/python-program-gauss-seidel-iteration-method.htm
    # GaussSeidel_Codesansar.py
    # Python Source Code: Gauss Seidel Method
    
    # Gauss Seidel Iteration
    
    # Defining equations to be solved
    # in diagonally dominant form
    f1 = lambda x,y,z: (17-y+2*z)/20
    f2 = lambda x,y,z: (-18-3*x+z)/20
    f3 = lambda x,y,z: (25-2*x+3*y)/20
    
    # Initial setup
    x0 = 0
    y0 = 0
    z0 = 0
    count = 1
    
    # Reading tolerable error
    e = float(input('Enter tolerable error: '))
    
    # Implementation of Gauss Seidel Iteration
    print('\nCount\tx\ty\tz\n')
    
    condition = True
    
    while condition:
        x1 = f1(x0,y0,z0)
        # 與 Jacobi 不同之處在 Jacobi是 y1 = f2(x0,y0,z0)
        # Gauss Seidel 是 y1 = f2(x1,y0,z0), i.e., 立即使用新的 x1
        # 20201225
        y1 = f2(x1,y0,z0)
        z1 = f3(x1,y1,z0)
        print('%d\t%0.4f\t%0.4f\t%0.4f\n' %(count, x1,y1,z1))
        e1 = abs(x0-x1);
        e2 = abs(y0-y1);
        e3 = abs(z0-z1);
        
        count += 1
        x0 = x1
        y0 = y1
        z0 = z1
        
        condition = e1>e and e2>e and e3>e
    
    print('\nSolution: x=%0.3f, y=%0.3f and z = %0.3f\n'% (x1,y1,z1))
    
    
    ##>>> 
    ##= RESTART: C:\Users\user\Desktop\202102上課\聯立方程式的解法4_GaussSeidel\GuassSeidel_Codesansar.py
    ##Enter tolerable error: 0.00001
    ##
    ##Count	x	y	z
    ##
    ##1	0.8500	-1.0275	1.0109
    ##
    ##2	1.0025	-0.9998	0.9998
    ##
    ##3	1.0000	-1.0000	1.0000
    ##
    ##4	1.0000	-1.0000	1.0000
    ##
    ##
    ##Solution: x=1.000, y=-1.000 and z = 1.000
    
    

References
==========

*   R. L. Burden, J. D. Faires, Numerical analysis, Brooks/Cole, 7th ed., 2001.
    
*   https://www.codesansar.com/numerical-methods/python-program-jacobi-iteration-method.htm [link](https://www.codesansar.com/numerical-methods/python-program-jacobi-iteration-method.htm)
    
*   Clever B Moler, Numerical computing with Matlab  
    **Moler的書: Ch2 線性代數**
    
*   Python Numpy全世界最長基礎教程最適合小白學習 還詳細很全速拿, https://twgreatdaily.com/AhWyTG8BMH2\_cNUgWU4g.html [link](https://twgreatdaily.com/AhWyTG8BMH2_cNUgWU4g.html).
    
*   推薦: 這裡有很具體的指令用法, 用在線性代數課程上: 陳擎文教學網：python解線性代數, https://acupun.site/lecture/linearAlgebra/index.htm [link](https://acupun.site/lecture/linearAlgebra/index.htm)
    
*   https://www.codesansar.com/numerical-methods/gauss-jordan-method-python-program-output.htm [link](https://www.codesansar.com/numerical-methods/gauss-jordan-method-python-program-output.htm)  
    有現成的數值計算的Python codes
    
*   河西朝雄