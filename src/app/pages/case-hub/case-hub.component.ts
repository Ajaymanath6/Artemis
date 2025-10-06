import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SideNavComponent } from '../../components/navigation/side-nav/side-nav.component';
import { AppHeaderComponent } from '../../layouts/app-header/app-header.component';
import { CasesLayoutComponent } from '../../layouts/cases-layout/cases-layout.component';
import { AlllisthubLayoutComponent } from '../../layouts/alllisthub-layout/alllisthub-layout.component';
import { CasesHubLayoutComponent } from '../../layouts/cases-hub-layout/cases-hub-layout.component';
import { AttorneyHubLayoutComponent } from '../../layouts/attorney-hub-layout/attorney-hub-layout.component';
import { JudgesHubLayoutComponent } from '../../layouts/judges-hub-layout/judges-hub-layout.component';
import { PartiesHubLayoutComponent } from '../../layouts/parties-hub-layout/parties-hub-layout.component';

@Component({
  selector: 'app-case-hub',
  standalone: true,
  imports: [
    CommonModule, 
    SideNavComponent, 
    AppHeaderComponent,
    CasesLayoutComponent,
    AlllisthubLayoutComponent,
    CasesHubLayoutComponent,
    AttorneyHubLayoutComponent,
    JudgesHubLayoutComponent,
    PartiesHubLayoutComponent
  ],
  templateUrl: './case-hub.component.html',
  styleUrls: ['./case-hub.component.css']
})
export class CaseHubComponent implements OnInit {
  // Sidebar state
  isSidebarCollapsed: boolean = false;
  
  // Tab management
  activeTab: string = 'all';
  tabs = [
    { id: 'all', label: 'All' },
    { id: 'cases', label: 'Cases' },
    { id: 'attorneys', label: 'Attorneys' },
    { id: 'judges', label: 'Judges' },
    { id: 'parties', label: 'Parties' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Case Hub page initialized');
  }

  // Navigation methods
  onSidebarToggle(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onNavItemClick(item: any): void {
    console.log('Nav item clicked:', item);
  }

  // Tab management
  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
    console.log('Active tab set to:', tabId);
  }

  // Action button methods
  onAddList(): void {
    console.log('Add List clicked');
    // Add functionality to create new list
  }

  onImportCase(): void {
    console.log('Import Case clicked');
    // Add functionality to import case
  }
}