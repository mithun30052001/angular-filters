import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericSelectionComponent } from '../helpers/generic-selection';

@Component({
  selector: 'app-timings',
  templateUrl: './timings.component.html',
  styleUrls: ['./timings.component.scss']
})
export class TimingsComponent extends GenericSelectionComponent{
  timings:any = [];
  selectedTiming: string = '';
  constructor(router: Router, route: ActivatedRoute) { 
    super(router, route);
  }

  ngOnInit(): void {
    this.timings = [
      { id: 'night', value: 'Night shift' },
      { id: 'day', value: 'Day shift' }
    ];
    this.selectedTiming = this.setSelectedOption('timings');
  }

  updateTiming(event: any) {
    super.updateOption(event, 'timings');
  }
}
