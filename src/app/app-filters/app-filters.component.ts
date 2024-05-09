import { Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GenericSelectionComponent } from '../models/generic-selection';

@Component({
  selector: 'app-filters',
  templateUrl: './app-filters.component.html',
  styleUrls: ['./app-filters.component.scss']
})

export class AppFiltersComponent extends GenericSelectionComponent implements OnDestroy {
  @Input() choices:any = []
  @Input() paramKey:string = '';
  @Input() header:string = '';
  selectedChoice: string = '';
  private queryParamsSubscription!: Subscription;

  constructor(router: Router,route: ActivatedRoute) {
    super(router, route);
   }

  ngOnInit(): void {
    this.selectedChoice = this.setSelectedOption(this.paramKey);
    this.queryParamsSubscription = this.allQueryParams$.subscribe(params => {
      console.log("Inside app filters", params);
    });
  }

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  updateFilter(event: any) {
    this.updateOption({[this.paramKey]: event.value})
  }
  
  resetFilter() {
    const queryParams = { ...this.route.snapshot.queryParams };
    delete queryParams[this.paramKey];
    this.router.navigate([], { queryParams: queryParams });
    this.selectedChoice = '';
  }
}
