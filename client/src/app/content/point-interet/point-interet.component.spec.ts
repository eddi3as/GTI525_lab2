import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointInteretComponent } from './point-interet.component';

describe('PointInteretComponent', () => {
  let component: PointInteretComponent;
  let fixture: ComponentFixture<PointInteretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointInteretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointInteretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
