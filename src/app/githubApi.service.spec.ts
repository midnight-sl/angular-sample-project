import { TestBed } from '@angular/core/testing';

import { GithubApiService } from './githubApi.service';

describe('GithubApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubApiService = TestBed.get(GithubApiService);
    expect(service).toBeTruthy();
  });
});
