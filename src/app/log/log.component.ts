import { Token } from '@angular/compiler';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  username:string="";
  password:string="";
  errMsg:string="";

  constructor(private _AuthService:AuthService,private _Router:Router) { }

  ngOnInit(): void {
  }
  submit(){
    if(this.username.trim().length===0){
      this.errMsg="User name failed";
    }else if(this.password.trim().length===0){
      this.errMsg="Password failed";
    }else{
      this.errMsg="";
      let res:number= this._AuthService.login(this.username,this.password);
        if(res===200){
          localStorage.setItem('userData',this.username)
          this._Router.navigate(['home']);
        }else if(res===403){
              this.errMsg="Invalid Auth "
        }
      }
    }

  }

