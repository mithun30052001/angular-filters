
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JobsService } from '../services/job.services';
import { QueryParamsService } from '../models/query-params.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Output() filteredJobListingsChange = new EventEmitter<any[]>();
  pageSizeOptions: number[] = [1, 5, 10, 25, 100];
  currentPageIndex: number = 0;

  constructor(private jobsService: JobsService, private queryParams: QueryParamsService) {}

  onPageChange(event: PageEvent) {
    this.currentPageIndex = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.queryParams.updateOption({ pageIndex: this.currentPageIndex, itemsPerPage: this.itemsPerPage });
  }

}
