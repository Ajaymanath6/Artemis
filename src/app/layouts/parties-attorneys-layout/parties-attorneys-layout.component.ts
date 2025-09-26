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
  role: string;
  phone: string;
  email: string;
  type: 'plaintiff' | 'defendant';
}

@Component({
  selector: 'app-parties-attorneys-layout',
  imports: [CommonModule],
  templateUrl: './parties-attorneys-layout.component.html',
  styleUrl: './parties-attorneys-layout.component.css'
})
export class PartiesAttorneysLayoutComponent {
  @Input() caseDetails: any;

  parties: Party[] = [
    {
      name: 'Guy Hawkins',
      role: 'Plaintiff',
      type: 'plaintiff'
    },
    {
      name: 'Kristin Watson',
      role: 'Plaintiff',
      type: 'plaintiff'
    },
    {
      name: 'Robert Fox',
      role: 'Defendant',
      type: 'defendant'
    },
    {
      name: 'Roger Kinnaird',
      role: 'Defendant',
      type: 'defendant'
    }
  ];

  attorneys: Attorney[] = [
    {
      name: 'Mary Richards',
      firm: 'Abstergo Law',
      role: 'Lead Attorney',
      phone: '(555) 123-4567',
      email: 'm.richards@abstergolaw.com',
      type: 'plaintiff'
    },
    {
      name: 'Maria Stevens',
      firm: 'Biffco Attorneys',
      role: 'Defense Attorney',
      phone: '(555) 987-6543',
      email: 'm.stevens@biffco.com',
      type: 'defendant'
    },
    {
      name: 'William Brown',
      firm: 'Biffco Attorneys',
      role: 'Associate Attorney',
      phone: '(555) 456-7890',
      email: 'w.brown@biffco.com',
      type: 'defendant'
    }
  ];

  get plaintiffParties(): Party[] {
    return this.parties.filter(party => party.type === 'plaintiff');
  }

  get defendantParties(): Party[] {
    return this.parties.filter(party => party.type === 'defendant');
  }

  get plaintiffAttorneys(): Attorney[] {
    return this.attorneys.filter(attorney => attorney.type === 'plaintiff');
  }

  get defendantAttorneys(): Attorney[] {
    return this.attorneys.filter(attorney => attorney.type === 'defendant');
  }
}
