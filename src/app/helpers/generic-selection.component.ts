import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: ''
})
export class GenericSelectionComponent  {
  options: any[] = [];
  selectedOption: string = '';

  constructor(protected router: Router,protected route: ActivatedRoute) { }

  
  updateOption(option: any,queryParamKey: string) {
    const value = option.value;
    const queryParams = { ...this.route.snapshot.queryParams };
    queryParams[queryParamKey] = value;
    this.router.navigate([], { queryParams: queryParams });
  }
}
