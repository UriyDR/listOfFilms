import {Injectable} from '@angular/core';
import {FilmModel} from "./filmModel";
import {of, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class FilmsService {

  data = new Date();

  filmDefault: Array<FilmModel> = [
    {
      id: 0,
      year: 2011,
      name: 'Harry Potter',
      cash: 1000000,
      isFavorite: false,
      date: this.data
    },
    {
      id: 1,
      year: 2008,
      name: 'The Lord of the Rings',
      cash: 2000000,
      isFavorite: false,
      date: this.data
    },
    {
      id: 2,
      name: 'The Green Mile',
      year: 2015,
      cash: 3000000,
      isFavorite: false,
      date: this.data
    }
  ]

  constructor() {
  }



  getAllFilms = () => {
    let data: any = localStorage.getItem('filmDefault');
    let parsed = JSON.parse(data)
    if (parsed.length) {
      return parsed
    } else {
      return this.filmDefault
    }
  }



  strim$ = new Observable (obser => obser.next(this.setMyValueTest()));
  setMyValueTest = () => localStorage.setItem('MyValueTest', JSON.stringify('MyValueTest'));




  setAllFilms = (films: Array<FilmModel>) => localStorage.setItem('filmDefault', JSON.stringify(films));


  getTheme = () => {
    let data: any = localStorage.getItem('theme');
    return JSON.parse(data)
  }
  setTheme = (theme: boolean) => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }

  getView = () => {
    let data: any = localStorage.getItem('view');
    return JSON.parse(data)
  }
  setView = (view: boolean) => {
    localStorage.setItem('view', JSON.stringify(view));
  }
}

