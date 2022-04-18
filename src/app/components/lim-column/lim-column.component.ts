import { Component } from '@angular/core';
import { CellRangeEventArgs, FlexGrid } from '@grapecity/wijmo.grid';

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

  flexInitialized(flexgrid: FlexGrid) {
    // prevent 'country' column from being dragged to index 0
    flexgrid.draggingColumn.addHandler((s: FlexGrid, e: CellRangeEventArgs) => {
      this._theColumn = s.columns[e.col].binding;
    });
    flexgrid.draggingColumnOver.addHandler((s: FlexGrid, e: CellRangeEventArgs) => {
      if (this._theColumn == 'country')
        e.cancel = (e.col == 0 || e.col == s.columns.length - 1) ? true : false;
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
