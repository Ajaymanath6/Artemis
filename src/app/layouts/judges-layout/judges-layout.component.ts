import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Judge {
  name: string;
  title: string;
  court: string;
  phone: string;
  email: string;
  yearsOfService: number;
  specializations: string[];
  currentStatus: 'Active' | 'Retired' | 'Senior Status';
}

@Component({
  selector: 'app-judges-layout',
  imports: [CommonModule],
  templateUrl: './judges-layout.component.html',
  styleUrl: './judges-layout.component.css'
})
export class JudgesLayoutComponent {
  @Input() caseDetails: any;

  judges: Judge[] = [
    {
      name: 'Hon. Steven Thomas',
      title: 'Senior Judge',
      court: 'California - Los Angeles County Superior Courts',
      phone: '(213) 974-5151',
      email: 's.thomas@lacourt.org',
      yearsOfService: 18,
      specializations: ['Personal Injury', 'Commercial Law', 'Civil Rights'],
      currentStatus: 'Active'
    },
    {
      name: 'Hon. Maria Rodriguez',
      title: 'Associate Judge',
      court: 'California - Los Angeles County Superior Courts',
      phone: '(213) 974-5152',
      email: 'm.rodriguez@lacourt.org',
      yearsOfService: 12,
      specializations: ['Family Law', 'Personal Injury', 'Contract Disputes'],
      currentStatus: 'Active'
    },
    {
      name: 'Hon. Robert Wilson',
      title: 'Chief Judge',
      court: 'California - Los Angeles County Superior Courts',
      phone: '(213) 974-5150',
      email: 'r.wilson@lacourt.org',
      yearsOfService: 25,
      specializations: ['Commercial Law', 'Constitutional Law', 'Administrative Law'],
      currentStatus: 'Senior Status'
    }
  ];
}
