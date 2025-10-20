import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CaseCardComponent } from '../../components/ui/case-card/case-card.component';

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
  caseNumber?: string;
}

@Component({
  selector: 'app-custom-list-layout',
  standalone: true,
  imports: [CommonModule, CaseCardComponent],
  templateUrl: './custom-list-layout.component.html',
  styleUrl: './custom-list-layout.component.css',
})
export class CustomListLayoutComponent implements OnInit {
  @Input() viewMode: 'grid' | 'table' = 'grid';
  @Input() listId: string = '';

  customListItems: CustomListItem[] = [];
  listName: string = 'Custom List';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('Custom List Layout initialized');

    // Get list ID from parent or route
    if (!this.listId) {
      this.route.parent?.paramMap.subscribe((params) => {
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
          const currentList = lists.find(
            (list: any) => this.generateListId(list.name) === this.listId,
          );
          if (currentList) {
            this.customListItems = currentList.items || [];
            this.listName = currentList.name;
          }
        }

        // Add default sample data if no items exist
        if (this.customListItems.length === 0) {
          this.customListItems = [
            {
              id: '1',
              title: 'CUSTOM LIST CASE VS DEFENDANT ONE',
              description: 'Added to custom list for tracking purposes',
              addedDate: new Date().toISOString(),
              court: 'District Court',
              date: 'Apr 5, 2024',
              judge: 'Jennifer Walsh',
              status: 'Active',
              type: 'Civil',
              documentCount: 7,
              caseNumber: 'CUS123456',
            },
            {
              id: '2',
              title: 'CUSTOM TRACKING CASE VS CORPORATION',
              description: 'Important case for reference tracking',
              addedDate: new Date().toISOString(),
              court: 'Federal Court',
              date: 'May 12, 2024',
              judge: 'Michael Davis',
              status: 'Pending',
              type: 'Federal',
              documentCount: 9,
              caseNumber: 'CUS789012',
            },
            {
              id: '3',
              title: 'CUSTOM LIST REFERENCE VS ENTITY',
              description: 'Reference case added to custom tracking list',
              addedDate: new Date().toISOString(),
              court: 'Appeals Court',
              date: 'Jun 8, 2024',
              judge: 'Sarah Johnson',
              status: 'Under Review',
              type: 'Appeals',
              documentCount: 11,
              caseNumber: 'CUS345678',
            },
          ];
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
    this.customListItems = this.customListItems.filter((c) => c.id !== item.id);

    // Update localStorage
    try {
      localStorage.setItem(
        `list_${this.listId}`,
        JSON.stringify(this.customListItems),
      );

      // Also update the main customLists entry
      const customLists = localStorage.getItem('customLists');
      if (customLists) {
        const lists = JSON.parse(customLists);
        const listIndex = lists.findIndex(
          (list: any) => this.generateListId(list.name) === this.listId,
        );
        if (listIndex !== -1) {
          lists[listIndex].items = this.customListItems;
          localStorage.setItem('customLists', JSON.stringify(lists));
        }
      }

      console.log('Updated custom list items in localStorage');
    } catch (error) {
      console.warn(
        'Failed to update custom list items in localStorage:',
        error,
      );
    }
  }

  // View mode toggle
  onToggleViewMode(mode: 'grid' | 'table'): void {
    this.viewMode = mode;
    console.log('View mode changed to:', mode);
  }

  // Method to refresh items (can be called from parent components)
  refreshItems(): void {
    this.loadCustomListItems();
  }
}
