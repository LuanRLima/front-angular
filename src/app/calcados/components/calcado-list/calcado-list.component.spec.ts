import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcadoListComponent } from './calcado-list.component';

describe('CalcadoListComponent', () => {
  let component: CalcadoListComponent;
  let fixture: ComponentFixture<CalcadoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcadoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
