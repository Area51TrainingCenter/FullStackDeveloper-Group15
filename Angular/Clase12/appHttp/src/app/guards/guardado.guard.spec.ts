import { TestBed, async, inject } from '@angular/core/testing';

import { GuardadoGuard } from './guardado.guard';

describe('GuardadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardadoGuard]
    });
  });

  it('should ...', inject([GuardadoGuard], (guard: GuardadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
