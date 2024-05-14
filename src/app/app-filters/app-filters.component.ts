import { Component, Input } from '@angular/core';
import { QueryParamsService } from '../models/query-params.service';

@Component({
  selector: 'app-filters',
  templateUrl: './app-filters.component.html',
  styleUrls: ['./app-filters.component.scss']
})
export class AppFiltersComponent {
  @Input() choices:any = []
  @Input() paramKey:string = '';
  @Input() header:string = '';
  selectedChoice: string = '';

  constructor(
    private queryParams: QueryParamsService
  ) { }

  ngOnInit(): void {
    this.selectedChoice = this.queryParams.setSelectedOption(this.paramKey);
  }

  updateFilter(event: any) {
    this.queryParams.updateOption({[this.paramKey]: event.value})
  }

  resetFilter() {
    this.queryParams.resetOption(this.paramKey);
    this.selectedChoice = '';
  }
}