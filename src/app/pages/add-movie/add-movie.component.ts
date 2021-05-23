import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  model: Partial<Movie> = {};
  categories: string[] = [];
  years: string[] = [];
  
  constructor(public http: HttpService) { }

  ngOnInit(): void {
    this.http.getCategories().subscribe(categories => this.categories = categories);
    this.http.getYears().subscribe(years => this.years = years);
  }

  send() {
    console.log(this.model);
  }
}
