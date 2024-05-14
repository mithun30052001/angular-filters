import { Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { QueryParamsService } from '../models/query-params.service';

@Component({
  selector: 'app-filters',
  templateUrl: './app-filters.component.html',
  styleUrls: ['./app-filters.component.scss']
})
export class AppFiltersComponent implements OnDestroy {
  @Input() choices:any = []
  @Input() paramKey:string = '';
  @Input() header:string = '';
  selectedChoice: string = '';
  private queryParamsSubscription!: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private queryParams: QueryParamsService
  ) { }

  ngOnInit(): void {
    this.selectedChoice = this.queryParams.setSelectedOption(this.paramKey);
    this.queryParamsSubscription = this.queryParams.allQueryParams$.subscribe(params => {
      console.log("Inside app filters", params);
    });
  }

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  updateFilter(event: any) {
    this.queryParams.updateOption({[this.paramKey]: event.value})
  }

  resetFilter() {
    const queryParams = { ...this.route.snapshot.queryParams };
    delete queryParams[this.paramKey];
    this.router.navigate([], { queryParams: queryParams });
    this.selectedChoice = '';
  }
}