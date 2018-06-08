---
layout: bubblelist
title: People
menu: yes
---

## Researchers

{% assign people = (site.data.staff | where: "selected", "y") %}
{% include people.html people=people %}

## PhD candidates

{% assign people = (site.data.phds | where: "selected", "y") %}
{% include people.html people=people %}
