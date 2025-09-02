---
title: "從turtle海龜動畫 學習 Python - 高中彈性課程系列 4 烏龜開始畫圖"
collection: courses
type: "高中課程"
permalink: /courses/python-turtle-04-start-drawing
venue: "高中彈性課程"
date: 2025-01-04
location: "Taiwan"
excerpt: "開始使用烏龜繪圖，學習基本的移動指令和繪圖功能。"
---

{% include python-turtle-header.html %}

## 目錄
{: .no_toc}

* TOC
{:toc}

<!-- 請在此處貼上您的課程內容 -->
--- 

## 5. 烏龜開始畫圖

Ref:
A. 參考賴鵬仁老師講義: Python常用Turtle指令-例子講解.doc
B. Turtle的精采示範講義有碎形: SevenWaysToUseTurtle-PyCon2009.pdf
C. 官網 turtle module 手冊: Turtle graphics-Python 3.8 (舊版是24.1節).pdf

要進行烏龜繪圖, 需載入 turtle 模組,
**而 turtle 是內建模組, 不須要另外安裝**, 只需要在程式碼一開始寫入

**import turtle**
或是
__from turtle import *__
就可以開始執行　烏龜繪圖的所有動作

### 5.1 以下細講起手步驟:

1. 必須先載入 turtle module,
**\>>>import turtle**
2. 接著產生一個烏龜物件取名為 myTurtle
**\>>>myTurtle = turtle.Turtle()**
會產生一個畫布, 有一個箭頭在原點處, 箭頭是烏龜預設的形狀 classic, 
(註: 之後我們再改成烏龜的形狀, 下這個指令就可以改 **myTurtle.shape('turtle')**, 內建有6種形狀).

![myTurtle = turtle.Turtle()](/images/courses/python-turtle/01-turtle-window.jpg)

烏龜前進100單位
**\>>>myTurtle.forward(100)**
![myTurtle.forward(100)](/images/courses/python-turtle/02-turtle-forward-100.jpg)

烏龜左轉90度
**\>>>myTurtle.left(90)**
![myTurtle.left(90)](/images/courses/python-turtle/03-turtle-left-90.jpg)

烏龜再前進100單位
**\>>>myTurtle.forward(100)**
![myTurtle.forward(100)](/images/courses/python-turtle/04-turtle-forward-100-again.jpg)
如果要讓烏龜畫一個正方形, 就重複以上動作
\>>> myTurtle.left(90)
\>>> myTurtle.forward(100)
![正方形繪製步驟3](/images/courses/python-turtle/05-turtle-square-step3.jpg)
再做一次左轉及前進
\>>> myTurtle.left(90)
\>>> myTurtle.forward(100)
![完成正方形](/images/courses/python-turtle/06-turtle-square-complete.jpg)





烏龜動作的基本指令
Move and draw 前進後退轉頭等:

forward() | fd()  前進
backward() | bk() | back() 後退
right() | rt() 右轉
left() | lt()  左轉
goto() | setpos() | setposition() 跳躍至
setx() 重設 x 座標
sety() 重設 y 座標
setheading() | seth() 重設前進方向
home() 回到預設狀態, 也就是 頭向右方, 位於原點



### 5.2 用 for 的方法執行重複性的動作 令烏龜畫正四邊形
以上我們重複"前進再左轉", 做了4次, 完成一個正四邊形,
現在我們可以改用 for 的方法 畫一個正方形, 
程式碼會較精簡, 也一目明瞭,
以上的重複性動作, 改成如下
( **myTurtle.reset()** 會把畫面清除, 烏龜回到一開始的狀態.)
 ```python
>>> myTurtle.reset()
>>> for i in range(1,5):
	myTurtle.forward(100)
	myTurtle.left(90)
```
![用 for 迴圈畫正方形](/images/courses/python-turtle/07-turtle-square-for-loop.jpg)

### 5.3  用 for 的方法 令烏龜畫正五邊形
如果我們想將上面的畫正四邊形的程式碼直接重複利用, 會發現第一個須修改的是轉彎的角度, 不再是90度, 此時我們需計算出下圖的角度, 那正是烏龜畫正五邊形時, 頭部前進方向轉動的角度,
**Ex:** 請同學求出下圖正五邊形右下方兩向量之間的夾角, 即正五邊形的外角
![正五邊形轉角示意圖](/images/courses/python-turtle/08-pentagon-angle-diagram.jpg)
**Sol:**
我們先將正五邊形切割為3個三角形, 如下圖
![正五邊形內角和計算](/images/courses/python-turtle/09-pentagon-interior-angles.jpg)
發現3個三角形的內角和加總, 就是正五邊形的內角和, 故
$$正五邊形的內角和 =  \sum_{n=1}^{3} 三角形的內角和 = \sum_{n=1}^{3} \pi = 3 \pi$$
則得到
$$ 正五邊形的內角 =  \frac{正五邊形的內角和}{5}    =   \frac{ 3 \pi}{5}     $$
則我們得到下圖
![正五邊形內角大小](/images/courses/python-turtle/10-pentagon-interior-angle-size.jpg)
由此可得 正五邊形的外角
$$ 正五邊形的外角 = \pi - 正五邊形的內角 = \pi-  \frac{ 3 \pi}{5}  =  \frac{ 2 \pi}{5}    $$
![正五邊形外角大小](/images/courses/python-turtle/11-pentagon-exterior-angle-size.jpg)
 經過以上推導, 得知
 $$正五邊形的外角=\frac{2\pi}{5}=72   \degree $$

可以用 Python 簡單的計算 =$\frac{2\pi}{5}$ 換算成degree是多少,
在 Python 要取用 $\pi$值, 要先載入 math 模組, 下
import math
再下
math.pi

由
$$ 1 \pi\; radian=180 \degree $$
可得
$$ 1 \; radian=\frac{180}{\pi} \;\degree =57.29577951308232 $$
也就是 (一個 radian) 約等於 (57 degree)
故可以計算 $\frac{2\pi}{5}$ radian 約等於 $\frac{2\pi}{5}*57 \sim \frac{2*(3.14)}{5}*57 \sim 72 \degree$
以下計算得到為 $72 \degree$.

```python
>>> import math
>>> oneRadian = 180/math.pi
>>> oneRadian
57.29577951308232
>>> outerAngle = 2*math.pi/5
>>> outerAngle
1.2566370614359172
>>> outerAngle = 2*math.pi/5*oneRadian
>>> outerAngle
72.0
```
---
經過以上的討論, 我們可以將前一節畫正四邊形的程式碼直接重複利用, 如下

```python
>>> import turtle
>>> myTurtle=turtle.Turtle()
>>> for i in range(1,6):
	myTurtle.forward(100)
	myTurtle.left(72)
```
![正五邊形繪製結果](/images/courses/python-turtle/12-pentagon-drawing-result.jpg)




### 5.4  `turtlesize(n,m,k)`  調整海龜外型、大小與顏色 畫一個正四邊形
調整顏色
`S.fillcolor("blue")` # 海龜身上內部的顏色
`S.pencolor("green")` # 畫筆顏色
以上兩個指令可以合併成一個 
`S.color("green", "blue")`

調整大小
`S.turtlesize(5)` #海龜大小
`S.pensize(4)` #畫筆粗細
`turtlesize(n,m,k)`  事實上有3個參數, 分別是體寬, 身高, 及輪廓之厚度.
 3個參數當你想要讓海龜是一個細長的長方形時(在官方 turtle模組的例子之一: sorting),  是很好用的.
海龜輪廓的顏色是跟畫筆一致



### 打開　IDLE 編輯器 執行一連串的程式指令
IDLE 是 Python 的小作家,
之前都是在終端機模式一行一行下指令, 如果程式碼多行時, 會有困擾, 這時, 可以打開　IDLE 編輯器, 新增一個草稿檔, 在這個草稿檔上寫程式, 然後執行:

可以打開 IDLE 左上方 `File/New File`, 產生一個空白的類似小作家編輯器, 輸入以下程式碼, 再`按 F5 `執行編譯(run), 會要求存此草稿檔, 你可以指定在例如, 桌面, 等,

#### 正規的函數定義法:
**def adder(x, y):**
    return x + y

```python
# Ref: 官網的文件: python-3.3.2-docs-pdf-a4

def adder(x, y):
    return x + y
```
在再 IDLE consola 畫面下 `adder(2,3)` 等指令, 
```python
>>> adder(2,3)
5
```

---

所以, 底下的程式碼, 就改成在 草稿檔上寫了, **切記:** 寫完記得 `按 F5 `執行編譯(run).


### 第一種載入海龜模組方法 `from turtle import *`
此種方法較不建議使用, 會造成有些海龜指令, 會讓讀程式碼的人無法分辨是不是內建的指令, 

```
from turtle import *

S=Turtle()

S.shape("turtle") # 形狀設成烏龜
S.turtlesize(5) #烏龜大小

S.fillcolor("blue") # 烏龜身上內部的顏色
S.pencolor("green") # 畫筆顏色
# 以上兩個指令可以合併成一個 S.color("green", "blue")

S.pensize(4) #畫筆粗細
S.speed(50) # 烏龜移動速度
S.penup() # 提起畫筆
S.goto(0,-100) # 跳躍至此座標
S.pendown() # 放下畫筆
```

出現畫布呈現執行動畫:
![有顏色的烏龜正方形](/images/courses/python-turtle/13-colored-turtle-square.jpg)
程式碼:
```python
from turtle import *
S=Turtle()
S.shape("turtle") # 形狀設成烏龜
S.turtlesize(5) #烏龜大小
S.fillcolor("blue") # 烏龜身上內部的顏色
S.pencolor("green") # 畫筆顏色
S.pensize(4) #畫筆粗細
S.speed(50) # 烏龜移動速度
S.penup() # 提起畫筆
S.goto(0,-100) # 跳躍至此座標
S.pendown() # 放下畫筆

for i in range(1,5):
    S.fd(100)
    S.lt(360/4)
```

---

### 推薦使用另一種載入方法 `import turtle`
推薦用第二種方法較

如果用
`import turtle`
則產生一個turtle 物件使用
`S=turtle.Turtle()`

```
import turtle

S=turtle.Turtle()

S.shape("turtle") # 形狀設成烏龜
S.turtlesize(5) #烏龜大小
S.fillcolor("blue") # 烏龜身上內部的顏色
S.pencolor("green") # 畫筆顏色
S.pensize(10) #畫筆粗細
S.speed(50) # 烏龜移動速度
S.penup() # 提起畫筆
S.goto(0,-100) # 跳躍至此座標
S.pendown() # 放下畫筆
for i in range(1,5):
    S.fd(100)
    S.lt(360/4)
```
![import turtle 範例結果](/images/courses/python-turtle/14-import-turtle-example.jpg)

```python
#from turtle import *
import turtle

S=turtle.Turtle()

S.shape("turtle") # 形狀設成烏龜
S.turtlesize(5) #烏龜大小
S.fillcolor("blue") # 烏龜身上內部的顏色
S.pencolor("green") # 畫筆顏色
S.pensize(10) #畫筆粗細
S.speed(50) # 烏龜移動速度
S.penup() # 提起畫筆
S.goto(0,-100) # 跳躍至此座標
S.pendown() # 放下畫筆
for i in range(1,5):
    S.fd(100)
    S.lt(360/4)
```

---

**Ex:** : 調整烏龜外型、大小與顏色 用 for 的方法 畫一個正五邊形
**Ex:**  調整烏龜外型、大小與顏色 用 for 的方法 畫一個正n邊形
**Ex:** 以上分別畫正方形, 正五邊形, 正 n 邊形 時, 烏龜每次需要轉多少度?