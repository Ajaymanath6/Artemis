import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseCardComponent } from '../../components/ui/case-card/case-card.component';

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
  caseNumber?: string;
}

@Component({
  selector: 'app-my-favorites-layout',
  standalone: true,
  imports: [CommonModule, CaseCardComponent],
  templateUrl: './my-favorites-layout.component.html',
  styleUrl: './my-favorites-layout.component.css',
})
export class MyFavoritesLayoutComponent implements OnInit {
  @Input() viewMode: 'grid' | 'table' = 'grid';
  @Input() isSidebarCollapsed: boolean = false;

  favoriteCases: FavoriteCase[] = [];

  constructor() {}

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
            title: 'WILSON ESTATES LLC VS CITY PLANNING COMMISSION',
            court: 'Administrative Court - Planning Division',
            date: '22 September 2018',
            judge: 'Steven Thomas',
            status: 'Closed',
            type: 'Administrative',
            documentCount: 5,
            addedDate: new Date().toISOString(),
            caseNumber: 'ADM778912',
          },
          {
            id: '2',
            title: 'FAVORITE CIVIL CASE VS DEFENDANT CORP',
            court: 'Superior Court of California',
            date: 'Mar 10, 2024',
            judge: 'Maria Rodriguez',
            status: 'Active',
            type: 'Civil',
            documentCount: 8,
            addedDate: new Date().toISOString(),
            caseNumber: 'FAV234567',
          },
          {
            id: '3',
            title: 'FAVORITE EMPLOYMENT DISPUTE VS TECH CO',
            court: 'Federal District Court',
            date: 'Apr 18, 2024',
            judge: 'Robert Chen',
            status: 'Pending',
            type: 'Employment',
            documentCount: 12,
            addedDate: new Date().toISOString(),
            caseNumber: 'FAV890123',
          },
        ];
      }
    } catch (error) {
      console.warn('Failed to load favorite cases:', error);
      this.favoriteCases = [];
    }
  }

  // View mode toggle
  onToggleViewMode(mode: 'grid' | 'table'): void {
    this.viewMode = mode;
    console.log('View mode changed to:', mode);
  }

  onCaseClick(caseItem: FavoriteCase): void {
    console.log('Favorite case clicked:', caseItem.title);
    // Navigate to case detail or perform action
  }

  onRemoveFavorite(caseItem: FavoriteCase, event: Event): void {
    event.stopPropagation();
    console.log('Removing from favorites:', caseItem.title);

    // Remove from local array
    this.favoriteCases = this.favoriteCases.filter((c) => c.id !== caseItem.id);

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
