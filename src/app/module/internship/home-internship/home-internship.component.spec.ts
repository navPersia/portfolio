import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInternshipComponent } from './home-internship.component';

describe('HomeInternshipComponent', () => {
  let component: HomeInternshipComponent;
  let fixture: ComponentFixture<HomeInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInternshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
