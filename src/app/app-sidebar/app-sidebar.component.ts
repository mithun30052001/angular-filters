import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent {
  isJobsRoute: boolean = false;
  locations:any = [];
  timings:any = [];
  constructor(private router: Router) {}

  ngOnInit() {
    this.locations = [
      { id: 'chennai', value: 'Chennai' },
      { id: 'coimbatore', value: 'Coimbatore' },
      { id: 'hyderabad', value: 'Hyderabad' },
      { id: 'lucknow', value: 'Lucknow' },
      { id: 'jaipur', value: 'Jaipur' },
      { id: 'bengaluru', value: 'Bengaluru' },
      { id: 'vellore', value: 'Vellore' },
      { id: 'ahmedabad', value: 'Ahmedabad' },
      { id: 'us', value: 'US' },
      { id: 'manila', value: 'Manila' }
    ];
    this.timings = [
      { id: 'night', value: 'Night shift' },
      { id: 'day', value: 'Day shift' },
      { id: 'notGiven', value: 'Not given' }
    ];
    this.router.events.subscribe(() => {
        this.isJobsRoute = this.router.url.includes('/jobs');
    });
  }
}
