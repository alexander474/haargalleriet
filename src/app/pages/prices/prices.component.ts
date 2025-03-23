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
    //this.loadExcelData();
    this.priceItems = Array.from({ length: 500 }, (_, i) => ({
      service: `Tjeneste ${i + 1}`,
      price: `${100 + i} - ${200 + i} kr`,
    }));
  }

  loadExcelData(): void {
    this.http
      .get('assets/prices/prices.xlsx', { responseType: 'arraybuffer' })
      .subscribe(
        (data: ArrayBuffer) => {
          const workbook: XLSX.WorkBook = XLSX.read(data, { type: 'array' });
          const sheetName: string = workbook.SheetNames[0];
          const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
          const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, {
            header: 1,
          });
          if (jsonData.length > 1) {
            this.priceItems = jsonData.slice(1).map((row: any[]) => ({
              service: row[0] ? row[0].toString() : '',
              price: row[1] ? row[1].toString() : '',
            }));
          }
        },
        (error) => {
          console.error('Feil under lasting av Excel-fil', error);
        }
      );
  }
}
