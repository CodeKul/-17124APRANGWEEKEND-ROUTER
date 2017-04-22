import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  onBtnClick() {
    this.router.navigate(['first']);
  }

  onSecondBtnClick() {
    this.router.navigate(['second','100'],{queryParams:{myName:'android'}});
  }
}
