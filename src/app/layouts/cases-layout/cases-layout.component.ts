import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cases-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cases-layout.component.html',
  styleUrls: ['./cases-layout.component.css']
})
export class CasesLayoutComponent {
  @Input() viewMode: 'grid' | 'table' = 'grid';
  @Input() isSidebarCollapsed: boolean = false;
  @Output() viewModeChange = new EventEmitter<'grid' | 'table'>();

  onToggleViewMode(mode: 'grid' | 'table'): void {
    this.viewModeChange.emit(mode);
  }
}
