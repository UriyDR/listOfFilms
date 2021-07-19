import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {FilmsService} from "./films.service";
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';



import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NaviComponent} from './navi/navi.component';
import {FormComponent} from './form/form.component';
import {AllFilmsComponent} from './all-films/all-films.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NumberPipe} from './number.pipe';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { MatSliderModule } from '@angular/material/slider';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MatTableModule} from '@angular/material/table';
import { TableTestComponent } from './table-test/table-test.component';
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';

const appRoutes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'allFilms', component: AllFilmsComponent},
  {path: 'tableTest', component: TableTestComponent},
  {path: 'favorites', component: FavoritesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    FormComponent,
    AllFilmsComponent,
    FavoritesComponent,
    NumberPipe,
    SearchPipe,
    SortPipe,
    TableTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatBadgeModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
