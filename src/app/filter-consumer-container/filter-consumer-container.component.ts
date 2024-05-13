import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobsService } from '../services/job.services';
import { GenericSelectionComponent } from '../models/generic-selection';

@Component({
  selector: 'filter-consumer-container',
  templateUrl: './filter-consumer-container.component.html',
  styleUrls: ['./filter-consumer-container.component.scss']
})
export class FilterConsumerContainerComponent{
  @Input() filteredListings: any[] = [];
  itemsPerPage: number = 5;
  startIndex: number = 0;
  private queryParamsSubscription!: Subscription;

  constructor(private jobsService: JobsService, private genericSelection: GenericSelectionComponent) {}  
  
  
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
