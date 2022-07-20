import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontainesABoireComponent } from './fontaines-a-boire.component';

describe('FontainesABoireComponent', () => {
  let component: FontainesABoireComponent;
  let fixture: ComponentFixture<FontainesABoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontainesABoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontainesABoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
