import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { QueryParamsService } from 'src/app/models/query-params.service';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit,OnDestroy {
  @Output() search = new EventEmitter<string>();
  private queryParamsSubscription!: Subscription;
  searchValue: any = '';

  constructor(private queryParams: QueryParamsService) {}

  ngOnInit() {
    this.queryParamsSubscription = this.queryParams.allQueryParams$.subscribe((params) => {
      if ('searchTerm' in params) {
        this.searchValue = params['searchTerm']
      }else{
        this.searchValue = '';
      }
    });
  }
  
  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  onSearchChange(event: any) {
    const searchParam = event?.target?.value;
    if(searchParam){
      this.search.emit(searchParam.trim());
      this.queryParams.updateOption({'searchTerm': searchParam.trim()});
    }
    else{
      this.queryParams.resetOption('searchTerm');
    }
  }
}
