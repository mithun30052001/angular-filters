import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { QueryParamsService } from 'src/app/models/query-params.service';
import { JobsService } from 'src/app/services/job.services';
import { DataListing } from '../interfaces/dataListings.interface';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss'],
})
export class ReferralsComponent {
  referrals: DataListing[] = [];
  filteredReferrals: DataListing[] = [];
  itemsPerPage!: number;
  private queryParamsSubscription!: Subscription;
  
  constructor(
    private queryParams: QueryParamsService,
    private jobsService: JobsService
  ) {}

  ngOnInit() {
    this.queryParamsSubscription = this.queryParams.allQueryParams$.subscribe((params) => {
        this.referrals = this.jobsService.getJobListings(params);
      const { paginatedListings, itemsPerPage } = this.jobsService.getPaginatedListings(params);
      this.filteredReferrals = paginatedListings;
      this.itemsPerPage = itemsPerPage;
    });
  }
  
  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }
}
