import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGenericSearchPaginationComponent } from './app-generic-search-pagination.component';

describe('AppGenericSearchPaginationComponent', () => {
  let component: AppGenericSearchPaginationComponent;
  let fixture: ComponentFixture<AppGenericSearchPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppGenericSearchPaginationComponent]
    });
    fixture = TestBed.createComponent(AppGenericSearchPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
