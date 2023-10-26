import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sponsor } from 'src/app/model/Sponsor';
import { SponsorService } from 'src/app/services/sponsor.service';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit{

  sponsor :Sponsor =new Sponsor();
  constructor(private sponsorservice : SponsorService,private router: Router){}
  Listsponsor! :any;
  Sname! :any;
  Lieu! :any;
  ngOnInit(): void {
    this.afficherlistesponsor();


  }
  afficherlistesponsor(){
    this.sponsorservice.retrieveAllSponsors().subscribe(
      (respense)=>{
        this.Listsponsor=respense;
        console.log(respense)
      }

    );
  }



  troisPremiersSponsors(){
    this.sponsorservice.troisPremiersSponsors().subscribe(
      (respense)=>{
        this.Listsponsor=respense;
        console.log(respense)
      }

    );
  }



  deleteSponsor(idSponsor : number){
    console.log(idSponsor); // add this line
    this.sponsorservice.deleteSponsor(idSponsor).subscribe();
    this.afficherlistesponsor();
    alert("sponsor Deleted Successfuly !!");
    this.reloadComponent();
  }

  reloadComponent(): void {
    const currentRoute = this.router.url.split('?')[0];
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
  }






}
