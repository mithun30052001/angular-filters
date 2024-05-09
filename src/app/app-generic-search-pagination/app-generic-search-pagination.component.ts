import { Component, Input, OnInit } from '@angular/core';
import { JobsService } from '../services/job.services';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-generic-search-pagination',
  templateUrl: './app-generic-search-pagination.component.html',
  styleUrls: ['./app-generic-search-pagination.component.scss']
})
export class AppGenericSearchPaginationComponent implements OnInit {
  @Input() jobsData: any[] = []; // Input to receive job listings
  filteredJobListings: any[] = []; // Filtered job listings for search
  searchTerm: string = ''; // Search term
  itemsPerPage: number = 5; // Number of items per page
  currentPage: number = 1; // Current page number

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs() {
    this.jobsService.getJobListings().subscribe((data: any[]) => {
      this.jobsData = data;
    });
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
  }

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm.trim().toLowerCase();
    this.filteredJobListings = this.jobsData.filter(job =>
      job.details.toLowerCase().includes(this.searchTerm) || // Add more fields as needed
      job.location.toLowerCase().includes(this.searchTerm)
    );
  }

}