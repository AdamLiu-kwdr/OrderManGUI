import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiOrderDeleteComponent } from './ui-order-delete.component';

describe('UiOrderDeleteComponent', () => {
  let component: UiOrderDeleteComponent;
  let fixture: ComponentFixture<UiOrderDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiOrderDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiOrderDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
