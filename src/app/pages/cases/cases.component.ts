import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../components/ui/search-bar/search-bar.component';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [CommonModule, SearchBarComponent],
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  onSearch(query: string): void {
    console.log('Searching cases for:', query);
    // Implement case search functionality
  }
}
