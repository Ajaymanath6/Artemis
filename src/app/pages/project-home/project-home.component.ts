import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SideNavComponent, NavItem } from '../../components/navigation/side-nav/side-nav.component';
import { HomeHeaderComponent } from '../../components/home-header/home-header.component';
import { AnnouncementsRecentLayoutComponent } from '../../layouts/announcements-recent-layout/announcements-recent-layout.component';
import { SearchBarComponent } from '../../components/ui/search-bar/search-bar.component';

@Component({
  selector: 'app-project-home',
  standalone: true,
  imports: [CommonModule, SideNavComponent, HomeHeaderComponent, AnnouncementsRecentLayoutComponent, SearchBarComponent],
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css']
})
export class ProjectHomeComponent implements OnInit, AfterViewInit {
  // ViewChild to access the sidebar component
  @ViewChild('sideNav') sideNav!: SideNavComponent;
  
  isSearching: boolean = false;
  hasSearched: boolean = false;
  isSearchBarExpanded: boolean = false; // New property to track search bar expansion
  skeletonCards = Array(10).fill(0); // Create array for 10 skeleton cards
  maxVisibleCards = 10; // Limit visible cards to 10
  allCards = Array.from({length: 10}, (_, i) => i + 1); // Generate 10 cards
  isSidebarCollapsed: boolean = false;
  projectName: string = 'NY Judgment Tracking'; // Default project name
  currentSearchQuery: string = '';
  viewMode: 'grid' | 'table' = 'grid';
  showResults: boolean = false;
  
  
  // Tooltip visibility for first card badges (click-based)
  firstCardTooltips: { [key: string]: boolean } = {
    judge: false,
    status: false,
    type: false,
    court: false
  };

  // Tooltip visibility for first card file action badges (click-based)
  firstCardFileActionTooltips: { [key: string]: boolean } = {
    tracker: false,
    tag: false
  };
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('ProjectHome component ngOnInit');
    
    // Check if we should restore search state
    const navigation = this.router.getCurrentNavigation();
    const shouldPreserveState = navigation?.extras?.state?.['preserveSearchState'];
    
    console.log('Navigation state:', navigation?.extras?.state);
    console.log('Should preserve state:', shouldPreserveState);
    
    // Simplified logic:
    // If coming from case detail (preserveSearchState = true) OR if there's saved state, restore it
    // Only clear on actual page refresh
    
    if (shouldPreserveState) {
      console.log('Explicitly preserving search state from case detail...');
      this.restoreSearchState();
    } else {
      // Check if this is a page refresh or direct navigation
      const currentUrl = this.router.url;
      const referrer = document.referrer;
      const isDirectNavigation = !referrer || !referrer.includes(window.location.origin);
      
      if (isDirectNavigation) {
        console.log('Direct navigation/refresh - showing empty state');
        this.clearSearchState();
      } else {
        console.log('Internal navigation - attempting to restore search state');
        this.restoreSearchState();
      }
    }
  }

  ngAfterViewInit(): void {
    console.log('ProjectHomeComponent AfterViewInit - SideNav available:', !!this.sideNav);
    if (this.sideNav) {
      console.log('SideNav component is ready');
    }
  }

  onSearch(query: string): void {
    console.log('Searching cases for:', query);
    this.currentSearchQuery = query; // Update the current search query
    
    // Add to search history if query is not empty
    if (query.trim()) {
      console.log('Attempting to add to search history:', query.trim());
      if (this.sideNav) {
        console.log('SideNav is available, calling addToSearchHistory');
        this.sideNav.addToSearchHistory(query.trim());
      } else {
        console.warn('SideNav is not available! ViewChild might not be initialized');
        // Fallback: try to access after a short delay
        setTimeout(() => {
          if (this.sideNav) {
            console.log('SideNav available after timeout, adding to history');
            this.sideNav.addToSearchHistory(query.trim());
          } else {
            console.error('SideNav still not available after timeout');
          }
        }, 100);
      }
    } else {
      console.log('Empty query, not adding to history');
    }
    
    this.isSearching = true;
    this.hasSearched = true;
    this.showResults = false;
    this.isSearchBarExpanded = false; // Reset expansion state when new search is performed
    
    // Save search state to localStorage
    this.saveSearchState();
    
    // Simulate search with loading, then show results (shorter timeout for testing)
    setTimeout(() => {
      this.isSearching = false;
      this.showResults = true;
      // Save updated state after search completes
      this.saveSearchState();
    }, 1500);
  }

  onNavItemClick(item: NavItem): void {
    console.log('Navigation item clicked:', item);
  }

  onSidebarToggle(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onProjectClick(): void {
    console.log('Project clicked:', this.projectName);
    // Navigate to project dashboard or overview
  }

  onSearchQueryClick(): void {
    console.log('Search query clicked:', this.currentSearchQuery);
    // Refresh search or show advanced search options
  }

  toggleViewMode(mode: 'grid' | 'table'): void {
    this.viewMode = mode;
    console.log('View mode changed to:', mode);
  }

  onExpandSearch(): void {
    // Expand search bar without affecting results display
    this.isSearchBarExpanded = true;
    console.log('Search expanded - maintaining results visible');
  }

  onCollapseSearch(): void {
    // Collapse search bar to compact version
    this.isSearchBarExpanded = false;
    console.log('Search collapsed to compact version');
  }

  onCaseClick(caseId: string, caseTitle?: string): void {
    // Save current search state before navigating
    this.saveSearchState();
    
    this.router.navigate(['/case', caseId], {
      queryParams: { title: caseTitle },
      state: { preserveSearchState: true }
    });
  }

  // Generate a search-related case title
  getSearchRelatedTitle(): string {
    if (this.currentSearchQuery.trim()) {
      // Create a realistic case title that includes elements from the search query
      const query = this.currentSearchQuery.trim().toUpperCase();
      
      // Different case title patterns based on search query
      if (query.includes('JOHN') || query.includes('JOHNSON')) {
        return `${query} VS CALIFORNIA DEPARTMENT OF JUSTICE`;
      } else if (query.includes('MEDICAL') || query.includes('HEALTH')) {
        return `MEDICAL PROFESSIONALS GROUP VS ${query} INSURANCE CORP`;
      } else if (query.includes('TECH') || query.includes('TECHNOLOGY')) {
        return `${query} INNOVATIONS INC VS PATENT LICENSING AUTHORITY`;
      } else if (query.includes('BANK') || query.includes('FINANCIAL')) {
        return `FIRST NATIONAL BANK VS ${query} HOLDINGS LLC`;
      } else {
        // Generic pattern for other searches
        return `${query} ENTERPRISES LLC VS STATE REGULATORY COMMISSION`;
      }
    }
    
    // Default title if no search query
    return 'AMBER LAUREL BAPTISTE VS MICHAEL LEWIS GOGUEN';
  }

  // Save search state to localStorage
  private saveSearchState(): void {
    const searchState = {
      currentSearchQuery: this.currentSearchQuery,
      hasSearched: this.hasSearched,
      showResults: this.showResults,
      isSearchBarExpanded: this.isSearchBarExpanded,
      viewMode: this.viewMode,
      timestamp: Date.now()
    };
    
    try {
      localStorage.setItem('casesSearchState', JSON.stringify(searchState));
      console.log('Search state saved:', searchState);
    } catch (error) {
      console.warn('Failed to save search state:', error);
    }
  }

  // Method to get current sidebar active item for preserving navigation state
  getCurrentSidebarState(): string {
    // This will be used by the app to determine which sidebar item should be active
    // when returning from case detail page
    return 'project-home'; // Default fallback
  }

  // Restore search state from localStorage
  private restoreSearchState(): void {
    try {
      const savedState = localStorage.getItem('casesSearchState');
      console.log('Attempting to restore search state. Saved state:', savedState);
      
      if (savedState) {
        const searchState = JSON.parse(savedState);
        
        // Check if state is not too old (24 hours)
        const twentyFourHours = 24 * 60 * 60 * 1000;
        if (Date.now() - searchState.timestamp < twentyFourHours) {
          this.currentSearchQuery = searchState.currentSearchQuery || '';
          this.hasSearched = searchState.hasSearched || false;
          this.showResults = searchState.showResults || false;
          this.isSearchBarExpanded = searchState.isSearchBarExpanded || false;
          this.viewMode = searchState.viewMode || 'grid';
          this.isSearching = false; // Make sure not stuck in searching state
          
          console.log('Search state restored successfully:', {
            query: this.currentSearchQuery,
            hasSearched: this.hasSearched,
            showResults: this.showResults,
            isExpanded: this.isSearchBarExpanded,
            viewMode: this.viewMode
          });
        } else {
          // Clear old state
          localStorage.removeItem('casesSearchState');
          console.log('Search state expired and cleared');
          this.clearSearchState();
        }
      } else {
        console.log('No saved search state found');
        this.clearSearchState();
      }
    } catch (error) {
      console.warn('Failed to restore search state:', error);
      localStorage.removeItem('casesSearchState');
      this.clearSearchState();
    }
  }

  // Clear search state to show empty state
  private clearSearchState(): void {
    console.log('Clearing search state...');
    this.currentSearchQuery = '';
    this.hasSearched = false;
    this.showResults = false;
    this.isSearchBarExpanded = false;
    this.viewMode = 'grid';
    this.isSearching = false;
    
    // Clear all tooltip states
    Object.keys(this.firstCardTooltips).forEach(key => {
      this.firstCardTooltips[key] = false;
    });
    Object.keys(this.firstCardFileActionTooltips).forEach(key => {
      this.firstCardFileActionTooltips[key] = false;
    });
    
    // Clear localStorage as well
    localStorage.removeItem('casesSearchState');
    console.log('Search state cleared - empty state should be visible');
  }

  // Toggle tooltip visibility for first card badges
  toggleFirstCardTooltip(tooltipKey: string, event?: Event): void {
    if (event) {
      event.stopPropagation(); // Prevent event bubbling
    }
    
    // Close all other tooltips first
    Object.keys(this.firstCardTooltips).forEach(key => {
      if (key !== tooltipKey) {
        this.firstCardTooltips[key] = false;
      }
    });
    
    // Toggle the clicked tooltip
    this.firstCardTooltips[tooltipKey] = !this.firstCardTooltips[tooltipKey];
    console.log(`First card tooltip ${tooltipKey}:`, this.firstCardTooltips[tooltipKey]);
  }

  // Close all first card tooltips (for clicking outside)
  closeAllFirstCardTooltips(): void {
    Object.keys(this.firstCardTooltips).forEach(key => {
      this.firstCardTooltips[key] = false;
    });
    Object.keys(this.firstCardFileActionTooltips).forEach(key => {
      this.firstCardFileActionTooltips[key] = false;
    });
  }

  // Toggle tooltip visibility for first card file action badges
  toggleFirstCardFileActionTooltip(tooltipKey: string, event?: Event): void {
    if (event) {
      event.stopPropagation(); // Prevent event bubbling
    }
    
    // Close all other file action tooltips first
    Object.keys(this.firstCardFileActionTooltips).forEach(key => {
      if (key !== tooltipKey) {
        this.firstCardFileActionTooltips[key] = false;
      }
    });
    
    // Also close info badge tooltips
    Object.keys(this.firstCardTooltips).forEach(key => {
      this.firstCardTooltips[key] = false;
    });
    
    // Toggle the clicked tooltip
    this.firstCardFileActionTooltips[tooltipKey] = !this.firstCardFileActionTooltips[tooltipKey];
    console.log(`First card file action tooltip ${tooltipKey}:`, this.firstCardFileActionTooltips[tooltipKey]);
  }

}
