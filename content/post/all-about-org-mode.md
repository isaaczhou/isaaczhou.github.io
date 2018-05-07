+++
author = "Isaac Zhou"
categories = ["Emacs"]
date = 2017-11-13
description = "A Sneak Peek of Emacs Org-Mode Capabilities"
featured = "org.png"
featuredalt = "Org Mode"
featuredpath = "date"
linktitle = ""
title = "Org-Mode Capabilities"
type = "post"
+++

One of the reasons my marriage with Jupyter didn't hold was the beautiful and sexy org-mode. I was totally blown away the first time I saw it. Just like emacs is more than a text editor; org-mode is much more than a note-taking, spreadsheet, task tracker, planner, literate programming code editor (Oh Yeah!!!)... I guess the proper definition for org-mode is really an Emacs subsystem.


## The Almighty Org-Mode {#the-almighty-org-mode}

The org-mode was first introduced to the world in 2008 at this [Google Talk](https://youtu.be/oJTwQvgfgMM). It's created by [Carsten Dominik](https://staff.science.uva.nl/c.dominik/), a Dutch astronomer (or as average Americans natively say a rocket scientist). This talk is fascinating. Yet just like genesis in the Bible, it's a little bit "in the Old Testament".

What I really enjoyed is this talk from Harry Schwartz at a [NYC emacs meetup talk](https://youtu.be/SzA2YODtgK4). By the way, this could be the best meetup I've ever been to in New York. I tried to go there more regularly. Another cudo for this meetup is the free food and drinks. People from the host company, thoughtbot, are extremely friendly, supportive and knowledgeable.


## Org-Mode Capabilities {#org-mode-capabilities}

So enough talk, let's have a look what org-mode is capable of:


### Automatically generated bullet points {#automatically-generated-bullet-points}

Either unordered or ordered lists can be easily created:

-   To start: Just type ~\* ~
-   Then create the siblings with `M RET` or `C RET`. I think the differences are:
    -   `M RET` is to start with a sibling of the same type
    -   `C RET` is to start a new listed header
-   To indent or unindent a list use `M Right` or `M Left`
-   To change the bullet point type, use `S Right` or `S Left`
-   Install [org-bullet](https://github.com/sabof/org-bullets) to make it look great!


### Spreadsheet {#spreadsheet}

Who needs Excel if you have emacs? To create a table:

-   Simply use `|content|`
-   Use `|- TAB` to add a divider line

| Header1 | Header2 | Header3 |
|---------|---------|---------|
| Row1    | Row2    | Row3    |
|         |         |         |


### Easy Calendar Integration {#easy-calendar-integration}

Calendar Integration makes it easier for task tracking and project planning:

-   `C c .` to activate the date
-   HOLD `S Left` or `S Right` to navigate in the calendar


### Org-Mode Babel: The Jupyter Notebook Killer {#org-mode-babel-the-jupyter-notebook-killer}

I have to say this is the best thing I've ever seen, and not just in computer.

-   ob-ipython

This my most used code block. I create a snippet and generate a code block as below

```ipython
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
%matplot inline

fig, ax = plt.subplots();
ax.hist(np.random.randn(1000), bins=50)
```

{{<figure src="/img/orgmode-demo.png">}}

-   Javascript

Can also evaluate javascript with proper Node.js installation

```js
var mod = (a, b) => Math.pow(a, b);
console.log(mod(4,8));
```

I wish that there's a way to implement D3.js in org, that will be perfect


