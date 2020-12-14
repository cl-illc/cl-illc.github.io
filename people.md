---
layout: bubblelist
title: People
menu: yes
---

## Researchers

{% assign people = (site.data.staff | where: "selected", "nlp") %}
{% include people.html people=people %}

## PhD candidates

{% assign people = (site.data.phds | where: "selected", "nlp") %}
{% include people.html people=people %}

## Alumni

{% assign people = (site.data.staff | where: "selected", "nlpalumni") %}
{% include people.html people=people %}

{% assign people = (site.data.phds | where: "selected", "nlpalumni") %}
{% include people.html people=people %}
