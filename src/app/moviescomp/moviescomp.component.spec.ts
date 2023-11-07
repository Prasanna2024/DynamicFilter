import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviescompComponent } from './moviescomp.component';

describe('MoviescompComponent', () => {
  let component: MoviescompComponent;
  let fixture: ComponentFixture<MoviescompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviescompComponent]
    });
    fixture = TestBed.createComponent(MoviescompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
