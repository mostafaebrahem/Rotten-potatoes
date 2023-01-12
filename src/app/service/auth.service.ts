import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(user:string,pass:string):number{
    if(user==="mostafa"&&pass==="123"){

      return 200;

    }else{
            return 403
    }

  }

}
