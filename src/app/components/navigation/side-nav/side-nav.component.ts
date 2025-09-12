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
  @Input() isCollapsed = false;
  @Input() navItems: NavItem[] = [];
  @Output() toggleCollapse = new EventEmitter<void>();
  @Output() itemClick = new EventEmitter<NavItem>();

  constructor(private router: Router) {
    // Default navigation items
    this.navItems = [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'house',
        route: '/dashboard'
      },
      {
        id: 'cases',
        label: 'Cases',
        icon: 'folder',
        route: '/cases'
      },
      {
        id: 'search',
        label: 'Search',
        icon: 'magnifying-glass',
        children: [
          { id: 'search-cases', label: 'Cases', icon: 'folder', route: '/search/cases' },
          { id: 'search-attorneys', label: 'Attorneys', icon: 'user', route: '/search/attorneys' },
          { id: 'search-judges', label: 'Judges', icon: 'scales', route: '/search/judges' }
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
        icon: 'bookmark',
        route: '/bookmarks'
      },
      {
        id: 'tracking',
        label: 'Tracking',
        icon: 'chart-line',
        route: '/tracking'
      },
      {
        id: 'templates',
        label: 'Templates',
        icon: 'file-text',
        route: '/templates'
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: 'gear',
        route: '/settings'
      }
    ];
  }

  onToggleCollapse(): void {
    this.toggleCollapse.emit();
  }

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
