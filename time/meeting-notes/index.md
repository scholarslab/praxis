---
layout: page
title: Meeting Notes
---
# Meeting Notes

<div id="meeting-notes">
  {% for post in site.categories.meeting %}
  <article>
    <div class="post-info">
      <a href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
    </div>
    {{ post.content }}
  </article>
  {% endfor %}
</div>
