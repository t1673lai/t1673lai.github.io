---
title: "從turtle海龜動畫 學習 Python - 高中彈性課程系列 6 畫多重旋轉圓,螺旋正方形"
collection: courses
type: "高中課程"
permalink: /courses/python-turtle-06-multiple-rotation-spiral
venue: "高中彈性課程"
date: 2025-01-06
location: "Taiwan"
excerpt: "學習繪製多重旋轉圓和螺旋正方形，探索更複雜的圖形模式。"
---

{% include python-turtle-header.html %}

## 目錄
{: .no_toc}

* TOC
{:toc}

<!-- 請在此處貼上您的課程內容 -->
### 5.9 畫多重旋轉圓,  codes 封裝在一個函數
--- 
turtle 有內建的畫圓的指令 circle() 
circle() 畫圓, 參數是半徑 (沒有ellipse)
dot() 在該地點畫一黑點 

---
我們也可以自己寫一個畫圓的函數如下:
def circle():
	for i in range(36):
		T.fd(10)
		T.lt(10)

**Ex:** 證明以上烏龜之起點與終點會合一 

以下畫出 6 個圓, 烏龜身上內部的顏色可以用 
**T.fillcolor("blue")**
設為藍色
![MIT多重圓例子](/images/courses/python-turtle/35-mit-multi-circles.jpg)

```python
# By Prof P-J Lai MATH NKNU
# 201604
# MIT多重圓例子.py

from turtle import *

T=Turtle()
T.shape("turtle")
T.color("yellow","red")
T.fillcolor("blue")
T.turtlesize(2)
bgcolor("black")   
T.pensize(5)

def circle():
	for i in range(36):
		T.fd(10)
		T.lt(10)
		
for k in range(6):
	circle()
	T.lt(60)

```

#### 5.9.1 畫多重旋轉圓,  由 color_list 依序取出各種顏色
以下使用一個自己定義的顏色串列: color_list=["red","green","blue","purple","orange","yellow"],
 由此 color_list 依序取出各種顏色, 每次都更改畫筆的顏色 pencolor( ), 

```
, 
color_list=["red","green","blue","purple","orange","yellow"]
for k in color_list:
	T.pencolor(k)
,
```	

 ![MIT多重圓例子_colorList](/images/courses/python-turtle/36-mit-multi-circles-colorlist.jpg)

```python
# By Prof P-J Lai MATH NKNU
# 201604
# MIT多重圓例子_colorList.py

from turtle import *

T=Turtle()
T.shape("turtle")
#T.color("yellow","red")
T.fillcolor("orange")
T.turtlesize(2)
bgcolor("black")   
T.pensize(5)
#T.pencolor("Green")

def circle():
	for i in range(36):
		T.fd(10)
		T.lt(10)
		
color_list=["red","green","blue","purple","orange","yellow"]
for k in color_list:
	T.pencolor(k)
	circle()
	T.lt(60)

```
#### 5.9.2 Python內建的隨機數指令, 畫多重旋轉圓, 隨機變換背景顏色

---
 隨機變換顏色, 需要產生隨機數,
 先補充一下, Python 如何產生隨機數

**Python內建的隨機數指令:**
需先載入內建的 random 模組
\>>> import random

產生隨機整數
\>>> random.randint(1,10)
4
產生隨機 0~1 的小數
\>>> random.random()
0.6428795725944434

- **以下可以等進階時再細看**


\>>> random.uniform(1,5)
1.3000399653858126


\>>> data = range(1,11)
\>>> random.choice(data)
9
\>>> random.choice(data)
7
\>>> random.choice(data)
4


random.shuffle 隨機洗牌(隨機排列)  
(排列, np 的排列用 permutation與內建的sample()不同: >>> from numpy.random import permutation)
To shuffle an immutable sequence and return a new shuffled list, 
use sample(x, k=len(x)) instead.

\>>> data = [1,2,3,4,5,6,7]
\>>> random.shuffle(data)
\>>> data
[7, 1, 3, 4, 5, 6, 2]
\>>> data_shuffle=random.shuffle(data)
\>>> data_shuffle
\>>> type(data_shuffle)
<class 'NoneType'>

random.sample 隨機抽樣 (排列, np 的排列用 permutation與內建的sample()不同: 
\>>> from numpy.random import permutation)
Returns a new list containing elements from the population 
while leaving the original population unchanged
To choose a sample from a range of integers, use a range() object as an argument. 
This is especially fast and space efficient for sampling from a large population: 
sample(range(10000000), k=60).
尺度大時, 建議用 range(n), 效能較高
\>>> random.sample([1,2,3,4],2)
[4, 2]
\>>> random.sample([1,2,3,4],4)
[2, 4, 1, 3]

random.randrange(a, b, step)


random.choices(seq, weights=None, *, cum_weights=None, k=1)
- **以上可以等進階時再細看**
---

隨機變換背景顏色:
```i
mport random
turtle.bgcolor(random.randint(0,256)/256, random.randint(0,256)/256,random.randint(0,256)/256)
```
或是
`turtle.bgcolor(random.random( ), random.random( ), random.random( ))`

**注意:** 是 `turtle.bgcolor()`, 不是 `T.bgcolor()`

![在这里插入图片描述](/images/courses/python-turtle/37-random-background-circles.jpg)

```python
# By Prof P-J Lai MATH NKNU

import turtle 
import random

T=turtle.Turtle()
T.shape("turtle")
T.color("yellow")
T.turtlesize(2)
turtle.bgcolor(0,0,0)#RGB   
T.pensize(5)

def circle():
	for i in range(36):
		T.fd(10)
		T.lt(10)
		
color_list=["red","green","blue","purple","orange","yellow"]
for k in color_list:
        #bgcolor(random.randint(0,256)/256, random.randint(0,256)/256,random.randint(0,256)/256)
        turtle.bgcolor(random.random(),random.random( ),random.random( ))
        T.pencolor(k)
        circle()
        T.lt(60)
#random.randint(0,256)/256 可以用 random.random( )取代 2016/4/8

```
#### 5.9.3 畫多重旋轉圓, 隨機變換背景顏色與畫筆顏色
用類似的指令, 進一步, 除了隨機變換背景顏色, 也同時隨機變換畫筆顏色:
`turtle.bgcolor(random.random(), random.random(), random.random())`
`T.pencolor( random.random(), random.random(), random.random())`
![MIT多重圓例子_random_bg_turtle_Color](/images/courses/python-turtle/38-random-bg-turtle-color.jpg)

```python
# By Prof P-J Lai MATH NKNU

import turtle 
import random 

T=turtle.Turtle()
T.shape("turtle")
T.color("yellow")
T.turtlesize(2)
turtle.bgcolor("black")   
T.pensize(5)

def circle():
	for i in range(36):
		T.fd(10)
		T.lt(10)
		
#color_list=["red","green","blue","purple","orange","yellow"]
for k in range(6):
        turtle.bgcolor(random.random(), random.random(),random.random())
        T.pencolor(random.random(), random.random(),random.random())
        circle()
        T.lt(60)

```
#### 5.9.4 畫多重旋轉圓, 隨機蓋印
此處我們增加一個 `stamp()` 的實驗, stamp()呼叫時, 會在當下的位置, 畫出烏龜的形狀在該位置,


---

`stamp()` 在該地點留下一個一模一樣的烏龜圖形(像蓋章的效果), 會有一個id
`clearstamp(id)`  # 將編號為id之蓋章消除
`clearstamps()`, 刪除全部 stamp, 
`clearstamps( n )` 刪除前n 個 stamp

---
以下實驗蓋印效果, 
前進 100 再蓋一個章, 會留下一個黑色海龜的章,
前進50, 改顏色為紅色, 再蓋一個章, 會留下一個紅色海龜的章,
前進50, 左轉 90, 前進200, 再蓋一個章, 會留下一個紅色海龜的章,
![Python turtle stamp() ](/images/courses/python-turtle/39-python-turtle-stamp.jpg)


```python
>>> import turtle
>>> T=turtle.Turtle()
>>> T.fd(100)
>>> T.shape('turtle')
>>> T.stamp()
5
>>> T.fd(50)
>>> T.fillcolor('red')
>>> T.stamp()
6
>>> T.fd(50)
>>> T.lt(90)
>>> T.fd(200)
```

如果再下一個 `T.clearstamp(6)`, 則紅色海龜的章會被刪除,
![在这里插入图片描述](/images/courses/python-turtle/40-stamp-clearstamp-example.jpg)

```python
>>> T.clearstamp(6)
```


---

以下將之前畫多重圓的 codes 中, 自定義之畫圓的函數修改, 改成輸入n, 畫正n邊形, 並且每畫一個邊長就蓋印一次, **T.stamp()**

def circle(n):
	for i in range(n):
		T.fd(50)
		**T.stamp()**
		T.lt(360/n)

並且烏龜的形狀也從給定之列表依序取出, 自己定義一個 shape_list, 裡面的"turtle","classic","arrow","circle","square","triangle" 形狀名稱是模組給好的, 不能改名稱, 
shape_list=`["turtle","classic","arrow","circle","square","triangle"]`
{中文含意: 烏龜, 古典箭頭, 較大的箭頭, 圓, 正方形, 三角形}
則每次蓋印, 就會蓋出不同之形狀

![MIT多重圓例子random_random_stamp](/images/courses/python-turtle/41-mit-random-stamp.jpg)

```python
# By Prof P-J Lai MATH NKNU

from turtle import *
from random import *

T=Turtle()
T.shape("turtle")

T.color("yellow")
T.fillcolor("blue")
T.turtlesize(1)
bgcolor("black")   
T.pensize(2)
#T.pencolor("Green")

def circle(n):
	for i in range(n):
		T.fd(50)
		T.stamp()
		T.lt(360/n)
		
color_list=["red","green","blue","purple","orange","yellow"]
shape_list=["turtle","classic","arrow","circle","square","triangle"]
index=0
for k in color_list:
        T.shape(shape_list[index])
        index=index+1
        bgcolor(random(), random(),random())
        T.color(random(), random(),random())
        T.pencolor(k)
        circle(12)
        T.lt(60)
```

### 5.10 畫螺旋正方形, tracer( ) 的 help( ) 示例
`tracer()` 可以調控動畫的速度, 
以下圖形是 >> help('turtle.tracer') 的示例
是一個較密集之螺旋正方形
![tracer( )的help( )例子](/images/courses/python-turtle/42-tracer-help-example.jpg)

```python
##>> help('turtle.tracer')
##Help on function tracer in turtle:
##
##turtle.tracer = tracer(n=None, delay=None)
##    Turns turtle animation on/off and set delay for update drawings.
##    
##    Optional arguments:
##    n -- nonnegative  integer
##    delay -- nonnegative  integer
##    
##    If n is given, only each n-th regular screen update is really performed.
##    (Can be used to accelerate the drawing of complex graphics.)
##    Second arguments sets delay value (see RawTurtle.delay())

from turtle import *
#tracer(1, 10) #預設
tracer(1.5, 10)

dist = 2
for i in range(200):
    fd(dist)
    rt(90)
    dist += 2
```

以下我們增加隨機 color()的設置, 畫出圖形如下
![tracer( )的help( )例子_color](/images/courses/python-turtle/43-tracer-help-color.jpg)

```python
from turtle import *
import random

#tracer(1, 10) #預設
tracer(1.5, 10)

dist = 2
for i in range(200):
    fd(dist)
    rt(90)
    dist += 2
    color(random.random(),random.random(),random.random())
```

**Ex:** 如果想畫出正5邊形的螺線, 請問以上程式碼該如何修改?
**Hint**:  將以上右轉90度 rt(90),  改成右轉 360/5=72 度, rt(72), 就可以. 

![help('turtle.tracer')_例子_4.10 畫螺旋正5邊形_color](/images/courses/python-turtle/44-spiral-pentagon-color.jpg)





**Ex:** 如果改成輸入 n >2 正整數, 就可以畫出正 n 邊形的螺線, 請問以上程式碼該如何修改?

**Ex:** 如果將以上正4邊形的螺線的程式碼中, 右轉90度, 改成 89度, 請問會出現何種型態? 類似, 正 5 邊形的螺線的程式碼中, 右轉 360/5=72 度, 改成 71度, 等等.
![help('turtle.tracer')_例子_4.10 畫螺旋正方形_color_89_black](/images/courses/python-turtle/45-spiral-square-89-degrees.jpg)
### 5.11 畫螺旋形, T.dot( size, color) 加彩色串珠 
在前進時, 使用 **T.dot( size, color)**, 就會蓋出一顆珠子的形狀, 
把以上的正多邊形螺線, 改成串珠的型態

help('turtle.tracer')_例子_4.10 畫螺旋七方形_彩色串珠_color.py

![help('turtle.tracer')_例子_4.10 畫螺旋七方形_彩色串珠_color](/images/courses/python-turtle/46-spiral-heptagon-beads.jpg)


```python
# help('turtle.tracer')_例子_4.10 畫螺旋七方形_彩色串珠_color.py

# P-J Lai MATH NKNU 20201004
##>> help('turtle.tracer')
##Help on function tracer in turtle:
##
##turtle.tracer = tracer(n=None, delay=None)
##    Turns turtle animation on/off and set delay for update drawings.
##    
##    Optional arguments:
##    n -- nonnegative  integer
##    delay -- nonnegative  integer
##    
##    If n is given, only each n-th regular screen update is really performed.
##    (Can be used to accelerate the drawing of complex graphics.)
##    Second arguments sets delay value (see RawTurtle.delay())

from turtle import *
import random

#tracer(1, 10) #預設
#tracer(0, 0)
pensize(2)
bgcolor('black')
dist = 2
for i in range(200):
    fd(dist)
    dot(7,(random.random(),random.random(),random.random()))
    #rt(90)
    rt(360/7-1)
    dist += 2
    color(random.random(),random.random(),random.random())

```

以下改成螺線串珠
help('turtle.tracer')_例子_4.10 畫螺旋線_彩色串珠_color_10.py
![help('turtle.tracer')_例子_4.10 畫螺旋線_彩色串珠_color](/images/courses/python-turtle/47-spiral-line-beads-1.jpg)

![help('turtle.tracer')_例子_4.10 畫螺旋線_彩色串珠_color2](/images/courses/python-turtle/48-spiral-line-beads-2.jpg)


```python
# P-J Lai MATH NKNU 20201004
##>> help('turtle.tracer')
##Help on function tracer in turtle:
##
##turtle.tracer = tracer(n=None, delay=None)
##    Turns turtle animation on/off and set delay for update drawings.
##    
##    Optional arguments:
##    n -- nonnegative  integer
##    delay -- nonnegative  integer
##    
##    If n is given, only each n-th regular screen update is really performed.
##    (Can be used to accelerate the drawing of complex graphics.)
##    Second arguments sets delay value (see RawTurtle.delay())

from turtle import *
import random

#tracer(1, 10) #預設
tracer(0, 0)
pensize(2)
bgcolor('black')
dist = 1
penup()
for i in range(500):
    fd(dist)
    dot(7,(random.random(),random.random(),random.random()))
    #rt(90)
    rt(10)
    dist += 0.1
    color(random.random(),random.random(),random.random())
```
**Ex:** 改成越中心的珠子越小, 看看視覺效果是否會更好? 

### 5.11 畫放射折線並蓋印, 消除 "魔術數字"
參考網路看到的放射折線並蓋印的圖, LOGO 16 Turtles doing a different dance. Why do you only see 15 turtles?
Ref: http://faculty.chas.uni.edu/~jacobson/logo.html [link](http://faculty.chas.uni.edu/~jacobson/logo.html)
![在这里插入图片描述](/images/courses/python-turtle/49-logo-16-turtles-dance.gif)


#### 放射直線
先試做還沒蓋印的放射**直**線

![turtle放射直線](/images/courses/python-turtle/50-turtle-radial-lines.jpg)

```python
# By Prof. P-J Lai 20201202

import turtle
import random

T = turtle.Turtle()
T.pensize(3)
T.speed(0)

for i in range(25):
    T.shape('turtle')
    T.color(random.random(),random.random(),random.random())
    T.fd(200)
    T.penup()
    T.goto(0,0)
    T.rt(360/25)
    T.pendown()

```
再增加蓋印的動作  T.stamp()
![turtle放射直線蓋印](/images/courses/python-turtle/55-turtle-radial-lines-stamped.jpg)

```python
# By Prof. P-J Lai 20201109

import turtle
import random

T = turtle.Turtle()
T.pensize(3)
T.speed(1)

for i in range(25):
    T.shape('turtle')
    T.color(random.random(),random.random(),random.random())
    T.fd(200)
    T.stamp()
    T.penup()
    T.goto(0,0)
    T.rt(360/25)
    T.pendown()

```



增加每小步蓋一個 dot()
turtle放射直線_dot_彩色串珠_蓋印.py
以下是執行到中間步驟的圖
![turtle放射直線_dot_彩色串珠_蓋印](/images/courses/python-turtle/56-turtle-radial-lines-dots-stamped.jpg)


```python
# By Prof. P-J Lai 20201109

import turtle
import random

T = turtle.Turtle()
T.pensize(3)
T.speed(0)

for i in range(25):
    T.shape('turtle')
    T.color(random.random(),random.random(),random.random())
    for i in range(30):
        #T.penup()
        T.fd(15)
        T.dot(10,(random.random(),random.random(),random.random()))
        
    T.stamp()
    T.penup()
    T.goto(0,0)
    T.rt(360/25)
    T.pendown()

```




#### 放射折線
先試做還沒蓋印的放射**折**線

![在这里插入图片描述](/images/courses/python-turtle/51-turtle-radial-bent-lines.jpg)
codes:
```python
# By Prof. P-J Lai 20201109

import turtle
import random

T = turtle.Turtle()
T.pensize(3)

for i in range(16):
    T.shape('turtle')
    T.color(random.random(),random.random(),random.random())
    T.fd(100)
    T.rt(90)
    T.fd(50)
    T.lt(90)
    T.fd(100)
    T.rt(30)
    T.fd(50)
    T.lt(60)
    T.fd(50)
    T.rt(30)
    T.fd(50)
    T.penup()
    T.goto(0,0)
    T.rt(360/16)
    T.pendown()

```

在上面的基礎增加蓋印的動作, 
試做蓋印的放射折線

![在这里插入图片描述](/images/courses/python-turtle/52-turtle-stamped-radial-lines.jpg)

```python
# By Prof. P-J Lai 20201109

import turtle
import random

T = turtle.Turtle()
T.pensize(3)

for i in range(16):
    T.shape('turtle')
    T.color(random.random(),random.random(),random.random())
    T.fd(100)
    T.rt(90)
    T.fd(50)
    T.lt(90)
    T.fd(100)
    T.rt(30)
    T.fd(50)
    T.lt(60)
    T.fd(50)
    T.rt(30)
    T.fd(50)
    T.stamp()
    T.penup()
    T.goto(0,0)
    T.rt(360/16)
    T.pendown()

```

數量增加為 25 個放射狀海龜蓋印
![在这里插入图片描述](/images/courses/python-turtle/53-25-radial-stamped-turtles.jpg)

以上程式碼中有所謂的 **魔術數字**，就是以下 **16**　這個數字,

```
for i in range(16):
,
,
T.rt(360/16)
```


**Ex:** 請同學將以上 codes 改成用函數封裝，輸入引數 n, 就會畫 n 個放射狀海龜蓋印, 就不會有**魔術數字**的狀況.
 
### 5.12 用 random.choice([上,下, 左, 右]) 模擬 "隨機漫步" (隨機游動, 布朗運動) 
使用  random 模組中, **隨機抽牌** 的 指令 `random.choice()`:
`random.choice([1,4,2,8,7,,,,])`
每次都隨機選擇出一個元素


用
` T.lt(random.choice([0,90,180,270]))`
使海龜每次都隨機選擇上,下, 左, 右前進.

![random lines_隨機漫步_4方_1000步_10步長](/images/courses/python-turtle/54-random-walk-4-directions.jpg)

```python
# Ref: A Guide to the TurtleGraphics Package for R_入門例子
# random lines
# By Prof. P-J Lai MATH NKNU 20201012
# 本來要試放射狀, 試成隨機折線 20201029
# random lines_等長隨機漫步_4方.py 20201101

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
for k in range(1):
    T.penup()
    T.goto(random.randint(-100,100),random.randint(-100,100))
    T.pendown()
    for i in range(1000):
        T.pencolor(random.random(),random.random(),random.random())
        T.fd(10)
        T.lt(random.choice([0,90,180,270]))

```


### 5.13 Project: 讓多隻海龜同時移動 模擬 starfield 星際大戰的光速飛行場景
參考
Coding Challenge #1 Starfield in Processing
https://www.youtube.com/watch?v=17WoOqgXsRM [link](https://www.youtube.com/watch?v=17WoOqgXsRM)

Coding Challenge #1: Starfield in Processing with music
https://www.youtube.com/watch?v=KWhnilgKM1M  [link](https://www.youtube.com/watch?v=KWhnilgKM1M)

裏 模擬 starfield 星際大戰的光速飛行場景

![模擬 starfield 星際大戰的光速飛行場景](/images/courses/python-turtle/57-starfield-star-wars-scene.jpg)

**Project:** 請同學嘗試用 Pyhton 模擬 starfield 星際大戰的光速飛行場, 

(需要多隻海龜同時移動的方法, 可以參考 
從 Logo 海龜繪圖  學習 Python - 高中彈性課程系列 1 課程簡介, sec 各項提示或補充之總表
https://editor.csdn.net/md/?articleId=107502070 [link](https://editor.csdn.net/md/?articleId=107502070))


# Reference
- 需要多隻海龜同時移動的方法, 可以參考 
從 Logo 海龜繪圖  學習 Python - 高中彈性課程系列 1 課程簡介, sec 各項提示或補充之總表
https://editor.csdn.net/md/?articleId=107502070 [link](https://editor.csdn.net/md/?articleId=107502070))

- 以下這份影片的圖形與本篇的很多類似, 但是他沒有提供程式碼: https://youtu.be/hPsjMTz-aDQ [link](https://youtu.be/hPsjMTz-aDQ).
