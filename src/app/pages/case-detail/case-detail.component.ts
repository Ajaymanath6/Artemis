import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SideNavComponent, NavItem } from '../../components/navigation/side-nav/side-nav.component';
import { SummaryLayoutComponent } from '../../layouts/summary-layout/summary-layout.component';
import { AppHeaderComponent } from '../../layouts/app-header/app-header.component';

@Component({
  selector: 'app-case-detail',
  standalone: true,
  imports: [CommonModule, SideNavComponent, SummaryLayoutComponent, AppHeaderComponent],
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.css']
})
export class CaseDetailComponent implements OnInit {
  caseId: string | null = null;
  
  // Header and sidebar properties
  isSidebarCollapsed: boolean = false;
  projectName: string = 'NY Judgment Tracking';
  currentSearchQuery: string = '';
  
  // Tab management
  activeTab: string = 'summary';
  tabs = [
    { id: 'summary', label: 'Summary' },
    { id: 'docket-entries', label: 'Docket Entries' },
    { id: 'documents', label: 'Documents' },
    { id: 'parties-attorneys', label: 'Parties/Attorneys' },
    { id: 'judges', label: 'Judges' },
    { id: 'related-cases', label: 'Related Cases' },
    { id: 'docket-history', label: 'Docket History' },
    { id: 'similar-cases', label: 'Similar Cases' }
  ];
  
  // Dummy case data
  caseDetails = {
    title: 'JOHNSON MANUFACTURING INC VS STATE OF NEW YORK',
    caseId: 'COM892345',
    court: 'New York State Supreme Court - Commercial Division',
    date: '15 January 2017',
    type: 'Commercial',
    status: 'In Progress',
    judge: 'Hon. Sarah Mitchell',
    attorneys: [
      {
        name: 'Robert Chen, Esq.',
        firm: 'Chen & Associates LLP',
        role: 'Plaintiff Attorney',
        phone: '(555) 123-4567',
        email: 'r.chen@chenlaw.com'
      },
      {
        name: 'Maria Rodriguez, Esq.',
        firm: 'State Attorney General Office',
        role: 'Defense Attorney',
        phone: '(555) 987-6543',
        email: 'm.rodriguez@nyag.gov'
      }
    ],
    timeline: [
      {
        date: '15 January 2017',
        event: 'Case Filed',
        description: 'Initial complaint filed against State of New York'
      },
      {
        date: '28 February 2017',
        event: 'Motion to Dismiss Filed',
        description: 'Defendant filed motion to dismiss for lack of jurisdiction'
      },
      {
        date: '15 March 2017',
        event: 'Motion Denied',
        description: 'Court denied defendant\'s motion to dismiss'
      },
      {
        date: '10 April 2017',
        event: 'Discovery Phase Begins',
        description: 'Court ordered discovery phase to commence'
      },
      {
        date: '22 September 2017',
        event: 'Expert Witnesses Deposed',
        description: 'Expert witness depositions completed'
      },
      {
        date: '05 December 2017',
        event: 'Settlement Conference Scheduled',
        description: 'Court scheduled mandatory settlement conference'
      }
    ],
    documents: [
      {
        name: 'Initial Complaint',
        date: '15 January 2017',
        type: 'PDF',
        size: '2.4 MB',
        pages: 45
      },
      {
        name: 'Motion to Dismiss',
        date: '28 February 2017',
        type: 'PDF',
        size: '1.8 MB',
        pages: 23
      },
      {
        name: 'Court Order - Discovery',
        date: '10 April 2017',
        type: 'PDF',
        size: '0.8 MB',
        pages: 8
      },
      {
        name: 'Expert Witness Report - Economics',
        date: '15 August 2017',
        type: 'PDF',
        size: '5.2 MB',
        pages: 89
      },
      {
        name: 'Deposition Transcript - CEO',
        date: '22 September 2017',
        type: 'PDF',
        size: '12.1 MB',
        pages: 234
      }
    ],
    summary: 'Johnson Manufacturing Inc. filed a lawsuit against the State of New York challenging new environmental regulations that the company claims unfairly target manufacturing businesses. The case involves complex issues of regulatory law, constitutional commerce clause arguments, and significant economic impact assessments. The plaintiff argues that the new regulations violate interstate commerce protections and exceed the state\'s regulatory authority.',
    amount: '$2,450,000',
    tags: ['Commercial', 'Environmental Law', 'Regulatory Dispute', 'Manufacturing']
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.caseId = this.route.snapshot.paramMap.get('id');
    console.log('Case Detail Page - Case ID:', this.caseId);
    
    // Set the current search query to display the case title in the header
    this.currentSearchQuery = this.caseDetails.title;
    
    // Ensure we stay on this page by logging route info
    console.log('Case Detail Page initialized successfully');
  }

  goBack(): void {
    this.router.navigate(['/cases']);
  }

  downloadDocument(document: any): void {
    console.log('Downloading document:', document.name);
    // Implement document download functionality
  }

  shareCase(): void {
    console.log('Sharing case:', this.caseDetails.title);
    // Implement case sharing functionality
  }

  addToWatchlist(): void {
    console.log('Adding case to watchlist:', this.caseDetails.title);
    // Implement watchlist functionality
  }

  // Header interaction methods
  onSidebarToggle(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onProjectClick(): void {
    console.log('Project clicked');
  }

  onSearchQueryClick(): void {
    // Don't navigate away from case detail page
    console.log('Search query clicked on case detail page - staying on current page');
  }

  onSearch(query: string): void {
    console.log('Search:', query);
  }

  onExpandSearch(): void {
    console.log('Expand search');
  }

  onCollapseSearch(): void {
    console.log('Collapse search');
  }

  // Tab management
  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
    console.log('Active tab set to:', tabId);
  }

  // Action methods
  refreshCase(): void {
    console.log('Refreshing case data for:', this.caseDetails.title);
    // Implement refresh functionality
  }

  setTracker(): void {
    console.log('Setting tracker for case:', this.caseDetails.title);
    // Implement tracker functionality
  }
}
