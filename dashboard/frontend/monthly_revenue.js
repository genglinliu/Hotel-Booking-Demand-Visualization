
    const ctx = document.getElementById('chart').getContext('2d');
    
    const chart = new Chart(ctx, {
        type : "line",
	    data : {
		    labels : ["July 2015","August 2015","September 2015","October 2015","November 2015","December 2015",
        "January 2016","February 2016","March 2016","April 2016","May 2016","June 2016","July 2016","August 2016",
        "September 2016","October 2016","November 2016","December 2016",
        "January 2017","February 2017","March 2017","April 2017","May 2017","June 2017","July 2017","August 2017"],
		    datasets : [
                {
                    label : "City Hotel",
                    data : [
                        {x:"July 2015", revenue: 97607.2},
                        {x:"August 2015", revenue: 192768.41},
                        {x:"September 2015", revenue: 356656.52},
                        {x:"October 2015", revenue: 302685.08},
                        {x:"November 2015", revenue: 90824.2},
                        {x:"December 2015", revenue: 134152.9},
                        {x: "January 2016", revenue: 104110.55},
                        {x: "February 2016", revenue: 189624.95},
                        {x:"March 2016", revenue: 279929.35},
                        {x:"April 2016", revenue: 354496.5},
                        {x:"May 2016", revenue: 399360.58},
                        {x:"June 2016", revenue: 427165.94},
                        {x:"July 2016", revenue: 349703.58},
                        {x:"August 2016", revenue: 401704.81},
                        {x:"September 2016", revenue: 457377.97},
                        {x:"October 2016", revenue: 457620.98},
                        {x:"November 2016", revenue: 292895.05},
                        {x:"December 2016", revenue: 232877.27},
                        {x: "January 2017", revenue: 204591.34},
                        {x: "February 2017", revenue: 232838.35},
                        {x:"March 2017", revenue: 318359.89},
                        {x:"April 2017", revenue: 477667.25},
                        {x:"May 2017", revenue: 601968.05},
                        {x:"June 2017", revenue: 512806.91},
                        {x:"July 2017", revenue: 448308.17},
                        {x:"August 2017", revenue: 435701.31}
                    ],
                    backgroundColor : "blue",
                    borderColor : "lightblue",
                    fill : false,
                    lineTension : 0,
                    pointRadius : 4
                },
                {
                    label : "Resort Hotel",
                    data : [
                    {x:"July 2015", revenue: 173980.86},
                        {x:"August 2015", revenue: 219165.7},
                        {x:"September 2015", revenue: 128246.12},
                        {x:"October 2015", revenue: 88399.55},
                        {x:"November 2015", revenue: 50933.59},
                        {x:"December 2015", revenue: 82158.49},
                        {x: "January 2016", revenue: 41487.14},
                        {x: "February 2016", revenue: 83142.98},
                        {x:"March 2016", revenue: 101501.08},
                        {x:"April 2016", revenue: 128155.4},
                        {x:"May 2016", revenue: 128714.71},
                        {x:"June 2016", revenue: 138958.01},
                        {x:"July 2016", revenue: 224011.72},
                        {x:"August 2016", revenue: 321765.46},
                        {x:"September 2016", revenue: 161581.19},
                        {x:"October 2016", revenue: 132357.48},
                        {x:"November 2016", revenue: 66710.13},
                        {x:"December 2016", revenue: 100511.75},
                        {x: "January 2017", revenue: 66982.77},
                        {x: "February 2017", revenue: 88055.52},
                        {x:"March 2017", revenue: 90386.13},
                        {x:"April 2017", revenue: 152803.43},
                        {x:"May 2017", revenue: 151585.49},
                        {x:"June 2017", revenue: 197346.25},
                        {x:"July 2017", revenue: 311651.5},
                        {x:"August 2017", revenue: 373221.91}
                        ],
                    backgroundColor : "green",
                    borderColor : "lightgreen",
                    fill : false,
                    lineTension : 0,
                    pointRadius : 4
                }
            ]
	    },
        options : {
            parsing: {
                xAxisKey: 'x',
                yAxisKey: 'revenue'
            },
            responsive: true,
            aspectRatio:2.8,
            //maintainAspectRatio: false,
            plugins: {
                title : {
                    display : true,
                    position : "top",
                    text : "Hotel Monthly Revenue",
                    font :{
                        size : 18,
                        weight: "bold"
                    },
                    color : "#000"
                }
            },
            legend : {
                display : true,
                position : "bottom"
            },
            scales: {
                yAxis: {
                    grid: {
                        display: true
                    }
                }
            }
        }
    });