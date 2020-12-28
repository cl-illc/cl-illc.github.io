# CL-ILLC

This repository hosts cl-illc's github pages.

# Contribute a page

You can add a page by adding a markdown file to the root of the repository. This file stards with a header

```
---
layout: default
title: New Page
menu: yes
---
```

where you specify a title for the page and whether or not it appears in the menu from the main page `index.md`. The default layout is typically what you need.

The rest of this file is just standard markdown syntax, for example

```
---
layout: default
title: Projects
menu: yes
---

# Project 1

* Read this 
* Write that

Due date: ...

# Project 2

* Implement this
* Implement that

Due date: ...
```

# Contribute content pages not in menu

We are keeping pages that are not accessible from the menu under `content/`

# Adding resources

If you need to add resources such as pdfs, latex filex, data, add to the folder `ull/resources` and link it from a certain page.
