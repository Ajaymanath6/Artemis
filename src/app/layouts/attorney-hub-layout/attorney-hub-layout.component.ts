import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BookmarkedAttorney {
  id: string;
  title: string;
  description: string;
  projectName: string;
  bookmarkedDate: string;
  lawFirm: string;
  specialization: string;
}

@Component({
  selector: 'app-attorney-hub-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attorney-hub-layout.component.html',
  styleUrl: './attorney-hub-layout.component.css'
})
export class AttorneyHubLayoutComponent implements OnInit {
  @Input() viewMode: 'grid' | 'table' = 'grid';

  bookmarkedAttorneys: BookmarkedAttorney[] = [
    {
      id: '1',
      title: 'Martha Jones',
      description: 'Lead Attorney specializing in corporate litigation with extensive experience in regulatory compliance and commercial disputes.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-10-01',
      lawFirm: 'Wisdom Law',
      specialization: 'Corporate Litigation'
    },
    {
      id: '2',
      title: 'John Smith',
      description: 'Co-Counsel attorney with expertise in contract law and business negotiations, representing major corporations.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-28',
      lawFirm: 'Smith & Associates',
      specialization: 'Contract Law'
    },
    {
      id: '3',
      title: 'Sarah Johnson',
      description: 'Defense Attorney with specialization in civil rights and employment law with over 15 years of experience.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-25',
      lawFirm: 'Johnson Legal Group',
      specialization: 'Civil Rights'
    },
    {
      id: '4',
      title: 'Michael Brown',
      description: 'Assistant Attorney focusing on family law and estate planning with comprehensive knowledge of trust administration.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-22',
      lawFirm: 'Brown Law Firm',
      specialization: 'Family Law'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('Attorney Hub Layout initialized');
  }

  onAttorneyClick(attorney: BookmarkedAttorney): void {
    console.log('Bookmarked attorney clicked:', attorney.title);
    // Navigate to attorney detail or perform action
  }

  onRemoveBookmark(attorney: BookmarkedAttorney, event: Event): void {
    event.stopPropagation();
    console.log('Removing bookmark for:', attorney.title);
    // Remove from bookmarked attorneys
    this.bookmarkedAttorneys = this.bookmarkedAttorneys.filter(a => a.id !== attorney.id);
  }
}