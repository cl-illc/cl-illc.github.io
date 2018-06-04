---
layout: bubblelist
title: People
menu: no
---


{% assign people = (site.data.staff | where: "selected", "y") %}
{% for person in people %}
{% include person.html person=person %}
{% endfor %}


