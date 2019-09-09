import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriRequestComponent } from './pri-request.component';

describe('PriRequestComponent', () => {
  let component: PriRequestComponent;
  let fixture: ComponentFixture<PriRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
