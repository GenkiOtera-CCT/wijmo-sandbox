import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';

export class DragDrop {
  private _g: wjcGrid.FlexGrid;
  private _currentCellRng: wjcGrid.CellRange;

  get grid() {
    return this._g;
  }

  constructor(grid: wjcGrid.FlexGrid) {
    this._g = grid;
    // set the selection mode to cell
    // to prevent selection of cells while dragging
    this.grid.selectionMode = wjcGrid.SelectionMode.Cell;
    // bind the formatItem and other events
    this.grid.formatItem.addHandler(this.formatItem.bind(this));
    this.grid.hostElement.addEventListener('dragstart', this.dragStart.bind(this));
    this.grid.hostElement.addEventListener('dragover', this.dragOver.bind(this));
    this.grid.hostElement.addEventListener('drop', this.drop.bind(this));
  }

  formatItem(s: wjcGrid.FlexGrid, e: wjcGrid.FormatItemEventArgs) {
    if(s.cells === e.panel) {
      // set the cells draggable
      e.cell.draggable = true;
    }
  }

  dragStart(e: DragEvent) {
    const grid = this.grid;
    // the current dragged cell
    const hti = grid.hitTest(e);
    if(hti.panel === grid.cells && hti.range) {
      this._currentCellRng = hti.range;
    }
  }

  dragOver(e: DragEvent) {
    const grid = this.grid;
    const hti = grid.hitTest(e);
    // if same column
    // then call the prevenDefault method
    // to enable drop on the current cell
    if(hti.panel === grid.cells && hti.col === this._currentCellRng.col) {
      e.preventDefault();
    }
  }

  drop(e: DragEvent) {
    const grid = this.grid, rng = this._currentCellRng;
    const hti = grid.hitTest(e);
    if(hti.range) {
      // get the data of the dragged cell
      let data = grid.cells.getCellData(rng.row, rng.col, false);
      // set the data to the dropped cell
      hti.panel.setCellData(hti.range.row, hti.range.col, data);
    }
  }
}