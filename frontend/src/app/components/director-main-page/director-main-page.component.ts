import { Component, OnInit } from '@angular/core';
import { Director } from 'src/app/models/director.model';
import { DirectorService } from 'src/app/services/director.service';

@Component({
  selector: 'app-director-main-page',
  templateUrl: './director-main-page.component.html',
  styleUrls: ['./director-main-page.component.css']
})
export class DirectorMainPageComponent implements OnInit {

  directors: Director[];

  constructor(private directorService: DirectorService) { }

  ngOnInit(): void {
    this.directorService.getDirectors().subscribe((directors: any) => {
      this.directors = directors;
    })
  }

}
