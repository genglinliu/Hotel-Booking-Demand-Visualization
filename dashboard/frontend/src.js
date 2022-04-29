//Source: https://www.youtube.com/watch?v=tRSZYbGZAdE

var loadedData;
d3.csv('./data/deposit_type.csv',
    
    function (data) {
        loadedData = data;
        updateCircle();
    });

var select = d3.select('select').on('change', update);

var margin  = {top: 20, bottom: 20, right: 20, left: 45},
    width = 700 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," 
        + margin.top + ")");

var pieContainer = chart.append('g').attr("transform", "translate(" + width / 2 + " " +
height / 2 + ")")

var colors = function(i) {
    return d3.interpolateCool(i/6);
}

var labelsArc = d3.arc()
    .outerRadius(height/2 * 0.7)
    .innerRadius(height/2 * 0.7);

var popuArc = d3.arc()
    .outerRadius(height/2 * 0.65)
    .innerRadius(height/2 * 0.3);

var arc = d3.arc() 
    .outerRadius(height/2 * 0.6)
    .innerRadius(height/2 * 0.3);

pieContainer.append('path')
    .attr("class", 'backgroundArc')
    .attr("d", arc({startAngle:0, endAngle: 2 * Math.PI}));

function update(){
    var show = select.property('selectedOptions')[0].value;
    updateCircle(show);
}

function updateCircle(toShow){
    var filtered = loadedData.filter(filterData(toShow));
    var totalFirms = filtered.reduce(function (total, el) {
        return total + + el.count
    }, 0);

    var pie = d3.pie()
        .sort(null)
        .padAngle(0.04)
        .value(function (d) {
            return +d.count;
        });

    var arcs = pie(filtered);

    var arcElements = pieContainer.selectAll("arc").data(arcs);

    arcElements.enter()
        .append("path")
        .attr("class", "arc")
        .style("fill", function (d,i) {return colors(i) })
        .merge(arcElements)
        .on("mouseover", function(d) {
            d3.select(this).attr("d", function(d) {
                return popuArc(d);
            });
            var centerText = pieContainer.selectAll('.center').data([d]);
            centerText.enter()
                .append('text')
                .attr("class", "center")
                .style("text-anchor", "middle")
                .merge(centerText)
                    .text( function(d) { return Math.round(+d.data.count / totalFirms * 100) + "%"});
        })
        .on("mouseout", function(d) {
            d3.select(this).attr("d", function(d) {
                return arc(d);
            });
            pieContainer.selectAll('.center').text("");
        })
        .transition()
        .ease(d3.easeCircle)
        .duration(2000)
        .attr("d", arc);

    var lineElements = pieContainer.selectAll(".lines").data(arcs);
    
    lineElements.enter()
        .append("path")
        .attr("class", "lines")
        .merge(lineElements)
        .transition()
        .ease(d3.easeCircle)
        .duration(2000)
        .attrTween("d", tweenLines);
    
    var textElements = pieContainer.selectAll(".labels").data(arcs);

    textElements.enter()
        .append("text")
            .attr("class", "labels")
        .merge(textElements)
            .text(function(d) {return d.data.yearsInBusinessLabel + " (" + 
            d.data.count + ")" })
            .attr("dy", "0.35em" )
            .transition()
            .ease(d3.easeCircle)
            .duration(2000)
            .attrTween("d", tweenLabels)
            .styleTween("text-anchor", tweenAnchor);

}

function tweenLines(d){
    var interpolator = getArcInterpolator(this,d);
    var lineGen = d3.line();
    return function (t) {
        var dInt = interpolator(t);
        var start = acr.centroid(dInt);
        var xy = labelsArc.centroid(dInt);
        var textXy = [xy[0],xy[1]];
        textXy[0] = textXy[0] * 1.15
        return lineGen([start, xy, textXy]);
    }
}

function tweenAnchor(d){
    var interpolator = getArcInterpolator(this,d);
    return function (t) {
        var x = labelsArc.centroid(interpolator(t))[0];
        return (x>0) ? "start" : "end";
    };
}

function tweenLabels(d){
    var interpolator = getArcInterpolator(this,d);
    return function (t) {
        var p = labelsArc.centroid(interpolator(t));
        var xy = p
        xy[0] = xy[0] * 1.2
        return "translate(" + xy + ")";
    };
}

function tweenArcs(d){
    var interpolator = getArcInterpolator(this,d);
    return function (t) {
        return arc(interpolator(t));
    };
}

function getArcInterpolator(el, d){
    var oldValue = el._oldValue;
    var interpolator = d3.interpolator({
        startAngle: oldValue ? oldValue.startAngle : 0,
        endAngle: oldValue ? oldValue.endAngle : 0
    }, d);
    el._oldValue = interpolator(0);

    return interpolator;
}

function filterData(toShow) {
    switch(toShow) {
        case "Resort Hotel":
            return resortFilter;
        case "City Hotel":
            return cityFilter;
        case "Both":
            return bothFilter;
        default:
            return bothFilter;
    }
}

function cityFilter(el){
    return el.Hotel == "City Hotel";
}

function resortFilter(el){
    return el.Hotel == "Resort Hotel";
}

function bothFilter(el){
    return el.Hotel == "City Hotel";
}
