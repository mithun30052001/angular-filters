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
  timings: string = '';
  searchTerm: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobsService: JobsService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.location = params['location'] || '';
      this.timings = params['timings'] || '';
      this.itemsPerPage = +params['itemsPerPage'] || 5;
      this.searchTerm = params['searchTerm'] || '';

      this.jobsService.getJobListings().subscribe(jobListings => {
        this.jobListings = jobListings;
        this.filterJobListings();
        this.updateQueryParams();
        this.paginate();
      });
    });
  }

  ngAfterViewInit(): void {
    this.paginator?.page.subscribe((event: PageEvent) => {
      this.onPageChange(event);
    });
  }

  onPageChange(event: PageEvent) {
    this.itemsPerPage = event.pageSize;
    this.updateQueryParams();
    this.paginate();
  }

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm.trim().toLowerCase();
    this.updateQueryParams();
    this.paginate();
  }

  private filterJobListings() {
    const params: any = {
      location: this.location,
      timings: this.timings,
      searchTerm: this.searchTerm
    };
    this.filteredJobListings = this.jobsService.filterJobListings(params, this.jobListings);
  }

  private paginate() {
    const startIndex = this.paginator.pageIndex * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.filteredJobListings = this.filteredJobListings.slice(startIndex, endIndex);
  }

  private updateQueryParams() {
    const queryParams: any = {
      location: this.location,
      timings: this.timings,
      itemsPerPage: this.itemsPerPage,
    };
    if (this.searchTerm) {
      queryParams.searchTerm = this.searchTerm;
    }
    this.router.navigate([], { queryParams: queryParams });
  }
}
