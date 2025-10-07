import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertRightPanelComponent } from '../../components/alert-right-panel/alert-right-panel.component';
import { CasesGridComponent } from '../../components/ui/cases-grid/cases-grid.component';
import { CaseData } from '../../components/ui/result-card/result-card.component';

@Component({
  selector: 'app-alertlist-layout',
  standalone: true,
  imports: [CommonModule, AlertRightPanelComponent, CasesGridComponent],
  templateUrl: './alertlist-layout.component.html',
  styleUrls: ['./alertlist-layout.component.css']
})
export class AlertlistLayoutComponent {
  // Alert panel state
  @Input() isAlertPanelCollapsed: boolean = false;
  @Input() isSidebarCollapsed: boolean = false;
  
  // Search state inputs
  @Input() isSearching: boolean = false;
  @Input() evaluatedCount: number = 0;
  @Input() totalCount: number = 8000;
  @Input() shouldUpdateAlertHeader: boolean = false;
  @Input() caseCount: number = 0;
  
  // Alert panel management
  @Output() closeAlert = new EventEmitter<void>();
  @Output() saveAlert = new EventEmitter<any>();
  @Output() researchQuestionChanged = new EventEmitter<string>();
  @Output() sidebarCollapseRequested = new EventEmitter<void>();

  // Read/Unread state management
  private unreadItems: Set<number> = new Set([1, 2, 4]); // Cases 1, 2, and 4 start as unread
  private newItems: Set<number> = new Set([1, 4]); // Cases 1 and 4 are "new alerts"
  
  // Sidebar filtering
  activeFilter: 'all' | 'unread' | 'new' = 'all';
  
  // Search history
  searchHistory: string[] = [];
  
  // Case detail state
  selectedCase: CaseData | null = null;
  showCaseDetail: boolean = false;
  
  // Case data for result cards
  caseData: CaseData[] = [
    {
      id: '1',
      title: 'Smith v. Johnson Manufacturing Corp.',
      caseId: 'CIV537691',
      court: 'Cook County Circuit Court',
      date: '15 March 2023',
      type: 'Civil',
      status: 'Active',
      icon: 'ri-scales-3-line',
      isUnread: true,
      badge: 'New',
      lastUpdated: 'Updated 2 hours ago'
    },
    {
      id: '2',
      title: 'Wilson v. Tech Solutions Inc.',
      caseId: 'CIV567892',
      court: 'Federal District Court',
      date: '22 April 2023',
      type: 'Employment',
      status: 'Discovery',
      icon: 'ri-briefcase-line',
      isUnread: true,
      badge: 'Updated',
      lastUpdated: 'Updated 4 hours ago'
    },
    {
      id: '3',
      title: 'Davis v. Metropolitan Insurance',
      caseId: 'CIV901234',
      court: 'State Supreme Court',
      date: '8 February 2023',
      type: 'Insurance',
      status: 'Settlement',
      icon: 'ri-file-shield-line',
      isUnread: false,
      lastUpdated: 'Updated 3 days ago'
    },
    {
      id: '4',
      title: 'Brown v. City Municipal Authority',
      caseId: 'CIV345678',
      court: 'Municipal Court',
      date: '30 January 2023',
      type: 'Civil Rights',
      status: 'Appeal',
      icon: 'ri-government-line',
      isUnread: true,
      badge: 'New Update',
      lastUpdated: 'Updated 1 hour ago'
    },
    {
      id: '5',
      title: 'Miller v. Healthcare Partners LLC',
      caseId: 'CIV789012',
      court: 'Superior Court',
      date: '12 May 2023',
      type: 'Medical Malpractice',
      status: 'Trial',
      icon: 'ri-heart-pulse-line',
      isUnread: false,
      lastUpdated: 'Updated yesterday'
    }
  ];

  // Alert panel methods
  onCloseAlert(): void {
    this.closeAlert.emit();
  }

  onSaveAlert(alertData: any): void {
    console.log('Alert data from layout:', alertData);
    
    // Add research question to history when alert is saved
    if (alertData.researchQuestion && alertData.researchQuestion.trim()) {
      this.addToHistory(alertData.researchQuestion.trim());
    }
    
    this.saveAlert.emit(alertData);
  }

  onResearchQuestionChanged(researchQuestion: string): void {
    this.researchQuestionChanged.emit(researchQuestion);
    
    // Add to history when research question is saved (not on every change)
    if (researchQuestion.trim() && !this.searchHistory.includes(researchQuestion.trim())) {
      this.addToHistory(researchQuestion.trim());
    }
  }

  // History management methods
  addToHistory(query: string): void {
    if (query && !this.searchHistory.includes(query)) {
      this.searchHistory.unshift(query); // Add to beginning
      if (this.searchHistory.length > 5) {
        this.searchHistory = this.searchHistory.slice(0, 5); // Keep only last 5
      }
    }
  }

  selectHistoryItem(historyItem: string): void {
    console.log('Selected history item:', historyItem);
    // Here you could emit an event or trigger a search with this historical query
  }

  // Read/Unread methods
  isUnread(caseId: number): boolean {
    return this.unreadItems.has(caseId);
  }

  markAsRead(caseId: number): void {
    this.unreadItems.delete(caseId);
    console.log(`Case ${caseId} marked as read`);
  }

  markAllAsRead(): void {
    this.unreadItems.clear();
    console.log('All cases marked as read');
  }

  getUnreadCount(): number {
    return this.unreadItems.size;
  }

  getNewCount(): number {
    return this.newItems.size;
  }

  // Sidebar navigation methods
  setActiveFilter(filter: 'all' | 'unread' | 'new'): void {
    this.activeFilter = filter;
    console.log(`Filter changed to: ${filter}`);
  }

  getNavButtonClass(filter: 'all' | 'unread' | 'new'): string {
    return this.activeFilter === filter 
      ? 'bg-gray-100 text-gray-900' 
      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900';
  }

  shouldShowCase(caseId: number): boolean {
    switch (this.activeFilter) {
      case 'all':
        return true;
      case 'unread':
        return this.unreadItems.has(caseId);
      case 'new':
        return this.newItems.has(caseId);
      default:
        return true;
    }
  }

  // Get filtered case data based on active filter
  getFilteredCaseData(): CaseData[] {
    switch (this.activeFilter) {
      case 'all':
        return this.caseData;
      case 'unread':
        return this.caseData.filter(case_ => case_.isUnread);
      case 'new':
        return this.caseData.filter(case_ => this.newItems.has(parseInt(case_.id)));
      default:
        return this.caseData;
    }
  }

  // Handle result card click
  onResultCardClick(caseData: CaseData): void {
    this.selectedCase = caseData;
    this.showCaseDetail = true;
    // Hide the main sidebar and collapse alert panel to show case detail
    this.sidebarCollapseRequested.emit();
  }
  
  // Handle back from case detail
  onBackFromCaseDetail(): void {
    this.selectedCase = null;
    this.showCaseDetail = false;
  }

  // Handle mark as read from result card
  onResultCardMarkAsRead(caseId: string): void {
    const numericId = parseInt(caseId);
    this.unreadItems.delete(numericId);
    
    // Update the case data
    const case_ = this.caseData.find(c => c.id === caseId);
    if (case_) {
      case_.isUnread = false;
    }
    
    console.log(`Case ${caseId} marked as read`);
  }

  getFilteredCaseCount(): number {
    switch (this.activeFilter) {
      case 'all':
        return this.caseCount;
      case 'unread':
        return this.getUnreadCount();
      case 'new':
        return this.getNewCount();
      default:
        return this.caseCount;
    }
  }
}