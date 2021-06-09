import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorMainPageComponent } from './director-main-page.component';

describe('DirectorMainPageComponent', () => {
  let component: DirectorMainPageComponent;
  let fixture: ComponentFixture<DirectorMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
