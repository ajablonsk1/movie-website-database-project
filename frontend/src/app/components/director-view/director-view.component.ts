import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Director } from 'src/app/models/director.model';
import { DirectorService } from 'src/app/services/director.service';

@Component({
  selector: 'app-director-view',
  templateUrl: './director-view.component.html',
  styleUrls: ['./director-view.component.css']
})
export class DirectorViewComponent implements OnInit {

  director: Director;
  selectedDirectorId: string;

  constructor(private directorsService: DirectorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if(params.directorId){
        this.selectedDirectorId = params.directorId;
        this.directorsService.getDirectorWithId(params.directorId).subscribe((director: any) => {
          this.director = director;
          this.director.dateOfDeath = this.director.dateOfDeath.substring(1, 10);
          this.director.dateOfBirth = this.director.dateOfBirth.substring(1, 10);
        })
      }
    })
  }

}
