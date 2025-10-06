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
  fullTerm?: string; // For history items
  isDropdownOpen?: boolean; // Track dropdown state for history items
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
  
  // Track current search state for synchronized spinner
  @Input() currentSearchQuery: string = '';
  @Input() isSearching: boolean = false;

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
          {
            id: 'history',
            label: 'History',
            icon: 'history-line',
            isExpanded: false,
            children: this.getSearchHistory()
          },
          { id: 'project-tracking', label: 'Tracking', icon: 'time-line', route: '/tracking' },
          { id: 'project-case-hub', label: 'Case Hub', icon: 'bookmark-line', route: '/case-hub' },
          { id: 'project-alerts', label: 'Alerts', icon: 'notification-line', route: '/alerts' }
        ]
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
    
    // Initialize history items on startup
    this.updateHistoryNavItems();
    
    // Set initial active item based on current route
    this.setActiveItemBasedOnRoute(this.router.url);
    
    // Force update after a short delay to ensure DOM is ready
    setTimeout(() => {
      this.setActiveItemBasedOnRoute(this.router.url);
      this.updateHistoryNavItems(); // Refresh history items
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
    } else if (url === '/case-hub') {
      this.activeItemId = 'project-case-hub';
      console.log('Set active item for case hub: project-case-hub');
    } else if (url === '/alerts') {
      this.activeItemId = 'project-alerts';
      console.log('Set active item for alerts: project-alerts');
    } else if (url.startsWith('/judge/')) {
      // For judge detail pages, restore or default to project-home
      const savedActiveItem = this.restoreActiveItemState();
      this.activeItemId = savedActiveItem || 'project-home';
      console.log('Set active item for judge detail: ', this.activeItemId);
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
      console.log(`Toggled ${item.label} expansion to:`, item.isExpanded);
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
    const isOnJudgeDetailPage = this.router.url.startsWith('/judge/');
    
    // For cases-related items (project-home, project-search), they should be active on both /cases and /case/ pages
    if (item.route === '/cases') {
      if (isOnRoute || isOnCaseDetailPage || isOnJudgeDetailPage) {
        // Only highlight the item that matches our activeItemId
        const isActive = this.activeItemId === item.id;
        console.log(`Item ${item.id} is ${isActive ? 'ACTIVE' : 'not active'}`);
        return isActive;
      }
    } else if (isOnRoute) {
      // For all other routes (including case-hub), use exact route matching
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
          fullTerm: term, // Store full term for potential use
          isDropdownOpen: false // Initially closed
        }));
      }
    } catch (error) {
      console.warn('Failed to load search history:', error);
    }
    return [];
  }

  // Truncate search term for display
  private truncateSearchTerm(term: string): string {
    const maxLength = 8;
    if (term.length <= maxLength) {
      return term;
    }
    return term.substring(0, maxLength) + '...';
  }

  // Add search term to history
  addToSearchHistory(searchTerm: string): void {
    if (!searchTerm.trim()) return;
    
    console.log('Adding search term to history:', searchTerm);
    
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
      
      console.log('Updated search history:', searchHistory);
      
      // Update the nav items immediately
      this.updateHistoryNavItems();
      
      console.log('History nav items updated');
      
    } catch (error) {
      console.warn('Failed to save search history:', error);
    }
  }

  // Update history nav items
  private updateHistoryNavItems(): void {
    const historyNavItem = this.findHistoryNavItem();
    if (historyNavItem) {
      historyNavItem.children = this.getSearchHistory();
      // Auto-expand history section when new items are added
      if (historyNavItem.children && historyNavItem.children.length > 0) {
        historyNavItem.isExpanded = true;
      }
      console.log('History nav items updated, total items:', historyNavItem.children?.length || 0);
    } else {
      console.warn('History nav item not found!');
    }
  }

  // Find history nav item (now nested under project)
  private findHistoryNavItem(): NavItem | undefined {
    const projectItem = this.navItems.find(item => item.id === 'project');
    if (projectItem && projectItem.children) {
      return projectItem.children.find(child => child.id === 'history');
    }
    return undefined;
  }

  // Toggle dropdown for history items
  toggleHistoryDropdown(historyItem: NavItem, event: Event): void {
    event.stopPropagation(); // Prevent navigation
    
    // Close all other dropdowns
    this.closeAllHistoryDropdowns();
    
    // Toggle current dropdown
    historyItem.isDropdownOpen = !historyItem.isDropdownOpen;
  }

  // Close all history dropdowns
  closeAllHistoryDropdowns(): void {
    const historyNavItem = this.findHistoryNavItem();
    if (historyNavItem && historyNavItem.children) {
      historyNavItem.children.forEach(child => {
        child.isDropdownOpen = false;
      });
    }
  }

  // Add history item to Case Hub
  addToCaseHub(historyItem: NavItem, event: Event): void {
    event.stopPropagation();
    console.log('Adding to Case Hub:', historyItem.fullTerm || historyItem.label);
    
    try {
      // Get existing case hub items
      let caseHubItems = [];
      const existingCaseHub = localStorage.getItem('caseHubItems');
      
      if (existingCaseHub) {
        caseHubItems = JSON.parse(existingCaseHub);
      }
      
      // Add new item if not already exists
      const newItem = historyItem.fullTerm || historyItem.label;
      if (!caseHubItems.includes(newItem)) {
        caseHubItems.unshift(newItem);
        localStorage.setItem('caseHubItems', JSON.stringify(caseHubItems));
        console.log('Added to Case Hub successfully');
      }
      
    } catch (error) {
      console.warn('Failed to add to Case Hub:', error);
    }
    
    // Close dropdown
    historyItem.isDropdownOpen = false;
  }

  // Delete history item
  deleteHistoryItem(historyItem: NavItem, event: Event): void {
    event.stopPropagation();
    console.log('Deleting history item:', historyItem.fullTerm || historyItem.label);
    
    try {
      const searchHistory = localStorage.getItem('searchHistory');
      if (searchHistory) {
        let history = JSON.parse(searchHistory);
        const termToDelete = historyItem.fullTerm || historyItem.label;
        
        // Remove the item from history
        history = history.filter((term: string) => term !== termToDelete);
        
        // Save updated history
        localStorage.setItem('searchHistory', JSON.stringify(history));
        
        // Update the nav items
        this.updateHistoryNavItems();
        
        console.log('History item deleted successfully');
      }
    } catch (error) {
      console.warn('Failed to delete history item:', error);
    }
    
    // Close dropdown
    historyItem.isDropdownOpen = false;
  }

  // Check if a history item should show loading spinner
  shouldShowSpinner(historyItem: NavItem): boolean {
    if (!this.isSearching || !this.currentSearchQuery) {
      return false;
    }
    
    const itemTerm = historyItem.fullTerm || historyItem.label;
    return itemTerm.toLowerCase().trim() === this.currentSearchQuery.toLowerCase().trim();
  }
}
