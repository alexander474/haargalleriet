import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenubarModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Hjem',
        icon: 'pi pi-fw pi-home',
        route: '/'
      },
      {
        label: 'Tjenester',
        icon: 'pi pi-fw pi-list',
        route: '/services'
      },
      {
        label: 'Om oss',
        icon: 'pi pi-fw pi-info',
        route: '/about'
      },
      {
        label: 'Kontakt',
        icon: 'pi pi-fw pi-envelope',
        route: '/contact'
      }
    ];
    
  }
}