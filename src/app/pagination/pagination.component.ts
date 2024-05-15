
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { QueryParamsService } from '../models/query-params.service';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {
  @Input() totalItems: number = 0;
  pageSize!: number;
  pageSizeOptions: number[] = [1, 5, 10, 25, 100];
  currentPageIndex: number = 0;
  private queryParamsSubscription!: Subscription;
  constructor(private queryParams: QueryParamsService) {}

  onPageChange(event: PageEvent) {
    this.currentPageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.queryParams.updateOption({ pageIndex: this.currentPageIndex, pageSize: this.pageSize });
  }

  ngOnInit(): void {
    this.queryParamsSubscription = this.queryParams.allQueryParams$.subscribe((params) => {
      if(params['pageSize'] ){
        this.pageSize = params['pageSize'];
      }
      if(params['pageIndex'] ){
        this.currentPageIndex = params['pageIndex'];
      }
    });
  }

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

}
