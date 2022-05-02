
anychart.onDocumentReady(function () {

    // load the data
    anychart.data.loadJsonFile("../data/map_merged_demand.json", function (data) {

    var geoData = data.records

    var sumCases = 0;
    var data = [];

    for (var i = 0; i < geoData.length; i++) {
        
        sumCases = geoData[i].total_visitors
        data.push({ id: geoData[i].Country_2, value: sumCases, adults: geoData[i].adults, children: geoData[i].children, babies: geoData[i].babies, title: geoData[i].Country_2})
        sumCases = 0;
        
    };


    var chart = anychart.map(data);
    chart.geoData(anychart.maps.world);

    var series = chart.choropleth(data);

    chart.title("Visitors' Countries- Both Resort and City Hotels");

    // color scale ranges
    ocs = anychart.scales.ordinalColor([
        { less: 4 },
        { from: 5, to: 20 },
        { from: 21, to: 50 },
        { from: 51, to: 100 },
        { from: 101, to: 500 },
        { from: 501, to: 1000 },
        { from: 1001, to: 5000 },
        { greater: 5001 }
    ]);

    // set scale colors
    ocs.colors(["rgb(252,245,245)", "rgb(241,219,216)", "rgb(229,190,185)", "rgb(211,152,145)", "rgb(192,117,109)", "rgb(178,93,86)", "rgb(152,50,48)", "rgb(150,33,31)"]);
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
    });

});