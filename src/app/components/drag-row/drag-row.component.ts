import { Component } from '@angular/core';
import '@grapecity/wijmo.touch'; // support drag/drop on touch devices
import { CellRangeEventArgs, FlexGrid} from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-drag-row',
  templateUrl: './drag-row.component.html',
  styleUrls: ['./drag-row.component.scss']
})
export class DragRowComponent {

  private dragIndex: number;
  data: any[];

  constructor() {
    this.data = this.getData(50);
  }

  onDraggingRow(s: FlexGrid, e: CellRangeEventArgs) {
    this.dragIndex = e.row;
    s.collectionView.moveCurrentToPosition(this.dragIndex);
  }

  onDraggedRow(s: FlexGrid, e: CellRangeEventArgs) {
    let dropIndex = e.row, arr = s.collectionView.sourceCollection;
    s.collectionView.deferUpdate(() => {
      let item = arr[this.dragIndex];
      arr.splice(this.dragIndex, 1);
      arr.splice(dropIndex, 0, item);
      s.collectionView.moveCurrentToPosition(dropIndex);
    });
  }

  showCurrentItem(s: FlexGrid) {
    let currItem = JSON.stringify(s.collectionView.currentItem);
    alert('The currentItem is: ' + currItem);
  }

  private getData(cnt: number) {
    let countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
      data = [];
    for (let i = 0; i < cnt; i++) {
      data.push({
          id: i,
          country: countries[i % countries.length],
          active: i % 5 != 0,
          downloads: Math.round(Math.random() * 200000),
          sales: Math.round(Math.random() * 100000 * 100) / 100,
          expenses: Math.round(Math.random() * 50000 * 100) / 100
      });
    }
    return data;
  }
}
