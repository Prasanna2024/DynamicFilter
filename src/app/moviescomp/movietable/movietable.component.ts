import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MovieservicesService } from 'src/app/services/movieservices.service';
import { FormBuilder } from '@angular/forms';
import { MatSort } from '@angular/material/sort';

interface MovieCol {
  id: number;
  MovieTitle: string;
  Genre: string;
  ReleaseYear: number;
  Director: string;
  Rating: number;
  State: string;
  District: string;
  Taluk: string;
  Collections: number;
}

@Component({
  selector: 'app-movietable',
  templateUrl: './movietable.component.html',
  styleUrls: ['./movietable.component.scss']
})
export class MovietableComponent implements OnInit {
  input: any[] = [];
  subkeys: any[] = [];
  MovieData: MovieCol[];
  totalboxoffice: number = 0
  displayedColumns: string[] = ['id', 'MovieTitle', 'Genre', 'ReleaseYear', 'Director', 'Rating', 'State', 'District', 'Taluk', 'Collections'];
  dataSource: MatTableDataSource<MovieCol>;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private _service: MovieservicesService, private formBuilder: FormBuilder) {
    this.dataSource = new MatTableDataSource<MovieCol>([]);
    console.log(this.MovieData);
    this._service.getMovieData().subscribe({
      next: (val) => {
        this.MovieData = val['movies'];
        this.dataSource.data = this.MovieData;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        val['movies'].map((data:any) => {
          this.totalboxoffice += data['Box Office Collections (in Crores)']
        })
        console.log(this.totalboxoffice);
        this.newItemEvent.emit(this.totalboxoffice);

      }
    })

  }
  @Output() newItemEvent = new EventEmitter<number>();
  addNewItem(value: number) {
    this.newItemEvent.emit(value);
  }
  inputArray: [] = []
  filterArray: [] = []
  ngOnInit() {
    this._service.getValues().subscribe({
      next: (dta) => {
        dta.selector.subscribe({
          next: (d) => {
            this.inputArray = d;
          },
          error: (er) => {
            console.log(er);
          }
        });
      }
    })
    this.getBoxoffice()
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getDropdown(value: string): string[] {
    const options = this.MovieData.map((dta) => dta[value])
    const optionSet = new Set(options)
    return [...optionSet]
  }
  applyFilter(value: string | number) {
    const filterValue = value;
    if (typeof value == "string") {
      this.dataSource.filter = (filterValue as string).trim().toLowerCase();
    }
    if (typeof value == "number") {
      this.dataSource.filter = filterValue.toString()
    }

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.getBoxoffice()

  }
  getBoxoffice() {
    this.totalboxoffice = 0
    if (this.dataSource) {
      this.dataSource.filteredData.map((data: any) => {
        this.totalboxoffice += data['Box Office Collections (in Crores)']
      })
      this.addNewItem(this.totalboxoffice)
    }
  }

}
