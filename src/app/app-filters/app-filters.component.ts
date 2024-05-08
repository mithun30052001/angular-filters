import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericSelectionComponent } from '../models/generic-selection';

@Component({
  selector: 'app-filters',
  templateUrl: './app-filters.component.html',
  styleUrls: ['./app-filters.component.scss']
})

export class AppFiltersComponent extends GenericSelectionComponent{
  @Input() choices:any = []
  @Input() paramKey:string = '';
  @Input() header:string = '';
  selectedChoice: string = '';
  constructor(router: Router,route: ActivatedRoute) {
    super(router, route);
   }

  ngOnInit(): void {
    this.selectedChoice = this.setSelectedOption(this.paramKey);
  }

  updateFilter(event: any) {
    super.updateOption(event,this.paramKey);
  }
  
  resetFilter() {
    const queryParams = { ...this.route.snapshot.queryParams };
    delete queryParams[this.paramKey];
    this.router.navigate([], { queryParams: queryParams });
    this.selectedChoice = '';
  }
}
