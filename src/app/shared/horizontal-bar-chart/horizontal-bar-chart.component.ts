import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
    selector: 'app-horizontal-bar-chart',
    templateUrl: './horizontal-bar-chart.component.html',
    styleUrls: ['./horizontal-bar-chart.component.scss']
})
export class HorizontalBarChartComponent implements OnInit, OnChanges, AfterViewInit {

    @ViewChild('barChartNew', {static: false}) barChartNewEl: ElementRef;
    @Input() isModal: boolean;
    private chart: any;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(change) {
        /* if (change.data && change.data.currentValue) {
             if (this.chart) {
                 // redraw chart
                 this.chart.series[0].setData(change.data.currentValue, true);
             }
         }*/
    }

    ngAfterViewInit() {
        const opts: any = {
            chart: {
                type: 'bar'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['CMA1k 7-4', 'Example II', 'Example 3', 'Example 4', 'Example 5']
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2],
                color: '#fb0d1c'
            }, {
                name: 'Jane',
                data: [2, 2, 3, 2, 1],
                color: '#fc5425'
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5],
                color: '#199b8a'
            }],
            tooltip: {
                enabled: false
            }
        };
        if (this.barChartNewEl && this.barChartNewEl.nativeElement) {
            opts.chart = {
                type: 'bar',
                renderTo: this.barChartNewEl.nativeElement,
                backgroundColor: 'rgba(255, 255, 255, 0.0)'
            };

            this.chart = new Highcharts.Chart(opts);
            if (this.isModal) {
                this.chart.setSize(750, 300);
            }

        }
    }
}
