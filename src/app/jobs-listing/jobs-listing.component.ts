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
        if ('itemsPerPage' in params) {
          this.itemsPerPage = parseInt(params['itemsPerPage']as string);
        }
        this.updatePagination();
      });
  }

  ngAfterViewInit(): void {
    if (this.paginationComponent && this.paginationComponent.paginator) {
      this.paginationComponent.paginator.page.subscribe((event: PageEvent) => {
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
    if (this.itemsPerPage) {
      const startIndex = this.paginationComponent? this.paginationComponent.paginator.pageIndex * this.itemsPerPage : 0;
      const endIndex = startIndex + this.itemsPerPage;
      this.filteredJobListings = this.jobsService.paginate(
        this.filteredJobListings,
        this.paginationComponent? this.paginationComponent.paginator.pageIndex: 0,
        this.itemsPerPage
      );
    }
  }

}
