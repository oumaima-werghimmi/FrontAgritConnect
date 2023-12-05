import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCultureComponent } from './ajouter-culture.component';

describe('AjouterCultureComponent', () => {
  let component: AjouterCultureComponent;
  let fixture: ComponentFixture<AjouterCultureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterCultureComponent]
    });
    fixture = TestBed.createComponent(AjouterCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
