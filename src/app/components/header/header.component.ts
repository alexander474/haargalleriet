import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showMobileMenu = false;
  items: MenuItem[] = [
    { label: 'HJEM', routerLink: '/' },
    { label: 'TJENESTER', routerLink: '/services' },
    { label: 'OM OSS', routerLink: '/about' },
    { label: 'PRISER', routerLink: '/prices' },
  ];

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
