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


}
