import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertCardComponent, AlertData } from '../alert-card/alert-card.component';

@Component({
  selector: 'app-alerts-grid',
  standalone: true,
  imports: [CommonModule, AlertCardComponent],
  templateUrl: './alerts-grid.component.html',
  styleUrl: './alerts-grid.component.css'
})
export class AlertsGridComponent {
  @Input() alertData: AlertData[] = [];
  @Input() activeFilter: 'all' | 'unread' | 'new' = 'all';
  
  @Output() alertClick = new EventEmitter<AlertData>();
  @Output() toggleAlert = new EventEmitter<{alert: AlertData, isActive: boolean}>();
  @Output() editAlert = new EventEmitter<AlertData>();
  @Output() deleteAlert = new EventEmitter<AlertData>();

  getFilteredAlertData(): AlertData[] {
    // For now, return all alerts when filter is 'all'
    // Later we can add more filtering logic
    return this.alertData;
  }

  onAlertClick(alertData: AlertData): void {
    this.alertClick.emit(alertData);
  }

  onToggleAlert(event: {alert: AlertData, isActive: boolean}): void {
    this.toggleAlert.emit(event);
  }

  onEditAlert(alertData: AlertData): void {
    this.editAlert.emit(alertData);
  }

  onDeleteAlert(alertData: AlertData): void {
    this.deleteAlert.emit(alertData);
  }
}
