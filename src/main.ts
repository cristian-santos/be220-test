import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  addCircleOutline, 
  addCircle, 
  add, 
  notifications, 
  notificationsOutline, 
  calendar, 
  person, 
  personCircle, 
  bodyOutline, 
  trophyOutline,
  fitnessOutline,
  calendarOutline,
  personOutline,
  bookOutline,
  restaurantOutline
} from 'ionicons/icons';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

addIcons({
  // Ícones principais da aplicação
  'add-circle-outline': addCircleOutline,
  'add-circle': addCircle,
  'add': add,
  'notifications': notifications,
  'notifications-outline': notificationsOutline,
  'calendar': calendar,
  'person': person,
  'person-circle': personCircle,
  'body-outline': bodyOutline,
  'trophy-outline': trophyOutline,

  // Ícones do menu de navegação
  'fitness-outline': fitnessOutline,
  'calendar-outline': calendarOutline,
  'person-outline': personOutline,
  'book-outline': bookOutline,
  'restaurant-outline': restaurantOutline,
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
