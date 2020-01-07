        $(function() {
            var optionsBar = {
                chart: {
                    type: 'bar',
                    height: 250,
                    width: '100%',
                    stacked: true,
                    foreColor: '#999'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: false
                        },
                        columnWidth: '75%',
                        endingShape: 'rounded'
                    }
                },
                colors: ["#0abb87", '#eef1f5'],
                series: [{
                    name: "Sessions",
                    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19, 15, 10, 11, 15, 19, 23],
                }, {
                    name: "Views",
                    data: [20, 16, 24, 28, 26, 22, 15, 5, 14, 16, 22, 29, 24, 19, 15, 10, 11, 15, 19, 23],
                }],
                labels: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4],
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        show: false
                    },
                    labels: {
                        show: false,
                        style: {
                            fontSize: '14px'
                        }
                    },
                },
                grid: {
                    xaxis: {
                        lines: {
                            show: false
                        },
                    },
                    yaxis: {
                        lines: {
                            show: false
                        },
                    }
                },
                yaxis: {
                    paddingTop: 50,
                    axisBorder: {
                        show: false
                    },
                    labels: {
                        show: false
                    },
                },
                legend: {
                    floating: true,
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetY: 20
                },
                tooltip: {
                    shared: true
                }
            }
            var chartBar = new ApexCharts(document.querySelector('#n-bar'), optionsBar);
            chartBar.render();
        });
        $(function() {
            var optionsDonutTop = {
                chart: {
                    height: 250,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        size: 76,
                        donut: {
                            size: '72%',
                        },
                        dataLabels: {
                            enabled: false
                        }
                    }
                },
                colors: ['#fd397a', '#5d78ff', '#ffb822'],
                title: {
                    text: 'Visitors Source'
                },
                series: [2, 7, 5],
                labels: ['Social Media', 'Blog', 'External'],
                legend: {
                    show: false
                }
            }
            var chartDonut2 = new ApexCharts(document.querySelector('#n-donutTop'), optionsDonutTop);
            chartDonut2.render();
        });
        $(function() {
            var optionsCircle1 = {
                chart: {
                    type: 'radialBar',
                    height: 250,
                    zoom: {
                        enabled: false
                    },
                },
                colors: ['#fd397a'],
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                offsetY: 0
                            }
                        }
                    }
                },
                series: [65],
                theme: {
                    monochrome: {
                        enabled: false
                    }
                },
                title: {
                    text: 'Bounce Rate',
                    align: 'left'
                }
            }
            var chartCircle1 = new ApexCharts(document.querySelector('#n-radialBar1'), optionsCircle1);
            chartCircle1.render();
        });
        $(function() {
            var spark1 = {
                chart: {
                    id: 'sparkline1',
                    type: 'line',
                    height: 140,
                    sparkline: {
                        enabled: true
                    },
                },
                series: [{
                    name: 'purple',
                    data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
                }],
                stroke: {
                    curve: 'smooth'
                },
                markers: {
                    size: 0
                },
                tooltip: {
                    fixed: {
                        enabled: true,
                        position: 'right'
                    },
                    x: {
                        show: false
                    }
                },
                title: {
                    text: '439',
                    style: {
                        fontSize: '26px'
                    }
                },
                colors: ['#5d78ff']
            }

            var spark2 = {
                chart: {
                    id: 'sparkline2',
                    type: 'line',
                    height: 140,
                    sparkline: {
                        enabled: true
                    },
                },
                series: [{
                    name: 'green',
                    data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
                }],
                stroke: {
                    curve: 'smooth'
                },
                markers: {
                    size: 0
                },
                tooltip: {
                    fixed: {
                        enabled: true,
                        position: 'right'
                    },
                    x: {
                        show: false
                    }
                },
                title: {
                    text: '387',
                    style: {
                        fontSize: '26px'
                    }
                },
                colors: ['#0abb87']
            }

            var spark3 = {
                chart: {
                    id: 'sparkline3',
                    type: 'line',
                    height: 140,
                    sparkline: {
                        enabled: true
                    },
                },
                series: [{
                    name: 'red',
                    data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
                }],
                stroke: {
                    curve: 'smooth'
                },
                markers: {
                    size: 0
                },
                tooltip: {
                    fixed: {
                        enabled: true,
                        position: 'right'
                    },
                    x: {
                        show: false
                    }
                },
                colors: ['#ff5252'],
                title: {
                    text: '577',
                    style: {
                        fontSize: '26px'
                    }
                },
                xaxis: {
                    crosshairs: {
                        width: 1
                    },
                }
            }

            var spark4 = {
                chart: {
                    id: 'sparkline4',
                    type: 'line',
                    height: 140,
                    sparkline: {
                        enabled: true
                    },
                },
                series: [{
                    name: 'teal',
                    data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
                }],
                stroke: {
                    curve: 'smooth'
                },
                markers: {
                    size: 0
                },
                tooltip: {
                    fixed: {
                        enabled: true,
                        position: 'right'
                    },
                    x: {
                        show: false
                    }
                },
                colors: ['#ffb822'],
                title: {
                    text: '615',
                    style: {
                        fontSize: '26px'
                    }
                },
                xaxis: {
                    crosshairs: {
                        width: 1
                    },
                }
            }
            new ApexCharts(document.querySelector("#n-spark1"), spark1).render();
            new ApexCharts(document.querySelector("#n-spark2"), spark2).render();
            new ApexCharts(document.querySelector("#n-spark3"), spark3).render();
            new ApexCharts(document.querySelector("#n-spark4"), spark4).render();
        });
        $(function() {
            var optionsArea = {
                chart: {
                    height: 421,
                    type: 'area',
                    background: '#fff',
                    stacked: true,
                    offsetY: 39,
                    zoom: {
                        enabled: false
                    }
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: false
                        }
                    }
                },
                stroke: {
                    curve: 'straight'
                },
                colors: ["#5d78ff", '#0abb87'],
                series: [{
                        name: "Adwords Views",
                        data: [15, 26, 20, 33, 27, 43, 17, 26, 19]
                    },
                    {
                        name: "Adwords Clicks",
                        data: [33, 21, 42, 19, 32, 25, 36, 29, 49]
                    }
                ],
                fill: {
                    type: 'gradient',
                    gradient: {
                        inverseColors: false,
                        shade: 'light',
                        type: "vertical",
                        opacityFrom: 0.9,
                        opacityTo: 0.6,
                        stops: [0, 100, 100, 100]
                    }
                },
                title: {
                    text: 'Visitor Insights',
                    align: 'left',
                    offsetY: -5,
                    offsetX: 20
                },
                subtitle: {
                    text: 'Adwords Statistics',
                    offsetY: 30,
                    offsetX: 20
                },
                markers: {
                    size: 0,
                    style: 'hollow',
                    strokeWidth: 8,
                    strokeColor: "#fff",
                    strokeOpacity: 0.25,
                },
                grid: {
                    show: false,
                    padding: {
                        left: 0,
                        right: 0
                    }
                },
                labels: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002', '01/21/2002', '01/22/2002', '01/23/2002'],
                xaxis: {
                    type: 'datetime',
                    tooltip: {
                        enabled: false
                    }
                },
                legend: {
                    offsetY: -50,
                    position: 'top',
                    horizontalAlign: 'right'
                }
            }
            var chartArea = new ApexCharts(document.querySelector('#n-area-adwords'), optionsArea);
            chartArea.render();
        });
        $(function() {
            function trigoSeries(cnt, strength) {
                var data = [];
                for (var i = 0; i < cnt; i++) {
                    data.push((Math.sin(i / strength) * (i / strength) + i / strength + 1) * (strength * 2));
                }
                return data;
            }
            var optionsLine = {
                chart: {
                    height: 340,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                plotOptions: {
                    stroke: {
                        width: 4,
                        curve: 'smooth'
                    },
                },
                colors: ["#5d78ff", "#0abb87"],
                series: [{
                        name: "Day Time",
                        data: trigoSeries(52, 20)
                    },
                    {
                        name: "Night Time",
                        data: trigoSeries(52, 27)
                    },
                ],
                title: {
                    floating: false,
                    text: 'Customers',
                    align: 'left',
                    style: {
                        fontSize: '18px'
                    }
                },
                subtitle: {
                    text: '168,215',
                    align: 'center',
                    margin: 30,
                    offsetY: 40,
                    style: {
                        color: '#222',
                        fontSize: '24px',
                    }
                },
                markers: {
                    size: 0
                },
                grid: {
                },
                xaxis: {
                    labels: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    tooltip: {
                        enabled: false
                    }
                },
                yaxis: {
                    tickAmount: 2,
                    labels: {
                        show: false
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    min: 0,
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetY: -20,
                    offsetX: -30
                }
            }
            var chartLine = new ApexCharts(document.querySelector('#n-line'), optionsLine);
            chartLine.render();
        });
        $(function() {});


//
// Basic Area Chart
//
var options = {
    chart: {
        height: 380,
        type: 'area',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'straight'
    },
    colors: ["#fd397a"],
    series: [{
        name: "STOCK ABC",
        data: series.monthDataSeries1.prices
    }],
    title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left'
    },
    subtitle: {
        text: 'Price Movements',
        align: 'left'
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
        type: 'datetime',
    },
    yaxis: {
        opposite: true
    },
    legend: {
        horizontalAlign: 'left'
    },
    grid: {
        borderColor: '#f1f3fa'
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#basic-area"),
    options
);

chart.render();


//
// Splite Area
//

var options = {
    chart: {
        height: 380,
        type: 'area',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'smooth'
    },
    colors: ["#5d78ff", "#8897AA"],
    series: [{
        name: 'Series 1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'Series 2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
    legend: {
        offsetY: 10,
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    tooltip: {
        fixed: {
            enabled: false,
            position: 'topRight'
        }
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#spline-area"),
    options
);

chart.render();


//===============================  apex sparkline  ==========================

Apex.grid = {
    padding: {
        right: 0,
        left: 0
    }
}

Apex.dataLabels = {
    enabled: false
}

var randomizeArray = function(arg) {
    var array = arg.slice();
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// data for the sparklines that appear below header area
var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

// the default colorPalette for this dashboard
var colorPalette = ['#0abb87', '#5d78ff', '#ffb822', '#fd397a', '#00bcd4']

var spark1 = {
    chart: {
        type: 'area',
        height: 160,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        width: 2,
        curve: 'straight'
    },
    fill: {
        opacity: 0.2,
    },
    series: [{
        name: 'BVM Sales ',
        data: randomizeArray(sparklineData)
    }],
    yaxis: {
        min: 0
    },
    colors: ['#DCE6EC'],
    title: {
        text: '$424,652',
        offsetX: 20,
        style: {
            fontSize: '24px'
        }
    },
    subtitle: {
        text: 'Sales',
        offsetX: 20,
        style: {
            fontSize: '14px'
        }
    }
}
new ApexCharts(document.querySelector("#spark1"), spark1).render();
var spark2 = {
    chart: {
        type: 'area',
        height: 160,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        width: 2,
        curve: 'straight'
    },
    fill: {
        opacity: 0.2,
    },
    series: [{
        name: 'BVM Expenses ',
        data: randomizeArray(sparklineData)
    }],
    yaxis: {
        min: 0
    },
    colors: ['#DCE6EC'],
    title: {
        text: '$235,312',
        offsetX: 20,
        style: {
            fontSize: '24px'
        }
    },
    subtitle: {
        text: 'Expenses',
        offsetX: 20,
        style: {
            fontSize: '14px'
        }
    }
}

new ApexCharts(document.querySelector("#spark2"), spark2).render();

var spark3 = {
    chart: {
        type: 'area',
        height: 160,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        width: 2,
        curve: 'straight'
    },
    fill: {
        opacity: 0.2,
    },
    series: [{
        name: 'Net Profits ',
        data: randomizeArray(sparklineData)
    }],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    yaxis: {
        min: 0
    },
    colors: ['#0abb87'],
    title: {
        text: '$135,965',
        offsetX: 20,
        style: {
            fontSize: '24px'
        }
    },
    subtitle: {
        text: 'Profits',
        offsetX: 20,
        style: {
            fontSize: '14px'
        }
    }
}

new ApexCharts(document.querySelector("#spark3"), spark3).render();

var options1 = {
    chart: {
        type: 'line',
        width: 140,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    markers: {
        size: 0
    },
    colors: ["#5d78ff"],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function(seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}

var options2 = {
    chart: {
        type: 'line',
        width: 140,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    colors: ["#0abb87"],
    series: [{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
    }],
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    markers: {
        size: 0
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function(seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}

var options3 = {
    chart: {
        type: 'line',
        width: 140,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    colors: ["#ffb822"],
    series: [{
        data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
    }],
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    markers: {
        size: 0
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function(seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}

var options4 = {
    chart: {
        type: 'line',
        width: 140,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    colors: ["#fd397a"],
    series: [{
        data: [15, 75, 47, 65, 14, 2, 41, 54, 4, 27, 15]
    }],
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    markers: {
        size: 0
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function(seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}

var options5 = {
    chart: {
        type: 'bar',
        width: 100,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    colors: ["#5d78ff"],
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function(seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}

var options6 = {
    chart: {
        type: 'bar',
        width: 100,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    colors: ["#0abb87"],
    series: [{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function(seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}

var options7 = {
    chart: {
        type: 'bar',
        width: 100,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    colors: ["#ffb822"],
    series: [{
        data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function(seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}

var options8 = {
    chart: {
        type: 'bar',
        width: 100,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    colors: ["#fd397a"],
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function(seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}

new ApexCharts(document.querySelector("#chart1"), options1).render();
new ApexCharts(document.querySelector("#chart2"), options2).render();
new ApexCharts(document.querySelector("#chart3"), options3).render();
new ApexCharts(document.querySelector("#chart4"), options4).render();
new ApexCharts(document.querySelector("#chart5"), options5).render();
new ApexCharts(document.querySelector("#chart6"), options6).render();
new ApexCharts(document.querySelector("#chart7"), options7).render();
new ApexCharts(document.querySelector("#chart8"), options8).render();

//===================    apex BUBBLE    =====================
//
// SIMPLE BUBBLE CHART
//

/*
// this function will generate output in this format
// data = [
    [timestamp, 23],
    [timestamp, 33],
    [timestamp, 12]
    ...
]
*/
function generateDatabbl(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}


var options = {
    chart: {
        height: 380,
        type: 'bubble',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
            name: 'Bubble 1',
            data: generateDatabbl(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Bubble 2',
            data: generateDatabbl(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Bubble 3',
            data: generateDatabbl(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        }
    ],
    fill: {
        opacity: 0.8,
        gradient: {
            enabled: false
        }
    },
    colors: ["#5d78ff", "#ffb822", "#fd397a"],
    xaxis: {
        tickAmount: 12,
        type: 'category',
    },
    yaxis: {
        max: 70
    },
    grid: {
        borderColor: '#f1f3fa'
    },
    legend: {
        offsetY: 10,
    }
}

var chart = new ApexCharts(
    document.querySelector("#simple-bubble"),
    options
);

chart.render();


//
// 3D BUBBLE CHART
//

function generateDatabbl1(baseval1, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([baseval1, y, z]);
        baseval1 += 86400000;
        i++;
    }
    return series;
}


var options2 = {
    chart: {
        height: 380,
        type: 'bubble',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
            name: 'Product 1',
            data: generateDatabbl1(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product 2',
            data: generateDatabbl1(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product 3',
            data: generateDatabbl1(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product 4',
            data: generateDatabbl1(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        }
    ],
    fill: {
        type: 'gradient',
    },
    colors: ["#5d78ff", "#0abb87", "#fd397a", "#00bcd4"],
    xaxis: {
        tickAmount: 12,
        type: 'datetime',

        labels: {
            rotate: 0,
        }
    },
    yaxis: {
        max: 70
    },
    legend: {
        offsetY: 10,
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#second-bubble"),
    options2
);

chart.render();


//===================    apex bar    =====================

//
// GROUPED BAR CHART
//

var options = {
    chart: {
        height: 380,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                position: 'top',
            },
        }
    },
    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff']
        }
    },
    colors: ["#fd397a", "#8897AA"],
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },
    series: [{
        name: 'Series 1',
        data: [44, 55, 41, 64, 22, 43, 21]
    }, {
        name: 'Series 2',
        data: [53, 32, 33, 52, 13, 44, 32]
    }],
    xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    },
    legend: {
        offsetY: 10,
    },
    states: {
        hover: {
            filter: 'none'
        }
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#grouped-bar"),
    options
);

chart.render();

//
// BAR WITH NEGATIVE VALUES
//

var options = {
    chart: {
        height: 380,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
        }
    },
    colors: ['#fd397a', '#0abb87'],
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '80%',

        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 1,
        colors: ["#fff"]
    },
    series: [{
            name: 'Males',
            data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5, 3.9, 3.5, 3]
        },
        {
            name: 'Females',
            data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8]
        }
    ],
    grid: {
        xaxis: {
            showLines: false
        }
    },
    yaxis: {
        min: -5,
        max: 5,
        title: {
            // text: 'Age',
        },
    },
    tooltip: {
        shared: false,
        x: {
            formatter: function(val) {
                return val
            }
        },
        y: {
            formatter: function(val) {
                return Math.abs(val) + "%"
            }
        }
    },
    xaxis: {
        categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'],
        title: {
            text: 'Percent'
        },
        labels: {
            formatter: function(val) {
                return Math.abs(Math.round(val)) + "%"
            }
        }
    },
    legend: {
        offsetY: 10,
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#negative-bar"),
    options
);

chart.render();


//
// PATTERNED BAR CHART
//

var options = {
    chart: {
        height: 380,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
        },
        shadow: {
            enabled: true,
            blur: 1,
            opacity: 0.5
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '60%',

        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
    },
    series: [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
    }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
    }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
    }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
    }],
    xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],

    },
    yaxis: {
        title: {
            text: undefined
        },
    },
    tooltip: {
        shared: false,
        y: {
            formatter: function(val) {
                return val + "K"
            }
        }
    },
    colors: ["#5d78ff", "#0abb87", "#fd397a", "#00bcd4"],
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'], // string or array of strings

        }
    },
    states: {
        hover: {
            filter: 'none'
        }
    },
    legend: {
        position: 'right',
    },
    grid: {
        borderColor: '#f1f3fa'
    },
    responsive: [{
        breakpoint: 600,
        options: {
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#pattern-bar"),
    options
);

chart.render();


//==============   apex Candlestick   ======================
//
// Simple Candlestick chart
//

var options = {
    chart: {
        height: 400,
        type: 'candlestick',
    },
    plotOptions: {
        candlestick: {
            colors: {
                upward: '#0abb87',
                downward: '#fd397a'
            }
        }
    },
    series: [{
        data: [{
                x: new Date(1538814600000),
                y: [6615.53, 6617.93, 6610, 6615.19]
            },
            {
                x: new Date(1538816400000),
                y: [6615.19, 6621.6, 6608.2, 6620]
            },
            {
                x: new Date(1538818200000),
                y: [6619.54, 6625.17, 6614.15, 6620]
            },
            {
                x: new Date(1538820000000),
                y: [6620.33, 6634.15, 6617.24, 6624.61]
            },
            {
                x: new Date(1538821800000),
                y: [6625.95, 6626, 6611.66, 6617.58]
            },
            {
                x: new Date(1538823600000),
                y: [6619, 6625.97, 6595.27, 6598.86]
            },
            {
                x: new Date(1538825400000),
                y: [6598.86, 6598.88, 6570, 6587.16]
            },
            {
                x: new Date(1538827200000),
                y: [6588.86, 6600, 6580, 6593.4]
            },
            {
                x: new Date(1538829000000),
                y: [6593.99, 6598.89, 6585, 6587.81]
            },
            {
                x: new Date(1538830800000),
                y: [6587.81, 6592.73, 6567.14, 6578]
            },
            {
                x: new Date(1538832600000),
                y: [6578.35, 6581.72, 6567.39, 6579]
            },
            {
                x: new Date(1538834400000),
                y: [6579.38, 6580.92, 6566.77, 6575.96]
            },
            {
                x: new Date(1538836200000),
                y: [6575.96, 6589, 6571.77, 6588.92]
            },
            {
                x: new Date(1538838000000),
                y: [6588.92, 6594, 6577.55, 6589.22]
            },
            {
                x: new Date(1538839800000),
                y: [6589.3, 6598.89, 6589.1, 6596.08]
            },
            {
                x: new Date(1538841600000),
                y: [6597.5, 6600, 6588.39, 6596.25]
            },
            {
                x: new Date(1538843400000),
                y: [6598.03, 6600, 6588.73, 6595.97]
            },
            {
                x: new Date(1538845200000),
                y: [6595.97, 6602.01, 6588.17, 6602]
            },
            {
                x: new Date(1538847000000),
                y: [6602, 6607, 6596.51, 6599.95]
            },
            {
                x: new Date(1538848800000),
                y: [6600.63, 6601.21, 6590.39, 6591.02]
            },
            {
                x: new Date(1538850600000),
                y: [6591.02, 6603.08, 6591, 6591]
            },
            {
                x: new Date(1538852400000),
                y: [6591, 6601.32, 6585, 6592]
            },
            {
                x: new Date(1538854200000),
                y: [6593.13, 6596.01, 6590, 6593.34]
            },
            {
                x: new Date(1538856000000),
                y: [6593.34, 6604.76, 6582.63, 6593.86]
            },
            {
                x: new Date(1538857800000),
                y: [6593.86, 6604.28, 6586.57, 6600.01]
            },
            {
                x: new Date(1538859600000),
                y: [6601.81, 6603.21, 6592.78, 6596.25]
            },
            {
                x: new Date(1538861400000),
                y: [6596.25, 6604.2, 6590, 6602.99]
            },
            {
                x: new Date(1538863200000),
                y: [6602.99, 6606, 6584.99, 6587.81]
            },
            {
                x: new Date(1538865000000),
                y: [6587.81, 6595, 6583.27, 6591.96]
            },
            {
                x: new Date(1538866800000),
                y: [6591.97, 6596.07, 6585, 6588.39]
            },
            {
                x: new Date(1538868600000),
                y: [6587.6, 6598.21, 6587.6, 6594.27]
            },
            {
                x: new Date(1538870400000),
                y: [6596.44, 6601, 6590, 6596.55]
            },
            {
                x: new Date(1538872200000),
                y: [6598.91, 6605, 6596.61, 6600.02]
            },
            {
                x: new Date(1538874000000),
                y: [6600.55, 6605, 6589.14, 6593.01]
            },
            {
                x: new Date(1538875800000),
                y: [6593.15, 6605, 6592, 6603.06]
            },
            {
                x: new Date(1538877600000),
                y: [6603.07, 6604.5, 6599.09, 6603.89]
            },
            {
                x: new Date(1538879400000),
                y: [6604.44, 6604.44, 6600, 6603.5]
            },
            {
                x: new Date(1538881200000),
                y: [6603.5, 6603.99, 6597.5, 6603.86]
            },
            {
                x: new Date(1538883000000),
                y: [6603.85, 6605, 6600, 6604.07]
            },
            {
                x: new Date(1538884800000),
                y: [6604.98, 6606, 6604.07, 6606]
            },
        ]
    }],

    stroke: {
        show: true,
        colors: '#f1f3fa',
        width: [1, 4]
    },
    xaxis: {
        type: 'datetime'
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#simple-candlestick"),
    options
);

chart.render();

var optionsCandlestick = {
    chart: {
        height: 240,
        type: 'candlestick',
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
    },
    series: [{
        data: seriesData
    }],
    plotOptions: {
        candlestick: {
            colors: {
                upward: '#0abb87',
                downward: '#fd397a'
            }
        }
    },
    xaxis: {
        type: 'datetime'
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chartCandlestick = new ApexCharts(
    document.querySelector("#combo-candlestick"),
    optionsCandlestick
);

chartCandlestick.render();

var options = {
    chart: {
        height: 160,
        type: 'bar',
        toolbar: {
            show: false,
            autoSelected: 'selection'
        },
        selection: {
            xaxis: {
                min: new Date('20 Jan 2017').getTime(),
                max: new Date('10 Dec 2017').getTime()
            },
            fill: {
                color: '#8897AA',
                opacity: 0.4
            },
            stroke: {
                color: '#8897AA',
            }
        },
        events: {
            selection: function(chart, e) {
                chartCandlestick.updateOptions({
                    xaxis: {
                        min: e.xaxis.min,
                        max: e.xaxis.max
                    }
                }, false, false)
            }
        },

    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        bar: {
            columnWidth: '80%',
            colors: {
                ranges: [{
                    from: -1000,
                    to: 0,
                    color: '#5d78ff'
                }, {
                    from: 1,
                    to: 10000,
                    color: '#ffb822'
                }],

            },
        }
    },
    series: [{
        name: 'volume',
        data: seriesDataLinear
    }],
    xaxis: {
        type: 'datetime',
        axisBorder: {
            offsetX: 13
        }
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#combo-bar-candlestick"),
    options
);

chart.render();

//================   apex column   ==================
//
// BASIC COLUMN CHART
//

var options = {
    chart: {
        height: 396,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            endingShape: 'rounded',
            columnWidth: '55%',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    colors: ["#5d78ff", "#0abb87", "#fd397a"],
    series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    legend: {
        offsetY: 10,
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1

    },
    // legend: {
    //     floating: true
    // },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    },
    tooltip: {
        y: {
            formatter: function(val) {
                return "$ " + val + " thousands"
            }
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#basic-column"),
    options
);

chart.render();


//
// COLUMN CHART WITH DATALABELS
//

var options = {
    chart: {
        height: 380,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                position: 'top', // top, center, bottom
            },
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function(val) {
            return val + "%";
        },
        offsetY: -20,
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        }
    },
    colors: ["#5d78ff"],
    series: [{
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        labels: {
            offsetY: -18,

        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            fill: {
                type: 'gradient',
                gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
            offsetY: -35,

        }
    },
    fill: {
        gradient: {
            enabled: false,
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
        },
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function(val) {
                return val + "%";
            }
        }

    },
    title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 350,
        align: 'center',
        style: {
            color: '#444'
        }
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#datalabels-column"),
    options
);

chart.render();

//
// 100% STACKED COLUMN CHART
//

var options = {
    chart: {
        height: 380,
        type: 'bar',
        stacked: true,
        stackType: '100%',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '50%',
        },
    },
    series: [{
        name: 'Product A',
        data: [44, 55, 41, 67, 22, 43, 21, 49]
    }, {
        name: 'Product B',
        data: [13, 23, 20, 8, 13, 27, 33, 12]
    }, {
        name: 'Product C',
        data: [11, 17, 15, 15, 21, 14, 15, 13]
    }],
    xaxis: {
        categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4'],
    },
    fill: {
        opacity: 1
    },
    legend: {
        offsetY: 10,
    },
    colors: ["#00bcd4", "#0abb87", "#e3eaef"],
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#full-stacked-column"),
    options
);

chart.render();
//===========   apex  HEATMAP   ====================
//
// BASIC HEATMAP - SINGLE SERIES
//

function generateDataheat(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}


var options = {
    chart: {
        height: 380,
        type: 'heatmap',
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#5d78ff"],
    series: [{
            name: 'Metric 1',
            data: generateDataheat(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 2',
            data: generateDataheat(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 3',
            data: generateDataheat(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 4',
            data: generateDataheat(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 5',
            data: generateDataheat(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric  6',
            data: generateDataheat(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 7',
            data: generateDataheat(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 8',
            data: generateDataheat(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 9',
            data: generateDataheat(20, {
                min: 0,
                max: 90
            })
        }
    ],
    xaxis: {
        type: 'category',
    },

}

var chart = new ApexCharts(
    document.querySelector("#basic-heatmap"),
    options
);

chart.render();


//
// HEATMAP - MULTIPLE SERIES
//

/*
// this function will generate output in this format
// data = [
    [timestamp, 23],
    [timestamp, 33],
    [timestamp, 12]
    ...
]
*/
function generateDataheat1(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}


var options = {
    chart: {
        height: 380,
        type: 'heatmap',
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#F3B415", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", '#A9D794',
        '#46AF78'
    ],
    series: [{
            name: 'Metric 1',
            data: generateDataheat1(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 2',
            data: generateDataheat1(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 3',
            data: generateDataheat1(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 4',
            data: generateDataheat1(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 5',
            data: generateDataheat1(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 6',
            data: generateDataheat1(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 7',
            data: generateDataheat1(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 8',
            data: generateDataheat1(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 9',
            data: generateDataheat1(20, {
                min: 0,
                max: 90
            })
        }
    ],
    xaxis: {
        type: 'category',
    },

}

var chart = new ApexCharts(
    document.querySelector("#multiple-series-heatmap"),
    options
);

chart.render();


//=========   apex line    ================
//
// Simple line chart
//

var options = {
    chart: {
        height: 380,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },

    colors: ['#ffb822'],

    stroke: {
        width: [4],
        curve: 'straight'
    },
    series: [{
        name: "Desktops",
        data: [30, 41, 35, 51, 49, 62, 69, 91, 126]
    }],
    title: {
        text: 'Product Trends by Month',
        align: 'center'
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa',
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#line-chart"),
    options
);
chart.render();

//
// Line chart with data labels
//

var options = {
    chart: {
        height: 380,
        type: 'line',
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    colors: ['#5d78ff', '#0abb87'],
    dataLabels: {
        enabled: true,
    },
    stroke: {
        width: [3, 3],
        curve: 'smooth'
    },
    series: [{
            name: "High - 2018",
            data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
            name: "Low - 2018",
            data: [12, 11, 14, 18, 17, 13, 13]
        }
    ],
    title: {
        text: 'Average High & Low Temperature',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    },
    markers: {
        style: 'inverted',
        size: 6
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        title: {
            text: 'Month'
        }
    },
    yaxis: {
        title: {
            text: 'Temperature'
        },
        min: 5,
        max: 40
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#line-chart-datalabel"),
    options
);

chart.render();

//
// Line Annotations
//

var options = {
    annotations: {
        yaxis: [{
            y: 8200,
            borderColor: '#0abb87',
            label: {
                borderColor: '#0abb87',
                style: {
                    color: '#fff',
                    background: '#0abb87',
                },
                text: 'Support',
            }
        }],
        xaxis: [{
            x: new Date('23 Nov 2017').getTime(),
            borderColor: '#00bcd4',
            label: {
                borderColor: '#00bcd4',
                style: {
                    color: '#fff',
                    background: '#00bcd4',
                },
                text: 'Anno Test',
            }
        }, {
            x: new Date('03 Dec 2017').getTime(),
            borderColor: '#ffb822',
            label: {
                borderColor: '#ffb822',
                style: {
                    color: '#fff',
                    background: '#ffb822',
                },
                orientation: 'horizontal',
                text: 'New Beginning',
            }
        }],
        points: [{
            x: new Date('27 Nov 2017').getTime(),
            y: 8506.9,
            marker: {
                size: 8,
                fillColor: '#fff',
                strokeColor: '#fd397a',
                radius: 2
            },
            label: {
                borderColor: '#fd397a',
                offsetY: 0,
                style: {
                    color: '#fff',
                    background: '#fd397a',
                },

                text: 'Point Annotation',
            }
        }]
    },
    chart: {
        height: 380,
        type: 'line',
        id: 'areachart-2'
    },
    colors: ['#00bcd4'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [3],
        curve: 'straight'
    },
    series: [{
        data: series.monthDataSeries1.prices
    }],
    title: {
        text: 'Line with Annotations',
        align: 'left'
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
        type: 'datetime',
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#line-chart-annotations"),
    options
);

chart.render();

function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}


//
// Stepline Chart
//
var ts2 = 1484418600000;
var data = [];
var spikes = [5, -5, 3, -3, 8, -8]
for (var i = 0; i < 30; i++) {
    ts2 = ts2 + 86400000;
    var innerArr = [ts2, dataSeries[1][i].value];
    data.push(innerArr)
}

var options = {
    chart: {
        type: 'line',
        height: 350
    },
    stroke: {
        curve: 'stepline',
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#00bcd4"],
    series: [{
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
    }],
    title: {
        text: 'Stepline Chart',
        align: 'left'
    },
    markers: {
        hover: {
            sizeOffset: 4
        }
    },

}

var chart = new ApexCharts(
    document.querySelector("#line-chart-step"),
    options
);

chart.render();

//
// Realtime chart
//

'use strict';

var lastDate = 0;
var data = [];

function getDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        data.push({
            x: x,
            y: y
        });
        lastDate = baseval;
        baseval += 86400000;
        i++;
    }
}

getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
    min: 10,
    max: 90
});

function getNewSeries(baseval, yrange) {
    var newDate = baseval + 86400000;
    lastDate = newDate;
    data.push({
        x: newDate,
        y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    });
}

function resetData() {
    data = data.slice(data.length - 10, data.length);
}

var options = {
    chart: {
        height: 350,
        type: 'line',
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 2000
            }
        },
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: [3],
    },
    series: [{
        data: data
    }],
    markers: {
        size: 0
    },
    xaxis: {
        type: 'datetime',
        range: 777600000
    },
    yaxis: {
        max: 100
    },
    legend: {
        show: false
    },
    grid: {
        borderColor: '#f1f3fa',
    }
};

var chartreal = new ApexCharts(document.querySelector("#line-chart-realtime"), options);

chartreal.render();



var dataPointsLength = 10;

window.setInterval(function() {
    getNewSeries(lastDate, {
        min: 10,
        max: 90
    });

    chartreal.updateSeries([{
        data: data
    }]);
}, 2000);

// every 60 seconds, we reset the data
window.setInterval(function() {
    resetData();
    chartreal.updateSeries([{
        data: data
    }], false, true);
}, 60000);

//=========  apex   LINE & COLUMN  ===============
//
// LINE & COLUMN CHART
//

var options = {
    chart: {
        height: 380,
        type: 'line',
        toolbar: {
            show: false
        }
    },
    series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    stroke: {
        width: [0, 4]
    },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    xaxis: {
        type: 'datetime'
    },
    colors: ["#5d78ff", "#0abb87"],
    yaxis: [{
        title: {
            text: 'Website Blog',
        },

    }, {
        opposite: true,
        title: {
            text: 'Social Media'
        }
    }],
    legend: {
        offsetY: 10,
    },
    grid: {
        borderColor: '#f1f3fa'
    }

}

var chart = new ApexCharts(
    document.querySelector("#line-column-mixed"),
    options
);

chart.render();

//
// LINE, COLUMN & AREA CHART
//

var options = {
    chart: {
        height: 380,
        type: 'line',
        stacked: false,
        toolbar: {
            show: false
        }
    },
    stroke: {
        width: [0, 2, 4],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            columnWidth: '50%'
        }
    },
    colors: ["#5d78ff", "#00bcd4", "#fd397a"],
    series: [{
        name: 'Team A',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
        name: 'Team B',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: 'Team C',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
        }
    },
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
    markers: {
        size: 0
    },
    legend: {
        offsetY: 10,
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        title: {
            text: 'Points',
        },
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function(y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;

            }
        }
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#all-mixed"),
    options
);

chart.render();


//=============  apex PIE   ================
//
// SIMPLE PIE CHART
//

var options = {
    chart: {
        height: 320,
        type: 'pie',
    },
    series: [44, 55, 41, 17, 15],
    labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
    colors: ["#5d78ff", "#8897AA", "#0abb87", "#fd397a", "#e3eaef"],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 10
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]

}

var chart = new ApexCharts(
    document.querySelector("#simple-pie"),
    options
);

chart.render();


//
// SIMPLE DONUT CHART
//

var options = {
    chart: {
        height: 320,
        type: 'donut',
    },
    series: [44, 55, 41, 17, 15],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 10
    },
    labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
    colors: ["#00bcd4", "#ffb822", "#313a46", "#fd397a", "#0abb87"],
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#simple-donut"),
    options
);

chart.render();


//=============   apex  RADIALBAR    ====================
//
// BASIC RADIALBAR CHART
//

var options = {
    chart: {
        height: 320,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    colors: ["#00bcd4"],
    series: [70],
    labels: ['CRICKET'],

}

var chart = new ApexCharts(
    document.querySelector("#basic-radialbar"),
    options
);

chart.render();


//
// CIRCLE CHART - CUSTOM ANGLE
//


var options = {
    chart: {
        height: 380,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            offsetY: -30,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: '30%',
                background: 'transparent',
                image: undefined,
            },
            dataLabels: {
                name: {
                    show: false,

                },
                value: {
                    show: false,
                }
            }
        }
    },
    colors: ['#0abb87', '#5d78ff', '#fd397a', '#ffb822'],
    series: [76, 67, 61, 90],
    labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
    legend: {
        show: true,
        floating: true,
        fontSize: '13px',
        position: 'left',
        verticalAlign: 'top',
        textAnchor: 'end',
        labels: {
            useSeriesColors: true,
        },
        markers: {
            size: 0
        },
        formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
        },
        itemMargin: {
            vertical: 4,
        },
        containerMargin: {
            left: 310,
            top: 8
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                show: false
            }
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#circle-angle-radial"),
    options
);

chart.render();


//
// STROKED CIRCULAR GUAGE
//

var options = {
    chart: {
        height: 380,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: '16px',
                    color: undefined,
                    offsetY: 120
                },
                value: {
                    offsetY: 76,
                    fontSize: '22px',
                    color: undefined,
                    formatter: function(val) {
                        return val + "%";
                    }
                }
            }
        }
    },
    fill: {
        gradient: {
            enabled: true,
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        },
    },
    stroke: {
        dashArray: 4
    },
    colors: ["#5d78ff"],
    series: [67],
    labels: ['Median Ratio'],
    responsive: [{
        breakpoint: 380,
        options: {
            chart: {
                height: 280
            }
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#stroked-guage-radial"),
    options
);

chart.render();

// window.setInterval(function () {
//     chart.updateSeries([Math.floor(Math.random() * (100 - 1 + 1)) + 1])
// }, 2000)


//
// GRADIENT CIRCULAR CHART
//

var options = {
    chart: {
        height: 380,
        type: 'radialBar',
        toolbar: {
            show: true
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                }
            },
            track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35
                }
            },

            dataLabels: {
                showOn: 'always',
                name: {
                    offsetY: -10,
                    show: true,
                    color: '#888',
                    fontSize: '17px'
                },
                value: {
                    formatter: function(val) {
                        return parseInt(val);
                    },
                    color: '#111',
                    fontSize: '36px',
                    show: true,
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ["#00bcd4", "#5d78ff"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    series: [75],
    stroke: {
        lineCap: 'round'
    },
    labels: ['Percent'],

}

var chart = new ApexCharts(
    document.querySelector("#gradient-chart"),
    options
);

chart.render();
//================   apex  SCATTER   =================
//
// SCATTER (XY) CHART
//

var options = {
    chart: {
        height: 380,
        type: 'scatter',
        zoom: {
            enabled: false
        }
    },

    series: [{
        name: "Sample A",
        data: [
            [16.4, 5.4],
            [21.7, 2],
            [25.4, 3],
            [19, 2],
            [10.9, 1],
            [13.6, 3.2],
            [10.9, 7.4],
            [10.9, 0],
            [10.9, 8.2],
            [16.4, 0],
            [16.4, 1.8],
            [13.6, 0.3],
            [13.6, 0],
            [29.9, 0],
            [27.1, 2.3],
            [16.4, 0],
            [13.6, 3.7],
            [10.9, 5.2],
            [16.4, 6.5],
            [10.9, 0],
            [24.5, 7.1],
            [10.9, 0],
            [8.1, 4.7],
            [19, 0],
            [21.7, 1.8],
            [27.1, 0],
            [24.5, 0],
            [27.1, 0],
            [29.9, 1.5],
            [27.1, 0.8],
            [22.1, 2]
        ]
    }, {
        name: "Sample B",
        data: [
            [6.4, 13.4],
            [1.7, 11],
            [5.4, 8],
            [9, 17],
            [1.9, 4],
            [3.6, 12.2],
            [1.9, 14.4],
            [1.9, 9],
            [1.9, 13.2],
            [1.4, 7],
            [6.4, 8.8],
            [3.6, 4.3],
            [1.6, 10],
            [9.9, 2],
            [7.1, 15],
            [1.4, 0],
            [3.6, 13.7],
            [1.9, 15.2],
            [6.4, 16.5],
            [0.9, 10],
            [4.5, 17.1],
            [10.9, 10],
            [0.1, 14.7],
            [9, 10],
            [12.7, 11.8],
            [2.1, 10],
            [2.5, 10],
            [27.1, 10],
            [2.9, 11.5],
            [7.1, 10.8],
            [2.1, 12]
        ]
    }, {
        name: "Sample C",
        data: [
            [21.7, 3],
            [23.6, 3.5],
            [24.6, 3],
            [29.9, 3],
            [21.7, 20],
            [23, 2],
            [10.9, 3],
            [28, 4],
            [27.1, 0.3],
            [16.4, 4],
            [13.6, 0],
            [19, 5],
            [22.4, 3],
            [24.5, 3],
            [32.6, 3],
            [27.1, 4],
            [29.6, 6],
            [31.6, 8],
            [21.6, 5],
            [20.9, 4],
            [22.4, 0],
            [32.6, 10.3],
            [29.7, 20.8],
            [24.5, 0.8],
            [21.4, 0],
            [21.7, 6.9],
            [28.6, 7.7],
            [15.4, 0],
            [18.1, 0],
            [33.4, 0],
            [16.4, 0]
        ]
    }],
    xaxis: {
        tickAmount: 10,
    },
    yaxis: {
        tickAmount: 7
    },
    colors: ["#5d78ff", "#0abb87", "#fd397a"],
    grid: {
        borderColor: '#f1f3fa'
    },
    legend: {
        offsetY: 10,
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#basic-scatter"),
    options
);

chart.render();


//
// SCATTER CHART – DATETIME
//

var options = {
    chart: {
        height: 380,
        type: 'scatter',
        zoom: {
            type: 'xy'
        }
    },
    series: [{
            name: 'Team 1',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Team 2',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Team 3',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Team 4',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Team 5',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
                min: 10,
                max: 60
            })
        },
    ],
    dataLabels: {
        enabled: false
    },
    colors: ["#00bcd4", "#0abb87", "#e3eaef", "#8897AA", "#ffb822"],
    grid: {
        borderColor: '#f1f3fa',
        xaxis: {
            showLines: true
        },
        yaxis: {
            showLines: true
        },
    },
    legend: {
        offsetY: 10,
    },
    xaxis: {
        type: 'datetime',

    },
    yaxis: {
        max: 70
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#datetime-scatter"),
    options
);

chart.render();


function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([baseval, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}
