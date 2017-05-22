---
layout: page
title: Projects
permalink: "/projects/"
---
<h1>Projects</h1>
Each year, the Praxis Program fellows take on a particular project to exercise what they have learned throughout the year. Some projects have spanned cohorts, while others were executed in the span of a single. Some projects explored extant vaporware projects in the Lab, while others were inspired by experiments with a more freeform prompt. Explore the list below, presented in chronological order, for more information about each project. Each cohort blogs their progress on the [Scholars' Lab blog](http://scholarslab.org/archives/), where you can find more writings about the projects as they have developed. Further publications, writings, or awards are so noted.
{% for project in site.data.projects %}
---
<h3> {{ project.name }} </h3>
<div class="project-description" style="width:50%; padding-bottom:14px; float:left;">
{{ project.description }} More information can be found at the <a href="{{ project.url }}">project's homepage</a>.
</div>
<div class="project-image" style="float: right; width:50%;"> <img src="{{ project.image_path }}" style="">
</div>

<div style="clear:both;"/>

<!-- for each cohort -->
{% for cohort in project.cohort %}

{% for cohort_data in site.data.cohorts %}
{% if cohort_data.number == cohort %}
<div class="cohort-list" style="float: left; margin-right: 14px;">
        <div id="cohort-date">{{ cohort_data.date }}</div>
    {% endif %}
  {% endfor %}
  <ul style="float: left">
    {% for person in site.data.fellows %}
      {% if cohort == person.cohort %}
        <li>{{ person.name | remove: '<p>' | remove: '</p>' }}</li>
      {% endif %}
      {% endfor %}
  </ul>
  </div>
{% endfor %}
  {% if project.awards %}
  <div class="project-awards" style="padding-left: 14px; padding-rightL 14px;">
  Awards
  <ul>
  {% for award in project.awards %}
    <li>{{ award }}</li>
  {% endfor %}
</div>
  {% endif %}
  {% if project.publications | size  > 1 %}
  <div class="project-publications" style="padding-left: 14px; padding-right: 14px;">
Publications
  <ul>
  {% for publication in project.publications %}
<li>{{ publication }}</li>
  {% endfor %}
  </ul>
  </div>
  {% endif %}
  <div style="clear:both;"></div>
  {% endfor %}
