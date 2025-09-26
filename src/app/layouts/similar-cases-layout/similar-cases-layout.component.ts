import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SimilarCase {
  id: string;
  title: string;
  caseNumber: string;
  court: string;
  filingDate: string;
  status: string;
  similarityScore: number; // 0-100 percentage
  similarityReasons: string[];
  outcome?: string;
  judge: string;
  keyIssues: string[];
  precedentValue: 'High' | 'Medium' | 'Low';
}

@Component({
  selector: 'app-similar-cases-layout',
  imports: [CommonModule],
  templateUrl: './similar-cases-layout.component.html',
  styleUrl: './similar-cases-layout.component.css'
})
export class SimilarCasesLayoutComponent {
  @Input() caseDetails: any;

  similarCases: SimilarCase[] = [
    {
      id: 'SC001',
      title: 'PACIFIC STEEL CORP VS STATE OF CALIFORNIA',
      caseNumber: 'ENV789012',
      court: 'California Superior Court - Environmental Division',
      filingDate: '12 August 2019',
      status: 'Settled',
      similarityScore: 92,
      similarityReasons: ['Identical Legal Issues', 'Same Regulatory Framework', 'Manufacturing Industry'],
      outcome: 'Partial Settlement - $1.2M',
      judge: 'Hon. Jennifer Park',
      keyIssues: ['Environmental Regulations', 'Commerce Clause Challenge', 'Manufacturing Compliance'],
      precedentValue: 'High'
    },
    {
      id: 'SC002',
      title: 'AMERICAN TEXTILES INC VS NEW YORK DEPARTMENT OF ENVIRONMENTAL CONSERVATION',
      caseNumber: 'CIV456789',
      court: 'New York State Supreme Court',
      filingDate: '03 April 2018',
      status: 'Plaintiff Victory',
      similarityScore: 87,
      similarityReasons: ['Similar Regulatory Challenge', 'Manufacturing Sector', 'State Overreach Claims'],
      outcome: 'Court ruled for Plaintiff',
      judge: 'Hon. Robert Chen',
      keyIssues: ['Regulatory Overreach', 'Due Process Rights', 'Industry Impact Assessment'],
      precedentValue: 'High'
    },
    {
      id: 'SC003',
      title: 'MIDWEST MANUFACTURING VS ILLINOIS ENVIRONMENTAL AGENCY',
      caseNumber: 'ENV234567',
      court: 'Illinois Circuit Court',
      filingDate: '28 September 2020',
      status: 'Defendant Victory',
      similarityScore: 81,
      similarityReasons: ['Environmental Regulations', 'Manufacturing Focus', 'State Authority'],
      outcome: 'Court upheld state regulations',
      judge: 'Hon. Maria Rodriguez',
      keyIssues: ['State Police Powers', 'Environmental Protection', 'Economic Impact'],
      precedentValue: 'Medium'
    },
    {
      id: 'SC004',
      title: 'EASTERN INDUSTRIES VS FEDERAL ENVIRONMENTAL PROTECTION AGENCY',
      caseNumber: 'FED345678',
      court: 'Federal District Court - Eastern District PA',
      filingDate: '16 November 2016',
      status: 'Appeal Pending',
      similarityScore: 75,
      similarityReasons: ['Regulatory Challenge', 'Manufacturing Industry', 'Federal Preemption'],
      judge: 'Hon. Thomas Wilson',
      keyIssues: ['Federal vs State Authority', 'Preemption Doctrine', 'Environmental Compliance'],
      precedentValue: 'Medium'
    },
    {
      id: 'SC005',
      title: 'SOUTHERN CHEMICAL CORP VS GEORGIA ENVIRONMENTAL COMMISSION',
      caseNumber: 'ENV567890',
      court: 'Georgia Superior Court',
      filingDate: '22 January 2021',
      status: 'Active',
      similarityScore: 69,
      similarityReasons: ['State Regulatory Challenge', 'Industry Opposition', 'Environmental Law'],
      judge: 'Hon. Patricia Davis',
      keyIssues: ['Chemical Manufacturing', 'State Regulations', 'Industry Standards'],
      precedentValue: 'Low'
    }
  ];

  getSimilarityColor(score: number): string {
    if (score >= 90) return '#059669'; // High similarity - green
    if (score >= 80) return '#146B85'; // Good similarity - brand blue
    if (score >= 70) return '#ea580c'; // Medium similarity - orange
    return '#dc2626'; // Low similarity - red
  }

  getPrecedentColor(precedentValue: string): string {
    const colorMap: { [key: string]: string } = {
      'High': '#059669',
      'Medium': '#ea580c',
      'Low': '#6b7280'
    };
    return colorMap[precedentValue] || '#6b7280';
  }

  onSimilarCaseClick(similarCase: SimilarCase): void {
    console.log('Similar case clicked:', similarCase.title);
    // Navigate to similar case or show details
  }
}
