import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';
import {CommonService} from '../../services/custom/common-service/common.service';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnChanges, AfterViewInit {

    @ViewChild('barChart', {static: false}) barChartEl: ElementRef;
    @Input() isModal: boolean;

    private chart: any;

    constructor(private _common: CommonService) {
    }

    ngOnChanges(change) {
        /* if (change.data && change.data.currentValue) {
             if (this.chart) {
                 // redraw chart
                 this.chart.series[0].setData(change.data.currentValue, true);
             }
         }*/
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        const seriesData = [{
            data: [{'x': 1562328873381, 'y': 300}, {'x': 1562328875380, 'y': 200}, {'x': 1562328877381, 'y': 500}, {
                'x': 1562328879380,
                'y': 500
            }, {'x': 1562328881549, 'y': 200}, {'x': 1562328883380, 'y': 200}, {'x': 1562328885381, 'y': 500}, {
                'x': 1562328887379,
                'y': 200
            }, {'x': 1562328889382, 'y': 300}, {'x': 1562328891380, 'y': 200}, {'x': 1562328893394, 'y': 200}, {
                'x': 1562328895379,
                'y': 500
            }, {'x': 1562328897380, 'y': 300}, {'x': 1562328899380, 'y': 200}, {'x': 1562328901379, 'y': 500}, {
                'x': 1562328903382,
                'y': 500
            }, {'x': 1562328905383, 'y': 500}, {'x': 1562328907382, 'y': 200}, {'x': 1562328909379, 'y': 500}, {
                'x': 1562328911383,
                'y': 500
            }, {'x': 1562328913379, 'y': 300}, {'x': 1562328915392, 'y': 300}, {'x': 1562328917380, 'y': 200}, {
                'x': 1562328919380,
                'y': 200
            }, {'x': 1562328921383, 'y': 300}, {'x': 1562328923394, 'y': 300}, {'x': 1562328925379, 'y': 300}, {
                'x': 1562328927379,
                'y': 300
            }, {'x': 1562328929393, 'y': 500}, {'x': 1562328931386, 'y': 500}, {'x': 1562328933381, 'y': 500}, {
                'x': 1562328935393,
                'y': 500
            }, {'x': 1562328937394, 'y': 200}, {'x': 1562328939382, 'y': 200}, {'x': 1562328941380, 'y': 300}, {
                'x': 1562328943380,
                'y': 300
            }, {'x': 1562328945394, 'y': 500}, {'x': 1562328947379, 'y': 200}, {'x': 1562328949380, 'y': 200}, {
                'x': 1562328951381,
                'y': 500
            }, {'x': 1562328953381, 'y': 300}, {'x': 1562328955380, 'y': 200}, {'x': 1562328957381, 'y': 200}, {
                'x': 1562328959380,
                'y': 200
            }, {'x': 1562328961379, 'y': 500}, {'x': 1562328963380, 'y': 200}, {'x': 1562328965382, 'y': 300}, {
                'x': 1562328967379,
                'y': 200
            }, {'x': 1562328969380, 'y': 200}, {'x': 1562328971382, 'y': 300}, {'x': 1562328973380, 'y': 200}, {
                'x': 1562328975380,
                'y': 200
            }, {'x': 1562328977380, 'y': 500}, {'x': 1562328979379, 'y': 200}, {'x': 1562328981379, 'y': 500}, {
                'x': 1562328983390,
                'y': 200
            }, {'x': 1562328985394, 'y': 200}, {'x': 1562328987380, 'y': 500}, {'x': 1562328989380, 'y': 500}, {
                'x': 1562328991380,
                'y': 500
            }, {'x': 1562328993381, 'y': 500}, {'x': 1562328995386, 'y': 300}, {'x': 1562328997381, 'y': 300}, {
                'x': 1562328999379,
                'y': 500
            }, {'x': 1562329001379, 'y': 300}, {'x': 1562329003380, 'y': 200}]
        }];

        const opts: any = {
            title: {
                text: ' '
            },
            credits: {
                enabled: false,
            },
            legend: {
                enabled: false,
            },
            series: seriesData,
            plotOptions: {
                series: {
                    pointWidth: 10
                },
                column: {
                    zones: [{
                        value: 201,
                        color: this._common.getHealthDetail(200).color,
                    }, {
                        value: 301,
                        color: this._common.getHealthDetail(300).color,
                    }, {
                        value: 501,
                        color: this._common.getHealthDetail(500).color,
                    }]
                }
            },
            xAxis: {
                title: {
                    text: ''
                },
                type: 'datetime',
                dateTimeLabelFormats: {
                    'hour': '%l:%M %p',
                    'minute': '%I:%M %p'
                },
                tickInterval: 2000, // tick  every 2 sec
            },
            yAxis: {
                title: {
                    text: ''
                },
                tickPositions: [0, 200, 300, 500],
                tickInterval: 100,
                labels: {
                    formatter: function () {
                        const label = this.axis.defaultLabelFormatter.call(this);
                        if (label === '200') {
                            return 'OK';
                        }
                        if (label === '300') {
                            return 'ATTENTION';
                        }
                        if (label === '500') {
                            return 'CRITICAL';
                        }
                    }
                },
                showFirstLabel: false,
            },
            tooltip: {
                xDateFormat: '<span>' + '%l:%M %p' + '</span>'
            },
        };
        if (this.barChartEl && this.barChartEl.nativeElement) {
            opts.chart = {
                type: 'column',
                renderTo: this.barChartEl.nativeElement,
                backgroundColor: 'rgba(255, 255, 255, 0.0)'
            };

            this.chart = new Highcharts.Chart(opts);
            if (this.isModal) {
                this.chart.setSize(750, 300);
            }

        }
    }
}

