import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../../components/ui/search-bar/search-bar.component';

interface DocketEntry {
  date: string;
  entry: string;
  description: string;
  filedBy: string;
  documents: { name: string; type: string }[];
}

@Component({
  selector: 'app-docket-entries-layout',
  imports: [CommonModule, FormsModule, SearchBarComponent],
  templateUrl: './docket-entries-layout.component.html',
  styleUrl: './docket-entries-layout.component.css'
})
export class DocketEntriesLayoutComponent {
  @Input() caseDetails: any;
  searchQuery: string = '';

  docketEntries: DocketEntry[] = [
    {
      date: '2025-10-09',
      entry: '1',
      description: 'Proof of Service - ELECTRONIC of.; Additional Info: Proof of Service - ELECTRONIC of MICHAEL GOGUEN\'S OPPOSITION TO AMBER BAPTISTE\'S MOTION TO QUASH SUB Comment MICHAEL GOGUEN\'S OPPOSITION TO AMBER BAPTISTE\'S MOTION TO QUASH SUBPOENA SERVED ON NON-PARTY GOOGLE LLC; MICHAEL GOGUEN\'S OPPOSITION TO AMBER BAPTISTE\'S MOTION TO QUASH SUBPOENA SERVED ON NON-PARTY COX COMMUNICATIONS; DECLARATION OF KYLE BATTER IN SUPPORT OF MICHAEL GOGUEN\'S OPPOSITIONS TO AMBER BAPTISTE\'S (1) MOTION TO QUASH SUBPOENA SERVED ON NON-PARTY GOOGLE, LLC, AND (2) MOTION TO QUASH SUBPOENAS SERVED ON NON-PARTY COX COMMUNICATIONS',
      filedBy: 'Plaintiff',
      documents: [
        { name: 'Proof_of_Service.pdf', type: 'pdf' },
        { name: 'Opposition_Brief.pdf', type: 'pdf' },
        { name: 'Declaration.pdf', type: 'pdf' }
      ]
    },
    {
      date: '2025-09-28',
      entry: '2', 
      description: 'Motion to Compel Discovery - Defendant filed motion requesting court to compel plaintiff to respond to outstanding discovery requests including document production and interrogatories.',
      filedBy: 'Defendant',
      documents: [
        { name: 'Motion_to_Compel.pdf', type: 'pdf' },
        { name: 'Supporting_Brief.pdf', type: 'pdf' }
      ]
    },
    {
      date: '2025-09-15',
      entry: '3',
      description: 'Settlement Conference Order - Court ordered mandatory settlement conference to be held on October 15, 2025, with all parties required to attend with settlement authority.',
      filedBy: 'Court',
      documents: [
        { name: 'Settlement_Order.pdf', type: 'pdf' }
      ]
    },
    {
      date: '2025-08-30',
      entry: '4',
      description: 'Expert Witness Disclosure - Plaintiff disclosed expert witnesses including forensic accountant, industry expert, and damages expert with accompanying expert reports and qualifications.',
      filedBy: 'Plaintiff',
      documents: [
        { name: 'Expert_Disclosure.pdf', type: 'pdf' },
        { name: 'Expert_Report_1.pdf', type: 'pdf' },
        { name: 'Expert_Report_2.pdf', type: 'pdf' },
        { name: 'Expert_CV.pdf', type: 'pdf' }
      ]
    },
    {
      date: '2025-08-12',
      entry: '5',
      description: 'Summary Judgment Motion Filed - Defendant filed motion for summary judgment arguing no genuine dispute of material fact exists and defendant is entitled to judgment as a matter of law.',
      filedBy: 'Defendant',
      documents: [
        { name: 'Summary_Judgment_Motion.pdf', type: 'pdf' },
        { name: 'Statement_of_Facts.pdf', type: 'pdf' }
      ]
    },
    {
      date: '2025-07-25',
      entry: '6',
      description: 'Deposition Notice - Plaintiff noticed deposition of defendant\'s corporate representative and key witnesses to be taken at plaintiff\'s attorney\'s office.',
      filedBy: 'Plaintiff',
      documents: [
        { name: 'Deposition_Notice.pdf', type: 'pdf' }
      ]
    }
  ];

  get filteredEntries(): DocketEntry[] {
    if (!this.searchQuery) {
      return this.docketEntries;
    }
    return this.docketEntries.filter(entry => 
      entry.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      entry.date.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  onSearch(query: string): void {
    this.searchQuery = query;
    console.log('Searching docket entries:', this.searchQuery);
  }
}
