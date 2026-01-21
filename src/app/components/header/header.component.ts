import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    TranslateModule,
    LanguageSwitcherComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showMobileMenu = false;

  items = [
    { labelKey: 'NAV.HOME', routerLink: '/' },
    { labelKey: 'NAV.SERVICES', routerLink: '/services' },
    { labelKey: 'NAV.ABOUT', routerLink: '/about' },
    { labelKey: 'NAV.PRICES', routerLink: '/prices' },
  ];

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
