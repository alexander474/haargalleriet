import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { companyInfo } from '../../models/companyInfo.model';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  company = companyInfo;

  onContactClick() {
    window.open(`mailto:${this.company.email}`, '_blank');
  }

  onFacebookClick() {
    if (this.company.facebook) {
      window.open(this.company.facebook, '_blank');
    }
  }
}
