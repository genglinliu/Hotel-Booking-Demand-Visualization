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
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.arrival_date_month))
      .range([0, innerWidth])
      .paddingInner(0.05);
    const yScale = d3.scaleLinear()
      .domain([1000, d3.max(data, yValue)])
      .range([0, innerHeight]);

    // no more yAxis since it's always upside down.. f it
    const xAxis = d3.axisBottom().scale(xScale);
    // const yAxis = d3.axisLeft().scale(yScale);

    g.selectAll('rect').data(data)
      .enter().append('rect')
      .attr('x', d => xScale(xValue(d)))
      .attr('y', d => innerHeight - yScale(yValue(d)))
      .attr("width", xScale.bandwidth())
      .attr("height", function(d) {
         return yScale(yValue(d));
      })
      .attr("fill", "rgb(102, 178, 255)")
    
      .on("mouseover", function(event, d) {

        //Get this bar's x/y values, then augment for the tooltip
        var xPosition = parseFloat(d3.select(this).attr("x")) + xScale.bandwidth() / 2 + 60;
        var yPosition = parseFloat(d3.select(this).attr("y")) + 30;

        //Create the tooltip label
        svg.append("text")
           .attr("id", "tooltip")
           .attr("x", xPosition)
           .attr("y", yPosition)
           .attr("text-anchor", "middle")
           .attr("font-family", "sans-serif")
           .attr("font-size", "11px")
           .attr("font-weight", "bold")
           .attr("fill", "whit")
           .text(yValue(d));

        d3.select(this).attr("opacity", "60%");
    
       })
       .on("mouseout", function() {
        //Remove the tooltip
        d3.select("#tooltip").remove();
        d3.select(this).attr("opacity", "100%");
       })


    xAxisG.call(xAxis);
    yAxisG.call(yAxis);
  });