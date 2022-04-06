import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquafunComponent } from './aquafun.component';

describe('AquafunComponent', () => {
  let component: AquafunComponent;
  let fixture: ComponentFixture<AquafunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquafunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquafunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
