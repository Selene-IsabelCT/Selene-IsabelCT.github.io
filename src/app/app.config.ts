import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    // Mantén los providers que ya traía tu archivo y agrega estos dos:
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
     providePrimeNG({
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: '.modo-oscuro'
        }
      }
    })
  ]
};