import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../components/ui/search-bar/search-bar.component';
import { PhosphorIconComponent } from '../../components/ui/phosphor-icon/phosphor-icon.component';

interface SimpleProject {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'draft';
  caseCount: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, PhosphorIconComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recentProjects: SimpleProject[] = [];
  pinnedProjects: SimpleProject[] = [];

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    // Frontend prototype - mock data only
    this.recentProjects = [
      {
        id: '1',
        name: 'Smith vs Johnson Corporate Litigation',
        description: 'Complex corporate litigation case involving intellectual property disputes.',
        status: 'active',
        caseCount: 45
      },
      {
        id: '2',
        name: 'Environmental Compliance Review',
        description: 'Comprehensive review of environmental regulations and compliance.',
        status: 'active',
        caseCount: 23
      },
      {
        id: '3',
        name: 'Mergers & Acquisitions Due Diligence',
        description: 'Legal due diligence for technology company acquisition.',
        status: 'completed',
        caseCount: 67
      }
    ];

    this.pinnedProjects = [
      {
        id: '4',
        name: 'Intellectual Property Portfolio Management',
        description: 'Ongoing management and protection of patent portfolio.',
        status: 'active',
        caseCount: 89
      },
      {
        id: '5',
        name: 'Employment Law Compliance',
        description: 'Regular compliance reviews and policy updates.',
        status: 'active',
        caseCount: 34
      }
    ];
  }

  onSearch(query: string): void {
    console.log('Searching for:', query);
    // Frontend prototype - no backend integration
  }

  onCreateProject(): void {
    console.log('Create new project clicked');
    // Frontend prototype - no navigation
  }

  onViewProject(projectId: string): void {
    console.log('View project:', projectId);
    // Frontend prototype - no navigation
  }
}
