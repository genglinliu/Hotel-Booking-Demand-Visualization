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

// const xScale = d3.scaleTime();
const xScale = d3.scaleBand();
const yScale = d3.scaleLinear();

const xAxis = d3.axisBottom().scale(xScale);
                // .ticks(d3.timeMonth, 1)
                // .tickFormat(d3.timeFormat('%b'));
const yAxis = d3.axisLeft().scale(yScale);

const row = d => {
  d.demand = +d.demand;
  return d;
};


d3.csv('../data/demand_month_city.csv', row)
  .then(data => {
    xScale
      // .domain([new Date("2015-07-01"), new Date("2017-09-07")])
      .domain(data.map(d => d.arrival_date_month))
      .range([0, innerWidth]);

    yScale
      .domain(d3.extent(data, yValue))
      .range([innerHeight, 0]);

    g.selectAll('circle').data(data)
      .enter().append('circle')
      .attr('cx', d => xScale(xValue(d)))
      .attr('cy', d => yScale(yValue(d)))
      .attr('r', 5);

    xAxisG.call(xAxis);
    yAxisG.call(yAxis);
  });