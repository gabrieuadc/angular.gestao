import { TestBed } from '@angular/core/testing';

import { FluxocService } from './fluxoc.service';

describe('FluxocService', () => {
  let service: FluxocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FluxocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
