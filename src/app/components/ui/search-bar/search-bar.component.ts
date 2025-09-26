import { Component, EventEmitter, Output, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface SearchType {
  id: string;
  label: string;
  icon: string;
}

interface CaseFilters {
  caseName: string;
  caseNumber: string;
  filingDateFrom: string;
  filingDateTo: string;
  docketText: string;
  docketDate: string;
}

interface JudgeFilters {
  judgeName: string;
  judgeAddress: string;
  judgeEmail: string;
}

interface AttorneyFilters {
  attorneyName: string;
  barNumber: string;
  attorneyEmail: string;
  attorneyAddress: string;
}

interface PartyFilters {
  partyName: string;
  partyAddress: string;
  partyRoleGroup: string;
  partyEmail: string;
  partyRole: string;
}

interface DocumentFilters {
  documentName: string;
  documentType: string;
  documentDate: string;
}

interface OtherFilters {
  court: string;
  caseType: string;
  caseStatus: string;
}

interface ExpandedSections {
  case: boolean;
  judge: boolean;
  attorney: boolean;
  party: boolean;
  document: boolean;
  other: boolean;
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
  @Output() expand = new EventEmitter<void>(); // Emit when expanding search bar
  @Output() collapse = new EventEmitter<void>(); // Emit when collapsing search bar
  @Input() isCollapsed: boolean = false; // Allow parent to control collapsed state
  @Input() searchQuery: string = ''; // Allow parent to set search query
  @Input() showCollapseButton: boolean = false; // Show collapse button when results are visible
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
  
  // Filter properties
  anywhereSearch: string = '';
  
  expandedSections: ExpandedSections = {
    case: false,
    judge: false,
    attorney: false,
    party: false,
    document: false,
    other: false
  };
  
  caseFilters: CaseFilters = {
    caseName: '',
    caseNumber: '',
    filingDateFrom: '',
    filingDateTo: '',
    docketText: '',
    docketDate: ''
  };
  
  judgeFilters: JudgeFilters = {
    judgeName: '',
    judgeAddress: '',
    judgeEmail: ''
  };
  
  attorneyFilters: AttorneyFilters = {
    attorneyName: '',
    barNumber: '',
    attorneyEmail: '',
    attorneyAddress: ''
  };
  
  partyFilters: PartyFilters = {
    partyName: '',
    partyAddress: '',
    partyRoleGroup: '',
    partyEmail: '',
    partyRole: ''
  };
  
  documentFilters: DocumentFilters = {
    documentName: '',
    documentType: '',
    documentDate: ''
  };
  
  otherFilters: OtherFilters = {
    court: '',
    caseType: '',
    caseStatus: ''
  };
  
  // Store original filter values for cancel functionality
  private originalFilters: any = {};
  
  // Filter counter for badge
  activeFilterCount: number = 0;
  
  // Search state management
  isSearching: boolean = false;
  
  // Use computed property to check collapsed state
  get isSearchCollapsed(): boolean {
    return this.isCollapsed;
  }

  onSearch(): void {
    if (this.searchQuery && this.searchQuery.trim().length > 0) {
      this.isSearching = true;
      this.search.emit(this.searchQuery);
      
      // Simulate search completion after 2 seconds
      setTimeout(() => {
        this.isSearching = false;
      }, 2000);
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.isSearching = false;
    this.search.emit('');
  }
  
  expandSearchBar(): void {
    this.isSearching = false;
    this.expand.emit(); // Notify parent to expand search bar
  }
  
  collapseSearchBar(): void {
    this.collapse.emit(); // Notify parent to collapse search bar
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
    if (!this.isFilterPanelOpen) {
      // Store original filter values when opening and update count
      this.storeOriginalFilters();
      this.updateActiveFilterCount();
    }
    this.isFilterPanelOpen = !this.isFilterPanelOpen;
  }

  closeFilterPanel(): void {
    this.isFilterPanelOpen = false;
  }
  
  toggleFilterSection(section: keyof ExpandedSections): void {
    this.expandedSections[section] = !this.expandedSections[section];
  }
  
  storeOriginalFilters(): void {
    this.originalFilters = {
      anywhereSearch: this.anywhereSearch,
      caseFilters: { ...this.caseFilters },
      judgeFilters: { ...this.judgeFilters },
      attorneyFilters: { ...this.attorneyFilters },
      partyFilters: { ...this.partyFilters },
      documentFilters: { ...this.documentFilters },
      otherFilters: { ...this.otherFilters }
    };
  }
  
  restoreOriginalFilters(): void {
    if (this.originalFilters) {
      this.anywhereSearch = this.originalFilters.anywhereSearch || '';
      this.caseFilters = { ...this.originalFilters.caseFilters };
      this.judgeFilters = { ...this.originalFilters.judgeFilters };
      this.attorneyFilters = { ...this.originalFilters.attorneyFilters };
      this.partyFilters = { ...this.originalFilters.partyFilters };
      this.documentFilters = { ...this.originalFilters.documentFilters };
      this.otherFilters = { ...this.originalFilters.otherFilters };
    }
  }

  clearAllFilters(): void {
    this.anywhereSearch = '';
    this.caseFilters = {
      caseName: '',
      caseNumber: '',
      filingDateFrom: '',
      filingDateTo: '',
      docketText: '',
      docketDate: ''
    };
    this.judgeFilters = {
      judgeName: '',
      judgeAddress: '',
      judgeEmail: ''
    };
    this.attorneyFilters = {
      attorneyName: '',
      barNumber: '',
      attorneyEmail: '',
      attorneyAddress: ''
    };
    this.partyFilters = {
      partyName: '',
      partyAddress: '',
      partyRoleGroup: '',
      partyEmail: '',
      partyRole: ''
    };
    this.documentFilters = {
      documentName: '',
      documentType: '',
      documentDate: ''
    };
    this.otherFilters = {
      court: '',
      caseType: '',
      caseStatus: ''
    };
    
    this.updateActiveFilterCount();
    console.log('All filters cleared');
  }
  
  updateActiveFilterCount(): void {
    let count = 0;
    
    // Count anywhere search - only if not empty
    if (this.anywhereSearch && this.anywhereSearch.trim()) count++;
    
    // Count case filters - only if not empty
    Object.values(this.caseFilters).forEach(value => {
      if (value && value.toString().trim()) count++;
    });
    
    // Count judge filters - only if not empty
    Object.values(this.judgeFilters).forEach(value => {
      if (value && value.toString().trim()) count++;
    });
    
    // Count attorney filters - only if not empty
    Object.values(this.attorneyFilters).forEach(value => {
      if (value && value.toString().trim()) count++;
    });
    
    // Count party filters - only if not empty
    Object.values(this.partyFilters).forEach(value => {
      if (value && value.toString().trim()) count++;
    });
    
    // Count document filters - only if not empty
    Object.values(this.documentFilters).forEach(value => {
      if (value && value.toString().trim()) count++;
    });
    
    // Count other filters - only if not empty
    Object.values(this.otherFilters).forEach(value => {
      if (value && value.toString().trim()) count++;
    });
    
    this.activeFilterCount = count;
  }
  
  resetFilters(): void {
    this.clearAllFilters();
    this.isFilterPanelOpen = false;
    console.log('All filters reset');
  }

  applyFilters(): void {
    this.updateActiveFilterCount();
    
    console.log('Applying advanced filters:', {
      anywhereSearch: this.anywhereSearch,
      caseFilters: this.caseFilters,
      judgeFilters: this.judgeFilters,
      attorneyFilters: this.attorneyFilters,
      partyFilters: this.partyFilters,
      documentFilters: this.documentFilters,
      otherFilters: this.otherFilters,
      activeFilterCount: this.activeFilterCount
    });
    
    this.isFilterPanelOpen = false;
    // Frontend prototype - no backend integration
    // In a real application, this would trigger a search with the applied filters
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
