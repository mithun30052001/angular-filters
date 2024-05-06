import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { JobsService } from '../services/job.services';

@Component({
  selector: 'app-jobs-listing',
  templateUrl: './jobs-listing.component.html',
  styleUrls: ['./jobs-listing.component.scss']
})
export class JobsListingComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  jobListings: any[] = [];
  filteredJobListings: any[] = [];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  itemsPerPage: number = 5;
  location: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobsService: JobsService
  ) { }

  ngOnInit(): void {
    this.jobsService.getJobListings().subscribe(jobListings => {
      this.jobListings = jobListings;
      this.applyFilter();
    });

    this.route.queryParams.subscribe(params => {
      this.location = params['location'] || '';
      this.itemsPerPage = +params['itemsPerPage'] || 5;
      this.applyFilter();
    });
  }

  ngAfterViewInit(): void {
    this.paginator?.page.subscribe((event: PageEvent) => {
      this.onPageChange(event);
    });
  }

  onPageChange(event: PageEvent) {
    if (this.paginator) {
      this.paginator.pageIndex = event.pageIndex;
      this.paginator.pageSize = event.pageSize;
      this.itemsPerPage = event.pageSize;
      this.router.navigate([], {
        queryParams: {
          location: this.location,
          itemsPerPage: this.itemsPerPage
        }
      });
      this.applyFilter();
    }
  }

  private applyFilter() {
    if (this.location) {
      this.filteredJobListings = this.jobListings.filter(job => job.location.toLowerCase() === this.location.toLowerCase());
    } else {
      this.filteredJobListings = this.jobListings;
    }

    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.filteredJobListings = this.filteredJobListings.slice(startIndex, endIndex);
    }else{
      this.filteredJobListings = this.filteredJobListings.slice(0, this.itemsPerPage);
    }
  }
}