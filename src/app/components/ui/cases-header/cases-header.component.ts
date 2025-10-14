import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../../../layouts/app-header/app-header.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-cases-header',
  standalone: true,
  imports: [CommonModule, AppHeaderComponent, SearchBarComponent],
  templateUrl: './cases-header.component.html',
  styleUrls: ['./cases-header.component.css']
})
export class CasesHeaderComponent {
  // Header inputs
  @Input() isSidebarCollapsed: boolean = false;
  @Input() projectName: string = '';
  @Input() currentSearchQuery: string = '';
  @Input() hasSearched: boolean = false; // Track if user has searched
  @Input() showCollapseButton: boolean = false; // Show collapse button when results are visible
  @Input() showBackButton: boolean = true; // Show back button in search bar
  @Input() showButtonGroup: boolean = false; // Show Create Alert and Collapse button group
  
  // Header outputs
  @Output() sidebarToggle = new EventEmitter<void>();
  @Output() projectClick = new EventEmitter<void>();
  @Output() searchQueryClick = new EventEmitter<void>();
  
  // Search outputs
  @Output() search = new EventEmitter<string>();
  @Output() expandSearch = new EventEmitter<void>();
  @Output() collapseSearch = new EventEmitter<void>();
  @Output() filterSearch = new EventEmitter<{filterType: string, filterValue: string}>(); // Filter-based search
  
  // Alert output
  @Output() createAlert = new EventEmitter<void>();

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
    this.search.emit(query);
  }

  onFilterSearch(filterData: {filterType: string, filterValue: string}): void {
    console.log('Cases Header: Filter search triggered', filterData);
    this.filterSearch.emit(filterData);
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
}
