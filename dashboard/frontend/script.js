const xValue = d => d.arrival_date_month;
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

d3.csv('../data/demand_month_city.csv', row)
  .then(data => {
    // const xScale = d3.scaleTime();
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.arrival_date_month))
      .range([0, innerWidth])
      .paddingInner(0.05);
    const yScale = d3.scaleLinear()
      .domain(d3.extent(data, yValue))
      .range([0, innerHeight]);
      console.log(d3.extent(data, yValue));

    const xAxis = d3.axisBottom().scale(xScale);
    const yAxis = d3.axisLeft().scale(yScale);

    g.selectAll('rect').data(data)
      .enter().append('rect')
      .attr('x', d => xScale(xValue(d)))
      .attr('y', d => innerHeight - yScale(yValue(d)))
      .attr("width", xScale.bandwidth())
      .attr("height", function(d) {
         return yScale(yValue(d));
      })
      .attr("fill", "rgb(102, 178, 255)");

    xAxisG.call(xAxis);
    yAxisG.call(yAxis);
  });