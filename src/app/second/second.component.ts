import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit,OnDestroy {

  idUrl : string;
  subParam : Subscription;

  constructor(
    private activeRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    //this.idUrl = this.activeRoute.snapshot.params['id'];
    this.subParam = this.activeRoute.params.subscribe(params => this.idUrl = params['id']);
  }
  ngOnDestroy() {
    this.subParam.unsubscribe();
  }
}
