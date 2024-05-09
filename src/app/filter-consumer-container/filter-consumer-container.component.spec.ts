import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterConsumerContainerComponent } from './filter-consumer-container.component';

describe('FilterConsumerContainerComponent', () => {
  let component: FilterConsumerContainerComponent;
  let fixture: ComponentFixture<FilterConsumerContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterConsumerContainerComponent]
    });
    fixture = TestBed.createComponent(FilterConsumerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
