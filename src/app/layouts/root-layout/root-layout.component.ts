import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { AppSidebarComponent } from '../app-sidebar/app-sidebar.component';

@Component({
  selector: 'app-root-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, AppHeaderComponent, AppSidebarComponent],
  templateUrl: './root-layout.component.html',
  styleUrl: './root-layout.component.css'
})
export class RootLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
