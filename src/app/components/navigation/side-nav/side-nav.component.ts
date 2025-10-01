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
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  @Input() navItems: NavItem[] = [];
  @Input() isCollapsed: boolean = false;
  @Output() itemClick = new EventEmitter<NavItem>();
  @Output() sidebarToggle = new EventEmitter<void>();
  
  // Dropdown state for language selection
  isLanguageDropdownOpen: boolean = false;
  selectedLanguage: 'dart' | 'deep' = 'dart'; // Default to dart

  constructor(private router: Router) {
    // Default navigation items with appropriate Remix icons
    this.navItems = [
      {
        id: 'all-projects',
        label: 'All Projects',
        icon: 'folders-line',
        route: '/dashboard'
      },
      {
        id: 'project',
        label: 'NY Judgment Tracking',
        icon: 'folder-open-fill',
        isExpanded: true,
        children: [
          { id: 'project-home', label: 'Project Home', icon: 'home-line', route: '/cases' },
          { id: 'project-search', label: 'Search', icon: 'search-line', route: '/cases' },
          { id: 'project-tracking', label: 'Tracking', icon: 'time-line', route: '/tracking' },
          { id: 'project-bookmarks', label: 'Bookmarks', icon: 'bookmark-line', route: '/bookmarks' },
          { id: 'project-manage', label: 'Manage Project', icon: 'edit-line', route: '/project/manage' }
        ]
      }
    ];
  }

  // Removed collapse functionality

  toggleCollapse(): void {
    this.sidebarToggle.emit();
    // Close all expanded items when collapsing
    if (this.isCollapsed) {
      this.navItems.forEach(item => {
        if (item.children) {
          item.isExpanded = false;
        }
      });
    }
  }

  onItemClick(item: NavItem): void {
    if (item.children && !this.isCollapsed) {
      // Toggle expansion for items with children (only when not collapsed)
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

  toggleLanguageDropdown(): void {
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
  }

  selectLanguage(language: 'dart' | 'deep'): void {
    this.selectedLanguage = language;
    this.isLanguageDropdownOpen = false;
    console.log('Language selected:', language);
  }

  getLanguageIcon(): string {
    return this.selectedLanguage === 'dart' ? 'assets/images/dartfull.svg' : 'assets/images/deep.svg';
  }

  getCollapsedLanguageIcon(): string {
    return this.selectedLanguage === 'dart' ? 'assets/images/dartsmall.svg' : 'assets/images/deepsmall.svg';
  }
}
