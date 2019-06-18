import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../../services/node/device.service';
import {GatewayService} from '../../../services/node/gateway.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toogleAll: boolean;
  rowAll: boolean;
  isDeviceLoading: boolean;
  isGatewaysLoading: boolean;

  /*deviceData: any = [
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': true
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': false
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': true
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': true
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': true
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': true
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': true
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': true
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': true
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': true
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': true
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': false
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': true
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': false
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': false
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': false
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': true
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': true
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': true
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': false
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': true
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': true
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': false
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': true
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
      'd2': '-88.4508295', 'isTrue': false
    },
    {
      'text1': 'Noah Place Building 1',
      'text2': 'Comba Critical PS 700 800 BDA(v1.1)',
      'text3': 'Group West, Group BSI, Group Noah',
      'a1': '385 Noah Place Suite 878',
      'a2': 'Building System Inc.',
      'b1': '877-255-7945',
      'b2': 'Info@from.com',
      'c1': '1a2b3c4d-5e6f7g8h',
      'c2': '10.0.6.99',
      'd1': '37.38928392',
        'd2': '-88.4508295', 'isTrue': true
    }
  ];*/
  deviceData: any = []; // Constant.deviceData
  gatewayData: any = [];

  constructor(private _device: DeviceService,
              private _gateway: GatewayService) {
    this.toogleAll = true;
    this.isDeviceLoading = false;
    this.isGatewaysLoading = false;
  }

  ngOnInit() {
      this.getGateways();
  }

    getDevices(query?: string) {
        this.isDeviceLoading = false;
        this._device.getDevices(query).subscribe((devices: any) => {
            _.forEach(devices, (device) => {
                if (device.gatewayId) {
                    device.gateway = _.find(this.gatewayData, {'id': device.gatewayId});
                } else {
                    device.gateway = {};
                }
            });
            this.deviceData = devices;
            this.isDeviceLoading = false;
            console.log('deviceData', this.deviceData);
        }, (err) => {
            this.isDeviceLoading = false;
        });
    }

    getGateways(query?: string) {
        this.isGatewaysLoading = false;
        this._gateway.getGateways(query).subscribe((gateways) => {
            this.gatewayData = gateways;
            this.getDevices();
            this.isGatewaysLoading = false;
        }, (err) => {
            this.isGatewaysLoading = false;
        });
    }

  checkAll(event?) {
    this.deviceData.forEach(x => x.state = event.target.checked);
  }

  isAllChecked() {
    return this.deviceData.every(o => o.state);
  }

}
