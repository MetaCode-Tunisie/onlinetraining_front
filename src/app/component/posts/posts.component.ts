import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/models/Posts';
import { CommentService } from 'src/app/services/comment.service';
import { ForumServiceService } from 'src/app/services/forum-service.service';
import { PostService } from 'src/app/services/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Commentaire } from 'src/app/models/Commentaire';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

  export class PostsComponent  {
    posts: Posts[] = [];
    comments!: Commentaire[];
     // Modifiez le nom de la variable à commentaires
    showCommentSection: boolean = false;
    newComment: Commentaire = new Commentaire(); // Modifiez le type de newComment à Commentaire
    commentForm!: FormGroup;
    showComments: boolean = false
    showCommentPostSection: boolean = false;
    selectedPostIdd!: any;
    
    newPostImage!: File;
    selectedPostIddd: number | null = null;
    newPostImagee: File | null = null;
    selectedForumId!: any;
    idForum: number | null = null;
    selectedPostId: number = 0;
    constructor(
      private postService: PostService,
      private forumService: ForumServiceService,
      private route: ActivatedRoute,
      private commentService: CommentService,
      private fb: FormBuilder
    ) {
      this.commentForm = this.fb.group({
        description: [''],
      });
      
    }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
        const idForum = +params.get('idForum')!;
        this.getPosts(idForum);
      });
      
      this.route.params.subscribe((params) => {
        this.idForum = +params['idForum']; 
      });
      this.route.paramMap.subscribe(params => {
        const idPost = +params.get('idPost')!;
        this.postService.getAllCommentsByPost(idPost).subscribe(comments => {
          this.comments = comments;
        });
      });
      
    
    }
  
    getPosts(idForum: number): void {
      this.forumService.getAllPostsByForum(idForum).subscribe((posts) => {
        this.posts = posts;
      });
    }
  
    likePost(postId: number): void {
      this.postService.likePost(postId).subscribe(() => {
        window.location.reload();
      });
    }
  
    dislikePost(postId: number): void {
      this.postService.dislikePost(postId).subscribe(() => {
        window.location.reload();
      });
    }
  
    toggleCommentSection() {
      this.showCommentSection = !this.showCommentSection;
    }
  
    addComment(postId: number) {
      const comment = this.commentForm.value;
      this.commentService.addComment(comment, postId).subscribe((newComment) => {
        
      });
    }
  
    toggleComments(id : any) {
      
        this.selectedPostId = id; // Stockez l'ID du post sélectionné
        this.loadCommentsForPost(id);
        this.showCommentPostSection = !this.showCommentPostSection;
      
    }
    loadCommentsForPost(postId: number) {
      // Utilisez votre service pour charger les commentaires du post
      this.postService.getAllCommentsByPost(postId).subscribe((comments: Commentaire[]) => {
        // Mettre à jour this.comments avec les commentaires du post sélectionné
        this.comments = comments;
      });
    }
    updatePost( idForum: number, idPost: number) {
      if (this.newPostImage )
      this.postService.updatePost(this.newPostImage, idForum, idPost).subscribe(response => {
        // Vous pouvez gérer la réponse ici, par exemple, afficher un message de succès.
        console.log('Post mis à jour avec succès', response);
      }, error => {
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur.
        console.error('Erreur lors de la mise à jour du post', error);
      });
    }
    
    toggleUpdatePostSection(postId: number) {
      if (this.selectedPostId === postId) {
        this.selectedPostIddd = null;
      } else {
        this.selectedPostId = postId;
      }
    }
    
    onImageSelected(event: any) {
      const files = event.target.files;
      if (files && files.length > 0) {
        this.newPostImage = files[0];
      }
    }
    deletePost(idPost: number) {
      this.postService.deletePost(idPost).subscribe(
        () => {
          console.log('Post supprimé avec succès');
          // Vous pouvez ajouter des logiques supplémentaires ici en cas de succès.
        },
        (error) => {
          console.error('Erreur lors de la suppression du post', error);
        }
      );
    }
  }
