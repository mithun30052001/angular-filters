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
  
  updateOption(option: {[key: string]: any}, searchParam?: { [key: string]: string }){
    const queryParams = { ...this.route.snapshot.queryParams,...option };
    if (searchParam) {
      const searchParamKey = Object.keys(searchParam).toString();
      queryParams[searchParamKey] = Object.values(searchParam);
    }
    this.router.navigate([], { queryParams: queryParams,relativeTo:this.route,queryParamsHandling: 'merge' });
  }
}
