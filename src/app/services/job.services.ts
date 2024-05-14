import { Injectable } from '@angular/core';
import { QueryParams } from '../interfaces/queryParams.interface';
import { QueryParamsService } from '../models/query-params.service';
import { PaginatedListingsResult } from '../interfaces/paginatedListings.interface';

@Injectable({
  providedIn: 'root',
})

export class JobsService {
  itemsPerPage:number = 5;
  startIndex:number = 0;

  get data() {
    return [
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
        timePreference: 'Night Shift',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
        timePreference: 'Day Shift',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
        timePreference: 'Day Shift',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
        timePreference: 'Day Shift',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Coimbatore',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Hyderabad',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Lucknow',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Lucknow',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Lucknow',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Lucknow',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Lucknow',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Lucknow',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Lucknow',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Lucknow',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Lucknow',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Lucknow',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Lucknow',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Lucknow',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Lucknow',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Lucknow',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Lucknow',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Hyderbad',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Experienced',
        location: 'Bengaluru',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate with 2+ years experience, No Backlogs.',
        type: 'Part time',
        experience: '2+ years',
        date: '20 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'US',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Chennai',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2025 to 2050, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2023',
      },
      {
        title: 'Non Voice - Expereienced',
        location: 'Lucknow',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2025, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2024',
      },
      {
        title: 'Non Voice - Fresher',
        location: 'Lucknow',
        details:
          'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2025, No Backlogs.',
        type: 'Full time',
        experience: 'Fresher',
        date: '18 Jan 2025',
      },
    ];
  }
  constructor(private queryParams: QueryParamsService) {}

  getJobListings(params: QueryParams): any[] {
    console.log('params going to API:> ', params);
    let filteredListings = [...this.data];

    if (params['location']) {
      filteredListings = filteredListings.filter(
        (job) => job.location.toLowerCase() === String(params['location']).toLowerCase()
      );
    }

    if (params['timings']) {
      if (params['timings'] === 'Not given') {
        filteredListings = filteredListings.filter(
          (job) => !job.timePreference
        );
      } else {
        filteredListings = filteredListings.filter(
          (job) =>
            job.timePreference?.toLowerCase() === String(params['timings']).toLowerCase()
        );
      }
    }

    if (params['searchTerm']) {
      const searchTerm = params['searchTerm'].toString().toLowerCase();
      filteredListings = filteredListings.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm) ||
          job.details.toLowerCase().includes(searchTerm) ||
          job.experience.toLowerCase().includes(searchTerm) ||
          job.location.toLowerCase().includes(searchTerm)
      );
    }

    if (params['sort'] && params['sort'] === 'new') {
      filteredListings = filteredListings.reverse();
    }

    return filteredListings;
  }

  getPaginatedListings(params: QueryParams):  PaginatedListingsResult{
    if (params['itemsPerPage']) {
      this.itemsPerPage = params['itemsPerPage'] ? parseInt(params['itemsPerPage'] as string, 10) : this.itemsPerPage;
    }

    if(params['pageIndex']){
      const pageIndex = params['pageIndex'] ? parseInt(params['pageIndex'] as string, 10) : 0;
      this.startIndex = pageIndex * this.itemsPerPage;
    }

    const paginatedListings = this.getJobListings(params).slice(this.startIndex, this.startIndex + this.itemsPerPage);
    const itemsPerPage = this.itemsPerPage;

    if (paginatedListings.length === 0 && this.startIndex > 0) {
      this.queryParams.updateOption({ pageIndex: 0 });
    }

    return {
      paginatedListings,
      itemsPerPage
    };
  }
}
