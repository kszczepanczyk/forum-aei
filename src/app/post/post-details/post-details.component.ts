import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.post = {} as Post;
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.postService.getPostById(this.id).subscribe((post) => {
          if (Object.keys(post).length === 0) {
            this.router.navigate(['/not-found']);
          }
          this.post = post;
          console.log(this.post)
      });
    });
  }
  
}

