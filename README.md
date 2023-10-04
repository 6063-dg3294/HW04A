# Thinking
A clock of 3 time dimensions...  
I want to do a changing number visual for the hour, ... wait, How about 

![image description](./1.jpg)

# Hour
I started with hour because I thought it would be the easist.  
My logic:  
1. Name an initial number
2. write a if: if the number is not the initial number, make the initial number the hour now, and add the length of the rect
I fixed the problem I encountered by moving the factor (hourSize) from outside the draw() to inside so it won't be refreshed every frame.   

Problem: the rectangle is not in the center.  
I fixed it by naming the x and y positions to their relations of the 2/screen.   

![image description](./2.png)


# Clock Text
Then, I feel like visuals are good, but a digital clock would be a great hint.   
I want to explore text() to do this.  

When I was checking the reference, I thought this might be helpful in creating fun gifs visuals in the future so I took a note here:  
![image description](./3.png)

I began by confirming where to put the text in case the display text might go bug later. 
I looked up how to write ":" in code and it's **+ ':' +**
![image description](./4.png)

# Minutes
Using the same for loop, I drew the circle that changes size according to the minute change. 
![image description](./5.png)

# Seconds
I made the frame rate 1 and use second to decide random RGBs.  
![image description](./6.png)



# p5.js Template

This is a README file that can be used to describe and document your assignment.

Markdown Cheatsheet (from [https://www.markdownguide.org/cheat-sheet/](https://www.markdownguide.org/cheat-sheet/)):

---
---

# Heading1
## Heading2
### Heading3
#### Heading4
##### Heading5
###### Heading6

**bold text**

*italicized text*

~~strikethrough text~~

Ordered List:
1. First item
2. Second item
3. Third item

Unordered List:
- First item
- Second item
- Third item

`short code block`

```
extended code block
fun() {
  return 0
}
```

Link:  
[linked text](https://www.example.com)


Image with url:  
![image description](https://dm-gy-6063-2023f-d.github.io/assets/homework/02/clark-espaco-modulado-00.jpg)


Image on repo:  
![image description](./file-name.jpg)


To start a new line, add two spaces at the end of a line, like this:  
this is a new line.


To start a new paragraph, leave an empty line between two lines of text.

This is a new paragraph.
