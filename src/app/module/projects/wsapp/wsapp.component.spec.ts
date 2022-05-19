import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsappComponent } from './wsapp.component';

describe('WsappComponent', () => {
  let component: WsappComponent;
  let fixture: ComponentFixture<WsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WsappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
