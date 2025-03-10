import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MenubarModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  isMobile: boolean = false;
  navOpen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    // Bruker ditt items-array – vi benytter routerLink for Angular-integrasjon
    this.items = [
      { label: 'Hjem', icon: 'pi pi-fw pi-home', routerLink: '/' },
      { label: 'Tjenester', icon: 'pi pi-fw pi-list', routerLink: '/services' },
      { label: 'Om oss', icon: 'pi pi-fw pi-info', routerLink: '/about' },
      { label: 'Kontakt', icon: 'pi pi-fw pi-envelope', routerLink: '/contact' },
    ];

    // Lytter etter om skjermen er liten (mobil)
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }
}
