import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobsService } from '../services/job.services';
import { QueryParamsService } from '../models/query-params.service';

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

  constructor(private jobsService: JobsService, private queryParams: QueryParamsService) {}

  ngOnInit(): void {
    this.queryParamsSubscription = this.queryParams.allQueryParams$.subscribe((params) => {
      const { paginatedListings, itemsPerPage } = this.jobsService.getPaginatedListings(params);
      this.itemsPerPage = itemsPerPage;
      this.filteredListingsChange.emit(paginatedListings);
    });
  }

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  
}
