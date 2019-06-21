import {AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';
import {CommonService} from '../../services/custom/common-service/common.service';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnChanges, AfterViewInit {

    @ViewChild('barChart', {static: false}) barChartEl: ElementRef;

    private chart: any;
    private healthArr: any;

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
        this.healthArr = [
            {
                label: 'CRITICAL',
                value: 500
            },
            {
                label: 'ATTENTION',
                value: 300
            },
            {
                label: 'OK',
                value: 200
            },
        ];
    }

    ngAfterViewInit() {
        const seriesData = [{
            data: [
                {
                    x: 1560936953,
                    y: 200
                },
                {
                    x: 1556217729,
                    y: 300,
                },
                {
                    x: 1556217917,
                    y: 500,
                },
                {
                    x: 1556220123,
                    y: 300
                },
                {
                    x: 1556218015,
                    y: 500
                },
                {
                    x: 1555336961,
                    y: 200
                },
                {
                    x: 1557756466,
                    y: 500
                },
                {
                    x: 1556217888,
                    y: 200
                },
                {
                    x: 1556217911,
                    y: 500
                },
                {
                    x: 1557756484,
                    y: 300
                },
                {
                    x: 1559736112,
                    y: 500
                },
                {
                    x: 1557756470,
                    y: 200
                },
                {
                    x: 1557756472,
                    y: 300
                }
            ]
        }];


        const opts: any = {
            credits: {
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
                tickInterval: 1000 * 60 * 10, // tick  every 10 minutes
            },
            yAxis: {
                title: {
                    text: ''
                },
                min: 0,
                max: 500,
                tickInterval: 100,
            },
        };
        if (this.barChartEl && this.barChartEl.nativeElement) {
            opts.chart = {
                type: 'column',
                renderTo: this.barChartEl.nativeElement,
                backgroundColor: 'rgba(255, 255, 255, 0.0)'
            };

            this.chart = new Highcharts.Chart(opts);
        }
    }
}

