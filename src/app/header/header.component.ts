import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private _Router:Router,private _AuthService:AuthService) { }

  ngOnInit(): void {


  }
  logout(){
    localStorage.removeItem('userData')
    this._Router.navigate(['log']);
  }
}
