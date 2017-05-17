---
layout: default
title: People
---

# People
 {% assign reversed_cohorts = (site.data.cohorts | reverse )%}
{% for cohort in reversed_cohorts %}
<h2>Praxis Fellows, {{ cohort.date }}</h2>
<ul>
  {% for person in site.data.fellows %}
    {% if cohort.number == person.cohort %}
      <li><a href="{{ person.page }}">{{ person.name }}</a>, {{ person.department }}</li>
    {% endif %}
  {% endfor %}
</ul>
{% endfor %}

## Praxis Program Faculty and Staff
<ul>
{% for person in site.data.slab %}
{% if person.active == true %}
<li>{{ person.title }}<a href="{{ person.page }}">{{ person.name }}</a>, {{ person.position }}</li>
{% endif %}
{% endfor %}
</ul>

Additional Praxis Program advisors are drawn from the faculty and staff of the [UVa Library](http://lib.virginia.edu/)'s [Scholars' Lab](http://www2.lib.virginia.edu/scholarslab/consultation/index.html) and collaborating schools, departments, and centers at the [University of Virginia](http://www.virginia.edu/). [Follow us](https://twitter.com/praxisprogram) on Twitter and by subscribing to our [feed](http://www.scholarslab.org/tag/praxis-program/feed/).


## Faculty and Staff Alumni

<ul>
{% for person in site.data.slab %}
{% if person.active != true %}
<li>{{ person.title }}<a href="{{ person.page }}">{{ person.name }}</a>, former {{ person.position }}</li>
{% endif %}
{% endfor %}
</ul>
