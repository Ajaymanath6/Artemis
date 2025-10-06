import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BookmarkedItem {
  id: string;
  title: string;
  description: string;
  projectName: string;
  bookmarkedDate: string;
  type: 'case' | 'attorney' | 'judge' | 'party';
  documentCount?: number;
}

@Component({
  selector: 'app-alllisthub-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alllisthub-layout.component.html',
  styleUrl: './alllisthub-layout.component.css'
})
export class AlllisthubLayoutComponent implements OnInit {
  @Input() viewMode: 'grid' | 'table' = 'grid';

  bookmarkedItems: BookmarkedItem[] = [
    {
      id: '1',
      title: 'JAME SBANGEY ENTERPRISES LLC VS STATE REGULATORY COMMISSION',
      description: 'A comprehensive legal case involving regulatory compliance and state commission oversight for enterprise operations.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-10-01',
      type: 'case'
    },
    {
      id: '2',
      title: 'Hon. Steven Thomas',
      description: 'Senior Judge at San Mateo County Superior Court with 18 years of service specializing in Personal Injury and Commercial Law.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-30',
      type: 'judge'
    },
    {
      id: '3',
      title: 'Martha Jones - Wisdom Law',
      description: 'Lead Attorney specializing in corporate litigation with extensive experience in regulatory compliance and commercial disputes.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-29',
      type: 'attorney'
    },
    {
      id: '4',
      title: 'JOHNSON MANUFACTURING INC',
      description: 'Manufacturing company involved in environmental regulation disputes and state compliance requirements.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-28',
      type: 'party'
    },
    {
      id: '5',
      title: 'WILSON ESTATES LLC VS CITY PLANNING COMMISSION',
      description: 'Real estate development case involving zoning laws and municipal planning regulations.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-27',
      type: 'case'
    },
    {
      id: '6',
      title: 'Maria Rodriguez - Rodriguez & Associates',
      description: 'Defense Attorney with specialization in family law and personal injury cases with 12 years of experience.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-26',
      type: 'attorney'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('All List Hub Layout initialized');
  }

  onItemClick(item: BookmarkedItem): void {
    console.log('Bookmarked item clicked:', item.title);
    // Navigate based on item type
  }

  onRemoveBookmark(item: BookmarkedItem, event: Event): void {
    event.stopPropagation();
    console.log('Removing bookmark for:', item.title);
    // Remove from bookmarked items
    this.bookmarkedItems = this.bookmarkedItems.filter(i => i.id !== item.id);
  }

  getTypeLabel(type: string): string {
    switch (type) {
      case 'case': return 'Case';
      case 'attorney': return 'Attorney';
      case 'judge': return 'Judge';
      case 'party': return 'Party';
      default: return 'Item';
    }
  }

  getTypeIcon(type: string): string {
    switch (type) {
      case 'case': return 'ri-file-text-line';
      case 'attorney': return 'ri-briefcase-line';
      case 'judge': return 'ri-scales-line';
      case 'party': return 'ri-user-line';
      default: return 'ri-bookmark-line';
    }
  }
}