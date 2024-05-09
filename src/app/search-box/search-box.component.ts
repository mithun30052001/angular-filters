import { Component, Output, EventEmitter } from '@angular/core';
import { GenericSelectionComponent } from 'src/app/models/generic-selection';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  @Output() search = new EventEmitter<string>();

  constructor(private genericSelection: GenericSelectionComponent) { }

  onSearchChange(searchTerm: string) {
    this.search.emit(searchTerm);
    const searchParam = searchTerm.trim();
    if(searchTerm.length > 0){
      this.genericSelection.updateOption({'searchTerm': searchParam});
    }
    else{
      this.genericSelection.resetOption('searchTerm');
    }
  }
}
