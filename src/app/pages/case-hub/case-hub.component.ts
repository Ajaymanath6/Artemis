import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SideNavComponent } from '../../components/navigation/side-nav/side-nav.component';
import { AppHeaderComponent } from '../../layouts/app-header/app-header.component';
import { CasesLayoutComponent } from '../../layouts/cases-layout/cases-layout.component';
import { CasesHubListLayoutComponent } from '../../layouts/cases-hub-list-layout/cases-hub-list-layout.component';
import { CasesHubImportLayoutComponent } from '../../layouts/cases-hub-import-layout/cases-hub-import-layout.component';
import { SaveToListModalComponent } from '../../components/ui/save-to-list-modal/save-to-list-modal.component';

@Component({
  selector: 'app-case-hub',
  standalone: true,
  imports: [
    CommonModule, 
    SideNavComponent, 
    AppHeaderComponent,
    CasesLayoutComponent,
    CasesHubListLayoutComponent,
    CasesHubImportLayoutComponent,
    SaveToListModalComponent
  ],
  templateUrl: './case-hub.component.html',
  styleUrls: ['./case-hub.component.css']
})
export class CaseHubComponent implements OnInit {
  // Sidebar state
  isSidebarCollapsed: boolean = false;
  
  // Tab management
  activeTab: string = 'lists';
  tabs = [
    { id: 'lists', label: 'Lists', icon: 'list-check-2' },
    { id: 'import-cases', label: 'Import Cases', icon: 'file-add-line' }
  ];

  // Custom Lists management
  customLists: any[] = [];

  // Modal state
  isModalVisible: boolean = false;
  itemToSave: any = null;

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
    this.itemToSave = {
      id: 'new-list',
      title: 'New List',
      label: 'Create New List'
    };
    this.isModalVisible = true;
  }

  // Modal event handlers
  onModalClose(): void {
    this.isModalVisible = false;
    this.itemToSave = null;
  }

  onModalCancel(): void {
    this.isModalVisible = false;
    this.itemToSave = null;
  }

  onModalSave(result: any): void {
    console.log('Modal save result:', result);
    
    if (result.action === 'custom-list') {
      // Create new custom list
      const newList = {
        id: Date.now().toString(),
        name: result.listName,
        itemCount: 0,
        isDropdownOpen: false
      };
      this.customLists.push(newList);
      console.log('New list created:', result.listName);
    }
    
    this.isModalVisible = false;
    this.itemToSave = null;
  }

  // Custom Lists management methods
  toggleListDropdown(list: any, event: Event): void {
    event.stopPropagation();
    
    // Close all other dropdowns first
    this.customLists.forEach(l => {
      if (l.id !== list.id) {
        l.isDropdownOpen = false;
      }
    });
    
    // Toggle the clicked list dropdown
    list.isDropdownOpen = !list.isDropdownOpen;
    console.log('List dropdown toggled for:', list.name, list.isDropdownOpen);
  }

  closeAllListDropdowns(): void {
    this.customLists.forEach(list => {
      list.isDropdownOpen = false;
    });
    console.log('All list dropdowns closed');
  }

  editList(list: any, event: Event): void {
    event.stopPropagation();
    console.log('Edit list clicked for:', list.name);
    
    // Close dropdown
    list.isDropdownOpen = false;
    
    // TODO: Implement edit functionality - could open a modal or navigate to edit page
    // For now, just log the action
    // You could open a modal here or navigate to an edit page
  }

  deleteList(list: any, event: Event): void {
    event.stopPropagation();
    console.log('Delete list clicked for:', list.name);
    
    // Close dropdown
    list.isDropdownOpen = false;
    
    // Show confirmation and delete
    if (confirm(`Are you sure you want to delete the list "${list.name}"? This action cannot be undone.`)) {
      const index = this.customLists.findIndex(l => l.id === list.id);
      if (index > -1) {
        this.customLists.splice(index, 1);
        console.log('List deleted:', list.name);
      }
    }
  }
}