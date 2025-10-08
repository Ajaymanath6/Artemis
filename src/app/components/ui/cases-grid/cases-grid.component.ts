import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultCardComponent, CaseData } from '../result-card/result-card.component';

@Component({
  selector: 'app-cases-grid',
  imports: [CommonModule, ResultCardComponent],
  templateUrl: './cases-grid.component.html',
  styleUrl: './cases-grid.component.css'
})
export class CasesGridComponent {
  @Input() caseData: CaseData[] = [];
  @Input() activeFilter: 'all' | 'unread' | 'new' = 'all';
  
  @Output() resultCardClick = new EventEmitter<CaseData>();
  @Output() markAsRead = new EventEmitter<string>();

  private unreadItems: Set<number> = new Set([1, 2, 4]);
  private newItems: Set<number> = new Set([]); // No new alerts initially - empty state

  getFilteredCaseData(): CaseData[] {
    let filteredData: CaseData[];
    
    switch (this.activeFilter) {
      case 'all':
        filteredData = this.caseData;
        break;
      case 'unread':
        filteredData = this.caseData.filter(case_ => case_.isUnread);
        break;
      case 'new':
        filteredData = this.caseData.filter(case_ => this.newItems.has(parseInt(case_.id)));
        break;
      default:
        filteredData = this.caseData;
    }
    
    // Return up to 10 cards
    return filteredData.slice(0, 10);
  }

  onResultCardClick(caseData: CaseData): void {
    this.resultCardClick.emit(caseData);
  }

  onResultCardMarkAsRead(caseId: string): void {
    this.markAsRead.emit(caseId);
  }
}
