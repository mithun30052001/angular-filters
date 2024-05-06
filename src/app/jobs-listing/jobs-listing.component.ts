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
  searchTerm: string = '';
  timings: string = '';

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
      this.timings = params['timings'] || '';
      this.itemsPerPage = +params['itemsPerPage'] || 5;
      this.searchTerm = params['searchQuery'] || '';
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
      this.updateQueryParams();
      this.applyFilter();
    }
  }

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.updateQueryParams(); // Update query params on search
    this.applyFilter();
  }

  private applyFilter() {
    let filteredListings = this.jobListings;

    if (this.location) {
      filteredListings = filteredListings.filter(job => job.location.toLowerCase() === this.location.toLowerCase());
    }

    if (this.searchTerm) {
      const searchLower = this.searchTerm.toLowerCase();
      filteredListings = filteredListings.filter(job =>
        job.title.toLowerCase().includes(searchLower) ||
        job.details.toLowerCase().includes(searchLower) ||
        job.location.toLowerCase().includes(searchLower) ||
        job.type.toLowerCase().includes(searchLower)
      );
    }

    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.filteredJobListings = filteredListings.slice(startIndex, endIndex);
    } else {
      this.filteredJobListings = filteredListings.slice(0, this.itemsPerPage);
    }
  }

  private updateQueryParams() {
    const queryParams = {
      location: this.location,
      itemsPerPage: this.itemsPerPage,
      searchQuery: this.searchTerm
    };
    this.router.navigate([], {
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
  }
}
