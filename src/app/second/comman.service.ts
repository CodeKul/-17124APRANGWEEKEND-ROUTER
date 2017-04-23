import { Injectable } from '@angular/core';

@Injectable()
export class CommanService {

  private idProfile : string;
  constructor() {

   }

   getIdProfile() : string{
     return this.idProfile;
   }

   setIdProfile(idProfile : string) {
     this.idProfile = idProfile;
   }
}
