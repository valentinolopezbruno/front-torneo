import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioPartidosComponent } from './calendario-partidos.component';

describe('CalendarioPartidosComponent', () => {
  let component: CalendarioPartidosComponent;
  let fixture: ComponentFixture<CalendarioPartidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarioPartidosComponent]
    });
    fixture = TestBed.createComponent(CalendarioPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
