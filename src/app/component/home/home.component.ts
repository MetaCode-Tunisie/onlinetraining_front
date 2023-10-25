import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/Model/Formation';
import { FormationService } from '../services/formation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  idcategorie !: number;
  file !: File;
  NomFormation !: string;
  prixx !: number;
  duree !: number;
  showAddSection: boolean = false;
ngOnInit(): void {
  this.afficherlisteformation();
  
  
}
imagesList = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
formation: Formation =new Formation();
constructor(private formationService :FormationService ,private router: Router){}
Listformation! :any;
nomFormation! :string;
prix ! :number;
afficherlisteformation(){
    this.formationService.displayFormation().subscribe(
      (respense)=>{
        this.Listformation=respense;
        console.log(respense)
      }

    );
  }
  onFileSelected(event : any): void {
    this.file = event.target.files[0];
  }
  ajouterFormation(): void {
    this.formationService.ajouterFormation(1, this.file, this.NomFormation, this.prix, this.duree)
      .subscribe(response => {
        // Gérez la réponse de votre service ici, par exemple, affichez un message de réussite
        console.log('Formation ajoutée avec succès', response);
      }, error => {
        // Gérez les erreurs ici
        console.error('Erreur lors de l\'ajout de la formation', error);
      });
  }
  toggleAddSection() {
    this.showAddSection = !this.showAddSection; 
  }
  deleteFormation(idformation : number){
    console.log(idformation); // add this line
    this.formationService.deleteFormation(idformation).subscribe();
    alert("formation Deleted Successfuly !!");
    this.reloadComponent();
  }
  
  reloadComponent(): void {
    const currentRoute = this.router.url.split('?')[0];
    this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
}}
