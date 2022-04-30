// Line chart - Weekly demand

$(document).ready(function() {

	//get canvas
	var ctx = $("#line-chartcanvas");

	var data = {
		labels : ["Week 1","Week 2","Week 3","Week 4","Week 5","Week 6","Week 7","Week 8","Week 9","Week 10","Week 11","Week 12",
		"Week 13","Week 14","Week 15","Week 16","Week 17","Week 18","Week 19","Week 20","Week 21","Week 22","Week 23","Week 24",
    "Week 25","Week 26","Week 27","Week 28","Week 29","Week 30","Week 31","Week 32","Week 33","Week 34","Week 35","Week 36",
	"Week 37","Week 38","Week 39","Week 40","Week 41","Week 42","Week 43","Week 44","Week 45","Week 46","Week 47","Week 48",
	"Week 49","Week 50","Week 51","Week 52","Week 53"],
		datasets : [
			{
				label : "City Hotel",
				data : [
					{x: "Week 1", y: 1465, adults: 1361, children: 100, babies: 4},
					{x: "Week 2", y: 1311, adults: 1238, children: 64, babies: 9},
					{x: "Week 3", y: 1393, adults: 1306, children: 75, babies: 12},
					{x: "Week 4", y: 1685, adults: 1633, children: 51, babies: 1},
					{x: "Week 5", y: 1541, adults: 1486, children: 48, babies: 7},
					{x: "Week 6", y: 1596, adults: 1480, children: 104, babies: 12},
					{x: "Week 7", y: 2449, adults: 2289, children: 155, babies: 5},
					{x: "Week 8", y: 2698, adults: 2588, children: 108, babies: 2},
					{x: "Week 9", y: 2557, adults: 2413, children: 135, babies: 9},
					{x: "Week 10", y: 2510, adults: 2450, children: 52, babies: 8},
					{x: "Week 11", y: 2542, adults: 2464, children: 72, babies: 6},
					{x: "Week 12", y: 2703, adults: 2618, children: 79, babies: 6},
					{x: "Week 13", y: 3246, adults: 3058, children: 179, babies: 9},
					{x: "Week 14", y: 3018, adults: 2847, children: 165, babies: 6},
					{x: "Week 15", y: 3699, adults: 3499, children: 195, babies: 5},
					{x: "Week 16", y: 3400, adults: 3199, children: 196, babies: 5},
					{x: "Week 17", y: 3874, adults: 3702, children: 165, babies: 7},
					{x: "Week 18", y: 3735, adults: 3593, children: 137, babies: 5},
					{x: "Week 19", y: 3175, adults: 3076, children: 95, babies: 4},
					{x: "Week 20", y: 3602, adults: 3497, children: 99, babies: 6},
					{x: "Week 21", y: 3813, adults: 3648, children: 164, babies: 1},
					{x: "Week 22", y: 3240, adults: 3125, children: 110, babies: 5},
					{x: "Week 23", y: 3599, adults: 3479, children: 114, babies: 6},
					{x: "Week 24", y: 3453, adults: 3332, children: 116, babies: 5},
					{x: "Week 25", y: 3551, adults: 3422, children: 122, babies: 7},
					{x: "Week 26", y: 3190, adults: 3036, children: 149, babies: 5},
					{x: "Week 27", y: 3846, adults: 3609, children: 229, babies: 8},
					{x: "Week 28", y: 3882, adults: 3609, children: 267, babies: 6},
					{x: "Week 29", y: 3718, adults: 3446, children: 264, babies: 8},
					{x: "Week 30", y: 4282, adults: 3995, children: 280, babies: 7},
					{x: "Week 31", y: 3614, adults: 3307, children: 291, babies: 16},
					{x: "Week 32", y: 4350, adults: 4007, children: 328, babies: 15},
					{x: "Week 33", y: 5201, adults: 4795, children: 397, babies: 9},
					{x: "Week 34", y: 4225, adults: 3827, children: 386, babies: 12},
					{x: "Week 35", y: 3437, adults: 3186, children: 237, babies: 14},
					{x: "Week 36", y: 2837, adults: 2683, children: 146, babies: 8},
					{x: "Week 37", y: 3054, adults: 2976, children: 67, babies: 11},
					{x: "Week 38", y: 3523, adults: 3425, children: 86, babies: 12},
					{x: "Week 39", y: 3414, adults: 3321, children: 83, babies: 10},
					{x: "Week 40", y: 3133, adults: 3078, children: 49, babies: 6},
					{x: "Week 41", y: 3441, adults: 3357, children: 77, babies: 7},
					{x: "Week 42", y: 3522, adults: 3453, children: 60, babies: 9},
					{x: "Week 43", y: 2778, adults: 2654, children: 117, babies: 7},
					{x: "Week 44", y: 3036, adults: 2884, children: 144, babies: 8},
					{x: "Week 45", y: 2267, adults: 2200, children: 62, babies: 5},
					{x: "Week 46", y: 1902, adults: 1866, children: 31, babies: 5},
					{x: "Week 47", y: 1661, adults: 1618, children: 34, babies: 9},
					{x: "Week 48", y: 1659, adults: 1613, children: 41, babies: 5},
					{x: "Week 49", y: 2009, adults: 1903, children: 99, babies: 7},
					{x: "Week 50", y: 1902, adults: 1791, children: 105, babies: 6},
					{x: "Week 51", y: 906, adults: 859, children: 43, babies: 4},
					{x: "Week 52", y: 1246, adults: 1146, children: 94, babies: 6},
					{x: "Week 53", y: 2588, adults: 2391, children: 182, babies: 15}
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
					{x: "Week 1", y: 691, adults: 652, children: 37, babies: 2},
					{x: "Week 2", y: 806, adults: 789, children: 14, babies: 3},
					{x: "Week 3", y: 862, adults: 822, children: 37, babies: 3},
					{x: "Week 4", y: 896, adults: 867, children: 22, babies: 7},
					{x: "Week 5", y: 871, adults: 823, children: 41, babies: 7},
					{x: "Week 6", y: 1254, adults: 1204, children: 45, babies: 5},
					{x: "Week 7", y: 1778, adults: 1686, children: 86, babies: 6},
					{x: "Week 8", y: 1365, adults: 1282, children: 72, babies: 11},
					{x: "Week 9", y: 1520, adults: 1429, children: 89, babies: 2},
					{x: "Week 10", y: 1296, adults: 1253, children: 42, babies: 1},
					{x: "Week 11", y: 1182, adults: 1143, children: 33, babies: 6},
					{x: "Week 12", y: 1151, adults: 1100, children: 44, babies: 7},
					{x: "Week 13", y: 1591, adults: 1498, children: 83, babies: 10},
					{x: "Week 14", y: 1448, adults: 1332, children: 111, babies: 5},
					{x: "Week 15", y: 1787, adults: 1658, children: 121, babies: 8},
					{x: "Week 16", y: 1370, adults: 1331, children: 34, babies: 5},
					{x: "Week 17", y: 1601, adults: 1513, children: 80, babies: 8},
					{x: "Week 18", y: 1960, adults: 1867, children: 82, babies: 11},
					{x: "Week 19", y: 1475, adults: 1404, children: 62, babies: 9},
					{x: "Week 20", y: 1500, adults: 1431, children: 62, babies: 7},
					{x: "Week 21", y: 1802, adults: 1668, children: 116, babies: 18},
					{x: "Week 22", y: 1703, adults: 1587, children: 104, babies: 12},
					{x: "Week 23", y: 1501, adults: 1411, children: 80, babies: 10},
					{x: "Week 24", y: 1413, adults: 1309, children: 91, babies: 13},
					{x: "Week 25", y: 1504, adults: 1360, children: 135, babies: 9},
					{x: "Week 26", y: 1552, adults: 1385, children: 154, babies: 13},
					{x: "Week 27", y: 1822, adults: 1608, children: 201, babies: 13},
					{x: "Week 28", y: 2209, adults: 1961, children: 229, babies: 19},
					{x: "Week 29", y: 2341, adults: 2082, children: 242, babies: 17},
					{x: "Week 30", y: 2503, adults: 2182, children: 301, babies: 20},
					{x: "Week 31", y: 2517, adults: 2220, children: 277, babies: 20},
					{x: "Week 32", y: 2465, adults: 2129, children: 294, babies: 42},
					{x: "Week 33", y: 2813, adults: 2462, children: 318, babies: 33},
					{x: "Week 34", y: 2542, adults: 2221, children: 296, babies: 25},
					{x: "Week 35", y: 2162, adults: 1924, children: 212, babies: 26},
					{x: "Week 36", y: 1686, adults: 1562, children: 107, babies: 17},
					{x: "Week 37", y: 1339, adults: 1272, children: 56, babies: 11},
					{x: "Week 38", y: 1545, adults: 1469, children: 60, babies: 16},
					{x: "Week 39", y: 1561, adults: 1511, children: 45, babies: 5},
					{x: "Week 40", y: 1309, adults: 1262, children: 41, babies: 6},
					{x: "Week 41", y: 1771, adults: 1690, children: 70, babies: 11},
					{x: "Week 42", y: 1336, adults: 1292, children: 40, babies: 4},
					{x: "Week 43", y: 1760, adults: 1677, children: 80, babies: 3},
					{x: "Week 44", y: 1347, adults: 1294, children: 47, babies: 6},
					{x: "Week 45", y: 1265, adults: 1218, children: 36, babies: 11},
					{x: "Week 46", y: 889, adults: 866, children: 22, babies: 1},
					{x: "Week 47", y: 1271, adults: 1241, children: 21, babies: 9},
					{x: "Week 48", y: 882, adults: 836, children: 43, babies: 3},
					{x: "Week 49", y: 1312, adults: 1266, children: 38, babies: 8},
					{x: "Week 50", y: 833, adults: 809, children: 18, babies: 6},
					{x: "Week 51", y: 728, adults: 707, children: 16, babies: 5},
					{x: "Week 52", y: 1165, adults: 1071, children: 83, babies: 11},
					{x: "Week 53", y: 1258, adults: 1162, children: 85, babies: 11}
				],
				backgroundColor : "green",
				borderColor : "lightgreen",
				fill : false,
				lineTension : 0,
				pointRadius : 4
			}
		]
	};

	const footer = (tooltipItems) => {
        let babies = 0;
        let children = 0;
        let adults = 0;
      
        tooltipItems.forEach(function(tooltipItem) {
          babies += tooltipItem.raw.babies;
          children += tooltipItem.raw.children;
          adults += tooltipItem.raw.adults;
        });
        return 'Adults: ' + adults + '\nChildren: ' + children + '\nBabies: ' + babies;
      };

	var options = {
        responsive: true,
        aspectRatio:2.6,
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
					max: 5600,
					min: 0,

                ticks: {
                    stepSize: 400
                },
                grid: {
                    display: true
                }
			},
			xAxis: {
				ticks: {
					autoSkip: false
				},
				grid: {
					display: true
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