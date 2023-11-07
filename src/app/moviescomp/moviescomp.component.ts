import { Component } from '@angular/core';

@Component({
  selector: 'app-moviescomp',
  templateUrl: './moviescomp.component.html',
  styleUrls: ['./moviescomp.component.scss']
})
export class MoviescompComponent {
  totalboxoffice:number;
  filtevent:any;
  getCollection(col:any)
  {
    this.totalboxoffice = col;
    console.log(this.totalboxoffice+"from movies comp")
  }


}
