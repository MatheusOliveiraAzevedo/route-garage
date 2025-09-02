import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'storage',
    loadChildren: () => import('./storage/storage.module').then((m) => m.StorageModule),
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];

export { Routing };
