import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobs-listing',
  templateUrl: './jobs-listing.component.html',
  styleUrls: ['./jobs-listing.component.scss']
})
export class JobsListingComponent implements OnInit {
  jobListings: any[] = [];
  filteredJobListings: any[] = [];
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.jobListings = [
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Coimbatore', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Hyderabad', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' }
    ];

    this.route.queryParams.subscribe(params => {
      if (params['location']) {
        const targetLocation = params['location'].toLowerCase();
        this.filteredJobListings = this.jobListings.filter(job => job.location.toLowerCase() === targetLocation);
      } else {
        this.filteredJobListings = this.jobListings;
      }
    });
  }
}