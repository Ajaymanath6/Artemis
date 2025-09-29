import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../../components/ui/search-bar/search-bar.component';

interface Document {
  name: string;
  date: string;
  type: string;
  size: string;
  pages: number;
  description: string;
  orderedDate: string;
  isClickable: boolean;
  expanded: boolean;
  downloading: boolean;
  downloadReady: boolean;
}

@Component({
  selector: 'app-document-layout',
  imports: [CommonModule, FormsModule, SearchBarComponent],
  templateUrl: './document-layout.component.html',
  styleUrl: './document-layout.component.css'
})
export class DocumentLayoutComponent {
  @Input() caseDetails: any;
  searchQuery: string = '';

  documents: Document[] = [
    {
      name: 'Notice of Motion and Motion to Quash',
      date: '2025-10-09',
      type: 'pdf',
      size: '2.4 MB',
      pages: 12,
      description: 'Notice of Motion and Motion to Quash SUBPOENA;OBJECTION TO CONTINUED ACTIONS IN REMOVED CASE; Comment SUBPOENA;OBJECTION TO CONTINUED ACTIONS IN REMOVED CASE.',
      orderedDate: '2025-10-08 14:30',
      isClickable: true,
      expanded: false,
      downloading: false,
      downloadReady: false
    },
    {
      name: 'Opposition Brief',
      date: '2025-09-28',
      type: 'pdf',
      size: '1.8 MB',
      pages: 8,
      description: 'Opposition to defendant\'s motion to dismiss filed by plaintiff counsel with supporting legal arguments and precedent cases cited.',
      orderedDate: '2025-09-27 16:45',
      isClickable: false,
      expanded: false,
      downloading: false,
      downloadReady: false
    },
    {
      name: 'Discovery Request Documents',
      date: '2025-09-15',
      type: 'pdf',
      size: '5.2 MB',
      pages: 35,
      description: 'Comprehensive discovery request documents including interrogatories, requests for production of documents, and requests for admission served on all parties in the matter.',
      orderedDate: '2025-09-14 10:20',
      isClickable: true,
      expanded: false,
      downloading: false,
      downloadReady: false
    },
    {
      name: 'Expert Witness Report',
      date: '2025-08-30',
      type: 'pdf',
      size: '3.1 MB',
      pages: 22,
      description: 'Expert witness report prepared by forensic accountant detailing financial analysis and damages calculations with supporting exhibits and methodology.',
      orderedDate: '2025-08-29 09:15',
      isClickable: false,
      expanded: false,
      downloading: false,
      downloadReady: false
    }
  ];

  get filteredDocuments(): Document[] {
    if (!this.searchQuery) {
      return this.documents;
    }
    return this.documents.filter(doc => 
      doc.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      doc.date.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  onSearch(query: string): void {
    this.searchQuery = query;
    console.log('Searching documents:', this.searchQuery);
  }

  onNameClick(document: Document): void {
    if (document.isClickable) {
      console.log('Document name clicked:', document.name);
      // Navigate to document details or open document
    }
  }

  isDescriptionLong(description: string): boolean {
    // Estimate if description exceeds 3 lines (approximately 150 characters)
    return description.length > 150;
  }

  toggleDescription(document: Document): void {
    document.expanded = !document.expanded;
  }

  downloadDocument(document: Document): void {
    if (document.downloading || document.downloadReady) return;
    
    document.downloading = true;
    console.log('Starting download for:', document.name);
    
    // Simulate download process
    setTimeout(() => {
      document.downloading = false;
      document.downloadReady = true;
      console.log('Download ready for:', document.name);
    }, 2000);
  }
}
