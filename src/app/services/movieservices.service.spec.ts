import { TestBed } from '@angular/core/testing';

import { MovieservicesService } from './movieservices.service';

describe('MovieservicesService', () => {
  let service: MovieservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
