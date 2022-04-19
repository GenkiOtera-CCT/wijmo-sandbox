import { Component } from '@angular/core';
import { DragDrop } from './dragdrop';

import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-drag-cell',
  templateUrl: './drag-cell.component.html',
  styleUrls: ['./drag-cell.component.scss']
})
export class DragCellComponent {

  source: any;

  constructor() {
    this.source = this.getData(50);
  }

  initGrid(grid) {
    new DragDrop(grid);
  }

  getData(count: number) {
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','), data = [];
    for (var i = 0; i < count; i++) {
      data.push({
        id: i,
        country: countries[i % countries.length],
        date: new Date(2014, i % 12, i % 28),
        amount: Math.random() * 10000,
        active: i % 4 == 0
      });
    }
    return new wjcCore.CollectionView(data);
  }
}
