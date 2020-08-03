import { TestBed, inject } from '@angular/core/testing';

import { AppartementsService } from './appartements.service';

describe('AppartementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppartementsService]
    });
  });

  it('should be created', inject([AppartementsService], (service: AppartementsService) => {
    expect(service).toBeTruthy();
  }));
});
