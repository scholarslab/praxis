---
layout: time
title: Memos
---
<div id="memos">
  {% for post in site.categories.memo %}
  <article>
    <div class="post-info">
      <a href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
    </div>
    {{ post.excerpt }}
  </article>
  {% endfor %}
</div>
