import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid'
import '@grapecity/wijmo.cultures/wijmo.culture.ja';

import { LimColumnComponent } from './components/lim-column/lim-column.component';

@NgModule({
  declarations: [
    AppComponent,
    LimColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WjGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
