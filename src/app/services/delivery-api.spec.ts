import { TestBed } from '@angular/core/testing';

import { DeliveryApi } from './delivery-api';

describe('DeliveryApi', () => {
  let service: DeliveryApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
