import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, addCircle, add, notifications, notificationsOutline, calendar, person, personCircle } from 'ionicons/icons';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// Registrar os ícones
addIcons({
  'add-circle-outline': addCircleOutline,
  'add-circle': addCircle,
  'add': add,
  'notifications': notifications,
  'notifications-outline': notificationsOutline,
  'calendar': calendar,
  'person': person,
  'person-circle': personCircle,
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
