import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Meny med lenker til sider; du kan legge til eller endre elementer etter behov
  items = [
    { label: 'Hjem', routerLink: '/' },
    { label: 'Om oss', routerLink: '/om-oss' },
    { label: 'Tjenester', routerLink: '/tjenester' },
    { label: 'Kontakt', routerLink: '/kontakt' }
  ];
}
