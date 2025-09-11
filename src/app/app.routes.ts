import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirect root to dashboard (will be handled by app component for GitHub Pages redirects)
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // Authentication routes
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent)
  },

  // Loading page for authentication
  {
    path: 'loading',
    loadComponent: () => import('./pages/loading/loading.component').then(m => m.LoadingComponent)
  },

  // Dashboard routes with layout
  {
    path: 'dashboard',
    loadComponent: () => import('./layouts/dashboard-layout/dashboard-layout.component').then(m => m.DashboardLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
      }
    ]
  },

  // Wildcard route - must be last
  { path: '**', redirectTo: '/dashboard' }
];
