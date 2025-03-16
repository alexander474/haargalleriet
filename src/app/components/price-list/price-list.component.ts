import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PriceItem } from '../../models/price-item.model';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-price-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, InputTextModule, Button],
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss'],
})
export class PriceListComponent implements OnChanges {
  @Input() priceItems: PriceItem[] = [];

  // Referanse til input-elementet for søkefeltet
  @ViewChild('globalInput') globalInput!: ElementRef<HTMLInputElement>;

  searchValue: string = '';
  filteredPriceItems: PriceItem[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['priceItems']) {
      this.filteredPriceItems = [...this.priceItems];
      this.applyFilter();
    }
  }

  onFilterChange(): void {
    const value = this.globalInput.nativeElement.value;
    this.searchValue = value;
    this.applyFilter();
  }

  private applyFilter(): void {
    if (!this.searchValue) {
      this.filteredPriceItems = [...this.priceItems];
      return;
    }
    const filterVal = this.searchValue.toLowerCase();
    this.filteredPriceItems = this.priceItems.filter(
      (item) =>
        item.service.toLowerCase().includes(filterVal) ||
        item.price.toLowerCase().includes(filterVal)
    );
  }

  clear(dt: any): void {
    dt.clear();
    this.searchValue = '';
    this.applyFilter();
  }
}
