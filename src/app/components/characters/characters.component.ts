import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import {
  trigger,
  transition,
  style,
  animate,
  AnimationEvent,
  state,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../../shared/search/search.component';
import { TheOneServiceService } from '../../services/the-one-service.service';
import { map } from 'rxjs';
import { CharacterDataSearch } from '../../interfaces/characterSearchData.interface';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterModule, SearchComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
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
    trigger('fadeOutButton1', [
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateY(-20px)', // Move up by 20px when hidden
        })
      ),
      transition('visible => hidden', [
        animate('0.5s ease-out'), // Smooth transition when button disappears
      ]),
      transition('hidden => visible', [
        animate('0.5s ease-in'), // Smooth transition when button reappears
      ]),
    ]),
    trigger('fadeOutButton2', [
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateY(-20px)', // Move up by 20px when hidden
        })
      ),
      transition('visible => hidden', [
        animate('0.5s ease-out'), // Smooth transition when button disappears
      ]),
      transition('hidden => visible', [
        animate('0.5s ease-in'), // Smooth transition when button reappears
      ]),
    ]),
  ],
})
export class CharactersComponent implements OnInit {
  button1State: string = 'visible';
  button2State: string = 'visible';
  showContent = false;
  showCharacterSearch: boolean = false;

  charactersData: CharacterDataSearch[] | undefined;

  constructor(private oneService: TheOneServiceService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.oneService
      .getCharacters()
      .pipe(
        map((res: any) => {
          return res.docs;
        }),
        map((characters: any[]) =>
          characters.map(({ name, _id }) => ({ name, _id }))
        )
      )
      .subscribe((res: CharacterDataSearch[]) => {
        this.charactersData = res;
        console.log('res from characters', this.charactersData);
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

  toggleAnimation(buttonNumber: number) {
    if (buttonNumber === 1) {
      this.button1State =
        this.button1State === 'visible' ? 'hidden' : 'visible';
      this.showCharacterSearch = !this.showCharacterSearch;
    } else if (buttonNumber === 2) {
      this.button2State =
        this.button2State === 'visible' ? 'hidden' : 'visible';
    }
  }
}
