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
    this.jobsService.getJobListings().subscribe(jobListings => {
      this.jobListings = jobListings;
      this.applyFilter();
    });
    this.route.queryParams.subscribe(params => {
      this.location = params['location'] || '';
      this.timings = params['timings'] || '';
      this.itemsPerPage = +params['itemsPerPage'] || 5;
      this.searchTerm = params['searchTerm'] || '';
      this.updateQueryParams();
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
          timings: this.timings,
          itemsPerPage: this.itemsPerPage,
          searchTerm: this.searchTerm
        }
      });
      this.applyFilter();
    }
  }
  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm.trim().toLowerCase();
    this.updateQueryParams();
    this.applyFilter();
  }
  private applyFilter() {
    this.filteredJobListings = [...this.jobListings];
    if (this.location) {
      this.filteredJobListings = this.filteredJobListings.filter(job => job.location.toLowerCase() === this.location.toLowerCase());
    }
    if (this.timings) {
      if(this.timings=='Not given'){
        this.filteredJobListings = this.filteredJobListings.filter(job => job.timePreference?.toLowerCase() == null);
      }else{
        this.filteredJobListings = this.filteredJobListings.filter(job => job.timePreference?.toLowerCase() === this.timings.toLowerCase());
      }
    }
    if (this.searchTerm) {
      this.filteredJobListings = this.filteredJobListings.filter(job =>
        job.title.toLowerCase().includes(this.searchTerm) ||
        job.details.toLowerCase().includes(this.searchTerm) ||
        job.experience.toLowerCase().includes(this.searchTerm) || job.location.toLowerCase().includes(this.searchTerm)
      );
    }
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.filteredJobListings = this.filteredJobListings.slice(startIndex, endIndex);
    } else {
      this.filteredJobListings = this.filteredJobListings.slice(0, this.itemsPerPage);
    }
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
