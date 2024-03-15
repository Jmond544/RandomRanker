import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing/components/header/header.component'),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./landing/pages/home/home.component'),
      },
      {
        path: 'about',
        title: 'About',
        loadComponent: () => import('./landing/pages/about/about.component'),
      },
    ],
  },
];
