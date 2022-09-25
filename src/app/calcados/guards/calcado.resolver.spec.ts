import { TestBed } from '@angular/core/testing';

import { CalcadoResolver } from './calcado.resolver';

describe('CalcadoResolver', () => {
  let resolver: CalcadoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CalcadoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
