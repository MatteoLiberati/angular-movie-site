import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';




@Injectable({
  providedIn: 'root'
})
export class MovieService{

  getMovies(movie : string) : Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?method=GET&api_key=15e81334e2ca97397a0f81eb07fd3adf&query=${movie}`);
  }

  getSingleMovie (id : number) : Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=15e81334e2ca97397a0f81eb07fd3adf`);
  }

  constructor(private http: HttpClient) { }
}
