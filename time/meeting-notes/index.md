---
layout: time
title: Meeting Notes
---
<div id="meeting-notes">
  {% for post in site.categories.meeting-notes %}
  <article>
    <div class="post-info">
      <a href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
    </div>
    {{ post.excerpt }}
  </article>
  {% endfor %}
</div>
