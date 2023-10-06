import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoIndividualComponent } from './equipo-individual.component';

describe('EquipoIndividualComponent', () => {
  let component: EquipoIndividualComponent;
  let fixture: ComponentFixture<EquipoIndividualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipoIndividualComponent]
    });
    fixture = TestBed.createComponent(EquipoIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
