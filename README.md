# CL-ILLC

This repository hosts cl-illc's github pages.

# Edit the database with people and courses

First of all, be careful because the databases required very specific formats. The data about courses we teach can be entered in _data/bsc.yml and _data/msc.yml. In the future, it would be nice if tutorials.yml gets filled up as well (e.g. w/ links to Wilker's tutorial, Jelle's ESSLLI'2021 course). Information about people can be entered in _data/phds.yml and _data/staff.yml. Make sure to also add a picture (for now: only jpg seems to work) in img/people/


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
