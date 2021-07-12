import {Component, OnInit} from '@angular/core';
import {FilmModel} from "../filmModel";
import {FilmsService} from "../films.service";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {Router} from "@angular/router";
import {variable} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formAddFilm = new FormGroup({
    fileImg: new FormControl('', Validators.required),
    nameFilm: new FormControl('', Validators.required),
    year: new FormControl(null, Validators.required),
    cash: new FormControl(null, Validators.required)
  });

  imageBase64: string | any = '';

  films: Array<FilmModel> = [];



  constructor(private filmsServ: FilmsService, private router: Router) {
  }

  ngOnInit(): void {
    this.films = this.filmsServ.getAllFilms();
  }




  addFilm = () => {
    let data = new Date();

    this.films.push({
      id: this.IdRandom(),
      year: this.formAddFilm.get('year')?.value,
      name: this.formAddFilm.get('nameFilm')?.value,
      cash: this.formAddFilm.get('cash')?.value,
      isFavorite: false,
      date: data,
      img: this.imageBase64

    })
    this.filmsServ.setAllFilms(this.films);
    this.router.navigate(['/allFilms', {}]);

  }



  loadBackgroundImage(e: any) {
    let file = e.target.files[0];
    let reader = new FileReader();
    if (file.size > 2097152) {
      alert('Attach file bigger than 2MB');
    } else {
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageBase64 = reader.result;
      };
      reader.onerror = (error) => {
        alert("" + error);
      };

    }
  }


  IdRandom() {
    let result:any,
        randomID: any = Math.random() * 100000;
    this.films.forEach(film => {
      result = film.id === randomID ? this.IdRandom() : randomID;
    })
    return result
  }



}
