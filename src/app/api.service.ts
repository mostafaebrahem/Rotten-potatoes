import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  id!:number;
  constructor(private _HttpClient:HttpClient) {

  }
  getMovies():Observable<any>{
     return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=8e18c244e55590b07e9e72ba21547008")
  }
  getPeople():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/person/popular?api_key=8e18c244e55590b07e9e72ba21547008')
  }
  getMovieDetails(id:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8e18c244e55590b07e9e72ba21547008`)
  }
}
