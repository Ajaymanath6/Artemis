import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SideNavComponent } from '../../components/navigation/side-nav/side-nav.component';
import { AppHeaderCompactComponent } from '../../components/ui/app-header-compact/app-header-compact.component';
import { AlertlistLayoutComponent } from '../../layouts/alertlist-layout/alertlist-layout.component';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    CommonModule,
    SideNavComponent,
    AppHeaderCompactComponent,
    AlertlistLayoutComponent
  ],
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  // Sidebar state
  isSidebarCollapsed: boolean = false;
  
  // Alert panel state
  isAlertPanelCollapsed: boolean = false;
  
  // Header state - configured for compact search
  projectName: string = 'NY Judgment Tracking';
  currentSearchQuery: string = '';
  hasSearched: boolean = true; // Always true to keep search compact
  showCollapseButton: boolean = false;
  
  // Search state
  searchQuery: string = '';
  isSearching: boolean = false;
  currentResearchQuestion: string = '';
  shouldUpdateAlertHeader: boolean = false;
  caseCount: number = 0;
  searchState = {
    isSearching: false,
    evaluatedCount: 0,
    totalCount: 8000
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Alerts page initialized');
    // Set default search query to show in header
    this.currentSearchQuery = 'New alert';
  }

  // Navigation methods
  onSidebarToggle(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  // Header methods
  onProjectClick(): void {
    console.log('Project clicked');
  }

  onSearchQueryClick(): void {
    console.log('Search query clicked');
  }

  // Search methods
  onSearch(query: string): void {
    console.log('Search query:', query);
    this.searchQuery = query;
    this.currentSearchQuery = query;
    this.isSearching = true;
    
    // Simulate search delay
    setTimeout(() => {
      this.isSearching = false;
    }, 1000);
  }

  onExpandSearch(): void {
    console.log('Search expanded');
  }

  onCollapseSearch(): void {
    console.log('Search collapsed');
    this.searchQuery = '';
    this.currentSearchQuery = '';
  }

  // Alert methods
  onCreateAlert(): void {
    console.log('Create alert clicked');
    console.log('Current research question:', this.currentResearchQuestion);
    
    // Collapse the main sidebar when create alert is clicked
    this.isSidebarCollapsed = true;
    
    // Expand the alert panel when create alert is clicked
    this.isAlertPanelCollapsed = false;
    
    // Show existing case data immediately when alert panel opens
    this.caseCount = 8; // Show all available cases
    
    // Don't update search bar, just trigger the spinner in alertlist layout
    if (this.currentResearchQuestion.trim()) {
      // Start the loading state for alertlist layout
      this.searchState.isSearching = true;
      this.searchState.evaluatedCount = 0;
      
      // Trigger alert panel header update
      this.shouldUpdateAlertHeader = true;
      
      // Reset the trigger after a short delay
      setTimeout(() => {
        this.shouldUpdateAlertHeader = false;
      }, 100);
      
      // Simulate the evaluation process
      this.simulateEvaluation();
    } else {
      console.log('No research question to search with - showing existing cases');
    }
  }

  onCloseAlert(): void {
    console.log('Alert panel close requested');
    // Handle close alert functionality
  }

  onSaveAlert(alertData: any): void {
    console.log('Saving alert:', alertData);
    
    // Update current research question from the alert data
    this.currentResearchQuestion = alertData.researchQuestion || '';
    
    // Start search process when Apply is clicked
    if (alertData.researchQuestion && alertData.researchQuestion.trim()) {
      console.log('Starting search for:', alertData.researchQuestion);
      
      // Start the loading state for alertlist layout
      this.searchState.isSearching = true;
      this.searchState.evaluatedCount = 0;
      
      // Keep the alert panel open to show results
      this.isAlertPanelCollapsed = false;
      
      // Trigger alert panel header update
      this.shouldUpdateAlertHeader = true;
      
      // Reset the trigger after a short delay
      setTimeout(() => {
        this.shouldUpdateAlertHeader = false;
      }, 100);
      
      // Simulate the evaluation process and show results
      this.simulateEvaluation();
      
      console.log('Search initiated successfully');
    } else {
      console.log('No research question provided for search');
    }
  }

  onAlertPanelToggle(): void {
    this.isAlertPanelCollapsed = !this.isAlertPanelCollapsed;
    console.log('Alert panel toggled:', this.isAlertPanelCollapsed ? 'collapsed' : 'expanded');
  }

  // Sidebar collapse request from alert layout
  onSidebarCollapseRequested(): void {
    this.isSidebarCollapsed = true;
    console.log('Main sidebar collapsed from alert layout');
  }

  // Alert panel collapse request from alert layout
  onAlertPanelCollapseRequested(): void {
    this.isAlertPanelCollapsed = true; // Always collapse when requested
    console.log('Alert panel collapsed from alert layout');
  }

  // Handle history alert selection
  onHistoryAlertSelected(researchQuestion: string): void {
    console.log('History alert selected:', researchQuestion);
    this.currentResearchQuestion = researchQuestion;
    // Expand the alert panel to show the selected alert
    this.isAlertPanelCollapsed = false;
    // Trigger alert panel header update
    this.shouldUpdateAlertHeader = true;
    
    // Reset the trigger after a short delay
    setTimeout(() => {
      this.shouldUpdateAlertHeader = false;
    }, 100);
  }

  // Handle filtered case count changes
  onFilteredCaseCountChanged(count: number): void {
    this.caseCount = count;
    console.log('Filtered case count updated:', count);
  }

  // Research question tracking
  onResearchQuestionChanged(researchQuestion: string): void {
    this.currentResearchQuestion = researchQuestion;
    // Don't automatically update search query - only when Create Alert is clicked
    console.log('Research question changed:', researchQuestion);
  }

  // Search state tracking
  onSearchStateChanged(state: {isSearching: boolean, evaluatedCount: number, totalCount: number}): void {
    this.searchState = state;
    console.log('Search state changed:', state);
  }

  // Simulate evaluation process for alertlist layout
  private simulateEvaluation(): void {
    console.log('Starting evaluation simulation...');
    
    const interval = setInterval(() => {
      this.searchState.evaluatedCount += Math.floor(Math.random() * 50) + 10; // Random increment between 10-60
      
      if (this.searchState.evaluatedCount >= this.searchState.totalCount) {
        this.searchState.evaluatedCount = this.searchState.totalCount;
        this.searchState.isSearching = false;
        clearInterval(interval);
        
        // Set case count to show results after search completes
        this.caseCount = 8; // Show 8 cases from the existing case data
        console.log('Search completed - showing', this.caseCount, 'cases');
      }
    }, 200); // Update every 200ms
    
    // Stop after 3 seconds maximum
    setTimeout(() => {
      this.searchState.isSearching = false;
      this.caseCount = 8; // Ensure case count is set even if interval doesn't complete
      console.log('Search timeout - showing', this.caseCount, 'cases');
      clearInterval(interval);
    }, 3000);
  }

}
