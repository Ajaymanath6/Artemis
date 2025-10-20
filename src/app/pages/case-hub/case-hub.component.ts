import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SideNavComponent } from '../../components/navigation/side-nav/side-nav.component';
import { AppHeaderComponent } from '../../layouts/app-header/app-header.component';
import { CasesHubListLayoutComponent } from '../../layouts/cases-hub-list-layout/cases-hub-list-layout.component';
import { SaveToListModalComponent } from '../../components/ui/save-to-list-modal/save-to-list-modal.component';

@Component({
  selector: 'app-case-hub',
  standalone: true,
  imports: [
    CommonModule, 
    SideNavComponent, 
    AppHeaderComponent,
    CasesHubListLayoutComponent,
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

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Case Hub page initialized');
    this.loadCustomLists();
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
    this.isModalVisible = true;
    // Auto-select "new" option to show create form
    setTimeout(() => {
      const modal = document.querySelector('app-save-to-list-modal');
      if (modal) {
        const newButton = modal.querySelector('.list-option') as HTMLElement;
        if (newButton) {
          newButton.click();
        }
      }
    }, 100);
  }

  // Modal handlers
  onModalCancel(): void {
    this.isModalVisible = false;
  }

  onModalSave(result: any): void {
    console.log('Modal save result:', result);
    
    if (result.action === 'custom-list') {
      this.createCustomList(result.listName);
    }
    
    this.isModalVisible = false;
  }

  // Create custom list
  private createCustomList(listName: string): void {
    const newList = {
      id: `custom-${Date.now()}`,
      name: listName,
      itemCount: 0,
      isDropdownOpen: false,
      createdAt: new Date().toISOString()
    };
    
    this.customLists.push(newList);
    this.saveCustomLists();
    console.log('Custom list created:', newList);
  }

  // Load custom lists from localStorage
  private loadCustomLists(): void {
    try {
      const saved = localStorage.getItem('customLists');
      if (saved) {
        this.customLists = JSON.parse(saved);
      }
    } catch (error) {
      console.error('Error loading custom lists:', error);
      this.customLists = [];
    }
  }

  // Save custom lists to localStorage
  private saveCustomLists(): void {
    try {
      localStorage.setItem('customLists', JSON.stringify(this.customLists));
    } catch (error) {
      console.error('Error saving custom lists:', error);
    }
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