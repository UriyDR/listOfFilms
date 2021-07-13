import { Component, OnInit } from '@angular/core';
import {FilmsService} from "../films.service";
import {FilmModel} from "../filmModel";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  isThumbs: boolean = true;
  films: Array<FilmModel> = [];

  constructor(private filmsServ: FilmsService) { }

  ngOnInit(): void {
    this.films = this.filmsServ.getAllFilms();
    this.isThumbs = this.filmsServ.getView();
  }



  favourite(film: any) {
    film.isFavorite = !film.isFavorite
    this.filmsServ.setAllFilms(this.films);
  }

  onChangeView(){
    this.isThumbs = !this.isThumbs;
    this.filmsServ.setView(this.isThumbs);
  }

}
