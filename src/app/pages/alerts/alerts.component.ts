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

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Alerts page initialized');
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
    // Handle create alert functionality
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

}
