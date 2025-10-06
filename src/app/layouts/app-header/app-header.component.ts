import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
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
  @Input() showBackButton = false; // Show back arrow button
  @Input() projectName = ''; // Project name for hierarchical display
  @Input() searchQuery = ''; // Search query for hierarchical display
  @Output() collapseToggle = new EventEmitter<void>();
  @Output() projectClick = new EventEmitter<void>();
  @Output() searchQueryClick = new EventEmitter<void>();
  @Output() backClick = new EventEmitter<void>();
  
  isUserMenuOpen = false;
  isNotificationsOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onHelpClick(): void {
    console.log('Help button clicked');
  }

  onCollapseClick(): void {
    this.collapseToggle.emit();
  }

  onBackClick(): void {
    this.backClick.emit();
    console.log('Back button clicked');
  }

  onProjectClick(): void {
    this.projectClick.emit();
    this.scrollToSearchBar();
    console.log('Project clicked:', this.projectName);
  }

  onSearchQueryClick(): void {
    this.searchQueryClick.emit();
    this.scrollToSearchBar();
    console.log('Search query clicked:', this.searchQuery);
  }

  private scrollToSearchBar(): void {
    // Scroll to top of the page where search bar is located
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
    
    // Close the dropdown first
    this.closeMenus();
    
    // Navigate to login page using Angular router
    this.router.navigate(['/login']).then(() => {
      console.log('Successfully navigated to login page');
    }).catch((error) => {
      console.error('Navigation to login failed:', error);
      // Fallback to window location if router fails
      window.location.href = '/Artemis/login';
    });
  }

}
