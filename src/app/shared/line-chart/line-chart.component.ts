import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, AfterViewInit {
    @ViewChild('lineChart', {static: false}) lineChartEl: ElementRef;

    private chart: any;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        const opts: any = {
            yAxis: {
                title: {
                    text: ''
                },
                tickInterval: 1
            },
            min: 1,
            max : 2,
            series: [{
               data: [
                   {
                       x: 1498138200000,
                       y: 1,
                       marker: { fillColor: '#7cb5ec'}
                   },
                   {
                       x: 1498224600000,
                       y: 2,
                       marker: { fillColor: '#fc5425'}
                   },
                   {
                       x: 1498483800000,
                       y: 2,
                       marker: { fillColor: '#fc5425'}
                   },
                   {
                       x: 1498570200000,
                       y: 2,
                       marker: { fillColor: '#fc5425'}
                   },
                   {
                       x: 1498656600000,
                       y: 1,
                       marker: { fillColor: '#7cb5ec'}
                   },
                   {
                       x: 1498743000000,
                       y: 2,
                       marker: { fillColor: '#fc5425'}
                   },
                   {
                       x: 1498829400000,
                       y: 1,
                       marker: { fillColor: '#7cb5ec'}
                   },
                   {
                       x: 1499088600000,
                       y: 1,
                       marker: { fillColor: '#7cb5ec'}
                   },
                   {
                       x: 1499261400000,
                       y: 1,
                       marker: { fillColor: '#7cb5ec'}
                   },
                   {
                       x: 1499347800000,
                       y: 1,
                       marker: { fillColor: '#7cb5ec'}
                   },
                   {
                       x: 1499434200000,
                       y: 1,
                       marker: { fillColor: '#7cb5ec'}
                   },
                   {
                       x: 1499693400000,
                       y: 1,
                       marker: { fillColor: '#7cb5ec'}
                   },
                   {
                       x: 1499779800000,
                       y: 1,
                       marker: { fillColor: '#7cb5ec'}
                   },
                   {
                       x: 1499866200000,
                       y: 2,
                       marker: { fillColor: '#fc5425'}
                   },
                   {
                       x: 1499952600000,
                       y: 1,
                       marker: { fillColor: '#7cb5ec'}
                   },
                   {
                       x: 1500039000000,
                       y: 2,
                       marker: { fillColor: '#fc5425'}
                   },
                   {
                       x: 1500298200000,
                       y: 2,
                       marker: { fillColor: '#fc5425'}
                   },
                   {
                       x: 1500384600000,
                       y: 2,
                       marker: { fillColor: '#fc5425'}
                   },
                   {
                       x: 1500471000000,
                       y: 1,
                       marker: { fillColor: '#7cb5ec'}
                   },
                   {
                       x: 1500557400000,
                       y: 2,
                       marker: { fillColor: '#fc5425'}
                   },
                   {
                       x: 1500643800000,
                       y: 1,
                       marker: { fillColor: '#7cb5ec'}
                   },
                   {
                       x: 1500903000000,
                       y: 2,
                       marker: { fillColor: '#fc5425'}
                   },
                   {
                       x: 1500989400000,
                       y: 2,
                       marker: { fillColor: '#fc5425'}
                   },
                   {
                       x: 1501075800000,
                       y: 2,
                       marker: { fillColor: '#fc5425'}
                   },
                   {
                       x: 1506605400000,
                       y: 1,
                       marker: { fillColor: '#7cb5ec'}
                   },
                   {
                       x: 1506691800000,
                       y: 1,
                       marker: { fillColor: '#7cb5ec'}
                   },
                   {
                       x: 1506951000000,
                       y: 1,
                       marker: { fillColor: '#7cb5ec'}
                   },
                   {
                       x: 1507037400000,
                       y: 1,
                       marker: { fillColor: '#7cb5ec'}
                   },
                   {
                       x: 1507123800000,
                      y: 1,
                       marker: { fillColor: '#7cb5ec'}
                   },
               ],
                step: true,
                marker: {
                    symbol: 'diamond'
                }
            }],
        };

        if (this.lineChartEl && this.lineChartEl.nativeElement) {
            opts.chart = {
                type: 'line',
                renderTo: this.lineChartEl.nativeElement,
                backgroundColor: 'rgba(255, 255, 255, 0.0)'
            };

            this.chart = new Highcharts.Chart(opts);
        }
    }

}
