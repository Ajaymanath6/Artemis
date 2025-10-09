import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface CustomListItem {
  id: string;
  title: string;
  description?: string;
  projectName?: string;
  addedDate: string;
  documentCount?: number;
  date?: string;
  court?: string;
  judge?: string;
  status?: string;
  type?: string;
}

@Component({
  selector: 'app-custom-list-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-list-layout.component.html',
  styleUrl: './custom-list-layout.component.css'
})
export class CustomListLayoutComponent implements OnInit {
  @Input() viewMode: 'grid' | 'table' = 'grid';
  @Input() listId: string = '';

  customListItems: CustomListItem[] = [];
  listName: string = 'Custom List';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Custom List Layout initialized');
    
    // Get list ID from parent or route
    if (!this.listId) {
      this.route.parent?.paramMap.subscribe(params => {
        this.listId = params.get('id') || '';
        this.loadCustomListItems();
      });
    } else {
      this.loadCustomListItems();
    }
  }

  private loadCustomListItems(): void {
    try {
      const listItems = localStorage.getItem(`list_${this.listId}`);
      if (listItems) {
        this.customListItems = JSON.parse(listItems);
        console.log('Loaded custom list items:', this.customListItems.length);
      } else {
        // Load from customLists if specific list storage doesn't exist
        const customLists = localStorage.getItem('customLists');
        if (customLists) {
          const lists = JSON.parse(customLists);
          const currentList = lists.find((list: any) => this.generateListId(list.name) === this.listId);
          if (currentList) {
            this.customListItems = currentList.items || [];
            this.listName = currentList.name;
          }
        }
      }
    } catch (error) {
      console.warn('Failed to load custom list items:', error);
      this.customListItems = [];
    }
  }

  private generateListId(listName: string): string {
    return listName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  onCaseClick(item: CustomListItem): void {
    console.log('Custom list item clicked:', item.title);
    // Navigate to case detail or perform action
  }

  onRemoveItem(item: CustomListItem, event: Event): void {
    event.stopPropagation();
    console.log('Removing from custom list:', item.title);
    
    // Remove from local array
    this.customListItems = this.customListItems.filter(c => c.id !== item.id);
    
    // Update localStorage
    try {
      localStorage.setItem(`list_${this.listId}`, JSON.stringify(this.customListItems));
      
      // Also update the main customLists entry
      const customLists = localStorage.getItem('customLists');
      if (customLists) {
        const lists = JSON.parse(customLists);
        const listIndex = lists.findIndex((list: any) => this.generateListId(list.name) === this.listId);
        if (listIndex !== -1) {
          lists[listIndex].items = this.customListItems;
          localStorage.setItem('customLists', JSON.stringify(lists));
        }
      }
      
      console.log('Updated custom list items in localStorage');
    } catch (error) {
      console.warn('Failed to update custom list items in localStorage:', error);
    }
  }

  // Method to refresh items (can be called from parent components)
  refreshItems(): void {
    this.loadCustomListItems();
  }
}