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
        const startIndex = pageIndex * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        this.filteredListings = this.jobsService.getJobListings(params).slice(startIndex, endIndex);
      } else {
        this.filteredListings = this.jobsService.getJobListings(params).slice(0, this.itemsPerPage);
      }
      this.filteredListingsChange.emit(this.filteredListings);
    });
  }
  
  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }
}
