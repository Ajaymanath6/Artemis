import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertRightPanelComponent } from '../../components/alert-right-panel/alert-right-panel.component';
import { CasesGridComponent } from '../../components/ui/cases-grid/cases-grid.component';
import { AlertsGridComponent } from '../../components/ui/alerts-grid/alerts-grid.component';
import { CaseData } from '../../components/ui/result-card/result-card.component';
import { AlertData } from '../../components/ui/alert-card/alert-card.component';

@Component({
  selector: 'app-alertlist-layout',
  standalone: true,
  imports: [CommonModule, AlertRightPanelComponent, CasesGridComponent, AlertsGridComponent],
  templateUrl: './alertlist-layout.component.html',
  styleUrls: ['./alertlist-layout.component.css']
})
export class AlertlistLayoutComponent {
  // Alert panel state
  @Input() isAlertPanelCollapsed: boolean = false;
  isRightPanelExpanded: boolean = false; // For 50% width expansion;
  @Input() isSidebarCollapsed: boolean = false;
  
  // Search state inputs
  @Input() isSearching: boolean = false;
  @Input() evaluatedCount: number = 0;
  @Input() totalCount: number = 8000;
  @Input() shouldUpdateAlertHeader: boolean = false;
  @Input() caseCount: number = 0;
  @Input() isCreatingAlert: boolean = false;
  @Input() selectedResearchQuestion: string = '';
  
  // Alert panel management
  @Output() closeAlert = new EventEmitter<void>();
  @Output() saveAlert = new EventEmitter<any>();
  @Output() researchQuestionChanged = new EventEmitter<string>();
  @Output() sidebarCollapseRequested = new EventEmitter<void>();
  @Output() alertPanelCollapseRequested = new EventEmitter<void>();
  @Output() historyAlertSelected = new EventEmitter<string>();
  @Output() filteredCaseCountChanged = new EventEmitter<number>();
  @Output() alertSelected = new EventEmitter<AlertData>();
  @Output() sidebarFilterChanged = new EventEmitter<string>();
  @Output() expandCases = new EventEmitter<AlertData>();

  @ViewChild(AlertRightPanelComponent) alertRightPanel!: AlertRightPanelComponent;

  // Read/Unread state management
  private unreadItems: Set<number> = new Set([1, 2, 4]); // Cases 1, 2, and 4 start as unread
  private newItems: Set<number> = new Set([]); // No new alerts initially - empty state
  
  // Sidebar filtering
  activeFilter: 'all' | 'unread' | 'new' = 'all';
  
  // Search history
  searchHistory: string[] = [];
  
  // Case detail state
  selectedCase: CaseData | null = null;
  showCaseDetail: boolean = false;
  
  // Alert view state - default to showing alerts since 'all' filter shows alerts
  showingAlerts: boolean = true; // true when showing alert cards, false when showing case cards
  selectedAlert: AlertData | null = null;
  
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

  // Saved alerts data
  savedAlerts: AlertData[] = [
    {
      id: '1',
      name: 'New IBM Cases',
      isActive: true,
      caseCount: 12,
      recipients: 3,
      researchQuestion: 'IBM technology patents intellectual property lawsuits',
      timing: 'immediate',
      createdDate: '2 days ago',
      lastUpdated: '1 hour ago'
    },
    {
      id: '2', 
      name: 'Qualcomm (Patent)',
      isActive: true,
      caseCount: 8,
      recipients: 2,
      researchQuestion: 'Qualcomm patent disputes semiconductor technology',
      timing: 'daily',
      createdDate: '1 week ago',
      lastUpdated: '3 hours ago'
    },
    {
      id: '3',
      name: 'LA Wildfires',
      isActive: true,
      caseCount: 15,
      recipients: 4,
      researchQuestion: 'Los Angeles wildfires insurance claims property damage',
      timing: 'immediate',
      createdDate: '3 days ago',
      lastUpdated: '30 minutes ago'
    },
    {
      id: '4',
      name: 'Data Breach',
      isActive: false,
      caseCount: 6,
      recipients: 1,
      researchQuestion: 'data breach cybersecurity privacy violations GDPR',
      timing: 'daily',
      createdDate: '1 week ago',
      lastUpdated: '2 hours ago'
    }
  ];

  // Alert panel methods
  onCloseAlert(): void {
    this.closeAlert.emit();
  }

  onCancelAlert(): void {
    // Collapse the alert panel when cancel is clicked
    this.alertPanelCollapseRequested.emit();
  }

  onSaveAlert(alertData: any): void {
    console.log('Alert data from layout:', alertData);
    
    // Add research question to history when alert is saved
    if (alertData.researchQuestion && alertData.researchQuestion.trim()) {
      this.addToHistory(alertData.researchQuestion.trim());
    }

    // Create new saved alert from the form data with processing state
    const newAlert: AlertData = {
      id: (this.savedAlerts.length + 1).toString(),
      name: alertData.researchQuestion.substring(0, 50) + (alertData.researchQuestion.length > 50 ? '...' : ''),
      isActive: true,
      caseCount: 0, // Will be updated after processing
      recipients: alertData.recipients === 'everyone' ? 5 : Object.values(alertData.selectedUsers).filter(Boolean).length,
      researchQuestion: alertData.researchQuestion,
      timing: alertData.timing,
      createdDate: 'just now',
      lastUpdated: 'just now',
      isProcessing: true,
      processingStatus: 'Searching for cases...'
    };

    // Add to saved alerts
    this.savedAlerts.unshift(newAlert);
    console.log('New alert saved with processing state:', newAlert);
    
    // Simulate realistic processing status updates (but no automatic completion)
    setTimeout(() => {
      if (newAlert.isProcessing) {
        newAlert.processingStatus = 'Analyzing search criteria...';
      }
    }, 2000);
    
    setTimeout(() => {
      if (newAlert.isProcessing) {
        newAlert.processingStatus = 'Searching databases...';
      }
    }, 5000);
    
    setTimeout(() => {
      if (newAlert.isProcessing) {
        newAlert.processingStatus = 'Processing results...';
      }
    }, 10000);
    
    // Alert will stay in processing state until manually completed or real backend responds
    console.log('Alert will remain in processing state until backend completes or manual intervention');
    
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
    // Emit the selected alert to set it in the alert panel
    this.historyAlertSelected.emit(historyItem);
    // Expand the alert panel if it's collapsed
    if (this.isAlertPanelCollapsed) {
      this.alertPanelCollapseRequested.emit(); // This will toggle/expand the panel
    }
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
    
    // Emit filter change for search bar update
    this.sidebarFilterChanged.emit(filter);
    
    // Determine what to show based on filter
    if (filter === 'all') {
      this.showingAlerts = true; // Show alert cards in 'all' mode
      this.showCaseDetail = false;
      this.selectedAlert = null;
    } else {
      this.showingAlerts = false; // Show case cards for 'unread' and 'new'
    }
    
    // Auto-collapse alert panel when "New alerts" is selected and there are no new alerts
    if (filter === 'new' && this.getNewCount() === 0) {
      this.alertPanelCollapseRequested.emit();
      console.log('Alert panel collapse requested - no new alerts');
    }
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

  onFilteredCaseCountChanged(count: number): void {
    this.filteredCaseCountChanged.emit(count);
  }

  // Alert card interaction methods
  onAlertClick(alertData: AlertData): void {
    console.log('Alert clicked:', alertData);
    this.selectedAlert = alertData;
    
    // Emit alert selection for search bar update
    this.alertSelected.emit(alertData);
    
    // Ensure we're showing alerts in main content area
    this.activeFilter = 'all';
    this.showingAlerts = true;
    this.sidebarFilterChanged.emit('all');
    
    // Show cases for this alert in the RIGHT PANEL
    this.showCaseDetail = false; // Show cases list, not individual case detail
    
    // Expand alert panel if collapsed to show the cases
    if (this.isAlertPanelCollapsed) {
      this.alertPanelCollapseRequested.emit(); // This will expand the panel
    }
    
    // Start loading cases with spinner
    setTimeout(() => {
      if (this.alertRightPanel) {
        this.alertRightPanel.startLoadingCases();
        console.log('Started loading cases for alert:', alertData.name);
        
        // Simulate loading delay then show cases
        setTimeout(() => {
          this.alertRightPanel.stopLoadingCases();
          console.log('Finished loading cases for alert:', alertData.name);
        }, 2000); // 2 second loading simulation
      }
    }, 0);
  }

  onToggleAlert(event: {alert: AlertData, isActive: boolean}): void {
    console.log('Alert toggled:', event.alert.name, 'Active:', event.isActive);
    // Update the alert's active status
    const alert = this.savedAlerts.find(a => a.id === event.alert.id);
    if (alert) {
      alert.isActive = event.isActive;
    }
  }

  onEditAlert(alertData: AlertData): void {
    console.log('Edit alert:', alertData);
    this.selectedAlert = alertData;
    this.isRightPanelExpanded = false; // Collapse to normal width for editing
    // Expand alert panel to show edit form
    if (this.isAlertPanelCollapsed) {
      this.alertPanelCollapseRequested.emit(); // This toggles the panel
    }
  }

  onDeleteAlert(alertData: AlertData): void {
    console.log('Delete alert:', alertData);
    // Remove alert from saved alerts
    this.savedAlerts = this.savedAlerts.filter(a => a.id !== alertData.id);
  }

  onExpandCases(alertData: AlertData): void {
    console.log('Expand cases for alert:', alertData);
    this.isRightPanelExpanded = true; // Expand right panel to 50% width
    this.expandCases.emit(alertData);
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

  // Footer button actions
  onRefresh(): void {
    console.log('Refreshing data...');
    // Add refresh logic here - emit event to parent or reload data
    window.location.reload();
  }

  onExport(): void {
    console.log('Exporting data...');
    // Add export logic here - could export alerts or cases based on current view
    const dataToExport = this.showingAlerts ? this.savedAlerts : this.caseData;
    const dataStr = JSON.stringify(dataToExport, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = this.showingAlerts ? 'alerts.json' : 'cases.json';
    link.click();
    URL.revokeObjectURL(url);
  }

  onCreateAlert(): void {
    console.log('Creating new alert...');
    // Clear any selected alert and expand panel to show create form
    this.selectedAlert = null;
    this.isRightPanelExpanded = false; // Collapse to normal width for creating
    if (this.isAlertPanelCollapsed) {
      this.alertPanelCollapseRequested.emit(); // This toggles the panel
    }
  }

  // Method to manually complete alert processing (for testing or when backend responds)
  completeAlertProcessing(alertId: string, finalCaseCount: number): void {
    const alert = this.savedAlerts.find(a => a.id === alertId);
    if (alert && alert.isProcessing) {
      alert.isProcessing = false;
      alert.processingStatus = undefined;
      alert.caseCount = finalCaseCount;
      alert.lastUpdated = 'just now';
      console.log('Alert processing completed manually:', alert);
    }
  }
}