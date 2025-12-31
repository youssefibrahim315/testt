import { Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('./components/list/list.component').then((m) => m.ListComponent),
  },
  {
    path: 'products/add',
    loadComponent: () =>
      import('./components/add/add.component').then((m) => m.AddComponent),
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];
