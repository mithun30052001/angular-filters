
import { Component, Input } from '@angular/core';
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
  pageSizeOptions: number[] = [1, 5, 10, 25, 100];
  currentPageIndex: number = 0;

  constructor(private queryParams: QueryParamsService) {}

  onPageChange(event: PageEvent) {
    this.currentPageIndex = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.queryParams.updateOption({ pageIndex: this.currentPageIndex, itemsPerPage: this.itemsPerPage });
  }

}
