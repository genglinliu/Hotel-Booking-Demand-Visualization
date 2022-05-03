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

  // 0  City Hotel	BB	62305
  // 1	City Hotel	SC	10564
  // 2	City Hotel	HB	6417
  // 3	City Hotel	FB	44
  // 4	Resort Hotel	BB	30005
  // 5	Resort Hotel	HB	8046
  // 6	Resort Hotel	Undefined	1169
  // 7	Resort Hotel	FB	754
  // 8	Resort Hotel	SC	86
  var data_city = [
    {x: "Bed & Breakfast", value: 62305},
    {x: "no meal package", value: 10564},
    {x: "breakfast and one other meal", value: 6417},
    {x: "breakfast, lunch and dinner", value: 44}
  ];

  var data_resort = [
    {x: "Bed & Breakfast", value: 30005},
    {x: "no meal package", value: 1255},
    {x: "breakfast and one other meal", value: 8046},
    {x: "breakfast, lunch and dinner", value: 754}
  ];

  // create a pie chart and set the data
  var chart = anychart.pie(data_city);
  // set the inner radius to turn the pie chart into a doughnut chart
  chart.innerRadius("50%");
  chart.title("City Hotel Meal Type Distribution");
  chart.container("donut");
  chart.draw();

  let charts = $('#HotelType')[0];

  console.log(charts)
  
  for (let i = 0; i < charts.length; i++) {
    charts.addEventListener("change", function() {
      let val = this.value; // this == the clicked radio,
      if (val == "city") {
        console.log("city")
        chart.title("City Hotel Meal Type Distribution");
        chart.data(data_city);
      } 
      else if (val === "resort") {
        console.log("resort")
        chart.title("Resort Hotel Meal Type Distribution");
        chart.data(data_resort);
      }
      chart.innerRadius("50%");
      
      chart.container("donut");
      chart.draw();
    });
  }
});