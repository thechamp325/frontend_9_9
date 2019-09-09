import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodComponent } from './hod.component';

describe('HodComponent', () => {
  let component: HodComponent;
  let fixture: ComponentFixture<HodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
