import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieservicesService {
  private objkeys = new BehaviorSubject<string[]>([]);
  public objkeys$: Observable<string[]> = this.objkeys.asObservable();
  private subkeys = new BehaviorSubject<string[]>([]);
  public subkeys$: Observable<string[]> = this.subkeys.asObservable();
  keys: string[];
  inp1: string[] = ["id", "Movie Title", "Director", "State"];
  inp2: string[] = ["id", "Movie Title", "Director", "State"];
  private input = new BehaviorSubject<string[]>(this.inp1);
  public input$: Observable<string[]> = this.input.asObservable();
  private selector = new BehaviorSubject<string[]>(this.inp2);
  public selector$: Observable<string[]> = this.selector.asObservable();
  constructor(private http: HttpClient) {
    this.getMovieData().subscribe({
      next: (val) => {
        this.objkeys.next(val['movies']);
        this.keys = val['movies'][0];
        this.keys = Object.keys(this.keys);
        this.changeit(this.keys)
        // console.log(this.subkeys.value,this.objkeys.value,this.keys,this.input.value,this.selector.value);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
  getMovieData(): Observable<any> {
    return this.http.get('https://www.mockachino.com/43f2c1f2-709a-44/movie-details');
  }
  getValues(): Observable<any> {
    const values = {
      "input": this.input$,
      "selector": this.selector$,
      "sub": this.subkeys
    };
    console.log(this.subkeys);

    return of(values);
  }
  setselector(d: any) {
    console.log(d);
    this.changeit(d);
    console.log(this.input.value);
    
  }
  changeit(keys:any)
  {
    const d1 = this.keys.filter((dta) => !this.selector.value.includes(dta))
    this.subkeys.next(d1);
  }
}


