import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiverequestComponent } from './liverequest.component';

describe('LiverequestComponent', () => {
  let component: LiverequestComponent;
  let fixture: ComponentFixture<LiverequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiverequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiverequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
