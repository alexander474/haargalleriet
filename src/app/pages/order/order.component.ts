import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { companyInfo } from '../../models/CompanyInfo.model';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  company = companyInfo;

  // Computed URLs
  get phoneUrl(): string {
    return `tel:${this.company.phoneInternational.replace(/\s/g, '')}`;
  }

  get emailUrl(): string {
    return `mailto:${this.company.email}`;
  }

  get mapsUrl(): string {
    const encodedAddress = encodeURIComponent(this.company.address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  }
}
