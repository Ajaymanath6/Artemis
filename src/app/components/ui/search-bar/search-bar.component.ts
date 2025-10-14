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

interface FilterChip {
  id: string;
  type: 'document' | 'party' | 'attorney' | 'judge' | 'case' | 'other';
  label: string; // e.g., "Document", "Party", "Attorney"
  value: string; // e.g., "Petition for Probate", "Wilson LLC"
  icon: string; // Icon class
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
  @Output() filterSearch = new EventEmitter<{filterType: string, filterValue: string}>(); // Emit when filter search is applied
  @Input() isCollapsed: boolean = false; // Allow parent to control collapsed state
  @Input() searchQuery: string = ''; // Allow parent to set search query
  @Input() showCollapseButton: boolean = false; // Show collapse button when results are visible
  @Input() showBackButton: boolean = true; // Show back button in collapsed view
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

  // Active filter chips displayed in search bar
  activeFilterChips: FilterChip[] = [];
  
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
    // Check if there are active filter chips first
    if (this.activeFilterChips.length > 0) {
      // Use the first chip (priority order: Document > Party > Attorney > Judge)
      const chip = this.activeFilterChips[0];
      console.log(`🔍 Search with ${chip.label.toUpperCase()} filter chip - will show "${chip.label}" snippets`);
      console.log('Active chip:', chip);
      
      this.filterSearch.emit({
        filterType: chip.type,
        filterValue: chip.value
      });
      
      this.isSearching = true;
      setTimeout(() => {
        this.isSearching = false;
      }, 2000);
      return;
    }
    
    // Check if any filters are applied directly (fallback)
    const hasDocumentFilter = this.documentFilters.documentName && this.documentFilters.documentName.trim();
    const hasPartyFilter = this.partyFilters.partyName && this.partyFilters.partyName.trim();
    const hasAttorneyFilter = this.attorneyFilters.attorneyName && this.attorneyFilters.attorneyName.trim();
    const hasJudgeFilter = this.judgeFilters.judgeName && this.judgeFilters.judgeName.trim();
    
    // If document filter is applied, trigger filter search with snippets
    if (hasDocumentFilter) {
      console.log('🔍 Search with DOCUMENT filter - will show "Matching Document" snippets');
      this.filterSearch.emit({
        filterType: 'document',
        filterValue: this.documentFilters.documentName
      });
      this.isSearching = true;
      setTimeout(() => {
        this.isSearching = false;
      }, 2000);
      return;
    }
    
    // If party filter is applied
    if (hasPartyFilter) {
      console.log('🔍 Search with PARTY filter - will show "Matching Party" snippets');
      this.filterSearch.emit({
        filterType: 'party',
        filterValue: this.partyFilters.partyName
      });
      this.isSearching = true;
      setTimeout(() => {
        this.isSearching = false;
      }, 2000);
      return;
    }
    
    // If attorney filter is applied
    if (hasAttorneyFilter) {
      console.log('🔍 Search with ATTORNEY filter - will show "Matching Attorney" snippets');
      this.filterSearch.emit({
        filterType: 'attorney',
        filterValue: this.attorneyFilters.attorneyName
      });
      this.isSearching = true;
      setTimeout(() => {
        this.isSearching = false;
      }, 2000);
      return;
    }
    
    // If judge filter is applied
    if (hasJudgeFilter) {
      console.log('🔍 Search with JUDGE filter - will show "Matching Judge" snippets');
      this.filterSearch.emit({
        filterType: 'judge',
        filterValue: this.judgeFilters.judgeName
      });
      this.isSearching = true;
      setTimeout(() => {
        this.isSearching = false;
      }, 2000);
      return;
    }
    
    // Otherwise, regular search (no filters, no snippets)
    if (this.searchQuery && this.searchQuery.trim().length > 0) {
      console.log('📋 Regular direct search (no filters applied) - NO snippets');
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
    
    // Clear filter chips
    this.activeFilterChips = [];
    
    this.updateActiveFilterCount();
    console.log('🗑️ All filters and chips cleared');
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
    
    console.log('✅ Filters applied (not searching yet - user must click search arrow):', {
      anywhereSearch: this.anywhereSearch,
      caseFilters: this.caseFilters,
      judgeFilters: this.judgeFilters,
      attorneyFilters: this.attorneyFilters,
      partyFilters: this.partyFilters,
      documentFilters: this.documentFilters,
      otherFilters: this.otherFilters,
      activeFilterCount: this.activeFilterCount
    });
    
    // Create filter chips for active filters
    this.activeFilterChips = [];
    
    // Document filter chip
    if (this.documentFilters.documentName && this.documentFilters.documentName.trim()) {
      this.activeFilterChips.push({
        id: 'document-' + Date.now(),
        type: 'document',
        label: 'Document',
        value: this.documentFilters.documentName,
        icon: 'ri-folder-line'
      });
    }
    
    // Party filter chip
    if (this.partyFilters.partyName && this.partyFilters.partyName.trim()) {
      this.activeFilterChips.push({
        id: 'party-' + Date.now(),
        type: 'party',
        label: 'Party',
        value: this.partyFilters.partyName,
        icon: 'ri-team-line'
      });
    }
    
    // Attorney filter chip
    if (this.attorneyFilters.attorneyName && this.attorneyFilters.attorneyName.trim()) {
      this.activeFilterChips.push({
        id: 'attorney-' + Date.now(),
        type: 'attorney',
        label: 'Attorney',
        value: this.attorneyFilters.attorneyName,
        icon: 'ri-user-line'
      });
    }
    
    // Judge filter chip
    if (this.judgeFilters.judgeName && this.judgeFilters.judgeName.trim()) {
      this.activeFilterChips.push({
        id: 'judge-' + Date.now(),
        type: 'judge',
        label: 'Judge',
        value: this.judgeFilters.judgeName,
        icon: 'ri-scales-line'
      });
    }
    
    // Case filter chip
    if (this.caseFilters.caseName && this.caseFilters.caseName.trim()) {
      this.activeFilterChips.push({
        id: 'case-' + Date.now(),
        type: 'case',
        label: 'Case Name',
        value: this.caseFilters.caseName,
        icon: 'ri-folder-open-line'
      });
    }
    
    console.log('🎯 Created filter chips:', this.activeFilterChips);
    
    // Clear the search query input when using filters (only show chips, not text in search bar)
    if (this.activeFilterChips.length > 0) {
      this.searchQuery = '';
      console.log('🧹 Cleared search query - showing only filter chips');
    }
    
    // Just close the panel - don't trigger search yet
    // User must click the search arrow button to actually search
    this.isFilterPanelOpen = false;
    console.log('💡 Filter panel closed. Click search arrow to search with these filters.');
  }

  // Remove a filter chip
  removeFilterChip(chipId: string): void {
    const chip = this.activeFilterChips.find(c => c.id === chipId);
    if (!chip) return;
    
    console.log('🗑️ Removing filter chip:', chip);
    
    // Clear the corresponding filter
    switch (chip.type) {
      case 'document':
        this.documentFilters.documentName = '';
        break;
      case 'party':
        this.partyFilters.partyName = '';
        break;
      case 'attorney':
        this.attorneyFilters.attorneyName = '';
        break;
      case 'judge':
        this.judgeFilters.judgeName = '';
        break;
      case 'case':
        this.caseFilters.caseName = '';
        break;
    }
    
    // Remove chip from array
    this.activeFilterChips = this.activeFilterChips.filter(c => c.id !== chipId);
    
    // Update filter count
    this.updateActiveFilterCount();
    
    console.log('✅ Filter chip removed. Active chips:', this.activeFilterChips);
  }
  
  // Click on chip to edit - re-open filter panel
  editFilterChip(chip: FilterChip): void {
    console.log('✏️ Editing filter chip:', chip);
    
    // First, collapse all sections
    this.expandedSections = {
      case: false,
      judge: false,
      attorney: false,
      party: false,
      document: false,
      other: false
    };
    
    // Then expand only the clicked chip's section
    switch (chip.type) {
      case 'document':
        this.expandedSections.document = true;
        console.log('📄 Opening Document filter section with value:', chip.value);
        break;
      case 'party':
        this.expandedSections.party = true;
        console.log('👤 Opening Party filter section with value:', chip.value);
        break;
      case 'attorney':
        this.expandedSections.attorney = true;
        console.log('⚖️ Opening Attorney filter section with value:', chip.value);
        break;
      case 'judge':
        this.expandedSections.judge = true;
        console.log('🏛️ Opening Judge filter section with value:', chip.value);
        break;
      case 'case':
        this.expandedSections.case = true;
        console.log('📁 Opening Case filter section with value:', chip.value);
        break;
    }
    
    // Open the filter panel
    this.isFilterPanelOpen = true;
    console.log('✅ Filter panel opened with', chip.label, 'section expanded');
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
