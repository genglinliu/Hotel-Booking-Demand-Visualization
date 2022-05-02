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

  // 0,City Hotel,No Deposit,66442
  // 1,City Hotel,Non Refund,12868
  // 2,City Hotel,Refundable,20
  // 3,Resort Hotel,No Deposit,38199
  // 4,Resort Hotel,Non Refund,1719
  // 5,Resort Hotel,Refundable,142
  var data_city = [
    {x: "No Deposit", value: 66442},
    {x: "Non Refund", value: 12868},
    {x: "Refundable", value: 20}
  ];

  var data_resort = [
    {x: "No Deposit", value: 38199},
    {x: "Non Refund", value: 1719},
    {x: "Refundable", value: 142}
  ];

  // create a pie chart and set the data
  var chart = anychart.pie(data_city);
  // set the inner radius to turn the pie chart into a doughnut chart
  chart.innerRadius("50%");
  chart.title("City Hotel Deposit Type Distribution");
  chart.container("donut");
  chart.draw();

  let charts = $('#HotelType')[0];

  console.log(charts)
  
  for (let i = 0; i < charts.length; i++) {
    charts.addEventListener("change", function() {
      let val = this.value; // this == the clicked radio,
      if (val == "city") {
        console.log("city")
        chart.title("City Hotel Deposit Type Distribution");
        chart.data(data_city);
      } 
      else if (val === "resort") {
        console.log("resort")
        chart.title("Resort Hotel Deposit Type Distribution");
        chart.data(data_resort);
      }
      chart.innerRadius("50%");
      
      chart.container("donut");
      chart.draw();
    });
  }
});