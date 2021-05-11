import { TestBed } from '@angular/core/testing';

import { GeradorTwitterService } from './gerador-twitter.service';

describe('GeradorTwitterService', () => {
  let service: GeradorTwitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeradorTwitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
