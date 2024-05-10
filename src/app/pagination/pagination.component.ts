
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { JobsService } from '../services/job.services';
import { GenericSelectionComponent } from '../models/generic-selection';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() filteredJobListings: any[] = [];
  @Output() filteredJobListingsChange = new EventEmitter<any[]>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  currentPageIndex: number = 0;
  
  constructor(private jobsService: JobsService, private genericSelection: GenericSelectionComponent){}

  onPageChange(event: any) {
    this.currentPageIndex = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.genericSelection.updateOption({ itemsPerPage: this.itemsPerPage });
  }

}
