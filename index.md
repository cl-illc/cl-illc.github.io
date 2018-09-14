---
layout: main
---

*This is under construction*

# About

* More about [ILLC](//www.illc.uva.nl)
* More about [language and computation at ILLC](http://www.illc.uva.nl/Research/Programmes/laco/)

# News

<ul class="post-list">
{% for post in site.posts %}
  <li>
    {% include postsummary.html post=post %}
  </li>
{% endfor %}

</ul>

