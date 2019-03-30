// d3.queue is a JS library that works with multiple asynchronious functions
d3.queue()
//makes 2 requests for topojson file and emissions_data.csv
  .defer(d3.json, "//unpkg.com/world-atlas@1.1.4/world/50m.json")
  //insert csv when complete
  .defer(d3.csv, "static/emissions_dashboard_data_final.csv", function(row) {
    return {
      continent: row.Continent,
      country: row.Country,
      countryCode: row["Country Code"],
      emissions: +row["Emissions"],
      emissionsPerCapita: +row["Emissions Per Capita"],
      region: row.Region,
      year: +row.Year
    }
  })
// await to make sure fetch of all data is complete
  .await(function(error, mapData, data) {
  //  if (error) throw error;
//set variable for max and min year values
    var extremeYears = d3.extent(data, d => d.year);
    var currentYear = extremeYears[0];
//assign a variable for html radio button that allows to choose only 1 of predefined mutually exclusive options
    var currentDataType = d3.select('input[name="data-type"]:checked')
                            .attr("value");
//geoData variable assigned to converted topojson file
    var geoData = topojson.feature(mapData, mapData.objects.countries).features;
//setting svg width as wide as the chart-container
    var width = +d3.select(".chart-container")
                   .node().offsetWidth;
    var height = 300;
// Create functions createMap, createPie, createBar with appropriate width and height
    createMap(width, width * 4 / 5);
    createPie(width, height);
    createBar(width, height);
//Create drawMap function that takes in topojson data,emissions data, currentYear,currentDataType
//Create drawPie function that takes emissions data and currentYear
//Create drawBar function that takes in emissions data,currentDataType, and empty string for country
    drawMap(geoData, data, currentYear, currentDataType);
    drawPie(data, currentYear);
    drawBar(data, currentDataType, "");

//Select range input with id='year'
//Add an event-listener,when values change for the currentYear, 
//grabs new data and redraws the map,pie chart and highlightBars for current year
    d3.select("#year")
        .property("min", currentYear)
        .property("max", extremeYears[1])
        .property("value", currentYear)
        .on("input", () => {
          currentYear = +d3.event.target.value;
          drawMap(geoData, data, currentYear, currentDataType);
          drawPie(data, currentYear);
          highlightBars(currentYear);
        });
//Select input with name attribute 'data-type'
//Add an event-listener,when value changes for the currentDataType,grabs new data and redraws the map
//update bar chart,checks if there is an active country and calls drawBar with appropriate values
    d3.selectAll('input[name="data-type"]')
        .on("change", () => {
          var active = d3.select(".active").data()[0];
          var country = active ? active.properties.country : "";
          currentDataType = d3.event.target.value;
          drawMap(geoData, data, currentYear, currentDataType);
          drawBar(data, currentDataType, country);
        });

    d3.selectAll("svg")
        .on("mousemove touchmove", updateTooltip);
//Initiliaze updateToolTip function
    function updateTooltip() {
      var tooltip = d3.select(".tooltip");
      var tgt = d3.select(d3.event.target);
      var isCountry = tgt.classed("country");
      var isBar = tgt.classed("bar");
      var isArc = tgt.classed("arc");
      var dataType = d3.select("input:checked")
                       .property("value");
      var units = dataType === "emissions" ? "thousand metric tons" : "metric tons per capita";
      var data;
      var percentage = "";
      if (isCountry) data = tgt.data()[0].properties;
      if (isArc) {
        data = tgt.data()[0].data;
        percentage = `<p>Percentage of total: ${getPercentage(tgt.data()[0])}</p>`;
      }
      if (isBar) data = tgt.data()[0];
      tooltip
          .style("opacity", +(isCountry || isArc || isBar))
          .style("left", (d3.event.pageX - tooltip.node().offsetWidth / 2) + "px")
          .style("top", (d3.event.pageY - tooltip.node().offsetHeight - 10) + "px");
      if (data) {
        var dataValue = data[dataType] ?
          data[dataType].toLocaleString() + " " + units :
          "Data Not Available";
        tooltip 
            .html(`
              <p>Country: ${data.country}</p>
              <p>${formatDataType(dataType)}: ${dataValue}</p>
              <p>Year: ${data.year || d3.select("#year").property("value")}</p>
              ${percentage}
            `)
      }
    }
  });
//Create helper function to convert keys from camelcase string, add space and change to Uppercase letters.
function formatDataType(key) {
  return key[0].toUpperCase() + key.slice(1).replace(/[A-Z]/g, c => " " + c);
}
//Create helper function getPercentage that calculates the difference between 2 angles multiplied by 100
//and divided by PI to get a number between 0 and 100
function getPercentage(d) {
  var angle = d.endAngle - d.startAngle;
  var fraction = 100 * angle / (Math.PI * 2);
  return fraction.toFixed(2) + "%";
}
