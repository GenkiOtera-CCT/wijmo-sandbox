import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class='route-list'>
      <nav class='item'>
        <a routerLink="/">Home</a>
      </nav>
      <nav class='item'>
        <a routerLink="/lim-column">lim-column</a>
      </nav>
      <nav class='item'>
        <a routerLink="/drag-row">drag-row</a>
      </nav>
      <nav class='item'>
        <a routerLink="/select-grid">select-grid</a>
      </nav>
      <nav class='item'>
        <a routerLink="/tree">tree</a>
      </nav>
    </div>
    <wj-flex-grid [itemsSource]="gridData">
      <wj-flex-grid-column header="ID" binding="id" [width]="60"></wj-flex-grid-column>
      <wj-flex-grid-column header="商品名" binding="product" [width]="200"></wj-flex-grid-column>
      <wj-flex-grid-column header="受注日" binding="date" [width]="120"></wj-flex-grid-column>
      <wj-flex-grid-column header="金額" binding="amount" [width]="100" format="c"></wj-flex-grid-column>
    </wj-flex-grid>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .route-list{
      display:flex;
      padding:30px;
    }
    .item{
      padding-right:15px;
    }
  `]
})
export class AppComponent {
  title = 'wijmo-sandbox';

  gridData = [
    { id: 15, product: 'ピュアデミグラスソース', date: '2017/01/10', amount: 6000 },
    { id: 17, product: 'だしこんぶ', date: '2017/01/08', amount: 14500 },
    { id: 18, product: 'ピリカラタバスコ', date: '2017/01/12', amount: 4000 },
    { id: 84, product: 'なまわさび', date: '2017/01/21', amount: 8000 }
    ];
}
