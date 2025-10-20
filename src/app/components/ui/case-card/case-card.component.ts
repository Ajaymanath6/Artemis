import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-case-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-card.component.html',
  styleUrls: ['./case-card.component.css'],
})
export class CaseCardComponent {
  @Input() case: any;
  @Input() showActionButton: boolean = true; // For favorites/samples/remove buttons
  @Input() actionIcon: string = 'ri-heart-line'; // Icon for the action button
  @Input() actionTitle: string = 'Add to favorites';
  @Input() actionIconFilled: string = 'ri-heart-fill'; // Filled version for active state
  @Input() isActionActive: boolean = false; // Whether the action is active (e.g., already favorited)

  @Output() caseClick = new EventEmitter<any>();
  @Output() actionClick = new EventEmitter<any>();
  @Output() setTrackerClick = new EventEmitter<any>();
  @Output() addTagClick = new EventEmitter<any>();

  // Tooltip states
  tooltips: { [key: string]: boolean } = {};
  fileActionTooltips: { [key: string]: boolean } = {};

  onCaseClick(): void {
    this.caseClick.emit(this.case);
  }

  onActionClick(event: Event): void {
    event.stopPropagation();
    this.actionClick.emit(this.case);
  }

  onSetTrackerClick(event: Event): void {
    event.stopPropagation();
    this.setTrackerClick.emit(this.case);
  }

  onAddTagClick(event: Event): void {
    event.stopPropagation();
    this.addTagClick.emit(this.case);
  }

  toggleTooltip(key: string, event: Event): void {
    event.stopPropagation();
    this.tooltips[key] = !this.tooltips[key];
  }

  toggleFileActionTooltip(key: string, event: Event): void {
    event.stopPropagation();
    this.fileActionTooltips[key] = !this.fileActionTooltips[key];
  }

  closeAllTooltips(): void {
    this.tooltips = {};
    this.fileActionTooltips = {};
  }
}
