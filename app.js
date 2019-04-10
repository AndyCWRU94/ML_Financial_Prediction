


var msfbtn = d3.select("#MSF");

msfbtn.on("click", function() {
    //to prevent the whole page to refresh
    d3.event.preventDefault();
    
    var x = []
    var y = []
    var z = []
    var l = []
    var u = []
    d3.csv("/data1/MSFT_90_Day_Final.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        x.push(data[i].Date);
        y.push(data[i].ActualClose);
        z.push(data[i].PredictedClose);
        l.push(data[i].PredictedLower);
        u.push(data[i].PredictedUpper);
    }
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(l);
    console.log(u);
    var lastday = x.slice(-1);
    document.getElementById("day").innerHTML = lastday;
    var closeingprice = y.slice(-1);
    var c = parseFloat(closeingprice[0]).toFixed(2);
    document.getElementById("close").innerHTML = c;
    var predict = z.slice(-1);
    var p = parseFloat(predict[0]).toFixed(2);
    document.getElementById("predict").innerHTML = p;

        // Part 3 - Line Chart
    var trace1 = {
    x: x,
    y: y,
    name: "Actual Price",
    type: "line",
    line: {
        color: 'rgb(0,0,0)',
        width: 3
    }  
    };
    var trace3 = {
        x: x,
        y: l,
        name: "Lower Prediction",
        type: "line",
        line: {
            color: 'rgb(55, 128, 191)',
          },
        };
    var trace4 = {
        x: x,
        y: u,
        name: "Upper prediction",
        fill: 'tonexty',
        line: {
            color: 'rgb(55, 128, 191)',
          },
        type: "line"
        };
        var trace2 = {
            x: x,
            y: z,
            name: "Predicted Price",
            type: "line"
            };
    var datat = [trace1, trace3, trace4, trace2];
    var layout = {
    title: "MICROSOFT",
        width: 700,
        height: 500,
    };
    Plotly.newPlot("plot", datat, layout);
    });
});



var applebtn = d3.select("#APPLE");

applebtn.on("click", function() {
    //to prevent the whole page to refresh
    d3.event.preventDefault();

    

    var x = []
    var y = []
    var z = []
    var l = []
    var u = []
    d3.csv("/data1/AAPL_90_Day_Final.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        x.push(data[i].Date);
        y.push(data[i].ActualClose);
        z.push(data[i].PredictedClose);
        l.push(data[i].PredictedLower);
        u.push(data[i].PredictedUpper);
    }
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(l);
    console.log(u);
    var lastday = x.slice(-1);
    document.getElementById("day").innerHTML = lastday;
    var closeingprice = y.slice(-1);
    var c = parseFloat(closeingprice[0]).toFixed(2);
    document.getElementById("close").innerHTML = c;
    var predict = z.slice(-1);
    var p = parseFloat(predict[0]).toFixed(2);
    document.getElementById("predict").innerHTML = p;
        // Part 3 - Line Chart
    var trace1 = {
    x: x,
    y: y,
    name: "Actual Price",
    type: "line",
    line: {
        color: 'rgb(0,0,0)',
        width: 3
    }  
    };
    var trace3 = {
        x: x,
        y: l,
        name: "Lower Prediction",
        type: "line",
        line: {
            color: 'rgb(55, 128, 191)',
          },
        };
    var trace4 = {
        x: x,
        y: u,
        name: "Upper prediction",
        fill: 'tonexty',
        line: {
            color: 'rgb(55, 128, 191)',
          },
        type: "line"
        };
        var trace2 = {
            x: x,
            y: z,
            name: "Predicted Price",
            type: "line"
            };
    var datat = [trace1, trace3, trace4, trace2];
    var layout = {
    title: "APPLE",
        width: 700,
        height: 500,
    };
    Plotly.newPlot("plot", datat, layout);
    });
});


var Exxonbtn = d3.select("#Exxon");

Exxonbtn.on("click", function() {
    //to prevent the whole page to refresh
    d3.event.preventDefault();
    var x = []
    var y = []
    var z = []
    var l = []
    var u = []
    d3.csv("/data1/XOM_90_Day_Final.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        x.push(data[i].Date);
        y.push(data[i].ActualClose);
        z.push(data[i].PredictedClose);
        l.push(data[i].PredictedLower);
        u.push(data[i].PredictedUpper);
    }
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(l);
    console.log(u);
    var lastday = x.slice(-1);
    document.getElementById("day").innerHTML = lastday;
    var closeingprice = y.slice(-1);
    var c = parseFloat(closeingprice[0]).toFixed(2);
    document.getElementById("close").innerHTML = c;
    var predict = z.slice(-1);
    var p = parseFloat(predict[0]).toFixed(2);
    document.getElementById("predict").innerHTML = p;
        // Part 3 - Line Chart
    var trace1 = {
    x: x,
    y: y,
    name: "Actual Price",
    type: "line",
    line: {
        color: 'rgb(0,0,0)',
        width: 3
    }  
    };
    var trace3 = {
        x: x,
        y: l,
        name: "Lower Prediction",
        type: "line",
        line: {
            color: 'rgb(55, 128, 191)',
          },
        };
    var trace4 = {
        x: x,
        y: u,
        name: "Upper prediction",
        fill: 'tonexty',
        line: {
            color: 'rgb(55, 128, 191)',
          },
        type: "line"
        };
        var trace2 = {
            x: x,
            y: z,
            name: "Predicted Price",
            type: "line"
            };
    var datat = [trace1, trace3, trace4, trace2];
    var layout = {
    title: "EXXON MOBILE",
        width: 700,
        height: 500,
    };
    Plotly.newPlot("plot", datat, layout);
    });
});


var starbtn = d3.select("#STAR");

starbtn.on("click", function() {
    //to prevent the whole page to refresh
    d3.event.preventDefault();
    var x = []
    var y = []
    var z = []
    var l = []
    var u = []
    d3.csv("/data1/SBUX_90_Day_Final.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        x.push(data[i].Date);
        y.push(data[i].ActualClose);
        z.push(data[i].PredictedClose);
        l.push(data[i].PredictedLower);
        u.push(data[i].PredictedUpper);
    }
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(l);
    console.log(u);
    var lastday = x.slice(-1);
    document.getElementById("day").innerHTML = lastday;
    var closeingprice = y.slice(-1);
    var c = parseFloat(closeingprice[0]).toFixed(2);
    document.getElementById("close").innerHTML = c;
    var predict = z.slice(-1);
    var p = parseFloat(predict[0]).toFixed(2);
    document.getElementById("predict").innerHTML = p;
        // Part 3 - Line Chart
    var trace1 = {
    x: x,
    y: y,
    name: "Actual Price",
    type: "line",
    line: {
        color: 'rgb(0,0,0)',
        width: 3
    }  
    };
    var trace3 = {
        x: x,
        y: l,
        name: "Lower Prediction",
        type: "line",
        line: {
            color: 'rgb(55, 128, 191)',
          },
        };
    var trace4 = {
        x: x,
        y: u,
        name: "Upper prediction",
        fill: 'tonexty',
        line: {
            color: 'rgb(55, 128, 191)',
          },
        type: "line"
        };
        var trace2 = {
            x: x,
            y: z,
            name: "Predicted Price",
            type: "line"
            };
    var datat = [trace1, trace3, trace4, trace2];
    var layout = {
    title: "STARBUCKS",
        width: 700,
        height: 500,
    };
    Plotly.newPlot("plot", datat, layout);
    });
});

var welltbtn = d3.select("#WELL");

welltbtn.on("click", function() {
    //to prevent the whole page to refresh
    d3.event.preventDefault();
    var x = []
    var y = []
    var z = []
    var l = []
    var u = []
    d3.csv("/data1/WFC_90_Day_Final.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        x.push(data[i].Date);
        y.push(data[i].ActualClose);
        z.push(data[i].PredictedClose);
        l.push(data[i].PredictedLower);
        u.push(data[i].PredictedUpper);
    }
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(l);
    console.log(u);
    var lastday = x.slice(-1);
    document.getElementById("day").innerHTML = lastday;
    var closeingprice = y.slice(-1);
    var c = parseFloat(closeingprice[0]).toFixed(2);
    document.getElementById("close").innerHTML = c;
    var predict = z.slice(-1);
    var p = parseFloat(predict[0]).toFixed(2);
    document.getElementById("predict").innerHTML = p;
        // Part 3 - Line Chart
    var trace1 = {
    x: x,
    y: y,
    name: "Actual Price",
    type: "line",
    line: {
        color: 'rgb(0,0,0)',
        width: 3
    }  
    };
    var trace3 = {
        x: x,
        y: l,
        name: "Lower Prediction",
        type: "line",
        line: {
            color: 'rgb(55, 128, 191)',
          },
        };
    var trace4 = {
        x: x,
        y: u,
        name: "Upper prediction",
        fill: 'tonexty',
        line: {
            color: 'rgb(55, 128, 191)',
          },
        type: "line"
        };
        var trace2 = {
            x: x,
            y: z,
            name: "Predicted Price",
            type: "line"
            };
    var datat = [trace1, trace3, trace4, trace2];
    var layout = {
    title: "WELLS FARGO",
        width: 700,
        height: 500,
    };
    Plotly.newPlot("plot", datat, layout);
    });
});


var costbtn = d3.select("#COST");

costbtn.on("click", function() {
    //to prevent the whole page to refresh
    d3.event.preventDefault();
    var x = []
    var y = []
    var z = []
    var l = []
    var u = []
    d3.csv("/data1/COST_90_Day_Final.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        x.push(data[i].Date);
        y.push(data[i].ActualClose);
        z.push(data[i].PredictedClose);
        l.push(data[i].PredictedLower);
        u.push(data[i].PredictedUpper);
    }
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(l);
    console.log(u);
    var lastday = x.slice(-1);
    document.getElementById("day").innerHTML = lastday;
    var closeingprice = y.slice(-1);
    var c = parseFloat(closeingprice[0]).toFixed(2);
    document.getElementById("close").innerHTML = c;
    var predict = z.slice(-1);
    var p = parseFloat(predict[0]).toFixed(2);
    document.getElementById("predict").innerHTML = p;
        // Part 3 - Line Chart
    var trace1 = {
    x: x,
    y: y,
    name: "Actual Price",
    type: "line",
    line: {
        color: 'rgb(0,0,0)',
        width: 3
    }  
    };
    var trace3 = {
        x: x,
        y: l,
        name: "Lower Prediction",
        type: "line",
        line: {
            color: 'rgb(55, 128, 191)',
          },
        };
    var trace4 = {
        x: x,
        y: u,
        name: "Upper prediction",
        fill: 'tonexty',
        line: {
            color: 'rgb(55, 128, 191)',
          },
        type: "line"
        };
        var trace2 = {
            x: x,
            y: z,
            name: "Predicted Price",
            type: "line"
            };
    var datat = [trace1, trace3, trace4, trace2];
    var layout = {
    title: "COSTCO",
        width: 700,
        height: 500,
    };
    Plotly.newPlot("plot", datat, layout);
    });
});

