

import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FilmsService} from "../films.service";
import {FilmModel} from "../filmModel";
import {of} from "rxjs";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

export interface Element {
  name: string;
  year: number;
  cash: number;
  date: number;
}

class Dessert {
}

@Component({
  selector: 'app-all-films',
  templateUrl: './all-films.component.html',
  styleUrls: ['./all-films.component.scss']
})


export class AllFilmsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort | undefined;


  displayedColumns: string[] = ['img', 'name', 'year', 'cash', 'date'];
  listOfFilm = new MatTableDataSource<FilmModel>([]);


  isThumbs: boolean = true;
  searchStr = '';
  strim: any;


  // sortedData: Dessert[] = [];

  sortArray: any = [
    {
      title: 'Sort by name',
      name: 'name',
      asc: true
    },
    {
      title: 'Sort by year',
      name: 'year',
      asc: true
    },
    {
      title: 'Sort by date',
      name: 'date',
      asc: true
    },
  ]

  valueStr:string = '';


  films: Array<FilmModel> = [];

  public desserts: any;



  constructor(private filmsServ: FilmsService) {
  }



  ngOnInit(): void {
    this.films = this.filmsServ.getAllFilms();
    this.isThumbs = this.filmsServ.getView();
    this.strim = this.filmsServ.strim$;
    this.listOfFilm = new MatTableDataSource<FilmModel>(this.filmsServ.getAllFilms());
    // this.sortedData = this.listOfFilm.slice();
  }

  ngAfterViewInit() {
    this.sort && (this.listOfFilm.sort = this.sort);
  }



  clk() {
    setTimeout(() => {
      this.strim.subscribe();
    }, 1000)
  }

  favourite(film: any) {
    film.isFavorite = !film.isFavorite
    this.filmsServ.setAllFilms(this.films);
  }

  deleteFilm(id: any) {
    let index = this.films.findIndex(film => film.id === id);
    this.films.splice(index, 1);
    this.filmsServ.setAllFilms(this.films);
  }

  onChangeView() {
    this.isThumbs = !this.isThumbs;
    this.filmsServ.setView(this.isThumbs);
  }

  changeSort(colonNYD: any) {
    colonNYD.asc = !colonNYD.asc;
    this.valueStr = colonNYD;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listOfFilm.filter = filterValue.trim().toLowerCase();
  }


}




