import {Component, OnInit} from '@angular/core';
import {FilmsService} from "../films.service";
import {FilmModel} from "../filmModel";


@Component({
  selector: 'app-all-films',
  templateUrl: './all-films.component.html',
  styleUrls: ['./all-films.component.scss']
})


export class AllFilmsComponent implements OnInit {


  films: Array<FilmModel> = [];

  constructor(private filmsServ: FilmsService) {
  }

  ngOnInit(): void {
    this.films = this.filmsServ.getAllFilms();
  }

  favourite(film: any) {
    film.isFavorite = !film.isFavorite
    this.filmsServ.setAllFilms(this.films);
  }

  deleteFilm(id: any) {

    let index = this.films.findIndex( film => film.id === id)

    this.films.splice(index, 1);
    this.filmsServ.setAllFilms(this.films);
  }


}
