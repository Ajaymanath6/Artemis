import { Component, OnInit } from '@angular/core';
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
export class CasesComponent implements OnInit {
  isSearching: boolean = false;
  hasSearched: boolean = false;
  isSearchBarExpanded: boolean = false; // New property to track search bar expansion
  skeletonCards = Array(10).fill(0); // Create array for 10 skeleton cards
  isSidebarCollapsed: boolean = false;
  projectName: string = 'NY Judgment Tracking'; // Default project name
  currentSearchQuery: string = '';
  viewMode: 'grid' | 'table' = 'grid';
  showResults: boolean = false;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check if we should restore search state
    const navigation = this.router.getCurrentNavigation();
    const shouldPreserveState = navigation?.extras?.state?.['preserveSearchState'];
    
    if (shouldPreserveState) {
      this.restoreSearchState();
    } else {
      // Check for saved search state in localStorage on page load
      this.restoreSearchState();
    }
  }

  onSearch(query: string): void {
    console.log('Searching cases for:', query);
    this.currentSearchQuery = query; // Update the current search query
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
      queryParams: { title: caseTitle }
    });
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

  // Restore search state from localStorage
  private restoreSearchState(): void {
    try {
      const savedState = localStorage.getItem('casesSearchState');
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
          
          console.log('Search state restored:', searchState);
        } else {
          // Clear old state
          localStorage.removeItem('casesSearchState');
          console.log('Search state expired and cleared');
        }
      }
    } catch (error) {
      console.warn('Failed to restore search state:', error);
      localStorage.removeItem('casesSearchState');
    }
  }
}
