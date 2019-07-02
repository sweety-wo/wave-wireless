import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import {DeviceService} from '../../services/node/device.service';
import {ClusterService} from '../../services/node/cluster.service';

@Component({
  selector: 'app-select-clusters-modal',
  templateUrl: './select-clusters-modal.component.html',
  styleUrls: ['./select-clusters-modal.component.scss']
})
export class SelectClustersModalComponent implements OnInit {
    clustersArr: any;
    selectedClusters: any = [];
    selectedDevices: any;
    isAdd: boolean;
    isValueChanging: any;
  constructor(public activeModal: NgbActiveModal,
              private _device: DeviceService,
              private _cluster: ClusterService) {
      this.isValueChanging = false;
  }

  ngOnInit() {
  }

  fnCheckUncheckClusters(isChecked, cluster) {
      cluster.checked = isChecked;
      const index = _.findIndex(this.selectedClusters, (clusterObj: any) => {
          return clusterObj.id === cluster.id;
      });
      if (isChecked) {
          if (index === -1) {
              this.selectedClusters.push(cluster);
          }
      } else {
          if (index !== -1) {
              this.selectedClusters.splice(index, 1);
          }
      }
  }

  async fnSave() {
      this.isValueChanging = true;
      const clusterDeviceArr = [];
      this.selectedClusters.map((clusterObj) => {
          _.forEach(this.selectedDevices, (deviceObj) => {
              if (this.isAdd) {
                  if (!clusterObj.deviceIds ||
                      (clusterObj.deviceIds && !clusterObj.deviceIds.includes(deviceObj.id))) {
                      clusterDeviceArr.push({
                          cluster: clusterObj,
                          device: deviceObj
                      });
                  }
              } else {
                  if (clusterObj.deviceIds && clusterObj.deviceIds.includes(deviceObj.id)) {
                      clusterDeviceArr.push({
                          cluster: clusterObj,
                          device: deviceObj
                      });
                  }
              }
          });
      });
      if (this.isAdd) {
          await Promise.all(clusterDeviceArr.map(async (clusterDeviceObj) => {
              await this._device.addDeviceToCluster(clusterDeviceObj.device.id, clusterDeviceObj.cluster.id);
          }));
      } else {
          await Promise.all(clusterDeviceArr.map(async (clusterDeviceObj) => {
              await this._device.removeDeviceFromCluster(clusterDeviceObj.device.id, clusterDeviceObj.cluster.id);
          }));
      }
      this.fnGetClusters();
  }

  fnGetClusters() {
      this._cluster.getClusters().subscribe((clusters) => {
          this.isValueChanging = false;
          this.activeModal.close({
              clustersArr: clusters
          });
      }, () => {
          this.isValueChanging = false;
          this.activeModal.close({
              clustersArr: this.clustersArr
          });
      });
  }

}
