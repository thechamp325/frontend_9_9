import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationletterComponent } from './confirmationletter.component';

describe('ConfirmationletterComponent', () => {
  let component: ConfirmationletterComponent;
  let fixture: ComponentFixture<ConfirmationletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
