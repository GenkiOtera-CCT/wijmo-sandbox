import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FlexGrid } from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements AfterViewInit {

  @ViewChild('familyGrid', { static: true })
  familyGrid: FlexGrid;

  family: any;
  workers: any;

  constructor() {
    this.family = this.getFamilies();
    this.workers = this.getWorkers();
  }

  ngAfterViewInit() {
    this.familyGrid.columns[0].width = "*";
  }

  onAsTreeClick(e:MouseEvent) {
    this.familyGrid.childItemsPath = (<HTMLInputElement>e.target).checked ? 'cities' : '';
  }

  // ↓↓ Local Data ↓↓
  private getFamilies() {
    return [
      { name: 'ワシントン', type: '州', population: 6971, cities: [
        { name: 'シアトル', type: '都市', population: 652 },
        { name: 'スポケーン', type: '都市', population: 210 },
      ]},
      { name: 'オレゴン', type: '州', population: 3930, cities: [
        { name: 'ポートランド', type: '都市', population: 609 },
        { name: 'ユージーン', type: '都市', population: 159 },
      ]},
      { name: 'カリフォルニア', type: '州', population: 38330, cities: [
        { name: 'ロサンゼルス', type: '都市', population: 3884 },
        { name: 'サンディエゴ', type: '都市', population: 1356 },
        { name: 'サンフランシスコ', type: '都市', population: 837 },
      ]},
   ];
  }
  private getWorkers() {
    return [{
      name: '成宮 真紀',
        checks: [{
          name: '1月',
          earnings: [
            { name: '通常勤務', hours: 30.0, rate: 15.0 },
            { name: '残業手当', hours: 10.0, rate: 20.0 },
            { name: 'ボーナス', hours: 5.0, rate: 30.0 },
          ]
        }, {
          name: '2月',
          earnings: [
            { name: '通常勤務', hours: 20.0, rate: 18.0 },
            { name: '残業手当', hours: 20.0, rate: 24.0 }
          ]
        }]
    }, {
        name: '山本 雅治',
        checks: [{
            name: '1月',
            earnings: [
                { name: '通常勤務', hours: 30.0, rate: 15.0 },
                { name: '残業手当', hours: 10.0, rate: 20.0 },
                { name: 'ボーナス', hours: 5.0, rate: 30.0 }
            ]
        }, {
            name: '2月',
            earnings: [
                { name: '通常勤務', hours: 20.0, rate: 18.0 },
                { name: '残業手当', hours: 20.0, rate: 24.0 }
            ]
        }]
    }, {
        name: '加藤 泰江',
        checks: [{
            name: '1月',
            earnings: [
                { name: '通常勤務', hours: 30.0, rate: 15.0 },
                { name: '残業手当', hours: 10.0, rate: 20.0 },
                { name: 'ボーナス', hours: 5.0, rate: 30.0 }
            ]
        }, {
            name: '2月',
            earnings: [
                { name: '通常勤務', hours: 20.0, rate: 18.0 },
                { name: '残業手当', hours: 20.0, rate: 24.0 }
            ]
        }]
    }];
  }
}
