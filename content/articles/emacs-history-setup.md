+++
author = "Isaac Zhou"
categories = ["Emacs"]
date = 2017-11-12
description = "My Experience with Emacs and its Setup"
featured = "emacs.png"
featuredalt = "Emacs"
featuredpath = "date"
linktitle = ""
title = "Experiencing and Enjoying Emacs"
type = "post"
+++


## A little bit about my background {#a-little-bit-about-my-background}

Actually I learnt about emacs really long time ago. It was around 2003~2004, when I was still a college student majoring in Computer Science back in China. I majored in a top notch major in a top tier engineering school in China. However, I was not in love of it. The environment was really choking back then and I couldn't see my future there. I was only interested in the fundamental courses such as mathematical analysis (a fancier name for calculus), probability and statistics, discrete mathematics... During my sophomore year, I got interested in algorithms and data structure, however I had no interests in learning a programming langauge well. Until one day, I found a book called [An Introduction to Programming in Emacs Lisp](https://www.gnu.org/software/emacs/manual/eintr.html). Unlike popular languages such as C/C++ or Java, lisp reads more like maths and its syntax kinda made sense to me. In the book, I also learnt that emacs was a powerful text-editor that is so much more than just a text editor. I tried it, got totally confused and stressed, eventually I let it go. Later I dropped out of that college and left China for a business education.

I never touched any hardcore computer programming since then. However, after 2+ years intensive training in a top tier school, I could feel that my computer skills are definitely above average among my classmates and colleauges. This slight edge is definitely one of the factors that helped me go far.

After graduating with a master in finance degree from a top tier business school in Europe, I joined a boutique management consulting company based in New York. Unlike all the other consultants, I was given more tasks and responsibilities to build models and automated analytical tools. Since most of the business analytics in the real world still can't live with Excel, I mainly started programming in VBA. Yet, I always know there are something more to it.

In the next couple of years, I taught myself Python, R, SQL, Scala and Javascript. Being a data geek, I didn't just learn the languages but also used them for modeling and data analysis. During this period, like all the other data professionals (seriously data scientist is another abused word), I started and stayed with Jupyter Notebook/iPython. I'm truly grateful to Continuum for packaging all the Python libraries together and providing open source editions for developers and students to use.

Jupyter is a truly powerful environment. I actually loved it and use it not just for Python, but as its new name (not just ipython) suggested, I also used it for a bunch of other languages after installing proper kernels such as R, SQL, Javascript etc.
But I don't know why it always felt weird to write codes in a browser. I then started exploring different options: Sublime, Atom, Vim not :), until I found this great series of courses on youtube ([RT2011](http://vislab-ccom.unh.edu/~schwehr/rt/)). It's a university level research tool at the University of New Hampshire for researchers and science students. Using emacs, org mode on a linux machine is freaking cool and awesome.

I spent a lot of time learning emacs in 2017 and finally got comfortable with it now. Still get a lot to learn, but I'm happy with my current set up and working environment.


## Emacs Set up {#emacs-set-up}

This process could be intimidating and tasteless. Most people would just dump all the configs into one init.el file under .emacs/ folder. It's fine and a good start, yet I found the best practice is to use the org mode.

Here's a very good [tutorial](https://www.youtube.com/watch?v=SzA2YODtgK4) from my NYC emacs meetup. Also there are some good quality videos from [emmaculate](https://www.youtube.com/channel/UCGM8KgUXqsS4d8-4rgWRWKg). The basic idea is to embed elisp configs into a beautiful org mode file.

I didn't create mine from scratch. I used the config files from here:

-   [Daniel Mai](https://github.com/danielmai/.emacs.d)
-   [HRS](https://github.com/hrs/dotfiles/tree/master/emacs)
-   [Emacs as Python IDE](https://github.com/wernerandrew/jedi-starter)

Here's my current config on mac:

-   <https://github.com/isaaczhou/.emacs.d>

The linux config should be almost the same (minus some mac specific fonts/configs).
