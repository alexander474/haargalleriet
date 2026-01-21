import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { companyInfo } from '../../models/CompanyInfo.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  companyInfo = companyInfo;
  version = environment.version;
  buildDate = environment.buildDate;
  buildNumber = environment.buildNumber;
  commitHash = environment.commitHash;
  isProduction = environment.production;

  get mapsUrl(): string {
    const encodedAddress = encodeURIComponent(this.companyInfo.address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  }
}
