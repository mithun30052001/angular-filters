import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericSelectionComponent } from '../models/generic-selection';

@Component({
  selector: 'app-filters',
  templateUrl: './app-filters.component.html',
  styleUrls: ['./app-filters.component.scss']
})
export class AppFiltersComponent {
  @Input() choices: any = [];
  @Input() paramKey: string = '';
  @Input() header: string = '';

  selectedChoice: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private genericSelectionService: GenericSelectionComponent
  ) { }

  ngOnInit(): void {
    this.selectedChoice = this.genericSelectionService.setSelectedOption(this.paramKey);
  }

  updateFilter(event: any) {
    this.genericSelectionService.updateOption(event, this.paramKey);
  }

  resetFilter() {
    const queryParams = { ...this.route.snapshot.queryParams };
    delete queryParams[this.paramKey];
    this.router.navigate([], { queryParams: queryParams });
    this.selectedChoice = '';
  }
}