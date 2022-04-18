import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.scss';
import './styles.scss';

import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import * as wjcGrid from '@grapecity/wijmo.grid';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

@Component({
  selector: 'app-lim-column',
  templateUrl: './lim-column.component.html',
  styleUrls: ['./lim-column.component.scss']
})
export class LimColumnComponent {

  data: any[];
  private _theColumn: string;

  constructor() {
    this.data = this._getData();
  }

  flexInitialized(flexgrid: wjcGrid.FlexGrid) {
    // prevent 'country' column from being dragged to index 0
    flexgrid.draggingColumn.addHandler((s: wjcGrid.FlexGrid, e: wjcGrid.CellRangeEventArgs) => {
      this._theColumn = s.columns[e.col].binding;
    });
    flexgrid.draggingColumnOver.addHandler((s: wjcGrid.FlexGrid, e: wjcGrid.CellRangeEventArgs) => {
      if (this._theColumn == 'country') {
        if (e.col == 0 || e.col == s.columns.length - 1) {
            e.cancel = true;
        }
      }
    });
  }

  private _getData() {
    // generate some random data
    let countries = 'アメリカ,ドイツ,イギリス,日本,イタリア,ギリシャ'.split(','),data = [];
    for (let i = 0; i < countries.length; i++) {
      data.push({
        id: i,
        country: countries[i],
        downloads: Math.round(Math.random() * 20000),
        sales: Math.random() * 10000,
        expenses: Math.random() * 5000
      });
    }
    return data;
  }

}
