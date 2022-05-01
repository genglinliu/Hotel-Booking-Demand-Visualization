
anychart.onDocumentReady(function () {

    // load the data
    anychart.data.loadJsonFile("data.json", function (data) {

    // Variables
    // go into the records section of the data
    var geoData = data.records
    console.log(geoData[1])

    // sum of all cases per country
    var sumCases = 0;


    // create a new array with the resulting data
    var data = [];
    console.log("here", data)

    // Go through the initial data
    for (var i = 0; i < geoData.length; i++) {
        // convert strings to numbers and save them to new variables
        sumCases = geoData[i].counts

        // check if we are in the same country by comparing the geoId. 
        // if the country is the same add the cases to the appropriate variables
        
        



        // insert the resulting data in the array using the AnyChart keywords 
        data.push({ id: geoData[i].Fullname, value: sumCases, title: geoData[i].Fullname })

        

        // reset the variables to start over
        sumCases = 0;

        
    };

    // connect the data with the map
    var chart = anychart.map(data);
    chart.geoData(anychart.maps.world);

    // specify the chart type and set the series 
    var series = chart.choropleth(data);

    

    // set the chart title
    chart.title("Visitors' Countries- Resort Hotels");

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

    // tell the series what to use as a colorRange (colorScale)
    series.colorScale(ocs);

    // set the container id
    chart.container('container');
    
    // draw the chart
    chart.draw();
    });

});