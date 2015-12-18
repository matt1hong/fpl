d3 = require('d3');

var axisBounds = function(data, accessor) {
  var bounds = d3.extent(data, accessor);
  if (bounds[0] > 0) { 
    bounds[0] = 0; 
  } else if (bounds[1] < 0) { 
    bounds[1] = 0;
  }
  return bounds;
};

function barChart() {
  // A closure with getter-setter methods

  // Defaults
  var width = 180;
  var height = 120;
  var margin = {
    top: 5, 
    right: 0, 
    bottom: 20, 
    left: 20
  };

  var xVar = 'label';
  var yVar = 'value';
  var xMap = function(d) { return d[xVar]; };
  var yMap = function(d) { return d[yVar]; };

  var xScale = d3.scale.ordinal()
    .rangeRoundBands([0, width], .2)
  var yScale = d3.scale.linear()
    .range([height, 0])

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
      yScale.domain(axisBounds(dataset, yMap))
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
        .attr("stroke","black")
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

  chart.xVar = function(name) {
    if (!arguments.length) return xVar;
    xVar = name;
    return chart;
  };

  chart.yVar = function(name) {
    if (!arguments.length) return yVar;
    yVar = name;
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

  return chart;
}

function stackedBarChart() {
  // A closure with getter-setter methods

  // Defaults
  var width = 180;
  var height = 120;
  var margin = {
    top: 5, 
    right: 0, 
    bottom: 20, 
    left: 20
  };

  var xVar = "label";
  var yVar = "value";
  var xMap = function(d) { return d[xVar]; };
  var yMap = function(d) { return d[yVar]; };

  var xScale = d3.scale.ordinal()
    .rangeRoundBands([0, width]);
  var yScale = d3.scale.linear()
    .range([height, 0])
  var colorScale = d3.scale.category20();

  var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

  var buildOut = function(dataSeriesCount) {
    var currentXOffsets = [];
    var current_xIndex = 0;
    return function(d, y0, y){
        if(current_xIndex++ % dataSeriesCount === 0){
            currentXOffsets = [0, 0];
        }
        if(y >= 0) {
            d.y0 = currentXOffsets[1];
            d.y = y;
            currentXOffsets[1] += y;
        } else {
            d.y0 = currentXOffsets[0] + y;
            d.y = -y;
            currentXOffsets[0] += y;
        }
    }
  }

  function chart(selection) {
    selection.each(function(dataset, index) {
      // Initialize
      var svg = d3.select(this).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      var statTypes = d3.keys(dataset[0]).filter(function (key) { return key !== xVar; });

      var layers = d3.layout.stack().out(buildOut(statTypes.length))
        (statTypes.map(function(statType) {
        return dataset.map(function(d) {
          return {x: d[xVar], title: statType, y: d[statType]};
        });
      }));

      xScale.domain(layers[0].map(function (d) {return d.x;}));
      yScale.domain([0, d3.max(layers[layers.length-1], function(d) { return d.y0 + d.y; })]).nice();
      
      var layer = svg.selectAll(".layer")
        .data(layers)
      .enter().append("g")
        .attr("class", "layer")
        .style("fill", function(d, i) { return colorScale(i); })

      layer.selectAll("rect")
        .data(function (d) { return d; })
      .enter().append("rect")
        .attr("x", function (d) { return xScale(d.x); })
        .attr("y", function (d) { return yScale(d.y + d.y0); })
        .attr("height", function (d) { return yScale(d.y0) - yScale(d.y + d.y0); })
        .attr("width", xScale.rangeBand() - 1)
        .append("svg:title")
        .text(function (d) { return d.x + " " + d.title + ": " + d.y; })

      // x-axis
      svg.append("g")
        .attr("class", "x axis")
        .append("line")
        .attr("y1", yScale(0))
        .attr("y2", yScale(0))
        .attr("x2", width);

      svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
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

  chart.xVar = function(name) {
    if (!arguments.length) return xVar;
    xVar = name;
    return chart;
  };

  chart.yVar = function(name) {
    if (!arguments.length) return yVar;
    yVar = name;
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

  chart.yAxis = function(axis) {
    if (!arguments.length) return yAxis;
    yAxis = axis.scale(yScale);
    return chart;
  }

  chart.colorScale = function(scale) {
    if (!arguments.length) return colorScale;
    colorScale = scale;
    return chart;
  };

  return chart;
}

module.exports = {
  barChart: barChart,
  stackedBarChart: stackedBarChart
};