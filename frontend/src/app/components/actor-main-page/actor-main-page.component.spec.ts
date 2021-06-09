import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorMainPageComponent } from './actor-main-page.component';

describe('ActorMainPageComponent', () => {
  let component: ActorMainPageComponent;
  let fixture: ComponentFixture<ActorMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
