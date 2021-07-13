import {Component, OnInit, Input} from '@angular/core';
import {FilmsService} from "../films.service";
import {FilmModel} from "../filmModel";





@Component({
  selector: 'app-all-films',
  templateUrl: './all-films.component.html',
  styleUrls: ['./all-films.component.scss']
})


export class AllFilmsComponent implements OnInit {

   isThumbs: boolean = true;


  films: Array<FilmModel> = [];

  constructor(private filmsServ: FilmsService) {
  }

  ngOnInit(): void {
    this.films = this.filmsServ.getAllFilms();
    this.isThumbs = this.filmsServ.getView();
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

  onChangeView(){
    this.isThumbs = !this.isThumbs;
    this.filmsServ.setView(this.isThumbs);
  }




}
