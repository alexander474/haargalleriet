import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { companyInfo } from '../../models/companyInfo.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  companyInfo = companyInfo;

  onFacebookClick(): void {
    if (this.companyInfo.facebook) {
      window.open(this.companyInfo.facebook, '_blank');
    }
  }
}
