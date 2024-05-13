import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GenericSelectionComponent } from 'src/app/models/generic-selection';

@Component({
  selector: 'sort-box',
  templateUrl: './sort-box.component.html',
  styleUrls: ['./sort-box.component.scss'],
})
export class SortBoxComponent implements OnInit,OnDestroy {
  @Output() sort = new EventEmitter<string>();
  selectedSort: any = '';
  private queryParamsSubscription!: Subscription;

  constructor(private genericSelection: GenericSelectionComponent) {}
  
  ngOnInit(): void {
    this.queryParamsSubscription = this.genericSelection.allQueryParams$.subscribe((params) => {
      if ('sort' in params) {
        this.selectedSort = params['sort']
      } else{
        this.selectedSort = '';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  onSortChange(event: any) {
    const sortParam = event?.target?.value;
    if (sortParam) {
      this.sort.emit(sortParam);
      this.genericSelection.updateOption({'sort': sortParam });
    } else {
      this.genericSelection.resetOption('sort');
    }
  }
}
