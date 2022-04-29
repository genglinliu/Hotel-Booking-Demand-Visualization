
const url="https://unpkg.com/world-atlas@2.0.2/countries-50m.json"
fetch(url).then((result)=>result.json()).then((datapoint)=>{
    const countries = ChartGeo.topojson.feature(datapoint, datapoint.objects.countries).features;

    // setup 
    const data = {
        labels: countries.map(country=>country.properties.name),
        datasets: [{
            label: 'World Map',
            data: countries.map(country=>({feature:country, value: Math.random()
            })),

            
        }]
    };

        // config 
        const config = {
        type: 'choropleth',
        data,
        options: {
            showOutline: true,
            showGraticule: true,
            scales: {
                xy: {
                    projection: 'equalEarth'
                }
            },
            plugins: {
                legends: {
                    display: false
                }

            }
        }
        };

        // render init block
        const Chartmy = new Chart(
        document.getElementById('Chartmy'),
        config
        );




})


