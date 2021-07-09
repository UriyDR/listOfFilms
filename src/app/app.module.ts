import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {FilmsService} from "./films.service";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NaviComponent} from './navi/navi.component';
import {FormComponent} from './form/form.component';
import {AllFilmsComponent} from './all-films/all-films.component';
import {FavoritesComponent} from './favorites/favorites.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'allFilms', component: AllFilmsComponent},
  {path: 'favorites', component: FavoritesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    FormComponent,
    AllFilmsComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
