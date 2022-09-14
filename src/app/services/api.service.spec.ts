import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';

describe('ApiService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
