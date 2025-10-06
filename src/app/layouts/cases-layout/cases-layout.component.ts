import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertPanelComponent } from '../../components/ui/alert-panel/alert-panel.component';

@Component({
  selector: 'app-cases-layout',
  standalone: true,
  imports: [CommonModule, AlertPanelComponent],
  templateUrl: './cases-layout.component.html',
  styleUrls: ['./cases-layout.component.css']
})
export class CasesLayoutComponent {
  @Input() viewMode: 'grid' | 'table' = 'grid';
  @Input() isAlertPanelOpen: boolean = false;
  @Output() viewModeChange = new EventEmitter<'grid' | 'table'>();
  @Output() createAlert = new EventEmitter<void>();
  @Output() closeAlert = new EventEmitter<void>();
  @Output() saveAlert = new EventEmitter<any>();

  onToggleViewMode(mode: 'grid' | 'table'): void {
    this.viewModeChange.emit(mode);
  }

  onCreateAlert(): void {
    this.createAlert.emit();
  }

  onCloseAlert(): void {
    this.closeAlert.emit();
  }

  onSaveAlert(alertData: any): void {
    this.saveAlert.emit(alertData);
  }
}
