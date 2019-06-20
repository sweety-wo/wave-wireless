import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import {inherits} from 'util';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnChanges, AfterViewInit {
    @ViewChild('pieChart', {static: false}) pieChartEl: ElementRef;
    @Input() data: any;

    private chart: any;

    constructor() {
    }


    ngOnChanges(change) {
        if (change.data && change.data.currentValue) {
            if (this.chart) {
                // redraw chart
                this.chart.series[0].setData(change.data.currentValue, true);
            }
        }
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        const opts: any = {
            title: {
                text: 'City Overview',
                x: -15 // center
            },
            tooltip: {
                formatter: function() {
                    return this.point.name + ' (' + Highcharts.numberFormat(this.percentage, 2) + '%)';
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        connectorWidth: 1,
                        connectorShape: 'crookedLine',
                        crookDistance: '70%',
                        connectorColor: 'black',
                        distance: 12,
                        enabled: true,
                        useHTML: true,
                        style: {
                            fontWeight: 'normal'
                        },
                        formatter: function() {
                            if (this.y !== 0) {
                                return '<b>' + Highcharts.numberFormat(this.percentage, 2) + '%</b><br>' + this.point.name;
                            }
                        }
                    },
                    innerSize: '50%',
                    size: '100%',
                    borderWidth: 0
                }
            },
            credits: {
                enabled: false,
            },
            series: [{
                data: this.data,
                dataLabels: {
                    connectorShape: 'crookedLine',
                    crookDistance: '50%'
                }
            }]
        };
        if (this.pieChartEl && this.pieChartEl.nativeElement) {
            opts.chart = {
                type: 'pie',
                renderTo: this.pieChartEl.nativeElement,
                backgroundColor: 'rgba(255, 255, 255, 0.0)'
            };

            this.chart = new Highcharts.Chart(opts);
        }

    }
}

