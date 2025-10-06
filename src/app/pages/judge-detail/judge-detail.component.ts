import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { SideNavComponent } from '../../components/navigation/side-nav/side-nav.component';
import { AppHeaderComponent } from '../../layouts/app-header/app-header.component';

interface Judge {
  id: string;
  name: string;
  title: string;
  court: string;
  additionalCourts: string[];
  phone: string;
  email: string;
  address: string;
  website: string;
  yearsOfService: number;
  specializations: string[];
  currentStatus: 'Active' | 'Retired' | 'Senior Status';
  judicialStatus: string;
  appointedBy: string;
  location: string;
  lawFirm: string;
}

@Component({
  selector: 'app-judge-detail',
  standalone: true,
  imports: [CommonModule, SideNavComponent, AppHeaderComponent],
  templateUrl: './judge-detail.component.html',
  styleUrls: ['./judge-detail.component.css']
})
export class JudgeDetailComponent implements OnInit {
  judgeId: string | null = null;
  
  // Header and sidebar properties
  isSidebarCollapsed: boolean = false;
  projectName: string = 'NY Judgment Tracking';
  currentSearchQuery: string = '';
  
  // Tab management
  activeTab: string = 'summary';
  tabs = [
    { id: 'summary', label: 'Summary' },
    { id: 'profile', label: 'Profile' },
    { id: 'attorneys', label: 'Attorneys' },
    { id: 'law-firms', label: 'Law Firms' },
    { id: 'parties', label: 'Parties' },
    { id: 'cases', label: 'Cases' }
  ];
  
  // Judge data
  judgeDetails: Judge = {
    id: 'steven-thomas',
    name: 'Hon. Steven Thomas',
    title: 'Senior Judge',
    court: 'San Mateo County Superior Court of California',
    additionalCourts: ['California Court of Appeal for the First District'],
    phone: '(650) 261-5121',
    email: 'Not Available',
    address: 'Not Available',
    website: 'Not Available',
    yearsOfService: 18,
    specializations: ['Personal Injury', 'Commercial Law', 'Civil Rights'],
    currentStatus: 'Active',
    judicialStatus: 'ACTIVE',
    appointedBy: 'Not Available',
    location: 'Redwood City, CA',
    lawFirm: 'San Mateo County Superior Court'
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get judge ID from route parameters
    this.judgeId = this.route.snapshot.paramMap.get('id');
    
    // Get judge name from query parameters if available
    const judgeName = this.route.snapshot.queryParamMap.get('name');
    if (judgeName) {
      // Load judge data based on the name
      this.loadJudgeData(judgeName);
    }
    
    console.log('Judge Detail Page initialized for:', this.judgeId, this.judgeDetails.name);
  }

  // Load judge data based on judge name
  private loadJudgeData(judgeName: string): void {
    // Sample judge data - in a real app, this would come from an API
    const judgeDatabase: { [key: string]: Judge } = {
      'Hon. Steven Thomas': {
        id: 'steven-thomas',
        name: 'Hon. Steven Thomas',
        title: 'Senior Judge',
        court: 'San Mateo County Superior Court of California',
        additionalCourts: ['California Court of Appeal for the First District'],
        phone: '(650) 261-5121',
        email: 'Not Available',
        address: 'Not Available',
        website: 'Not Available',
        yearsOfService: 18,
        specializations: ['Personal Injury', 'Commercial Law', 'Civil Rights'],
        currentStatus: 'Active',
        judicialStatus: 'ACTIVE',
        appointedBy: 'Not Available',
        location: 'Redwood City, CA',
        lawFirm: 'San Mateo County Superior Court'
      },
      'Hon. Maria Rodriguez': {
        id: 'maria-rodriguez',
        name: 'Hon. Maria Rodriguez',
        title: 'Associate Judge',
        court: 'San Mateo County Superior Court of California',
        additionalCourts: [],
        phone: '(650) 261-5122',
        email: 'm.rodriguez@sanmateocourt.org',
        address: '400 County Center, Redwood City, CA 94063',
        website: 'www.sanmateocourt.org',
        yearsOfService: 12,
        specializations: ['Family Law', 'Personal Injury', 'Contract Disputes'],
        currentStatus: 'Active',
        judicialStatus: 'ACTIVE',
        appointedBy: 'Governor Newsom',
        location: 'Redwood City, CA',
        lawFirm: 'San Mateo County Superior Court'
      },
      'Hon. Robert Wilson': {
        id: 'robert-wilson',
        name: 'Hon. Robert Wilson',
        title: 'Chief Judge',
        court: 'San Mateo County Superior Court of California',
        additionalCourts: ['California Court of Appeal for the First District'],
        phone: '(650) 261-5120',
        email: 'r.wilson@sanmateocourt.org',
        address: '400 County Center, Redwood City, CA 94063',
        website: 'Not Available',
        yearsOfService: 25,
        specializations: ['Commercial Law', 'Constitutional Law', 'Administrative Law'],
        currentStatus: 'Senior Status',
        judicialStatus: 'SENIOR STATUS',
        appointedBy: 'Governor Brown',
        location: 'Redwood City, CA',
        lawFirm: 'San Mateo County Superior Court'
      }
    };

    // Load judge data if found
    if (judgeDatabase[judgeName]) {
      this.judgeDetails = judgeDatabase[judgeName];
    } else {
      // Fallback for unknown judges - use the name from query params
      this.judgeDetails.name = judgeName;
      this.judgeDetails.id = this.judgeId || 'unknown-judge';
    }
  }

  // Navigation methods
  goBack(): void {
    // Navigate back to the previous page with preserved state
    this.router.navigate(['/cases'], { 
      state: { preserveSearchState: true }
    });
  }

  // Header interaction methods
  onSidebarToggle(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onProjectClick(): void {
    console.log('Project clicked');
  }

  onSearchQueryClick(): void {
    // Don't navigate away from judge detail page
    console.log('Search query clicked on judge detail page - staying on current page');
  }

  // Tab management
  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
    console.log('Active tab set to:', tabId);
  }

  // Action methods
  bookmarkJudge(): void {
    console.log('Bookmarking judge:', this.judgeDetails.name);
    // Implement bookmark functionality
  }

  setAlert(): void {
    console.log('Setting alert for judge:', this.judgeDetails.name);
    // Implement alert functionality
  }
}