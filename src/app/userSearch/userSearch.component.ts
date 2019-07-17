import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../githubApi.service'
import { from } from 'rxjs';
import { findStaticQueryIds } from '@angular/compiler';

@Component({
  selector: 'app-user-search',
  templateUrl: './userSearch.component.html',
  styleUrls: ['./userSearch.component.css']
})
export class UserSearchComponent implements OnInit {
  findUser: string;
  gitUsers;

  constructor(private GithubApiService: GithubApiService, private route: ActivatedRoute ) { }

  ngOnInit() {
  if (this.route.snapshot.paramMap.get('user') || !!this.findUser) {
      this.findUser = this.route.snapshot.paramMap.get('user');
    }  
  }
  findGitUsers() {
    this.GithubApiService.getGitUsers(this.findUser).subscribe( foundedUser => {
      this.gitUsers = foundedUser.items;
    }  ) 
  }

}
