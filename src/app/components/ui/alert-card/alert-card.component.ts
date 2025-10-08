import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface AlertData {
  id: string;
  name: string;
  isActive: boolean;
  caseCount: number;
  recipients: number;
  researchQuestion: string;
  timing: string;
  createdDate: string;
  lastUpdated: string;
}

@Component({
  selector: 'app-alert-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-card.component.html',
  styleUrl: './alert-card.component.css'
})
export class AlertCardComponent {
  @Input() alertData!: AlertData;
  @Input() isSelected: boolean = false;
  
  @Output() alertClick = new EventEmitter<AlertData>();
  @Output() toggleAlert = new EventEmitter<{alert: AlertData, isActive: boolean}>();
  @Output() editAlert = new EventEmitter<AlertData>();
  @Output() deleteAlert = new EventEmitter<AlertData>();

  onAlertClick(): void {
    this.alertClick.emit(this.alertData);
  }

  onToggleAlert(event: Event): void {
    event.stopPropagation(); // Prevent card click
    this.alertData.isActive = !this.alertData.isActive;
    this.toggleAlert.emit({
      alert: this.alertData,
      isActive: this.alertData.isActive
    });
  }

  onEditAlert(event: Event): void {
    event.stopPropagation(); // Prevent card click
    this.editAlert.emit(this.alertData);
  }

  onDeleteAlert(event: Event): void {
    event.stopPropagation(); // Prevent card click
    this.deleteAlert.emit(this.alertData);
  }
}
