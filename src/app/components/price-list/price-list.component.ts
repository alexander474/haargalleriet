import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceItem } from '../../models/PriceItem.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-price-list',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss'],
})
export class PriceListComponent implements OnChanges {
  @Input() priceItems: PriceItem[] = [];

  categories: string[] = [];
  selectedCategory: string = '';
  filteredItems: PriceItem[] = [];

  // Paginering
  page: number = 1;
  itemsPerPage: number = 10;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['priceItems']) {
      this.categories = Array.from(
        new Set(this.priceItems.map((item) => item.category || 'Annet'))
      );
      this.selectedCategory = this.categories[0];
      this.updateFilteredItems();
    }
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.page = 1;
    this.updateFilteredItems();
  }

  updateFilteredItems(): void {
    this.filteredItems = this.priceItems.filter(
      (item) => (item.category || 'Annet') === this.selectedCategory
    );
  }

  get pagedItems(): PriceItem[] {
    const start = (this.page - 1) * this.itemsPerPage;
    return this.filteredItems.slice(start, start + this.itemsPerPage);
  }

  totalPages(): number {
    return Math.ceil(this.filteredItems.length / this.itemsPerPage);
  }
}
