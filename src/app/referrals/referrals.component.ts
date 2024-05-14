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

  constructor(
    private queryParams: QueryParamsService,
    private jobsService: JobsService
  ) {}

  ngOnInit() {
    this.queryParams.allQueryParams$.subscribe((params) => {
      this.referrals = this.jobsService.getJobListings(params);
    });
  }

  updateReferrals(newListings: any[]): void {
    this.filteredReferrals = newListings;
  }
}
