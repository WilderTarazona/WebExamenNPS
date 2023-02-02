import { TestBed } from '@angular/core/testing';

import { VotacionResolver } from './votacion.resolver';

describe('VotacionResolver', () => {
  let resolver: VotacionResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(VotacionResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
