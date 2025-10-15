import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-announcements-recent-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcements-recent-layout.component.html',
  styleUrls: ['./announcements-recent-layout.component.css']
})
export class AnnouncementsRecentLayoutComponent {
  @Input() isSidebarCollapsed: boolean = false;
  
  // This component handles the scrollable announcements and recent activity sections
}

