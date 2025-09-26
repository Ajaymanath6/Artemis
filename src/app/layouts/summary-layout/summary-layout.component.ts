import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CaseSummaryRow {
  icon: string;
  label: string;
  value: string;
  isLink?: boolean;
}

interface LegalRepresentationRow {
  attorneyName: string;
  lawFirm: string;
  type: string;
}

@Component({
  selector: 'app-summary-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-layout.component.html',
  styleUrls: ['./summary-layout.component.css']
})
export class SummaryLayoutComponent {
  @Input() caseDetails: any;

  viewMode: 'grid' | 'table' = 'table';

  caseSummaryRows: CaseSummaryRow[] = [
    {
      icon: 'ri-hashtag-line',
      label: 'Case Number',
      value: '24LBRO01256'
    },
    {
      icon: 'ri-information-line',
      label: 'Case Status',
      value: 'Pending - Case Initiated'
    },
    {
      icon: 'ri-building-line',
      label: 'Court',
      value: 'California - Los Angeles County Superior Courts',
      isLink: true
    },
    {
      icon: 'ri-file-text-line',
      label: 'Case Type',
      value: 'Personal Injury - Elder/Dependant Adult Abuse'
    },
    {
      icon: 'ri-calendar-line',
      label: 'Filing Date',
      value: '07 Jun 2024'
    },
    {
      icon: 'ri-user-line',
      label: 'Judge',
      value: 'Steven Thomas',
      isLink: true
    },
    {
      icon: 'ri-group-line',
      label: 'Parties',
      value: 'Plaintiff: Guy Hawkins, Kristin Watson | Defendant: Robert Fox, Roger Kinnaird'
    }
  ];

  legalRepresentationRows: LegalRepresentationRow[] = [
    {
      attorneyName: 'Martha Jones',
      lawFirm: 'Wisdom Law',
      type: 'Lead Attorney'
    },
    {
      attorneyName: 'John Smith',
      lawFirm: 'Smith & Associates',
      type: 'Co-Counsel'
    },
    {
      attorneyName: 'Sarah Johnson',
      lawFirm: 'Johnson Legal Group',
      type: 'Defense Attorney'
    },
    {
      attorneyName: 'Michael Brown',
      lawFirm: 'Brown Law Firm',
      type: 'Assistant Attorney'
    },
    {
      attorneyName: 'Emily Davis',
      lawFirm: 'Davis & Partners',
      type: 'Plaintiff Attorney'
    },
    {
      attorneyName: 'Robert Wilson',
      lawFirm: 'Wilson Legal Services',
      type: 'Corporate Counsel'
    },
    {
      attorneyName: 'Lisa Anderson',
      lawFirm: 'Anderson Law Office',
      type: 'Paralegal'
    },
    {
      attorneyName: 'David Miller',
      lawFirm: 'Miller & Associates',
      type: 'Senior Partner'
    }
  ];

  toggleViewMode(mode: 'grid' | 'table'): void {
    this.viewMode = mode;
  }
}
