! function ($) {
    "use strict";

    var ChartJs = function () {
        this.$body = $("body"),
            this.charts = []
    };

    ChartJs.prototype.respChart = function (selector, type, data, options) {
        var draw = Chart.controllers.line.prototype.draw;
        Chart.controllers.line.prototype.draw = function () {
            draw.apply(this, arguments);
            var ctx = this.chart.chart.ctx;
            var _stroke = ctx.stroke;
            ctx.stroke = function () {
                ctx.save();
                ctx.shadowColor = 'rgba(0,0,0,0.01)';
                ctx.shadowBlur = 20;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 5;
                _stroke.apply(this, arguments);
                ctx.restore();
            }
        };

        var draw2 = Chart.controllers.doughnut.prototype.draw;
        Chart.controllers.doughnut = Chart.controllers.doughnut.extend({
            draw: function () {
                draw2.apply(this, arguments);
                var ctx = this.chart.chart.ctx;
                var _fill = ctx.fill;
                ctx.fill = function () {
                    ctx.save();
                    ctx.shadowColor = 'rgba(0,0,0,0.03)';
                    ctx.shadowBlur = 4;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 3;
                    _fill.apply(this, arguments)
                    ctx.restore();
                }
            }
        });

        var draw3 = Chart.controllers.bar.prototype.draw;
        Chart.controllers.bar = Chart.controllers.bar.extend({
            draw: function () {
                draw3.apply(this, arguments);
                var ctx = this.chart.chart.ctx;
                var _fill = ctx.fill;
                ctx.fill = function () {
                    ctx.save();
                    ctx.shadowColor = 'rgba(0,0,0,0.01)';
                    ctx.shadowBlur = 20;
                    ctx.shadowOffsetX = 4;
                    ctx.shadowOffsetY = 5;
                    _fill.apply(this, arguments)
                    ctx.restore();
                }
            }
        });

        //default config
        Chart.defaults.global.defaultFontColor = "#8391a2";
        Chart.defaults.scale.gridLines.color = "#8391a2";

        // get selector by context
        var ctx = selector.get(0).getContext("2d");
        // pointing parent container to make chart js inherit its width
        var container = $(selector).parent();

        // this function produce the responsive Chart JS
        function generateChart() {
            // make chart width fit with its container
            var ww = selector.attr('width', $(container).width());
            var chart;
            switch (type) {
                case 'Line':
                    chart = new Chart(ctx, { type: 'line', data: data, options: options });
                    break;
                case 'Doughnut':
                    chart = new Chart(ctx, { type: 'doughnut', data: data, options: options });
                    break;
                case 'Pie':
                    chart = new Chart(ctx, { type: 'pie', data: data, options: options });
                    break;
                case 'Bar':
                    chart = new Chart(ctx, { type: 'bar', data: data, options: options });
                    break;
                case 'Radar':
                    chart = new Chart(ctx, { type: 'radar', data: data, options: options });
                    break;
                case 'PolarArea':
                    chart = new Chart(ctx, { data: data, type: 'polarArea', options: options });
                    break;
            }
            return chart;
        };
        // run function - render chart at first load
        return generateChart();
    },
        // init various charts and returns
        ChartJs.prototype.initCharts = function () {
            var charts = [];
            if ($('#line-chart-example').length > 0) {
                var lineChart = {
                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    datasets: [{
                        label: "Current Week",
                        backgroundColor: 'rgba(114, 124, 245, 0.3)',
                        borderColor: '#5d78ff',
                        data: [32, 42, 42, 62, 52, 75, 62]
                    }, {
                        label: "Previous Week",
                        fill: true,
                        backgroundColor: 'transparent',
                        borderColor: "#fd397a",
                        borderDash: [5, 5],
                        data: [42, 58, 66, 93, 82, 105, 92]
                    }]
                };

                var lineOpts = {
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    tooltips: {
                        intersect: false
                    },
                    hover: {
                        intersect: true
                    },
                    plugins: {
                        filler: {
                            propagate: false
                        }
                    },
                    scales: {
                        xAxes: [{
                            reverse: true,
                            gridLines: {
                                color: "rgba(0,0,0,0.05)"
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                stepSize: 20
                            },
                            display: true,
                            borderDash: [5, 5],
                            gridLines: {
                                color: "rgba(0,0,0,0)",
                                fontColor: '#fff'
                            }
                        }]
                    }
                };
                charts.push(this.respChart($("#line-chart-example"), 'Line', lineChart, lineOpts));
            }

            //barchart
            if ($('#bar-chart-example').length > 0) {
                // create gradient
                var ctx = document.getElementById('bar-chart-example').getContext("2d");
                var gradientStroke = ctx.createLinearGradient(0, 500, 0, 150);
                gradientStroke.addColorStop(0, "#5d78ff");
                gradientStroke.addColorStop(1, "#5d78ff");

                var barChart = {
                    // labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                        {
                            label: "Sales Analytics",
                            backgroundColor: gradientStroke,
                            borderColor: gradientStroke,
                            hoverBackgroundColor: gradientStroke,
                            hoverBorderColor: gradientStroke,
                            data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81]
                        },
                        {
                            label: "Dollar Rate",
                            backgroundColor: "#e3eaef",
                            borderColor: "#e3eaef",
                            hoverBackgroundColor: "#e3eaef",
                            hoverBorderColor: "#e3eaef",
                            data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59]
                        }
                    ]
                };
                var barOpts = {
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: false,
                                color: "rgba(0,0,0,0.05)"
                            },
                            stacked: false,
                            ticks: {
                                stepSize: 20
                            }
                        }],
                        xAxes: [{
                            barPercentage: 0.7,
                            categoryPercentage: 0.5,
                            stacked: false,
                            gridLines: {
                                color: "rgba(0,0,0,0.01)"
                            }
                        }]
                    }
                };

                charts.push(this.respChart($("#bar-chart-example"), 'Bar', barChart, barOpts));
            }

            if ($('#donut-chart-example').length > 0) {
                //donut chart
                var donutChart = {
                    labels: [
                        "Direct",
                        "Affilliate",
                        "Sponsored",
                        "E-mail"
                    ],
                    datasets: [
                        {
                            data: [300, 135, 48, 154],
                            backgroundColor: [
                                "#5d78ff",
                                "#fd397a",
                                "#0abb87",
                                "#ebeff2"
                            ],
                            borderColor: "transparent",
                            borderWidth: "3",
                        }]
                };
                var donutOpts = {
                    maintainAspectRatio: false,
                    cutoutPercentage: 60,
                    legend: {
                        display: false
                    }
                };
                charts.push(this.respChart($("#donut-chart-example"), 'Doughnut', donutChart, donutOpts));
            }

            if ($('#radar-chart-example').length > 0) {
                //radar chart
                var radarChart = {
                    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                    datasets: [
                        {
                            label: "Desktops",
                            backgroundColor: "rgba(57,175,209,0.2)",
                            borderColor: "#00bcd4",
                            pointBackgroundColor: "#00bcd4",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "#00bcd4",
                            data: [65, 59, 90, 81, 56, 55, 40]
                        },
                        {
                            label: "Tablets",
                            backgroundColor: "rgba(161, 127, 224,0.2)",
                            borderColor: "#ffb822",
                            pointBackgroundColor: "#ffb822",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "#ffb822",
                            data: [28, 48, 40, 19, 96, 27, 100]
                        }
                    ]
                };
                var radarOpts = {
                    maintainAspectRatio: false
                };
                charts.push(this.respChart($("#radar-chart-example"), 'Radar', radarChart, radarOpts));
            }
            return charts;
        },
        //initializing various components and plugins
        ChartJs.prototype.init = function () {
            var $this = this;
            // font
            Chart.defaults.global.defaultFontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

            // init charts
            $this.charts = this.initCharts();

            // enable resizing matter
            $(window).on('resize', function (e) {
                $.each($this.charts, function (index, chart) {
                    try {
                        chart.destroy();
                    }
                    catch (err) {
                    }
                });
                $this.charts = $this.initCharts();
            });
        },

        //init flotchart
        $.ChartJs = new ChartJs, $.ChartJs.Constructor = ChartJs
}(window.jQuery),

    //initializing ChartJs
    function ($) {
        "use strict";
        $.ChartJs.init()
    }(window.jQuery);
