"use strict";
$(function() {
    var options = {
        chart: {
            height: 340,
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
        fill: {
            opacity: 1

        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'],
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
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                legend: {
                    show: false
                },
            }
        }]
    }
    var chart = new ApexCharts(
        document.querySelector("#basic-column"),
        options
    );
    chart.render();
});
$(function() {
    var spark5 = {
        chart: {
            type: 'bar',
            height: 80,
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
        tooltip: {
            theme: "dark"
        },
        series: [{
            data: [32, 19, 54, 44, 61, 15, 75, 47, 65, 14]
        }],
        stroke: {
            width: 3,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        colors: ['#fff']
    }
    new ApexCharts(document.querySelector("#static-chart-1"), spark5).render();
    var spark6 = {
        chart: {
            type: 'bar',
            height: 80,
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
        tooltip: {
            theme: "dark"
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
        colors: ['#fff']
    }
    new ApexCharts(document.querySelector("#static-chart-2"), spark6).render();
    var spark7 = {
        chart: {
            type: 'bar',
            height: 80,
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
        tooltip: {
            theme: "dark"
        },
        series: [{
            data: [32, 19, 54, 44, 61, 15, 75, 47, 65, 14]
        }],
        stroke: {
            width: 3,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        colors: ['#fff']
    }
    new ApexCharts(document.querySelector("#static-chart-3"), spark7).render();
    var spark8 = {
        chart: {
            type: 'bar',
            height: 80,
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
        tooltip: {
            theme: "dark"
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
        colors: ['#fff']
    }
    new ApexCharts(document.querySelector("#static-chart-4"), spark8).render();
});
