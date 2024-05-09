import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { JobsService } from '../services/job.services';
import { GenericSelectionComponent } from '../models/generic-selection';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jobs-listing',
  templateUrl: './jobs-listing.component.html',
  styleUrls: ['./jobs-listing.component.scss'],
})
export class JobsListingComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  jobListings: any[] = [];
  filteredJobListings: any[] = [];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  itemsPerPage: number = 5;
  location: string = '';
  timings: string = '';
  searchTerm: string = '';
  private queryParamsSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobsService: JobsService,
    private genericSelection: GenericSelectionComponent
  ) {}

  ngOnInit(): void {
    // this.route.queryParams.subscribe((params) => {
    //   this.location = params['location'] || '';
    //   this.timings = params['timings'] || '';
    //   this.itemsPerPage = +params['itemsPerPage'] || 5;
    //   this.searchTerm = params['searchTerm'] || '';
    //   this.jobsService.getJobListings().subscribe((jobListings) => {
    //     this.jobListings = jobListings;
    //     const params: any = {
    //       location: this.location,
    //       timings: this.timings,
    //       searchTerm: this.searchTerm,
    //     };
    //     this.filteredJobListings = this.jobsService.filterJobListings(
    //       params,
    //       this.jobListings
    //     );
    //     this.genericSelection.updateOption(
    //       { itemsPerPage: this.itemsPerPage }
    //     );
    //   });
    // });
    this.queryParamsSubscription =
      this.genericSelection.allQueryParams$.subscribe((params) => {
        console.log('Inside job listing', params);
        this.filteredJobListings = this.jobsService.getJobListings(params);
        if (this.paginator) {
          this.filteredJobListings = this.jobsService.paginate(
            this.filteredJobListings,
            this.paginator.pageIndex,
            this.itemsPerPage
          );
        }
      });
  }

  ngAfterViewInit(): void {
    this.paginator?.page.subscribe((event: PageEvent) => {
      this.onPageChange(event);
    });
  }

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  onPageChange(event: PageEvent) {
    this.itemsPerPage = event.pageSize;
    this.genericSelection.updateOption({ itemsPerPage: this.itemsPerPage });
    this.filteredJobListings = this.jobsService.paginate(
      this.filteredJobListings,
      this.paginator.pageIndex,
      this.itemsPerPage
    );
  }

  // onSearch(searchTerm: string) {
  //   this.searchTerm = searchTerm.trim().toLowerCase();
  //   this.genericSelection.updateOption(
  //     { itemsPerPage: this.itemsPerPage },
  //     { searchTerm: this.searchTerm }
  //   );
  //   this.filteredJobListings = this.jobsService.paginate(
  //     this.filteredJobListings,
  //     this.paginator?.pageIndex,
  //     this.itemsPerPage
  //   );
  // }
}
