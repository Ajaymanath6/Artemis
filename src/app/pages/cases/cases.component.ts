import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CasesLayoutComponent } from '../../layouts/cases-layout/cases-layout.component';
import { CasesHeaderComponent } from '../../components/ui/cases-header/cases-header.component';
import { SideNavComponent, NavItem } from '../../components/navigation/side-nav/side-nav.component';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [CommonModule, CasesLayoutComponent, CasesHeaderComponent, SideNavComponent],
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  isSearching: boolean = false;
  hasSearched: boolean = false;
  isSearchBarExpanded: boolean = false; // New property to track search bar expansion
  skeletonCards = Array(10).fill(0); // Create array for 10 skeleton cards
  isSidebarCollapsed: boolean = false;
  projectName: string = 'NY Judgment Tracking'; // Default project name
  currentSearchQuery: string = '';
  viewMode: 'grid' | 'table' = 'grid';
  showResults: boolean = false;
  
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch(query: string): void {
    console.log('Searching cases for:', query);
    this.currentSearchQuery = query; // Update the current search query
    this.isSearching = true;
    this.hasSearched = true;
    this.showResults = false;
    this.isSearchBarExpanded = false; // Reset expansion state when new search is performed
    
    // Simulate search with loading, then show results
    setTimeout(() => {
      this.isSearching = false;
      this.showResults = true;
    }, 3000);
  }

  onNavItemClick(item: NavItem): void {
    console.log('Navigation item clicked:', item);
  }

  onSidebarToggle(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onProjectClick(): void {
    console.log('Project clicked:', this.projectName);
    // Navigate to project dashboard or overview
  }

  onSearchQueryClick(): void {
    console.log('Search query clicked:', this.currentSearchQuery);
    // Refresh search or show advanced search options
  }

  toggleViewMode(mode: 'grid' | 'table'): void {
    this.viewMode = mode;
    console.log('View mode changed to:', mode);
  }

  onExpandSearch(): void {
    // Expand search bar without affecting results display
    this.isSearchBarExpanded = true;
    console.log('Search expanded - maintaining results visible');
  }

  onCaseClick(caseId: string): void {
    this.router.navigate(['/case', caseId]);
  }
}
