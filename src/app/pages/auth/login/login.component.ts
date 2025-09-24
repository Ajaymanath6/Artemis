import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppHeaderComponent } from '../../../layouts/app-header/app-header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, AppHeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSocialLogin(provider: string): void {
    console.log(`Login with ${provider} clicked`);
    // Frontend prototype - no backend integration
  }

  onLogin(): void {
    console.log('Login clicked:', { email: this.email, password: this.password });
    // Frontend prototype - no backend integration
  }
}