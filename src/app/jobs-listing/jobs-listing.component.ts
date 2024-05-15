import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/job.services';
import { QueryParamsService } from '../models/query-params.service';
import { Subscription } from 'rxjs';
import { DataListing } from '../interfaces/dataListings.interface';

@Component({
  selector: 'app-jobs-listing',
  templateUrl: './jobs-listing.component.html',
  styleUrls: ['./jobs-listing.component.scss'],
})
export class JobsListingComponent implements OnInit{
  jobs: DataListing[] = [];
  filteredJobs: DataListing[] = [];
  pageSize!: number;
  private queryParamsSubscription!: Subscription;
  
  /**
   * @param jobsService - Service to fetch job listings.
   * @param queryParams - Service to manage query parameters.
  */

  constructor(
    private jobsService: JobsService,
    private queryParams: QueryParamsService
  ) {}

  ngOnInit() {
    this.queryParamsSubscription = this.queryParams.allQueryParams$.subscribe((params) => {
       this.jobs = this.jobsService.getJobListings(params);
       const { paginatedListings, pageSize } = this.jobsService.getPaginatedListings(params);
       this.filteredJobs = paginatedListings;
       this.pageSize = pageSize;
    });
  }
  
  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }
}
