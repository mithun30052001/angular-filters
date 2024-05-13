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
  startIndex: number  = 0;
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
      this.filteredListings = this.jobsService.getJobListings(params).slice(this.startIndex, this.startIndex+ this.itemsPerPage);
      this.filteredListingsChange.emit(this.filteredListings);
    });
  }
  
  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }
}
