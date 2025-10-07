import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../../../layouts/app-header/app-header.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-header-compact',
  standalone: true,
  imports: [CommonModule, AppHeaderComponent, SearchBarComponent],
  templateUrl: './app-header-compact.component.html',
  styleUrls: ['./app-header-compact.component.css']
})
export class AppHeaderCompactComponent {
  // Header inputs
  @Input() isSidebarCollapsed: boolean = false;
  @Input() projectName: string = '';
  @Input() currentSearchQuery: string = '';
  @Input() hasSearched: boolean = false; // Track if user has searched
  @Input() showCollapseButton: boolean = false; // Show collapse button when results are visible
  @Input() showBackButton: boolean = true; // Show back button in search bar
  @Input() showButtonGroup: boolean = false; // Show Create Alert and Collapse button group
  @Input() isAlertPanelCollapsed: boolean = false; // Track alert panel state
  
  // Search state properties
  isSearching: boolean = false;
  evaluatedCount: number = 0;
  totalCount: number = 8000;
  lastUpdated: string = '18 min. ago';
  sortOption: string = 'Most recently published';
  showDefaultContent: boolean = true;
  
  // Header outputs
  @Output() sidebarToggle = new EventEmitter<void>();
  @Output() projectClick = new EventEmitter<void>();
  @Output() searchQueryClick = new EventEmitter<void>();
  
  // Search outputs
  @Output() search = new EventEmitter<string>();
  @Output() expandSearch = new EventEmitter<void>();
  @Output() collapseSearch = new EventEmitter<void>();
  
  // Alert outputs
  @Output() createAlert = new EventEmitter<void>();
  @Output() alertPanelToggle = new EventEmitter<void>(); // New output for alert panel toggle
  @Output() searchStateChanged = new EventEmitter<{isSearching: boolean, evaluatedCount: number, totalCount: number}>();

  onSidebarToggle(): void {
    this.sidebarToggle.emit();
  }

  onProjectClick(): void {
    this.projectClick.emit();
  }

  onSearchQueryClick(): void {
    this.searchQueryClick.emit();
  }

  onSearch(query: string): void {
    this.currentSearchQuery = query;
    this.isSearching = true;
    this.evaluatedCount = 0;
    
    // Emit initial search state
    this.searchStateChanged.emit({
      isSearching: this.isSearching,
      evaluatedCount: this.evaluatedCount,
      totalCount: this.totalCount
    });
    
    // Simulate progressive evaluation
    this.simulateEvaluation();
    
    this.search.emit(query);
  }

  private simulateEvaluation(): void {
    const interval = setInterval(() => {
      this.evaluatedCount += Math.floor(Math.random() * 50) + 10; // Random increment between 10-60
      
      if (this.evaluatedCount >= this.totalCount) {
        this.evaluatedCount = this.totalCount;
        this.isSearching = false;
        this.searchStateChanged.emit({
          isSearching: this.isSearching,
          evaluatedCount: this.evaluatedCount,
          totalCount: this.totalCount
        });
        clearInterval(interval);
      } else {
        this.searchStateChanged.emit({
          isSearching: this.isSearching,
          evaluatedCount: this.evaluatedCount,
          totalCount: this.totalCount
        });
      }
    }, 200); // Update every 200ms
    
    // Stop after 3 seconds maximum
    setTimeout(() => {
      this.isSearching = false;
      this.searchStateChanged.emit({
        isSearching: this.isSearching,
        evaluatedCount: this.evaluatedCount,
        totalCount: this.totalCount
      });
      clearInterval(interval);
    }, 3000);
  }

  onExpandSearch(): void {
    this.expandSearch.emit();
  }

  onCollapseSearch(): void {
    this.collapseSearch.emit();
  }

  onCreateAlert(): void {
    this.createAlert.emit();
  }

  onAlertPanelToggle(): void {
    this.alertPanelToggle.emit();
  }

  getDefaultSearchQuery(): string {
    return 'New alert';
  }
}
