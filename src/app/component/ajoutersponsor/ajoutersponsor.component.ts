import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sponsor } from 'src/app/model/Sponsor';
import { SponsorService } from 'src/app/services/sponsor.service';

@Component({
  selector: 'app-ajoutersponsor',
  templateUrl: './ajoutersponsor.component.html',
  styleUrls: ['./ajoutersponsor.component.css']
})
export class AjoutersponsorComponent implements OnInit {
  sponsor : Sponsor = new Sponsor();
  constructor(private sponsorService: SponsorService,private router: Router) { }
  ngOnInit(): void {
    
  }
  ajoutersponsor(sponsorData: Sponsor) {
    console.log(sponsorData);
    this.sponsorService.addSponsor(sponsorData).subscribe(response => {
      console.log('Sponsor ajouté avec succès :', response);
      // Ajoutez ici la gestion de la réponse, par exemple, une redirection ou un message de confirmation.
    });
  }
  

}
