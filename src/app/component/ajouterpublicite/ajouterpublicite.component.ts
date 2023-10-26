import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicite } from 'src/app/model/Publicite';
import { PubliciteService } from 'src/app/services/publicite.service';

@Component({
  selector: 'app-ajouterpublicite',
  templateUrl: './ajouterpublicite.component.html',
  styleUrls: ['./ajouterpublicite.component.css']
})
export class AjouterpubliciteComponent  implements OnInit{
  fileToUpload?: File;
  publicite : Publicite = new Publicite();
  idsponsor =7;
  ngOnInit(): void {
    
  }

  constructor(private router: Router,private route: ActivatedRoute,
    private publiciteService:PubliciteService) {
}



onFileSelected(event: any){
  const inputElement = event.target as HTMLInputElement;
  if (inputElement.files && inputElement.files.length > 0) {
    this.fileToUpload = inputElement.files[0];
  }
  console.log(  this.fileToUpload );
  
}



onSubmit(){
 
  const formData = new FormData();
  if (this.fileToUpload &&this.publicite.description&&this.publicite.prix &&this.idsponsor) {
    formData.append('file', this.fileToUpload);
    formData.append('description', this.publicite.description);
    formData.append('prix', this.publicite.prix.toString());
   
    console.log("Prix :" +this.publicite.prix);
    console.log("Des :" + this.publicite.description);
    console.log("File :" + this.fileToUpload);
    
    
   

  }  

 // console.log(formData);
  
  this.publiciteService.addPublicite(formData,this.idsponsor).subscribe((response)=>{
    alert("publicite Added Successfuly !!");
    this.reloadComponent();
  },(error)=>{
    alert("Error While Adding Product !!");
  })
}
reloadComponent(): void {
  const currentRoute = this.router.url.split('?')[0];
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate([currentRoute]);
  });
}



}
