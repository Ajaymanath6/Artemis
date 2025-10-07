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
  
  // Alert panel management
  @Output() closeAlert = new EventEmitter<void>();
  @Output() saveAlert = new EventEmitter<any>();
  @Output() researchQuestionChanged = new EventEmitter<string>();

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
}