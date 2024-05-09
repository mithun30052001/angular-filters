import { Component, Output, EventEmitter } from '@angular/core';
import { GenericSelectionComponent } from 'src/app/models/generic-selection';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  @Output() search = new EventEmitter<string>();

  constructor(private gs: GenericSelectionComponent) {}

  onSearchChange(event: any) {
    const searchTerm = event?.target?.value;
    if (searchTerm) {
      this.search.emit(searchTerm.trim());
      this.gs.updateOption({ searchTerm: searchTerm.trim() });
    }
  }
}
