import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptageVeloComponent } from './comptage-velo.component';

describe('ArticleComponent', () => {
    let component: ComptageVeloComponent;
    let fixture: ComponentFixture<ComptageVeloComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [ ComptageVeloComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ComptageVeloComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
