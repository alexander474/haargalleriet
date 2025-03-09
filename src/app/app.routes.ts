import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
// + ev. flere sider

export const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'om-oss', component: AboutComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'tjenester', component: ServicesComponent }
];
