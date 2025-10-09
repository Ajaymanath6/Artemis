import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SideNavComponent } from '../../components/navigation/side-nav/side-nav.component';
import { AppHeaderComponent } from '../../layouts/app-header/app-header.component';
import { CasesLayoutComponent } from '../../layouts/cases-layout/cases-layout.component';
import { MyFavoritesLayoutComponent } from '../../layouts/my-favorites-layout/my-favorites-layout.component';

@Component({
  selector: 'app-my-favorites',
  standalone: true,
  imports: [
    CommonModule, 
    SideNavComponent, 
    AppHeaderComponent,
    CasesLayoutComponent,
    MyFavoritesLayoutComponent
  ],
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.css']
})
export class MyFavoritesComponent implements OnInit {
  // Sidebar state
  isSidebarCollapsed: boolean = false;
  
  // Tab management
  activeTab: string = 'cases';
  tabs = [
    { id: 'cases', label: 'Cases' },
    { id: 'threads', label: 'Threads' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('My Favorites page initialized');
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