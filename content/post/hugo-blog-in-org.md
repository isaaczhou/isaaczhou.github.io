+++
title = "Writing Hugo blog in Org"
author = ["Isaac Zhou"]
date = 2018-05-05
lastmod = 2018-05-05T06:19:22-04:00
tags = ["hugo", "org"]
categories = ["emacs"]
weight = 2001
draft = false
[menu.post]
  weight = 2001
  identifier = "writing-hugo-blog-in-org"
+++

## First Heading with the post {#first-heading-with-the-post}

-   This post will be exported as
    `content/posts/hugo-blog-in-org.md`
-   Its title will be "Hugo Blog in Org"
-   It will have _hugo_ and _org_ tags and _emacs_ as category
-   The menu item _weight_ and post _weight_ are auto-calculated
-   The menu item _identifier_ is auto-set
-   the _lastmod_ property in the front-matter is set automatically to the time of expoert


### A sub-heading under that heading {#a-sub-heading-under-that-heading}

-   It's draft state will be marked as `true` as the subtree has the todo state set to _TODO_

    with the point <span class="underline">anywhere</span> in this _Hugo Blog in Org_ post subtree, do `C-c C-e H H` to export just this post.
