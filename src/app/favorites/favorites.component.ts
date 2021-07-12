import { Component, OnInit } from '@angular/core';
import {FilmsService} from "../films.service";
import {FilmModel} from "../filmModel";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  films: Array<FilmModel> = [];

  constructor(private filmsServ: FilmsService) { }

  ngOnInit(): void {
    this.films = this.filmsServ.getAllFilms();
  }



  favourite(film: any) {
    film.isFavorite = !film.isFavorite
    this.filmsServ.setAllFilms(this.films);
  }

}
