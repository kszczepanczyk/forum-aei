import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { CommentService } from 'src/app/comment/comment.service';
import { Comment } from 'src/app/models/comment.model';
import { Post } from '../../models/post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  post: Post;
  id: number;
  commentForm: FormGroup;
  comments: Comment[];
  comments$: BehaviorSubject<Comment[]>;
  comment: Comment;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private commentService: CommentService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.post = {} as Post;
    this.comment = {} as Comment;
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.postService.getPostById(this.id).subscribe((post) => {
        if (Object.keys(post).length === 0) {
          this.router.navigate(['/not-found']);
        }
        this.post = post;
      });
    });

    this.commentService.getAllCommentsForPostId(this.id).subscribe((data) => {
      this.comments = data;
      console.log(data);
    });
    this.commentForm = new FormGroup({
      contentForm: new FormControl('', Validators.required),
    });
    
  }

  onSubmit() {
    if (this.commentForm.value.content !== null) {
      this.comment.content = this.commentForm.value.contentForm;
      this.comment.username = this.authService.currentUser.username;
      this.comment.idPost = this.id;
      this.commentService.addComment(this.comment).subscribe((newComment: Comment) => {
        this.comments = [...this.comments, newComment];
      });
    }
  }
}
 
}


