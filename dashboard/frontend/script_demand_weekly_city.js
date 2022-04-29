const xValue = d => d.arrival_date_week_number;
const yValue = d => d.demand;
const margin = { left: 60, right: 60, top: 60, bottom: 60 };

const svg = d3.select('svg');
const width = svg.attr('width');
const height = svg.attr('height');
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const g = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);
const xAxisG = g.append('g')
    .attr('transform', `translate(0, ${innerHeight})`);
const yAxisG = g.append('g');

const row = d => {
  d.demand = +d.demand;
  return d;
};

d3.csv('../data/demand_week_city.csv', row)
  .then(data => {
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.arrival_date_week_number))
      .range([0, innerWidth])
      //.paddingInner(0.05);
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, yValue)])
      .range([0, innerHeight]);
    //Added new scale for drawing
    const y1Scale = d3.scaleLinear()
      .domain([d3.max(data, yValue),0])
      .range([0, innerHeight]);

    const xAxis = d3.axisBottom().scale(xScale);
    const yAxis = d3.axisLeft().scale(y1Scale);

    var line = d3.line()
      .x(function(d) { return xScale(xValue(d))})
      .y(function(d) { return innerHeight - yScale(yValue(d))})
      //x.domain(d3.extent(data, function(d) { return d.arrival_date_week_number }));
      //y.domain(d3.extent(data, function(d) { return d.demand }));

    // Add the valueline path.
	  g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 2.0)
      .attr("d", line)
      .attr("transform", "translate(9,0)");

    xAxisG.call(xAxis);
    yAxisG.call(yAxis);
});