import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PriceItem } from '../../models/PriceItem.model';
import { PriceListComponent } from '../../components/price-list/price-list.component';
import { ButtonModule } from 'primeng/button';

interface PriceData {
  [category: string]: Array<{
    service: string;
    price: string;
  }>;
}

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [HttpClientModule, PriceListComponent, ButtonModule],
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
})
export class PricesComponent implements OnInit {
  priceItems: PriceItem[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPriceData();
  }

  loadPriceData(): void {
    this.http.get<PriceData>('assets/prices/prices.json').subscribe(
      (data: PriceData) => {
        const priceItems: PriceItem[] = [];

        Object.keys(data).forEach((category: string) => {
          data[category].forEach((item) => {
            priceItems.push({
              service: item.service,
              price: item.price,
              category: category,
            });
          });
        });

        this.priceItems = priceItems;
      },
      (error) => {
        console.error('Feil under lasting av prisliste', error);
      },
    );
  }
}
