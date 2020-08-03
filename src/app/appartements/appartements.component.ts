import { Component, OnInit } from '@angular/core';

// import { Hero } from '../hero';
import { AppartementsService } from './services/appartements.service';
import { Appartements } from './services/appartements';

@Component({
  selector: 'appartements',
  templateUrl: './appartements.component.html',
  styleUrls: ['./appartements.component.css']
})
export class AppartementsComponent implements OnInit {
  appartements: Appartements[];
  title = 'Tour of Heroes';
  constructor(private appartementsService: AppartementsService) { 
    
  }

  ngOnInit() {
    this.getAppartements();
  }

  getAppartements(): void {
    this.appartementsService.getAppartements()
    .subscribe((appartements) => {
    console.log('appartements', appartements)
      this.appartements = appartements
    
    });
  }

  delete (hero): void {
    // alert('asasas')
    console.log('hero', hero)
  }


}
