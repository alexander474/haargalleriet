import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { companyInfo } from '../../models/CompanyInfo.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  companyInfo = companyInfo;
  version = environment.version;
  buildDate = environment.buildDate;

  get mapsUrl(): string {
    const encodedAddress = encodeURIComponent(this.companyInfo.address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  }
}
