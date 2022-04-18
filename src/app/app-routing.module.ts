import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LimColumnComponent } from './components/lim-column/lim-column.component';

const routes: Routes = [
  { path: 'lim-column', component: LimColumnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
