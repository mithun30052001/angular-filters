import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  constructor() { }

  getJobListings(): Observable<any[]> {
    const jobListings = [
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023', timePreference: 'Night Shift' },
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023', timePreference: 'Day Shift' },
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023', timePreference: 'Day Shift' },
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },{ title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023', timePreference: 'Day Shift'},
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Coimbatore', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Hyderabad', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Hyderbad', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      {
        title: 'Non Voice - Experienced',
        location: 'Bengaluru',
        details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate with 2+ years experience, No Backlogs.',
        type: 'Part time',
        experience: '2+ years',
        date: '20 Jan 2023',
      },
      { title: 'Non Voice - Fresher', location: 'US', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2022, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' } ,
      { title: 'Non Voice - Fresher', location: 'Chennai', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2025 to 2050, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2023' },
      { title: 'Non Voice - Expereienced', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2025, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2024' },
      { title: 'Non Voice - Fresher', location: 'Lucknow', details: 'Non Voice Process, Good Typing Skills, Good Written and Spoken English, Logical Reasoning and Analytical Thinking. Any Arts & Science Graduate except Life Science Graduates, Pass out - 2018 to 2025, No Backlogs.', type: 'Full time', experience: 'Fresher', date: '18 Jan 2025' },

    ];
    return of(jobListings);
  }

  filterJobListings(params: any, jobListings: any[]): any[] {
    let filteredListings = [...jobListings];

    if (params.location) {
      filteredListings = filteredListings.filter(job => job.location.toLowerCase() === params.location.toLowerCase());
    }

    if (params.timings) {
      if (params.timings === 'Not given') {
        filteredListings = filteredListings.filter(job => !job.timePreference);
      } else {
        filteredListings = filteredListings.filter(job => job.timePreference?.toLowerCase() === params.timings.toLowerCase());
      }
    }

    if (params.searchTerm) {
      const searchTerm = params.searchTerm.toLowerCase();
      filteredListings = filteredListings.filter(job =>
        job.title.toLowerCase().includes(searchTerm) ||
        job.details.toLowerCase().includes(searchTerm) ||
        job.experience.toLowerCase().includes(searchTerm) ||
        job.location.toLowerCase().includes(searchTerm)
      );
    }

    return filteredListings;
  }

  paginate(data: any[], pageIndex: number, pageSize: number){
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  }
}
