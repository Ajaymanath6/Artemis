import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface SearchType {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  animations: [
    trigger('slideIn', [
      state('out', style({
        transform: 'translateX(100%)'
      })),
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition('out => in', [
        animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
      ]),
      transition('in => out', [
        animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)')
      ])
    ])
  ]
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();

  searchQuery: string = '';
  isProDropdownOpen: boolean = false;
  selectedProOption: string = 'natural';
  isFilterPanelOpen: boolean = false;
  
  searchTypes: SearchType[] = [
    { id: 'cases', label: 'Cases', icon: 'folder-open-line' },
    { id: 'attorneys', label: 'Attorneys', icon: 'user-line' },
    { id: 'law-firms', label: 'Law Firms', icon: 'building-line' },
    { id: 'judges', label: 'Judges', icon: 'scales-line' },
    { id: 'parties', label: 'Parties', icon: 'team-line' }
  ];
  
  selectedSearchType: SearchType = this.searchTypes[0]; // Default to Cases

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
  
  selectSearchType(type: SearchType): void {
    this.selectedSearchType = type;
    console.log('Selected search type:', type);
    // Update placeholder or search behavior based on type
    // Frontend prototype - no backend integration
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
