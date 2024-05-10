import { Component, Input } from '@angular/core';
import { GenericSelectionComponent } from 'src/app/models/generic-selection';
import { JobsService } from 'src/app/services/job.services';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss'],
})
export class ReferralsComponent {
  params: any;
  referrals: any[] = [];
  @Input() data: any;
  
  constructor(
    private genericSelection: GenericSelectionComponent,
    private jobsService: JobsService
  ) {}

  ngOnInit() {
    this.genericSelection.allQueryParams$.subscribe((params) => {
      this.params = params;
      this.referrals = this.jobsService.getJobListings(params);
    });
  }

  handleFilteredJobListingsChange(filteredJobListings: any[]) {
    this.referrals = filteredJobListings;
    console.log('Filtered Job Listings Changed:', filteredJobListings.length);
  }
  
}
