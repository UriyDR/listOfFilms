import {Component, OnInit} from '@angular/core';


import {FilmsService} from "./films.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'films';
  isViewChange:boolean=false;
  isDarkTheme = false;

  constructor(private themeService : FilmsService) {
    this.isDarkTheme = this.themeService.getTheme();
  }

  changeTheme(ev: boolean) {
    this.isDarkTheme = ev;
  }

  changeView(ev: boolean){
    this.isViewChange = ev;
  }

}
