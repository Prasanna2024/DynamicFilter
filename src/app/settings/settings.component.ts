import { Component, OnInit, Input } from '@angular/core';
import { MovieservicesService } from '../services/movieservices.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  keys: string[] = [];
  input: any[] = [];
  inpvalu: any[] = [];
  subkeys: any[] = [];

  constructor(private _service: MovieservicesService) {}

  ngOnInit(): void {
    this._service.getValues().subscribe({
      next: (dta) => {
        dta.input.subscribe({
          next: (d) => {
            this.input = d;
          },
          error: (er) => {
            console.log(er);
          }
        });
        dta.selector.subscribe({
          next: (d) => {
            this.inpvalu = d;
          },
          error: (er) => {
            console.log(er);
          }
        });
        dta.sub.subscribe({
          next: (d) => {
            this.subkeys = d;
          }
        });
      }
    });
  }

  changeOption(indx: number) {
    this._service.setselector(this.inpvalu);
  }

  Addit() {
    this.input.push("");
    this.inpvalu.push("");
  }
  ipchange(n:HTMLInputElement,indx:number)
  {
    console.log(n.value,indx);
    this.input[indx] = n.value;
  }
  deleteFilter(index:number){
    this.input.splice(index, 1);
    this.inpvalu.splice(index,1);
    console.log(this.input);
    console.log(this.inpvalu);
                
}
}
