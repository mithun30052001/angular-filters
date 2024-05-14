import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/job.services';
import { QueryParamsService } from '../models/query-params.service';

@Component({
  selector: 'app-jobs-listing',
  templateUrl: './jobs-listing.component.html',
  styleUrls: ['./jobs-listing.component.scss'],
})
export class JobsListingComponent implements OnInit{
  jobs: any[] = [];
  filteredJobs: any[] = [];

  /**
   * @param jobsService - Service to fetch job listings.
   * @param queryParams - Service to manage query parameters.
  */

  constructor(
    private jobsService: JobsService,
    private queryParams: QueryParamsService
  ) {}

  ngOnInit() {
    this.queryParams.allQueryParams$.subscribe((params) => {
      this.jobs = this.jobsService.getJobListings(params);
    });
  }

  /**
   * Method to update the filtered job listings.
   * @param newListings - Array of new job listings to update the filteredJobs array.
  */
  updateJobs(newListings: any[]): void {
    this.filteredJobs= newListings;
  }
}
