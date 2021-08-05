import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFunctionsComponent } from './ui-functions.component';

describe('UiFunctionsComponent', () => {
  let component: UiFunctionsComponent;
  let fixture: ComponentFixture<UiFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
