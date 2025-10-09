import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SideNavComponent } from '../../components/navigation/side-nav/side-nav.component';
import { AppHeaderComponent } from '../../layouts/app-header/app-header.component';
import { CasesLayoutComponent } from '../../layouts/cases-layout/cases-layout.component';
import { CustomListLayoutComponent } from '../../layouts/custom-list-layout/custom-list-layout.component';
import { AttorneyHubLayoutComponent } from '../../layouts/attorney-hub-layout/attorney-hub-layout.component';
import { JudgesHubLayoutComponent } from '../../layouts/judges-hub-layout/judges-hub-layout.component';
import { PartiesHubLayoutComponent } from '../../layouts/parties-hub-layout/parties-hub-layout.component';

@Component({
  selector: 'app-custom-list',
  standalone: true,
  imports: [
    CommonModule, 
    SideNavComponent, 
    AppHeaderComponent,
    CasesLayoutComponent,
    CustomListLayoutComponent,
    AttorneyHubLayoutComponent,
    JudgesHubLayoutComponent,
    PartiesHubLayoutComponent
  ],
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.css']
})
export class CustomListComponent implements OnInit {
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

  // List info
  listId: string = '';
  listName: string = 'Custom List';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get the list ID from route params
    this.route.paramMap.subscribe(params => {
      this.listId = params.get('id') || '';
      this.loadListInfo();
    });
    
    console.log('Custom List page initialized');
  }

  private loadListInfo(): void {
    try {
      const customLists = localStorage.getItem('customLists');
      if (customLists) {
        const lists = JSON.parse(customLists);
        const currentList = lists.find((list: any) => this.generateListId(list.name) === this.listId);
        if (currentList) {
          this.listName = currentList.name;
        }
      }
    } catch (error) {
      console.warn('Failed to load list info:', error);
    }
  }

  private generateListId(listName: string): string {
    return listName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
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