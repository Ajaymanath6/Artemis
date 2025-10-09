import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface SaveToListResult {
  action: 'new' | 'favorites' | 'samples';
  item?: any;
}

@Component({
  selector: 'app-save-to-list-modal',
  standalone: true,
  imports: [CommonModule],
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

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Reset selection when modal opens
    if (this.isVisible) {
      this.selectedOption = null;
    }
  }

  selectOption(option: 'new' | 'favorites' | 'samples'): void {
    this.selectedOption = option;
    console.log('Selected option:', option);
  }

  onOverlayClick(event: Event): void {
    // Close modal when clicking overlay
    this.onClose();
  }

  onClose(): void {
    this.selectedOption = null;
    this.close.emit();
  }

  onCancel(): void {
    this.selectedOption = null;
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
        // Handle create new list
        this.save.emit({
          action: 'new',
          item: this.itemToSave
        });
        break;
        
      case 'favorites':
        // Navigate to My Favorites page and save item
        this.saveToFavorites();
        this.navigateToFavorites();
        break;
        
      case 'samples':
        // Handle samples
        this.save.emit({
          action: 'samples',
          item: this.itemToSave
        });
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
}