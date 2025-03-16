import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  phoneNumber: string = '+47 456 44 750';
  email: string = 'post@haargallerietfagernes.no';
  facebookUrl: string =
    'https://www.facebook.com/H%C3%A5rgalleriet-Fagernes-AS-592114444138943/';

  onContactClick() {
    window.open(`mailto:${this.email}`, '_blank');
  }

  onFacebookClick() {
    if (this.facebookUrl) {
      window.open(this.facebookUrl, '_blank');
    }
  }
}
