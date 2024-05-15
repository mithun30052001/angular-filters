import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Option } from '../interfaces/options.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss'],
})
export class AppSidebarComponent implements OnInit,OnDestroy{
  isJobsRoute: boolean = false;
  isReferrals: boolean = false;
  locations: Option[] = [];
  timings: Option[] = [];
  private routerEventsSubscription!: Subscription;

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
      { id: 'manila', value: 'Manila' },
    ];
    this.timings = [
      { id: 'night', value: 'Night shift' },
      { id: 'day', value: 'Day shift' },
      { id: 'notGiven', value: 'Not given' },
    ];
    this.routerEventsSubscription =this.router.events.subscribe(() => {
      this.isJobsRoute = this.router.url.includes('/jobs');
      this.isReferrals = this.router.url.includes('/referrals');
    });
  }

  ngOnDestroy(): void {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
  }
}
