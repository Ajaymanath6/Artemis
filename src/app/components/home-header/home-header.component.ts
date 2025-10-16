import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PhosphorIconComponent } from '../ui/phosphor-icon/phosphor-icon.component';

@Component({
  selector: 'app-home-header',
  imports: [CommonModule, PhosphorIconComponent],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent {
  @Input() isSidebarCollapsed: boolean = false;
  @Output() sidebarToggle = new EventEmitter<void>();
  
  isUserMenuOpen = false;

  constructor(private router: Router) {}

  onSidebarToggle() {
    this.sidebarToggle.emit();
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  closeMenus() {
    this.isUserMenuOpen = false;
  }

  onSignOut() {
    console.log('Sign out clicked');
    this.closeMenus();
    // TODO: Implement sign out logic
  }

  onSearchForCases() {
    this.router.navigate(['/cases']);
  }

  onFindProfiles() {
    // TODO: Navigate to profiles page
    console.log('Find profiles clicked');
  }

  onCheckTrackings() {
    // TODO: Navigate to trackings page
    console.log('Check trackings clicked');
  }
}
