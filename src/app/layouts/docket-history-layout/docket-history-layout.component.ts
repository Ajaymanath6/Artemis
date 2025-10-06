import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DocketHistoryEvent {
  id: string;
  date: string;
  time: string;
  eventType: 'Filing' | 'Motion' | 'Hearing' | 'Order' | 'Settlement' | 'Judgment' | 'Appeal' | 'Document';
  actionType: 'Added' | 'Removed' | 'Changed';
  title: string;
  description: string;
  filedBy: string;
  judge?: string;
  document?: string;
  status: 'Completed' | 'Scheduled' | 'Pending' | 'Cancelled';
  changeDetails?: {
    from: string;
    to: string;
  };
}

@Component({
  selector: 'app-docket-history-layout',
  imports: [CommonModule],
  templateUrl: './docket-history-layout.component.html',
  styleUrl: './docket-history-layout.component.css'
})
export class DocketHistoryLayoutComponent {
  @Input() caseDetails: any;
  viewMode: 'grid' | 'table' = 'grid';
  actionFilter: 'all' | 'Added' | 'Removed' | 'Changed' = 'all';

  toggleViewMode(mode: 'grid' | 'table'): void {
    this.viewMode = mode;
    console.log('View mode changed to:', mode);
  }

  setActionFilter(filter: 'all' | 'Added' | 'Removed' | 'Changed'): void {
    this.actionFilter = filter;
    console.log('Action filter changed to:', filter);
  }

  get filteredDocketHistory(): DocketHistoryEvent[] {
    if (this.actionFilter === 'all') {
      return this.docketHistory;
    }
    return this.docketHistory.filter(event => event.actionType === this.actionFilter);
  }

  docketHistory: DocketHistoryEvent[] = [
    {
      id: 'DH001',
      date: '2025-06-25',
      time: '09:15 AM',
      eventType: 'Filing',
      actionType: 'Added',
      title: 'Docket Entry Added',
      description: 'Financial info for BAPTISTE, AMBER LAUREL; Transaction Assessment $90.00',
      filedBy: 'Court Administrator',
      status: 'Completed'
    },
    {
      id: 'DH002',
      date: '2025-09-26',
      time: '11:30 AM',
      eventType: 'Document',
      actionType: 'Added',
      title: 'Document Added',
      description: 'Memorandum of Points and Authorities in Opposition. - Memorandum of Points and Authorities in Opposition MICHAEL GOGUEN\'S OPPOSITION TO AMBER BAPTISTE\'S Comment MICHAEL GOGUEN\'S OPPOSITION TO AMBER BAPTISTE\'S MOTION TO QUASH SUBPOENA SERVED ON NON-PARTY COX COMMUNICATIONS',
      filedBy: 'MICHAEL GOGUEN',
      document: 'Memorandum_Opposition.pdf',
      status: 'Completed'
    },
    {
      id: 'DH003',
      date: '2025-06-24',
      time: '02:30 PM',
      eventType: 'Filing',
      actionType: 'Removed',
      title: 'Docket Entry Removed',
      description: 'Previous financial assessment removed due to administrative error',
      filedBy: 'Court Administrator',
      status: 'Completed'
    },
    {
      id: 'DH004',
      date: '2025-09-25',
      time: '04:15 PM',
      eventType: 'Document',
      actionType: 'Removed',
      title: 'Document Removed',
      description: 'Previous version of memorandum removed and replaced with updated filing',
      filedBy: 'Defense Attorney',
      status: 'Completed'
    },
    {
      id: 'DH005',
      date: '2025-06-23',
      time: '10:15 AM',
      eventType: 'Filing',
      actionType: 'Changed',
      title: 'Docket Entry Changed',
      description: 'Financial assessment amount updated from $80.00 to $90.00',
      filedBy: 'Court Clerk',
      status: 'Completed',
      changeDetails: {
        from: 'Assessment: $80.00',
        to: 'Assessment: $90.00'
      }
    },
    {
      id: 'DH006',
      date: '2025-09-24',
      time: '03:45 PM',
      eventType: 'Document',
      actionType: 'Changed',
      title: 'Document Changed',
      description: 'Memorandum filing status updated from draft to final submission',
      filedBy: 'Defense Attorney',
      status: 'Completed',
      changeDetails: {
        from: 'Status: Draft',
        to: 'Status: Final Submission'
      }
    }
  ];

  getActionIcon(actionType: string): string {
    const iconMap: { [key: string]: string } = {
      'Added': 'ri-add-circle-line',
      'Removed': 'ri-close-circle-line', 
      'Changed': 'ri-refresh-line'
    };
    return iconMap[actionType] || 'ri-information-line';
  }

  onDocumentClick(document: string): void {
    console.log('Document clicked:', document);
    // Implement document download/view functionality
  }

  // Get last updated time
  getLastUpdatedTime(): string {
    return '18 min ago';
  }

  // Get event type label for filter buttons
  getEventTypeLabel(eventType: string): string {
    switch (eventType) {
      case 'Filing': return 'Docket Entries';
      case 'Document': return 'Documents';
      default: return eventType;
    }
  }
}
