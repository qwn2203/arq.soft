import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DataApiService } from './data-api.service';

describe('DataApiService', () => {
  let service: DataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [RouterTestingModule, HttpClientModule]
    });
    service = TestBed.inject(DataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
