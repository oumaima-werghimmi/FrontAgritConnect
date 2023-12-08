import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierRessourceComponent } from './modifier-ressource.component';

describe('ModifierRessourceComponent', () => {
  let component: ModifierRessourceComponent;
  let fixture: ComponentFixture<ModifierRessourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierRessourceComponent]
    });
    fixture = TestBed.createComponent(ModifierRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
