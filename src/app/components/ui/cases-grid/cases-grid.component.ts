import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultCardComponent, CaseData } from '../result-card/result-card.component';

@Component({
  selector: 'app-cases-grid',
  imports: [CommonModule, ResultCardComponent],
  templateUrl: './cases-grid.component.html',
  styleUrl: './cases-grid.component.css'
})
export class CasesGridComponent implements OnChanges {
  @Input() caseData: CaseData[] = [];
  @Input() activeFilter: 'all' | 'unread' | 'new' = 'all';
  
  @Output() resultCardClick = new EventEmitter<CaseData>();
  @Output() markAsRead = new EventEmitter<string>();
  @Output() filteredCaseCountChanged = new EventEmitter<number>();

  private unreadItems: Set<number> = new Set([1, 2, 4]);
  private newItems: Set<number> = new Set([]); // No new alerts initially - empty state
  private cachedFilteredData: CaseData[] = [];
  private lastEmittedCount: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['caseData'] || changes['activeFilter']) {
      this.updateFilteredData();
    }
  }

  private updateFilteredData(): void {
    this.cachedFilteredData = this.calculateFilteredData();
    const newCount = this.cachedFilteredData.length;
    
    // Only emit if count has changed to avoid unnecessary updates
    if (newCount !== this.lastEmittedCount) {
      this.lastEmittedCount = newCount;
      this.filteredCaseCountChanged.emit(newCount);
    }
  }

  private calculateFilteredData(): CaseData[] {
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

  getFilteredCaseData(): CaseData[] {
    // Return cached data if available, otherwise calculate
    if (this.cachedFilteredData.length === 0 && this.caseData.length > 0) {
      this.updateFilteredData();
    }
    return this.cachedFilteredData;
  }

  onResultCardClick(caseData: CaseData): void {
    this.resultCardClick.emit(caseData);
  }

  onResultCardMarkAsRead(caseId: string): void {
    this.markAsRead.emit(caseId);
  }
}
