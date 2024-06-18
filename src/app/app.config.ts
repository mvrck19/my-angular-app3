import { ApplicationConfig, Component, provideZoneChangeDetection } from '@angular/core';
import { RouterLink, RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
