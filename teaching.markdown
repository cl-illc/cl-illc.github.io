---
layout: photolist
title: Teaching
menu: yes
---

# Master courses

{% assign courses = (site.data.msc | where: "selected", "y") %}
{% for course in courses %}
{% include course.html course=course %}
{% endfor %}


# Bachelor courses

{% assign courses = (site.data.bsc | where: "selected", "y") %}
{% for course in courses %}
{% include course.html course=course %}
{% endfor %}
