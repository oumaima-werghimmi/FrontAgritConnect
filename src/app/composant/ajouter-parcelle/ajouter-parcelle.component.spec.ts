import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterParcelleComponent } from './ajouter-parcelle.component';

describe('AjouterParcelleComponent', () => {
  let component: AjouterParcelleComponent;
  let fixture: ComponentFixture<AjouterParcelleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterParcelleComponent]
    });
    fixture = TestBed.createComponent(AjouterParcelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
