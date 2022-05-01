/*const xValue = d => d.arrival_date_month;
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
    //Added new scale for drawing
    const y1Scale = d3.scaleLinear()
      .domain([d3.max(data, yValue),0])
      .range([0, innerHeight]);

    const xAxis = d3.axisBottom().scale(xScale);
    const yAxis = d3.axisLeft().scale(y1Scale);

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
           .attr("fill", "black")
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
});*/


window.addEventListener('load', function () {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Online TA ', 'Offline TA/TO', 'Groups', 'Direct', 'Corporate', 'Complementary'],
            datasets: [{
                label: 'City Hotel',
                data: [38748, 16747, 13975, 6093, 2986, 542],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: 'Resort Hotel',
                data: [17729, 7472, 5836, 6513, 2309, 201],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        }
    });
})


// // donut chart with chart.js
anychart.onDocumentReady(function () {

  // create data
  var data = [
    {x: "A", value: 637166},
    {x: "B", value: 721630},
    {x: "C", value: 148662},
    {x: "D", value: 78662},
    {x: "E", value: 90000}
  ];

  // create a pie chart and set the data
  var chart = anychart.pie(data);

  /* set the inner radius
  (to turn the pie chart into a doughnut chart)*/
  chart.innerRadius("30%");

  // set the chart title
  chart.title("Doughnut Chart: Basic Sample");

  // set the container id
  chart.container("donut");

  // initiate drawing the chart
  chart.draw();
});