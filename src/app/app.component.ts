import { Component, OnInit } from '@angular/core';
import { MovieservicesService } from './services/movieservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'movieapp';
  keys: any;

  constructor(private _service: MovieservicesService) {}

  ngOnInit(): void {
  }
}
