import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CaseData {
  id: string;
  title: string;
  caseId: string;
  court: string;
  date: string;
  type: string;
  status: string;
  icon: string;
  isUnread?: boolean;
  badge?: string;
  lastUpdated?: string;
}

@Component({
  selector: 'app-result-card',
  imports: [CommonModule],
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.css'
})
export class ResultCardComponent {
  @Input() caseData!: CaseData;
  @Input() showFileActions: boolean = true;
  @Output() cardClick = new EventEmitter<CaseData>();
  @Output() markAsRead = new EventEmitter<string>();

  onCardClick(): void {
    this.cardClick.emit(this.caseData);
    if (this.caseData.isUnread) {
      this.markAsRead.emit(this.caseData.id);
    }
  }
}
