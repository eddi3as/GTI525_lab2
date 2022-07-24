import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparationVeloComponent } from './reparation-velo.component';

describe('ReparationVeloComponent', () => {
  let component: ReparationVeloComponent;
  let fixture: ComponentFixture<ReparationVeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparationVeloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparationVeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
