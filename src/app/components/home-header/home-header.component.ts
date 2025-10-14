import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  imports: [CommonModule],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent {
  @Input() isSidebarCollapsed: boolean = false;
  @Output() sidebarToggle = new EventEmitter<void>();

  constructor(private router: Router) {}

  onSidebarToggle() {
    this.sidebarToggle.emit();
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
