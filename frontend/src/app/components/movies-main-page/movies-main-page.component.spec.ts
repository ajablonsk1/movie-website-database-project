import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesMainPageComponent } from './movies-main-page.component';

describe('MoviesMainPageComponent', () => {
  let component: MoviesMainPageComponent;
  let fixture: ComponentFixture<MoviesMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
