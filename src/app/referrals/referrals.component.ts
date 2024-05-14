import { Component } from '@angular/core';
import { QueryParamsService } from 'src/app/models/query-params.service';
import { JobsService } from 'src/app/services/job.services';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss'],
})
export class ReferralsComponent {
  referrals: any[] = [];
  filteredReferrals: any[] = [];
  itemsPerPage: number = 5;

  constructor(
    private queryParams: QueryParamsService,
    private jobsService: JobsService
  ) {}

  ngOnInit() {
    this.queryParams.allQueryParams$.subscribe((params) => {
      this.referrals = this.jobsService.getJobListings(params);
      const { paginatedListings, itemsPerPage } = this.jobsService.getPaginatedListings(params);
      this.filteredReferrals = paginatedListings;
      this.itemsPerPage = itemsPerPage;
    });
  }
}
