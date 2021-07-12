import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  themeBln: boolean = true;

  changeTheme (){
    this.themeBln = !this.themeBln;
  }


  constructor() { }
}
