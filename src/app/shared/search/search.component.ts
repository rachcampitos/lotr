import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CharacterDataSearch } from '../../interfaces/characterSearchData.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  @Input() data: CharacterDataSearch[] | undefined;

  characters: CharacterDataSearch[] | undefined;
  filteredCharacters: CharacterDataSearch[] | undefined;
  searchQuery: string = '';

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.characters = this.data;
    this.filteredCharacters = this.characters;
    console.log('search', this.data);
  }

  filterCharacters(): void {
    if (!this.searchQuery) {
      this.filteredCharacters = []; // Clear the filtered list if search query is empty
      return;
    }
    this.filteredCharacters = this.characters
      ?.filter((character: any) =>
        character.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
      .slice(0, 10); // Limit the number of characters displayed to 10
  }

  showFullList(): void {
    this.filteredCharacters = this.characters;
  }

  selectCharacter(character: any): void {
    this.router.navigate(['/character-details', character._id]);
  }
}
