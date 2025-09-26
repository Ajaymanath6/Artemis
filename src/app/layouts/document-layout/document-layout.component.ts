import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Document {
  name: string;
  date: string;
  type: string;
  size: string;
  pages: number;
}

@Component({
  selector: 'app-document-layout',
  imports: [CommonModule],
  templateUrl: './document-layout.component.html',
  styleUrl: './document-layout.component.css'
})
export class DocumentLayoutComponent {
  @Input() caseDetails: any;

  downloadDocument(document: any): void {
    console.log('Downloading document:', document.name);
    // Implement document download functionality
  }
}
