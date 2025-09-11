import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Simulate loading time and then redirect to dashboard
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 3000); // 3 seconds loading time
  }
}
