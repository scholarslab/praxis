---
layout: page
title: Projects
permalink: "/projects/"
---
<h1>Projects</h1>
Each year, the Praxis Program fellows take on a particular project to exercise what they have learned throughout the year. Some projects have spanned cohorts, while others were executed in the span of a single. Some projects explored extant vaporware projects in the Lab, while others were inspired by experiments with a more freeform prompt. Explore the list below, presented in chronological order, for more information about each project.

{% for project in site.data.projects %}
---
<img src="{{ project.image_path }}" style="max-width:350px; float: right; margin-left:15px;">

<h3> {{ project.name }} </h3>

{{ project.description }} More information can be found at the <a href="{{ project.url }}">project's homepage</a>.
<div style="clear:both;"/>

People:
{% for cohort in project.cohort %}
<ul style="float: left">
  {% for person in site.data.people %}
  {% if cohort == person.cohort %}<li>{{ person.name }}</li>{% endif %}
  {% endfor %}
  </ul>
  {% endfor %}
  <div style="clear:both;"></div>
{% endfor %}
