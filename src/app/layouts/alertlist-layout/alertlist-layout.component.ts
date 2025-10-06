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
  
  // Alert panel management
  @Output() closeAlert = new EventEmitter<void>();
  @Output() saveAlert = new EventEmitter<any>();

  // Alert panel methods
  onCloseAlert(): void {
    this.closeAlert.emit();
  }

  onSaveAlert(alertData: any): void {
    console.log('Alert data from layout:', alertData);
    this.saveAlert.emit(alertData);
  }
}