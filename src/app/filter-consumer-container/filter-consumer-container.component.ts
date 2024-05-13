import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobsService } from '../services/job.services';
import { GenericSelectionComponent } from '../models/generic-selection';

@Component({
  selector: 'filter-consumer-container',
  templateUrl: './filter-consumer-container.component.html',
  styleUrls: ['./filter-consumer-container.component.scss']
})
export class FilterConsumerContainerComponent implements OnInit, OnDestroy {
  @Input() filteredListings: any[] = [];
  @Output() filteredListingsChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  itemsPerPage: number = 5;
  startIndex: number = 0;
  private queryParamsSubscription!: Subscription;

  constructor(private jobsService: JobsService, private genericSelection: GenericSelectionComponent) {}

  ngOnInit(): void {
    this.queryParamsSubscription = this.genericSelection.allQueryParams$.subscribe((params) => {
      console.log('Params Inside filter consumer', params);
      if ('itemsPerPage' in params) {
        this.itemsPerPage = params['itemsPerPage'] ? parseInt(params['itemsPerPage'] as string, 10) : this.itemsPerPage;
      }
      if ('pageIndex' in params) {
        const pageIndex = params['pageIndex'] ? parseInt(params['pageIndex'] as string, 10) : 0;
        this.startIndex = pageIndex * this.itemsPerPage;
      }
      const paginatedListings = this.jobsService.getJobListings(params).slice(this.startIndex, this.startIndex + this.itemsPerPage);
      if (paginatedListings.length === 0 && this.startIndex > 0) {
        this.genericSelection.updateOption({ pageIndex: 0 });
      }
      this.filteredListingsChange.emit(paginatedListings);
    });
  }

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  sortListings(sortOption: string) {
    if (sortOption === 'old') {
      this.filteredListings.sort((a, b) => a.date - b.date);
      console.log("1");
    } else if (sortOption === 'new') {
      console.log("2");

      this.filteredListings.sort((a, b) => b.date - a.date);
    }
  }
}
