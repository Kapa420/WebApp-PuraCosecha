import { TestBed } from '@angular/core/testing';

import { ProductoresProductorService } from './productores-productor.service';

describe('ProductoresProductorService', () => {
  let service: ProductoresProductorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoresProductorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
