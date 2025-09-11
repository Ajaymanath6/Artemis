import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { PhosphorIconComponent } from '../../ui/phosphor-icon/phosphor-icon.component';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, PhosphorIconComponent],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css'
})
export class AuthFormComponent {
  @Input() formType: 'login' | 'register' = 'login';
  @Input() isLoading: boolean = false;
  @Output() socialLogin = new EventEmitter<string>();
  @Output() formSubmit = new EventEmitter<any>();

  formData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSocialLoginClick(provider: string): void {
    this.socialLogin.emit(provider);
    // Navigate to loading page for all social logins
    this.router.navigate(['/loading']);
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      this.formSubmit.emit(this.formData);
    }
  }

  private isFormValid(): boolean {
    return !!(this.formData.email && this.formData.password);
  }
}