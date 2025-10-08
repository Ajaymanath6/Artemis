import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CaseData } from '../ui/result-card/result-card.component';
import { ResultCardAlertComponent } from '../ui/result-card-alert/result-card-alert.component';
import { AlertData } from '../ui/alert-card/alert-card.component';

@Component({
  selector: 'app-alert-right-panel',
  imports: [CommonModule, FormsModule, ResultCardAlertComponent],
  templateUrl: './alert-right-panel.component.html',
  styleUrl: './alert-right-panel.component.css'
})
export class AlertRightPanelComponent implements OnChanges {
  @Input() isStatic: boolean = false;
  @Input() showCaseDetail: boolean = false;
  @Input() selectedCase: CaseData | null = null;
  @Input() selectedAlert: AlertData | null = null;
  @Input() shouldUpdateHeader: boolean = false;
  @Input() selectedResearchQuestion: string = '';
  @Input() caseData: CaseData[] = [];
  
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();
  @Output() researchQuestionChanged = new EventEmitter<string>();
  @Output() backFromCaseDetail = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  @Output() expandCases = new EventEmitter<AlertData>();

  instantEmailEnabled: boolean = false;
  isLoadingCases: boolean = false;
  alertData = {
    researchQuestion: '',
    timing: 'immediate', // Default to immediate alerts
    recipients: 'everyone', // Default to everyone on project
    selectedUsers: {
      alexander: false,
      sarah: false,
      michael: false
    },
    priority: 'all', // Default priority level
    dateFrom: '', // Start date filter
    dateTo: '', // End date filter
    caseTypes: {
      civil: false,
      criminal: false,
      family: false,
      corporate: false
    },
    format: 'summary', // Default alert format
    includeAttachments: false // Default attachment setting
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedResearchQuestion'] && this.selectedResearchQuestion) {
      this.alertData.researchQuestion = this.selectedResearchQuestion;
    }
  }

  getHeaderTitle(): string {
    if (this.selectedAlert) {
      return this.selectedAlert.name;
    }
    return 'New alert';
  }

  getHeaderSubtitle(): string {
    if (this.selectedAlert) {
      return `${this.selectedAlert.caseCount} cases found`;
    }
    return 'Updated 18 min. ago';
  }

  toggleInstantEmail(): void {
    this.instantEmailEnabled = !this.instantEmailEnabled;
  }

  toggleAttachments(): void {
    this.alertData.includeAttachments = !this.alertData.includeAttachments;
  }

  onResearchQuestionChange(): void {
    this.researchQuestionChanged.emit(this.alertData.researchQuestion);
  }

  onCancel(): void {
    // Reset form when cancel is clicked
    this.resetAlertForm();
    this.cancel.emit();
  }

  // Public method to reset form from parent component
  public resetForm(): void {
    this.resetAlertForm();
  }

  onSave(): void {
    this.save.emit({
      researchQuestion: this.alertData.researchQuestion,
      timing: this.alertData.timing,
      recipients: this.alertData.recipients,
      selectedUsers: this.alertData.selectedUsers,
      priority: this.alertData.priority,
      dateFrom: this.alertData.dateFrom,
      dateTo: this.alertData.dateTo,
      caseTypes: this.alertData.caseTypes,
      format: this.alertData.format,
      includeAttachments: this.alertData.includeAttachments,
      instantEmail: this.instantEmailEnabled
    });

    // Don't reset form immediately - let user see search results first
    console.log('Alert saved and search triggered');
  }

  private resetAlertForm(): void {
    this.alertData = {
      researchQuestion: '',
      timing: 'immediate',
      recipients: 'everyone',
      selectedUsers: {
        alexander: false,
        sarah: false,
        michael: false
      },
      priority: 'all',
      dateFrom: '',
      dateTo: '',
      caseTypes: {
        civil: false,
        criminal: false,
        family: false,
        corporate: false
      },
      format: 'summary',
      includeAttachments: false
    };
    this.instantEmailEnabled = false;
  }

  onBackFromCaseDetail(): void {
    this.backFromCaseDetail.emit();
  }

  onCaseClick(caseData: CaseData): void {
    // Handle case click - could emit an event or show case detail
    console.log('Case clicked in right panel:', caseData);
    // For now, just log - you can implement case detail view later
  }

  onCaseMarkAsRead(caseId: string): void {
    // Handle mark as read for case in right panel
    console.log('Case marked as read in right panel:', caseId);
    // You can emit an event or update case data
  }

  onExpandCases(): void {
    if (this.selectedAlert) {
      this.expandCases.emit(this.selectedAlert);
      console.log('Expand cases for alert:', this.selectedAlert.name);
    }
  }

  // Method to start loading cases for an alert
  public startLoadingCases(): void {
    this.isLoadingCases = true;
    console.log('Starting to load cases for alert');
  }

  // Method to stop loading cases
  public stopLoadingCases(): void {
    this.isLoadingCases = false;
    console.log('Finished loading cases for alert');
  }

  isFormValid(): boolean {
    return this.alertData.researchQuestion.trim().length > 0;
  }
}
