import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LimColumnComponent } from './components/lim-column/lim-column.component';
import { DragRowComponent } from './components/drag-row/drag-row.component';
import { SelectGridComponent } from './components/select-grid/select-grid.component';
import { TreeComponent } from './components/tree/tree.component';
import { DragCellComponent } from './components/drag-cell/drag-cell.component';

const routes: Routes = [
  { path: 'lim-column', component: LimColumnComponent },
  { path: 'drag-row', component: DragRowComponent },
  { path: 'select-grid', component: SelectGridComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'drag-cell', component: DragCellComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
