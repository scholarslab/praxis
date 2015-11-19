---
layout: post
title: "Visualizing the Cloud Presence"
author: "James P. Ascher"
date: 2015-11-18 10:32
comments: true
excerpt: "First effort at visualization"
category: blog
---

<div class="chart"></div>

You can see the process of cleaning up the CSV and converting it to
the nodes and edges in the attached Jupyter notebook, but that is
stored in a JSON file and loaded into this page. Hover over
nodes you can see what each one corresponds to.

The next steps would be to chart the rest of the features in the cloud
data and then start altering the appearance to explore the data better.

Download notebook: [2015-11-17-force-directed-visualization.ipynb](/images/code/2015-11-17-force-directed-visualization.ipynb),

View notebook: [http://nbviewer.ipython.org/github/scholarslab/praxis/blob/gh-pages/images/code/2015-11-17-force-directed-visualization.ipynb](http://nbviewer.ipython.org/github/scholarslab/praxis/blob/gh-pages/images/code/2015-11-17-force-directed-visualization.ipynb)

<style>

.node {
  stroke: #fff;
  stroke-width: 1.5px;
  }

.node text {
  pointer-events: none;
  font: 10px sans-serif;
}

.link {
  stroke: #999;
  stroke-opacity: .6;
}

</style>

<script src="//d3js.org/d3.v3.min.js"></script>
<script>

var width = 700,
    height = 700;

var color = d3.scale.category20();

var force = d3.layout.force()
    .charge( function(d) {return -20*(d.weight^2)})
    .linkDistance(80)
    .linkStrength(0.2)
    .size([width, height]);

var svg = d3.select("div.chart").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("/images/code/2015-11-18-present-cloud-data.json", function(error, graph) {
  if (error) throw error;

  force
      .nodes(graph.nodes)
      .links(graph.links)
      .start();

  var link = svg.selectAll(".link")
      .data(graph.links)
    .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.value); });

  var node = svg.selectAll(".node")
      .data(graph.nodes)
    .enter().append("circle")
      .attr("class", "node")
      .attr("r", 5)
      .style("fill", function(d) { return color(d.group); })
      .call(force.drag);

    node.append("title")
        .text(function(d) { return d.name; });


  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  });
});

</script>
