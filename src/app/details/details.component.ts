import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  myMovie!: any;

  constructor(
    private movieService: MovieService,
    private route : ActivatedRoute,
    ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get("id")!;
    this.movieService.getSingleMovie(id).subscribe(res=>{
      this.myMovie = res;
      console.log(this.myMovie);
    });
    console.log("***********************************************");

  }

}
