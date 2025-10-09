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

  isDeleting: boolean = false;

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
    
    // Start deletion process with spinner
    this.isDeleting = true;
    
    // Show spinner for 1.5 seconds, then emit delete event
    setTimeout(() => {
      this.deleteAlert.emit(this.alertData);
      // Keep spinner visible briefly during actual deletion
      setTimeout(() => {
        this.isDeleting = false;
      }, 500);
    }, 1500);
  }
}
