import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PhosphorIconComponent } from '../phosphor-icon/phosphor-icon.component';

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'draft';
  createdDate: string;
  updatedDate: string;
  caseCount?: number;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, PhosphorIconComponent],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Output() edit = new EventEmitter<string>();
  @Output() view = new EventEmitter<string>();

  constructor(private router: Router) {}

  onEditClick(): void {
    this.edit.emit(this.project.id);
  }

  onViewClick(): void {
    // Navigate to loading page first, then to cases
    sessionStorage.setItem('nextRoute', '/cases');
    this.router.navigate(['/loading']);
  }

  getStatusColor(): string {
    switch (this.project.status) {
      case 'active':
        return 'text-green-600 bg-green-100';
      case 'completed':
        return 'text-blue-600 bg-blue-100';
      case 'draft':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  }

  getStatusIcon(): string {
    switch (this.project.status) {
      case 'active':
        return 'play-circle';
      case 'completed':
        return 'check-circle';
      case 'draft':
        return 'file-text';
      default:
        return 'circle';
    }
  }
}
