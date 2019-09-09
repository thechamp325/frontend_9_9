import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpadrelComponent } from './expadrel.component';

describe('ExpadrelComponent', () => {
  let component: ExpadrelComponent;
  let fixture: ComponentFixture<ExpadrelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpadrelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpadrelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
