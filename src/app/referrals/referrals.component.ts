import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
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
  private queryParamsSubscription!: Subscription;
  
  constructor(
    private queryParams: QueryParamsService,
    private jobsService: JobsService
  ) {}

  ngOnInit() {
    this.queryParamsSubscription = this.queryParams.allQueryParams$.subscribe((params) => {
        this.referrals = this.jobsService.getJobListings(params);
    });
  }
  
  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  updateReferrals(newListings: any[]): void {
    this.filteredReferrals = newListings;
  }
}
