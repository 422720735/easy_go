"use strict";
// [ Cloud Computing ] start
$(function() {
    var options1 = {
        chart: {
            type: 'line',
            height: 230,
            toolbar: {
                show: false,
            }
        },
        colors: ["#5d78ff", "#ccc"],
        fill: {
            type: 'solid',
            opacity: 1,
        },
        stroke: {
            curve: 'smooth',
            width: [4, 2],
            dashArray: [0, 8]
        },
        grid: {
            borderColor: '#ccc',
            strokeDashArray: 5
        },
        dataLabels: {
            enabled: !1
        },
        legend: {
            show: true,
            position: 'top',
        },
        series: [{
            name: 'series1',
            data: [0, 5, 22, 14, 28, 12, 24, ]
        }, {
            name: 'series2',
            data: [0, 8, 30, 15, 12, 21, 14, ]
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
    new ApexCharts(document.querySelector("#visit-chart"), options1).render();
});
// [ Cloud Computing ] end
// [ map ] start
$(function() {
    $('#world-map-markers').vectorMap({
        map: 'world_mill_en',
        normalizeFunction: 'polynomial',
        hoverOpacity: 0.7,
        hoverColor: false,
        regionStyle: {
            initial: {
                fill: '#e3eaef'
            }
        },
        markerStyle: {
            initial: {
                r: 9,
                'fill': '#5d78ff',
                'fill-opacity': 0.9,
                'stroke': '#fff',
                'stroke-width': 7,
                'stroke-opacity': 0.4
            },

            hover: {
                'stroke': '#fff',
                'fill-opacity': 1,
                'stroke-width': 1.5
            }
        },
        backgroundColor: 'transparent',
        markers: [{
            latLng: [41.9, 12.45],
            name: "Vatican City"
        }, {
            latLng: [43.73, 7.41],
            name: "Monaco"
        }, {
            latLng: [-.52, 166.93],
            name: "Nauru"
        }, {
            latLng: [-8.51, 179.21],
            name: "Tuvalu"
        }, {
            latLng: [43.93, 12.46],
            name: "San Marino"
        }, {
            latLng: [47.14, 9.52],
            name: "Liechtenstein"
        }, {
            latLng: [7.11, 171.06],
            name: "Marshall Islands"
        }, {
            latLng: [17.3, -62.73],
            name: "Saint Kitts and Nevis"
        }, {
            latLng: [3.2, 73.22],
            name: "Maldives"
        }, {
            latLng: [35.88, 14.5],
            name: "Malta"
        }, {
            latLng: [12.05, -61.75],
            name: "Grenada"
        }, {
            latLng: [13.16, -61.23],
            name: "Saint Vincent and the Grenadines"
        }, {
            latLng: [13.16, -59.55],
            name: "Barbados"
        }, {
            latLng: [17.11, -61.85],
            name: "Antigua and Barbuda"
        }, {
            latLng: [-4.61, 55.45],
            name: "Seychelles"
        }, {
            latLng: [7.35, 134.46],
            name: "Palau"
        }, {
            latLng: [42.5, 1.51],
            name: "Andorra"
        }, {
            latLng: [14.01, -60.98],
            name: "Saint Lucia"
        }, {
            latLng: [6.91, 158.18],
            name: "Federated States of Micronesia"
        }, {
            latLng: [1.3, 103.8],
            name: "Singapore"
        }, {
            latLng: [1.46, 173.03],
            name: "Kiribati"
        }, {
            latLng: [-21.13, -175.2],
            name: "Tonga"
        }, {
            latLng: [15.3, -61.38],
            name: "Dominica"
        }, {
            latLng: [-20.2, 57.5],
            name: "Mauritius"
        }, {
            latLng: [26.02, 50.55],
            name: "Bahrain"
        }, {
            latLng: [.33, 6.73],
            name: "SÃ£o TomÃ© and PrÃ­ncipe"
        }],
        zoomOnScroll: false
    });
    var options = {
        chart: {
            height: 175,
            type: 'donut',
            sparkline: {
                enabled: true
            }
        },
        series: [44, 55, 41, 17, 15],
        legend: {
            show: false,
        },
        labels: ["Singapore", "Maldives", "San Marino", "Vatican City", "Bahrain"],
        colors: ["#5d78ff", "#0abb87", "#00bcd4", "#ffb822", "#fd397a"]
    }
    var chart = new ApexCharts(
        document.querySelector("#country-chart"),
        options
    );
    chart.render();
});
// [ map ] end
// [ coversions-chart ] start
$(function() {
    var options1 = {
        chart: {
            type: 'bar',
            height: 80,
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
    var spark5 = {
        chart: {
            type: 'line',
            height: 80,
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
        tooltip: {
            theme: "dark"
        },
        colors: ['#fff']
    }
    new ApexCharts(document.querySelector("#static-chart-1"), spark5).render();

});
// [ coversions-chart ] end
// [ popup user details ] start
$(function() {
    $('.more-user-details').popover({
        placement: 'top',
        trigger: 'hover',
        html: true,
        content: '<div><div class="media align-items-center"><img src="assets/images/users/avatar-4.jpg" class="rounded-circle ui-w-50 mr-3" alt="Avtar image"><div class="media-body"><h4 class="mt-0 mb-1">Jacob Doe <i class="mdi mdi-checkbox-blank-circle text-primary"></i><small>Active Account</small></h4><p class="mb-0">Jacob_Doe@example.com</p></div></div></div><div class="alert alert-warning p-2 mb-1 mt-3 rounded"><div class="media align-items-center"><h3 class="mdi mdi-bell-ring-outline alert-heading m-0"></h3><div class="media-body pl-3"><small><b class="d-block">Unpaid invoice</b></small><small>This account will be disabled starting <b>14 March 1996</b>.</small></div></div></div><div class="no-gutters text-center row pt-3"><div class="col-6"><div><i class="feather icon-pie-chart h4 text-danger"></i></div><div class="mt-2"><b class="mb-1">$9,693</b><span class="d-block">revenue</span></div></div><div class="col-6"><div><i class="feather icon-users h4 text-primary"></i></div><div class="mt-2"><b class="mb-1">2,345</b><span class="d-block">users</span></div></div></div>'
    });
});
// [ popup user details ] end
// [ market-chart ] start
$(function() {
    var options = {
        chart: {
            height: 100,
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
        colors: ["#5d78ff", "#eef1f5"],
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: false
                },
                columnWidth: '95%',
                endingShape: 'rounded'
            }
        },
        series: [{
            name: 'Youtube',
            data: [99, 80, 60, 85, 95, 75, 80, 99, 80, 60, 85, 95, 75, 80, 99, 80, 60, 85, 95, 75, 80]
        }, {
            name: 'Twitter',
            data: [60, 40, 20, 45, 55, 35, 40, 60, 40, 20, 45, 55, 35, 40, 60, 40, 20, 45, 55, 35, 40]
        }],
        xaxis: {
            type: 'datetime',
            categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT', '01/07/2011 GMT', '01/08/2011 GMT', '01/09/2011 GMT', '01/10/2011 GMT', '01/11/2011 GMT', '01/12/2011 GMT', '01/13/2011 GMT', '01/14/2011 GMT', '01/15/2011 GMT', '01/16/2011 GMT', '01/17/2011 GMT', '01/18/2011 GMT', '01/19/2011 GMT', '01/20/2011 GMT', '01/21/2011 GMT'],
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
