import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-flowbite-project';

  constructor(private router: Router) {}

  ngOnInit(): void {
    initFlowbite();
    
    // Handle GitHub Pages routing redirect
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      sessionStorage.removeItem('redirect');
      this.router.navigateByUrl(redirect);
    }
  }
}
