import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export class GenericSelectionComponent  {
  options: any[] = [];
  selectedOption: string = '';
  allQueryParams$: BehaviorSubject<object> = new BehaviorSubject<object>({});

  /**
   * Constructor to initialize the class with Router and ActivatedRoute dependencies.
   * @Param router The router service.
   * @Param route The activated route service.
  */
  constructor(protected router: Router,protected route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.allQueryParams$.next(params);
    });
  }
  
  /**
   * Get the selected option value for a given parameter key.
   * @Param paramKey The key for the parameter.
   * @returns The value of the selected option.
  */
  setSelectedOption(paramKey: string): string {
    let selectedOptionValue = '';
    this.route.queryParams.subscribe(params => {
      selectedOptionValue = params[paramKey];
    });
    return selectedOptionValue;
  }
  
  /**
   * Update query parameters based on selected option and search parameters.
   * @Param optionKey The key of the query parameter to be updated.
   * @Param optionValue The selected option.
   * @Param searchParamKey The key of the search parameter (optional).
   * @Param searchParamValue The value of the search parameter (optional).
  */
  updateOption(option: {[key: string]: any}, searchParam?: { [key: string]: string }){
    const queryParams = { ...this.route.snapshot.queryParams,...option };
    if (searchParam) {
      const searchParamKey = Object.keys(searchParam).toString();
      queryParams[searchParamKey] = Object.values(searchParam);
    }
    this.router.navigate([], { queryParams: queryParams,relativeTo:this.route,queryParamsHandling: 'merge' });
  }
}
