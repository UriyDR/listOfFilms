import {Component, OnInit} from '@angular/core';
import {FilmModel} from "../filmModel";
import {FilmsService} from "../films.service";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formAddFilm = new FormGroup({
    nameFilm : new FormControl(''),
    year : new FormControl(''),
    cash : new FormControl('')
  });

  films: Array<FilmModel> = [];

  formFilm = {
    year: null,
    name: '',
    cash: null
  };


  constructor(private filmsServ: FilmsService, private router: Router) {
  }

  ngOnInit(): void {
    this.films = this.filmsServ.getAllFilms();
  }

  addFilm = () => {
    console.log(1);
    // let data = new Date();
    //
    // this.films.push({
    //   id: 1,
    //   year: 2008,
    //   name: this.formFilm.name,
    //   cash: 2000000,
    //   isFavorite: false,
    //   date: data,
    //   img: ''

    // })
    // this.filmsServ.setAllFilms(this.films)
    this.router.navigate(['/allFilms', {}]);
  }

}
