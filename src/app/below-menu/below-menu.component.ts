import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-below-menu',
  templateUrl: './below-menu.component.html',
  styleUrls: ['./below-menu.component.scss']
})

export class BelowMenuComponent {
  locations:any = [];
  selectedLocation: string = '';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
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
    this.route.queryParams.subscribe(params => {
      this.selectedLocation = params['location'];
    });
  }

  updateLocation(event: any) {
    console.log("Event",event);
    const location = event.value;
    this.router.navigate(['/jobs'], { queryParams: { location: location } });
  }
}
