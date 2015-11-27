d3 = require('d3');

function barChart() {
  // A closure with getter-setter methods

  // Defaults
  var chartType = 'standard';
  var width = 180;
  var height = 120;
  var margin = {
    top: 5, 
    right: 0, 
    bottom: 5, 
    left: 20
  };
  var xMap = function(d) { return d.label; };
  var yMap = function(d) { return d.value; };

  var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
  var xScale = d3.scale.ordinal()
    .rangeRoundBands([0, width], .2)
  var yScale = d3.scale.linear()
    .range([height, 0])

  function stacked(selection) {
    var svg = d3.select(this).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      console.log(d3.keys(dataset[0]).filter(function(key) { return key !== "label"; }))
      color.domain(d3.keys(dataset[0]).filter(function(key) { return key !== "label"; }));

      dataset.forEach(function(d) {
        var y0 = 0;
        d.points = color.domain()
          .map(function(key) { 
            return {
              key: key, 
              y0: y0, 
              y1: y0 += +d[key]
            }; 
          });
        d.total = d.points[d.points.length - 1].y1;
      });

      console.log(dataset)

      // Scales
      xScale.domain(dataset.map(xMap));

      yScale.domain(d3.extent(dataset, yMap))
        .nice();

      // x-axis
      svg.append("g")
        .attr("class", "x axis")
        .append("line")
        .attr("y1", yScale(0))
        .attr("y2", yScale(0))
        .attr("x2", width);

      // y-axis
      var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

      svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

      // Bars
      var bars = svg.selectAll(".bar").data(dataset).enter()
        .append("g")
        .attr("class", "g")
        .attr("transform", function(d) { return "translate(" + xScale(d.label) + ",0)"; })
        .selectAll("rect").data(function(d){ return d.points; }).enter()

      // Sections
      bars.append("rect")
        .attr("class", function(d) { return d.y1 < 0 ? "bar negative" : "bar positive"; })
        .attr("y", function(d) { return d.y1 < 0 ? yScale(d.y0) : yScale(d.y1); })
        .attr("height", function(d) { return Math.abs(yScale(d.y0) - yScale(d.y1)); })
        .attr("width", xScale.rangeBand())
        .style("fill", function(d) { return color(d.key); });
  }

  function chart(selection) {
    // Generates a chart for each selection
    // Each selection has different dataset

    selection.each(function(dataset, index) {
      // Initialize
      var svg = d3.select(this).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // Scales
      xScale.domain(dataset.map(xMap));

      yScale.domain(d3.extent(dataset, yMap))
        .nice();

      // x-axis
      svg.append("g")
        .attr("class", "x axis")
        .append("line")
        .attr("y1", yScale(0))
        .attr("y2", yScale(0))
        .attr("x2", width);

      // y-axis
      var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

      svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

      // Bars
      var bars = svg.selectAll(".bar").data(dataset).enter()
        .append("rect")
        .attr("class", function(d) { return d.value < 0 ? "bar negative" : "bar positive"; })
        .attr("x", function(d) { return xScale(xMap(d)); })
        .attr("y", function(d) { return yScale(Math.max(0, yMap(d))); })
        .attr("height", function(d) { return Math.abs(yScale(yMap(d)) - yScale(0)); })
        .attr("width", xScale.rangeBand())
    });
  }

  chart.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    return chart;
  };

  chart.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    return chart;
  };

  chart.margin = function(top, right, bottom, left) {
    if (!arguments.length) return margin;
    margin.top = top;
    margin.right = right;
    margin.bottom = bottom;
    margin.left = left;
    return chart;
  };

  chart.xMap = function(accessor) {
    if (!arguments.length) return xMap;
    xMap = accessor;
    return chart;
  };

  chart.yMap = function(accessor) {
    if (!arguments.length) return yMap;
    yMap = accessor;
    return chart;
  };

  chart.chartType = function(name) {
    if (!arguments.length) return chartType;
    chartType = name;
    return chart;
  }

  if (chartType === 'stacked') {
    return stacked;
  } else {
    return chart;
  }
}

module.exports = barChart;