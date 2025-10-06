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

  onCreateAlert(): void {
    this.createAlert.emit();
  }

  onAlertPanelToggle(): void {
    this.alertPanelToggle.emit();
  }
}
