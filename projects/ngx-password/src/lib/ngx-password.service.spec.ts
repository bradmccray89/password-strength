import { TestBed } from '@angular/core/testing';

import { NgxPasswordService } from './ngx-password.service';

describe('NgxPasswordService', () => {
  let service: NgxPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
