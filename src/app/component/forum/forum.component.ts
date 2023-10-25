import { Component } from '@angular/core';
import { Forum } from 'src/app/models/Forum';
import { ForumServiceService } from 'src/app/services/forum-service.service';
import { PostService } from 'src/app/services/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  forums: Forum[] = [];
  forum: any = {
    description: '',
    title: ''
  };
  idForum!: number; 
  image : any;
  showAddSection: boolean = false;
  showAddPost: boolean = false;
  forumForms: FormGroup[] = [];
  forumss!: any[]; // Assurez-vous que le type de données correspond à vos objets de forum
 
  selectedForumId!: any;
  newPostImage!: any;
  constructor(private forumService: ForumServiceService, private postService : PostService) {}

  ngOnInit(): void {
    this.getForums();
  }
  getForums(): void {
    this.forumService.getAllForums().subscribe((forums) => {
      this.forums = forums;
    });
  }
  addForum(forum: any) {
    this.forumService.addForum(forum).subscribe((response) => {
      // Réinitialiser le formulaire ou effectuer toute autre action nécessaire
      this.forum = {}; // Réinitialisez le modèle de formulaire
      this.showAddSection = false; // Masquer la section après avoir ajouté le forum
      this.reload();
    });
  }
  toggleAddSection() {
    this.showAddSection = !this.showAddSection; 
  }
 
  addPost() {
    if (this.newPostImage && this.selectedForumId) {
      this.postService.addPost(this.newPostImage, this.selectedForumId).subscribe((response) => {
        // Gérer la réponse, peut-être réinitialiser le formulaire
        this.selectedForumId = null;
        this.newPostImage = null;
        alert("the post added successfully");
      });
    }
  }
  reload(){
    window.location.reload();
  }
  onImageSelected(event: any) {
    this.newPostImage = event.target.files[0];
  }
  toggleAddPostSection(forumId: number) {
    if (this.selectedForumId === forumId) {
      this.selectedForumId = null;
    } else {
      this.selectedForumId = forumId;
    }
  }
  deleteForum(idForum: number) {
    this.forumService.deleteForum(idForum).subscribe(
      () => {
        console.log('Forum supprimé avec succès');
        alert("forum deleted successfully");
        window.location.reload();
        // Vous pouvez ajouter des logiques supplémentaires ici en cas de succès.
      },
      (error) => {
        console.error('Erreur lors de la suppression du forum', error);
      }
    );
  }
}
