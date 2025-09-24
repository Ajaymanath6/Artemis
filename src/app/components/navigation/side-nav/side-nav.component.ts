import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  route?: string;
  children?: NavItem[];
  isExpanded?: boolean;
}

@Component({
  selector: 'app-side-nav',
  imports: [CommonModule, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  @Input() navItems: NavItem[] = [];
  @Output() itemClick = new EventEmitter<NavItem>();

  constructor(private router: Router) {
    // Default navigation items with appropriate Remix icons
    this.navItems = [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'dashboard-line',
        route: '/dashboard'
      },
      {
        id: 'cases',
        label: 'Cases',
        icon: 'folder-open-line',
        route: '/cases'
      },
      {
        id: 'search',
        label: 'Advanced Search',
        icon: 'search-line',
        children: [
          { id: 'search-cases', label: 'Cases', icon: 'folder-line', route: '/search/cases' },
          { id: 'search-attorneys', label: 'Attorneys', icon: 'user-line', route: '/search/attorneys' },
          { id: 'search-judges', label: 'Judges', icon: 'scales-line', route: '/search/judges' },
          { id: 'search-law-firms', label: 'Law Firms', icon: 'building-line', route: '/search/law-firms' },
          { id: 'search-documents', label: 'Documents', icon: 'file-text-line', route: '/search/documents' }
        ]
      },
      {
        id: 'projects',
        label: 'Projects',
        icon: 'briefcase-line',
        route: '/projects'
      },
      {
        id: 'bookmarks',
        label: 'Saved Items',
        icon: 'bookmark-line',
        route: '/bookmarks'
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: 'line-chart-line',
        route: '/analytics'
      },
      {
        id: 'notifications',
        label: 'Notifications',
        icon: 'notification-line',
        route: '/notifications'
      },
      {
        id: 'reports',
        label: 'Reports',
        icon: 'file-chart-line',
        route: '/reports'
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: 'settings-line',
        route: '/settings'
      }
    ];
  }

  // Removed collapse functionality

  onItemClick(item: NavItem): void {
    if (item.children) {
      // Toggle expansion for items with children
      item.isExpanded = !item.isExpanded;
    } else if (item.route) {
      // Navigate to route
      this.router.navigate([item.route]);
    }
    this.itemClick.emit(item);
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}
