import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TheOneServiceService {
  constructor(private http: HttpClient) {}

  get headers() {
    return {
      headers: {
        Authorization: 'Bearer qtuzKuV2S32rItUu_DKY',
      },
    };
  }

  getCharacters() {
    return this.http.get('https://the-one-api.dev/v2/character', this.headers);
  }

  getCharactersById(id: string) {
    return this.http.get(
      `https://the-one-api.dev/v2/character/${id}`,
      this.headers
    );
  }

  getCharactersQuoteById(id: string) {
    return this.http.get(
      `https://the-one-api.dev/v2/character/${id}/quote`,
      this.headers
    );
  }

  getMovies() {
    return this.http.get('https://the-one-api.dev/v2/movie', this.headers);
  }

  getMoviesById(id: string) {
    return this.http.get(
      `https://the-one-api.dev/v2/movie/${id}`,
      this.headers
    );
  }

  getMovieQuotesById(id: string) {
    return this.http.get(
      `https://the-one-api.dev/v2/movie/${id}/quote`,
      this.headers
    );
  }

  getBooks() {
    return this.http.get(`https://the-one-api.dev/v2/book`, this.headers);
  }

  getBookById(id: string) {
    return this.http.get(
      `https://the-one-api.dev/v2/book/${id}/chapter`,
      this.headers
    );
  }
}
