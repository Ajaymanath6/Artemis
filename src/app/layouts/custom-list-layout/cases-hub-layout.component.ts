import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BookmarkedCase {
  id: string;
  title: string;
  description: string;
  projectName: string;
  bookmarkedDate: string;
  documentCount?: number;
  date?: string;
  court?: string;
  judge?: string;
  status?: string;
  type?: string;
}

@Component({
  selector: 'app-cases-hub-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cases-hub-layout.component.html',
  styleUrl: './cases-hub-layout.component.css'
})
export class CasesHubLayoutComponent implements OnInit {
  @Input() viewMode: 'grid' | 'table' = 'grid';

  bookmarkedCases: BookmarkedCase[] = [
    {
      id: '1',
      title: 'JAME SBANGEY ENTERPRISES LLC VS STATE REGULATORY COMMISSION',
      description: 'A comprehensive legal case involving regulatory compliance and state commission oversight for enterprise operations.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-10-01'
    },
    {
      id: '2',
      title: 'JOHNSON MANUFACTURING INC VS STATE OF NEW YORK',
      description: 'Manufacturing dispute concerning environmental regulations and state compliance requirements.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-28'
    },
    {
      id: '3',
      title: 'WILSON ESTATES LLC VS CITY PLANNING COMMISSION',
      description: 'Real estate development case involving zoning laws and municipal planning regulations.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-25'
    },
    {
      id: '4',
      title: 'MARTINEZ FAMILY TRUST VS THOMPSON HOLDINGS',
      description: 'Estate planning and trust administration dispute involving asset management and fiduciary duties.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-22'
    },
    {
      id: '5',
      title: 'RODRIGUEZ CONSTRUCTION VS UNION WORKERS LOCAL 247',
      description: 'Labor dispute involving construction contracts, worker rights, and union negotiations.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-20'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('Cases Hub Layout initialized');
  }

  onCaseClick(caseItem: BookmarkedCase): void {
    console.log('Bookmarked case clicked:', caseItem.title);
    // Navigate to case detail or perform action
  }

  onRemoveBookmark(caseItem: BookmarkedCase, event: Event): void {
    event.stopPropagation();
    console.log('Removing bookmark for:', caseItem.title);
    // Remove from bookmarked cases
    this.bookmarkedCases = this.bookmarkedCases.filter(c => c.id !== caseItem.id);
  }
}