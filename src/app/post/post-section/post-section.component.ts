import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Post } from '../../models/post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.scss']
})
export class PostSectionComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    })
  }

  OnPageChange(event: PageEvent){
    
  }

}
