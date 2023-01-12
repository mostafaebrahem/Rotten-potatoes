import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data!:any[];
  people!:any[];
  currentRate = 3.14;

  imgURL:string="https://image.tmdb.org/t/p/w500";
  constructor(private _ApiService:ApiService,private _Router:Router) { }

  ngOnInit(): void {
    this._ApiService.getMovies().subscribe((response)=>{
        this.data=response.results;
        console.log(this.data);

    })
    this._ApiService.getPeople().subscribe((response)=>{
      this.people= response.results.splice(0,11);
     console.log(this.people);

    })


  }
  details(id:number){
    this._Router.navigate(['movie',id])
  }
}
