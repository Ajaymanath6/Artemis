import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Party {
  name: string;
  role: string;
  type: 'plaintiff' | 'defendant';
}

interface Attorney {
  name: string;
  firm: string;
  type: string;
  role: string;
  phone: string;
  email: string;
  specializations: string[];
}

@Component({
  selector: 'app-parties-attorneys-layout',
  imports: [CommonModule],
  templateUrl: './parties-attorneys-layout.component.html',
  styleUrl: './parties-attorneys-layout.component.css'
})
export class PartiesAttorneysLayoutComponent {
  @Input() caseDetails: any;

  plaintiffAttorneys: Attorney[] = [
    {
      name: 'DOOLITTLE, DIANE M.',
      firm: 'Abstergo Law Firm LLC',
      type: 'Lead Attorney, Attorney',
      role: 'Lead Attorney',
      phone: '(555) 123-4567',
      email: 'diane.doolittle@abstergolaw.com',
      specializations: ['Personal Injury', 'Civil Rights', 'Medical Malpractice']
    },
    {
      name: 'MITCHELL, JOHN R.',
      firm: 'Abstergo Law Firm LLC',
      type: 'Associate Attorney',
      role: 'Associate Attorney',
      phone: '(555) 123-4568',
      email: 'john.mitchell@abstergolaw.com',
      specializations: ['Litigation Support', 'Discovery', 'Legal Research']
    },
    {
      name: 'RICHARDS, MARY E.',
      firm: 'Thompson & Associates',
      type: 'Co-Counsel',
      role: 'Co-Counsel',
      phone: '(555) 789-0123',
      email: 'mary.richards@thompsonlaw.com',
      specializations: ['Civil Litigation', 'Settlement Negotiations']
    }
  ];

  defendantAttorneys: Attorney[] = [
    {
      name: 'STEVENS, MARIA C.',
      firm: 'Biffco Legal Services',
      type: 'Defense Attorney, Lead',
      role: 'Senior Partner',
      phone: '(555) 987-6543',
      email: 'maria.stevens@biffcolegal.com',
      specializations: ['Defense Litigation', 'Insurance Law', 'Corporate Defense']
    },
    {
      name: 'BROWN, WILLIAM H.',
      firm: 'Biffco Legal Services',
      type: 'Defense Attorney',
      role: 'Defense Attorney',
      phone: '(555) 987-6544',
      email: 'william.brown@biffcolegal.com',
      specializations: ['Medical Defense', 'Expert Witness Coordination', 'Settlement Negotiations']
    },
    {
      name: 'JOHNSON, SARAH K.',
      firm: 'Johnson & Partners LLP',
      type: 'Co-Counsel, Attorney',
      role: 'Co-Counsel',
      phone: '(555) 456-7890',
      email: 'sarah.johnson@johnsonpartners.com',
      specializations: ['Medical Malpractice Defense', 'Risk Management', 'Regulatory Compliance']
    },
    {
      name: 'WILSON, ROBERT T.',
      firm: 'Wilson Legal Group',
      type: 'Assistant Attorney',
      role: 'Assistant Attorney',
      phone: '(555) 345-6789',
      email: 'robert.wilson@wilsonlegal.com',
      specializations: ['Discovery Support', 'Document Review', 'Legal Research']
    }
  ];
}