import { Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GenericSelectionComponent } from '../models/generic-selection';

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
    private genericSelection: GenericSelectionComponent
  ) { }

  ngOnInit(): void {
    this.selectedChoice = this.genericSelection.setSelectedOption(this.paramKey);
    this.queryParamsSubscription = this.genericSelection.allQueryParams$.subscribe(params => {
      console.log("Inside app filters", params);
    });
  }

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  updateFilter(event: any) {
    this.genericSelection.updateOption({[this.paramKey]: event.value})
  }

  resetFilter() {
    this.genericSelection.resetOption(this.paramKey);
    this.selectedChoice = '';
  }
}