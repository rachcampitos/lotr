import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedCharactersComponent } from './searched-characters.component';

describe('SearchedCharactersComponent', () => {
  let component: SearchedCharactersComponent;
  let fixture: ComponentFixture<SearchedCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchedCharactersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchedCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
