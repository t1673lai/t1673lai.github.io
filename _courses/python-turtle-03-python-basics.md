---
title: "從turtle海龜動畫 學習 Python - 高中彈性課程系列 3 烏龜繪圖 所需之Python基礎"
collection: courses
type: "高中課程"
permalink: /courses/python-turtle-03-python-basics
venue: "高中彈性課程"
date: 2025-01-03
location: "Taiwan"
excerpt: "介紹烏龜繪圖所需的 Python 基礎知識，包括變數、資料型態和基本語法。"
---

{% include python-turtle-header.html %}

## 目錄
{: .no_toc}

* TOC
{:toc}

<!-- 請在此處貼上您的課程內容 -->
---
## 4. 烏龜繪圖 所需之Python基礎 
以下我們將介紹 Python 的基礎知識, 我會將內容壓縮到最少, 只介紹 烏龜繪圖所需的, 較多的延伸, 同學可以自行閱讀
Cory Althoff, The Self-Taught Programmer, Hodgman Literary LLC, 2017.
(簡版中文: Python編程無師自通)

### 常量與變量
以下直接對數字或字串操作, 這些數字等就稱為常量
```python
>>> 2 + 5
7
>>> 'A' + 'B'
'AB'
```
如果對這些數字取一個名字, 就是變量

```python
>>> a = 2
>>> a
2
>>> b = 5
>>> a + b
7
```
變量就是可以改變他的值, 
```python
>>> a = a +1
>>> a
3
```
**注意:** 在程式語言裡, 等號是賦值的意思, 跟數學中的方程式的等號, 意思不一樣, 如果是問"是否相等", 就用雙等號 **==**

```python
>>> a == b
False
>>> a == 2
True
```

### 打印 Hello world 10 次
for 迴圈 介紹

   for i in range(1,10):
   (縮排, 空4格)    執行動作
   
或是
   
   for i in [1,2,3,4]:
   (縮排, 空4格)    執行動作 


```python
>>> for i in range(10):
	print("Hello World")

	
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
```
如果你想知道 range(10) 到底是甚麼, 可以將它內容逐個打印出來

```python
>>> for i in range(10):
	print(i)

	
0
1
2
3
4
5
6
7
8
9
```
發現其實是一個數列(跌代器 iterator), 放 0~9
你也可以用 [ ] 包住 0,1,2,3,,,,9, 
就是一個 list (串列的容器)
```python
myList = [0,1,2,3,4,5,6,7,8,9]
```
可以問她 myList 是甚麼
```python
>>> myList
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```
上面打印 Hello world 10 次, 可以改成用 [0,1,2,3,4,5,6,7,8,9]

```python
>>> for i in myList:
	print("Hello World")

	
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
```
**Ex:** 改成打印 Hello world 100 次, 分別用 range(100) 與  [0,1,2,3,4,5,  , ,99]
**Hint:** [0,1,2,3,4,5,  , ,99] 用手輸入要很久, 可以先用 range(100) 產生, 再用 list() 轉成串列 

```python
>>> list(range(100))
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
```

上面打印 Hello world 10 次, 也可以用 while 來執行

 while 邏輯條件:
   (縮排, 空4格)  執行動作

```python
>>> i = 10
>>> while i>0:
	print('Hello World')
	i = i-1

Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
>>> i = 1
>>> while i<11:
	print('Hello World')
	i = i+1
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
```


### 註解(comments)
單行註解 #

```python
>>> print('Hello World') # 注意：print是一个函数
>>> [0, 2, 4, 6, 8]  #abc 這是單行註解
[0, 2, 4, 6, 8]
```

可以使用三重引號-(" " " 或 ' ' ') 指定多行字符串。注意不能接在某個指令之後, 在三重引號中您可以自由使用單引號和双引號。例如:

```python
>>>'''This is a multi-line string. This is the first line.
This is the second line.
"What's your name?," I asked.
He said "Bond, James Bond."
'''

>>>"""Build a connection string from a dictionary of parameters. 
Returns string."""

>>> myList '''test'''
SyntaxError: invalid syntax
>>> myList '''
test'''
SyntaxError: invalid syntax
```

### 用 help('指令名')查詢
例如, 假設我們知道 round()是內建的四捨五入的指令, 想進一步查清楚, 可以下
**\>>> help('round')**
會列出文檔內事先寫好的說明, 
(大部分其實不會很詳細, 此辦法可以應急之用, 
通常網上查詢, 例如 **stackoverflow** 等站, 會較詳細深入, 但是時間花較久)

```python
>>> help('round')
Help on built-in function round in module builtins:

round(number, ndigits=None)
    Round a number to a given precision in decimal digits.
    
    The return value is an integer if ndigits is omitted or None.  Otherwise
    the return value has the same type as the number.  ndigits may be negative.
```
如果是某個模組的指令, 需先載入該模組, 
例如, 假設想查烏龜模組裡面的 clear(), 
先載入烏龜模組,
再下 
**\>>> help('turtle.clear')**
就會看到說明

```python
>>> help('turtle.clear')
Help on function clear in turtle:

turtle.clear = clear()
    Delete the turtle's drawings from the screen. Do not move 
    
    No arguments.
    
    Delete the turtle's drawings from the screen. Do not move 
    State and position of the turtle as well as drawings of other
    turtles are not affected.
    
    Examples:
    >>> clear()
```
**註:** 如果還沒載入該模組, IDLE 會回應, 沒有該指令名.



### 關鍵字 keyword
關鍵字有時又稱為保留字, 每個程式語言都有保留字, 
上面的例子出現的保留字有 **for, in**, 
所謂關鍵字(保留字), 是指你不能改他的名, 也不能定義一個變數跟它們同名.
Python38 目前有 35 個

- **以下可以等進階時再細看**

**查關鍵字的指令:** 
**keyword.iskeyword(s)**
如果 s 是一个 Python 关键字 则返回 True。

**keyword.kwlist**
列出所有關鍵字

```python
>>> import keyword
>>> keyword.iskeyword('in')
True
>>> keyword.kwlist
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```

ref: https://www.programiz.com/python-programming/keyword-list
這個站有對每個 keyword 個別說明
Here's a list of all keywords in Python Programming
Keywords in Python programming language:

False	await	else	import	pass
None	break	except	in	raise
True	class	finally	is	return
and	continue	for	lambda	try
as	def	from	nonlocal	while
assert	del	global	not	with
async	elif	if	or	yield


ref: https://www.w3schools.com/python/python_ref_keywords.asp

and	| A logical operator
as	| To create an alias
assert	| For debugging
break	| To break out of a loop
class	| To define a class
continue |	To continue to the next iteration of a loop
def	| To define a function
del	| To delete an object
elif	| Used in conditional statements, same as else if
else	| Used in conditional statements
except	| Used with exceptions, what to do when an exception occurs
False	| Boolean value, result of comparison operations
finally	| Used with exceptions, a block of code that will be executed no matter if there is an exception or not
for |	To create a for loop
from | 	To import specific parts of a module
global	| To declare a global variable
if	| To make a conditional statement
import	| To import a module
in	| To check if a value is present in a list, tuple, etc.
is	| To test if two variables are equal
lambda	| To create an anonymous function
None	| Represents a null value
nonlocal	| To declare a non-local variable
not	| A logical operator
or	| A logical operator
pass	| A null statement, a statement that will do nothing
raise	| To raise an exception
return	| To exit a function and return a value
True	| Boolean value, result of comparison operations
try	| To make a try...except statement
while  |	To create a while loop
with	 | Used to simplify exception handling
yield	 | To end a function, returns a generator

- **以上可以等進階時再細看**

### 資料型態(數據類型 data type): 
Python 資料型態 主要有: 
int (integer整數), float (浮點, 帶小數點的數), str (string 字串),

可以用 **type()** 查詢該資料的類型
```python
>>> type(1.3)
<class 'float'>
>>> type(2)
<class 'int'>
>>> type('A')
<class 'str'>
>>> type(True)
<class 'bool'>
```
可以透過 **int(), float(), str()** 互相轉換

```python
>>> a = 1.3
>>> type(a)
<class 'float'>
>>> a = int(a)
>>> a
1
>>> type(a)
<class 'int'>
```

另外還有: 布林 (真假值 Boolean),  物件 (Object)
真假值: 只有兩個值，**True** 真,  與 **False** 假

- **以下可以等進階時再細看**

將 ABC 與 ASCII codes 互相轉換
```python
>>> ord('A')
65
>>> chr(65)
'A'
```
- **以上可以等進階時再細看**

### 基本加減乘除算術運算 +, -, *, \/, %, **
加 +
減 -
乘 * 
除   /
次方  \**
餘數 %
```python
>>> 2 + 3
5
>>> 2 - 4
-2
>>> 2**4
16
>>> 2 / 3
0.6666666666666666
>>> 5 % 2
1
>>> 5/2
2.5
>>> 5//2
2
```
內建的 math module 有較多的數學指令可以用,
例如 gcd(), floor(), round 

```python
>>> import math
>>> math.floor(5/2)
2
```
### 比較操作符 >, >=, <, <=, !=, ==
是否大於        >
是否小於        <
是否大於等於 >=
是否小於等於 <=
是否相等        ==
是否不相等    !=

```python
>>> 2 > 4
False
>>> 2 < 4
True
>>> 2 <= 4
True
```
### 邏輯操作 and, or, not

```python
>>> 1 == 2/2 and 2 == 4/2
True
>>> 1 == 2 or 2 == 4/2
True
>>> 1 == 2 or 2 == 4
False
>>> 2 != 3
True
```

### 條件語句(控制流程) if elif else 
if 邏輯條件:
(縮排, 空4格)    執行動作
elif 邏輯條件:
(縮排)    執行動作
else:
(縮排)    執行動作

```python
>>> x = 2
>>> 
if x == 2:
	print('x is 2')
elif x%2 == 0:
	print('x is even')
else:
	print('x is odd')

x is 2

>>> x = 5
>>> 
if x == 2:
	print('x is 2')
elif x%2 == 0:
	print('x is even')
else:
	print('x is odd')

x is odd
```

### 容器型態: 串列(列表) list, 元組 tuple, 字典 dict, 集合 set
用中括號包住的 **[ , , , , ,]** 就是 list
**注意:** 起始元素的下標是 0, 不是1.
```python
fruit=[]

fruit.append(1)

fruit
Out[3]: [1]

fruit.append(2)

fruit
Out[5]: [1, 2]

fruit[0]
Out[7]: 1

fruit[1]
Out[8]: 2

# list 可以更改內容
fruit[0]=3

fruit
Out[14]: [3, 2]

myList = ['A', 'B', 'C']

myList
Out[10]: ['A', 'B', 'C']
```


- **以下可以等進階時再細看**

用小括號包住的 **( , , , , ,)** 就是 tuple, 
tuple 與 list 很像, **只差別在 tuple 一旦定義了, 就不能修改他的內容(元素)**,

```python
myTuple = (1,2,3)

myTuple
Out[12]: (1, 2, 3)
# tuple 不可以更改內容
myTuple(0)=4
  File "<ipython-input-15-10a3072ca96b>", line 1
    myTuple(0)=4
                ^
SyntaxError: can't assign to function call
```

用大括號包住的 **{ , , , , ,}** 就是 dict, 元素必須是 key: value, 一對一對的值,
 **{key1: value1 , key2: value2, key3: value3, , ,}**
 

```python
>>> myDict = { 'John':90, 'Mary':100, 'Sam':95}
>>> myDict
{'John': 90, 'Mary': 100, 'Sam': 95}
>>> myDict[0]
Traceback (most recent call last):
  File "<pyshell#13>", line 1, in <module>
    myDict[0]
KeyError: 0
>>> myDict['John']
90
```
用大括號包住的 **{ , , , , ,}**, 但是只是單純地放一堆值, 就是 set,
類似數學的集合

A | B 聯集 
A & B 交集
A ^ B 互斥

```python
>>> mySet1 = {1,2,3,4}
>>> mySet2 = {1,2,5,6}
>>> mySet1 & mySet2
{1, 2}
>>> mySet1 | mySet2
{1, 2, 3, 4, 5, 6}
>>> mySet1 ^ mySet2
{3, 4, 5, 6}
>>> mySet1 and mySet2
{1, 2, 5, 6}
>>> mySet1 or mySet2
{1, 2, 3, 4}
```

### 內建 數學函數與內建的 math 模組 的數學函數
內建_數學函數:
abs(), comlex(),  max(), min(), pow(), round(), sorted(), sum(), 

內建的 math 模組的數學函數:
sin(), cos(), atan(),,,,fmod(), ceil(), floor(), fabs(),factorial(), exp(), gcd(), pow(x,y), 
log10(), sqrt(),fsum(),  math.gamma(), math.pi, math.e, math.inf ( =float('inf') ), math.nan ( =float('nan'))

ref:
https://docs.python.org/3/library/math.html
[link](https://docs.python.org/3/library/math.html)

\>>> import math
\>>> dir(math)
['__doc__', '__loader__', '__name__', '__package__', '__spec__', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh', 'ceil', 'comb', 'copysign', 'cos', 'cosh', 'degrees', 'dist', 'e', 'erf', 'erfc', 'exp', 'expm1', 'fabs', 'factorial', 'floor', 'fmod', 'frexp', 'fsum', 'gamma', 'gcd', 'hypot', 'inf', 'isclose', 'isfinite', 'isinf', 'isnan', 'isqrt', 'ldexp', 'lgamma', 'log', 'log10', 'log1p', 'log2', 'modf', 'nan', 'perm', 'pi', 'pow', 'prod', 'radians', 'remainder', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'tau', 'trunc']


- **以上可以等進階時再細看**

### Python 函數的定義
 Ref: 官網的文件: python-3.3.2-docs-pdf-a4


#### 打開 IDLE 編輯器
之前都是在終端機模式一行一行下指令, 在定義Python 函數時, 通常程式碼會有多行, 在終端機模式一行一行下指令會有困擾, 這時, 可以打開　IDLE 編輯器, 新增一個草稿檔, 在這個草稿檔上寫程式, 然後執行:

可以打開 IDLE 左上方 `File/New File`, 產生一個空白的類似小作家編輯器, 輸入以下程式碼, 再`按 F5 `執行編譯(run), 會要求存此草稿檔, 你可以指定在例如, 桌面, 等,

`def` adder(x, y)`:`
 (縮排空4格) `return` x + y

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

**切記:** 程式碼在 草稿檔上寫完記得 `按 F5 `執行編譯(run)及儲存.

---



**正規的函數定義法:**
An alternative is to just use the def statement and define a function in the usual way:
```
def 函數名( 引數1, 引數2,,引數n):
 (縮排空4格)  執行指令
 (縮排空4格)  $\cdots$
 (縮排空4格)  return 返回值
```

`def` 跟 `return` 是 保留字, 冒號 `:` 也不要忘記,  其他都是自己取名字.


以下這個函數, 輸入 x,y 值, 會回應 x+y 的值

**def adder(x, y):**
    return x + y

```python
# Ref: 官網的文件: python-3.3.2-docs-pdf-a4

def adder(x, y):
    return x + y
```

```python
>>> adder(2,3)
5
```

**EX:** 解析以下官網的文件的第二個例子, 預測執行時會得出甚麼結果

```python
def print_assign(name, value):
    return name + ’=’ + str(value)
```


Q: 函數的輸入引數可以有預設值嗎?
可以,
   def test( a=10, b):
      return a+b



- **以下可以等進階時再細看**

Q: 函數的輸入引數個數可以不確定嗎?
可以輸入 list, 或是
可以使用 不確定參數數量 __*foos__, 
不確定keywords數量則使用 __**foos__
   foos為自己取的名稱

```python
# Prof. P-J Lai MATH NKNU 20201018
##Q: 函數的輸入引數個數可以不確定嗎?
##可以使用 *args, *kwargs

def mnayArguments(x, *foos):
    temp = sum([y for y in foos])
    return x + temp

print(mnayArguments(1,2,3,4))

>>> 
============ RESTART: C:\Users\user\Desktop\mnayArguments_x_foos.py ============
10
```


**Python 的函數是一個物件, 是一等公民, 函數可以輸入函數, 也可以返回函數**

**Q:** 函數可以輸入函數為引數嗎?
Ans: 可以
先定義一個函數:
def test(f,n):
    return f(n)

再定義一個平方函數:
def f(n):
    return n**2


再輸入
\>>> test(f,3)
9

也可以使用匿名函數 lambda function
\>>> test(lambda x:x**2,3)
9
lambda x: x\**2, 是匿名函數, 代表 $f(x): \; x \rightarrow x^2$, 是一個臨時產生, 隨用隨丟的函數
所以以上就是, test() 這個函數輸入平方這個函數.

**Q:** 函數可以返回函數嗎?
可以


- **以上可以等進階時再細看**

### Python 匿名函數 (lambda function) 的定義
**以下可以等進階時再細看**
**匿名函數:**
**lambda function** 的定義法
adder = **lambda** x, y: x+y
超過1行就用 **def** 的方法

print_assign = **lambda** name, value: name + ’=’ + str(value)

**Q:** 函數可以輸入函數為引數嗎? (有時稱為"高階函數", "泛函函數")
Ans: 可以
先定義一個函數:
def test(f,n):
    return f(n)

再輸入
\>>> test(lambda x: x**2,3)
9
**以上可以等進階時再細看**


### Python 函數的局部變數與全域變數
- 在函數內部定義的變數, 都是局部變數, 出了這個函數就沒有定義,
- 在所有函數外部定義的變數, 都是全域變數,每個函數都**可讀取, 不能改值** (要改, 需在函數內部宣告 **global a(某全域變數名)**   )
Ref: 輕鬆學Python 3 零基礎彩色圖解
https://sites.google.com/site/ezpythoncolorcourse/globalandlocalvariable   [link](https://sites.google.com/site/ezpythoncolorcourse/globalandlocalvariable)

**以下可以等進階時再細看**
- .py檔與 .py檔之間的全域變數共享, 作法較複雜, 可以參考:
python — 怎麼在兩個檔案之間分享全域變數
<a href="https://medium.com/@kweisamx0322/python-%E6%80%8E%E9%BA%BC%E5%9C%A8%E5%85%A9%E5%80%8B%E6%AA%94%E6%A1%88%E4%B9%8B%E9%96%93%E5%88%86%E4%BA%AB%E5%85%A8%E5%9F%9F%E8%AE%8A%E6%95%B8-8fced72f3550" target="_blank">[link]</a>
    
**以上可以等進階時再細看**