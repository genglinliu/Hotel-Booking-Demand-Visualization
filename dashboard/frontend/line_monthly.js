// Line chart - Monthly demand

$(document).ready(function() {

	//get canvas
	var ctx = $("#line-chartcanvas-monthly");

	var data = {
		labels : ["January","February","March","April","May","June","July","August","September","October","November","December"],
		datasets : [
			{
				label : "City Hotel",
				data : [3736,4965,6458,7480,8232,7894,8088,8979,7400,7605,4357,4132],
				backgroundColor : "blue",
				borderColor : "lightblue",
				fill : false,
				lineTension : 0,
				pointRadius : 4
			},
			{
				label : "Resort Hotel",
				data : [2193,3103,3336,3609,3559,3045,4573,4894,3108,3555,2437,2648],
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
        aspectRatio:2.7,
        //maintainAspectRatio: false,
        plugins: {
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
					max: 10000,
					min: 0,
                ticks: {
                    //beginAtZero : true
                    stepSize: 1000
                },
                grid: {
                    display: false
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