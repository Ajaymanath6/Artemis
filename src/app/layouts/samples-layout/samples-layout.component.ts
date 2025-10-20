import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseCardComponent } from '../../components/ui/case-card/case-card.component';

interface SampleCase {
  id: string;
  title: string;
  description: string;
  projectName: string;
  addedDate: string;
  documentCount?: number;
  date?: string;
  court?: string;
  judge?: string;
  status?: string;
  type?: string;
  caseNumber?: string;
}

@Component({
  selector: 'app-samples-layout',
  standalone: true,
  imports: [CommonModule, CaseCardComponent],
  templateUrl: './samples-layout.component.html',
  styleUrl: './samples-layout.component.css',
})
export class SamplesLayoutComponent implements OnInit {
  @Input() viewMode: 'grid' | 'table' = 'grid';
  @Input() isSidebarCollapsed: boolean = false;

  sampleCases: SampleCase[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log('Samples Layout initialized');
    this.loadSampleCases();
  }

  private loadSampleCases(): void {
    try {
      const samples = localStorage.getItem('sampleCases');
      if (samples) {
        this.sampleCases = JSON.parse(samples);
        console.log('Loaded sample cases:', this.sampleCases.length);
      } else {
        // Default sample data if no samples exist
        this.sampleCases = [
          {
            id: '1',
            title: 'SAMPLE CONTRACT DISPUTE VS DEMO CORPORATION',
            description:
              'A representative example of a commercial contract dispute involving breach of terms.',
            projectName: 'NY Judgment Tracking',
            addedDate: new Date().toISOString(),
            court: 'Commercial Court',
            date: 'Jan 15, 2024',
            judge: 'Steven Thomas',
            status: 'Sample',
            type: 'Commercial',
            documentCount: 8,
            caseNumber: 'COM123456',
          },
          {
            id: '2',
            title: 'SAMPLE EMPLOYMENT LAW CASE VS TECH COMPANY',
            description:
              'Example employment law case demonstrating workplace rights and discrimination claims.',
            projectName: 'NY Judgment Tracking',
            addedDate: new Date().toISOString(),
            court: 'Labor Relations Court',
            date: 'Feb 20, 2024',
            judge: 'Maria Rodriguez',
            status: 'Sample',
            type: 'Employment',
            documentCount: 12,
            caseNumber: 'EMP789012',
          },
          {
            id: '3',
            title: 'SAMPLE PERSONAL INJURY VS INSURANCE CO',
            description:
              'Example personal injury case showing liability and damages claims process.',
            projectName: 'NY Judgment Tracking',
            addedDate: new Date().toISOString(),
            court: 'Superior Court',
            date: 'Mar 10, 2024',
            judge: 'Robert Chen',
            status: 'Sample',
            type: 'Personal Injury',
            documentCount: 15,
            caseNumber: 'PI345678',
          },
        ];
      }
    } catch (error) {
      console.warn('Failed to load sample cases:', error);
      this.sampleCases = [];
    }
  }

  // View mode toggle
  onToggleViewMode(mode: 'grid' | 'table'): void {
    this.viewMode = mode;
    console.log('View mode changed to:', mode);
  }

  onCaseClick(caseItem: SampleCase): void {
    console.log('Sample case clicked:', caseItem.title);
    // Navigate to case detail or perform action
  }

  onRemoveSample(caseItem: SampleCase, event: Event): void {
    event.stopPropagation();
    console.log('Removing from samples:', caseItem.title);

    // Remove from local array
    this.sampleCases = this.sampleCases.filter((c) => c.id !== caseItem.id);

    // Update localStorage
    try {
      localStorage.setItem('sampleCases', JSON.stringify(this.sampleCases));
      console.log('Updated samples in localStorage');
    } catch (error) {
      console.warn('Failed to update samples in localStorage:', error);
    }
  }

  // Method to refresh samples (can be called from parent components)
  refreshSamples(): void {
    this.loadSampleCases();
  }
}
