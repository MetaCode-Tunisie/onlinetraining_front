import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sponsor } from 'src/app/model/Sponsor';
import { SponsorService } from 'src/app/services/sponsor.service';

@Component({
  selector: 'app-updatesponsor',
  templateUrl: './updatesponsor.component.html',
  styleUrls: ['./updatesponsor.component.css']
})
export class UpdatesponsorComponent implements OnInit {
  sponsor : Sponsor = new Sponsor();
  value : any;
  constructor(private sponsorService: SponsorService,private route: ActivatedRoute,private router: Router) { }


  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        this.value = param['idSponsor']
        });
    this.sponsorService.retrieveSponsor(this.value).subscribe(data =>{
      this.sponsor = data
    });
  }


updatesponsor(){
  this.sponsorService.updateSponsor(this.sponsor,this.value).subscribe();
  window.location.href="/sponsors"
    }

}
