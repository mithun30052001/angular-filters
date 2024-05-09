import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { JobsService } from '../services/job.services';
import { GenericSelectionComponent } from '../models/generic-selection';
import { Subscription } from 'rxjs';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-jobs-listing',
  templateUrl: './jobs-listing.component.html',
  styleUrls: ['./jobs-listing.component.scss'],
})
export class JobsListingComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(PaginationComponent) paginationComponent!: PaginationComponent;
  filteredJobListings: any[] = [];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  itemsPerPage: number = 5;
  private queryParamsSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobsService: JobsService,
    private genericSelection: GenericSelectionComponent
  ) {}

  ngOnInit(): void {
    this.queryParamsSubscription =
      this.genericSelection.allQueryParams$.subscribe((params) => {
        console.log('Inside job listing', params);
        this.filteredJobListings = this.jobsService.getJobListings(params);
        this.updatePagination();
      });
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.paginator.page.subscribe((event: PageEvent) => {
        this.onPageChange(event);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  onPageChange(event: PageEvent) {
    this.itemsPerPage = event.pageSize;
    this.genericSelection.updateOption({ itemsPerPage: this.itemsPerPage });
    this.updatePagination();
  }

  updatePagination() {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      const endIndex = startIndex + this.paginator.pageSize;
      this.filteredJobListings = this.jobsService.paginate(
        this.filteredJobListings,
        this.paginator.pageIndex,
        this.itemsPerPage
      );
    }
  }
}
