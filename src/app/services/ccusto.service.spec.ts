import { TestBed } from '@angular/core/testing';

import { CcustoService } from './ccusto.service';

describe('CcustoService', () => {
  let service: CcustoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcustoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
