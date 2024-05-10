import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { GenericSelectionComponent } from '../models/generic-selection';
import { JobsService } from '../services/job.services';

@Component({
  selector: 'filter-consumer-container',
  templateUrl: './filter-consumer-container.component.html',
  styleUrls: ['./filter-consumer-container.component.scss']
})
export class FilterConsumerContainerComponent {
  constructor( private genericSelection: GenericSelectionComponent, private jobsService: JobsService){}
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Output() filteredJobListingsChange: EventEmitter<any[]> = new EventEmitter<any[]>(); 
  filteredJobListings: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  
  ngOnInit(): void {
      this.genericSelection.allQueryParams$.subscribe((params) => {
        this.filteredJobListings = this.jobsService.getJobListings(params);
        if (this.paginator) {
          this.filteredJobListings = this.jobsService.paginate(
            this.filteredJobListings,
            this.paginator.pageIndex,
            this.itemsPerPage
          );
          this.filteredJobListingsChange.emit(this.filteredJobListings);
          console.log("My filtered",this.filteredJobListings.length);
        }
      });
  }

  ngAfterViewInit(): void {
    this.paginator?.page.subscribe((event: PageEvent) => {
      this.onPageChange(event);
    });
  }

  onPageChange(event: PageEvent) {
    this.itemsPerPage = event.pageSize;
    this.genericSelection.updateOption({ 'itemsPerPage': this.itemsPerPage });
    this.filteredJobListings = this.jobsService.paginate(this.filteredJobListings, this.paginator.pageIndex, this.itemsPerPage);
    this.filteredJobListingsChange.emit(this.filteredJobListings); 
  }
}
