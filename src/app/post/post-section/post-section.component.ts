import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.scss']
})
export class PostSectionComponent implements OnInit {
  posts: Post[];
  page: number = 1;
  postsNumber: number;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPostsDb().subscribe(data => {
      this.posts = data;
      this.posts.sort((a, b) => {
        let dateA = new Date(a.date_created);
        let dateB = new Date(b.date_created);
        return dateB.getTime() - dateA.getTime();
      })
      this.postsNumber = this.posts.length;
      console.log(this.posts);
    })
  }


}
