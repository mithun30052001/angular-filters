import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelowMenuComponent } from './below-menu.component';

describe('BelowMenuComponent', () => {
  let component: BelowMenuComponent;
  let fixture: ComponentFixture<BelowMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BelowMenuComponent]
    });
    fixture = TestBed.createComponent(BelowMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
