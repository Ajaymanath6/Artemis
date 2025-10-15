import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
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
  @Input() isSearchBarExpanded: boolean = false;
  @Output() viewModeChange = new EventEmitter<'grid' | 'table'>();

  @HostBinding('class.sidebar-collapsed') get sidebarCollapsedClass() {
    return this.isSidebarCollapsed;
  }

  @HostBinding('class.search-expanded') get searchExpandedClass() {
    return this.isSearchBarExpanded;
  }

  onToggleViewMode(mode: 'grid' | 'table'): void {
    this.viewModeChange.emit(mode);
  }
}
