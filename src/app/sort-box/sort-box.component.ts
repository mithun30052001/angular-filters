import { Component, Output, EventEmitter } from '@angular/core';
import { GenericSelectionComponent } from 'src/app/models/generic-selection';

@Component({
  selector: 'sort-box',
  templateUrl: './sort-box.component.html',
  styleUrls: ['./sort-box.component.scss'],
})
export class SortBoxComponent {
  @Output() sort = new EventEmitter<string>();

  constructor(private genericSelection: GenericSelectionComponent) {}

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
