import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPointInteretComponent } from './ajout-point-interet.component';

describe('AjoutPointInteretComponent', () => {
  let component: AjoutPointInteretComponent;
  let fixture: ComponentFixture<AjoutPointInteretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPointInteretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPointInteretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
