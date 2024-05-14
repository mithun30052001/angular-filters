import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { QueryParamsService } from 'src/app/models/query-params.service';

@Component({
  selector: 'sort-box',
  templateUrl: './sort-box.component.html',
  styleUrls: ['./sort-box.component.scss'],
})
export class SortBoxComponent implements OnInit, OnDestroy {
  @Output() sort = new EventEmitter<string>();
  selectedSort: any = '';
  private queryParamsSubscription!: Subscription;

  constructor(private queryParams: QueryParamsService) {}

  ngOnInit(): void {
    this.queryParamsSubscription = this.queryParams.allQueryParams$.subscribe((params) => {
      if ('sort' in params) {
        this.selectedSort = params['sort']
      } else{
        this.selectedSort = 'old';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  toggleSort(sortType: string): void {
    if (this.selectedSort === sortType) {
      this.selectedSort = sortType === 'old' ? 'new' : 'old';
    } else {
      this.selectedSort = sortType;
    }
    this.sort.emit(this.selectedSort);
    this.queryParams.updateOption({ 'sort': this.selectedSort });
  }
}
