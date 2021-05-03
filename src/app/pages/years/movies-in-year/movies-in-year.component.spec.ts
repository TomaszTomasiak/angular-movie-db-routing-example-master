import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesInYearComponent } from './movies-in-year.component';

describe('MoviesInYearComponent', () => {
  let component: MoviesInYearComponent;
  let fixture: ComponentFixture<MoviesInYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesInYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesInYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
