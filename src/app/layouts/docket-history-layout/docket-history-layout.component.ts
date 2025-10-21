import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DocketHistoryEvent {
  id: string;
  date: string;
  time: string;
  eventType:
    | 'Filing'
    | 'Motion'
    | 'Hearing'
    | 'Order'
    | 'Settlement'
    | 'Judgment'
    | 'Appeal'
    | 'Document';
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
  styleUrl: './docket-history-layout.component.css',
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
    return this.docketHistory.filter((event) => event.date === this.dateFilter);
  }

  // Get unique dates from docket history
  get availableDates(): string[] {
    const dates = [...new Set(this.docketHistory.map((event) => event.date))];
    return dates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime()); // Most recent first
  }

  // Get counts for a specific date
  getDateCounts(date: string): {
    added: number;
    removed: number;
    changed: number;
  } {
    const eventsForDate = this.docketHistory.filter(
      (event) => event.date === date,
    );
    return {
      added: eventsForDate.filter((event) => event.actionType === 'Added')
        .length,
      removed: eventsForDate.filter((event) => event.actionType === 'Removed')
        .length,
      changed: eventsForDate.filter((event) => event.actionType === 'Changed')
        .length,
    };
  }

  // Get total counts for all dates
  get totalCounts(): { added: number; removed: number; changed: number } {
    return {
      added: this.docketHistory.filter((event) => event.actionType === 'Added')
        .length,
      removed: this.docketHistory.filter(
        (event) => event.actionType === 'Removed',
      ).length,
      changed: this.docketHistory.filter(
        (event) => event.actionType === 'Changed',
      ).length,
    };
  }

  // Format date for display
  formatDateForDisplay(date: string): string {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }

  // Get day name for sidebar
  getDayName(date: string): string {
    const today = new Date();
    const dateObj = new Date(date);
    const diffTime = Math.abs(today.getTime() - dateObj.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';

    return dateObj.toLocaleDateString('en-US', { weekday: 'short' });
  }

  // Get last 10 days for sidebar (including dates with no activity)
  get last10Days(): string[] {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 10; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      dates.push(date.toISOString().split('T')[0]); // Format: YYYY-MM-DD
    }

    return dates;
  }

  // Check if date has any activity
  hasActivity(date: string): boolean {
    return this.docketHistory.some((event) => event.date === date);
  }

  // Get mixed actions for a card type on the filtered date
  getMixedActions(cardType: string): {
    added: DocketHistoryEvent[];
    removed: DocketHistoryEvent[];
    changed: DocketHistoryEvent[];
  } {
    const events = this.filteredDocketHistory.filter((event) => {
      // Map event types to card types
      if (cardType === 'Case Details') return event.title.includes('Case');
      if (cardType === 'Parties') return event.title.includes('Parties');
      if (cardType === 'Attorney') return event.title.includes('Attorney');
      if (cardType === 'Documents') return event.title.includes('Documents');
      if (cardType === 'Docket Entries') return event.title.includes('Docket');
      return false;
    });

    return {
      added: events.filter((e) => e.actionType === 'Added'),
      removed: events.filter((e) => e.actionType === 'Removed'),
      changed: events.filter((e) => e.actionType === 'Changed'),
    };
  }

  // Check if a card type should be shown (has any activity)
  shouldShowCardType(cardType: string): boolean {
    const actions = this.getMixedActions(cardType);
    return (
      actions.added.length > 0 ||
      actions.removed.length > 0 ||
      actions.changed.length > 0
    );
  }

  // Check if action should be visible based on current filters
  shouldShowAction(actionType: 'Added' | 'Removed' | 'Changed'): boolean {
    if (this.dateFilter === 'all') {
      return true;
    }
    const eventsForDate = this.docketHistory.filter(
      (event) => event.date === this.dateFilter,
    );
    return eventsForDate.some((event) => event.actionType === actionType);
  }

  // Check if section 1 should be displayed (Case Details & Mixed Actions)
  shouldShowSection1(): boolean {
    return (
      this.shouldShowAction('Changed') || this.shouldShowCardType('Parties')
    );
  }

  // Check if section 2 should be displayed (Attorneys & Documents)
  shouldShowSection2(): boolean {
    return this.shouldShowAction('Added');
  }

  // Check if section 3 should be displayed (Removed & Changed Items)
  shouldShowSection3(): boolean {
    return this.shouldShowAction('Removed') || this.shouldShowAction('Changed');
  }

  docketHistory: DocketHistoryEvent[] = this.generateRecentDocketHistory();

  // Generate sample docket history for recent dates
  private generateRecentDocketHistory(): DocketHistoryEvent[] {
    const events: DocketHistoryEvent[] = [];
    const today = new Date();

    // Generate events for the last 10 days (some days with more activity, some with less)
    for (let i = 0; i < 10; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];

      const eventTypes = ['Filing', 'Document', 'Motion', 'Order'] as const;
      const actionTypes = ['Added', 'Removed', 'Changed'] as const;
      const titles = [
        'Case Details',
        'Parties',
        'Attorney',
        'Documents',
        'Docket Entries',
      ];

      // Different activity levels for different days
      let eventCount = 1;
      if (i === 0)
        eventCount = 3; // Today - high activity
      else if (i === 1)
        eventCount = 2; // Yesterday - medium activity
      else if (i === 2)
        eventCount = 4; // Day before - high activity
      else if (i % 2 === 0)
        eventCount = 2; // Some days medium
      else eventCount = 1; // Some days low

      for (let j = 0; j < eventCount; j++) {
        const actionType =
          actionTypes[Math.floor(Math.random() * actionTypes.length)];
        const title = titles[Math.floor(Math.random() * titles.length)];
        const eventType =
          eventTypes[Math.floor(Math.random() * eventTypes.length)];

        const event: DocketHistoryEvent = {
          id: `DH${i}${j}${Date.now()}`,
          date: dateStr,
          time: `${9 + j * 2}:${j % 2 === 0 ? '00' : '30'} AM`,
          eventType: eventType,
          actionType: actionType,
          title: `${title} ${actionType}`,
          description: `${title} ${actionType.toLowerCase()} - Sample event for ${dateStr}`,
          filedBy: ['Court Administrator', 'Court Clerk', 'Defense Attorney'][
            Math.floor(Math.random() * 3)
          ],
          status: 'Completed',
        };

        // Add change details for Changed events
        if (actionType === 'Changed') {
          event.changeDetails = {
            from: `Original ${title} Info`,
            to: `Updated ${title} Info`,
          };
        }

        events.push(event);
      }
    }

    return events;
  }

  getActionIcon(actionType: string): string {
    const iconMap: { [key: string]: string } = {
      Added: 'ri-add-large-line',
      Removed: 'ri-close-large-line',
      Changed: 'ri-refresh-line',
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
      case 'Filing':
        return 'Docket Entries';
      case 'Document':
        return 'Documents';
      default:
        return eventType;
    }
  }
}
