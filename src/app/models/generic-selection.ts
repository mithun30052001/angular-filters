import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenericSelectionComponent {
  options: any[] = [];
  selectedOption: string = '';
  allQueryParams$: BehaviorSubject<object> = new BehaviorSubject<object>({});

  /**
   * Constructor to initialize the class with Router and ActivatedRoute dependencies.
   * @param router The router service.
   * @param route The activated route service.
   */

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.allQueryParams$.next(params);
    });
  }

  /**
   * Get the selected option value for a given parameter key.
   * @param paramKey The key for the parameter.
   * @returns The value of the selected option.
   */

  setSelectedOption(paramKey: string): string {
    let selectedOptionValue = '';
    this.route.queryParams.subscribe((params) => {
      selectedOptionValue = params[paramKey];
    });
    return selectedOptionValue;
  }

  /**
   * Update query parameters based on selected option and search parameters.
   * @param optionKey The key of the query parameter to be updated.
   * @param optionValue The selected option.
   * @param searchParamKey The key of the search parameter (optional).
   * @param searchParamValue The value of the search parameter (optional).
   */

  updateOption(option: { [key: string]: any }) {
    const queryParams = { ...this.route.snapshot.queryParams, ...option };
    // if (searchParam) {
    // const searchParamKey = Object.keys(searchParam).toString();
    // queryParams[searchParamKey] = Object.values(searchParam);
    // }
    this.router.navigate([], {
      queryParams: queryParams,
      relativeTo: this.route,
      queryParamsHandling: 'merge',
    });
  }
}
