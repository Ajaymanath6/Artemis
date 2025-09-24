import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PhosphorIconComponent } from '../../ui/phosphor-icon/phosphor-icon.component';

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
  imports: [CommonModule, RouterModule, PhosphorIconComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  @Input() navItems: NavItem[] = [];
  @Output() itemClick = new EventEmitter<NavItem>();

  constructor(private router: Router) {
    // Default navigation items with appropriate Phosphor icons
    this.navItems = [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'squares-four',
        route: '/dashboard'
      },
      {
        id: 'cases',
        label: 'Cases',
        icon: 'folder-open',
        route: '/cases'
      },
      {
        id: 'search',
        label: 'Search',
        icon: 'magnifying-glass',
        children: [
          { id: 'search-cases', label: 'Cases', icon: 'folder-open', route: '/search/cases' },
          { id: 'search-attorneys', label: 'Attorneys', icon: 'user-circle', route: '/search/attorneys' },
          { id: 'search-judges', label: 'Judges', icon: 'scales', route: '/search/judges' },
          { id: 'search-law-firms', label: 'Law Firms', icon: 'buildings', route: '/search/law-firms' },
          { id: 'search-documents', label: 'Documents', icon: 'file-text', route: '/search/documents' }
        ]
      },
      {
        id: 'projects',
        label: 'Projects',
        icon: 'briefcase',
        route: '/projects'
      },
      {
        id: 'bookmarks',
        label: 'Bookmarks',
        icon: 'bookmark-simple',
        route: '/bookmarks'
      },
      {
        id: 'tracking',
        label: 'Tracking',
        icon: 'chart-line-up',
        route: '/tracking'
      },
      {
        id: 'templates',
        label: 'Templates',
        icon: 'file-doc',
        route: '/templates'
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: 'gear-six',
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
