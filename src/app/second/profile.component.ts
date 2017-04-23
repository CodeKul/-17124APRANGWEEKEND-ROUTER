import { CommanService } from './comman.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <p>
      profile Works! {{idProfile}}
    </p>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {
  
  idProfile : string;
  constructor(
    private comman : CommanService
  ) { }

  ngOnInit() {
    this.idProfile = this.comman.getIdProfile();
  }
}
