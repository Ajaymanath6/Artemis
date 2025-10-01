import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirect root to cases page (our main application)
  { path: '', redirectTo: '/cases', pathMatch: 'full' },

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

  // Cases page
  {
    path: 'cases',
    loadComponent: () => import('./pages/cases/cases.component').then(m => m.CasesComponent)
  },

  // Case detail page
  {
    path: 'case/:id',
    loadComponent: () => import('./pages/case-detail/case-detail.component').then(m => m.CaseDetailComponent)
  },

  // Wildcard route - must be last
  { path: '**', redirectTo: '/cases' }
];
