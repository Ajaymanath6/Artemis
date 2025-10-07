import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CaseData } from '../ui/result-card/result-card.component';

@Component({
  selector: 'app-alert-right-panel',
  imports: [CommonModule, FormsModule],
  templateUrl: './alert-right-panel.component.html',
  styleUrl: './alert-right-panel.component.css'
})
export class AlertRightPanelComponent {
  @Input() isStatic: boolean = false;
  @Input() showCaseDetail: boolean = false;
  @Input() selectedCase: CaseData | null = null;
  @Input() shouldUpdateHeader: boolean = false;
  
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();
  @Output() researchQuestionChanged = new EventEmitter<string>();
  @Output() backFromCaseDetail = new EventEmitter<void>();

  instantEmailEnabled: boolean = false;
  alertData = {
    researchQuestion: ''
  };

  getHeaderTitle(): string {
    return 'New Alert';
  }

  toggleInstantEmail(): void {
    this.instantEmailEnabled = !this.instantEmailEnabled;
  }

  onResearchQuestionChange(): void {
    this.researchQuestionChanged.emit(this.alertData.researchQuestion);
  }

  onCancel(): void {
    this.close.emit();
  }

  onSave(): void {
    this.save.emit({
      researchQuestion: this.alertData.researchQuestion,
      instantEmail: this.instantEmailEnabled
    });
  }

  onBackFromCaseDetail(): void {
    this.backFromCaseDetail.emit();
  }

  isFormValid(): boolean {
    return this.alertData.researchQuestion.trim().length > 0;
  }
}
