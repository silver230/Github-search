import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageService } from '../service/landing-page.service';
import { User } from '../user';
import { Repos } from '../repos';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  providers: [ LandingPageService],
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

public username = '';
repos:Repos;
user:User;

  constructor( private LandingPageService:LandingPageService, public repositoryService:LandingPageService)  { }

  ngOnInit() {
    this.LandingPageService.getLandingPageInfo(this.username);
    this.user = this.LandingPageService.user;

    this.repositoryService.getLandingPageRepo(this.username);
    this.repos = this.repositoryService.repos;
  }

}
