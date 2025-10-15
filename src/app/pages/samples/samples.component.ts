import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SideNavComponent } from '../../components/navigation/side-nav/side-nav.component';
import { AppHeaderComponent } from '../../layouts/app-header/app-header.component';
import { SamplesLayoutComponent } from '../../layouts/samples-layout/samples-layout.component';

@Component({
  selector: 'app-samples',
  standalone: true,
  imports: [
    CommonModule, 
    SideNavComponent, 
    AppHeaderComponent,
    SamplesLayoutComponent
  ],
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {
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
    console.log('Samples page initialized');
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

  // Back button handler
  onBackClick(): void {
    this.router.navigate(['/case-hub']);
  }
}