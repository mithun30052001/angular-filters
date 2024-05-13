import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GenericSelectionComponent } from 'src/app/models/generic-selection';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit,OnDestroy {
  @Output() search = new EventEmitter<string>();
  private queryParamsSubscription!: Subscription;
  searchValue: any = '';

  constructor(private genericSelection: GenericSelectionComponent) {}

  ngOnInit() {
    this.queryParamsSubscription = this.genericSelection.allQueryParams$.subscribe((params) => {
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
      this.genericSelection.updateOption({'searchTerm': searchParam.trim()});
    }
    else{
      this.genericSelection.resetOption('searchTerm');
    }
  }
}
