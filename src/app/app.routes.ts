import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { PricesComponent } from './pages/prices/prices.component';
import { OrderComponent } from './pages/order/order.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title:
      'Hårgalleriet Fagernes | Frisørsalong i Valdres - Klipp, Farge & Styling',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Om Oss - Møt Våre Frisører | Hårgalleriet Fagernes',
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Våre Tjenester - Klipp, Farge, Brud & Mer | Hårgalleriet Fagernes',
  },
  {
    path: 'prices',
    component: PricesComponent,
    title: 'Priser og Prisliste | Hårgalleriet Fagernes Frisørsalong',
  },
  {
    path: 'order',
    component: OrderComponent,
    title: 'Bestill Time - Kontakt Oss | Hårgalleriet Fagernes',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Siden finnes ikke | Hårgalleriet Fagernes',
  },
];
