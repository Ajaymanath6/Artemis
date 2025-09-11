import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthFormComponent } from '../../../components/forms/auth-form/auth-form.component';
import { AppHeaderComponent } from '../../../layouts/app-header/app-header.component';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, AuthFormComponent, AppHeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  logoUrl: string;

  constructor(private imageService: ImageService) {
    this.logoUrl = this.imageService.getImageUrl('logo1.svg');
  }

  ngOnInit(): void {
  }

  onSocialLogin(provider: string): void {
    console.log(`Login with ${provider} clicked`);
    // TODO: Implement social login logic
  }

  onFormSubmit(formData: any): void {
    console.log('Login form submitted:', formData);
    // TODO: Implement login logic
  }
}