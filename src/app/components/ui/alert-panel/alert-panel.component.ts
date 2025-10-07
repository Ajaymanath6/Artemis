import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AlertData {
  researchQuestion: string;
  name: string;
  frequency: 'daily' | 'immediate';
  recipients: 'everyone' | 'selected';
  selectedRecipients?: string[];
}

@Component({
  selector: 'app-alert-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alert-panel.component.html',
  styleUrls: []
})
export class AlertPanelComponent implements OnInit, OnChanges {
  @Input() isStatic: boolean = false; // If true, panel is part of layout, not overlay
  @Input() shouldUpdateHeader: boolean = false; // Trigger to update header
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<AlertData>();
  @Output() researchQuestionChanged = new EventEmitter<string>();

  // Alert form data
  alertData: AlertData = {
    researchQuestion: '',
    name: '',
    frequency: 'daily',
    recipients: 'everyone'
  };

  // Available team members for selection
  teamMembers = [
    { id: '1', name: 'John Doe', email: 'john@example.com', avatar: 'JD' },
    { id: '2', name: 'Sarah Wilson', email: 'sarah@example.com', avatar: 'SW' },
    { id: '3', name: 'Michael Chen', email: 'michael@example.com', avatar: 'MC' },
    { id: '4', name: 'Emily Davis', email: 'emily@example.com', avatar: 'ED' }
  ];

  selectedMembers: string[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log('Alert Panel initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['shouldUpdateHeader'] && changes['shouldUpdateHeader'].currentValue) {
      this.updateHeaderTitle();
    }
  }

  onClose(): void {
    this.close.emit();
  }

  onSave(): void {
    if (this.isFormValid()) {
      const alertToSave = { 
        ...this.alertData, 
        selectedRecipients: this.selectedMembers 
      };
      this.save.emit(alertToSave);
    }
  }

  onCancel(): void {
    this.alertData = {
      researchQuestion: '',
      name: '',
      frequency: 'daily',
      recipients: 'everyone'
    };
    this.selectedMembers = [];
    this.close.emit();
  }

  onFrequencyChange(frequency: 'daily' | 'immediate'): void {
    this.alertData.frequency = frequency;
  }

  onRecipientsChange(recipients: 'everyone' | 'selected'): void {
    this.alertData.recipients = recipients;
    if (recipients === 'everyone') {
      this.selectedMembers = [];
    }
  }

  onMemberToggle(memberId: string): void {
    const index = this.selectedMembers.indexOf(memberId);
    if (index > -1) {
      this.selectedMembers.splice(index, 1);
    } else {
      this.selectedMembers.push(memberId);
    }
  }

  isMemberSelected(memberId: string): boolean {
    return this.selectedMembers.includes(memberId);
  }

  isFormValid(): boolean {
    return this.alertData.name.trim().length > 0;
  }

  getFrequencyDescription(frequency: 'daily' | 'immediate'): string {
    switch (frequency) {
      case 'daily':
        return 'An email is sent daily to the recipients of the alert.';
      case 'immediate':
        return 'We will let you know the moment we find a match.';
      default:
        return '';
    }
  }

  // Method to get current research question
  getCurrentResearchQuestion(): string {
    return this.alertData.researchQuestion.trim();
  }

  // Method to trigger when research question changes
  onResearchQuestionChange(): void {
    this.researchQuestionChanged.emit(this.alertData.researchQuestion.trim());
  }

  // Store the header title that only changes when Create Alert is clicked
  private headerTitle: string = 'New alert';

  // Get header title 
  getHeaderTitle(): string {
    return this.headerTitle;
  }

  // Update header title (called when Create Alert is clicked)
  updateHeaderTitle(): void {
    const researchQuestion = this.alertData.researchQuestion.trim();
    this.headerTitle = researchQuestion || 'New alert';
  }
}
