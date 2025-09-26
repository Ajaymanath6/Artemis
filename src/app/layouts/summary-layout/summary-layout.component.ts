import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-layout.component.html',
  styleUrls: ['./summary-layout.component.css']
})
export class SummaryLayoutComponent {
  @Input() caseDetails: any;
}
