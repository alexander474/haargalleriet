import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MenubarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  showMobileMenu = false;

  ngOnInit() {
    this.items = [
      { label: 'HJEM', routerLink: '/' },
      { label: 'TJENESTER', routerLink: '/services' },
      { label: 'OM OSS', routerLink: '/about' },
      { label: 'PRISER', routerLink: '/prices' },
    ];
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
