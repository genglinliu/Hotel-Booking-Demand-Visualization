// Line chart - Weekly demand

$(document).ready(function() {

	//get canvas
	var ctx = $("#line-chartcanvas");

	var data = {
		labels : ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24",
    "25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49",
    "50","51","52","53"],
		datasets : [
			{
				label : "City Hotel",
				data : [704,761,766,968,886,826,1205,1497,1322,1422,1391,1427,1605,1525,1783,1650,1965,1914,1640,2016,1948,
                    1697,1869,1823,1959,1670,1854,1865,1726,2011,1640,1988,2382,1950,1642,1411,1596,1887,1833,1722,1842,2032,
                    1435,1546,1251,1060,977,1011,1066,1056,503,603,1198],
				backgroundColor : "blue",
				borderColor : "lightblue",
				fill : false,
				lineTension : 0,
				pointRadius : 4
			},
			{
				label : "Resort Hotel",
				data : [343,457,553,519,501,682,904,719,795,727,679,656,811,739,906,755,840,1012,762,769,906,849,752,675,704,
                    721,810,988,1037,1076,1101,1054,1197,1090,951,756,633,774,748,675,857,724,917,726,690,514,708,493,716,449,
                    430,592,618],
				backgroundColor : "green",
				borderColor : "lightgreen",
				fill : false,
				lineTension : 0,
				pointRadius : 4
			}
		]
	};

	var options = {
        responsive: true,
        aspectRatio:2.6,
        //maintainAspectRatio: false,
        plugins: {
            title : {
                display : true,
                position : "top",
                text : "Hotel Weekly Demand",
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
				//ticks: {
					max: 2600,
					min: 0,
					//stepSize: 200
				//}
                ticks: {
                    stepSize: 200
                },
                grid: {
                    display: false
                }
			},
            xAxis: {
				//ticks: {
					max: 54,
					min: 0,
					//stepSize: 200
				//}
                ticks: {
                    stepSize: 1,
                    autoSkip: false
                }
			}
		},
	};

	var chart = new Chart( ctx, {
		type : "line",
		data : data,
		options : options
	} );

});