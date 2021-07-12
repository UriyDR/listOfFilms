import {Component, OnInit} from '@angular/core';
import {SharedService} from "./shared.service";
import {FilmsService} from "./films.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'films';



  constructor(private sharedServ: SharedService) { }




}
