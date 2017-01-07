---
layout: post
title: "Visualization #1 of Everything I Used in a Seven Day Period"
author: "Ethan Reed"
date: 2015-11-18 14:28
comments: true
category: blog
---

So, I've tried a few different [visualization examples](https://github.com/mbostock/d3/wiki/Gallery) from [the d3 site](http://d3js.org/). They are amazing. The one I used here is called ["Parallel Sets"](https://www.jasondavies.com/parallel-sets/) and made by Jason Davies. You can find here [the github page that I took this code from originally](https://github.com/jasondavies/d3-parsets), with his [license here](https://github.com/jasondavies/d3-parsets/blob/master/LICENSE). With a LOT of [Wayne's](http://scholarslab.org/people/wayne-graham/) help I was able to get this thing operable with my data set, which can be found [here](http://praxis.scholarslab.org/blog/2015/11/12/every), but is really just a .csv file of my previous post, ["Everything I Used in a Seven Day Period"](http://praxis.scholarslab.org/blog/2015/11/12/everything-i-used-in-a-seven-day-period/). So here it is:

<embed src="http://bl.ocks.org/reedeth/raw/28701d282419c7f37a25/" width="1100px" height="650px"/>

As you can tell, in my capable hands Davies' once beautiful graph has been promptly turned into an incomprehensible - though still, amazingly, interactive - scribble. As a visualization of data, it's pretty close to nonsensical. This doesn't come as a surprise to me, as I more or less just tried to crowbar my set of data into Davies' code/setup until something came up that looked anything like his original graph. Which is does! Sort of.

If you look at Davies' original visualization, it's of survivors of the Titanic according to four dimensions: survived/perished, female/male, child/adult, second-class/first-class/third-class/crew. On the page he calls it "a visualization technique for multidimensional categorical data." I don't think I would describe, exactly, what I have here as "multidimensional categorical data." But the graph keeps trying to read it as such. So when you hover over certain lines, it's trying to give you a kind of multidimensional look at a given object, though because my .csv file is probably sloppy and things haven't been connected right, what it ends up giving is ... totally unclear. Some sort of causality is at work, but only my laptop really knows what's going on (or *not* going on).  

In a way, I actually find what it comes up with kind of poetic. When you mouse over a line (which is almost impossible for a lot of the lines because it's all so tightly nested) the graph keeps trying to produce a wandering, garbled, yet charming narrative of objects. Maybe what gets me is that there's a logic at work here, but only the site and my computer can understand it.

So while I don't know *why* things are happening, things *are* happening - I get the results of this logic in the visualization, pseudo-stories like:

*spoons -> mouse pad -> backpack -> chair -> yogurt -> metro card*

This combination that doesn't show up in my writing at all, but when it comes out of the graph on its own it has a kind of personality to it (yogurt on the subway - a spoon-based mousepad?). Here's a short, punchy, no-nonsense set:

*iPhone -> stairs -> toothpaste*

And my personal favorite:

*pillow -> sheets -> sheets -> sheets -> sheets -> sheets*

Whoever made this last one must have been so sleepy. It looks like something I would produce at the end of the day, mind drifting elsewhere, drowsy, hungry. Sheets, sheets, sheets!

Not to mention there's this whole twilight zone of gray hollow graph on the right, representative of empty cells on my .csv file (some days had more "things used" than others) ... [maybe don't go over there](http://vignette1.wikia.nocookie.net/powerlisting/images/6/6d/Supermassive_black_hole.jpeg/revision/latest?cb=20121206160459).

Instead of even trying to get this working, I think I want to try using another example from d3 just for the practice of it. Next is probably the [hierarchical edge bundling example](http://mbostock.github.io/d3/talk/20111116/bundle.html). Until then!
