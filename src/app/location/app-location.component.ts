import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericSelectionComponent } from '../helpers/generic-selection.component';

@Component({
  selector: 'app-location',
  templateUrl: './app-location.component.html',
  styleUrls: ['./app-location.component.scss']
})

export class LocationComponent extends GenericSelectionComponent{
  locations:any = [];
  selectedLocation: string = '';
  constructor(router: Router,route: ActivatedRoute) {
    super(router, route);
   }

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
    this.selectedLocation = this.setSelectedOption('location');
  }

  updateLocation(event: any) {
    super.updateOption(event, 'location');
  }
}
