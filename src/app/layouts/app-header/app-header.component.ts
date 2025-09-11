import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
  }

  onHelpClick(): void {
    // Handle help button click - can be implemented later
    console.log('Help button clicked');
  }
}
