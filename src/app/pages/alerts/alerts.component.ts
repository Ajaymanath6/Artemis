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
      console.log('No research question to search with');
    }
  }

  onCloseAlert(): void {
    console.log('Alert panel close requested');
    // Handle close alert functionality
  }

  onSaveAlert(alertData: any): void {
    console.log('Saving alert:', alertData);
    // Handle save alert functionality
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
    const interval = setInterval(() => {
      this.searchState.evaluatedCount += Math.floor(Math.random() * 50) + 10; // Random increment between 10-60
      
      if (this.searchState.evaluatedCount >= this.searchState.totalCount) {
        this.searchState.evaluatedCount = this.searchState.totalCount;
        this.searchState.isSearching = false;
        clearInterval(interval);
      }
    }, 200); // Update every 200ms
    
    // Stop after 3 seconds maximum
    setTimeout(() => {
      this.searchState.isSearching = false;
      this.caseCount = 5; // Set case count to show 5 cases after loading
      clearInterval(interval);
    }, 3000);
  }

}
