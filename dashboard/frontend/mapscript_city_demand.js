
anychart.onDocumentReady(function () {

    // load the data
    anychart.data.loadJsonFile("../data/map_resort_demand.json", function (data) {

    var geoData = data.records
    var geocity = data.records_city
    var sumCases = 0;
    varsumcity = 0;
    var dataresort = [];
    var datacity = [];

    for (var i = 0; i < geoData.length; i++) {
        
        sumCases = geoData[i].total_visitors
        dataresort.push({ id: geoData[i].Country_2, value: sumCases, adults: geoData[i].adults, children: geoData[i].children, babies: geoData[i].babies, title: geoData[i].Country_2})
        sumCases = 0;
        
    };

    for (var i = 0; i < geocity.length; i++) {
        
        sumcity = geocity[i].total_visitors
        datacity.push({ id: geocity[i].Country_2, value: sumcity, adults: geocity[i].adults, children: geocity[i].children, babies: geocity[i].babies, title: geocity[i].Country_2})
        sumcity = 0;
        
    };


    var chart = anychart.map(datacity);
    chart.geoData(anychart.maps.world);

    chart.title("Visitors' countries: City hotel");
    chart.data(datacity);

    var series = chart.choropleth(datacity);

    // color scale ranges
    // color scale ranges
    ocs = anychart.scales.ordinalColor([
      { less: 50 },
      { from: 51, to: 500 },
      { from: 501, to: 1000 },
      { from: 1001, to: 5000 },
      { greater: 5001 }
  ]);


     // set scale colors
     ocs.colors(["rgb(241,219,216)", "rgb(211,152,145)", "rgb(192,117,109)", "rgb(178,93,86)", "rgb(152,50,48)"]);
     series.colorScale(ocs);

     chart.legend(true);

     // set the source mode of the legend and add styles
     chart.legend()
       .itemsSourceMode("categories")
       .position('right')
       .align('top')
       .itemsLayout('vertical')
       .padding(0, 0, 0, 20)
       .paginator(false)
       .fontSize(8)
       .iconSize(8);



     
     series.tooltip().format("No. of visitors: {%value}"+"\n" +"Adults: {%adults}"+"\n" +"Children: {%children}"+"\n" +"Babies: {%babies}");
     chart.container('container');
     
     // draw the chart
     chart.draw();
 


  let charts = $('#HotelType')[0];
  
  for (let i = 0; i < charts.length; i++) {
    charts.addEventListener("change", function() {
      let val = this.value; // this == the clicked radio,
      if (val == "city") {
        chart.title("Visitors' countries: City hotel");
        chart.data(datacity);
      } 
      else if (val == "resort") {
        chart.title("Visitors' countries: Resort hotel");
        chart.data(dataresort);
      }
      
      var series = chart.choropleth(chart.data());

    // color scale ranges
    ocs = anychart.scales.ordinalColor([
        { less: 500 },
        { from: 501, to: 1000 },
        { from: 1001, to: 5000 },
        { from: 5001, to: 25000 },
        { greater: 25001 }
    ]);

    // set scale colors
    ocs.colors(["rgb(241,219,216)", "rgb(211,152,145)", "rgb(192,117,109)", "rgb(178,93,86)", "rgb(152,50,48)"]);
    series.colorScale(ocs);
    
    series.tooltip().format("No. of visitors: {%value}"+"\n" +"Adults: {%adults}"+"\n" +"Children: {%children}"+"\n" +"Babies: {%babies}");
    chart.container('container');
    
    // draw the chart
    chart.draw();

    });
  }

    });

});