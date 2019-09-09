import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoobjectionComponent } from './noobjection.component';

describe('NoobjectionComponent', () => {
  let component: NoobjectionComponent;
  let fixture: ComponentFixture<NoobjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoobjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoobjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
