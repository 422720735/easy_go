"use strict";
// [ Project flow ] start
$(function() {
    var options = {
        chart: {
            height: 300,
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
        labels: ['Analysis', 'Design', 'Codding', 'Testing'],
        stroke: {
            lineCap: 'round'
        },
        legend: {
            show: true,
            floating: true,
            fontSize: '13px',
            position: 'left',
            verticalAlign: 'top',
            textAnchor: 'end',
            offsetY: 0,
            offsetX: 0,
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
});
// [ Project flow ] end
