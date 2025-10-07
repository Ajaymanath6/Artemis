import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertPanelComponent } from '../../components/ui/alert-panel/alert-panel.component';

@Component({
  selector: 'app-alertlist-layout',
  standalone: true,
  imports: [CommonModule, AlertPanelComponent],
  templateUrl: './alertlist-layout.component.html',
  styleUrls: ['./alertlist-layout.component.css']
})
export class AlertlistLayoutComponent {
  // Alert panel state
  @Input() isAlertPanelCollapsed: boolean = false;
  
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

  // Read/Unread state management
  private unreadItems: Set<number> = new Set([1, 2, 4]); // Cases 1, 2, and 4 start as unread

  // Alert panel methods
  onCloseAlert(): void {
    this.closeAlert.emit();
  }

  onSaveAlert(alertData: any): void {
    console.log('Alert data from layout:', alertData);
    this.saveAlert.emit(alertData);
  }

  onResearchQuestionChanged(researchQuestion: string): void {
    this.researchQuestionChanged.emit(researchQuestion);
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
}