import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../githubApi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './userDetails.component.html',
  styleUrls: ['./userDetails.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails;
  userRepos;

  constructor(private GithubApiServe: GithubApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    const userLogin = this.route.snapshot.paramMap.get('userLogin');
    this.GithubApiServe.getUserLogin(userLogin).subscribe( gitUser => this.userDetails = gitUser);
    this.GithubApiServe.getUserRepos(userLogin).subscribe( repos => this.userRepos = repos);
  }

}
