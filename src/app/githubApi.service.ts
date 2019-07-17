import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  baseUrl = 'https://api.github.com/'

  constructor(private http: HttpClient) { }

  getGitUsers(user: string): Observable<any>{
    return this.http.get<any>(this.baseUrl + `search/users?q=${user}`)
  }
  getUserLogin(userLogin: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + `users/${userLogin}`);
  }
  getUserRepos(userLogin: string):Observable<any> {
    return this.http.get<any>(this.baseUrl + `users/${userLogin}/repos?sort=updated`)
  }
}
