import { TestBed, inject } from '@angular/core/testing';

import { AuthticationService } from './authtication.service';

describe('AuthticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthticationService]
    });
  });

  it('should be created', inject([AuthticationService], (service: AuthticationService) => {
    expect(service).toBeTruthy();
  }));
});
