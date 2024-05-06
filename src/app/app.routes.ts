import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CharactersComponent } from './components/characters/characters.component';
import { MoviesComponent } from './components/movies/movies.component';
import { BooksComponent } from './components/books/books.component';
import { SearchedCharactersComponent } from './components/characters/components/searched-characters/searched-characters.component';

export const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'books', component: BooksComponent },
  { path: 'character-details/:id', component: SearchedCharactersComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'landing-page' },
];
