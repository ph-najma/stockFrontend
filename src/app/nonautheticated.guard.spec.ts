import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { nonautheticatedGuard } from './nonautheticated.guard';

describe('nonautheticatedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nonautheticatedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
