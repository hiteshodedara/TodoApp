import { TestBed } from '@angular/core/testing';

import { UIdataService } from './uidata.service';

describe('UIdataService', () => {
  let service: UIdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UIdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
