import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movies/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inputSearch!: string;
  myMovies : Movie[] = [];
  loader : boolean = false;

  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
  }

  clickSearch(){
    if(this.inputSearch.trim() != ""){
      this.loader = true;
      this.myMovies = [];
      let allMovies!: any;
      this.movieService.getMovies(this.inputSearch.trim()).subscribe(resp =>{
         allMovies = resp;
         allMovies.results.forEach((item : any) =>{
          this.myMovies.push(
            {
              id: item.id,
              name: item.title,
              image: item.poster_path,
            }
          )
        })
        this.loader = false;
      })
    } else{
      this.myMovies = [];
    }
  }
}
