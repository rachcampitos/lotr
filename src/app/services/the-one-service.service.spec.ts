import { TestBed } from '@angular/core/testing';

import { TheOneServiceService } from './the-one-service.service';

describe('TheOneServiceService', () => {
  let service: TheOneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheOneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
