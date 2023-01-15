import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-newest-posts',
  templateUrl: './newest-posts.component.html',
  styleUrls: ['./newest-posts.component.scss']
})
export class NewestPostsComponent implements OnInit {
  latestPosts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getLatestActivity(3).subscribe(posts => {
      this.latestPosts = posts
    })

  }

}
