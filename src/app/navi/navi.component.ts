import {Component, OnInit} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import { FilmsService } from "../films.service";

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})


export class NaviComponent implements OnInit {

  @Output() changeTheme = new EventEmitter<boolean>();


  isDarkTheme = false;



  constructor(private themeService: FilmsService) {

  }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.getTheme();

  }

  onChangeTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.setTheme(this.isDarkTheme);
    this.changeTheme.emit(this.isDarkTheme)
  }




}
