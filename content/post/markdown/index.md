+++
author = "Isaac Zhou"
categories = ["Markdown"]
date = 2018-05-08
description = ""
featured = "/08/markdown.png"
featuredalt = "markdown"
featuredpath = "date"
linktitle = ""
title = "Markdown Crash Course"
type = "post"
+++

<!-- Headings -->
To write headings use `#`

For example, `# Heading 1` will generate 
# Heading 1

Similarly, the rest can be generated
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
___

For text decoration
This text is _italicized_, using `_word_`

This text is **string**, using `**word**`

This text is ~~strikethrough~~, using `~~word~~`

___

Horizontal Rules

can be done with `___` or `***`
___ 

***

Blockquotes

> This is a quote

___

Links can be done as this `[Isaac Zhou](https://www.isaaczhou.com)`

[**Isaac Zhou**](https://www.isaaczhou.com)

Links with title can be done as this `[Isaac Zhou](https://www.isaaczhou.com"Isaac Zhou")`

[**Isaac Zhou**](https://www.isaaczhou.com"Isaac Zhou")

Image is very similar, with relative path `![orgdemo](/img/orgmode-demo.png)`
![orgdemo](/img/orgmode-demo.png)

Image with absolute path
![AI](https://cdn-images-1.medium.com/max/2000/1*yEyN36NibvtmaKgaLdq7RA.jpeg)
---

Unordered List

* Item 1
* Item 2
* Item 3
  * Item 3.1
  * Item 3.2

Ordered List

1. Item 1
1. Item 2
1. Item 3
   1. Item 3.1
   1. Item 3.2
   
___

Inline code block

`<p> This is a paragraph </p>`

Can also use triple \`\`\`

```
  npm install react
```

Can also specify the language,

javascript
```javascript
  (res, req) => console.log(req)
```

python
```python
  import pandas as pd
  pd.read_csv("data.csv")
```
___

Tables

| Name  | Email           | Role      |
|-------|-----------------|-----------|
| Isaac | isaac@gmail.com | Data Geek |

___

Task List

* [x] Task 1
* [ ] Task 2
