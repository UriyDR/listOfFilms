import { Injectable } from '@angular/core';
import {FilmModel} from "./filmModel";

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

  constructor() {  }


  getAllFilms = () => {
    let data = localStorage.getItem('filmDefault');
    if (data) {
      return JSON.parse(data);
    } else {
      return this.filmDefault;
    }
  }

  setAllFilms = (films: Array<FilmModel>) => localStorage.setItem('filmDefault', JSON.stringify(films));


  // deletItem = () => localStorage.removeItem('filmDefault')


}

