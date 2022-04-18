import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LimColumnComponent } from './components/lim-column/lim-column.component';
import { DragRowComponent } from './components/drag-row/drag-row.component';

const routes: Routes = [
  { path: 'lim-column', component: LimColumnComponent },
  { path: 'drag-row', component: DragRowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
