import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.scss']
})
export class PostSectionComponent implements OnInit {
  testUser: User = new User(1,"mail","token","username","imagepath");
  posts: Post[] = [
    new Post("slug","title","description","body","12.12","13.12",12,false,this.testUser,"fizyka"),
    new Post("slug","title","description","body","12.12","13.12",12,false,this.testUser,"fizyka"),
    new Post("slug","title","description","body","12.12","13.12",12,false,this.testUser,"fizyka")
  ]

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPost();
  }

}
