import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';

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
export class SideNavComponent implements OnInit {
  @Input() navItems: NavItem[] = [];
  @Input() isCollapsed: boolean = false;
  @Output() itemClick = new EventEmitter<NavItem>();
  @Output() sidebarToggle = new EventEmitter<void>();
  
  // Dropdown state for language selection
  isLanguageDropdownOpen: boolean = false;
  selectedLanguage: 'dart' | 'deep' = 'dart'; // Default to dart
  
  // Track which specific nav item was clicked (for items that share the same route)
  activeItemId: string = 'project-home'; // Default to project home

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

  ngOnInit(): void {
    // Set initial active item based on current route
    this.setActiveItemBasedOnRoute(this.router.url);

    // Listen for route changes to update active item
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveItemBasedOnRoute(event.url);
      }
    });
  }

  // Set the active item based on the current route
  private setActiveItemBasedOnRoute(url: string): void {
    if (url === '/cases') {
      // Try to restore from localStorage first
      const savedActiveItem = this.restoreActiveItemState();
      if (savedActiveItem && (savedActiveItem === 'project-home' || savedActiveItem === 'project-search')) {
        this.activeItemId = savedActiveItem;
      } else {
        // If no saved state or invalid, default to "Project Home"
        this.activeItemId = 'project-home';
      }
    } else if (url === '/dashboard') {
      this.activeItemId = 'all-projects';
    } else if (url.startsWith('/case/')) {
      // For case detail pages, restore the saved active item
      const savedActiveItem = this.restoreActiveItemState();
      if (savedActiveItem && (savedActiveItem === 'project-home' || savedActiveItem === 'project-search')) {
        this.activeItemId = savedActiveItem;
      } else {
        this.activeItemId = 'project-home'; // Default fallback
      }
    }
    // Add more route mappings as needed
  }

  // Save active item state to localStorage
  private saveActiveItemState(): void {
    try {
      localStorage.setItem('sidebarActiveItem', this.activeItemId);
      console.log('Sidebar active item saved:', this.activeItemId);
    } catch (error) {
      console.warn('Failed to save sidebar active item:', error);
    }
  }

  // Restore active item state from localStorage
  private restoreActiveItemState(): string | null {
    try {
      const savedActiveItem = localStorage.getItem('sidebarActiveItem');
      console.log('Sidebar active item restored:', savedActiveItem);
      return savedActiveItem;
    } catch (error) {
      console.warn('Failed to restore sidebar active item:', error);
      return null;
    }
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
      // Track which specific item was clicked
      this.activeItemId = item.id;
      // Save active item to localStorage for state persistence
      this.saveActiveItemState();
      // Navigate to route
      this.router.navigate([item.route]);
    }
    this.itemClick.emit(item);
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

  // Check if a specific nav item should be highlighted as active
  isActiveItem(item: NavItem): boolean {
    if (!item.route) return false;
    
    // Check if we're on the correct route
    const isOnRoute = this.router.url === item.route;
    
    // For items that share the same route (like project-home and project-search both going to /cases),
    // only highlight the one that was actually clicked
    if (isOnRoute) {
      if (item.route === '/cases') {
        // Special handling for cases route - only highlight the item that was clicked
        return this.activeItemId === item.id;
      } else {
        // For other routes, use normal route matching
        return true;
      }
    }
    
    return false;
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
