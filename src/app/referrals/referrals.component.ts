import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/job.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss']
})
export class ReferralsComponent implements OnInit {
  jobsData: any[] = [];
  filteredJobsData: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 5;

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs() {
    this.jobsService.getJobListings().subscribe((data: any[]) => {
      this.jobsData = data;
      this.filteredJobsData = data;
    });
  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex + 1;
  }

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm.trim().toLowerCase();
    this.filteredJobsData = this.jobsData.filter(job =>
      job.details.toLowerCase().includes(this.searchTerm) ||
      job.location.toLowerCase().includes(this.searchTerm) ||
      job.type.toLowerCase().includes(this.searchTerm)
    );
    this.currentPage = 1;
  }
}
