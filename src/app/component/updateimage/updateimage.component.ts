import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicite } from 'src/app/model/Publicite';
import { PubliciteService } from 'src/app/services/publicite.service';

@Component({
  selector: 'app-updateimage',
  templateUrl: './updateimage.component.html',
  styleUrls: ['./updateimage.component.css']
})
export class UpdateimageComponent implements  OnInit {
  publicite : Publicite = new Publicite();
  value : any;
  idsponsor! : number;
  fileToUpload?: File;
  constructor(private publiciteservice: PubliciteService,private route: ActivatedRoute,private router: Router) { }
  onFileSelected(event: any){
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.fileToUpload = inputElement.files[0];
    }
    console.log(  this.fileToUpload );
    
  }

  Image(){

    const formData = new FormData();
    if (this.fileToUpload) {
      formData.append('file', this.fileToUpload);
    }  
    this.publiciteservice.updateImage(formData,this.publicite.idPublicite).subscribe((response)=>{
      console.log(response);
      
      alert("Publicite Image Updated Successfuly !!");
      this.reloadComponent();
    },(error)=>{
      alert("Error While Updating Publicite Image !!");
    })
  }
  reloadComponent(): void {
    const currentRoute = this.router.url.split('?')[0];
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        this.value = param['idPublicite']
        });
    this.publiciteservice.retrievePublicite(this.value).subscribe(data =>{
      console.log(data);
      
      this.publicite = data
    });
  }
}
