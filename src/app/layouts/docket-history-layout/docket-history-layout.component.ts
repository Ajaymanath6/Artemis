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
  dateFilter: 'all' | string = 'all';

  toggleViewMode(mode: 'grid' | 'table'): void {
    this.viewMode = mode;
    console.log('View mode changed to:', mode);
  }

  setDateFilter(filter: 'all' | string): void {
    this.dateFilter = filter;
    console.log('Date filter changed to:', filter);
  }

  get filteredDocketHistory(): DocketHistoryEvent[] {
    if (this.dateFilter === 'all') {
      return this.docketHistory;
    }
    return this.docketHistory.filter(event => event.date === this.dateFilter);
  }

  // Get unique dates from docket history
  get availableDates(): string[] {
    const dates = [...new Set(this.docketHistory.map(event => event.date))];
    return dates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime()); // Most recent first
  }

  // Get counts for a specific date
  getDateCounts(date: string): { added: number, removed: number, changed: number } {
    const eventsForDate = this.docketHistory.filter(event => event.date === date);
    return {
      added: eventsForDate.filter(event => event.actionType === 'Added').length,
      removed: eventsForDate.filter(event => event.actionType === 'Removed').length,
      changed: eventsForDate.filter(event => event.actionType === 'Changed').length
    };
  }

  // Get total counts for all dates
  get totalCounts(): { added: number, removed: number, changed: number } {
    return {
      added: this.docketHistory.filter(event => event.actionType === 'Added').length,
      removed: this.docketHistory.filter(event => event.actionType === 'Removed').length,
      changed: this.docketHistory.filter(event => event.actionType === 'Changed').length
    };
  }

  // Format date for display
  formatDateForDisplay(date: string): string {
    return new Date(date).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  }

  // Check if action should be visible based on current filters
  shouldShowAction(actionType: 'Added' | 'Removed' | 'Changed'): boolean {
    if (this.dateFilter === 'all') {
      return true;
    }
    const eventsForDate = this.docketHistory.filter(event => event.date === this.dateFilter);
    return eventsForDate.some(event => event.actionType === actionType);
  }

  docketHistory: DocketHistoryEvent[] = [
    // 2025-06-23 Events (2 Added, 1 Removed, 2 Changed)
    {
      id: 'DH001',
      date: '2025-06-23',
      time: '09:15 AM',
      eventType: 'Filing',
      actionType: 'Added',
      title: 'Case Details Added',
      description: 'Case title and parties information added',
      filedBy: 'Court Administrator',
      status: 'Completed'
    },
    {
      id: 'DH002',
      date: '2025-06-23',
      time: '10:30 AM',
      eventType: 'Document',
      actionType: 'Added',
      title: 'Parties Added',
      description: 'Hayden Griffin Haby, III - Defendant added to case',
      filedBy: 'Court Clerk',
      status: 'Completed'
    },
    {
      id: 'DH003',
      date: '2025-06-23',
      time: '11:00 AM',
      eventType: 'Filing',
      actionType: 'Removed',
      title: 'Case Details Removed',
      description: 'Previous case title removed due to correction',
      filedBy: 'Court Administrator',
      status: 'Completed'
    },
    {
      id: 'DH004',
      date: '2025-06-23',
      time: '02:15 PM',
      eventType: 'Filing',
      actionType: 'Changed',
      title: 'Case Title Changed',
      description: 'Case title updated to add missing information',
      filedBy: 'Court Clerk',
      status: 'Completed',
      changeDetails: {
        from: 'CAPITAL ONE NA vs. ELLIS, JOHN',
        to: 'CAPITAL ONE NA vs. ELLIS, JOHN JGH'
      }
    },
    {
      id: 'DH005',
      date: '2025-06-23',
      time: '03:45 PM',
      eventType: 'Document',
      actionType: 'Changed',
      title: 'Attorney Changed',
      description: 'Attorney information updated for defendant',
      filedBy: 'Defense Attorney',
      status: 'Completed',
      changeDetails: {
        from: 'Dante A. Marinucci',
        to: 'CLAY KENNETH KELLER'
      }
    },
    
    // 2025-06-24 Events (1 Added, 2 Removed, 0 Changed)
    {
      id: 'DH006',
      date: '2025-06-24',
      time: '09:00 AM',
      eventType: 'Document',
      actionType: 'Added',
      title: 'Documents Added',
      description: 'SUMMONS ON COMPLAINT BY CERTIFIED MAIL ISSUED',
      filedBy: 'Court Administrator',
      status: 'Completed'
    },
    {
      id: 'DH007',
      date: '2025-06-24',
      time: '11:15 AM',
      eventType: 'Filing',
      actionType: 'Removed',
      title: 'Parties Removed',
      description: 'Duplicate party entries removed',
      filedBy: 'Court Clerk',
      status: 'Completed'
    },
    {
      id: 'DH008',
      date: '2025-06-24',
      time: '02:30 PM',
      eventType: 'Document',
      actionType: 'Removed',
      title: 'Attorney Removed',
      description: 'Previous attorney representation removed',
      filedBy: 'Court Administrator',
      status: 'Completed'
    },
    
    // 2025-06-25 Events (3 Added, 0 Removed, 1 Changed)
    {
      id: 'DH009',
      date: '2025-06-25',
      time: '08:30 AM',
      eventType: 'Filing',
      actionType: 'Added',
      title: 'Attorney Added',
      description: 'New attorney representation added for defendant',
      filedBy: 'Court Clerk',
      status: 'Completed'
    },
    {
      id: 'DH010',
      date: '2025-06-25',
      time: '10:00 AM',
      eventType: 'Document',
      actionType: 'Added',
      title: 'Docket Entries Added',
      description: 'New docket entry for service documentation',
      filedBy: 'Court Administrator',
      status: 'Completed'
    },
    {
      id: 'DH011',
      date: '2025-06-25',
      time: '01:15 PM',
      eventType: 'Filing',
      actionType: 'Added',
      title: 'Documents Added',
      description: 'Additional court documentation filed',
      filedBy: 'Court Clerk',
      status: 'Completed'
    },
    {
      id: 'DH012',
      date: '2025-06-25',
      time: '03:45 PM',
      eventType: 'Document',
      actionType: 'Changed',
      title: 'Parties Changed',
      description: 'Party information updated for accuracy',
      filedBy: 'Defense Attorney',
      status: 'Completed',
      changeDetails: {
        from: 'Original Party Info',
        to: 'Updated Party Info'
      }
    }
  ];

  getActionIcon(actionType: string): string {
    const iconMap: { [key: string]: string } = {
      'Added': 'ri-add-large-line',
      'Removed': 'ri-close-large-line', 
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
