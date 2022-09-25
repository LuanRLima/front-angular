import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcadoFormComponent } from './calcado-form.component';

describe('CalcadoFormComponent', () => {
  let component: CalcadoFormComponent;
  let fixture: ComponentFixture<CalcadoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcadoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
