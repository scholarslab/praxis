---
layout: page
title: Praxis Program Charters
tags: charter
---

{% assign groups = site.data.cohorts %}
{% assign most_recent = groups.last %}

The [Praxis Program Charter](/praxis-program-charter/) aims to outline core and shared values of the Praxis Program as the Scholars' Lab faculty and staff envision it. It represents both a set of working practices and a way of navigating future outcomes based on the work of the fellowship. The values expressed there are supplemented by our [Scholars' Lab Student Programs Charter](http://scholarslab.org/student-programs-charter) as well as by the <a href="http://scholarslab.org/about/charter/">lab charter</a> put together by the Scholars' Lab in 2014 that outlines many of our shared values and what we see as our mission. Explore all three of these documents together for a full expression of our pedagogy.

Our [Towards a Project Charter](/resources/toward-a-project-charter/) page provides resources that have grounded our discussions and creation of the Praxis Charters.

## Cohort Charters

Each cohort of Praxis Fellows assembles their own charter that reflects, as best they can articulate at the time, their shared goals, values, and working procedures. The most recent cohort's charter (the {{ most_recent.date }} team) can be found [here]({{ most_recent.charter }}). The charters of all cohorts can be found below:

<ul>
{% for cohort in groups %}
<li><a href="{{ cohort.charter }}">{{ cohort.date }} cohort</a></li>
{% endfor %}
</ul>
