import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { TheOneServiceService } from './services/the-one-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'lotr-app';

  constructor(private oneService: TheOneServiceService) {}
  ngOnInit(): void {
  }

}
