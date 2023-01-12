import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies:any={name:'sasa'};
  userN:string='';
  userR:string='';
  movieID!:number;
  up:string='';
  currIndex!:number;
  reviewForm:FormGroup=new FormGroup({
    userName:new FormControl('',[Validators.required ]),
    userReview:new FormControl('',[Validators.required ])
  });

  reviewCartona:any[];


  imgURL:string="https://image.tmdb.org/t/p/w500";

  constructor(private _ApiService:ApiService,private _ActivatedRoute:ActivatedRoute,private _HttpClient:HttpClient) {
      this.movieID=this._ActivatedRoute.snapshot.params['id'];
      console.log('rtyh',this.movieID);
      if(localStorage.getItem('review')!=null){
        let c:any=localStorage.getItem('review')
        this.reviewCartona=JSON.parse(c);
      }else{
        this.reviewCartona=[];
      }
   }

  ngOnInit(): void {
    this._ApiService.getMovieDetails(this.movieID).subscribe((res)=>{
      this.movies=res;
      console.log("sas",this.movies)
    })

  }
  submitReview(formInfo:FormGroup)
  {
    console.log(formInfo)
  }
  onSubmit(){
    let a=Math.floor(Math.random()*500);

    this.reviewCartona.push(this.reviewForm.value);
    let cartona=JSON.stringify(this.reviewCartona);
    localStorage.setItem('review',cartona);
      this.userN='';
      this.userR='';


  }
  update(index:number){
    this.currIndex=index;
    this.userN=this.reviewCartona[index].userName;
    this.userR=this.reviewCartona[index].userReview;

    this.up="yes"

  }
  delete(index:number){
    this.reviewCartona.splice(index,1);
    let x=JSON.stringify(this.reviewCartona)
    localStorage.setItem('review',x)
    console.log(index);

  }
  updateStatus()
{
  this.onSubmit()
  this.up='';
  this.delete(this.currIndex);
  this.currIndex=-1;
}
}

