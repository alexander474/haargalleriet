import { Component } from '@angular/core';

@Component({
  selector: 'app-prices',
  standalone: true,
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent {
  prices = [
    { service: 'Hårklipp', price: '500,-' },
    { service: 'Farging', price: '1200,-' },
    { service: 'Styling', price: '800,-' },
    { service: 'Hårkur', price: '400,-' }
  ];
}