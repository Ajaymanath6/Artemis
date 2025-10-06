import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BookmarkedParty {
  id: string;
  title: string;
  description: string;
  projectName: string;
  bookmarkedDate: string;
  type: 'Plaintiff' | 'Defendant' | 'Third Party';
  caseInvolvement: string;
}

@Component({
  selector: 'app-parties-hub-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parties-hub-layout.component.html',
  styleUrl: './parties-hub-layout.component.css'
})
export class PartiesHubLayoutComponent implements OnInit {
  @Input() viewMode: 'grid' | 'table' = 'grid';

  bookmarkedParties: BookmarkedParty[] = [
    {
      id: '1',
      title: 'JAME SBANGEY ENTERPRISES LLC',
      description: 'Corporate entity involved in regulatory compliance disputes with state commission oversight and enterprise operations.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-10-01',
      type: 'Plaintiff',
      caseInvolvement: 'Primary Plaintiff'
    },
    {
      id: '2',
      title: 'STATE REGULATORY COMMISSION',
      description: 'Government regulatory body responsible for oversight and enforcement of compliance regulations for enterprises.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-28',
      type: 'Defendant',
      caseInvolvement: 'Primary Defendant'
    },
    {
      id: '3',
      title: 'JOHNSON MANUFACTURING INC',
      description: 'Manufacturing company involved in environmental regulation disputes and state compliance requirements.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-25',
      type: 'Defendant',
      caseInvolvement: 'Primary Defendant'
    },
    {
      id: '4',
      title: 'WILSON ESTATES LLC',
      description: 'Real estate development company involved in zoning law disputes and municipal planning regulations.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-22',
      type: 'Plaintiff',
      caseInvolvement: 'Primary Plaintiff'
    },
    {
      id: '5',
      title: 'CITY PLANNING COMMISSION',
      description: 'Municipal planning authority responsible for zoning regulations and urban development oversight.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-20',
      type: 'Defendant',
      caseInvolvement: 'Primary Defendant'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('Parties Hub Layout initialized');
  }

  onPartyClick(party: BookmarkedParty): void {
    console.log('Bookmarked party clicked:', party.title);
    // Navigate to party detail or perform action
  }

  onRemoveBookmark(party: BookmarkedParty, event: Event): void {
    event.stopPropagation();
    console.log('Removing bookmark for:', party.title);
    // Remove from bookmarked parties
    this.bookmarkedParties = this.bookmarkedParties.filter(p => p.id !== party.id);
  }
}