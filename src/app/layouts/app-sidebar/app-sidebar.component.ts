import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavigationItem {
  name: string;
  route?: string;
  icon: string;
  children?: NavigationItem[];
  isExpanded?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app-sidebar.component.html',
  styleUrl: './app-sidebar.component.css'
})
export class AppSidebarComponent implements OnInit {
  isSidebarOpen = true;
  
  navigationItems: NavigationItem[] = [
    {
      name: 'Dashboard',
      route: '/dashboard',
      icon: 'home'
    },
    {
      name: 'Search',
      icon: 'search',
      isExpanded: false,
      children: [
        { name: 'All Search', route: '/search', icon: 'search' },
        { name: 'Cases', route: '/search/cases', icon: 'document' },
        { name: 'Attorneys', route: '/search/attorneys', icon: 'user' },
        { name: 'Judges', route: '/search/judges', icon: 'scale' },
        { name: 'Law Firms', route: '/search/law-firms', icon: 'building' },
        { name: 'Parties', route: '/search/parties', icon: 'users' },
        { name: 'Documents', route: '/search/documents', icon: 'document-text' }
      ]
    },
    {
      name: 'Projects',
      icon: 'folder',
      isExpanded: false,
      children: [
        { name: 'All Projects', route: '/projects', icon: 'folder-open' },
        { name: 'Create Project', route: '/projects/create', icon: 'plus' }
      ]
    },
    {
      name: 'Tracking',
      icon: 'chart-bar',
      isExpanded: false,
      children: [
        { name: 'Dashboard', route: '/tracking', icon: 'chart-bar' },
        { name: 'Updates', route: '/tracking/updates', icon: 'bell' }
      ]
    },
    {
      name: 'Bookmarks',
      route: '/bookmarks',
      icon: 'bookmark'
    },
    {
      name: 'Templates',
      icon: 'template',
      isExpanded: false,
      children: [
        { name: 'All Templates', route: '/templates', icon: 'template' },
        { name: 'Create Template', route: '/templates/create', icon: 'plus' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleSection(item: NavigationItem): void {
    if (item.children) {
      item.isExpanded = !item.isExpanded;
    }
  }

  getIconSvg(iconName: string): string {
    const icons: { [key: string]: string } = {
      'home': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />`,
      'search': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />`,
      'document': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />`,
      'user': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />`,
      'scale': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />`,
      'building': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />`,
      'users': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />`,
      'document-text': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />`,
      'folder': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />`,
      'folder-open': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />`,
      'plus': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />`,
      'chart-bar': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />`,
      'bell': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 -5V9a6 6 0 1 0 -12 0v3l-5 5h5a2 2 0 0 0 4 0z" />`,
      'bookmark': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />`,
      'template': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />`
    };
    
    return icons[iconName] || icons['document'];
  }
}
