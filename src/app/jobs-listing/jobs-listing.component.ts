import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs-listing',
  templateUrl: './jobs-listing.component.html',
  styleUrls: ['./jobs-listing.component.scss']
})
export class JobsListingComponent {
  jobListings = [
    { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
    { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
    { title: 'Non Voice - Fresher', location: 'Coimbatore', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
    { title: 'Non Voice - Fresher', location: 'Hyderbad', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' }
  ];
}
