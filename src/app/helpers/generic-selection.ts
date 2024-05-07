import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export class GenericSelectionComponent  {
  options: any[] = [];
  selectedOption: string = '';

  constructor(protected router: Router,protected route: ActivatedRoute) { }

  setSelectedOption(paramKey: string): string {
    let selectedOptionValue = '';
    this.route.queryParams.subscribe(params => {
      selectedOptionValue = params[paramKey];
    });
    return selectedOptionValue;
  }
  
  resetFilter(paramKey: string) {
    const queryParams = { ...this.route.snapshot.queryParams };
    delete queryParams[paramKey];
    this.router.navigate([], { queryParams: queryParams });
  }
  
  updateOption(option: any,queryParamKey: string) {
    const value = option.value;
    const queryParams = { ...this.route.snapshot.queryParams };
    queryParams[queryParamKey] = value;
    this.router.navigate([], { queryParams: queryParams,relativeTo:this.route,queryParamsHandling: 'merge' });
  }
}
