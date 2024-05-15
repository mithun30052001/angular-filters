import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { QueryParams } from '../interfaces/queryParams.interface';

@Injectable({
  providedIn: 'root',
})
export class QueryParamsService {
  allQueryParams$: BehaviorSubject<QueryParams> = new BehaviorSubject<QueryParams>({});

  /**
   * Constructor to initialize the class with Router and ActivatedRoute dependencies.
   * @param router The router service.
   * @param route The activated route service.
   */

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.allQueryParams$.next(params);
      if(!params || Object.keys(params).length === 0) {
        //Setting Default Query params
        this.updateOption({itemsPerPage:10, pageIndex: 0})
      }
    });
  }

  /**
   * Get the selected option value for a given parameter key.
   * @param paramKey The key for the parameter.
   * @returns The value of the selected option.
   */

  getQueryParam(paramKey: string): string {
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

  updateOption(option: QueryParams) {
    const queryParams = { ...this.route.snapshot.queryParams, ...option };
    this.router.navigate([], {
      queryParams: queryParams,
      relativeTo: this.route,
      queryParamsHandling: 'merge',
    });
  }

  /**
   * Reset a particular query paramter
   * @param paramKey The key of the query parameter to be deleted..
   */
  resetOption(paramKey: string){
    const queryParams = { ...this.route.snapshot.queryParams };
    delete queryParams[paramKey];
    this.router.navigate([], { queryParams: queryParams });
  }
}
