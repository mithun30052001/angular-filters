import { Component, Input } from '@angular/core';

@Component({
  selector: 'filter-consumer-container',
  templateUrl: './filter-consumer-container.component.html',
  styleUrls: ['./filter-consumer-container.component.scss']
})
export class FilterConsumerContainerComponent {
  @Input() totalItems!: number;
  @Input() itemsPerPage: number = 5;

}
