import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/inbox',
    pathMatch: 'full',
  },
  {
    path: 'home/:id',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'header',
    loadComponent: () => import('./components/header/header.component').then( m => m.HeaderComponent)
  },
];
