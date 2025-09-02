 ---
title: "2015 Using heuristic algorithms to solve the scheduling problems with job-dependent and machine-dependent learning effects"
collection: publications
category: manuscripts
permalink: /publication/2015-08-01-heuristic-algorithms-scheduling
excerpt: 'This paper addresses scheduling problems incorporating both job-dependent and machine-dependent learning effects using heuristic algorithms.'
date: 2015-08-01
venue: 'Journal of Intelligent Manufacturing'
paperurl: 'https://sso.nknu.edu.tw/previewPdf.aspx?cPathAndFileName=%5cNknuTeacher%5c1673%5cC_Book1%5c20160801133751_IJM%e6%8e%a5%e5%8f%97%e8%88%87%e6%86%b2%e5%bf%a0201308.pdf'
citation: 'Peng-Jen Lai and Hsien-Chung Wu. (2015). &quot;Using heuristic algorithms to solve the scheduling problems with job-dependent and machine-dependent learning effects.&quot; <i>Journal of Intelligent Manufacturing</i>. Volume 26, Issue 4, pp 691-701.'
share: true
---
從 Logo 海龜繪圖 學習 Python - 高中彈性課程系列 7 遞歸 recursive, 碎形(分形 fractal), 藝術畫 

**Goal: 藉由有趣的「海龜繪圖」學會基礎的 Python 程式設計**  
本課程帶領同學以 Python 實現 Logo 烏龜繪圖，藉由有趣的「烏龜繪圖」學會基礎的 Python 程式設計

* * *

### 文章目录

*   [(原 part2 之開始)](#_part2__10)

*   [5 遞歸 recursive 之介紹](#5__recursive__11)

*   [5.1 Python recursive 遞迴函數的寫法以 2n2^n2n 為例](#51_Python___recursive___2n__22)
*   [5.2 用 for 寫一個累加的程式, 再用 recursive 的方法寫一個累加的程式](#52___for___recursive__217)
*   [5.3 用 for 寫一個產生Fibonacci sequence 費氏數列的程式, 再用 recursive 的方法寫一個產生Fibonacci sequence 費氏數列的程式](#53___for_Fibonacci_sequence___recursive_Fibonacci_sequence__310)
*   [5.4 觀摩 turtle module demo 中與碎形有關的部分: forest, fractal curves, lindenmayer, tree 等](#54___turtle_module_demo__forest_fractal_curves_lindenmayer_tree__403)

*   [6 以遞迴語法畫圓內部層層嵌套圓](#6__405)

*   [6.1 以遞迴語法畫圓內部層層嵌套一個圓](#61__407)
*   [6.2 以遞迴語法畫 chaos 中的吸子: 圓內部層層嵌套兩個圓](#62__chaos___449)

*   [7 Fractal tree 碎形樹- recursive 之應用](#7_Fractal_tree__recursive__505)

*   [7.1 最簡單 2 叉碎形樹, 樹枝夾角為 45 度](#71__2___45__532)
*   [7.2 樹枝夾角為 可調整](#72___617)
*   [7.3 樹枝夾角改為隨機擾動](#73__725)
*   [7.4 左右分枝不同的收縮率](#74__806)
*   [Ex 左右分枝的長度收縮率 隨機擾動](#Ex___877)

*   [8 Von Koch Curve 寇赫雪花碎形曲線- recursive 之應用](#8_Von_Koch_Curve__recursive__881)
*   [9\. 遞迴 recursive 與 疊代 iterated (迴圈 for loop) 是否可以互相轉換?](#9__recursive___iterated__for_loop__931)
*   [10\. Python 物件導向介紹](#10_Python__988)

*   [起手式: 定義一個類, \*\*class\*\* 類名稱 \_\_:\_\_](#__class_______1003)
*   [第二式: 點語法](#__1025)
*   [第三式: 初始化之方法 \*\*\\\_\\\_init\_\_ ( )\*\*](#____init_____1037)

*   [11\. 觀摩與解析 Python turtle module demo 中碎形有關的 codes, 的物件導向的設計](#11__Python_turtle_module_demo__codes__1195)
*   [12\. 海龜繪圖與藝術畫](#12__1197)

*   [12.1 海龜繪圖畫 隨機線段 藝術](#121____1204)
*   [12.2 海龜繪圖畫 板塊 藝術](#122____1305)
*   [12.3 海龜繪圖模擬 紫雨無聲落下 (如何讓多隻海龜一起移動?)](#123____1504)

* * *

(原 part2 之開始)
=============

5 遞歸 recursive 之介紹
------------------

參考維基的 recursive 之介紹  
Ref: https://zh.wikipedia.org/wiki/%E9%80%92%E5%BD%92  
[link](https://zh.wikipedia.org/wiki/%E9%80%92%E5%BD%92)

**費氏數列**是典型的遞迴案例：

F0\=0（初始值）{\\displaystyle F\_{0}=0}（初始值）F0​\=0（初始值）  
F1\=1（初始值）{\\displaystyle F\_{1}=1}（初始值）F1​\=1（初始值）  
Fn\=Fn−1+Fn−2,  對所有大於 1 的整數  n（遞迴定義）{\\displaystyle F\_{n}=F\_{n-1}+F\_{n-2}}, \\; 對所有大於\\:1\\:的整數 \\;n （遞迴定義）Fn​\=Fn−1​+Fn−2​,對所有大於1的整數n（遞迴定義）

### 5.1 Python recursive 遞迴函數的寫法以 2n2^n2n 為例

一般程式語言, recursive(遞迴) 函數的寫法, 就是有 **函數自己呼叫自己** 的結構.

以 2n2^n2n為例 , 2n2^n2n 也可以表達為遞迴案例,  
因為  
21\=2 2^1=221\=2  
2n\=2n−1⋅22^n=2^{n-1} \\cdot 2 2n\=2n−1⋅2.  
如果令 Fn\=2nF\_n=2^nFn​\=2n, 則有  
F1\=2（初始值）{\\displaystyle F\_1=2}（初始值）F1​\=2（初始值）  
Fn\=Fn−1⋅2,  for all integer  n\>1（遞迴定義）{\\displaystyle F\_n=F\_{n-1} \\cdot 2, \\;\\text{for all integer}\\; n>1} （遞迴定義）Fn​\=Fn−1​⋅2,for all integern\>1（遞迴定義）

如果把 FnF\_nFn​ 視為函數 F(n), 令Ｆ(n)= 2n2^n2n 或 FnF\_nFn​, 則有  
F(n)\=F(n−1)⋅2{\\displaystyle F(n) = F(n-1) \\cdot 2}F(n)\=F(n−1)⋅2  
則我們可以寫一個 Python 函數粗略如下

可以先寫一個虛擬碼的輪廓:

    定義一個函數 F(n):
    ，，，
    ，，，
    返回值為: F(n-1) * 2
    

再用 Python 的語法重寫, 粗略如下

    def F(n):
    (縮排) ,,,,,,,
    (縮排)  return F(n-1)*2
    

遞迴函數一定要定義起始值, 例如 n=1 時該函數回應之值, 才不會形成無窮遞迴,  
故必須加

    if n==1:
        return 2
    

完整程式如下

    # P-J Lai MATH NKNU 20201004
    
    def F(n):
        if n==1:
            return 2
        return F(n-1)*2
    

執行, 發現確實會回 2 的次方值

    >>> F(1)
    2
    >>> F(2)
    4
    >>> F(3)
    8
    >>> F(4)
    16
    >>> F(5)
    32
    

*   **以下可以等進階時再細看**

**Ex:** 輸入 F(-5), 觀察會發生甚麼事?  
**Hint:** 函數的輸入, 必須預期, 使用者可能會輸入不預期(不合法) 的內容, 如何防止這類事情?  
輸入 Fr(-5)  
程式會求 F(-6),  
求 F(-6), 會需要求 F(-7), F(-8), F(-9),  
則形成無窮往深處求遞迴,

搜尋: stable codes 穩健的程式碼  
使用

    try:
    縮排 指令
    except:
    縮排 發生異常時處理之程動作
    

或是用 **aasert (斷言)** 會較簡潔:  
`assert 真假值條件, '字串'`

**Ans:**  
以下的 recur2power( \* ), 就是上面的　F( \* )

    >>> recur2power(-5)
    Traceback (most recent call last):
      File "<pyshell#0>", line 1, in <module>
        recur2power(-5)
      File "C:\Users\user\Desktop\202009上課\新莊高中_彈性課程_高師大數學系_202003申請\recur2power.py", line 6, in recur2power
        return recur2power(n-1)*2
      File "C:\Users\user\Desktop\202009上課\新莊高中_彈性課程_高師大數學系_202003申請\recur2power.py", line 6, in recur2power
        return recur2power(n-1)*2
      File "C:\Users\user\Desktop\202009上課\新莊高中_彈性課程_高師大數學系_202003申請\recur2power.py", line 6, in recur2power
        return recur2power(n-1)*2
      [Previous line repeated 1021 more times]
      File "C:\Users\user\Desktop\202009上課\新莊高中_彈性課程_高師大數學系_202003申請\recur2power.py", line 4, in recur2power
        if n==1:
    RecursionError: maximum recursion depth exceeded in comparison
    
    

以下 try except 的寫法, 重寫 recur2power(n), 為 recur2power\_try\_except(n)  
輸入  
\>>>recur2power\_try\_except(-1)  
會發生無窮報錯的狀況

    # P-J Lai MATH NKNU 20201004
    # 以下 try except 的寫法會無窮報錯 20201014
    ##Input n is not positive!
    ##Input n is not positive!
    ##Input n is not positive!
    ##Input n is not positive!
    
    # 用 assert 會較適合
    
    
    def recur2power_try_except(n):
        try:
            if n==1:
                return 2
            return recur2power_try_except(n-1)*2
        except:
            print('Input n is not positive!')
    
    ##except:
    ##        print('Input n is not positive!')
    ##也可以換成
    ##except Exception:
    ##        print('Input n is not positive!')
    
    

    >>> recur2power_try_except(-1)
    Input n is not positive!
    Input n is not positive!
    Input n is not positive!
    Input n is not positive!
    ,,,,,,,
    

發現這個例子用 **assert** 較適合  
以下 assert 的寫法, 重寫 recur2power(n), 為 recur2power\_assert(n)

    # P-J Lai MATH NKNU 20201004
    # 用 try except 的寫法會無窮報錯 20201014
    
    # 用 assert 會較適合
    
    def recur2power_assert(n):
        assert n > 0, '輸入之 n 必須是正數'
        if n==1: 
            return 2
        return recur2power_assert(n-1)*2
    

    >>> recur2power_assert(3)
    8
    >>> recur2power_assert(-1)
    Traceback (most recent call last):
      File "<pyshell#3>", line 1, in <module>
        recur2power_assert(-1)
      File "C:/Users/user/Desktop/202009上課/新莊高中_彈性課程_高師大數學系_202003申請/recur2power_assert.py", line 7, in recur2power_assert
        assert n > 0, '輸入之 n 必須是正數'
    AssertionError: 輸入之 n 必須是正數
    

**Ex:** 輸入recur2power\_assert(5/2), 觀察會發生甚麼事?  
能否改寫, 使函數可以偵測輸入是否為整數?

    >>> recur2power_assert(5/2)
    Traceback (most recent call last):
      File "<pyshell#6>", line 1, in <module>
        recur2power_assert(5/2)
      File "C:/Users/user/Desktop/202009上課/新莊高中_彈性課程_高師大數學系_202003申請/recur2power_assert.py", line 10, in recur2power_assert
        return recur2power_assert(n-1)*2
      File "C:/Users/user/Desktop/202009上課/新莊高中_彈性課程_高師大數學系_202003申請/recur2power_assert.py", line 10, in recur2power_assert
        return recur2power_assert(n-1)*2
      File "C:/Users/user/Desktop/202009上課/新莊高中_彈性課程_高師大數學系_202003申請/recur2power_assert.py", line 10, in recur2power_assert
        return recur2power_assert(n-1)*2
      File "C:/Users/user/Desktop/202009上課/新莊高中_彈性課程_高師大數學系_202003申請/recur2power_assert.py", line 7, in recur2power_assert
        assert n > 0, '輸入之 n 必須是正數'
    AssertionError: 輸入之 n 必須是正數
    

*   **以上可以等進階時再細看**

**Ex:** 用 for 重寫以上 2 的次方之程式.

### 5.2 用 for 寫一個累加的程式, 再用 recursive 的方法寫一個累加的程式

**Q:** 寫一個函數, 對輸入的正整數 n, return 1+2+3⋯\\cdots⋯+n 的值  
**Ans:**  
**A. 用 for 寫**  
codes 如下

    # P-J Lai MATH NKNU 20201004
    
    def SUM(n):
        temp = 0
        for i in range(1, n+1):
            temp = temp + i
    
        return temp
    

執行累加 1 到 10, 跟 累加 1 到 100

    >>> SUM(10)
    55
    >>> SUM(100)
    5050
    

* * *

另一種用內建指令的方式: **sum(range(1,n+1))**

    def sumRange(n):
    	return sum(range(1,n+1))
    

執行

    >>> sumRange(10)
    55
    >>> sumRange(100)
    5050
    

* * *

**B. 用 recursive 的方法寫**  
用累加的數學形態觀察  
令 summation 的符號為  
∑k\=1nk\=1+2+3⋯+n−−−−−−−(1) \\sum\_{k=1}^{n} k= 1+2+3 \\cdots+n -------(1) k\=1∑n​k\=1+2+3⋯+n−−−−−−−(1)  
因為有  
1+2+3⋯+n\=(1+2+3⋯+n−1)+n\=∑k\=1n−1k+n−−−−−−−−−−−−−−−−−−(2) 1+2+3 \\cdots+n = (1+2+3 \\cdots+n -1)+n= \\sum\_{k=1}^{n-1} k + n\\\\ ------------------(2) 1+2+3⋯+n\=(1+2+3⋯+n−1)+n\=k\=1∑n−1​k+n−−−−−−−−−−−−−−−−−−(2)  
則有  
∑k\=1nk\=(∑k\=1n−1k)+n−−−−−−−−−−−(3) \\sum\_{k=1}^{n} k=( \\sum\_{k=1}^{n-1} k )+ n -----------(3) k\=1∑n​k\=(k\=1∑n−1​k)+n−−−−−−−−−−−(3)  
如果我們將 ∑k\=1nk\\sum\_{k=1}^{n} k∑k\=1n​k 視為一個 n 的函數, 取名為 sumRecu(n), 則可以把以上(2)重寫為  
sumRecu(n)\=sumRecu(n−1)+n \\bold{sumRecu(n) = sumRecu(n-1) + n}sumRecu(n)\=sumRecu(n−1)+n  
或是用大家習慣的遞迴定義方式:  
sumRecu(1)\=1（初始值）{\\displaystyle sumRecu(1)=1}（初始值）sumRecu(1)\=1（初始值）  
sumRecu(n)\=sumRecu(n−1)+n,  for all integern\>1（遞迴定義）{\\displaystyle sumRecu(n)=sumRecu(n-1)+n, \\;\\text{for all integer} n>1} （遞迴定義）sumRecu(n)\=sumRecu(n−1)+n,for all integern\>1（遞迴定義）  
則參考上節, 2 的次方 ( 2n2^n2n), 那個例子, 把recur2power(n) 視為 2n2^n2n, 遞迴函數就可以很快地寫下,  
我們可以寫一個遞迴函數粗略如下

def **recursiveSum(n)**:  
縮排 ⋯\\cdots⋯  
縮排 return **recursiveSum(n-1)\*2**

    def recursiveSum(n):
        ,,,
        return recursiveSum(n-1)*2
    

再加一個"定義起始值", recursiveSum(1) 當然為1, 故必須加

    if n==1:
        return 1
    

完整程式如下

    # P-J Lai MATH NKNU 20201004
    
    def recursiveSum(n):
        if n == 1:
            return 1
        return recursiveSum(n-1) + n
    

執行如下

    >>> recursiveSum(10)
    55
    >>> recursiveSum(100)
    5050
    

**Ex:** 用 for 寫一個累乘的程式, 再用 recursive 的方法寫一個累乘的程式

### 5.3 用 for 寫一個產生Fibonacci sequence 費氏數列的程式, 再用 recursive 的方法寫一個產生Fibonacci sequence 費氏數列的程式

**費氏數列**是典型的遞迴案例：

F0\=0（初始值）{\\displaystyle F\_{0}=0}（初始值）F0​\=0（初始值）  
F1\=1（初始值）{\\displaystyle F\_{1}=1}（初始值）F1​\=1（初始值）  
Fn\=Fn−1+Fn−2,  對所有大於 1 的整數  n（遞迴定義）{\\displaystyle F\_{n}=F\_{n-1}+F\_{n-2}}, \\; 對所有大於\\:1\\:的整數 \\;n （遞迴定義）Fn​\=Fn−1​+Fn−2​,對所有大於1的整數n（遞迴定義）

**費氏數列**是典型的遞迴案例：

F(0)\=0（初始值）{\\displaystyle F(0)=0}（初始值）F(0)\=0（初始值）  
F(1)\=1（初始值）{\\displaystyle F(1)=1}（初始值）F(1)\=1（初始值）  
F(n)\=F(n−1)+F(n−2),  對所有大於 1 的整數  n（遞迴定義）{\\displaystyle F(n)=F(n-1)+F(n-2)}, \\; 對所有大於\\:1\\:的整數 \\;n （遞迴定義）F(n)\=F(n−1)+F(n−2),對所有大於1的整數n（遞迴定義）

    # P-J Lai MATH NKNU 20201004
    
    def recurFibonacci(n):
        if n == 0 or n==1:
            return 1
        return recurFibonacci(n-1) + recurFibonacci(n-2)
    

    >>> for i in range(0,11):
    	print(recurFibonacci(i))
    
    	
    1
    1
    2
    3
    5
    8
    13
    21
    34
    55
    89
    

**for 的寫法:**

    # P-J Lai MATH NKNU 20201004
    
    def forFibonacci(n):
        if n ==1 or n==2:
            return 1
        F_prev2 = 1
        F_prev1 = 1
        for i in range(3,n+1):
            #F_prev2, F_prev1 =F_prev1, F_prev2 + F_prev1
            temp = F_prev2
            F_prev2 = F_prev1
            F_prev1 = temp + F_prev1
    
        return F_prev1
    

或是

    # P-J Lai MATH NKNU 20201004
    
    def forFibonacci(n):
        if n ==1 or n==2:
            return 1
        F_prev2 = 1
        F_prev1 = 1
        for i in range(3,n+1):
            F_prev2, F_prev1 = F_prev1, F_prev2 + F_prev1
           
        return F_prev1
    

    >>> for i in range(0,11):
    	print(forFibonacci(i))
    
    	
    1
    1
    1
    2
    3
    5
    8
    13
    21
    34
    55
    

### 5.4 觀摩 turtle module demo 中與碎形有關的部分: forest, fractal curves, lindenmayer, tree 等

6 以遞迴語法畫圓內部層層嵌套圓
----------------

### 6.1 以遞迴語法畫圓內部層層嵌套一個圓

![recursive_2_circle](https://img-blog.csdnimg.cn/202010222343491.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

    # recursive circles, 遞迴內嵌圓
    # By Prof. P-J Lai MATH NKNU 20201020
    
    import turtle
    import random
    
    T = turtle.Turtle()
    T.shape('turtle')
    T.speed(0)
    T.fillcolor('green')
    T.pencolor('red')
    T.pensize(3)
    turtle.bgcolor('black')
    turtle.tracer(0,0)
    
    T.penup()
    T.goto(0, -200)
    T.pendown()
    
    def recursive_1_circle(radius, depth):
        if depth < 1:
            return
        
        T.circle(radius)
    
        T.penup()
        T.goto(0, -200)
        T.pendown()
        recursive_1_circle(radius*1/2,depth-1)
    
        return
        
    recursive_1_circle(200,20)
    
    

### 6.2 以遞迴語法畫 chaos 中的吸子: 圓內部層層嵌套兩個圓

![recursive_2_circle](https://img-blog.csdnimg.cn/20201022234626185.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

    
    # recursive circles, 遞迴內嵌圓
    # By Prof. P-J Lai MATH NKNU 20201020
    
    import turtle
    import random
    
    T = turtle.Turtle()
    T.shape('turtle')
    T.speed(0)
    T.fillcolor('green')
    T.pencolor('red')
    T.pensize(2)
    turtle.bgcolor('black')
    turtle.tracer(0,0)
    #pos=(-200,0)
    
    
    
    def recursive_2_circle(pos,radius, depth):
        if depth < 1:
            return
    
        
        T.penup()
        T.goto(pos)
        T.pendown()
        T.circle(radius)
        posLocal=(pos[0]+1/2*radius, pos[1]+1/2*radius)
        #pos=T.position()
        
        
        T.penup()
        T.goto(posLocal)
        T.pendown()
        #recursive_2_circle(posLocal, radius*1/2, depth-1)
        recursive_2_circle(posLocal, radius*1/3, depth-1)
    
        posLocal=(pos[0]-1/2*radius, pos[1]+1/2*radius)
        T.penup()
        T.goto(posLocal)
        T.pendown()
        #recursive_2_circle(posLocal, radius*1/2, depth-1)
        recursive_2_circle(posLocal, radius*1/3, depth-1)
    
        return
        
    recursive_2_circle((0,-200),200,5)
    
    

7 Fractal tree 碎形樹- recursive 之應用
---------------------------------

觀摩 YouTube上講解以 JavaScript 語言模擬"碎形樹" 的影片  
Ref: https://www.youtube.com/watch?v=0jjeOYMjmDU  
[link](https://www.youtube.com/watch?v=0jjeOYMjmDU)

**Ex:** 你可以用 Python 的 turtle module 重現一次  
“The Coding Train” 系列中, 模擬"碎形樹" 的動畫嗎?  
![Coding Challenge #14: Fractal Trees - Recursive](https://img-blog.csdnimg.cn/20201005132323443.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

Python turtle 的 demo 也有:  
![turtleDemo_forest_2_IDLE](https://img-blog.csdnimg.cn/20200830165818397.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)  
較單純沒有隨機的樹  
![Python_demo_tree](https://img-blog.csdnimg.cn/20201007160228421.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

本篇作者模仿 “The Coding Train” 的用色呈現,  
tree1\_angle\_headingLocal\_20201011.py  
背景色設為黑色  
`turtle.bgcolor('black')`  
`T.pencolor('white')`  
codes 可以看下面 7.2  
tree1\_angle\_headingLocal\_20201011.py  
把背景色修改一下  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201107201127667.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

### 7.1 最簡單 2 叉碎形樹, 樹枝夾角為 45 度

因為demo 的源碼較不好讀,  
以下我們試著用自己的較單純的設計方法去實現簡單2叉碎形樹的繪製,

以下是粗略的結構

    # By Prof. P-J Lai MATH NKNU 20201007
    # 以下是沒有隨機的版本
    
    
    import turtle
    T = Turtle()
    
    def tree1(pos, length, angle, r):
        if length < 0.5:
            return
        
        T.goto(pos)
        T.lt(angle)
        T.fd(length)
        
        tree1(pos?, length*r, angle=angle-45)
        tree1(pos?, length*r, angle=angle+45)
    
        return
    

以下補上codes 細節  
如果自己試著寫, 會發現相當困難, 牽涉到遞迴的執行, 是層層往深處呼叫, 直到最底層, 才獲得答案, 才一層一層往回給出前一層之解答,  
**所以必須先記錄往下疊代前, 當下的位置與角度** ( 此處如果你沒有自己試著寫, 並試著跑第一層第二層看看執行結果, 找出錯誤的原因, 嘗試錯誤, 你會不知道這段話的意義!)

    # By Prof. P-J Lai MATH NKNU 20201007
    # 修改自河西朝雄的 C 程式碼
    # 以下是沒有隨機的版本
    
    import turtle
    T = turtle.Turtle()
    r = 0.7
    #T.lt(90)
    
    def tree1(pos, length, angle):
        if length < 10:
            return
        
        T.setheading(angle)
        T.fd(length)
        pos = T.position()
        
        angle1=angle-45
        tree1(pos, length*r, angle1)
    
        
        angle2=angle+45
        T.penup()
        T.goto(pos)
        T.pendown()
        tree1(pos, length*r, angle2)
    
        return
    
    tree1((0,0),100, 0)
    

執行結果  
![tree1_角度正確版本_goto_setheading](https://img-blog.csdnimg.cn/2020100921330069.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)  
把顏色跟角度調整一下  
程式碼改一下

    import turtle
    T = turtle.Turtle()
    r = 0.7
    #T.lt(90)
    T.shape('turtle')
    T.pencolor('red')
    T.pensize(3)
    T.fillcolor("blue")
    ,,,,
    
    tree1((0,0),100, 90)
    
    

以下為往正北出發, 樹枝夾角=45  
![tree1_角度正確版本_正上_紅色](https://img-blog.csdnimg.cn/20201011114104430.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

### 7.2 樹枝夾角為 可調整

以下我們將程式碼修改成增加夾角可以調整, 不一定都要是45度,  
函數增加一個輸入引數  
tree1(pos, length, headingAngle, angle)

結果發現錯誤, 原因在**全域變數**之問題

以下為往正北出發, 樹枝夾角=30, codes有 bug 之圖  
![tree1_增加夾角_錯誤_全域變數之問題](https://img-blog.csdnimg.cn/20201011121503533.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)  
以下為錯誤之版本, 沒有增加局部變數 headingAngle1, headingAngle2  
tree1\_增加夾角\_錯誤\_全域變數之問題.py

    # By Prof. P-J Lai MATH NKNU 20201007
    # 修改自河西朝雄的 C 程式碼
    # 增加夾角的引數
    # 以下是沒有隨機的版本
    
    
    import turtle
    T = turtle.Turtle()
    r = 0.7
    #T.lt(90)
    T.shape('turtle')
    T.pencolor('red')
    T.pensize(3)
    T.fillcolor("blue")
    
    
    def tree1(pos, length, headingAngle, angle):
        if length < 10:
            return
        
        T.setheading(headingAngle)
        T.fd(length)
        pos = T.position()
        
        headingAngle=headingAngle-45
        #headingAngle1=headingAngle-angle
        tree1(pos, length*r, headingAngle1, angle)
    
        
        headingAngle= headingAngle + angle
        T.penup()
        T.goto(pos)
        T.pendown()
        tree1(pos, length*r, headingAngle2, angle)
    
        return
    
    #tree1((0,0),100, 0)
    tree1((0,0),100, 90, 30)
    
    

**修正後:**  
以下是修訂之後的版本, 增加2個局部變數 headingAngle1, headingAngle2, 會紀錄當下的 heading angle (海龜的前進方向)

以下為往正北出發, 樹枝夾角=30, codes 正確 之圖  
![tree1_增加夾角_正確_全域變數之問題](https://img-blog.csdnimg.cn/20201011125915211.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

tree1\_angle\_headingLocal\_20201011.py

    # By Prof. P-J Lai MATH NKNU 20201007
    # 修改自河西朝雄的 C 程式碼
    # 增加夾角的引數
    # 以下是沒有隨機的版本
    
    
    import turtle
    T = turtle.Turtle()
    r = 0.7
    #T.lt(90)
    T.shape('turtle')
    T.pencolor('red')
    T.pensize(3)
    T.fillcolor("blue")
    
    
    def tree1(pos, length, headingAngle, angle):
        if length < 10:
            return
    
        headingLocal = headingAngle
        T.setheading(headingLocal)
        T.fd(length)
        pos = T.position()
        
        #headingAngle=headingAngle-45
        headingLocal_1=headingLocal - angle
        tree1(pos, length*r, headingLocal_1, angle)
    
        headingLocal_2= headingLocal + angle
        T.penup()
        T.goto(pos)
        T.pendown()
        tree1(pos, length*r, headingLocal_2, angle)
    
        return
    
    #tree1((0,0),100, 0)
    tree1((0,0),100, 90, 30)
    
    
    

### 7.3 樹枝夾角改為隨機擾動

樹枝夾角增加隨機擾動, 擾動值範圍 = 夾角的 0 ~ 0.7倍  
codes 增加:

    if random.randint(0,1)>0:
            randomPerturbation = random.random()*0.7
        else:
            randomPerturbation = -random.random()*0.7
            
    headingLocal_1=headingLocal - angle*(1+randomPerturbation) 
        
    tree1_random_angle(pos, length*r, headingLocal_1, angle)
    
    

![tree1_夾角隨機擾動_](https://img-blog.csdnimg.cn/20201011193918921.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

tree1\_random\_angle\_20201011.py

    # By Prof. P-J Lai MATH NKNU 20201007
    # 修改自河西朝雄的 C 程式碼
    # 增加夾角的引數
    # 以下是樹枝夾角改為隨機擾動的版本
    
    
    import turtle
    import random
    T = turtle.Turtle()
    r = 0.7
    #T.lt(90)
    T.shape('turtle')
    T.pencolor('red')
    T.pensize(3)
    T.fillcolor("blue")
    
    
    def tree1_random_angle(pos, length, headingAngle, angle):
        if length < 10:
            return
    
        headingLocal = headingAngle
        T.penup()
        T.goto(pos)
        T.pendown()
        T.setheading(headingLocal)
        T.fd(length)
        pos = T.position()
        
        #headingAngle=headingAngle-45
    
        if random.randint(0,1)>0:
            randomPerturbation = random.random()*0.7
        else:
            randomPerturbation = -random.random()*0.7
            
        headingLocal_1=headingLocal - angle*(1+randomPerturbation) 
        
        tree1_random_angle(pos, length*r, headingLocal_1, angle)
    
        if random.randint(0,1)>0:
            randomPerturbation = random.random()*0.7
        else:
            randomPerturbation = -random.random()*0.7
    
        headingLocal_2= headingLocal + angle*(1+randomPerturbation)
        T.penup()
        T.goto(pos)
        T.pendown()
        tree1_random_angle(pos, length*r, headingLocal_2, angle)
    
        return
    
    #tree1((0,0),100, 0)
    tree1_random_angle((0,0),100, 90, 45)
    
    

以下是 長 200, 夾角 45 隨機小擾動, 起始位置 = (0, -300)

![tree1_random_angle((0,-300),200, 90, 45)](https://img-blog.csdnimg.cn/20201011194849238.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

### 7.4 左右分枝不同的收縮率

以下參考河西朝雄的 ch8, 讓左右是不同的收縮率, 左邊的收縮率是右邊的 0.8 倍, 造成枝葉偏右的型態

\>>>tree1\_random\_angle\_diff\_length((0,-300),150, 90, 20)

![tree1_random_angle_左右不同縮率_右邊較長](https://img-blog.csdnimg.cn/20201011203526616.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)  
tree1\_random\_angle\_diff\_length(pos, length, headingAngle, angle)

    # By Prof. P-J Lai MATH NKNU 20201007
    # 修改自河西朝雄的 C 程式碼
    # 增加夾角的引數
    # 以下是樹枝夾角改為隨機擾動的版本
    # 以下參考河西朝雄的 ch8,  讓左右不同的縮收率, 左邊是右邊的0.8倍, 造成枝葉偏# 右的型態
    
    
    import turtle
    import random
    T = turtle.Turtle()
    right_ratio = 0.8
    left_ratio = 0.64
    #T.lt(90)
    T.shape('turtle')
    T.pencolor('red')
    T.pensize(2)
    T.fillcolor("blue")
    T.speed(0)
    turtle.tracer(0,0)
    
    
    def tree1_random_angle_diff_length(pos, length, headingAngle, angle):
        if length < 10:
            return
    
        headingLocal = headingAngle
        T.penup()
        T.goto(pos)
        T.pendown()
        T.setheading(headingLocal)
        T.fd(length)
        pos = T.position()
        
        #headingAngle=headingAngle-45
    
        if random.randint(0,1)>0:
            randomPerturbation = random.random()*0.7
        else:
            randomPerturbation = -random.random()*0.7
            
        headingLocal_1=headingLocal - angle*(1+randomPerturbation) 
        
        tree1_random_angle_diff_length(pos, length*right_ratio, headingLocal_1, angle)
    
        if random.randint(0,1)>0:
            randomPerturbation = random.random()*0.7
        else:
            randomPerturbation = -random.random()*0.7
    
        headingLocal_2= headingLocal + angle*(1+randomPerturbation)
        T.penup()
        T.goto(pos)
        T.pendown()
        tree1_random_angle_diff_length(pos, length*left_ratio, headingLocal_2, angle)
    
        return
    
    tree1_random_angle_diff_length((0,-300),150, 90, 20)
    
    

### Ex 左右分枝的長度收縮率 隨機擾動

**Ex:** 之前的 codes, 左右分枝的長度收縮率是在程式裡面直接給定, 例如, right\_ratio = 0.8, left\_ratio = 0.64,  
請同學改成, 左右分枝的長度收縮率有一個隨機擾動的範圍, 並觀察圖形是否更自然更有變化.

8 Von Koch Curve 寇赫雪花碎形曲線- recursive 之應用
----------------------------------------

修改河西朝雄 8-7 KochRei62.c

以下為遞迴 1 層  
![Sec8_7KochRei62_1層](https://img-blog.csdnimg.cn/20201012125409505.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

以下為遞迴 2 層

![Sec8_7KochRei62_2層](https://img-blog.csdnimg.cn/20201012125442602.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

以下為遞迴 5 層  
![Sec8_7KochRei62_5層](https://img-blog.csdnimg.cn/20201012124817567.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

    #2013/11/28  by Prof. P-J Lai MATH NKNU 修改河西朝雄8-7KochRei62之執行
    
    from turtle import *
    def koch(turtle, n,leng):   # Koch 遞迴的程序
        if (n==0):
            turtle.fd(leng)
        else: 
            koch(turtle,n-1,leng)
            turtle.lt(60)
            koch(turtle,n-1,leng)
            turtle.lt(-120)
            # self.rt(120 )
            koch(turtle,n-1,leng)
            turtle.lt(60)
            koch(turtle,n-1,leng)
        
    def main():
        T=Turtle()
        T.shape('turtle')
        T.color('blue','green')
        T.speed(0)
        #以下三行只是希望將烏龜的起始位置移到(-200,0)的地方
        #以利烏龜出現在視窗較適當的位置, 當length改變時, 或是層數n 改時, 
        #此起始位置還要自己再修改
    
        T.penup()
        T.goto(-600,-100)
        T.pendown()
        koch(T,5,5)
    
    main()
    
    

9\. 遞迴 recursive 與 疊代 iterated (迴圈 for loop) 是否可以互相轉換?
------------------------------------------------------

*   循環 (for, while loop) 效能很高, 但是遞迴 (recursive) 的程式碼結構簡潔一目了然 (假設你已經很懂遞迴的語法).
    
*   尾遞迴效能與循環接近
    

5 那裏我們舉了 2n2^n2n, 累加, 費氏數列, 它們 recursive 寫法與 loop 寫法是可以互相轉換, **但是對一般的狀況, 兩者是否確實等價的?**

在網路上查詢, 理論上是可以的, 但是在 知乎的文章:  
所有递归都可以改写成循环吗？  
https://www.zhihu.com/question/29373492  
[link](https://www.zhihu.com/question/29373492)  
有回答:  
栈底不可预见的时候，递归是无法有效地化为循环的。If you maintain your own stack it would be correct. Otherwise recursion can do things loops can’t, like walk a tree.\[http://c2.com/cgi/wiki?RecursionVsLoop\] [link](http://c2.com/cgi/wiki?RecursionVsLoop)

作者：高木端  
链接：https://www.zhihu.com/question/20418254/answer/15081000  
来源：知乎

較常見的是將遞迴改寫成**尾遞迴 tail-recursive**, 尾遞迴效能類似 loop, 有許多程式之編譯器 (C, JavaScript等) 會自動把遞迴的程式最佳化為尾遞迴.

*   **以下可以等進階時再細看**

可以參考Baidu百科, n!n!n! 的尾遞迴寫法:

Ref: https://baike.baidu.com/item/%E5%B0%BE%E9%80%92%E5%BD%92#reference-\[1\]-1439396-wrap [link](https://baike.baidu.com/item/%E5%B0%BE%E9%80%92%E5%BD%92#reference-%5B1%5D-1439396-wrap)

示例3-2：

/_facttail.c_/

#include"facttail.h"

/_facttail_/

int facttail(int n, int a)  
{

    /*Compute a factorialina tail - recursive manner.*/
     
    if (n < 0)
        return 0;    
    else if (n == 0)
        return 1;    
    else if (n == 1)
        return a;
    else
        return facttail(n - 1, n * a);
    

}

**Ex:** 將 5 那裏我們舉了 2n2^n2n, 累加, 費氏數列, 用尾遞迴改寫, 並比較尾遞迴, 遞迴, for loop 三種寫法 的效能差異.

*   **以上可以等進階時再細看**

10\. Python 物件導向介紹
------------------

*   Ref: Cory Althoff, The self-taught programmer, Python 編程無師自通,  
    gitHub上有原始碼, https://github.comcalthoff [link](httpsgithub.comcalthoff)  
    找  
    tstp/part2, ch12 paradigm編程泛式之後段,  
    tstp/part2, ch13 the\_four\_pillars\_of\_oop 物件導向之四大支柱,  
    tstp/part2, ch14 more\_object\_oriented\_programming 更多物件導向,  
    以上三章之codes, 有物件導向的說明程式碼

這本書的講解, 較簡單易懂, 初學者可以很快了解, 但是教進階的概念, 就缺少程式碼的示例, 可以再自行閱讀較完整的資料, 例如

*   Ref: Dusty Phillips, Pyhton3 object oriented programming, Pyhton3 面對對象編程, 電子工業.

類(class) 中的函數(function), 一般稱為 “方法 method”, 物件(object) 有時稱為實例(instance),

### 起手式: 定義一個類, **class** 類名稱 **:**

    class 類名稱:
        變數之定義或方法之定義
        ,,,,,,,,
        ,,,,,,,
    

以下定義一個 橘子 class,  
我們在 class 內定義一個方法 info(), 可以打印出一些基本訊息  
注意 , info() 必須至少有一個引數 self, 也就是 , 用  
**def info( self):**,

    class Orange:
        def info(self):
            print("Orange object created!")
    

產生一個 orange 物件的方法是執行 **foo1 = Orange()**,

    >>> foo1 = Orange()
    

### 第二式: 點語法

要讓 foo1 這個 orange 物件呼叫 info(), 打印出訊息, 就要用**點語法**  
**foo1.info()**

    >>> foo1.info()
    Orange object created!
    

### 第三式: 初始化之方法 **\_\_init\_\_ ( )**

可以定義一個初始化之方法 \_\_init\_\_ ( ) , 讓 每次’產生一個 orange 物件時, 就自動執行 打印出訊息 的動作.

定義一個初始化之方法 \_\_init\_\_ ( ), 每產生一個物件就會自動執行這個初始化方法 \_\_init\_\_ ( ) 的內容.  
(注意: 是雙下畫線, \_ \_init\_ \_ ( ) 在鍵盤輸入時是雙下畫線, 不要有空格 )

    def __init__(self):    
        方法的內容,,,,,
        ,,,,,
    

def **init**(self):  
  本方法之內容  
  ⋯\\cdots⋯

以下把 print(“Orange object created!”) 放在這個\_\_init\_\_ ( )內

    class Orange:
        def __init__(self):
            print("Orange object created!")
    

每當一產生一個 orange 物件, 就自動執行 打印出訊息 print(“Orange object created!”)

    >>> orange = Orange()
    Orange object created!
    

就不需要用點語法去取用 info(), 多一個動作.

* * *

可以在 \_\_init\_\_ ( ) 裡增加 重量weight 跟顏色color 的定義

    self.weight = 6
    self.color = 'orange'
    

    class Orange:
        def __init__(self):
            print("Orange object created!")
            self.weight = 6
            self.color = 'orange'
    
    orange = Orange()
    print(orange.weight)
    print(orange.color)
    print(orange)
    print(type(orange))
    
    >>> 
    = RESTART: C:\data\NEW\網路免費軟體資料\Python教學\Python書的札記\配套資源\Python編程無師自通_The Self-Taught Programmer_CoryAlthoff\资源\资源\tstp-master(Old one)\tstp-master\part_II\programming_paradigms\orange.py
    Orange object created!
    6
    orange
    <__main__.Orange object at 0x038D5D78>
    <class '__main__.Orange'>
    

Ex1: 產生一個物件, 之初始化動作

    class Orange:
        def __init__(self, weight, color):
            self.weight = weight
            self.color = color
            print("Orange object created!")
    
    orangeEx1 = Orange(10, 'yellow')
    print(orangeEx1.weight)
    print(orangeEx1.color)
    
    >>> 
    = RESTART: C:/data/NEW/網路免費軟體資料/Python教學/Python書的札記/配套資源/Python編程無師自通_The Self-Taught Programmer_CoryAlthoff/资源/资源/tstp-master(Old one)/tstp-master/part_II/programming_paradigms/orange_ex1_20201028.py
    Orange object created!
    10
    yellow
    

Ex4: 用點語法更改物件的變數內容

    class Orange:
        def __init__(self, weight, color):
            self.weight = weight
            self.color = color
            print("Orange object created!")
    
    an_orange = Orange(10, "dark orange")
    
    an_orange.weight = 100
    an_orange.color = "light orange"
    
    print(an_orange.weight)
    print(an_orange.color)
    
    
    >>> 
    = RESTART: C:\data\NEW\網路免費軟體資料\Python教學\Python書的札記\配套資源\Python編程無師自通_The Self-Taught Programmer_CoryAlthoff\资源\资源\tstp-master(Old one)\tstp-master\part_II\programming_paradigms\orange_ex4.py
    Orange object created!
    100
    light orange
    

orange\_rot.py  
增加一個腐爛值 mold

    class Orange():
        def __init__(self):
            """all weights are in oz"""
            self.weight = 6
            self.color = 'orange'
            self.mold = 0
    
        def rot(self, days, temperature):
            self.mold = days * (temperature * .1)
    
    orange = Orange()
    print(orange.mold)
    orange.rot(10, 98)
    print(orange.mold)
    
    >>> 
    = RESTART: C:\data\NEW\網路免費軟體資料\Python教學\Python書的札記\配套資源\Python編程無師自通_The Self-Taught Programmer_CoryAlthoff\资源\资源\tstp-master(Old one)\tstp-master\part_II\programming_paradigms\orange_rot.py
    0
    98.0
    

rectangle.py  
解釋類中可以定義多個方法

    class Rectangle():
        def __init__(self, width, length):
            self.length = length
            self.width = width
    
        def calculate_area(self):
            return self.width * self.length
    
        def change_size(self, width, length):
            self.width = width
            self.length = length
    
    rectangle = Rectangle(10, 20)
    print(rectangle.calculate_area())
    rectangle.change_size(20, 40)
    print(rectangle.calculate_area())
    
    >>> 
    = RESTART: C:\data\NEW\網路免費軟體資料\Python教學\Python書的札記\配套資源\Python編程無師自通_The Self-Taught Programmer_CoryAlthoff\资源\资源\tstp-master(Old one)\tstp-master\part_II\programming_paradigms\rectangle.py
    200
    800
    

11\. 觀摩與解析 Python turtle module demo 中碎形有關的 codes, 的物件導向的設計
-----------------------------------------------------------

12\. 海龜繪圖與藝術畫
-------------

Ref: 使用python成为藝術家, https://my.oschina.net/u/4531265/blog/4278176 [link](https://my.oschina.net/u/4531265/blog/4278176)

Ref: python图形绘制库turtle中文开发文档及示例大全  
https://blog.csdn.net/A757291228/article/details/105884899 [link](https://blog.csdn.net/A757291228/article/details/105884899)

### 12.1 海龜繪圖畫 隨機線段 藝術

平行線段的版本  
![random lines_parallel_水平_參考自R](https://img-blog.csdnimg.cn/20201102001704342.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

    # Ref: A Guide to the TurtleGraphics Package for R_入門例子
    # random lines
    # By Prof. P-J Lai MATH NKNU 20201012
    # parallel or angle 30 版本
    
    import turtle
    import random
    
    T = turtle.Turtle()
    T.shape('turtle')
    T.speed(0)
    T.pensize(5)
    turtle.bgcolor('black')
    #turtle.tracer(0,0)
    T.lt(30)
    
    for i in range(200):
        T.penup()
        T.goto(random.randint(-500,100),random.randint(-400,400))
        T.pendown()
        T.pencolor(random.random(),random.random(),random.random())
        T.fillcolor('green')
        
        T.fd(500)
        #T.lt(random.randint(0,360))
    

線段的角度是隨機的版本  
![randomLines_pensize3_PythonTurtle_1](https://img-blog.csdnimg.cn/20201017171022894.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)  
背景調成黑色  
![randomLines_pensize3_bgcolor_black_PythonTurtle_1](https://img-blog.csdnimg.cn/20201017171210827.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

    # random lines
    # By Prof. P-J Lai MATH NKNU 20201012
    
    import turtle
    import random
    
    T = turtle.Turtle()
    T.shape('turtle')
    T.speed(0)
    T.pensize(2)
    turtle.tracer(0,0)
    
    for i in range(500):
        T.penup()
        T.goto(random.randint(-300,300),random.randint(-300,300))
        T.pendown()
        T.pencolor(random.random(),random.random(),random.random())
        T.fillcolor('green')
        
        T.fd(500)
        T.lt(random.randint(0,360))
     
    

長度, 粗細, 也隨機  
random lines\_randomWidth\_randomLength\_5

    # Ref: A Guide to the TurtleGraphics Package for R_入門例子
    # random lines
    # By Prof. P-J Lai MATH NKNU 20201012
    
    import turtle
    import random
    
    T = turtle.Turtle()
    T.shape('turtle')
    T.speed(0)
    T.fillcolor('green')
    T.pensize(3)
    turtle.bgcolor('black')
    #turtle.tracer(0,0)
    penSizeList = [1,2,3,4,5]
    
    for i in range(600):
        T.penup()
        T.goto(random.randint(-400,400),random.randint(-400,400))
        T.pendown()
        T.pensize(random.choice(penSizeList))
        T.pencolor(random.random(),random.random(),random.random())
    
        #T.fd(500)
        T.fd(random.randint(50,600))
        T.lt(random.randint(0,360))
        
        
    
    

### 12.2 海龜繪圖畫 板塊 藝術

**此例子, 主要用到海龜蓋章的指令!**

以下用 Logo繪製之板塊藝術, 參考自 BFOIT  
Introduction to Computer Programming  
ref: http://guyhaas.com/bfoit/itp/Operators.html  
[link](http://guyhaas.com/bfoit/itp/Operators.html)

![Introduction to Computer Programming_板塊藝術](https://img-blog.csdnimg.cn/20200816212231546.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)  
我們試著用 Python 實作

以下是試做第一次之簡易版

流程設計:

*   先定義自己的板塊形狀
    
*   畫筆要先提起, 隨機跳躍, 再蓋章, 重複幾次  
    下圖是蓋章200次的結果
    

![PythonTurtle板塊藝術_試做1](https://img-blog.csdnimg.cn/20200816212916949.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

先定義自己的烏龜形狀, 改成長方形  
(以下用 s=turtle.Shape(“compound”) 太複雜, 後面會改成用 get\_poly()的方法)

    >>> import turtle
    >>> T=turtle.Turtle()
    >>> s=turtle.Shape("compound")
    >>> poly1=((0,0),(10,0),(10,15),(0,15))
    >>> s.addcomponent(poly1,"red","blue")
    >>> turtle.register_shape("myshape",s)
    >>> T.shape("myshape")
    >>> T.fd(200)
    

以下畫筆要先提起, 隨機跳躍, 再蓋章, 重複幾次

    >>> T.penup()
    >>> import random
    >>> T.goto(random.randint(1,200),random.randint(1,200))
    >>> T.stamp()
    (7,)
    >>> T.goto(random.randint(1,200),random.randint(1,200))
    >>> T.stamp()
    (8,)
    >>> T.goto(random.randint(1,200),random.randint(1,200))
    >>> T.goto(random.randint(1,200),random.randint(1,200))
    >>> T.stamp()
    (9,)
    >>> T.goto(random.randint(1,200),random.randint(1,200))
    >>> T.stamp()
    (10,)
    >>> T.goto(random.randint(1,200),random.randint(1,200))
    

寫成一個函數

polygon\_art\_1.py

    import turtle
    T=turtle.Turtle()
    s=turtle.Shape("compound")
    poly1=((0,0),(10,0),(10,15),(0,15))
    s.addcomponent(poly1,"red","blue")
    turtle.register_shape("myshape",s)
    T.shape("myshape")
    T.penup()
    
    import random
    for i in range(200):
        T.goto(random.randint(-200,200),random.randint(-200,200))
        T.stamp()
    

以下將板塊加大, 改成正方形,  
![PythonTurtle板塊藝術_試做2_加大](https://img-blog.csdnimg.cn/20200817134851861.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

    import turtle
    T=turtle.Turtle()
    s=turtle.Shape("compound")
    poly1=((0,0),(50,0),(50,50),(0,50))
    s.addcomponent(poly1,"red","blue")
    turtle.register_shape("myshape",s)
    T.shape("myshape")
    T.penup()
    
    import random
    for i in range(100):
        T.goto(random.randint(-200,200),random.randint(-200,200))
        T.stamp()
    

以下改成隨機顏色  
發現用 compound shape 可以結合數個多邊形, 但是顏色似乎不好更改,  
如果只有一個形狀, 可以用  
24.1.3.7. Special Turtle methods  
begin\_poly()  
end\_poly()  
register\_shape(“myshape”,get\_poly())  
較單純!  
官網的說明:  
24.1.3.7. Special Turtle methods  
turtle.begin\_poly()  
Start recording the vertices of a polygon. Current turtle position is first vertex of polygon.  
turtle.end\_poly()  
Stop recording the vertices of a polygon. Current turtle position is last vertex of polygon. This will be connected with the first vertex.  
turtle.get\_poly()  
Return the last recorded polygon.

    >>> turtle.home() 
    >>> turtle.begin_poly() 
    >>> turtle.fd(100) 
    >>> turtle.left(20) 
    >>> turtle.fd(30) 
    >>> turtle.left(60) 
    >>>turtle.fd(50) 
    >>> turtle.end_poly() 
    >>> p = turtle.get_poly() 
    >>> register_shape("myFavouriteShape", p) 
    

以下改成用  
get\_poly()的方法  
用法:  
begin\_poly()  
烏龜畫出一個多邊形  
end\_poly()  
再取名註冊成一個形狀  
register\_shape(“myshape”,get\_poly())  
T.shape(“myShape”)

發現順利試出  
![polygon_art_get_poly()_color_4](https://img-blog.csdnimg.cn/20200817160550344.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

    # By Prof. P-J Lai MATH NKNU 20200817
    # polygon_art_get_poly()_color_4.py
    # 發現用 compound shape 可以結合數個多邊形, 但是顏色似乎不好更改,
    ##如果只有一個形狀, 可以用 
    ##24.1.3.7. Special Turtle methods
    ##begin_poly()
    ##end_poly()
    ##register_shape("myshape",get_poly())
    ##T.shape("myShape")
    ##較單純!
    
    
    import turtle
    import random
    T=turtle.Turtle()
    
    T.home()
    T.begin_poly()
    T.fd(50)
    T.lt(90)
    T.fd(50)
    T.lt(90)
    T.fd(50)
    T.lt(90)
    T.fd(50)
    T.lt(50)
    T.end_poly()
    myPoly=T.get_poly()
    turtle.register_shape("myShape",myPoly)
    T.shape("myShape")
    
    T.reset()
    T.penup()
    for i in range(100):
        T.color((random.random(),random.random(),random.random()))
        T.goto(random.randint(-200,200),random.randint(-200,200))
        T.stamp()
    

**Ex:** 參考 BFOIT 站  
Introduction to Computer Programming  
ref: http://guyhaas.com/bfoit/itp/Operators.html  
之圖  
![BIG_DrawRandomBoxes3](https://img-blog.csdnimg.cn/2020092110575292.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)  
將以上 Python codes 改進成類似上圖, 板塊之形狀可以是**大小不一之長方形(包含正方形)**.

**Ex:** 參考 BFOIT 站  
Introduction to Computer Programming  
ref: http://guyhaas.com/bfoit/itp/Operators.html  
之圖  
![BIG_DrawRandomTurtles4](https://img-blog.csdnimg.cn/20200921110009740.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

將以上 Python codes 改進成類似上圖, 板塊之形狀可以是**大小不一之任意形狀或符號**.

### 12.3 海龜繪圖模擬 紫雨無聲落下 (如何讓多隻海龜一起移動?)

參考 YouTube上講解以 Processing 語言模擬"紫雨" 的影片  
Ref: https://youtu.be/KkyIDI6rQJI  
[link](https://youtu.be/KkyIDI6rQJI)

**Ex:** 你可以用 Python 的 turtle module 重現一次  
“The Coding Train” 系列中, 模擬"紫雨" 的動畫嗎?

* * *

以下初步試做  
PythonTurtle\_purpleRain\_藝術\_test\_2.py  
在 for loop 中:  
重複產生單一烏龜物件, 形狀為一紫色小細長條長方型, 起始位置隨機指定, 再令他由上往下前進400單位長  
![PythonTurtle_purpleRain_藝術_test_2](https://img-blog.csdnimg.cn/20201004203003285.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

    ## 11. 烏龜繪圖模擬紫雨藝術
    # By Prof. P-J Lai MATH NKNU 20200921
    
    ##參考 YpuTube上講解以 Processing 模擬"紫雨" 的影片
    ##Ref: https://youtu.be/KkyIDI6rQJI
    ##[link](https://youtu.be/KkyIDI6rQJI)
    ##
    ##**Ex:** 你可以用 Python 的 turtle module 重現一次
    ##"The Coding Train"  模擬"紫雨" 的動畫嗎?
    ##
    ##以下初步試做
    
    
    
    # 發現用 compound shape 可以結合數個多邊形, 但是顏色似乎不好更改,
    ##如果只有一個形狀, 可以用 
    ##24.1.3.7. Special Turtle methods
    ##begin_poly()
    ##end_poly()
    ##register_shape("myshape",get_poly())
    ##T.shape("myShape")
    ##較單純!
    
    
    #用tracer(1,0.999999), tracer(2,10)還, tracer(2,20000)是太瞬間
    #tracer(1.9,5) # 此速度較剛好 20201003
    
    
    
    from turtle import *
    import random
    T=Turtle()
    T.reset()
    T.home()
    T.speed(0)
    #用tracer(1,0.999999), tracer(2,10)還, tracer(2,20000)是太瞬間
    #tracer(1.9,5) # 此速度較剛好 20201003
    
    
    T.begin_poly()
    T.fd(3)
    T.lt(90)
    T.fd(30)
    T.lt(90)
    T.fd(3)
    T.lt(90)
    T.fd(30)
    T.lt(90)
    T.end_poly()
    myPoly=T.get_poly()
    register_shape("myShape",myPoly)
    
    T.shape("myShape")
    T.color(138/256, 43/256, 226/256)
    purpleColor = (138/256, 43/256, 226/256)
    
    #T.speed(0)
    
    
    class purpleRain(Turtle):
        def __init__(self, shape):
            Turtle.__init__(self, shape=shape,visible=True)
            self.color(purpleColor)
            self.lt(90)
            self.penup()
            self.speed(3)
            self.hideturtle()
            self.goto(random.randint(-350,300),random.randint(-300,320))
            self.showturtle()
            
    
    def main():
        T = purpleRain("myShape")
        #T.speed(0)
        T.bk(100)
        for i in range(20):
            T = purpleRain("myShape")
            T.bk(400)
        return
    
    if __name__=="__main__":
        msg = main()
        print(msg)
        mainloop()
    
    

以上的效果, 造成只能序列輪流下一滴雨

* * *

以下我們改成先產生例如, turtleNumber = 50 個烏龜物件, 起始位置隨機指定, 再要求這 50 個烏龜物件執行上面程式碼的迴圈動作: 由上往下前進400單位長  
以下是先產生 turtleNumber = 50 個烏龜物件, 起始位置隨機指定, 之初始畫面  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201005120554325.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)  
主要修改之處如下:

    def main():
        turtleNumber = 50
        Tgroup = list(range(turtleNumber))
        
        for i in range(turtleNumber):
            # Tgroup = Tgroup.append(purpleRain("myShape"))
            # 上行, 物件元素無法用append增加進list
            Tgroup[i] = purpleRain("myShape")
            
        '''
        for i in range(turtleNumber):
            #T = purpleRain("myShape")
            Tgroup[i].bk(400)
        '''
        return
    
    

接著我們把註解掉之處取消註解, 讓各物件滴落  
‘’’  
for i in range(turtleNumber):  
#T = purpleRain(“myShape”)  
Tgroup\[i\].bk(400)  
‘’’

    def main():
        turtleNumber = 50
        Tgroup = list(range(turtleNumber))
        
        for i in range(turtleNumber):
            # Tgroup = Tgroup.append(purpleRain("myShape"))
            # 上行, 物件元素無法用append增加進list
            Tgroup[i] = purpleRain("myShape")
            
        for i in range(turtleNumber):
            #T = purpleRain("myShape")
            Tgroup[i].bk(400)
        
        return
    

結果出現各物件依序滴落的狀況, 仍然沒辦法同時  
![PythonTurtle_purpleRain_藝術_test_3_各物件依序滴落](https://img-blog.csdnimg.cn/20201005121351599.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)  
此時我們面臨到, 如何讓多隻海龜同時(一起)移動? 的問題  
**Q:** 如何讓多隻海龜一起移動?  
我們查了網路上的解法, 在 stackoverflow 上, 提供3種解法  
method 1. 每隻都動一小段, 換下一隻  
method 2. 用 ontimer()  
method 3. 用 thread

以下我們先嘗試用 method 1. 每隻都動一小段, 換下一隻:  
只需將原先之 codes

    for i in range(turtleNumber):
            #T = purpleRain("myShape")
            Tgroup[i].bk(400)
    

改成

    for k in range(400):
            for i in range(turtleNumber):
                Tgroup[i].bk(5)
    

發現移動速度太慢, 即使用T.speed(0), 還是太慢  
改用 tracer(20,1), 發現速度就快了

![PythonTurtle_purpleRain_藝術_test_3_同時](https://img-blog.csdnimg.cn/2020101416025280.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

    ## 11. 烏龜繪圖模擬紫雨藝術
    # By Prof. P-J Lai MATH NKNU 20200921
    
    ##參考 YpuTube上講解以 Processing 模擬"紫雨" 的影片
    ##Ref: https://youtu.be/KkyIDI6rQJI
    ##[link](https://youtu.be/KkyIDI6rQJI)
    ##
    ##**Ex:** 你可以用 Python 的 turtle module 重現一次
    ##"The Coding Train"  模擬"紫雨" 的動畫嗎?
    ##
    ##以下初步試做
    
    
    # 發現用 compound shape 可以結合數個多邊形, 但是顏色似乎不好更改,
    ##如果只有一個形狀, 可以用 
    ##24.1.3.7. Special Turtle methods
    ##begin_poly()
    ##end_poly()
    ##register_shape("myshape",get_poly())
    ##T.shape("myShape")
    ##較單純!
    
    
    #用tracer(1,0.999999), tracer(2,10)還, tracer(2,20000)是太瞬間
    #tracer(1.9,5) # 此速度較剛好 20201003
    
    
    from turtle import *
    import random
    T=Turtle()
    T.reset()
    T.home()
    #T.speed(0)
    #用tracer(1,0.999999), tracer(2,10)還, tracer(2,20000)是太瞬間
    #tracer(1.9,5) # 此速度較剛好 20201003
    tracer(20,1)
    
    T.begin_poly()
    T.fd(3)
    T.lt(90)
    T.fd(30)
    T.lt(90)
    T.fd(3)
    T.lt(90)
    T.fd(30)
    T.lt(90)
    T.end_poly()
    myPoly=T.get_poly()
    register_shape("myShape",myPoly)
    
    T.shape("myShape")
    T.color(138/256, 43/256, 226/256)
    purpleColor = (138/256, 43/256, 226/256)
    
    
    
    class purpleRain(Turtle):
        def __init__(self, shape):
            Turtle.__init__(self, shape=shape,visible=True)
            self.color(purpleColor)
            self.lt(90)
            self.penup()
            self.speed(5)
            self.hideturtle()
            self.goto(random.randint(-350,300),random.randint(0,320))
            self.showturtle()
            
    
    def main():
        turtleNumber = 50
        Tgroup = list(range(turtleNumber))
        
        for i in range(turtleNumber):
            # Tgroup = Tgroup.append(purpleRain("myShape"))
            # 上行codes, 物件元素無法用append增加進list
            Tgroup[i] = purpleRain("myShape")
            
        for k in range(400):
            for i in range(turtleNumber):
                Tgroup[i].bk(5)
        
        return
    
    if __name__=="__main__":
        msg = main()
        print(msg)
        mainloop()
    
    

* * *

以下幾乎完成, 使用 while, 使紫雨持續落下,  
可惜速度無法調到適當之快, 感覺有點慢, 不管 tracer()是設多少值  
PythonTurtle\_purpleRain\_藝術\_test\_4\_while.py![PythonTurtle_purpleRain_藝術_test_4_while](https://img-blog.csdnimg.cn/20201017010935696.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

    ## 11. 烏龜繪圖模擬紫雨藝術
    # By Prof. P-J Lai MATH NKNU 20200921
    
    ##參考 YpuTube上講解以 Processing 模擬"紫雨" 的影片
    ##Ref: https://youtu.be/KkyIDI6rQJI
    ##[link](https://youtu.be/KkyIDI6rQJI)
    ##
    ##**Ex:** 你可以用 Python 的 turtle module 重現一次
    ##"The Coding Train"  模擬"紫雨" 的動畫嗎?
    ##
    ##以下初步試做
    
    
    # 發現用 compound shape 可以結合數個多邊形, 但是顏色似乎不好更改,
    ##如果只有一個形狀, 可以用 
    ##24.1.3.7. Special Turtle methods
    ##begin_poly()
    ##end_poly()
    ##register_shape("myshape",get_poly())
    ##T.shape("myShape")
    ##較單純!
    
    #用tracer(300,10), 此速度還是有點慢, tracer(1000,10) 較快 20201017
    
    from turtle import *
    import random
    T=Turtle(visible=False)
    
    T.hideturtle()
    T.penup()
    #T.speed(0)
    #用tracer(1,0.999999), tracer(2,10)還, tracer(2,20000)是太瞬間
    #tracer(1.9,5) # 此速度較剛好 20201003
    tracer(1000,10)
    
    T.begin_poly()
    T.fd(2)
    T.lt(90)
    T.fd(30)
    T.lt(90)
    T.fd(2)
    T.lt(90)
    T.fd(30)
    T.lt(90)
    T.end_poly()
    myPoly=T.get_poly()
    register_shape("myShape",myPoly)
    
    T.shape("myShape")
    T.color(138/256, 43/256, 226/256)
    purpleColor = (138/256, 43/256, 226/256)
    
    class purpleRain(Turtle):
        def __init__(self, shape):
            Turtle.__init__(self, shape=shape,visible=False)
            self.color(purpleColor)
            self.lt(90)
            self.penup()
            self.speed(0)
            self.hideturtle()
            self.goto(random.randint(-400,400),random.randint(400,1400))
            self.showturtle()
            
    def main():
        turtleNumber = 500
        Tgroup = list(range(turtleNumber))
        
        for i in range(turtleNumber):
            Tgroup[i] = purpleRain("myShape")
    
        while True:    
            for k in range(400):
                for i in range(turtleNumber):
                    Tgroup[i].bk(5)
                    if Tgroup[i].ycor() < -400:
                        Tgroup[i].goto(random.randint(-400,400),random.randint(400,600))                    
        return
    
    if __name__=="__main__":
        msg = main()
        print(msg)
        mainloop()
