import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { PriceItem } from '../../models/PriceItem.model';
import { PriceListComponent } from '../../components/price-list/price-list.component';
import { ButtonModule } from 'primeng/button';

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
    this.loadExcelData();
  }

  loadExcelData(): void {
    this.http
      .get('assets/prices/prices.xlsx', {
        responseType: 'arraybuffer',
      })
      .subscribe(
        (data: ArrayBuffer) => {
          const workbook: XLSX.WorkBook = XLSX.read(data, { type: 'array' });
          const priceItems: PriceItem[] = [];

          workbook.SheetNames.forEach((sheetName: string) => {
            const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
            const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, {
              header: 1,
            });

            if (jsonData.length > 1) {
              const headers = jsonData[0] as string[];

              jsonData.slice(1).forEach((row: any[]) => {
                if (row && row.length) {
                  priceItems.push({
                    service: row[0] ? row[0].toString() : '',
                    price: this.formatPrice(row, headers),
                    category: sheetName,
                  });
                }
              });
            }
          });

          this.priceItems = priceItems;
        },
        (error) => {
          console.error('Feil under lasting av Excel-fil', error);
        }
      );
  }

  private formatPrice(row: any[], headers: string[]): string {
    if (headers.includes('Kort hår') && headers.includes('Langt hår')) {
      const shortHairPrice = row[1] ? row[1].toString() : '';
      const longHairPrice = row[2] ? row[2].toString() : '';
      if (shortHairPrice && longHairPrice && longHairPrice !== '-') {
        return `${shortHairPrice} / ${longHairPrice}`;
      }
      return shortHairPrice || longHairPrice;
    }
    return row[1] ? row[1].toString() : '';
  }
}
