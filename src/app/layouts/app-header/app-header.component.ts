import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhosphorIconComponent } from '../../components/ui/phosphor-icon/phosphor-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, PhosphorIconComponent],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent implements OnInit {
  @Input() showUserProfile = false; // Show user profile and notifications
  @Input() showCollapseButton = false; // Show sidebar collapse button
  @Output() collapseToggle = new EventEmitter<void>();
  
  isUserMenuOpen = false;
  isNotificationsOpen = false;

  ngOnInit(): void {
  }

  onHelpClick(): void {
    console.log('Help button clicked');
  }

  onCollapseClick(): void {
    this.collapseToggle.emit();
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen = !this.isUserMenuOpen;
    this.isNotificationsOpen = false; // Close notifications when opening user menu
  }

  toggleNotifications(): void {
    this.isNotificationsOpen = !this.isNotificationsOpen;
    this.isUserMenuOpen = false; // Close user menu when opening notifications
  }

  closeMenus(): void {
    this.isUserMenuOpen = false;
    this.isNotificationsOpen = false;
  }

  onSignOut(): void {
    // Clear any stored data and redirect to login
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = '/Artemis/login';
  }
}
