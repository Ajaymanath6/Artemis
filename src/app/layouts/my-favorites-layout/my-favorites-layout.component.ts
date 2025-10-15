import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FavoriteCase {
  id: string;
  title: string;
  date?: string;
  court?: string;
  judge?: string;
  status?: string;
  type?: string;
  documentCount?: number;
  addedDate: string;
}

@Component({
  selector: 'app-my-favorites-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-favorites-layout.component.html',
  styleUrl: './my-favorites-layout.component.css'
})
export class MyFavoritesLayoutComponent implements OnInit {
  @Input() viewMode: 'grid' | 'table' = 'grid';
  @Input() isSidebarCollapsed: boolean = false;

  favoriteCases: FavoriteCase[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('My Favorites Layout initialized');
    this.loadFavoriteCases();
  }

  private loadFavoriteCases(): void {
    try {
      const favorites = localStorage.getItem('myFavorites');
      if (favorites) {
        this.favoriteCases = JSON.parse(favorites);
        console.log('Loaded favorite cases:', this.favoriteCases.length);
      } else {
        // Default sample data if no favorites exist
        this.favoriteCases = [
          {
            id: '1',
            title: 'SAMPLE CASE VS DEMO CORPORATION',
            court: 'California Superior Court',
            date: 'Jan 15, 2024',
            judge: 'Steven Thomas',
            status: 'Pending',
            type: 'Civil',
            documentCount: 5,
            addedDate: new Date().toISOString()
          }
        ];
      }
    } catch (error) {
      console.warn('Failed to load favorite cases:', error);
      this.favoriteCases = [];
    }
  }

  onCaseClick(caseItem: FavoriteCase): void {
    console.log('Favorite case clicked:', caseItem.title);
    // Navigate to case detail or perform action
  }

  onRemoveFavorite(caseItem: FavoriteCase, event: Event): void {
    event.stopPropagation();
    console.log('Removing from favorites:', caseItem.title);
    
    // Remove from local array
    this.favoriteCases = this.favoriteCases.filter(c => c.id !== caseItem.id);
    
    // Update localStorage
    try {
      localStorage.setItem('myFavorites', JSON.stringify(this.favoriteCases));
      console.log('Updated favorites in localStorage');
    } catch (error) {
      console.warn('Failed to update favorites in localStorage:', error);
    }
  }

  // Method to refresh favorites (can be called from parent components)
  refreshFavorites(): void {
    this.loadFavoriteCases();
  }
}