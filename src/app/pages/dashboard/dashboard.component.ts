import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../components/ui/search-bar/search-bar.component';
import { ProjectCardComponent, Project } from '../../components/ui/project-card/project-card.component';
import { PhosphorIconComponent } from '../../components/ui/phosphor-icon/phosphor-icon.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, ProjectCardComponent, PhosphorIconComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recentProjects: Project[] = [];
  pinnedProjects: Project[] = [];

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    // Mock data - replace with actual API calls
    this.recentProjects = [
      {
        id: '1',
        name: 'Smith vs Johnson Corporate Litigation',
        description: 'Complex corporate litigation case involving intellectual property disputes and shareholder agreements.',
        status: 'active',
        createdDate: '2024-01-15',
        updatedDate: '2024-01-20',
        caseCount: 45
      },
      {
        id: '2',
        name: 'Environmental Compliance Review',
        description: 'Comprehensive review of environmental regulations and compliance requirements for manufacturing facilities.',
        status: 'active',
        createdDate: '2024-01-10',
        updatedDate: '2024-01-18',
        caseCount: 23
      },
      {
        id: '3',
        name: 'Mergers & Acquisitions Due Diligence',
        description: 'Legal due diligence for technology company acquisition including IP portfolio and employment contracts.',
        status: 'completed',
        createdDate: '2023-12-01',
        updatedDate: '2024-01-15',
        caseCount: 67
      }
    ];

    this.pinnedProjects = [
      {
        id: '4',
        name: 'Intellectual Property Portfolio Management',
        description: 'Ongoing management and protection of client\'s extensive patent and trademark portfolio.',
        status: 'active',
        createdDate: '2023-11-15',
        updatedDate: '2024-01-22',
        caseCount: 89
      },
      {
        id: '5',
        name: 'Employment Law Compliance',
        description: 'Regular compliance reviews and updates for employment policies and workplace regulations.',
        status: 'active',
        createdDate: '2023-10-20',
        updatedDate: '2024-01-19',
        caseCount: 34
      },
      {
        id: '6',
        name: 'Contract Review Automation',
        description: 'Developing automated systems for contract review and risk assessment processes.',
        status: 'draft',
        createdDate: '2024-01-05',
        updatedDate: '2024-01-12',
        caseCount: 12
      }
    ];
  }

  onSearch(query: string): void {
    console.log('Searching for:', query);
    // Implement search functionality
  }

  onCreateProject(): void {
    console.log('Create new project clicked');
    // Navigate to create project page
  }

  onEditProject(projectId: string): void {
    console.log('Edit project:', projectId);
    // Navigate to edit project page
  }

  onViewProject(projectId: string): void {
    console.log('View project:', projectId);
    // Navigate to project detail page
  }
}
