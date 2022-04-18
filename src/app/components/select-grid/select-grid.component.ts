import { Component, ViewChild } from '@angular/core';
import { asEnum, format } from '@grapecity/wijmo';
import { ComboBox } from '@grapecity/wijmo.input';
import { FlexGrid, SelectionMode, CellRange } from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-select-grid',
  templateUrl: './select-grid.component.html',
  styleUrls: ['./select-grid.component.scss']
})
export class SelectGridComponent {

  @ViewChild('flexGrid', { static: true })
  flexGrid: FlexGrid;
  @ViewChild('selectionMode', { static: true })
  selectionMode: ComboBox;

  data: DataItem[];
  comboBoxData: string[];
  currentSelection: string;

  constructor() {
      this.data = this.getData();
      this.comboBoxData = 'なし,セル,セル範囲,行,行範囲,行リスト'.split(',');
  }

  initializeGrid() {
      this.flexGrid.onSelectionChanged(null);
  }

  onTextChanged() {
      this.flexGrid.selectionMode = asEnum(this.selectionMode.selectedIndex, SelectionMode);
  }

  onSelectionChanged() {
      this.currentSelection = format('({row},{col})-({row2},{col2})', this.flexGrid.selection);
  }

  onRefreshClick() {
      this.flexGrid.collectionView.refresh();
  }

  onSelectClick() {
      this.selectionMode.text = 'セル範囲';
      this.flexGrid.selection = new CellRange(0, 0, 1, 1);
  }

  onListSelectClick() {
    this.selectionMode.text = '行リスト';
    this.flexGrid.select(0, 0);
    setTimeout(() => {
      [0, 2, 4].forEach((index) => {
        this.flexGrid.rows[index].isSelected = true;
      });
    });
  }

  private getData(): DataItem[] {
    var countries = 'アメリカ,ドイツ,イギリス,日本,イタリア,ギリシャ'.split(','),
      data = [];
    for (var i = 0; i < countries.length; i++) {
      data.push({
        country: countries[i],
          downloads: Math.round(Math.random() * 20000),
          sales: Math.random() * 10000,
          expenses: Math.random() * 5000
      });
    }
    return data;
  }
}

export interface DataItem {
  country: string;
  downloads: number;
  sales: number;
  expenses: number;
}