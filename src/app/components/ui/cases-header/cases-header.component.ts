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
  
  // Header outputs
  @Output() sidebarToggle = new EventEmitter<void>();
  @Output() projectClick = new EventEmitter<void>();
  @Output() searchQueryClick = new EventEmitter<void>();
  
  // Search outputs
  @Output() search = new EventEmitter<string>();
  @Output() expandSearch = new EventEmitter<void>();
  @Output() collapseSearch = new EventEmitter<void>();

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

  onExpandSearch(): void {
    this.expandSearch.emit();
  }

  onCollapseSearch(): void {
    this.collapseSearch.emit();
  }
}
