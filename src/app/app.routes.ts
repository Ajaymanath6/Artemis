import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirect root to project home page (our main application)
  { path: '', redirectTo: '/project-home', pathMatch: 'full' },

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

  // Project Home page (same as cases but separate)
  {
    path: 'project-home',
    loadComponent: () => import('./pages/project-home/project-home.component').then(m => m.ProjectHomeComponent)
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

  // Judge detail page
  {
    path: 'judge/:id',
    loadComponent: () => import('./pages/judge-detail/judge-detail.component').then(m => m.JudgeDetailComponent)
  },

  // Case Hub page
  {
    path: 'case-hub',
    loadComponent: () => import('./pages/case-hub/case-hub.component').then(m => m.CaseHubComponent)
  },

  // My Favorites page
  {
    path: 'my-favorites',
    loadComponent: () => import('./pages/my-favorites/my-favorites.component').then(m => m.MyFavoritesComponent)
  },

  // Samples page
  {
    path: 'samples',
    loadComponent: () => import('./pages/samples/samples.component').then(m => m.SamplesComponent)
  },

  // Dynamic Custom Lists
  {
    path: 'list/:id',
    loadComponent: () => import('./pages/custom-list/custom-list.component').then(m => m.CustomListComponent)
  },

  // Alerts page
  {
    path: 'alerts',
    loadComponent: () => import('./pages/alerts/alerts.component').then(m => m.AlertsComponent)
  },

  // Wildcard route - must be last
  { path: '**', redirectTo: '/cases' }
];
