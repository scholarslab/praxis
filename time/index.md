---
layout: time
title: Time
---

<div class="all-posts">
{% for post in site.posts %}
  {% if post.categories contains 'blog' or post.categories contains 'memo' %}
    <div class="post-info">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p>{{ post.excerpt | truncatewords:15 }}</p>
    </div>
  {% endif %}
{% endfor %}
</div>
