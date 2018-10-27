import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repos } from '../repos';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
