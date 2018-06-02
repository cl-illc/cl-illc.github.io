---
layout: photolist
title: Reading
menu: yes
---


{% assign groups = (site.data.reading | where: "selected", "y") %}
{% for group in groups %}
{% include group.html group=group %}
{% endfor %}



