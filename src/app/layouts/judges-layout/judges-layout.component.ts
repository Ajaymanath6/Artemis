import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Judge {
  name: string;
  title: string;
  court: string;
  additionalCourts: string[];
  phone: string;
  email: string;
  address: string;
  website: string;
  yearsOfService: number;
  specializations: string[];
  currentStatus: 'Active' | 'Retired' | 'Senior Status';
  judicialStatus: string;
  appointedBy: string;
}

@Component({
  selector: 'app-judges-layout',
  imports: [CommonModule],
  templateUrl: './judges-layout.component.html',
  styleUrl: './judges-layout.component.css'
})
export class JudgesLayoutComponent {
  @Input() caseDetails: any;
  viewMode: 'grid' | 'table' = 'grid';

  constructor(private router: Router) {}

  toggleViewMode(mode: 'grid' | 'table'): void {
    this.viewMode = mode;
    console.log('View mode changed to:', mode);
  }

  onJudgeClick(judge: Judge): void {
    console.log('Judge card clicked:', judge.name);
    // Navigate to judge detail page
    const judgeId = this.generateJudgeId(judge.name);
    this.router.navigate(['/judge', judgeId], {
      queryParams: { name: judge.name }
    });
  }

  onSeeMoreClick(judge: Judge, event: Event): void {
    event.stopPropagation(); // Prevent card click event
    console.log('See more clicked for judge:', judge.name);
    // Navigate to judge details page
    const judgeId = this.generateJudgeId(judge.name);
    this.router.navigate(['/judge', judgeId], {
      queryParams: { name: judge.name }
    });
  }

  // Helper method to generate judge ID from name
  private generateJudgeId(name: string): string {
    return name.toLowerCase()
               .replace(/hon\.\s*/i, '') // Remove "Hon." prefix
               .replace(/\s+/g, '-') // Replace spaces with hyphens
               .replace(/[^a-z0-9-]/g, ''); // Remove special characters
  }

  judges: Judge[] = [
    {
      name: 'Hon. Steven Thomas',
      title: 'Senior Judge',
      court: 'San Mateo County Superior Court of California',
      additionalCourts: ['California Court of Appeal for the First District'],
      phone: '(650) 261-5121',
      email: 'Not Available',
      address: 'Not Available',
      website: 'Not Available',
      yearsOfService: 18,
      specializations: ['Personal Injury', 'Commercial Law', 'Civil Rights'],
      currentStatus: 'Active',
      judicialStatus: 'ACTIVE',
      appointedBy: 'Not Available'
    },
    {
      name: 'Hon. Maria Rodriguez',
      title: 'Associate Judge', 
      court: 'San Mateo County Superior Court of California',
      additionalCourts: [],
      phone: '(650) 261-5122',
      email: 'm.rodriguez@sanmateocourt.org',
      address: '400 County Center, Redwood City, CA 94063',
      website: 'www.sanmateocourt.org',
      yearsOfService: 12,
      specializations: ['Family Law', 'Personal Injury', 'Contract Disputes'],
      currentStatus: 'Active',
      judicialStatus: 'ACTIVE',
      appointedBy: 'Governor Newsom'
    },
    {
      name: 'Hon. Robert Wilson',
      title: 'Chief Judge',
      court: 'San Mateo County Superior Court of California',
      additionalCourts: ['California Court of Appeal for the First District'],
      phone: '(650) 261-5120',
      email: 'r.wilson@sanmateocourt.org',
      address: '400 County Center, Redwood City, CA 94063',
      website: 'Not Available',
      yearsOfService: 25,
      specializations: ['Commercial Law', 'Constitutional Law', 'Administrative Law'],
      currentStatus: 'Senior Status',
      judicialStatus: 'SENIOR STATUS',
      appointedBy: 'Governor Brown'
    },
    {
      name: 'Hon. Patricia Chen',
      title: 'Judge',
      court: 'San Mateo County Superior Court of California',
      additionalCourts: [],
      phone: '(650) 261-5123',
      email: 'Not Available',
      address: 'Not Available',
      website: 'Not Available',
      yearsOfService: 8,
      specializations: ['Criminal Law', 'Traffic Court', 'Municipal Law'],
      currentStatus: 'Active',
      judicialStatus: 'ACTIVE',
      appointedBy: 'Governor Newsom'
    },
    {
      name: 'Hon. Michael Foster',
      title: 'Judge',
      court: 'San Mateo County Superior Court of California',
      additionalCourts: [],
      phone: '(650) 261-5124',
      email: 'm.foster@sanmateocourt.org',
      address: '400 County Center, Redwood City, CA 94063',
      website: 'www.sanmateocourt.org',
      yearsOfService: 15,
      specializations: ['Civil Litigation', 'Personal Injury', 'Contract Law'],
      currentStatus: 'Active',
      judicialStatus: 'ACTIVE',
      appointedBy: 'Governor Brown'
    }
  ];
}
