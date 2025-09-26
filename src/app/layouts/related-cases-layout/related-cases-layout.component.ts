import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface RelatedCase {
  id: string;
  title: string;
  caseNumber: string;
  court: string;
  filingDate: string;
  status: string;
  relationshipType: 'Same Parties' | 'Related Parties' | 'Same Legal Issues' | 'Cross-Reference';
  commonElements: string[];
  judge: string;
}

@Component({
  selector: 'app-related-cases-layout',
  imports: [CommonModule],
  templateUrl: './related-cases-layout.component.html',
  styleUrl: './related-cases-layout.component.css'
})
export class RelatedCasesLayoutComponent {
  @Input() caseDetails: any;

  relatedCases: RelatedCase[] = [
    {
      id: 'RC001',
      title: 'JOHNSON MANUFACTURING INC VS CALIFORNIA ENVIRONMENTAL AGENCY',
      caseNumber: 'COM892346',
      court: 'California Superior Court - Environmental Division',
      filingDate: '22 March 2017',
      status: 'Active',
      relationshipType: 'Same Parties',
      commonElements: ['Same Plaintiff', 'Environmental Regulations', 'Manufacturing'],
      judge: 'Hon. Patricia Chen'
    },
    {
      id: 'RC002',
      title: 'ACME CORP VS STATE OF NEW YORK',
      caseNumber: 'COM785432',
      court: 'New York State Supreme Court - Commercial Division',
      filingDate: '08 November 2016',
      status: 'Settled',
      relationshipType: 'Same Legal Issues',
      commonElements: ['Regulatory Dispute', 'Manufacturing Regulations', 'Commerce Clause'],
      judge: 'Hon. Michael Foster'
    },
    {
      id: 'RC003',
      title: 'WATSON INDUSTRIES VS NEW YORK REGULATORY COMMISSION',
      caseNumber: 'ADM654321',
      court: 'New York Administrative Court',
      filingDate: '15 January 2018',
      status: 'Pending',
      relationshipType: 'Related Parties',
      commonElements: ['State Agency Defendant', 'Administrative Law', 'Regulatory Compliance'],
      judge: 'Hon. Linda Thompson'
    },
    {
      id: 'RC004',
      title: 'GLOBAL MANUFACTURING VS FEDERAL TRADE COMMISSION',
      caseNumber: 'FED987654',
      court: 'Federal District Court - Southern District NY',
      filingDate: '30 June 2017',
      status: 'Closed',
      relationshipType: 'Cross-Reference',
      commonElements: ['Manufacturing Industry', 'Regulatory Oversight', 'Federal Jurisdiction'],
      judge: 'Hon. David Rodriguez'
    }
  ];

  onCaseClick(relatedCase: RelatedCase): void {
    console.log('Related case clicked:', relatedCase.title);
    // Navigate to related case or show details
  }
}
