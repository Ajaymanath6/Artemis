import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BookmarkedJudge {
  id: string;
  title: string;
  description: string;
  projectName: string;
  bookmarkedDate: string;
  court: string;
  status: string;
}

@Component({
  selector: 'app-judges-hub-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './judges-hub-layout.component.html',
  styleUrl: './judges-hub-layout.component.css'
})
export class JudgesHubLayoutComponent implements OnInit {
  @Input() viewMode: 'grid' | 'table' = 'grid';

  bookmarkedJudges: BookmarkedJudge[] = [
    {
      id: '1',
      title: 'Hon. Steven Thomas',
      description: 'Senior Judge at San Mateo County Superior Court with 18 years of service specializing in Personal Injury and Commercial Law.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-10-01',
      court: 'San Mateo County Superior Court',
      status: 'Active'
    },
    {
      id: '2',
      title: 'Hon. Maria Rodriguez',
      description: 'Associate Judge with extensive experience in family law and personal injury cases, appointed by Governor Newsom.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-28',
      court: 'San Mateo County Superior Court',
      status: 'Active'
    },
    {
      id: '3',
      title: 'Hon. Robert Wilson',
      description: 'Chief Judge specializing in Commercial Law and Constitutional Law with 25 years of judicial experience.',
      projectName: 'NY Judgment Tracking',
      bookmarkedDate: '2024-09-25',
      court: 'San Mateo County Superior Court',
      status: 'Senior Status'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('Judges Hub Layout initialized');
  }

  onJudgeClick(judge: BookmarkedJudge): void {
    console.log('Bookmarked judge clicked:', judge.title);
    // Navigate to judge detail or perform action
  }

  onRemoveBookmark(judge: BookmarkedJudge, event: Event): void {
    event.stopPropagation();
    console.log('Removing bookmark for:', judge.title);
    // Remove from bookmarked judges
    this.bookmarkedJudges = this.bookmarkedJudges.filter(j => j.id !== judge.id);
  }
}