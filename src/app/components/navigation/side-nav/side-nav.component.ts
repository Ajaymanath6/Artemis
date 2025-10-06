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
      },
      {
        id: 'history',
        label: 'History',
        icon: 'history-line',
        isExpanded: false,
        children: this.getSearchHistory()
      }
    ];
  }

  ngOnInit(): void {
    console.log('SideNav component initializing...', 'Current URL:', this.router.url);
    
    // Ensure we have a default activeItemId
    if (!this.activeItemId) {
      this.activeItemId = 'project-home';
      console.log('Set default activeItemId to project-home');
    }
    
    // Set initial active item based on current route
    this.setActiveItemBasedOnRoute(this.router.url);
    
    // Force update after a short delay to ensure DOM is ready
    setTimeout(() => {
      this.setActiveItemBasedOnRoute(this.router.url);
      console.log('SideNav forced update - active item:', this.activeItemId);
    }, 100);

    // Listen for route changes to update active item
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Route changed to:', event.url);
        this.setActiveItemBasedOnRoute(event.url);
      }
    });
  }

  // Set the active item based on the current route
  private setActiveItemBasedOnRoute(url: string): void {
    console.log('Setting active item for URL:', url);
    
    if (url === '/cases' || url.startsWith('/case/')) {
      // For both cases page and case detail pages, try to restore saved active item
      const savedActiveItem = this.restoreActiveItemState();
      if (savedActiveItem === 'project-search') {
        this.activeItemId = 'project-search';
        console.log('Restored active item: project-search');
      } else {
        // Default to project-home for cases-related pages
        this.activeItemId = 'project-home';
        console.log('Default active item: project-home');
      }
    } else if (url === '/dashboard') {
      this.activeItemId = 'all-projects';
      console.log('Set active item for dashboard: all-projects');
    } else {
      // For other routes, default to project-home
      this.activeItemId = 'project-home';
      console.log('Default for other route: project-home');
    }
    
    console.log('Final active item ID:', this.activeItemId);
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
    console.log('Checking isActiveItem for:', item.id, 'activeItemId:', this.activeItemId, 'currentUrl:', this.router.url);
    
    if (!item.route) return false;
    
    // Check if we're on the correct route OR on a related route (like case detail)
    const isOnRoute = this.router.url === item.route;
    const isOnCaseDetailPage = this.router.url.startsWith('/case/');
    
    // For cases-related items (project-home, project-search), they should be active on both /cases and /case/ pages
    if (item.route === '/cases') {
      if (isOnRoute || isOnCaseDetailPage) {
        // Only highlight the item that matches our activeItemId
        const isActive = this.activeItemId === item.id;
        console.log(`Item ${item.id} is ${isActive ? 'ACTIVE' : 'not active'}`);
        return isActive;
      }
    } else if (isOnRoute) {
      // For non-cases routes, use normal route matching
      return true;
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

  // Get search history from localStorage
  getSearchHistory(): NavItem[] {
    try {
      const searchHistory = localStorage.getItem('searchHistory');
      if (searchHistory) {
        const history = JSON.parse(searchHistory);
        return history.slice(0, 5).map((term: string, index: number) => ({
          id: `history-${index}`,
          label: this.truncateSearchTerm(term),
          icon: 'search-2-line',
          route: '/cases',
          fullTerm: term // Store full term for potential use
        }));
      }
    } catch (error) {
      console.warn('Failed to load search history:', error);
    }
    return [];
  }

  // Truncate search term for display
  private truncateSearchTerm(term: string): string {
    const maxLength = 25;
    if (term.length <= maxLength) {
      return term;
    }
    return term.substring(0, maxLength) + '...';
  }

  // Add search term to history
  addToSearchHistory(searchTerm: string): void {
    if (!searchTerm.trim()) return;
    
    try {
      let searchHistory = [];
      const existingHistory = localStorage.getItem('searchHistory');
      
      if (existingHistory) {
        searchHistory = JSON.parse(existingHistory);
      }
      
      // Remove if already exists (to move to top)
      searchHistory = searchHistory.filter((term: string) => term !== searchTerm);
      
      // Add to beginning
      searchHistory.unshift(searchTerm);
      
      // Keep only last 10 searches
      searchHistory = searchHistory.slice(0, 10);
      
      // Save to localStorage
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
      
      // Update the nav items
      this.updateHistoryNavItems();
      
    } catch (error) {
      console.warn('Failed to save search history:', error);
    }
  }

  // Update history nav items
  private updateHistoryNavItems(): void {
    const historyNavItem = this.navItems.find(item => item.id === 'history');
    if (historyNavItem) {
      historyNavItem.children = this.getSearchHistory();
    }
  }
}
