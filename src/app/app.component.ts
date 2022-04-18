import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <wj-flex-grid [itemsSource]="gridData">
      <wj-flex-grid-column header="ID" binding="id" [width]="60"></wj-flex-grid-column>
      <wj-flex-grid-column header="商品名" binding="product" [width]="200"></wj-flex-grid-column>
      <wj-flex-grid-column header="受注日" binding="date" [width]="120"></wj-flex-grid-column>
      <wj-flex-grid-column header="金額" binding="amount" [width]="100" format="c"></wj-flex-grid-column>
    </wj-flex-grid>
    <router-outlet></router-outlet>
  `,
  styles: []
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
