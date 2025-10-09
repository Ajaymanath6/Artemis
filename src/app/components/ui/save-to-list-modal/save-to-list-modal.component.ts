import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export interface SaveToListResult {
  action: 'new' | 'favorites' | 'samples' | 'custom-list';
  item?: any;
  listName?: string;
}

@Component({
  selector: 'app-save-to-list-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './save-to-list-modal.component.html',
  styleUrls: ['./save-to-list-modal.component.css']
})
export class SaveToListModalComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input() itemToSave: any = null; // The case/item being saved
  
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<SaveToListResult>();
  @Output() cancel = new EventEmitter<void>();

  selectedOption: 'new' | 'favorites' | 'samples' | null = null;
  showCreateListForm: boolean = false;
  listName: string = '';
  listNameError: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Reset selection when modal opens
    if (this.isVisible) {
      this.resetForm();
    }
  }

  selectOption(option: 'new' | 'favorites' | 'samples'): void {
    this.selectedOption = option;
    
    if (option === 'new') {
      // Show the create list form
      this.showCreateListForm = true;
    }
    
    console.log('Selected option:', option);
  }

  onOverlayClick(event: Event): void {
    // Close modal when clicking overlay
    this.onClose();
  }

  onClose(): void {
    this.resetForm();
    this.close.emit();
  }

  onCancel(): void {
    this.resetForm();
    this.cancel.emit();
  }

  onDone(): void {
    if (!this.selectedOption) {
      return;
    }

    console.log('Done clicked with option:', this.selectedOption);

    // Handle the different options
    switch (this.selectedOption) {
      case 'new':
        // Validate list name if we're creating a new list
        if (this.showCreateListForm) {
          if (!this.validateListName()) {
            return;
          }
          // Send custom list creation event
          this.save.emit({
            action: 'custom-list',
            listName: this.listName.trim(),
            item: this.itemToSave
          });
        } else {
          // Just show the form first
          this.showCreateListForm = true;
          return;
        }
        break;
        
      case 'favorites':
        // Navigate to My Favorites page and save item
        this.saveToFavorites();
        this.navigateToFavorites();
        break;
        
      case 'samples':
        // Save to samples and navigate
        this.saveToSamples();
        this.navigateToSamples();
        break;
    }

    // Close modal
    this.onClose();
  }

  private saveToFavorites(): void {
    if (!this.itemToSave) return;

    try {
      // Get existing favorites
      let favorites = [];
      const existingFavorites = localStorage.getItem('myFavorites');
      
      if (existingFavorites) {
        favorites = JSON.parse(existingFavorites);
      }
      
      // Add new item if not already exists
      const newItem = {
        id: this.itemToSave.id || Date.now().toString(),
        title: this.itemToSave.title || this.itemToSave.label || this.itemToSave.fullTerm || 'Untitled Case',
        court: this.itemToSave.court || 'Unknown Court',
        date: this.itemToSave.date || new Date().toLocaleDateString(),
        judge: this.itemToSave.judge || 'Unknown Judge',
        status: this.itemToSave.status || 'Unknown Status',
        type: this.itemToSave.type || 'Unknown Type',
        documentCount: this.itemToSave.documentCount || Math.floor(Math.random() * 10) + 1,
        addedDate: new Date().toISOString()
      };
      
      // Check if item already exists
      const exists = favorites.some((item: any) => 
        item.title === newItem.title || item.id === newItem.id
      );
      
      if (!exists) {
        favorites.unshift(newItem);
        localStorage.setItem('myFavorites', JSON.stringify(favorites));
        console.log('Added to My Favorites successfully:', newItem);
      } else {
        console.log('Item already exists in My Favorites');
      }
      
    } catch (error) {
      console.warn('Failed to add to My Favorites:', error);
    }
  }

  private navigateToFavorites(): void {
    // Navigate to My Favorites page
    this.router.navigate(['/my-favorites']);
  }

  private saveToSamples(): void {
    if (!this.itemToSave) return;

    try {
      // Get existing samples
      let samples = [];
      const existingSamples = localStorage.getItem('sampleCases');
      
      if (existingSamples) {
        samples = JSON.parse(existingSamples);
      }
      
      // Add new item if not already exists
      const newItem = {
        id: this.itemToSave.id || Date.now().toString(),
        title: this.itemToSave.title || this.itemToSave.label || this.itemToSave.fullTerm || 'Untitled Case',
        court: this.itemToSave.court || 'Unknown Court',
        date: this.itemToSave.date || new Date().toLocaleDateString(),
        judge: this.itemToSave.judge || 'Unknown Judge',
        status: this.itemToSave.status || 'Sample',
        type: this.itemToSave.type || 'Unknown Type',
        documentCount: this.itemToSave.documentCount || Math.floor(Math.random() * 10) + 1,
        addedDate: new Date().toISOString()
      };
      
      // Check if item already exists
      const exists = samples.some((item: any) => 
        item.title === newItem.title || item.id === newItem.id
      );
      
      if (!exists) {
        samples.unshift(newItem);
        localStorage.setItem('sampleCases', JSON.stringify(samples));
        console.log('Added to Samples successfully:', newItem);
      } else {
        console.log('Item already exists in Samples');
      }
      
    } catch (error) {
      console.warn('Failed to add to Samples:', error);
    }
  }

  private navigateToSamples(): void {
    // Navigate to Samples page
    this.router.navigate(['/samples']);
  }

  private validateListName(): boolean {
    this.listNameError = '';
    
    if (!this.listName || this.listName.trim().length === 0) {
      this.listNameError = 'List name is required';
      return false;
    }
    
    if (this.listName.trim().length < 3) {
      this.listNameError = 'List name must be at least 3 characters';
      return false;
    }
    
    if (this.listName.trim().length > 100) {
      this.listNameError = 'List name must be less than 100 characters';
      return false;
    }
    
    return true;
  }

  private resetForm(): void {
    this.selectedOption = null;
    this.showCreateListForm = false;
    this.listName = '';
    this.listNameError = '';
  }

  // Method to handle list name input
  onListNameChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.listName = target.value;
    
    // Clear error when user starts typing
    if (this.listNameError) {
      this.listNameError = '';
    }
  }

  // Method to go back from create list form
  onBackToOptions(): void {
    this.showCreateListForm = false;
    this.listName = '';
    this.listNameError = '';
  }
}