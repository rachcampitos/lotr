import { Component, OnInit } from '@angular/core';
import { TheOneServiceService } from '../../services/the-one-service.service';
import { map } from 'rxjs';
import {
  trigger,
  style,
  animate,
  transition,
  AnimationEvent,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  animations: [
    trigger('textAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
    trigger('textAnimation2', [
      transition(':enter', [
        style({ opacity: 0, height: '0px', overflow: 'hidden' }),
        animate('500ms ease-out', style({ opacity: 1, height: '*' })),
      ]),
    ]),
  ],
})
export class LandingPageComponent implements OnInit {
  showContent = false;

  constructor(private oneService: TheOneServiceService) {}

  ngOnInit(): void {
    this.getCharacters();
    this.getMovies();
    this.getBooks();
    this.getBooksById();
  }

  /* getCharacters() {
    this.oneService
      .getCharacters()
      .pipe(map((res: any) => {
        return res.docs
      }),map((characters: any[])=>characters.map(({name, _id})=>({name, _id}))))
      .subscribe((res) => {
        console.log(res);
      });
  } */
  getCharacters() {
    this.oneService
      .getCharacters()
      .pipe(
        map((res: any) => {
          return res.docs;
        })
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  getMovies() {
    this.oneService
      .getMovies()
      .pipe(map((res: any) => res.docs))
      .subscribe((res) => {
        console.log('quotes', res);
      });
  }

  getBooks() {
    this.oneService
      .getBooks()
      .pipe(map((res: any) => res.docs))
      .subscribe((res) => {
        console.log('books', res);
      });
  }
  getBooksById() {
    this.oneService
      .getBookById('5cf58080b53e011a64671584')
      .pipe(map((res: any) => res.docs))
      .subscribe((res) => {
        console.log('book by id', res);
      });
  }

  onAnimationEnd(event: AnimationEvent) {
    console.log('event', event);

    if (event.fromState === 'void') {
      setTimeout(() => {
        this.showContent = true;
      }, 2000);
    }
  }

  showCharacters() {}

  showMovies() {}

  showBooks() {}
}
