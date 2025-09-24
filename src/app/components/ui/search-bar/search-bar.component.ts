import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();

  searchQuery: string = '';
  isProDropdownOpen: boolean = false;
  selectedProOption: string = 'natural';
  isFilterPanelOpen: boolean = false;

  onSearch(): void {
    if (this.searchQuery && this.searchQuery.trim().length > 0) {
      this.search.emit(this.searchQuery);
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.search.emit('');
  }

  toggleProDropdown(): void {
    this.isProDropdownOpen = !this.isProDropdownOpen;
  }

  selectProOption(option: string): void {
    this.selectedProOption = option;
    this.isProDropdownOpen = false;
    console.log('Pro option selected:', option);
  }

  toggleFilterPanel(): void {
    this.isFilterPanelOpen = !this.isFilterPanelOpen;
  }

  closeFilterPanel(): void {
    this.isFilterPanelOpen = false;
  }

  clearFilters(): void {
    console.log('Clearing all filters');
    // Frontend prototype - no backend integration
  }

  applyFilters(): void {
    console.log('Applying filters');
    this.isFilterPanelOpen = false;
    // Frontend prototype - no backend integration
  }

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.isProDropdownOpen = false;
    }
  }

  // Close filter panel on escape key
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.isFilterPanelOpen) {
      this.closeFilterPanel();
    }
  }
}
