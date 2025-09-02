---
title: "從 Logo 海龜繪圖 學習 Python - 高中彈性課程系列 8 碎形 (分形 fractal)"
collection: courses
type: "高中課程"
permalink: /courses/python-turtle-08-fractal-advanced
venue: "高中彈性課程"
date: 2025-01-08
location: "Taiwan"
excerpt: "深入探討碎形（分形）的進階概念和實作技巧。"
---
**Goal: 藉由有趣的「海龜繪圖」學會基礎的 Python 程式設計**
本課程帶領同學以 Python 實現 Logo 烏龜繪圖，藉由有趣的「烏龜繪圖」學會基礎的 Python 程式設計

---


@[TOC](文章目录)

---
# (原 part2 之碎形部分)


## 7 Fractal tree 碎形樹- recursive 之應用
觀摩 YouTube上講解以 JavaScript 語言模擬"碎形樹" 的影片
Ref: https://www.youtube.com/watch?v=0jjeOYMjmDU
[link](https://www.youtube.com/watch?v=0jjeOYMjmDU)

**Ex:** 你可以用 Python 的 turtle module 重現一次
"The Coding Train"  系列中, 模擬"碎形樹" 的動畫嗎?
![Coding Challenge #14: Fractal Trees - Recursive](https://img-blog.csdnimg.cn/20201005132323443.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

Python turtle 的 demo 也有:
![turtleDemo_forest_2_IDLE](https://img-blog.csdnimg.cn/20200830165818397.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)
較單純沒有隨機的樹
![Python_demo_tree](https://img-blog.csdnimg.cn/20201007160228421.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

本篇作者模仿 "The Coding Train" 的用色呈現,
tree1_angle_headingLocal_20201011.py
背景色設為黑色
`turtle.bgcolor('black')`
`T.pencolor('white')`
codes 可以看下面 7.2
tree1_angle_headingLocal_20201011.py
把背景色修改一下
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201107201127667.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)




### 7.1 最簡單 2 叉碎形樹, 樹枝夾角為 45 度
因為demo 的源碼較不好讀,
以下我們試著用自己的較單純的設計方法去實現簡單2叉碎形樹的繪製,

以下是粗略的結構
```python
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
```

以下補上codes 細節
如果自己試著寫, 會發現相當困難, 牽涉到遞迴的執行, 是層層往深處呼叫, 直到最底層, 才獲得答案, 才一層一層往回給出前一層之解答, 
**所以必須先記錄往下疊代前, 當下的位置與角度** ( 此處如果你沒有自己試著寫, 並試著跑第一層第二層看看執行結果, 找出錯誤的原因, 嘗試錯誤, 你會不知道這段話的意義!)

```python
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
```
執行結果
![tree1_角度正確版本_goto_setheading](https://img-blog.csdnimg.cn/2020100921330069.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)
把顏色跟角度調整一下
程式碼改一下

```python
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

```
以下為往正北出發, 樹枝夾角=45
![tree1_角度正確版本_正上_紅色](https://img-blog.csdnimg.cn/20201011114104430.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

### 7.2 樹枝夾角為 可調整

以下我們將程式碼修改成增加夾角可以調整, 不一定都要是45度,
函數增加一個輸入引數
tree1(pos, length, headingAngle, angle)

結果發現錯誤, 原因在**全域變數**之問題

以下為往正北出發, 樹枝夾角=30, codes有 bug 之圖
![tree1_增加夾角_錯誤_全域變數之問題](https://img-blog.csdnimg.cn/20201011121503533.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)
以下為錯誤之版本, 沒有增加局部變數  headingAngle1,  headingAngle2
tree1_增加夾角_錯誤_全域變數之問題.py

```python
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

```

**修正後:**
以下是修訂之後的版本, 增加2個局部變數 headingAngle1,  headingAngle2, 會紀錄當下的 heading angle (海龜的前進方向)

以下為往正北出發, 樹枝夾角=30, codes 正確 之圖
![tree1_增加夾角_正確_全域變數之問題](https://img-blog.csdnimg.cn/20201011125915211.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

tree1_angle_headingLocal_20201011.py

```python
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


```

### 7.3 樹枝夾角改為隨機擾動
樹枝夾角增加隨機擾動, 擾動值範圍 = 夾角的 0 ~ 0.7倍 
codes 增加:

```
if random.randint(0,1)>0:
        randomPerturbation = random.random()*0.7
    else:
        randomPerturbation = -random.random()*0.7
        
headingLocal_1=headingLocal - angle*(1+randomPerturbation) 
    
tree1_random_angle(pos, length*r, headingLocal_1, angle)

```
![tree1_夾角隨機擾動_](https://img-blog.csdnimg.cn/20201011193918921.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

tree1_random_angle_20201011.py
```python
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

```

以下是 長 200, 夾角 45 隨機小擾動, 起始位置 = (0, -300)

![tree1_random_angle((0,-300),200, 90, 45)](https://img-blog.csdnimg.cn/20201011194849238.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

### 7.4 左右分枝不同的收縮率

以下參考河西朝雄的 ch8,  讓左右是不同的收縮率, 左邊的收縮率是右邊的 0.8 倍, 造成枝葉偏右的型態

\>>>tree1_random_angle_diff_length((0,-300),150, 90, 20)

![tree1_random_angle_左右不同縮率_右邊較長](https://img-blog.csdnimg.cn/20201011203526616.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)
tree1_random_angle_diff_length(pos, length, headingAngle, angle)

```python
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

```

### Ex 左右分枝的長度收縮率 隨機擾動
**Ex:** 之前的 codes,  左右分枝的長度收縮率是在程式裡面直接給定, 例如, right_ratio = 0.8, left_ratio = 0.64, 
請同學改成,  左右分枝的長度收縮率有一個隨機擾動的範圍, 並觀察圖形是否更自然更有變化.

## 8 Von Koch Curve 寇赫雪花碎形曲線- recursive 之應用
修改河西朝雄 8-7 KochRei62.c

以下為遞迴 1 層
![Sec8_7KochRei62_1層](https://img-blog.csdnimg.cn/20201012125409505.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)


以下為遞迴 2 層

![Sec8_7KochRei62_2層](https://img-blog.csdnimg.cn/20201012125442602.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

以下為遞迴 5 層
![Sec8_7KochRei62_5層](https://img-blog.csdnimg.cn/20201012124817567.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzQ3OTg1NDgz,size_16,color_FFFFFF,t_70#pic_center)

```python
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

```


  ## 9. 遞迴 recursive 與 疊代 iterated (迴圈 for loop) 是否可以互相轉換?
  
 - 循環 (for, while loop) 效能很高, 但是遞迴 (recursive) 的程式碼結構簡潔一目了然 (假設你已經很懂遞迴的語法).
  
 - 尾遞迴效能與循環接近
  
5 那裏我們舉了 $2^n$, 累加, 費氏數列, 它們 recursive 寫法與  loop 寫法是可以互相轉換, **但是對一般的狀況, 兩者是否確實等價的?**

在網路上查詢, 理論上是可以的, 但是在 知乎的文章:
所有递归都可以改写成循环吗？
https://www.zhihu.com/question/29373492
[link](https://www.zhihu.com/question/29373492)
有回答:
栈底不可预见的时候，递归是无法有效地化为循环的。If you maintain your own stack it would be correct. Otherwise recursion can do things loops can't, like walk a tree.[http://c2.com/cgi/wiki?RecursionVsLoop] [link](http://c2.com/cgi/wiki?RecursionVsLoop)

作者：高木端
链接：https://www.zhihu.com/question/20418254/answer/15081000
来源：知乎

較常見的是將遞迴改寫成**尾遞迴 tail-recursive**, 尾遞迴效能類似 loop, 有許多程式之編譯器 (C, JavaScript等) 會自動把遞迴的程式最佳化為尾遞迴.

- **以下可以等進階時再細看**

可以參考Baidu百科, $n!$ 的尾遞迴寫法:

Ref: https://baike.baidu.com/item/%E5%B0%BE%E9%80%92%E5%BD%92#reference-[1]-1439396-wrap [link](https://baike.baidu.com/item/%E5%B0%BE%E9%80%92%E5%BD%92#reference-[1]-1439396-wrap)

示例3-2：

/*facttail.c*/
 
#include"facttail.h"
 
/*facttail*/
 
 
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


**Ex:** 將 5 那裏我們舉了 $2^n$, 累加, 費氏數列, 用尾遞迴改寫, 並比較尾遞迴, 遞迴, for loop 三種寫法 的效能差異.

- **以上可以等進階時再細看**

## 10. Python 物件導向介紹

- Ref: Cory Althoff, The self-taught programmer, Python 編程無師自通, 
gitHub上有原始碼, https://github.comcalthoff  [link](httpsgithub.comcalthoff)
找 
tstp/part2,  ch12 paradigm編程泛式之後段, 
tstp/part2, ch13 the_four_pillars_of_oop 物件導向之四大支柱, 
tstp/part2, ch14 more_object_oriented_programming 更多物件導向, 
以上三章之codes, 有物件導向的說明程式碼

這本書的講解, 較簡單易懂, 初學者可以很快了解, 但是教進階的概念, 就缺少程式碼的示例, 可以再自行閱讀較完整的資料, 例如
- Ref: Dusty Phillips, Pyhton3 object oriented programming, Pyhton3 面對對象編程, 電子工業. 

類(class) 中的函數(function), 一般稱為 "方法 method", 物件(object) 有時稱為實例(instance),
  
### 起手式: 定義一個類, **class** 類名稱 __:__
```
class 類名稱:
    變數之定義或方法之定義
    ,,,,,,,,
    ,,,,,,,
```
以下定義一個 橘子 class, 
我們在 class 內定義一個方法 info(), 可以打印出一些基本訊息
注意 ,  info() 必須至少有一個引數 self, 也就是 , 用 
**def info( self):**, 

```python
class Orange:
    def info(self):
        print("Orange object created!")
```
產生一個 orange 物件的方法是執行 **foo1 = Orange()**, 
```python
>>> foo1 = Orange()
```

### 第二式: 點語法

要讓 foo1 這個 orange 物件呼叫 info(), 打印出訊息, 就要用**點語法**
**foo1.info()**
```python
>>> foo1.info()
Orange object created!
```




### 第三式: 初始化之方法 **\_\_init__ ( )** 
可以定義一個初始化之方法  \_\_init__ ( ) , 讓 每次'產生一個 orange 物件時, 就自動執行 打印出訊息 的動作.


定義一個初始化之方法 \_\_init__ ( ), 每產生一個物件就會自動執行這個初始化方法 \_\_init__ ( ) 的內容.
(注意: 是雙下畫線, \_ \_init\_ \_ ( ) 在鍵盤輸入時是雙下畫線, 不要有空格 ) 

    def __init__(self):    
        方法的內容,,,,,
        ,,,,,

 def __init__(self):    
        &emsp; 本方法之內容
        &emsp; $\cdots$

以下把 print("Orange object created!") 放在這個\_\_init__ ( )內

```python
class Orange:
    def __init__(self):
        print("Orange object created!")
```
每當一產生一個 orange 物件,  就自動執行 打印出訊息 print("Orange object created!")

```python
>>> orange = Orange()
Orange object created!
```
就不需要用點語法去取用 info(), 多一個動作.

---
可以在  \_\_init__ ( ) 裡增加 重量weight 跟顏色color 的定義
```
self.weight = 6
self.color = 'orange'
```


```python
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
```

Ex1: 產生一個物件, 之初始化動作

```python
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
```

Ex4: 用點語法更改物件的變數內容

```python
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
```


orange_rot.py
增加一個腐爛值 mold
```python
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
```

rectangle.py
解釋類中可以定義多個方法
```python
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
```



## 11. 觀摩與解析 Python turtle module demo 中碎形有關的 codes, 的物件導向的設計



