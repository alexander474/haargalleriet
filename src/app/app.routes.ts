import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { PricesComponent } from './pages/prices/prices.component';
import { OrderComponent } from './pages/order/order.component';

export const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
