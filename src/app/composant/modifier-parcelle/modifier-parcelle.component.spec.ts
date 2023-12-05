import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierParcelleComponent } from './modifier-parcelle.component';

describe('ModifierParcelleComponent', () => {
  let component: ModifierParcelleComponent;
  let fixture: ComponentFixture<ModifierParcelleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierParcelleComponent]
    });
    fixture = TestBed.createComponent(ModifierParcelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
