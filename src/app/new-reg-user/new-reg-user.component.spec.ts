import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegUserComponent } from './new-reg-user.component';

describe('NewRegUserComponent', () => {
  let component: NewRegUserComponent;
  let fixture: ComponentFixture<NewRegUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRegUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRegUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
