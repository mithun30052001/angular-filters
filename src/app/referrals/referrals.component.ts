import { Component } from '@angular/core';
import { GenericSelectionComponent } from 'src/app/models/generic-selection';
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
    private genericSelection: GenericSelectionComponent,
    private jobsService: JobsService
  ) {}

  ngOnInit() {
    this.genericSelection.allQueryParams$.subscribe((params) => {
      this.referrals = this.jobsService.getJobListings(params);
    });
  }

  updateReferrals(newListings: any[]): void {
    this.filteredReferrals = newListings;
  }
}
