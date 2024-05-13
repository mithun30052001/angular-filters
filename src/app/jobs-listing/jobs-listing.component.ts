import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/job.services';
import { GenericSelectionComponent } from '../models/generic-selection';

@Component({
  selector: 'app-jobs-listing',
  templateUrl: './jobs-listing.component.html',
  styleUrls: ['./jobs-listing.component.scss'],
})
export class JobsListingComponent implements OnInit{
  jobs: any[] = [];
  filteredJobs: any[] = [];

  constructor(
    private jobsService: JobsService,
    private genericSelection: GenericSelectionComponent
  ) {}

  ngOnInit() {
    this.genericSelection.allQueryParams$.subscribe((params) => {
      this.jobs = this.jobsService.getJobListings(params);
    });
  }

  updateJobs(newListings: any[]): void {
    this.filteredJobs= newListings;
  }
}
