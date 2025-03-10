// filepath: c:\Users\breale\source\repos\haargalleriet\src\app\app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes),
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: 'soho-light', // ← offisielt PrimeNG tema navn
                options: {
                  cssLayer: false, // eller true hvis du bruker Tailwind og trenger layering
                }
              }
        })
    ]
};