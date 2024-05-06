import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheOneServiceService } from '../../../../services/the-one-service.service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-searched-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './searched-characters.component.html',
  styleUrl: './searched-characters.component.scss',
})
export class SearchedCharactersComponent {
  characterId: string = '';
  character: any;
  dataReady: boolean = false;
  characterQuote: string = '';

  constructor(
    private route: ActivatedRoute,
    private oneService: TheOneServiceService
  ) {}

  ngOnInit(): void {
    this.characterId = this.route.snapshot.params['id'];
    this.getCharactersById();
    this.getCharacterQuote(this.characterId);
  }

  getCharactersById() {
    this.oneService
      .getCharactersById(this.characterId)
      .pipe(map((res: any) => res.docs))
      .subscribe((data: any) => {
        this.character = data[0];
        this.dataReady = true;
        console.log('character id', data);
      });
  }

  getCharacterQuote(id: string) {
    this.oneService
      .getCharactersQuoteById(id)
      .pipe(
        map((res: any) => res.docs),
        map((quotes: any[]) => quotes.map(({ dialog }) => ({ dialog })))
      )
      .subscribe((quotes) => {
        if (quotes.length) {
          const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
          this.characterQuote = randomQuote.dialog;

          console.log('random', randomQuote);
        }
      });
  }
}
