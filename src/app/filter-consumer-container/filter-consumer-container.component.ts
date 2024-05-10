import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobsService } from '../services/job.services';
import { GenericSelectionComponent } from '../models/generic-selection';

@Component({
  selector: 'filter-consumer-container',
  templateUrl: './filter-consumer-container.component.html',
  styleUrls: ['./filter-consumer-container.component.scss']
})
export class FilterConsumerContainerComponent {
  @Input() filteredListings: any[] = [];
  @Output() filteredListingsChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  pageSizeOptions: number[] = [5, 10, 25, 100];
  itemsPerPage: number = 5;
  private queryParamsSubscription!: Subscription;

  constructor(
    private jobsService: JobsService,
    private genericSelection: GenericSelectionComponent
  ) {}

  ngOnInit(): void {
    this.queryParamsSubscription =
      this.genericSelection.allQueryParams$.subscribe((params) => {
        console.log('Params Inside filter consumer', params);
        this.filteredListings = this.jobsService.getJobListings(params);
        if ('itemsPerPage' in params) {
          this.itemsPerPage = parseInt(params['itemsPerPage']as string);
        }
        this.filteredListings = this.filteredListings.slice(0,this.itemsPerPage);
        this.filteredListingsChange.emit(this.filteredListings); 

      });
  }
  
  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }
}
