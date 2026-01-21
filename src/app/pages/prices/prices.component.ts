import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
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
  imports: [
    HttpClientModule,
    PriceListComponent,
    ButtonModule,
    TranslateModule,
  ],
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
})
export class PricesComponent implements OnInit, OnDestroy {
  priceItems: PriceItem[] = [];
  private langSubscription?: Subscription;

  constructor(
    private http: HttpClient,
    private translate: TranslateService,
  ) {}

  ngOnInit(): void {
    this.loadPriceData();

    // Reload prices when language changes
    this.langSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadPriceData();
    });
  }

  ngOnDestroy(): void {
    this.langSubscription?.unsubscribe();
  }

  loadPriceData(): void {
    const lang = this.translate.currentLang || 'no';
    const priceFile = `assets/prices/prices-${lang}.json`;

    this.http.get<PriceData>(priceFile).subscribe(
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
        console.error('Error loading price list', error);
      },
    );
  }
}
