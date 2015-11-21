---
layout: post
title: "Visualization #2 of Everything I Used in a Seven Day Period"
author: "Ethan Reed"
date: 2015-11-20 15:39
comments: true
category: blog
---

So with a significant amount of help from [Eric](http://scholarslab.org/people/eric-rochester/), I was able to get [this force-directed graph](http://bl.ocks.org/mbostock/4062045) from [d3js.org](http://d3js.org/) up and running with my data set from ["Everything I Used in a Seven Day Period"](http://praxis.scholarslab.org/blog/2015/11/12/everything-i-used-in-a-seven-day-period/). This force-directed graph is one of [Mike Bostock's many graphs and visualizations](http://bost.ocks.org/mike/). I used what he had up on d3, replaced his data set with mine, then with a ton of help from Eric figured out how to get it to read and represent my .csv file even though the original was primed to read a .json data set.

What you see below are a series of force-directed graphs. [James](http://scholarslab.org/people/james-p-ascher/) recently made a similar representation of his cloud data using one such graph, which you can find [here](http://praxis.scholarslab.org/blog/2015/11/18/cloud-data-present/i).

For this post, I produced one force-directed graph for each day and a sprawling, magnificent mess at the end that combines all seven days. In these graphs, each node (or point) represents a "thing" that I used. If you hover over the node with your mouse you can see which thing it represents. Every edge or connecting line represents a connection between those things.

In the case of this representation, a connection between Thing A and Thing B means that Thing A was used right after or right before Thing B in my linear sequence of use as recorded in the data. This means that many aspects of my data were collapsed  in this particular representation. For example: if a thing was used more once in my original data, this does not appear on these graphs. The order of use is also completely gone. So a significant amount of context has been sheared off.

What we're left with, however, is something new, and I hope worthwhile on it's own. It is very different, and perhaps more interesting as a visualization of data, than  [my first "visualization"](http://praxis.scholarslab.org/blog/2015/11/18/visualizing-everything-i-used/) of this same dataset. Here you can start to see the way different days take different physical shapes in this graph, depending on the kinds of things use and their "connectedness" to other things in their network. For example, Thursday's things (a day in which I took [a bus](http://nycshuttle.com/) from Charlottesville to NYC) live in big billowing petals of connection that loop out on their own for extended series of edges. On the other hand, Sunday, during which I took the same bus *back* to Charlottesville from NYC, lives in much tighter, centralized clusters with fewer strands of relative un-connectedness.

Anyways, more on what all this might mean later. Right now I'm still just practicing getting these things operational and embedded in a post on our site (in this case using [GitHub Gist](https://gist.github.com/) and [bl.ocks.org](http://bl.ocks.org/)). I plan on writing a post reflecting on this whole process and synthesizing a bit, and maybe even one more visualization. We'll see. Until then: the graphs themselves!

Monday, 11.2.2015:

<embed src="http://bl.ocks.org/reedeth/raw/8259c3984ad826227c6d/" width="1100px" height="650px"/>

Tuesday, 11.3.2015:

<embed src="http://bl.ocks.org/reedeth/raw/bf87d62d2c52e815a9ae/" width="1100px" height="650px"/>

Wednesday, 11.4.2015:

<embed src="http://bl.ocks.org/reedeth/raw/18dedb74e52b69a8fbed/" width="1100px" height="650px"/>

Thursday, 11.5.2015:

<embed src="http://bl.ocks.org/reedeth/raw/7f8e0cb2446004ffe39c/" width="1100px" height="650px"/>

Friday, 11.6.2015:

<embed src="http://bl.ocks.org/reedeth/raw/577082f32ea974c76958/" width="1100px" height="650px"/>

Saturday, 11.7.2015:

<embed src="http://bl.ocks.org/reedeth/raw/97800a0d03021f0dc65a/" width="1100px" height="650px"/>

Sunday, 11.8.2015:

<embed src="http://bl.ocks.org/reedeth/raw/d3b68c10128d46fb6f28/" width="1100px" height="650px"/>

All seven days combined:

<embed src="http://bl.ocks.org/reedeth/raw/57868ff574651558813a/" width="2100px" height="1650px"/>
