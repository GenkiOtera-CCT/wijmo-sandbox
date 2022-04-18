import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LimColumnComponent } from './components/lim-column/lim-column.component';
import { DragRowComponent } from './components/drag-row/drag-row.component';
import { SelectGridComponent } from './components/select-grid/select-grid.component';

const routes: Routes = [
  { path: 'lim-column', component: LimColumnComponent },
  { path: 'drag-row', component: DragRowComponent },
  { path: 'select-grid', component: SelectGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
