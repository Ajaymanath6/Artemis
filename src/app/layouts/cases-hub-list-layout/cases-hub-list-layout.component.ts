import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cases-hub-list-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cases-hub-list-layout.component.html',
  styleUrl: './cases-hub-list-layout.component.css'
})
export class CasesHubListLayoutComponent {
  @Input() customLists: any[] = [];
  @Input() isSidebarCollapsed: boolean = false;
  @Output() toggleDropdown = new EventEmitter<{list: any, event: Event}>();
  @Output() closeDropdowns = new EventEmitter<void>();
  @Output() editList = new EventEmitter<{list: any, event: Event}>();
  @Output() deleteList = new EventEmitter<{list: any, event: Event}>();

  constructor(private router: Router) {}

  onToggleDropdown(list: any, event: Event): void {
    this.toggleDropdown.emit({list, event});
  }

  onCloseDropdowns(): void {
    this.closeDropdowns.emit();
  }

  onEditList(list: any, event: Event): void {
    this.editList.emit({list, event});
  }

  onDeleteList(list: any, event: Event): void {
    this.deleteList.emit({list, event});
  }

  navigateToFavorites(): void {
    this.router.navigate(['/my-favorites']);
  }

  navigateToSamples(): void {
    this.router.navigate(['/samples']);
  }

  navigateToCustomList(list: any): void {
    const listId = this.generateListId(list.name);
    this.router.navigate([`/list/${listId}`]);
  }

  private generateListId(listName: string): string {
    return listName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }
}
