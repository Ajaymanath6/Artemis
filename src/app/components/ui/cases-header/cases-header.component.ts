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
  
  // Header outputs
  @Output() sidebarToggle = new EventEmitter<void>();
  @Output() projectClick = new EventEmitter<void>();
  @Output() searchQueryClick = new EventEmitter<void>();
  
  // Search outputs
  @Output() search = new EventEmitter<string>();

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
}
