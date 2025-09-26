import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DocketEntry {
  date: string;
  entry: string;
  description: string;
  filedBy: string;
  document?: string;
}

@Component({
  selector: 'app-docket-entries-layout',
  imports: [CommonModule],
  templateUrl: './docket-entries-layout.component.html',
  styleUrl: './docket-entries-layout.component.css'
})
export class DocketEntriesLayoutComponent {
  @Input() caseDetails: any;

  docketEntries: DocketEntry[] = [
    {
      date: '07 Jun 2024',
      entry: '1',
      description: 'Complaint filed',
      filedBy: 'Plaintiff',
      document: 'Initial Complaint.pdf'
    },
    {
      date: '10 Jun 2024',
      entry: '2', 
      description: 'Summons issued',
      filedBy: 'Court',
      document: 'Summons.pdf'
    },
    {
      date: '15 Jun 2024',
      entry: '3',
      description: 'Answer filed',
      filedBy: 'Defendant',
      document: 'Answer to Complaint.pdf'
    },
    {
      date: '20 Jun 2024',
      entry: '4',
      description: 'Motion to dismiss filed',
      filedBy: 'Defendant',
      document: 'Motion to Dismiss.pdf'
    },
    {
      date: '25 Jun 2024',
      entry: '5',
      description: 'Opposition to motion filed',
      filedBy: 'Plaintiff',
      document: 'Opposition Brief.pdf'
    },
    {
      date: '30 Jun 2024',
      entry: '6',
      description: 'Reply brief filed',
      filedBy: 'Defendant',
      document: 'Reply Brief.pdf'
    },
    {
      date: '05 Jul 2024',
      entry: '7',
      description: 'Motion hearing scheduled',
      filedBy: 'Court'
    },
    {
      date: '12 Jul 2024',
      entry: '8',
      description: 'Discovery order issued',
      filedBy: 'Court',
      document: 'Discovery Order.pdf'
    }
  ];
}
