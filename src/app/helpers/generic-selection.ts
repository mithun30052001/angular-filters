import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export class GenericSelectionComponent  {
  options: any[] = [];
  selectedOption: string = '';
  allQueryParams$: BehaviorSubject<object> = new BehaviorSubject<object>({});
  constructor(protected router: Router,protected route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.allQueryParams$.next(params);
    });
  }

  setSelectedOption(paramKey: string): string {
    let selectedOptionValue = '';
    this.route.queryParams.subscribe(params => {
      selectedOptionValue = params[paramKey];
    });
    return selectedOptionValue;
  }
  
  updateOption(option: any,queryParamKey: string,searchParamKey?: string, searchParamValue?: any) {
    const value = option.value;
    const queryParams = { ...this.route.snapshot.queryParams };
    queryParams[queryParamKey] = value;
    if (searchParamKey) {
      queryParams[searchParamKey] = searchParamValue;
    }
    this.router.navigate([], { queryParams: queryParams,relativeTo:this.route,queryParamsHandling: 'merge' });
  }
}
