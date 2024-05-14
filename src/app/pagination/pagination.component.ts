
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
  itemsPerPage: any = 5;
  pageSizeOptions: number[] = [1, 5, 10, 25, 100];
  currentPageIndex: any = 0;
  private queryParamsSubscription!: Subscription;
  constructor(private queryParams: QueryParamsService) {}

  onPageChange(event: PageEvent) {
    this.currentPageIndex = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.queryParams.updateOption({ pageIndex: this.currentPageIndex, itemsPerPage: this.itemsPerPage });
  }

  ngOnInit(): void {
    this.queryParamsSubscription = this.queryParams.allQueryParams$.subscribe((params) => {
      if(params['itemsPerPage'] ){
        this.itemsPerPage = params['itemsPerPage'];
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
