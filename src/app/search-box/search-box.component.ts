import { Component, Output, EventEmitter } from '@angular/core';
import { GenericSelectionComponent } from 'src/app/models/generic-selection';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  @Output() search = new EventEmitter<string>();

  constructor(private genericSelection: GenericSelectionComponent) {}

  onSearchChange(event: any) {
    console.log(event);
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
