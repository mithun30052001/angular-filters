import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @Output() search = new EventEmitter<string>();

  constructor() { }

  onSearchChange(searchTerm: string) {
    this.search.emit(searchTerm);
  }
}
