import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit,OnDestroy {

  idUrl : string;
  queMyName : string;
  subParam : Subscription;
  subQueryParam : Subscription;

  constructor(
    private router : Router,
    private activeRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    //this.idUrl = this.activeRoute.snapshot.params['id'];
    this.subParam = this.activeRoute.params.subscribe(params => this.idUrl = params['id']);
    this.subQueryParam = this.router.routerState.root.queryParams.subscribe(qParams => this.queMyName = qParams['myName']);
  }
  ngOnDestroy() {
    this.subParam.unsubscribe();
    this.subQueryParam.unsubscribe();
  }
}
