import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudbarComponent } from './cloudbar.component';

describe('CloudbarComponent', () => {
  let component: CloudbarComponent;
  let fixture: ComponentFixture<CloudbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudbarComponent]
    });
    fixture = TestBed.createComponent(CloudbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
