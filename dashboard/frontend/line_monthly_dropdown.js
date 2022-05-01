// Line chart - Monthly demand

window.addEventListener('load', function () {
    const ctx = document.getElementById('chart').getContext('2d');
    const footer = (tooltipItems) => {
        let td = 0
        let babies = 0;
        let children = 0;
        let adults = 0;
      
        tooltipItems.forEach(function(tooltipItem) {
            td += tooltipItem.raw.month.y;
            babies += tooltipItem.raw.month.babies;
            children += tooltipItem.raw.month.children;
            adults += tooltipItem.raw.month.adults;
          });
          return 'Total Demand: ' + td + '\nAdults: ' + adults + '\nChildren: ' + children + '\nBabies: ' + babies;
      };
    const chart = new Chart(ctx, {
        type : "line",
	    data : {
		    labels : ["January","February","March","April","May","June","July","August","September","October","November","December"],
		    datasets : [
                {
                    label : "City Hotel",
                    data : [
                        {x: "January", month: {
                            y:6721, adults: 6378, children: 313, babies: 30}
                        },
                        {x: "February", month: {
                            y:9376, adults: 8846, children: 499, babies: 31}
                        },
                        {x:"March", month: {
                            y:12333, adults: 11858, children: 444, babies: 31}
                        },
                        {x:"April", month: {
                            y:15101, adults: 14290, children: 787, babies: 24}
                        },
                        {x:"May", month: {
                            y:15464, adults: 14958, children: 489, babies: 17}
                        },
                        {x:"June", month: {
                            y:15116, adults: 14519, children: 569, babies: 28}
                        },
                        {x:"July", month: {
                            y:17203, adults: 15975, children: 1193, babies: 35}
                        },
                        {x:"August", month: {
                            y:19401, adults: 17841, children: 1499, babies: 61}
                        },
                        {x:"September", month: {
                            y:13961, adults: 13569, children: 351, babies: 41}
                        },
                        {x:"October", month: {
                            y:14133, adults: 13665, children: 434, babies: 34}
                        },
                        {x:"November", month: {
                            y:7524, adults: 7330, children: 172, babies: 22}
                        },
                        {x:"December", month: {
                            y:8145, adults: 7609, children: 498, babies: 38}
                        }
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
                        {x: "January", month: {
                            y: 3803, adults: 3646, children: 139, babies: 18}
                        },
                        {x: "February", month: {
                            y: 5923, adults: 5604, children: 291, babies: 28}
                        },
                        {x:"March", month: {
                            y: 6099, adults: 5817, children: 256, babies: 26}
                        },
                        {x:"April", month: {
                            y: 6899, adults: 6516, children: 354, babies: 29}
                        },
                        {x:"May", month: {
                            y: 6992, adults: 6581, children: 356, babies: 55}
                        },
                        {x:"June", month: {
                            y: 6365, adults: 5834, children: 488, babies: 43}
                        },
                        {x:"July", month: {
                            y: 10404, adults: 9189, children: 1129, babies: 86}
                        },
                        {x:"August", month: {
                            y: 11370, adults: 9954, children: 1281, babies: 135}
                        },
                        {x:"September", month: {
                            y: 6405, adults: 6112, children: 247, babies: 46}
                        },
                        {x:"October", month: {
                            y: 6911, adults: 6614, children: 269, babies: 28}
                        },
                        {x:"November", month: {
                            y: 4288, adults: 4158, children: 107, babies: 23}
                        },
                        {x:"December", month: {
                            y: 5051, adults: 4773, children: 238, babies: 40}
                        }
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
                yAxisKey: 'month.y'
            },
            responsive: true,
            aspectRatio:2.8,
            //maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                      footer: footer,
                    }
                  },
                title : {
                    display : true,
                    position : "top",
                    text : "Hotel Monthly Demand",
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
                        max: 20000,
                        min: 0,
                    ticks: {
                        //beginAtZero : true
                        stepSize: 1000
                    },
                    grid: {
                        display: true
                    }
                }
            }
        }
    });
})
