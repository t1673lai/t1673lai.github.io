
---
title: "Escher 愛雪磁磚設計法則 - 高雄燕巢深水國小科展指導"
collection: courses
type: "大學課程"
permalink: /courses/python-mathematics-implementation-01
venue: "動態幾何軟體GeoGebra, 幾何學"
date: 2025-09-01
location: "Taiwan"
excerpt: "Escher 愛雪磁磚設計法則 - 高雄燕巢深水國小科展指導"
---

在日常生活中磁磚圖案處處可見，有些很美麗又呈現規律性，規律中又隱含著難以預期的排列方式，我們希望能以文獻中能找到的愛雪法則 Escher rule 去解析看到的繁複又美麗的磁磚圖案，以這些法則去解構還原出設計者使用的方法與思路，透過這樣的探索研究過程，我們也能設計出自己獨創的磁磚。


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

---
本系列文章:

- GeoGebra 與數學探索 1 GeoGebra 入門到進階之整體介紹 1 [link](https://blog.csdn.net/m0_47985483/article/details/128215123?fromshare=blogdetail&sharetype=blogdetail&sharerId=128215123&sharerefer=PC&sharesource=m0_47985483&sharefrom=from_link)
- GeoGebra 與數學探索 2 Escher 愛雪磁磚設計法則 - 高雄燕巢深水國小科展指導  [link](https://blog.csdn.net/m0_47985483/article/details/128625687?fromshare=blogdetail&sharetype=blogdetail&sharerId=128625687&sharerefer=PC&sharesource=m0_47985483&sharefrom=from_link)



- GeoGebra 與數學探索 3 GeoGebra 在微積分的探索與動態演示 [link](https://blog.csdn.net/m0_47985483/article/details/142378599?fromshare=blogdetail&sharetype=blogdetail&sharerId=142378599&sharerefer=PC&sharesource=m0_47985483&sharefrom=from_link)


- GeoGebra 與數學探索 2 GeoGebra 在幾何的探索與動態演示介紹 1 [link]()

- GeoGebra 與數學探索 4 GeoGebra 在線性代數(矩陣)的探索與動態演示 [link]()

- GeoGebra 與數學探索 5 GeoGebra 中使用試算表spreadsheet 產生批量動畫演示 [link]()
- GeoGebra 與數學探索 6 GeoGebra 中使用GGBScript指令 [link]()
- GeoGebra 與數學探索 7 GeoGebra 中使用JavaScript [link]()


---

@[TOC](文章目录)
---

# Escher 愛雪 風格之磁磚
荷蘭藝術家==愛雪(M. C. Escher)== 以其獨特的鑲嵌圖聞名於世，他還被認為是藝術界與科學界==視覺錯視==方面的開山祖師，愛雪的獨特之處在於，==他的畫作揉合進大量的"數學知識"與"抽象數學之設計感"==，他的作品的藝術性受到藝術界的肯定，而背後運用的數理的知識性與深度又受到科學界與數學界的重視，可以說是，橫跨藝術與數學的人裡面，他是古往今來大師之一! 愛雪於1972年逝世，荷蘭將其文化遺產視為荷蘭的國寶，為其成立一座愛雪博物館(ref 網址)，愛雪博物館網頁收錄了最完整的愛雪的資訊。
    
馬丁加納德早年(1966)一篇在科學美國人雜誌中的文章，介紹愛雪作品含有豐富的數學內容，引起當時廣大科學界與科教界的重視，之後較系統性地、以嚴謹的群論討論愛雪作品的專書，當以 Coxeter、Emmer、Penrose 及 Teuber 1986年所寫的書最為著名，另外 Doris Schattschneider 是一位數學系教授，長期研究分析愛雪作品的數學內容，她的書也一再被引用。
 
還有大量介紹愛雪作品的書籍與網站，則是不勝枚舉，但多半是以藝術或趣味的觀點來介紹，對於其背後的數學設計原理，則著墨不多。愛雪生平與作品相當完整的回顧可以看[10], 愛雪作品中的數學元素之介紹由Shawn Taylor講解 [11].
    
國內科展研究主題有關愛雪鑲嵌圖背後的數學原理的只有少數幾組出現在國中與高中科展，他們的內容都有相當的豐富性，另外中原大學商業設計系張瑜軒碩士論文 [ 2002,,,,]，有完整的愛雪個人生平歷史與畫作之藝術性與數學性之介紹，是一個國內本土的優秀的參考文獻。

# 愛雪磁磚之設計方法
以下是高師大數學系幾何學課, 李世裕同學幾何學報告設計的鬥魚磁磚, 使用了愛雪的平移與滑動反射法(平移反射法)設計法則

高師大數學系李世裕同學幾何學報告_鬥魚磁磚_原形圖
![高師大數學系李世裕同學幾何學報告_鬥魚磁磚_原形圖](https://i-blog.csdnimg.cn/blog_migrate/9bc0f1426565f0aafc08c6d1f99403ce.png)

高師大數學系李世裕同學幾何學報告_鬥魚磁磚_完成圖


![高師大數學系李世裕同學幾何學報告_鬥魚磁磚_完成圖](https://i-blog.csdnimg.cn/blog_migrate/f14228a395514f3ed7981d87d4f88c92.jpeg)




## 平移法
![賴鵬仁老師講義_Escher平移映射](https://i-blog.csdnimg.cn/blog_migrate/1a77e3de49a7cfc398547209d7c8c210.png)

### 平移法應用 愛雪飛馬 分析

![20230325_4_飛馬_GGB_上方曲線平移向下](https://i-blog.csdnimg.cn/blog_migrate/4c128201b39440470cb3090e0ca51ed5.png)
### 用 GeoGebra 分析之 詳細步驟:

20230325_1_飛馬_GGB_取基底磁磚頂點
![20230325_1_飛馬_GGB_取基底磁磚頂點](https://i-blog.csdnimg.cn/blog_migrate/1126f1c3a932af20de252b5a77feef1f.png)

20230325_2_飛馬_GGB_做出基底磁磚
![20230325_2_飛馬_GGB_做出基底磁磚](https://i-blog.csdnimg.cn/blog_migrate/500be53e644e4c02327564bba31e1a2f.png)

20230325_2.0_飛馬_GGB_做出上方馬頭曲線
![20230325_2.0_飛馬_GGB_做出上方馬頭曲線](https://i-blog.csdnimg.cn/blog_migrate/ce55c245bc00d4d88258ae2b15d528ec.png)


20230327_2.1_飛馬_馬頭曲線_滑桿_GGB
![20230327_2.1_飛馬_馬頭曲線_滑桿_GGB](https://i-blog.csdnimg.cn/blog_migrate/18f45ddbb1c9876519fa002a84626bbd.png)

20230327_2.2_飛馬_馬頭曲線_滑桿_GGB

![20230327_2.2_飛馬_馬頭曲線_滑桿_GGB](https://i-blog.csdnimg.cn/blog_migrate/93e948753f3496d63e7a42d00ca581d6.png)

20230327_2.3_飛馬_馬頭曲線_滑桿_GGB
![20230327_2.3_飛馬_馬頭曲線_滑桿_GGB](https://i-blog.csdnimg.cn/blog_migrate/a01d21cca0224eb2b2b5d31190f7b322.png)

20230327_2.4_飛馬_馬頭曲線_滑桿_GGB
![20230327_2.4_飛馬_馬頭曲線_滑桿_GGB](https://i-blog.csdnimg.cn/blog_migrate/9bdc467cef2c586857e255e73bf19888.png)

20230327_2.5_飛馬_產生馬身曲線_滑桿_GGB

![20230327_2.5_飛馬_產生馬身曲線_滑桿_GGB](https://i-blog.csdnimg.cn/blog_migrate/0b3c0a76dbd60c9a2bb362c7793a713c.png)

20230327_2.6_飛馬_產生馬身折線_滑桿_GGB

![20230327_2.6_飛馬_產生馬身折線_滑桿_GGB](https://i-blog.csdnimg.cn/blog_migrate/d1fd783d91673cb353c0c8019051d7af.png)

20230327_2.7_飛馬_平移馬身折線_滑桿_GGB
![20230327_2.7_飛馬_平移馬身折線_滑桿_GGB](https://i-blog.csdnimg.cn/blog_migrate/dfcb295e47597778dc9cbd36a36c7141.png)
20230327_2.8_飛馬_平移馬身折線_滑桿_GGB

![20230327_2.8_飛馬_平移馬身折線_滑桿_GGB](https://i-blog.csdnimg.cn/blog_migrate/123d18f084a3f618a8f87072224e238f.png)

20230327_2.9_飛馬_平移馬身折線_滑桿_GGB
![20230327_2.9_飛馬_平移馬身折線_滑桿_GGB](https://i-blog.csdnimg.cn/blog_migrate/544cc843eea2ca2420447d06a38f7b3f.png)

20230327_2.10_飛馬_平移馬身折線到位_滑桿_GGB
![20230327_2.10_飛馬_平移馬身折線到位_滑桿_GGB](https://i-blog.csdnimg.cn/blog_migrate/76eecdc77ad0f85d34ea41e549a86ddb.png)

20230327_2.11_飛馬_選取頂點製作多邊形_滑桿_GGB
![20230327_2.11_飛馬_選取頂點製作多邊形_滑桿_GGB](https://i-blog.csdnimg.cn/blog_migrate/ee442fc2455a6e24b76cdb94e95da1ec.png)

20230327_2.12_飛馬_完成飛馬多邊形磁磚_滑桿_GGB
![20230327_2.12_飛馬_完成飛馬多邊形磁磚_滑桿_GGB](https://i-blog.csdnimg.cn/blog_migrate/3989529a457623785a449f9b3a9e66ff.png)

20230327_2.13_飛馬_完成飛馬多邊形磁磚與基底磁磚相比_滑桿_GGB
![20230327_2.13_飛馬_完成飛馬多邊形磁磚與基底磁磚相比_滑桿_GGB](https://i-blog.csdnimg.cn/blog_migrate/ae28ecae8f8c311476823496b007958b.png)

20230327_2.14_飛馬_完成飛馬多邊形磁磚與基底磁磚相比_滑桿_GGB
![20230327_2.14_飛馬_完成飛馬多邊形磁磚與基底磁磚相比_滑桿_GGB](https://i-blog.csdnimg.cn/blog_migrate/588aac8fda9f4074b59cb08a9e9c0bb0.png)
20230327_3.1_飛馬_完成飛馬多邊形磁磚與基底磁磚相比_GGB
![20230327_3.1_飛馬_完成飛馬多邊形磁磚與基底磁磚相比_GGB](https://i-blog.csdnimg.cn/blog_migrate/3b523ac0bc0f93985283944180b6bb28.png)

20230410_3.2_飛馬_完成單一飛馬多邊形磁磚_GGB
![20230410_3.2_飛馬_完成單一飛馬多邊形磁磚_GGB](https://i-blog.csdnimg.cn/blog_migrate/559e14753c903602dcf54e4e161e485c.png)

20230410_3.3_飛馬多邊形水平平移 一個Translate(飛馬多邊形,v)_GGB

先做出一個向量 v,
==Geogebra 平移指令==: `Translate(飛馬多邊形,v)`

![20230410_3.3_飛馬多邊形水平平移 一個Translate(飛馬多邊形,v)_GG](https://i-blog.csdnimg.cn/blog_migrate/9c3af9f2e17d96a14a767db642a199b2.png)

==GeoGebra 批量平移指令: 使用  Sequence()==
`Sequence(Translate( 飛馬多邊形, k*v), k, 1, 10)`
20230410_3.4_飛馬多邊形磁磚水平鋪出_Sequence滑桿_GGB
![20230410_3.4_飛馬多邊形磁磚水平鋪出_Sequence滑桿_GGB](https://i-blog.csdnimg.cn/blog_migrate/c3aa31fec2ab03f94bce8d8588d797e4.png)
20230410_3.5__飛馬多邊形磁磚垂直鋪出_Sequence滑桿_GGB
![20230410_3.5__飛馬多邊形磁磚垂直鋪出_Sequence滑桿_GGB](https://i-blog.csdnimg.cn/blog_migrate/56c3f7e6d7a18cbeedcc8e3d0c4df371.png)


![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/e7f67b95c42a2f201e13da8aad57a746.gif#pic_center)





































## 滑動反射法(平移反射法)

![賴鵬仁老師講義_Escher滑動反射](https://i-blog.csdnimg.cn/blog_migrate/ff6136a9707a8f96e36856431c57b740.png)

## 中點旋轉(對稱)法
![賴鵬仁老師講義_Escher邊旋轉述](https://i-blog.csdnimg.cn/blog_migrate/f73796035372bd072319214aa2b2c460.png)


##  邊旋轉法
![賴鵬仁老師講義_Escher邊旋轉](https://i-blog.csdnimg.cn/blog_migrate/15c86c1ff9bf94e7619cc7d2a6373d08.png)



# References 參考資料


1. L.C. Kinsey and T.E. Moore, Symmetry, Shape, and Space,2002,  Key College Publishing,

2. 賴鵬仁, 幾何學講義第二部：鑲嵌圖形之幾何結構與碎形幾何學以電腦軟體輔助探索, 2009.
3. Peng-Jen Lai, How to make fractal tilings and fractal reptiles, Fractals, Vol. 17, No. 4 (December 2009) 493–504 [2009 SCI  MATHEMATICS, INTERDISCIPLINARY APPLICATIONS 30/76=40%, Q2 Impact 0.486]

4. B. Grunbaum and G.C. Shephard, Tilings and patterns, W.H.Freeman and Company, 1987.
5. Gardner, 詭論鋪瓷磚波羅米歐環, 天下文化.
6. Gardner M. On tessellating the plane with convex polygon tiles. Scientific American July 1975.
7. Martin Gardner, The Unexpected Hanging and Other Mathematical Diversions,  Simon & Schuster, New York, 1969.
8. Doris Schattschneider, “Tiling the Plane with Congruent Pentagons,”Mathematics Magazine51(1),1978.
9. Doris Schattschneider, Visions of Symmetry: Periodic Drawings, and Related Work of M.C. Escher, W.H.Freeman, New York, 1990.
10. F.H. Bool, J.R. Kist, J.L. Locher, and F. Wierda, M.C. Escher: His Life and Complete Graphic Work, Harry N. Abrams, New York, 1992.
11. 愛雪生平與作品相當完整的回顧:
    M.C. Escher Documentary (by CINEMEDIA-NPS-RNTV) [1999]
    https://youtu.be/g4VAxilTRGs [link](https://youtu.be/g4VAxilTRGs)

12. 愛雪作品中的數學元素之介紹:
    M.C. Escher - "Images Of Mathematics" (by Shawn Taylor)
    https://youtu.be/n_KwjCstEDI [link](https://youtu.be/n_KwjCstEDI)
