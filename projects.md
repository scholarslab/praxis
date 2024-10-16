---
layout: page
title: Projects and Activities
permalink: "/projects/"
---
Praxis training takes a variety of shapes meant to reflect the full-range of DH work. As a part of their training with us, student cohorts regularly publish a range of values statements describing the intentional communities they want to build together. They also design and teach digital humanities workshops based on their own interests as a means to exercise minimalist pedagogical approaches to DH. Students design speculative projects and events that might go on to be implemented by the Lab. They also participate in a range of technical and design activities meant to reflect the range of digital practices they will encounter in their research. At times, Praxis teams have developed and launched specific, named projects. Links to some of these materials can be found below.


<h2>Charters</h2>

{% assign groups = site.data.cohorts %}
{% assign most_recent = groups.last %}

One of the first activities each cohort undertakes is to define the nature of their group identity. Who are they? What are their values? How will they work together? The students engage in a series of discussions around these topics with staff and articulate them in a charter, a shared document about their collective identity and practices.

<ul>
{% for cohort in groups %}
<li><a href="{{ cohort.charter }}">{{ cohort.date }} cohort</a></li>
{% endfor %}
</ul>

<h2 id="dh-workshops"> DH Workshops</h2>

As a part of our unit on digital pedagogy, Praxis design (and sometimes deliver) their own lightweight introductions to digital humanities methods. The result is a teach-to-learn activity where they develop creative new ways to deliver digital humanities instruction while reflecting on the pedagogies they employ. The following blog posts represent a sampling of the teaching done by students during the unit. Brandon co-authored a piece with a recent cohort on the pedagogy unit that was published on the Journal of Interactive Technology and Pedagogy entitled "[A Way In: Digital Pedagogy Training with Speculative, Low-Tech Workshops](https://cuny.manifoldapp.org/read/a-way-in-digital-pedagogy-training-with-speculative-low-tech-workshops/section/d26fab6f-c473-489a-9516-a6e6f0c747a7)."

<ul>
  <li><a href="https://scholarslab.org/blog/mapping-alone-together/">Mapping Alone, Together</a> by <a href="https://scholarslab.org/people/crystal-luo/">Crystal Luo</a>
  </li>
  <li><a href="https://scholarslab.org/blog/intro-dh-and-sound-workshop/">Working on a Workshop (aka outlining a possible workshop about DH and Sound)</a> by <a href="https://scholarslab.org/people/connor-kenaston/">Connor Kenaston</a>
  </li>


  <li><a href="https://scholarslab.org/blog/in-the-world/">To be out in the world, to be free!</a> by <a href="https://scholarslab.org/people/janet-s-dunkelbarger/">Janet S. Dunkelbarger</a>
  </li>
  <li><a href="https://scholarslab.org/blog/art-collections-as-data/">Thinking About [Art] Collections As Data</a> by <a href="https://scholarslab.org/people/chloe-downe-wells/">Chloe Downe Wells</a>
  </li>
  <li><a href="https://scholarslab.org/blog/playacting-and-virtual-reality/">Exploring Power through Playacting &amp; Virtual Reality</a> by <a href="https://scholarslab.org/people/lauren-van-nest/">Lauren Van Nest</a>
  </li>
  <li><a href="https://scholarslab.org/blog/unmaking-remaking-archive/">Unmaking and Remaking the Archive</a> by <a href="https://scholarslab.org/people/natasha-roth-rowland/">Natasha Roth-Rowland</a></li>
  <li><a href="https://scholarslab.org/blog/dh-pedagogy-roadshow/">DH Pedagogy Roadshow</a> by Mackenzie Brooks and <a href="https://scholarslab.org/people/brandon-walsh/">Brandon Walsh</a>
  </li>
  <li><a href="https://scholarslab.org/blog/sounding-scholarship-a-workshop-on-making-your-research-sing/">Sounding Scholarship: A Workshop on Making Your Research Sing</a> by <a href="https://scholarslab.org/people/emily-mellen/">Emily Mellen</a>
  </li>
  <li><a href="https://scholarslab.org/blog/string-theory-or-lets-explore-social-networks-with-string/">String Theory, or: Let's Explore Social Networks with String!</a> by
  <a href="https://scholarslab.org/people/chris-whitehead/">Chris Whitehead</a>
  </li>
  <li><a href="https://scholarslab.org/blog/teaching-transcription-and-secretly-metaphysics/">Teaching Transcription (and Secretly Metaphysics)</a> by
  <a href="https://scholarslab.org/people/catherine-addington/">Catherine Addington</a>
  </li>
</ul>
<h2> Named Projects</h2>

Sometimes, Praxis cohorts develop and release fully fledged digital projects. Some projects have spanned cohorts, while others were executed in the span of a single. Some projects explored extant vaporware projects in the Lab, while others were inspired by experiments with a more freeform prompt. Further publications, writings, or awards are so noted.

{% for project in site.data.projects %}

{% include project-description.html %}

{% endfor %}
