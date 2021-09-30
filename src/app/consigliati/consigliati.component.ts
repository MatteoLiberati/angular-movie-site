import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movies/movie';

@Component({
  selector: 'app-consigliati',
  templateUrl: './consigliati.component.html',
  styleUrls: ['./consigliati.component.scss']
})
export class ConsigliatiComponent implements OnInit {

  specialMovies : Movie[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    let randomChar = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);
    let allMovies!: any;
    this.movieService.getMovies(randomChar).subscribe((items) =>{
      allMovies = items;
      allMovies.results.forEach((movie : any) =>{
        this.specialMovies.push(
          {
            id: movie.id,
            name: movie.title,
            image: movie.poster_path,
          }
        );
      })
      this.specialMovies = this.specialMovies.slice(0,3);
    })
  }

}
