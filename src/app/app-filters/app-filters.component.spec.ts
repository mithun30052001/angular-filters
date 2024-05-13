import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFiltersComponent } from './app-filters.component';

describe('AppFiltersComponent', () => {
  let component: AppFiltersComponent;
  let fixture: ComponentFixture<AppFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppFiltersComponent]
    });
    fixture = TestBed.createComponent(AppFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
