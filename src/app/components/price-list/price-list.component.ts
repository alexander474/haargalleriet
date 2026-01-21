import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PriceItem } from '../../models/PriceItem.model';
import { ButtonModule } from 'primeng/button';

interface CategoryGroup {
  name: string;
  items: PriceItem[];
}

@Component({
  selector: 'app-price-list',
  standalone: true,
  imports: [CommonModule, ButtonModule, TranslateModule],
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss'],
})
export class PriceListComponent implements OnChanges {
  @Input() priceItems: PriceItem[] = [];

  categoryGroups: CategoryGroup[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['priceItems']) {
      this.groupByCategory();
    }
  }

  groupByCategory(): void {
    const groups = new Map<string, PriceItem[]>();

    this.priceItems.forEach((item) => {
      const category = item.category || 'Other';
      if (!groups.has(category)) {
        groups.set(category, []);
      }
      groups.get(category)!.push(item);
    });

    this.categoryGroups = Array.from(groups.entries()).map(([name, items]) => ({
      name,
      items,
    }));
  }
}
