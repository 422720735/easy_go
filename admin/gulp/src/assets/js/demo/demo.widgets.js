$(document).ready(function() {
    "use strict";
    // [ Static chart ] start
    var spark5 = {
        chart: {
            type: 'line',
            height: 100,
            sparkline: {
                enabled: true
            },
        },
        series: [{
            data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
        }],
        stroke: {
            width: 4,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        tooltip:{
            theme:"dark"
        },
        colors: ['#fff']
    }
    new ApexCharts(document.querySelector("#static-chart-1"), spark5).render();

    var spark6 = {
        chart: {
            type: 'bar',
            height: 100,
            sparkline: {
                enabled: true
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '55%',
            },
        },
        series: [{
            data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
        }],
        stroke: {
            width: 3,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        tooltip:{
            theme:"dark"
        },
        colors: ['#fff']
    }
    new ApexCharts(document.querySelector("#static-chart-2"), spark6).render();

    var spark7 = {
        chart: {
            type: 'line',
            height: 100,
            sparkline: {
                enabled: true
            },
        },
        series: [{
            data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
        }],
        stroke: {
            width: 4,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        tooltip:{
            theme:"dark"
        },
        colors: ['#fff']
    }
    new ApexCharts(document.querySelector("#static-chart-3"), spark7).render();

    var spark8 = {
        chart: {
            type: 'bar',
            height: 100,
            sparkline: {
                enabled: true
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '55%',
            },
        },
        series: [{
            data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
        }],
        stroke: {
            width: 3,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        tooltip:{
            theme:"dark"
        },
        colors: ['#fff']
    }
    new ApexCharts(document.querySelector("#static-chart-4"), spark8).render();
    // [ Static chart ] end

    // [ Cloud Computing ] start
    $(function() {
        var options = {
            chart: {
                type: 'area',
                height: 175,
                sparkline: {
                    enabled: true
                }
            },
            grid: {
                padding: {
                    right: -25,
                    left: -25
                }
            },
            colors: ["#fd397a", "#0abb87", "#5d78ff"],
            stroke: {
                curve: 'straight',
                width: 1,
            },
            fill: {
                opecity: 1,
                type: 'solid',
            },
            series: [{
                name: 'series1',
                data: [60, 40, 20, 45, 55, 35, 40, 60, 40, 20, 45, 55, 35, 40, 60, 40, 20, 45, 55, 35, 40]
            }, {
                name: 'series2',
                data: [85, 72, 55, 65, 75, 65, 60, 85, 72, 55, 65, 75, 65, 60, 85, 72, 55, 65, 75, 65, 60]
            }, {
                name: 'series3',
                data: [99, 80, 60, 85, 95, 75, 80, 99, 80, 60, 85, 95, 75, 80, 99, 80, 60, 85, 95, 75, 80]
            }],
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
        new ApexCharts(document.querySelector("#overall-chart"), options).render();
    });
    // [ Cloud Computing ] end
    // [ coversions-chart ] start
    $(function() {
        var options1 = {
            chart: {
                type: 'bar',
                height: 100,
                sparkline: {
                    enabled: true
                }
            },
            colors: ["#5d78ff"],
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: false
                    },
                    columnWidth: '75%',
                    endingShape: 'rounded'
                }
            },
            series: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66]
            }],
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
        new ApexCharts(document.querySelector("#del-reports"), options1).render();
    });
    // [ coversions-chart ] end
    // [ view-chart ] start
    $(function() {
        var options1 = {
            chart: {
                type: 'area',
                height: 40,
                sparkline: {
                    enabled: true
                }
            },
            colors: ["#fd397a"],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.8,
                    opacityTo: 0.4,
                    stops: [0, 90, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            series: [{
                name: 'series1',
                data: [0, 55, 35, 75, 50, 90, 0]
            }],
            yaxis: {
                min: 0,
                max: 100,
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false,
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
        new ApexCharts(document.querySelector("#circleProgress1"), options1).render();
        var options2 = {
            chart: {
                type: 'area',
                height: 40,
                sparkline: {
                    enabled: true
                }
            },
            colors: ["#0abb87"],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.8,
                    opacityTo: 0.4,
                    stops: [0, 90, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            series: [{
                name: 'series1',
                data: [0, 50, 90, 55, 35, 75, 0]
            }],
            yaxis: {
                min: 0,
                max: 100,
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false,
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
        new ApexCharts(document.querySelector("#circleProgress2"), options2).render();
    });
    // [ view-chart ] end
    // [ market-chart ] start
    $(function() {
        var options = {
            chart: {
                height: 200,
                type: 'bar',
                stacked: true,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                sparkline: {
                    enabled: true
                }
            },
            // colors: ["#5d78ff", "#0abb87", "#00bcd4", "#ffb822", "#fd397a"],
            colors: ["#5d78ff", "#0abb87", "#eef1f5"],
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: false
                    },
                    columnWidth: '90%',
                    endingShape: 'rounded'
                }
            },
            series: [{
                name: 'Youtube',
                data: [99, 80, 60, 85, 95, 75, 80, 99, 80, 60, 85, 95, 75, 80, 99, 80, 60, 85, 95, 75, 80]
            }, {
                name: 'Facebook',
                data: [85, 72, 55, 65, 75, 65, 60, 85, 72, 55, 65, 75, 65, 60, 85, 72, 55, 65, 75, 65, 60]
            }, {
                name: 'Twitter',
                data: [60, 40, 20, 45, 55, 35, 40, 60, 40, 20, 45, 55, 35, 40, 60, 40, 20, 45, 55, 35, 40]
            }],
            xaxis: {
                type: 'datetime',
                categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT', '01/07/2011 GMT', '01/08/2011 GMT', '01/09/2011 GMT', '01/10/2011 GMT', '01/11/2011 GMT', '01/12/2011 GMT'],
            },
            legend: {
                show: false,
            },
            fill: {
                opacity: 1
            },
        }
        var chart = new ApexCharts(document.querySelector("#barChartStacked"), options);
        chart.render();
    });
    // [ market-chart ] end
    // [ market-chart ] start
    $(function() {
        var options = {
            chart: {
                height: 260,
                type: 'donut',
                sparkline: {
                    enabled: true
                }
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
            colors: ["#5d78ff", "#0abb87", "#00bcd4", "#ffb822", "#fd397a"],
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
            document.querySelector("#productCategory"),
            options
        );
        chart.render();
    });
    // [ market-chart ] end
    // [ market-chart ] start
    $(function() {
        var options = {
            chart: {
                height: 260,
                type: 'bar',
                stacked: true,
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: false
                    },
                    columnWidth: '50%',
                    endingShape: 'rounded'
                }
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
            colors: ["#5d78ff", "#0abb87", "#fd397a"],
            fill: {
                opacity: 1
            },
        }
        var chart = new ApexCharts(
            document.querySelector("#barChart"),
            options
        );
        chart.render();
    });
    // [ market-chart ] end
    // [ project chart ] start
    var spark1 = {
        chart: {
            type: 'line',
            height: 70,
            sparkline: {
                enabled: true
            },
        },
        series: [{
            data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
        }],
        stroke: {
            width: 4,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        colors: ['#5d78ff']
    }
    new ApexCharts(document.querySelector("#project-chart-1"), spark1).render();

    var spark2 = {
        chart: {
            type: 'line',
            height: 70,
            sparkline: {
                enabled: true
            },
        },
        series: [{
            data: [21, 9, 36, 12, 44, 24, 59, 41, 66, 25]
        }],
        stroke: {
            width: 4,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        colors: ['#0abb87']
    }
    new ApexCharts(document.querySelector("#project-chart-2"), spark2).render();

    var spark3 = {
        chart: {
            type: 'line',
            height: 70,
            sparkline: {
                enabled: true
            },
        },
        series: [{
            data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
        }],
        stroke: {
            width: 4,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        colors: ['#ffb822']
    }
    new ApexCharts(document.querySelector("#project-chart-3"), spark3).render();

    var spark4 = {
        chart: {
            type: 'line',
            height: 70,
            sparkline: {
                enabled: true
            },
        },
        series: [{
            data: [21, 9, 36, 12, 44, 24, 59, 41, 66, 25]
        }],
        stroke: {
            width: 4,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        colors: ['#fd397a']
    }
    new ApexCharts(document.querySelector("#project-chart-4"), spark4).render();
    // [ project chart ] end
    // [ ecommerce chart ] start
    var ecommspark1 = {
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        colors: ["#5d78ff"],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.8,
                opacityTo: 0.4,
                stops: [0, 90, 100]
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        series: [{
            name: 'series1',
            data: [0, 50, 90, 55, 35, 75, 0]
        }],
        yaxis: {
            min: 0,
            max: 100,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false,
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
    new ApexCharts(document.querySelector("#ecomm-chart-1"), ecommspark1).render();
    var ecommspark2 = {
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        colors: ["#0abb87"],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.8,
                opacityTo: 0.4,
                stops: [0, 90, 100]
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        series: [{
            name: 'series1',
            data: [0, 55, 35, 75, 50, 90, 0]
        }],
        yaxis: {
            min: 0,
            max: 100,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false,
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

    new ApexCharts(document.querySelector("#ecomm-chart-2"), ecommspark2).render();
    var ecommspark3 = {
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        colors: ["#ffb822"],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.8,
                opacityTo: 0.4,
                stops: [0, 90, 100]
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        series: [{
            name: 'series1',
            data: [0, 50, 90, 55, 35, 75, 0]
        }],
        yaxis: {
            min: 0,
            max: 100,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false,
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
    new ApexCharts(document.querySelector("#ecomm-chart-3"), ecommspark3).render();

    var ecommspark4 = {
        chart: {
            type: 'area',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        colors: ["#fd397a"],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.8,
                opacityTo: 0.4,
                stops: [0, 90, 100]
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        series: [{
            name: 'series1',
            data: [0, 55, 35, 75, 50, 90, 0]
        }],
        yaxis: {
            min: 0,
            max: 100,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false,
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
    new ApexCharts(document.querySelector("#ecomm-chart-4"), ecommspark4).render();
    // [ ecommerce chart ] end
});
