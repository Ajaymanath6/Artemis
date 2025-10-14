import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CasesLayoutComponent } from '../../layouts/cases-layout/cases-layout.component';
import { CasesHeaderComponent } from '../../components/ui/cases-header/cases-header.component';
import { SideNavComponent, NavItem } from '../../components/navigation/side-nav/side-nav.component';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [CommonModule, CasesLayoutComponent, CasesHeaderComponent, SideNavComponent],
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit, AfterViewInit {
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
  isFilterBasedSearch: boolean = false; // Track if search used filters (shows match snippets)
  currentFilterType: string = ''; // Track which filter was used (document, party, attorney, judge)
  
  // Card visibility map - defines which cards show for which filter types
  // Card numbers: 1=first card (index 0), 2=second card (index 1), etc.
  cardMatchesFilter: { [key: string]: number[] } = {
    'document': [1, 2, 4], // Cards 1, 2, 4 have document snippets
    'party': [3], // Card 3 has party snippet
    'attorney': [], // No cards currently have attorney snippets
    'judge': [], // No cards currently have judge snippets
    'direct': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // Direct search shows all cards
  };
  
  
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
    console.log('Cases component ngOnInit');
    
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
    console.log('CasesComponent AfterViewInit - SideNav available:', !!this.sideNav);
    if (this.sideNav) {
      console.log('SideNav component is ready');
    }
  }

  onSearch(query: string): void {
    console.log('Searching cases for:', query);
    this.currentSearchQuery = query; // Update the current search query
    
    // Direct search bar query = title match only, no filter
    this.isFilterBasedSearch = false; // Direct search shows only matching titles
    
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

  // Method to trigger filter-based search (e.g., search by document name, attorney, etc.)
  // This should be called when user applies advanced filters
  // 
  // USAGE EXAMPLE (from filter UI component):
  // - User opens "Advanced Search" modal
  // - User selects "Search by: Document Name"
  // - User types "Probate Petition"
  // - On submit, call: this.casesComponent.onFilterSearch('document', 'Probate Petition')
  // - Results will show match snippets explaining why each case appears
  onFilterSearch(filterType: string, filterValue: string): void {
    console.log(`✅ Filter search triggered: ${filterType} = ${filterValue}`);
    
    this.currentSearchQuery = filterValue;
    this.isFilterBasedSearch = true; // Filter search shows match snippets
    this.currentFilterType = filterType; // Track which type of filter (document, party, etc.)
    
    console.log(`🔍 Will show "${filterType}" match snippets for this filter-based search`);
    
    // Add to search history
    if (filterValue.trim()) {
      if (this.sideNav) {
        this.sideNav.addToSearchHistory(filterValue.trim());
      }
    }
    
    this.isSearching = true;
    this.hasSearched = true;
    this.showResults = false;
    this.isSearchBarExpanded = false; // Collapse search bar to show results immediately!
    
    // Save search state
    this.saveSearchState();
    
    // Simulate search with loading, then show results automatically
    setTimeout(() => {
      this.isSearching = false;
      this.showResults = true;
      // Save updated state after search completes
      this.saveSearchState();
      console.log(`✅ Filter search complete - results displayed with ${filterType} snippets`);
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

  // Generate dynamic snippet text based on search query
  // This ensures the snippet includes the actual word the user typed
  getMatchingDocumentSnippet(cardIndex: number): string {
    const query = this.currentSearchQuery.trim().toLowerCase();
    
    // Different document snippets for different cards that include the search term
    if (query.includes('motion')) {
      const snippets = [
        `Motion for Summary Judgment - Civil Procedure`,
        `Motion to Dismiss - Procedural Challenge`,
        `Motion for Preliminary Injunction - Emergency Relief`,
        `Motion to Compel Discovery - Document Production`
      ];
      return snippets[cardIndex % snippets.length];
    } else if (query.includes('petition')) {
      const snippets = [
        `Petition - 2522-AC - MRM Management LLC v Lucretia Hall John Doe`,
        `Petition for Writ of Mandamus - Administrative Review`,
        `Petition for Declaratory Relief - Rights Determination`,
        `Probate Petition - Estate Distribution Contest`
      ];
      return snippets[cardIndex % snippets.length];
    } else if (query.includes('brief')) {
      const snippets = [
        `Appellate Brief - Summary Judgment Review`,
        `Brief in Support of Motion - Legal Arguments`,
        `Reply Brief - Counter-Arguments and Analysis`,
        `Amicus Brief - Third Party Perspective`
      ];
      return snippets[cardIndex % snippets.length];
    } else if (query.includes('complaint')) {
      const snippets = [
        `Original Complaint - Civil Action Filed`,
        `Amended Complaint - Updated Claims`,
        `Cross-Complaint - Counterclaims Asserted`,
        `Third-Party Complaint - Additional Defendants`
      ];
      return snippets[cardIndex % snippets.length];
    } else if (query.includes('order')) {
      const snippets = [
        `Court Order - Discovery Scheduling`,
        `Order Granting Motion - Judgment Entered`,
        `Order Denying Relief - Procedural Ruling`,
        `Final Order - Case Disposition`
      ];
      return snippets[cardIndex % snippets.length];
    } else if (query.includes('agreement')) {
      const snippets = [
        `Settlement Agreement - Dispute Resolution`,
        `Stipulation and Agreement - Parties Consent`,
        `Agreement on Discovery - Procedural Terms`,
        `Joint Agreement - Cooperative Filing`
      ];
      return snippets[cardIndex % snippets.length];
    } else {
      // Default fallback snippets that include generic document types
      const snippets = [
        `Petition - 2522-AC - MRM Management LLC v Lucretia Hall John Doe`,
        `Commercial Contract Dispute - State Manufacturing Entity`,
        `Motion for Summary Judgment - Administrative Appeal`,
        `Probate Petition - Estate Distribution Contest`
      ];
      return snippets[cardIndex % snippets.length];
    }
  }

  // Save search state to localStorage
  private saveSearchState(): void {
    const searchState = {
      currentSearchQuery: this.currentSearchQuery,
      hasSearched: this.hasSearched,
      showResults: this.showResults,
      isSearchBarExpanded: this.isSearchBarExpanded,
      viewMode: this.viewMode,
      isFilterBasedSearch: this.isFilterBasedSearch,
      currentFilterType: this.currentFilterType,
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
          this.isFilterBasedSearch = searchState.isFilterBasedSearch || false;
          this.currentFilterType = searchState.currentFilterType || '';
          this.isSearching = false; // Make sure not stuck in searching state
          
          console.log('Search state restored successfully:', {
            query: this.currentSearchQuery,
            hasSearched: this.hasSearched,
            showResults: this.showResults,
            isExpanded: this.isSearchBarExpanded,
            viewMode: this.viewMode,
            isFilterBased: this.isFilterBasedSearch,
            filterType: this.currentFilterType
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
    this.isFilterBasedSearch = false; // Reset filter flag
    this.currentFilterType = ''; // Reset filter type
    
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

  // Check if a card should be visible based on current filter
  shouldShowCard(cardNumber: number): boolean {
    // If no search performed, don't show cards
    if (!this.hasSearched) {
      return false;
    }
    
    // If filter-based search, check if card matches the filter type
    if (this.isFilterBasedSearch && this.currentFilterType) {
      const matchingCards = this.cardMatchesFilter[this.currentFilterType as keyof typeof this.cardMatchesFilter] || [];
      const shouldShow = matchingCards.includes(cardNumber);
      
      if (!shouldShow) {
        console.log(`🚫 Card ${cardNumber} hidden - doesn't match ${this.currentFilterType} filter`);
      }
      
      return shouldShow;
    }
    
    // Direct search (no filter) - show all cards
    return true;
  }

}
