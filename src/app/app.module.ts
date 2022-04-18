import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import '@grapecity/wijmo.cultures/wijmo.culture.ja';

import { LimColumnComponent } from './components/lim-column/lim-column.component';
import { DragRowComponent } from './components/drag-row/drag-row.component';
import { SelectGridComponent } from './components/select-grid/select-grid.component';
import { TreeComponent } from './components/tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    LimColumnComponent,
    DragRowComponent,
    SelectGridComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WjGridModule,
    WjInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
