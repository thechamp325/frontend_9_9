import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriHomeComponent } from './pri-home.component';

describe('PriHomeComponent', () => {
  let component: PriHomeComponent;
  let fixture: ComponentFixture<PriHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
